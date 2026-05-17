export const WHATSAPP_NUMBER = "5491169299378";

export function whatsappLink(message: string = ""): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encoded}` : ""}`;
}

export const WHATSAPP_MESSAGES = {
  generic: "Hola B&B! Vi su web y quería consultar por una solución digital para mi negocio.",
  comercios: "Hola B&B! Tengo un comercio/negocio y me interesa consultar por su servicio.",
  deportes: "Hola B&B! Tengo un predio deportivo / organizo torneos y quería consultar por la plataforma.",
  belleza: "Hola B&B! Tengo un negocio de belleza (peluquería/salón/spa) y me interesa consultar.",
  turismo: "Hola B&B! Tengo un alojamiento turístico (camping/cabaña/hostería) y me interesa consultar.",
  demo: "Hola B&B! Vi su web y me gustaría agendar una demo.",
  presupuesto: "Hola B&B! Quería pedir un presupuesto para mi proyecto.",
};
