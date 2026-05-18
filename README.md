# Web Base Template

Boilerplate Astro + Tailwind CSS v4 para sitios web de clientes. Diseño profesional, SEO optimizado, listo para deploy en Vercel.

## Quick Start

```bash
npm install
npm run dev
```

## Personalizar para un cliente nuevo

1. Editar `src/config/site.ts` con los datos del cliente (nombre, contacto, colores, analytics, formspree)
2. Reemplazar imágenes en `public/images/` (logos, hero, proyectos, about)
3. Editar contenido en `src/pages/index.astro` (servicios, proyectos, testimonios)
4. Actualizar `robots.txt` y `astro.config.mjs` con el dominio final
5. Configurar Formspree y Google Analytics

## Estructura

```
src/
├── config/site.ts          # Config centralizada del sitio
├── components/
│   ├── ui/                 # Container, Button, SectionHeading
│   ├── Nav.astro           # Navegación responsive
│   ├── Footer.astro        # Footer 3 columnas
│   ├── WhatsAppButton.astro
│   ├── ContactForm.astro   # Form con Formspree
│   └── GoogleAnalytics.astro
├── sections/               # Secciones de la home
│   ├── Hero, Services, Projects, About,
│   ├── Testimonials, CTA, Contact, Blog
├── layouts/
│   ├── BaseLayout.astro    # HTML shell + SEO + schema.org
│   └── BlogPost.astro      # Layout para posts
├── pages/
│   ├── index.astro         # Home
│   └── blog/index.astro    # Blog listing
└── styles/global.css       # Tailwind + animaciones
```

## Deploy

```bash
npm run build    # Build estático
npm run preview  # Preview local del build
```

Deploy automático con Vercel: conectar repo y listo.

## Stack

- **Astro 5** — Static site generation, zero JS by default
- **Tailwind CSS v4** — Utility-first styling
- **Inter + Playfair Display** — Typography system
- **Formspree** — Contact form backend
- **Vercel** — Hosting + edge functions
