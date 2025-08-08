# Sitio web corporativo Grupo R&C (Astro + Tailwind)

Proyecto web construido con Astro y Tailwind CSS, con estilos y tokens de diseño corporativos del Grupo R&C.

## 🚀 Estructura del proyecto

```text
/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── public/
│   ├── favicons/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon.ico
│   │   ├── icon.svg
│   │   └── manifest.webmanifest
│   ├── fonts/
│   │   ├── Genos-VariableFont_wght.woff2
│   │   └── Poppins-Regular.woff2
│   └── images/
│       ├── logo_mas_letras.webp
│       └── logo.png
└── src/
	├── assets/
	├── components/
	│   ├── Footer.astro
	│   └── Header.astro
	├── layouts/
	│   └── Layout.astro
	├── pages/
	│   ├── contacto.astro
	│   ├── experiencia.astro
	│   ├── index.astro
	│   ├── nosotros.astro
	│   ├── servicios.astro
	│   └── ventajas.astro
	└── styles/
		└── global.css
```

## 🎨 Colores corporativos

Los siguientes colores forman parte de la identidad visual de la empresa y están definidos como tokens de tema en Tailwind (utilizables con clases como `bg-<color>`, `text-<color>`, `border-<color>`):

- azul: #005EB8
- golden: #FFC845
- whale: #1F2A44
- cornFlower: #8BB8E8
- blanco: #FFFFFF

Ejemplos de uso:

- Fondo principal: `bg-whale`
- Texto destacado: `text-golden`
- Enlaces secundarios: `text-cornFlower`
- Bordes y divisores: `border-golden`

Estos tokens se definen en `src/styles/global.css` mediante `@theme` (Tailwind CSS v4).

## 🔤 Tipografías

Se utilizan dos tipografías corporativas embebidas con `@font-face`:

- Genos (variable 100–900)
- Poppins (Regular 400)

Clases de utilidad disponibles para aplicarlas:

- `.font-family-genos` → Usa la fuente Genos
- `.font-family-poppins` → Usa la fuente Poppins

Las fuentes se alojan en `public/fonts` y se cargan globalmente desde `src/styles/global.css`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

