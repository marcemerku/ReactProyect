let post=[
    {
        id:1,
        titulo:"AMD Radeon RX Vega 64 Review en Español (Análisis completo)",
        subtitulo:"Tras analizar hace unos días a la AMD Radeon RX VEGA 56 llega el momento de presentaros a su hermana mayor: la AMD Radeon RX VEGA 64",
        creador:"Ricardo",
        categoria:"Hardware",
        colum_01:"AMD nos presenta su tarjeta gráfica en una caja de color negro y con detalles en rojo. Un diseño elegante y que rápidamente se ensucia (como se puede apreciar), ya que antes de llegar a nosotros ha pasado por otras manos",
        colum_02:"Mientras que en la zona trasera nos avisa que necesitaremos una fuente de alimentación de 750W con dos conectores PCI Express de 8 pines.",
        colum_03:"La tarjeta gráfica AMD Radeon RX VEGA 64 viene diseñada con la nueva arquitectura de tarjetas gráficas VEGA 10 que se fabrica en una litografía de 14 nm FinFET y su DIE tiene un tamaño de 486 mm2.",
        colum_04:"Mientras que lo complementan un total de 256 unidades de texturizado (TMUs) y 64 unidades de rastrerizado (ROPs).",
        colum_05:"La versión RX VEGA 64 viene con el chip completo y sin ninguna limitación de fábrica."
    },
    {
        id:2,
        titulo:"Logitech G502",
        subtitulo:"Un nuevo mouse gamer de Logitech",
        creador:"Marcelo",
        categoria:"Hardware",
        colum_01:"Logitech es una de esas marcas que cuando hablamos de periféricos no necesita presentación. Su catálogo es tan sumamente amplio que tiene desde ratones ópticos básicos que apenas cuestan 4 ó 5 euros hasta periféricos Gaming de la más alta gama. Y es precisamente de esta última gama de la que os vamos a hablar, ya que en el día de hoy vamos a analizar el Logitech G502 Proteus Core recientemente lanzado al mercado.",
        colum_02:"Y no es un ratón cualquiera, ya que está llamado a ser el sucesor del famoso Logitech G9 y G9x, uno de los ratones buque insignia dentro de la categoría Gaming de la compañía.",
        colum_03:"El Logitech G502 Proteus Core cuenta con la tecnología exclusiva de la marca Delta Zero para proporcionar uno de los sensores más precisos del mercado. Éste combina un gran rango de resoluciones que van desde 200 hasta 12.000 DPI, y según Logitech es capaz de moverse a 300 pulgadas por segundo sin perder ni un solo píxel por el camino.",
        colum_04:"Está claro que nadie va a mover su ratón 300 pulgadas por segundo, pero la cifra es igualmente impresionante.",
        colum_05:"Esta cara principal se abre como si fuera un libro, y tras la tapa encontramos una breve descripción de su sensor Delta Zero en un lado, y el ratón tras un plástico transparente en el otro."
    },
    {
        id:3,
        titulo:"¿Por qué no deberías usar DLSS en Monster Hunter Rise de PC?",
        subtitulo:"Analizaremos las ventajas del DLSS",
        creador:"Ricardo",
        categoria:"Juegos",
        colum_01:"El DLSS promete generar imágenes a mayor resolución de salida sin deteriorar la calidad de las mismas en el proceso. ¿Su consecuencia más clara? Conseguir más fotogramas por segundo en los juegos que son compatibles. Sin embargo, a veces su uso tiene consecuencias inesperadas. Lo que nos lleva a resultados inesperados en los que la técnica de NVIDIA no es la mejor respuesta. Uno de los casos que más está dando que hablar en la comunidad son los efectos inesperados del DLSS para el Monster Hunter Rise en su versión para PC.",
        colum_02:"Las técnicas de escalado de imagen donde se busca reconstruir la misma imagen con más puntos en pantalla tienen un problema, se generan partes de la imagen donde no se sabe cuál es su valor de color, por lo que se han de adivinar. ",
        colum_03:"Las técnicas basadas en inteligencia artificial como el DLSS de NVIDIA se basan en el mismo principio que cuando se aprende a pintar un cuadro de memoria. A base de ensayo y error, la máquina aprende a ver los diferentes bloques y hacer reconstrucciones cada vez más precisas. Sin embargo, sus predicciones no son siempre precisas, ya que dependen de una serie de datos que son claves para la correcta generación del frame.",
        colum_04:"Varios usuarios al jugar a la conversión del juego de Capcom para la Nintendo Switch han observado como al reconstruir la imagen a mayor resolución en Monster Hunter Rise vía DLSS se pierde detalle. Como se puede ver en la imagen de abajo es el pelaje de los diferentes personajes del juego, así como el de los monstruos el que más se ve afectado por ello.",
        colum_05:"El motivo de ello es que en vez de usar vértices para modelar el pelaje de los diferentes personajes, lo que se usa es una técnica basada Fur Shading, el cual es una técnica artística que combina sombras y transparencias. "
    },
    {
        id:4,
        titulo:"¿Procesadores AMD Zen 4 en placas AM4? Podría ser una realidad",
        subtitulo:"Tras analizar hace unos días a la AMD Radeon RX VEGA 56 llega el momento de presentaros a su hermana mayor: la AMD Radeon RX VEGA 64",
        creador:"Ricardo",
        categoria:"hardware",
        colum_01:"Uno de los rumores en los últimos días es la aparición de procesadores Zen 4 bajo el socket AM4. Aparte de otras rumores alrededor de AMD sobre sus nuevos chips fuera del mapa de ruta ya conocido y revelado oficialmente. Algunos de ellos nos parecen posibles y entran dentro de toda la lógica del mundo,",
        colum_02:"al ser variaciones de productos ya existentes. Otros, en cambio, son un auténtico sinsentido y pese a que son posibles de construir, no tienen sentido en el futuro de las CPU de AMD, donde los protagonistas son la dupla AM5 y Zen 4.",
        colum_03:"Ejecutar un mapa de ruta es de las cosas más difíciles que existen para una compañía. Habitualmente cuando se hace una presentación de marketing no sale todo aquello que se encuentra en desarrollo, dado que muchos productos ",
        colum_04:"terminan cancelados por no tener sentido estratégico. Es decir, no aparecen por el hecho que no existe un grueso de consumidores que los demanden o este no es lo suficientemente atractivo. Por otro lado, tenemos el límite de obleas para fabricar chips,",
        colum_05:"Los procesadores Ryzen de AMD a día de hoy se dividen en dos partes diferentes, aparte de otros elemento adicionales que AMD va añadiendo para crear variaciones específicas:"
    }
]

export function getPost() {
    return post;
  }