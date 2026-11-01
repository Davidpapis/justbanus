{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs29\fsmilli14667 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 name: Scroll-web
\f1\fs24 \

\f0\fs29\fsmilli14667 description: Convierte un v\'eddeo en una web animada premium controlada por scroll usando GSAP, renderizado de frames en canvas y coreograf\'eda de animaciones por capas.
\f1\fs24 \

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 # De v\'eddeo a web premium animada por scroll
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Transforma un archivo de v\'eddeo en una experiencia web interactiva donde el **scroll controla la animaci\'f3n**.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 La clave es crear una **coreograf\'eda de animaciones variada**, donde diferentes tipos de movimiento trabajan juntos en lugar de repetir siempre el mismo efecto.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ## Entrada
\f1\fs24 \
\

\f0\fs29\fsmilli14667 El usuario proporciona:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 - Ruta a un archivo de v\'eddeo (MP4, MOV, etc.)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Opcionalmente tambi\'e9n puede indicar:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 - Nombre de marca o tem\'e1tica
\f1\fs24 \

\f0\fs29\fsmilli14667 - Secciones de texto deseadas y d\'f3nde deben aparecer
\f1\fs24 \

\f0\fs29\fsmilli14667 - Preferencias de color
\f1\fs24 \

\f0\fs29\fsmilli14667 - Direcci\'f3n visual o estilo de dise\'f1o
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Si estos datos no se especifican, solicita informaci\'f3n m\'ednima o utiliza decisiones creativas razonables.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 # Requisitos Premium (Obligatorios)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 1. **Scroll suave con Lenis**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0El scroll nativo se siente como una p\'e1gina web; Lenis debe hacer que se sienta como una experiencia.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 2. **M\'ednimo 4 tipos de animaci\'f3n**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Nunca repitas el mismo tipo de entrada en dos secciones consecutivas.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 3. **Revelado escalonado de contenido**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0etiqueta \uc0\u8594  t\'edtulo \u8594  texto \u8594  CTA.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Nunca todo aparece a la vez.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 4. **Nada de tarjetas glassmorphism**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Texto sobre fondos limpios. La jerarqu\'eda se consigue con tipograf\'eda, peso y color.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 5. **Variedad de direcciones de entrada**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Las secciones deben aparecer desde distintos movimientos: izquierda, derecha, arriba, escala o clip.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 6. **Overlay oscuro para estad\'edsticas**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Opacidad entre 0.88 y 0.92.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Los contadores deben animarse desde 0.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Es la \'fanica secci\'f3n donde el texto puede ir centrado.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 7. **Texto horizontal gigante en movimiento**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Debe existir al menos un elemento tipogr\'e1fico grande desplaz\'e1ndose con el scroll (12vw o m\'e1s).
\f1\fs24 \
\

\f0\fs29\fsmilli14667 8. **Contadores animados**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Ning\'fan n\'famero aparece est\'e1tico: todos cuentan desde 0.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 9. **Tipograf\'eda muy grande**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0- Hero: 12rem o m\'e1s\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0- T\'edtulos de secci\'f3n: 4rem o m\'e1s\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0- Marquee: 10vw o m\'e1s
\f1\fs24 \
\

\f0\fs29\fsmilli14667 10. **CTA persistente**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0`data-persist="true"` mantiene visible la secci\'f3n final.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 11. **Hero dominante + scroll amplio**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0El hero debe ocupar al menos el 20 % del recorrido de scroll.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Para 6 secciones se recomienda m\'ednimo **800vh**.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 12. **Texto siempre en los laterales**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Todo el contenido debe situarse en el 40 % exterior del viewport (`align-left` o `align-right`).\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Nunca centrado, excepto en la secci\'f3n de estad\'edsticas.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 13. **Revelado circular del hero**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0El hero es una secci\'f3n independiente de 100vh.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0El canvas aparece mediante `clip-path: circle()` cuando el hero desaparece.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 14. **Velocidad de frames 1.8\'962.2**\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0La animaci\'f3n del producto debe terminar alrededor del **55 % del scroll**.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0\'a0Menos de 1.8 se percibe lento.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 # Flujo de procesamiento
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Video (MP4) \uc0\u8594  FFMPEG \u8594  Secuencia de im\'e1genes (WebP) \u8594  Canvas + l\'f3gica de scroll
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ### Por qu\'e9 este enfoque
\f1\fs24 \
\

\f0\fs29\fsmilli14667 - **WebP** pesa entre 25 % y 35 % menos que JPEG con calidad similar.
\f1\fs24 \

\f0\fs29\fsmilli14667 - **Canvas** permite cambiar frames de forma instant\'e1nea y precisa.
\f1\fs24 \

\f0\fs29\fsmilli14667 - `<video>` no permite scrubbing exacto y suele provocar parpadeos.
\f1\fs24 \

\f0\fs29\fsmilli14667 - Canvas controlado por scroll crea una experiencia m\'e1s cercana a una **web de producto premium**.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 # Flujo de trabajo
\f1\fs24 \
\

\f0\fs29\fsmilli14667 **FFmpeg y FFprobe ya est\'e1n instalados en el sistema.\'a0\'a0
\f1\fs24 \

\f0\fs29\fsmilli14667 NO deben reinstalarse.**
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ## Paso 1: Analizar el v\'eddeo
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ```bash
\f1\fs24 \

\f0\fs29\fsmilli14667 ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration,r_frame_rate,nb_frames -of csv=p=0 "<VIDEO_PATH>"
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Determina:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	resoluci\'f3n
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	duraci\'f3n
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	fps
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	n\'famero total de frames
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Luego decide:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 N\'famero objetivo de frames
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Entre 150 y 300 frames suele dar un buen resultado.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Gu\'eda general:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	V\'eddeos cortos (<10 s): usar fps original, m\'e1ximo ~300 frames
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	V\'eddeos medios (10\'9630 s): extraer a 10\'9615 fps
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	V\'eddeos largos (30 s+): extraer a 5\'9610 fps
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Resoluci\'f3n de salida
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Mantener proporci\'f3n del v\'eddeo original y limitar el ancho m\'e1ximo a 1920px.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Paso 2: Extraer los frames
\f1\fs24 \
\

\f0\fs29\fsmilli14667 mkdir -p frames
\f1\fs24 \

\f0\fs29\fsmilli14667 ffmpeg -i "<VIDEO_PATH>" -vf "fps=<CALCULATED_FPS>,scale=<WIDTH>:-1" -c:v libwebp -quality 80 "frames/frame_%04d.webp"
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Despu\'e9s de exportar, contar los frames:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ls frames/ | wc -l
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \'bfPor qu\'e9 WebP y no JPG?
\f1\fs24 \
\

\f0\fs29\fsmilli14667 160 frames a 1920px suelen ocupar:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	WebP: ~19 MB
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	JPG equivalente: ~28 MB
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Adem\'e1s WebP permite modo lossless si se necesita.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Paso 3: Estructura del proyecto
\f1\fs24 \
\

\f0\fs29\fsmilli14667 project-root/
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0index.html
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0css/style.css
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0js/app.js
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0frames/frame_0001.webp ...
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Sin bundlers.
\f1\fs24 \

\f0\fs29\fsmilli14667 Solo HTML + CSS + JavaScript vanilla y librer\'edas v\'eda CDN.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 index.html
\f1\fs24 \
\

\f0\fs29\fsmilli14667 La estructura obligatoria debe seguir este orden:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 <!-- Loader -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Header fijo -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Hero -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Canvas -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Overlay oscuro -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Marquee -->
\f1\fs24 \

\f0\fs29\fsmilli14667 <!-- Contenedor de scroll -->
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Elementos clave:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	loader con progreso
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	cabecera fija con navegaci\'f3n
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	hero independiente de 100vh
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	canvas a pantalla completa
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	overlay oscuro
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	textos horizontales animados
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	secciones de contenido con rangos de scroll
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	secci\'f3n de estad\'edsticas
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	CTA final persistente
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Scripts CDN (al final del body):
\f1\fs24 \
\

\f0\fs29\fsmilli14667 <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
\f1\fs24 \

\f0\fs29\fsmilli14667 <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
\f1\fs24 \

\f0\fs29\fsmilli14667 <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
\f1\fs24 \

\f0\fs29\fsmilli14667 <script src="js/app.js"></script>
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 CSS principal
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Variables base:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 :root \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0--bg-light: #f5f3f0;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0--bg-dark: #111111;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0--text-on-light: #1a1a1a;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0--text-on-dark: #f0ede8;
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Distribuci\'f3n lateral del contenido:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 .align-left \{ padding-left: 5vw; padding-right: 55vw; \}
\f1\fs24 \

\f0\fs29\fsmilli14667 .align-right \{ padding-left: 55vw; padding-right: 5vw; \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Contenedor de scroll:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 #scroll-container \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0height: 800vh;
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Canvas sticky:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 .canvas-wrap \{
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0position: sticky;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0top: 0;
\f1\fs24 \

\f0\fs29\fsmilli14667 \'a0\'a0height: 100vh;
\f1\fs24 \

\f0\fs29\fsmilli14667 \}
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Adaptaci\'f3n m\'f3vil
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Para pantallas menores de 768px:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	centrar texto
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	overlays oscuros detr\'e1s del texto
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	reducir altura del scroll a ~550vh
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	usar menos de 150 frames
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	reducir resoluci\'f3n a 1280px
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 JavaScript (app.js)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Scroll suave con Lenis
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Lenis es obligatorio y debe integrarse con ScrollTrigger.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Precarga de frames
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Regla cr\'edtica:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Nunca ocultar el loader hasta que todos los frames est\'e9n cargados.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 La carga debe hacerse en dos fases:
\f1\fs24 \

\f0\fs29\fsmilli14667 	1.	cargar los primeros 10 frames inmediatamente
\f1\fs24 \

\f0\fs29\fsmilli14667 	2.	cargar el resto en lotes de 15\'9620
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Esto evita saturar las conexiones del navegador.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Renderizado en Canvas
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Canvas se usa porque permite cambio de frames instant\'e1neo y preciso.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Escala recomendada:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 IMAGE_SCALE 0.82 \'96 0.90
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Esto evita que el producto se recorte contra los bordes.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Tambi\'e9n debe aplicarse devicePixelRatio para evitar blur en pantallas retina.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Sincronizaci\'f3n scroll \uc0\u8594  frame
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Regla de rendimiento:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Nunca dibujar en el canvas dentro del evento de scroll.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Separar:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	c\'e1lculo del frame seg\'fan scroll
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	renderizado en requestAnimationFrame
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Esto evita tirones en el scroll.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Sistema de animaci\'f3n de secciones
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Cada secci\'f3n tiene:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	data-enter
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	data-leave
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	data-animation
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Tipos de animaci\'f3n disponibles:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	fade-up
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	slide-left
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	slide-right
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	scale-up
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	rotate-in
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	stagger-up
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	clip-reveal
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Nunca repetir dos iguales seguidas.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Contadores animados
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Los n\'fameros deben:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	empezar en 0
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	animarse al entrar en viewport
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	respetar decimales si existen
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Texto horizontal animado
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Los bloques .marquee-wrap deben desplazarse horizontalmente seg\'fan el scroll.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Overlay oscuro
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Debe activarse en un rango de scroll concreto para dar contraste a ciertas secciones.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Transici\'f3n hero \uc0\u8594  canvas
\f1\fs24 \
\

\f0\fs29\fsmilli14667 El hero desaparece gradualmente mientras el canvas aparece mediante clip circular expansivo.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Testing
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Para probar correctamente:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 npx serve .
\f1\fs24 \
\

\f0\fs29\fsmilli14667 o
\f1\fs24 \
\

\f0\fs29\fsmilli14667 python -m http.server 8000
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Los frames deben servirse por HTTP, nunca con file://.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Verificar:
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	scroll suave
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	animaci\'f3n de frames correcta
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	contadores funcionando
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	marquee en movimiento
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	overlay oscuro activ\'e1ndose
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	CTA final visible
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Referencia r\'e1pida de animaciones
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Tipo	Estado inicial	Estado final
\f1\fs24 \

\f0\fs29\fsmilli14667 fade-up	y:50 opacity:0	y:0 opacity:1
\f1\fs24 \

\f0\fs29\fsmilli14667 slide-left	x:-80 opacity:0	x:0 opacity:1
\f1\fs24 \

\f0\fs29\fsmilli14667 slide-right	x:80 opacity:0	x:0 opacity:1
\f1\fs24 \

\f0\fs29\fsmilli14667 scale-up	scale:0.85 opacity:0	scale:1 opacity:1
\f1\fs24 \

\f0\fs29\fsmilli14667 rotate-in	y:40 rotation:3 opacity:0	y:0 rotation:0
\f1\fs24 \

\f0\fs29\fsmilli14667 stagger-up	y:60 opacity:0	y:0 opacity:1
\f1\fs24 \

\f0\fs29\fsmilli14667 clip-reveal	clipPath oculto	clipPath visible
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Decisiones recomendadas
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Tema	Correcto	Evitar
\f1\fs24 \

\f0\fs29\fsmilli14667 formato	WebP	JPG/PNG
\f1\fs24 \

\f0\fs29\fsmilli14667 reproducci\'f3n	canvas	video
\f1\fs24 \

\f0\fs29\fsmilli14667 carga	precarga total	lazy loading
\f1\fs24 \

\f0\fs29\fsmilli14667 scroll	calcular estado	renderizar en scroll
\f1\fs24 \

\f0\fs29\fsmilli14667 render	requestAnimationFrame	scroll event
\f1\fs24 \

\f0\fs29\fsmilli14667 layout	sticky + contenedor alto	JS posicionando todo
\f1\fs24 \

\f0\fs29\fsmilli14667 frames	120-200	500+
\f1\fs24 \
\
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Errores comunes
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	cargar frames durante scroll
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	usar el mismo tipo de animaci\'f3n repetidamente
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	scroll demasiado corto
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	render dentro del evento scroll
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	centrar texto encima del canvas
\f1\fs24 \

\f0\fs29\fsmilli14667 	\'95	usar glassmorphism innecesario
\f1\fs24 \
\

\f0\fs29\fsmilli14667 \uc0\u11835 
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Problemas y soluciones
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Frames no cargan
\f1\fs24 \

\f0\fs29\fsmilli14667 La p\'e1gina se abre con file://.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Scroll entrecortado
\f1\fs24 \

\f0\fs29\fsmilli14667 Reducir frames o ajustar scrub.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Parpadeos blancos
\f1\fs24 \

\f0\fs29\fsmilli14667 El loader se ocult\'f3 antes de tiempo.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Canvas borroso
\f1\fs24 \

\f0\fs29\fsmilli14667 No se aplic\'f3 devicePixelRatio.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Animaciones que no se activan
\f1\fs24 \

\f0\fs29\fsmilli14667 Revisar data-enter y data-leave.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Problemas de memoria en m\'f3vil
\f1\fs24 \

\f0\fs29\fsmilli14667 Reducir frames y resoluci\'f3n.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Secciones superpuestas
\f1\fs24 \

\f0\fs29\fsmilli14667 Dejar margen entre rangos de scroll.
\f1\fs24 \
}