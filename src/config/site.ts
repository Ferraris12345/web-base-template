/**
 * Configuración centralizada del sitio.
 * EDITAR ESTE ARCHIVO PARA CADA CLIENTE NUEVO.
 * Todo el sitio lee de aquí — colores, datos de contacto, textos base.
 */
export const site = {
  // --- Identidad ---
  name: "Nombre del Cliente",
  tagline: "Propuesta de valor en una línea clara",
  description: "Descripción SEO de 150-160 caracteres que incluya ubicación y servicio principal. Ejemplo: Expertos en mantenimiento de fachadas en Monterrey. Limpieza, reparación e impermeabilización con técnicas certificadas.",
  url: "https://dominio-cliente.com",
  lang: "es-MX",

  // --- Contacto ---
  phone: "+52 81 XXXX XXXX",
  whatsapp: "5281XXXXXXXX", // sin +, sin espacios
  email: "contacto@dominio.com",
  address: {
    street: "Calle #123, Col. Ejemplo",
    city: "Monterrey",
    state: "Nuevo León",
    zip: "64000",
    country: "MX",
  },

  // --- Redes sociales ---
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // --- Analytics ---
  analytics: {
    ga4: "", // G-XXXXXXXXXX
  },

  // --- Formulario ---
  formspreeId: "", // ID de Formspree (ej: "xrgvkpwq")

  // --- Diseño ---
  colors: {
    primary: "#1a1a2e",   // Color principal (headings, nav, footer bg)
    accent: "#e94560",    // Color de acento (CTAs, hovers, badges)
    light: "#f5f5f5",     // Fondo claro de secciones alternas
  },

  // --- WhatsApp CTA ---
  whatsappMessage: "Hola, me interesa cotizar sus servicios",
} as const;

export type SiteConfig = typeof site;
