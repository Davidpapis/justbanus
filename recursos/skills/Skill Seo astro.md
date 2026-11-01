---
name: astro-seo-pro-architecture
description: Directrices estrictas para arquitectura SEO técnica, multiidioma (hreflang), OpenGraph y Core Web Vitals en Astro a coste 0€.
---

# SKILL: ASTRO TECHNICAL SEO & MULTILANGUAGE EXCELLENCE

## 1. PRINCIPIOS OBLIGATORIOS DE INDEXACIÓN
- La web debe compilarse en HTML estático puro (SSG) para que los motores de búsqueda rastreen el contenido sin depender de ejecución JS ni bases de datos.
- Puntuación mínima exigida en Google Lighthouse: 100/100 en SEO y Rendimiento.
- Bloquear en `public/robots.txt` el rastreo a rutas internas: `/keystatic/` y `/api/`.

## 2. COMPONENTE SEO BASE (`src/components/SEO.astro`)
Todo layout o página debe importar e inyectar el siguiente esquema de metadatos:
- `<title>` dinámico con límite estricto de 60 caracteres.
- `<meta name="description">` con límite estricto de 160 caracteres.
- `<link rel="canonical" href="...">` apuntando a la URL absoluta del idioma activo.
- Etiquetas internacionales hreflang por cada idioma declarado (ej: `es`, `ca`, `en`) más la directiva de respaldo: `<link rel="alternate" hreflang="x-default" href="URL_DEFAULT" />`.
- Etiquetas completas de Open Graph (`og:title`, `og:description`, `og:image`, `og:type`) y Twitter Cards (`summary_large_image`).
- Bloque JSON-LD Schema.org estructurado (`LocalBusiness` u `Organization`) serializado como script application/ld+json.

## 3. SEMÁNTICA Y PERFORMANCE ON-PAGE
- Exactamente un único elemento `<h1>` semántico por página conteniendo la palabra clave principal de negocio.
- Los encabezados subsiguientes deben mantener orden estricto (`<h2>` -> `<h3>`) sin saltos de nivel.
- Optimización total de medios: Todas las imágenes deben implementarse mediante el componente nativo `<Image />` de Astro, declarando atributos `alt` descriptivos y dimensiones explícitas para evitar saltos de maquetación (CLS = 0).
- Declarar siempre el atributo de idioma dinámico en el nodo raíz: `<html lang={currentLang}>`.