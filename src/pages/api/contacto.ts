/**
 * Recibe el formulario de contacto y lo envía por SMTP (Zoho Mail) al
 * correo comercial. Corre en el servidor: las credenciales viven en
 * variables de entorno del hosting y nunca llegan al navegador.
 *
 * Variables de entorno que espera (en Netlify o en un .env local):
 *
 *   SMTP_HOST         smtp.zoho.com  (si la cuenta Zoho es de la región
 *                     europea, smtp.zoho.eu)
 *   SMTP_PORT         465
 *   SMTP_USER         cuenta Zoho completa que envía (ej. web@lagorithme.com)
 *   SMTP_PASS         contraseña de APLICACIÓN de Zoho (no la de la cuenta;
 *                     se genera en Zoho → Seguridad → App Passwords y
 *                     requiere tener 2FA activo)
 *   CONTACTO_DESTINO  dtorradoc@lagorithme.com
 */
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const datos = await request.formData();

  /* Honeypot: el campo invisible del formulario. Un humano no lo ve; si
     viene relleno, es un bot. Se responde igual que un éxito para no
     darle pistas. */
  if (String(datos.get('bot-field') ?? '') !== '') {
    return redirect('/gracias', 303);
  }

  const nombre = String(datos.get('nombre') ?? '').trim();
  const correo = String(datos.get('correo') ?? '').trim();
  const necesidad = String(datos.get('necesidad') ?? '').trim();
  const mensaje = String(datos.get('mensaje') ?? '').trim();

  if (!nombre || !correo) {
    return new Response('Name or email is missing.', { status: 400 });
  }

  const transporte = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.zoho.com',
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporte.sendMail({
      /* Desde la propia cuenta Zoho autenticada: enviar "como" otra
         dirección rompería SPF/DKIM y acabaría en spam. */
      from: `"Web lagorithme" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACTO_DESTINO ?? 'dtorradoc@lagorithme.com',
      replyTo: `"${nombre}" <${correo}>`,
      subject: `[Web] ${necesidad || 'Contact'} — ${nombre}`,
      text: [
        `Name: ${nombre}`,
        `Email: ${correo}`,
        `Need: ${necesidad || '(not specified)'}`,
        '',
        mensaje || '(no message)',
      ].join('\n'),
    });
  } catch (error) {
    console.error('Fallo el envío del formulario de contacto:', error);
    return new Response(
      "We couldn't send your message. Write to us directly at hola@lagorithme.com.",
      { status: 502 },
    );
  }

  /* 303: el navegador pasa del POST a un GET limpio hacia /gracias. */
  return redirect('/gracias', 303);
};
