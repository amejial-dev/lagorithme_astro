export interface InsigniaTarjeta {
  tipo: 'icono' | 'numero';
  valor: string;
  fondo?: string;
}

export interface ElementoTarjeta {
  insignia: InsigniaTarjeta;
  titulo: string;
  cuerpo: string;
  fondo?: string;
  texto?: string;
}
