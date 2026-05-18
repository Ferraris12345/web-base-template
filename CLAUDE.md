# Web Base Template — Contexto para Claude Code

## Qué es esto
Boilerplate Astro 5 + Tailwind CSS v4 para sitios web de clientes freelance. Cada proyecto nuevo se clona desde este template en GitHub (`Ferraris12345/web-base-template`). El output es un sitio estático, rápido, SEO-ready, desplegado en Vercel.

## Stack técnico

| Herramienta | Versión | Para qué |
|---|---|---|
| **Astro** | 5.x | Framework SSG — genera HTML puro, zero JS por default |
| **Tailwind CSS** | 4.x | Estilos utility-first, configurado via `@tailwindcss/vite` |
| **Inter** | Variable | Tipografía body (moderna, legible) |
| **Playfair Display** | Variable | Tipografía headings (serif elegante) |
| **Formspree** | — | Backend para formularios de contacto (no code) |
| **Vercel** | — | Hosting con deploy automático desde GitHub |

### IMPORTANTE: Tailwind v4 con Astro
- **NO usar `@astrojs/tailwind`** — Eso es para Tailwind v3 y causa conflicto de dependencias.
- **SÍ usar `@tailwindcss/vite`** como plugin de Vite en `astro.config.mjs`:
```js
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```
- Tailwind v4 no usa `tailwind.config.js`. La config va en `src/styles/global.css` con directivas `@theme`.

## Arquitectura del proyecto

```
src/
├── config/site.ts          # ARCHIVO CLAVE — toda la config del cliente aquí
├── components/
│   ├── ui/                 # Primitivos: Container, Button, SectionHeading
│   ├── Nav.astro           # Navegación responsive con menú hamburguesa
│   ├── Footer.astro        # Footer 3 columnas con links y social
│   ├── WhatsAppButton.astro # Botón flotante WhatsApp
│   ├── ContactForm.astro   # Formulario via Formspree
│   └── GoogleAnalytics.astro # GA4 snippet
├── sections/               # Secciones modulares de la home
│   ├── Hero.astro          # Banner principal con CTA
│   ├── Services.astro      # Grid de servicios
│   ├── Projects.astro      # Galería de proyectos/portafolio
│   ├── About.astro         # Quiénes somos
│   ├── Testimonials.astro  # Testimonios de clientes
│   ├── CTA.astro           # Call to action intermedio
│   ├── Contact.astro       # Sección contacto con form y mapa
│   └── Blog.astro          # Preview de posts
├── layouts/
│   ├── BaseLayout.astro    # HTML shell + meta SEO + schema.org JSON-LD
│   └── BlogPost.astro      # Layout para artículos del blog
├── pages/
│   ├── index.astro         # Home — importa y ordena secciones
│   └── blog/index.astro    # Listado de posts
└── styles/global.css       # Tailwind imports + @theme + animaciones custom
```

## Flujo para personalizar un sitio nuevo

### Paso 1: Config del cliente
Editar `src/config/site.ts` — ESTE ES EL ARCHIVO MÁS IMPORTANTE:
- `name`, `tagline`, `description` → Identidad y SEO
- `phone`, `whatsapp`, `email`, `address` → Contacto
- `social` → Redes sociales
- `analytics.ga4` → Google Analytics ID
- `formspreeId` → ID del form
- `colors.primary`, `colors.accent`, `colors.light` → Paleta

### Paso 2: Assets
- Reemplazar imágenes en `public/images/` (logo, hero, proyectos, about)
- Formatos: WebP preferido, fallback JPG. Máximo ~200KB por imagen.

### Paso 3: Contenido
- Editar textos en `src/sections/*.astro` (servicios, proyectos, testimonios)
- Si el cliente NO quiere blog, eliminar `src/pages/blog/` y la sección Blog

### Paso 4: Dominio y deploy
- Cambiar `site` en `astro.config.mjs` al dominio final
- Actualizar `public/robots.txt`
- Deploy: conectar repo a Vercel → auto-deploy en cada push

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Dev server (localhost:4321)
npm run build        # Build estático (output en dist/)
npm run preview      # Preview del build
```

## Convenciones de código
- Componentes en PascalCase: `ServiceCard.astro`
- Secciones son componentes de página completa, van en `src/sections/`
- Componentes reutilizables van en `src/components/` (o `ui/` si son primitivos)
- Toda config del cliente centralizada en `site.ts` — NO hardcodear datos en componentes
- Estilos: Tailwind utilities inline, CSS custom solo en `global.css`
- Colores del cliente vía CSS custom properties definidas en `global.css` desde `site.ts`

## Contexto del freelancer
- **Owner**: Rene Ferraris (reneferraris2001@gmail.com)
- **GitHub**: Ferraris12345
- **Clientes target**: PyMEs industriales/manufactura/tech en Monterrey, N.L.
- **Planes**: Base ($3K-5K), Pro ($8K-15K), Premium ($18K-30K MXN)
- **Herramientas de gestión**: Notion (tracking), Google Drive (entregables), Vercel (deploy)
- **Protocolo**: Mac (Cowork) para planear, Surface (Claude Code/Cursor) para codear

## Notas para Claude Code
- Al empezar a trabajar en un proyecto clonado, SIEMPRE leer `site.ts` primero para entender el cliente.
- Si te pido "nuevo proyecto para X", clonar desde template, editar `site.ts`, y empezar con las secciones.
- Priorizar performance: imágenes optimizadas, zero JS innecesario, lazy loading.
- SEO es prioridad: meta tags, schema.org, Open Graph, sitemap.
- Siempre probar con `npm run build` antes de considerar algo terminado.
