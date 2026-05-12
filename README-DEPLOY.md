# INSTRUCCIONES PARA SUBIR LAS OPTIMIZACIONES SEO

## LO QUE YA HICE (cambios listos en el repositorio local)

✅ **index.html** - Meta tags optimizados con Schema.org
✅ **sitemap.xml** - Actualizado con todas las páginas
✅ **robots.txt** - Ya estaba bien
✅ **desarrollo-web.html** - Nueva landing page SEO
✅ **sistema-turnos.html** - Nueva landing page SEO

---

## OPCIÓN 1: SUBIR DESDE TU COMPU (si tenés el repo localmente)

Si ya tenés el repositorio clonado en tu máquina:

```bash
# 1. Descargá los archivos modificados del .zip que te voy a pasar
# 2. Reemplazá los archivos en tu carpeta local del proyecto
# 3. Subí los cambios:

git add .
git commit -m "SEO optimization: meta tags, sitemap, landing pages"
git push origin main
```

Netlify va a detectar el push y redesplegar automáticamente en 1-2 minutos.

---

## OPCIÓN 2: SUBIR DIRECTO DESDE GITHUB.COM (más fácil)

Si no tenés el repo en tu compu:

### Paso 1: Descargar el .zip con los cambios
Te voy a pasar un .zip con todos los archivos modificados.

### Paso 2: Subir archivo por archivo en GitHub

1. Andá a https://github.com/marcosbritos/britosberon
2. Click en `index.html`
3. Click en el ícono del lápiz (Edit this file)
4. Borrá todo el contenido
5. Copiá y pegá el contenido del index.html del .zip
6. Abajo, en "Commit changes", escribí: `SEO optimization - meta tags`
7. Click en "Commit changes"
8. **Repetí para cada archivo modificado**

**Archivos a actualizar:**
- index.html (reemplazar)
- sitemap.xml (reemplazar)
- desarrollo-web.html (crear nuevo - click en "Add file" > "Create new file")
- sistema-turnos.html (crear nuevo)

### Paso 3: Verificar que Netlify redesplegó

1. Entrá a https://app.netlify.com
2. Click en tu sitio "britosberon"
3. Pestaña "Deploys"
4. Deberías ver un nuevo deploy con el mensaje "SEO optimization..."
5. Esperá 1-2 minutos a que termine

---

## VERIFICAR QUE FUNCIONÓ

Una vez desplegado:

1. **Sitemap:** Abrí https://britosberon.com.ar/sitemap.xml
   → Deberías ver el XML con las URLs

2. **Robots:** Abrí https://britosberon.com.ar/robots.txt
   → Debería mostrar el contenido

3. **Meta tags:** Hacé click derecho en https://britosberon.com.ar → "Ver código fuente"
   → Buscá `<title>` → debería decir "Desarrollo Web y Apps para Negocios"

4. **Landing pages:** 
   - https://britosberon.com.ar/desarrollo-web.html
   - https://britosberon.com.ar/sistema-turnos.html

---

## SIGUIENTE PASO CRÍTICO: GOOGLE SEARCH CONSOLE

**ESTO ES LO MÁS IMPORTANTE.** Sin esto, Google no te va a indexar.

### Paso 1: Crear cuenta en Search Console

1. Andá a https://search.console.google.com
2. Iniciá sesión con tu Gmail
3. Click en "Agregar propiedad"
4. Seleccioná "Prefijo de URL"
5. Pegá: `https://britosberon.com.ar`
6. Click "Continuar"

### Paso 2: Verificar el dominio

Google te va a dar varias opciones. **La más fácil para Netlify:**

**MÉTODO 1 - Archivo HTML (RECOMENDADO):**

1. Google te da un archivo para descargar tipo `googleXXXXXXXXX.html`
2. Subilo a la raíz de tu repo en GitHub (igual que hiciste con los otros archivos)
3. Esperá a que Netlify lo despliegue
4. Volvé a Google Search Console y click "Verificar"

**MÉTODO 2 - Meta tag:**

1. Google te da un código `<meta name="google-site-verification" content="..."/>`
2. Copialo
3. Abrí index.html en GitHub (modo edit)
4. Pegalo en el `<head>`, justo después del charset
5. Commit y esperá el deploy
6. Volvé a Google y click "Verificar"

### Paso 3: Subir sitemap

Una vez verificado:

1. En Search Console → Menú izquierdo → "Sitemaps"
2. En "Agregar un sitemap nuevo", escribí: `sitemap.xml`
3. Click "Enviar"

### Paso 4: Solicitar indexación (CRÍTICO)

1. Menú izquierdo → "Inspección de URLs"
2. Pegá: `https://britosberon.com.ar`
3. Esperá a que cargue
4. Click en "Solicitar indexación"
5. Repetí para:
   - https://britosberon.com.ar/desarrollo-web.html
   - https://britosberon.com.ar/sistema-turnos.html

**Resultado:** Google te indexa en 24-48 horas.

---

## PRÓXIMOS PASOS (esta semana)

1. ✅ Subir cambios a GitHub (HOY)
2. ✅ Verificar en Search Console (HOY o MAÑANA)
3. ⏳ Crear Google Business Profile (esta semana)
4. ⏳ Pedir 2-3 reviews en Google (esta semana)

---

## ARCHIVOS QUE VAN EN EL .ZIP

Te voy a pasar un .zip con:
- index.html (modificado con meta tags nuevos)
- sitemap.xml (actualizado)
- desarrollo-web.html (nuevo)
- sistema-turnos.html (nuevo)
- README-DEPLOY.md (este archivo)

---

¿TE TRABASTE EN ALGÚN PASO?

Avisame dónde y te ayudo. Mandame screenshot si hace falta.
