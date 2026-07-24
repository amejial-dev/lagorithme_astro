/*
  Diccionario de textos de la interfaz. Claves en inglés (estándar del
  código); los valores existen en español (por defecto) e inglés. Todo
  string de UI del sitio se resuelve desde aquí con usarTraducciones().

  El contenido estructurado (tarjetas, artículos, clientes, pasos) vive en
  los archivos de src/datos, con la misma forma { es: [...], en: [...] }.
*/
export const idiomas = ['es', 'en'];
export const idiomaPorDefecto = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.clients': 'Clientes',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    'header.cta': 'Hablemos',
    'header.openMenu': 'Abrir menú',
    'header.mainNav': 'Navegación principal',
    'header.mobileNav': 'Navegación móvil',
    'header.langAria': 'Cambiar idioma a inglés',
    'header.langLabel': 'EN',

    'footer.tagline':
      'Desarrollo de software, automatización e inteligencia artificial para organizaciones en Colombia y Latinoamérica.',
    'footer.navigation': 'Navegación',
    'footer.resources': 'Recursos',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.rights': 'Todos los derechos reservados.',

    'meta.default':
      'lagorithme — desarrollo de software, automatización de procesos e inteligencia artificial para organizaciones en Colombia y Latinoamérica.',

    'title.home': 'Inicio',
    'title.services': 'Servicios',
    'title.about': 'Nosotros',
    'title.clients': 'Clientes',
    'title.blog': 'Blog',
    'title.contact': 'Contacto',
    'title.thanks': 'Gracias',

    'desc.services': 'Desarrollo a la medida, automatización, inteligencia artificial y analítica de datos.',
    'desc.about': 'Quiénes somos, qué nos mueve y los valores con los que construimos software en lagorithme.',
    'desc.clients': 'Las organizaciones que ya trabajan con lagorithme.',
    'desc.blog': 'Novedades y artículos de lagorithme.',
    'desc.contact': 'Hablemos de tu proyecto: escríbenos y te respondemos.',
    'desc.thanks': 'Recibimos tu mensaje. Te contactaremos muy pronto.',

    'home.hero.title': 'El futuro de tu organización se programa hoy.',
    'home.hero.subtitle':
      'Impulsamos la transformación digital de empresas en Colombia y Latinoamérica mediante automatización de procesos e inteligencia artificial.',
    'home.hero.cta': 'Iniciar transformación digital',
    'home.hero.note': 'Sector público y privado · Desarrollo a la medida',

    'home.method.label': 'Así trabajamos',

    'home.block1.eyebrow': 'Desarrollo a la medida',
    'home.block1.title': 'Software construido sobre tu operación, no sobre una plantilla.',
    'home.block1.body':
      'Levantamos tus procesos reales —con sus excepciones— y desarrollamos la solución que encaja con ellos, lista para crecer cuando la organización lo haga.',
    'home.block1.cta': 'Ver servicios',

    'home.block2.eyebrow': 'Automatización de procesos',
    'home.block2.title': 'Las tareas repetitivas dejan de consumir el día de tu equipo.',
    'home.block2.body':
      'Automatizamos flujos operativos y administrativos para que las horas se vayan en decidir, no en copiar datos de un sistema a otro.',
    'home.block2.cta': 'Cómo funciona',

    'home.section1.title': 'Tres frentes, una misma operación',
    'home.section1.subtitle':
      'Desarrollo, automatización e inteligencia artificial trabajando sobre el mismo sistema.',

    'home.block3.eyebrow': 'Inteligencia artificial',
    'home.block3.title': 'IA dentro de tu organización y dentro del software que ya usas.',
    'home.block3.body':
      'No hace falta empezar de cero: integramos capacidades de inteligencia artificial en los sistemas que tu equipo ya conoce y utiliza todos los días.',
    'home.block3.cta': 'Descubrir',

    'home.section2.title': 'Y todo lo que sostiene la operación',
    'home.section2.subtitle':
      'Analítica, datos, cumplimiento e integraciones con lo que ya tienes montado.',

    'home.block4.eyebrow': 'Colombia y Latinoamérica',
    'home.block4.title': 'Pensamos en grande desde el primer código.',
    'home.block4.body':
      'Lo que hoy resuelve un área mañana sostiene la empresa completa. Por eso construimos sobre infraestructura robusta desde el día uno.',
    'home.block4.cta': 'Conocer lagorithme',

    'home.block5.title': 'Aliados estratégicos en el crecimiento de nuestros clientes.',
    'home.block5.body':
      'Software hospitalario, observatorios de datos ambientales, plataformas a la medida: acompañamos cada proyecto con herramientas que evolucionan junto a la organización.',
    'home.block5.cta': 'Ver clientes',

    'home.final.title': 'El futuro de tu organización se programa hoy.',
    'home.final.subtitle': 'Cuéntanos qué proceso te está frenando y te decimos por dónde empezar.',
    'home.final.cta': 'Iniciar transformación digital',

    'final.secondary': 'Hablemos de tu proyecto',

    'services.hero.eyebrow': 'Servicios',
    'services.hero.title': 'Tecnología que se adapta a tu operación, no al revés.',
    'services.hero.subtitle':
      'Desarrollo a la medida, automatización de procesos, inteligencia artificial y analítica de datos para organizaciones públicas y privadas.',
    'services.hero.cta': 'Hablemos de tu proyecto',
    'services.intro1.title': 'Un solo aliado para toda la transformación',
    'services.intro1.subtitle':
      'Del primer diagnóstico al software funcionando y evolucionando en tu operación.',
    'services.intro2.eyebrow': 'Servicios',
    'services.intro2.title': 'Lo que hacemos por ti',
    'services.intro2.subtitle':
      'Seis frentes que se combinan según lo que tu organización necesite resolver.',
    'services.quote': '"Acompañamos el crecimiento de nuestros clientes con herramientas que evolucionan junto a ellos."',
    'services.intro3.title': 'Cómo trabajamos',
    'services.intro3.subtitle':
      'Entregamos por partes, para que el valor llegue antes del cierre del proyecto.',

    'about.hero.eyebrow': 'Nosotros',
    'about.hero.title': 'Aliados estratégicos, no proveedores de turno.',
    'about.hero.subtitle':
      'Combinamos infraestructura robusta, inteligencia artificial y experiencia técnica para ofrecer productos digitales que se adaptan a cada entorno y necesidad.',
    'about.hero.cta': 'Ver con quién trabajamos',
    'about.hero.hqLabel': 'Sede',
    'about.hero.hqValue': 'Colombia',
    'about.hero.summary': 'Con proyección hacia Latinoamérica y mercados globales.',
    'about.intro1.title': 'Misión & Visión',
    'about.intro1.subtitle': 'Hacia dónde vamos y qué nos comprometemos a hacer por el camino.',
    'about.mv.missionLabel': 'Nuestra misión',
    'about.mv.missionTitle': 'Impulsar la transformación digital de las organizaciones en Colombia.',
    'about.mv.visionLabel': 'Nuestra visión',
    'about.mv.visionTitle': 'Ser líderes en innovación tecnológica, de Colombia hacia el mundo.',
    'about.intro2.eyebrow': 'Valores corporativos',
    'about.intro2.title': 'Lo que nos define',
    'about.intro2.subtitle': 'Cinco principios que atraviesan cada proyecto que tomamos.',
    'about.quote':
      '"Nuestro enfoque está en la eficiencia, la escalabilidad y la evolución constante, con el objetivo de ser aliados estratégicos en el crecimiento de nuestros clientes."',
    'about.vitrina.eyebrow': 'Con quién trabajamos',
    'about.vitrina.title': 'Proyectos en salud, medio ambiente y sector público.',
    'about.vitrina.body':
      'Acompañamos a cada cliente con herramientas que evolucionan junto a su operación, desde software hospitalario hasta el observatorio ambiental de Barranquilla.',

    'clients.hero.eyebrow': 'Clientes',
    'clients.hero.title': 'Las organizaciones que ya confían en nosotros.',
    'clients.hero.subtitle':
      'Trabajamos con empresas de distintos sectores acompañando su crecimiento con herramientas que evolucionan junto a ellas.',
    'clients.hero.countLabel': 'Clientes',

    'blog.hero.title': 'Lo que aprendemos construyendo software.',
    'blog.hero.subtitle':
      'Automatización, inteligencia artificial y datos, contados desde los proyectos reales.',
    'blog.loadMore': 'Cargar más artículos',

    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.title': 'Hablemos de tu proyecto.',
    'contact.hero.subtitle':
      'Cuatro campos y listo. Nos cuentas qué necesitas y te respondemos con una propuesta de por dónde empezar.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.needQuestion': '¿Qué necesitas?',
    'contact.form.message': 'Cuéntanos más',
    'contact.form.optional': '(opcional)',
    'contact.form.send': 'Enviar',
    'contact.form.honeypot': 'No llenar este campo:',
    'contact.info.emailLabel': 'Correo',
    'contact.info.locationLabel': 'Ubicación',
    'contact.info.locationValue': 'Colombia',

    'cookies.text':
      'Usamos cookies solo para entender cómo se navega el sitio y mejorarlo. Nada de perseguirte por internet.',
    'cookies.accept': 'Aceptar',
    'cookies.decline': 'Rechazar',
    'cookies.aria': 'Aviso de cookies',

    'thanks.label': 'Mensaje recibido',
    'thanks.title': '¡Gracias por escribirnos!',
    'thanks.body':
      'Tu solicitud ya está en nuestras manos. Te contactaremos muy pronto para conversar sobre lo que tu organización necesita.',
    'thanks.cta': 'Volver al inicio',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.clients': 'Clients',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'header.cta': "Let's talk",
    'header.openMenu': 'Open menu',
    'header.mainNav': 'Main navigation',
    'header.mobileNav': 'Mobile navigation',
    'header.langAria': 'Switch language to Spanish',
    'header.langLabel': 'ES',

    'footer.tagline':
      'Software development, automation and artificial intelligence for organizations in Colombia and Latin America.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',

    'meta.default':
      'lagorithme — software development, process automation and artificial intelligence for organizations in Colombia and Latin America.',

    'title.home': 'Home',
    'title.services': 'Services',
    'title.about': 'About',
    'title.clients': 'Clients',
    'title.blog': 'Blog',
    'title.contact': 'Contact',
    'title.thanks': 'Thank you',

    'desc.services': 'Custom development, automation, artificial intelligence and data analytics.',
    'desc.about': 'Who we are, what drives us and the values we build software with at lagorithme.',
    'desc.clients': 'The organizations already working with lagorithme.',
    'desc.blog': 'News and articles from lagorithme.',
    'desc.contact': "Let's talk about your project: write to us and we'll reply.",
    'desc.thanks': "We received your message. We'll be in touch very soon.",

    'home.hero.title': "Your organization's future is coded today.",
    'home.hero.subtitle':
      'We drive the digital transformation of companies across Colombia and Latin America through process automation and artificial intelligence.',
    'home.hero.cta': 'Start your digital transformation',
    'home.hero.note': 'Public and private sector · Custom development',

    'home.method.label': 'How we work',

    'home.block1.eyebrow': 'Custom development',
    'home.block1.title': 'Software built around your operation, not a template.',
    'home.block1.body':
      'We map your real processes —exceptions included— and build the solution that fits them, ready to grow when your organization does.',
    'home.block1.cta': 'View services',

    'home.block2.eyebrow': 'Process automation',
    'home.block2.title': "Repetitive tasks stop eating up your team's day.",
    'home.block2.body':
      'We automate operational and administrative workflows so the hours go into deciding, not copying data from one system to another.',
    'home.block2.cta': 'How it works',

    'home.section1.title': 'Three fronts, one operation',
    'home.section1.subtitle':
      'Development, automation and artificial intelligence working on the same system.',

    'home.block3.eyebrow': 'Artificial intelligence',
    'home.block3.title': 'AI inside your organization and inside the software you already use.',
    'home.block3.body':
      'No need to start from scratch: we integrate artificial intelligence capabilities into the systems your team already knows and uses every day.',
    'home.block3.cta': 'Discover',

    'home.section2.title': 'And everything that holds the operation together',
    'home.section2.subtitle':
      'Analytics, data, compliance and integrations with what you already have in place.',

    'home.block4.eyebrow': 'Colombia and Latin America',
    'home.block4.title': 'We think big from the first line of code.',
    'home.block4.body':
      "What solves one area today supports the whole company tomorrow. That's why we build on robust infrastructure from day one.",
    'home.block4.cta': 'Get to know lagorithme',

    'home.block5.title': "Strategic allies in our clients' growth.",
    'home.block5.body':
      'Hospital software, environmental data observatories, custom platforms: we support every project with tools that evolve alongside the organization.',
    'home.block5.cta': 'View clients',

    'home.final.title': "Your organization's future is coded today.",
    'home.final.subtitle': "Tell us which process is slowing you down and we'll tell you where to start.",
    'home.final.cta': 'Start your digital transformation',

    'final.secondary': "Let's talk about your project",

    'services.hero.eyebrow': 'Services',
    'services.hero.title': 'Technology that adapts to your operation, not the other way around.',
    'services.hero.subtitle':
      'Custom development, process automation, artificial intelligence and data analytics for public and private organizations.',
    'services.hero.cta': "Let's talk about your project",
    'services.intro1.title': 'A single ally for the whole transformation',
    'services.intro1.subtitle':
      'From the first assessment to software running and evolving in your operation.',
    'services.intro2.eyebrow': 'Services',
    'services.intro2.title': 'What we do for you',
    'services.intro2.subtitle':
      'Six fronts that combine according to what your organization needs to solve.',
    'services.quote': '"We support our clients\' growth with tools that evolve alongside them."',
    'services.intro3.title': 'How we work',
    'services.intro3.subtitle': 'We deliver in stages, so value arrives before the project closes.',

    'about.hero.eyebrow': 'About',
    'about.hero.title': 'Strategic allies, not vendors of the moment.',
    'about.hero.subtitle':
      'We combine robust infrastructure, artificial intelligence and technical expertise to deliver digital products that adapt to every environment and need.',
    'about.hero.cta': 'See who we work with',
    'about.hero.hqLabel': 'Headquarters',
    'about.hero.hqValue': 'Colombia',
    'about.hero.summary': 'Reaching toward Latin America and global markets.',
    'about.intro1.title': 'Mission & Vision',
    'about.intro1.subtitle': "Where we're headed and what we commit to along the way.",
    'about.mv.missionLabel': 'Our mission',
    'about.mv.missionTitle': 'Driving the digital transformation of organizations in Colombia.',
    'about.mv.visionLabel': 'Our vision',
    'about.mv.visionTitle': 'Leading technology innovation, from Colombia to the world.',
    'about.intro2.eyebrow': 'Corporate values',
    'about.intro2.title': 'What defines us',
    'about.intro2.subtitle': 'Five principles that run through every project we take on.',
    'about.quote':
      '"Our focus is on efficiency, scalability and constant evolution, with the goal of being strategic allies in our clients\' growth."',
    'about.vitrina.eyebrow': 'Who we work with',
    'about.vitrina.title': 'Projects in healthcare, environment and the public sector.',
    'about.vitrina.body':
      "We support every client with tools that evolve alongside their operation, from hospital software to Barranquilla's environmental observatory.",

    'clients.hero.eyebrow': 'Clients',
    'clients.hero.title': 'The organizations that already trust us.',
    'clients.hero.subtitle':
      'We work with companies across different sectors, supporting their growth with tools that evolve alongside them.',
    'clients.hero.countLabel': 'Clients',

    'blog.hero.title': 'What we learn building software.',
    'blog.hero.subtitle': 'Automation, artificial intelligence and data, told from real projects.',
    'blog.loadMore': 'Load more articles',

    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title': "Let's talk about your project.",
    'contact.hero.subtitle':
      "Four fields and you're done. Tell us what you need and we'll reply with a proposal on where to start.",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email address',
    'contact.form.needQuestion': 'What do you need?',
    'contact.form.message': 'Tell us more',
    'contact.form.optional': '(optional)',
    'contact.form.send': 'Send',
    'contact.form.honeypot': 'Do not fill this field:',
    'contact.info.emailLabel': 'Email',
    'contact.info.locationLabel': 'Location',
    'contact.info.locationValue': 'Colombia',

    'cookies.text':
      'We use cookies only to understand how the site is used and improve it. No chasing you around the internet.',
    'cookies.accept': 'Accept',
    'cookies.decline': 'Decline',
    'cookies.aria': 'Cookie notice',

    'thanks.label': 'Message received',
    'thanks.title': 'Thanks for reaching out!',
    'thanks.body':
      "Your request is in our hands now. We'll be in touch very soon to talk about what your organization needs.",
    'thanks.cta': 'Back to home',
  },
};
