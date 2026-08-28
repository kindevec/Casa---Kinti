# Casa Kinti — Medicinas Integrativas & Educación Infantil

Landing page oficial de **Casa Kinti**, ubicada en **Quito, Ecuador**, dirigida por **Johanna Proaño** (Educadora Infantil Bilingüe, Máster en Problemas de Aprendizaje, Terapeuta en Flores de Bach y Herbolaria, Mujer Medicina Certificada).

---

## 🌸 Identidad Visual & Paleta "Cielo Encantado"

| Color | Hex | Uso en el diseño |
| :--- | :--- | :--- |
| **Azul cielo pastel** | `#DCEEFB` | Fondo general y atmósfera nublada |
| **Lavanda claro** | `#C9D4F5` | Fondos degradados y elementos secundarios |
| **Azul-violeta medio** | `#6B7FD1` | Titulares principales, botones y CTAs |
| **Púrpura suave** | `#9B8FD9` | Palabras acentuadas en script y detalles |
| **Rosa pastel floral** | `#F0C6D9` | Detalles botánicos y Nicho Infantil |
| **Azul-gris oscuro** | `#3E4A7A` | Texto de cuerpo de alta legibilidad |
| **Dorado suave** | `#F5C84C` | Estrellas de valoración y acentos solares |
| **Blanco puro** | `#FFFFFF` | Tarjetas y contraste limpio |
| **Teal sagrado** | `#12A89D` | Logo estilizado de la Cruz Andina |

---

## 🏛️ Estructura de 5 Secciones Continuas

1. **#inicio — Inicio:** Header minimalista con logo, Hero editorial de dos columnas con marco floral y mariposas con aleteo animado, franja de credenciales de Johanna, recorrido del cliente en 4 etapas (*Aprende, Sana, Equilibra, Florece*) y banner de promoción especial *Tarot Terapéutico Express a $15*.
2. **#sobre-mi — Sobre Mí:** Trayectoria académica y espiritual de Johanna Proaño, historia de fundación de Casa Kinti, badges de especialidades y cita inspiradora.
3. **#productos — Productos:** Catálogo editorial de 6 productos (Pulseras Amuletos con estudio radiestésico GRATIS, Aceite de Lavanda, Palo Santo, Sahumerio Siete Poderes, Kit de Limpieza y Cristales sueltos) con modal de detalles y botón de pedido por WhatsApp.
4. **#servicios — Servicios:** Dos bloques claramente diferenciados:
   - **Bloque A (Medicina Ancestral):** Limpias energéticas, Flores de Bach, Herbolaria y Tarot Terapéutico.
   - **Bloque B (Educación Infantil):** Asesoría en Problemas de Aprendizaje, Talleres Bilingües y Evaluación Psicopedagógica.
   - Bloque *"Lo que incluye tu experiencia"* con mockup y checklist.
   - Bloque *"Historias de Transformación"* con testimonios de 5 estrellas.
5. **#contacto — Contáctanos:** CTA final *"Tu bienestar comienza ahora"*, formulario de reserva con `<optgroup>` por nicho y confirmación simulada, información de horarios, WhatsApp directo (+593 96 266 9994), redes sociales (TikTok, Instagram, Facebook), Google Maps embebido y footer con sello script *"Hecho con cariño por Casa Kinti"*.
6. **Botón Flotante Global:** Botón de WhatsApp fijo en la esquina inferior derecha con animación de pulso y mensaje predeterminado.

---

## 🚀 Cómo Ejecutar y Desplegar el Proyecto

### Opción 1: En entorno Vite / Node.js
```bash
npm install
npm run dev
```
Abre `http://localhost:3000` en tu navegador.

### Opción 2: Despliegue Estático (GitHub Pages, Vercel, Netlify)
Ejecuta `npm run build` y sube la carpeta resultante `dist/` a tu proveedor de hosting favorito.

---

## 🖼️ Reemplazo de Recursos para Producción

1. **Imágenes:** Busca los comentarios `/* reemplazar con foto real: ... */` en `src/data.ts` y en los componentes para sustituir las URLs de Unsplash por tus fotografías en alta resolución (`/public/img/...`).
2. **Tipografías:** En `index.html` e `index.css` puedes enlazar los archivos locales `.otf` o `.woff2` de **Verandah Reverie** y **Floral Clover** si cuentas con las licencias correspondientes.
3. **Formulario:** Para enviar los datos a tu correo real, abre `src/components/ContactSection.tsx` y conecta tu endpoint de [Formspree](https://formspree.io) o [EmailJS](https://www.emailjs.com).
