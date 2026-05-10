const products = [
  // ALIMENTOS
  { id: 1, name: "Galletas Integrales",
    category: "Alimentos",
    image: "/imagenes/alimentos-galletas.webp",
    points: "1500",
    description: "Galletas integrales ideales para el desayuno o merienda. Ricas en fibra y sin conservantes artificiales."
  },
  { id: 2, name: "Quaker",
    category: "Alimentos",
    image: "/imagenes/alimentos-quaker.webp",
    points: "900",
    description: "Avena instantánea Quaker. Nutritiva y fácil de preparar, perfecta para empezar el día con energía."
  },
  { id: 3, name: "Paquete de Rapiditas",
    category: "Alimentos",
    image: "/imagenes/alimentos-rapiditas.webp",
    points: "1200",
    description: "Tapas de empanada Rapiditas. Versátiles y fáciles de usar, ideales para cualquier relleno."
  },

  // BEBIDAS
  { id: 4, name: "Whisky Escocés",
    category: "Bebidas",
    image: "/imagenes/bebidas-red-label.webp",
    points: "12000",
    description: "Whisky escocés Red Label. Suave y equilibrado, perfecto para compartir en ocasiones especiales."
  },
  { id: 5, name: "Jugo Baggio",
    category: "Bebidas",
    image: "/imagenes/bebidas-baggio.webp",
    points: "800",
    description: "Jugo de fruta Baggio. Refrescante y natural, disponible en varios sabores frutales."
  },
  { id: 6, name: "Cerveza Heineken",
    category: "Bebidas",
    image: "/imagenes/bebidas-cerveza.webp",
    points: "2200",
    description: "Pack de cervezas Heineken. La clásica lager internacional, ideal para momentos de relax."
  },

  // ELECTRONICA
  { id: 7, name: "Auriculares Bluetooth",
    category: "Electronica",
    image: "/imagenes/electrónica-auriculares.webp",
    points: "18000",
    description: "Auriculares inalámbricos con cancelación de ruido. Batería de larga duración y sonido de alta fidelidad."
  },
  { id: 8, name: "Smartwatch",
    category: "Electronica",
    image: "/imagenes/electrónica-smartwatch.webp",
    points: "25000",
    description: "Reloj inteligente con monitor de frecuencia cardíaca, GPS y notificaciones en tiempo real."
  },
  { id: 9, name: "Celular Iphone",
    category: "Electronica",
    image: "/imagenes/electrónica-iphone.webp",
    points: "95000",
    description: "Smartphone Apple iPhone. Rendimiento excepcional, cámara de alta resolución y diseño premium."
  },

  // INDUMENTARIA
  { id: 10, name: "Pantalones Cortos",
    category: "Indumentaria",
    image: "/imagenes/indumentaria-shorts.webp",
    points: "5500",
    description: "Shorts cómodos y livianos, ideales para el verano o actividades deportivas."
  },
  { id: 11, name: "Suéter",
    category: "Indumentaria",
    image: "/imagenes/indumentaria-suéter.webp",
    points: "7800",
    description: "Suéter de abrigo suave y elegante. Perfecto para los días frescos del otoño e invierno."
  },
  { id: 12, name: "Blusas",
    category: "Indumentaria",
    image: "/imagenes/indumentaria-blusas.webp",
    points: "4900",
    description: "Blusas livianas de moda. Diseño moderno y versátil, disponibles en varios colores."
  },

  // JUEGOS
  { id: 13, name: "Juego de Cartas - Uno",
    category: "Juegos",
    image: "/imagenes/juegos-uno.webp",
    points: "1800",
    description: "El clásico juego de cartas UNO. Diversión garantizada para toda la familia."
  },
  { id: 14, name: "Juego de Mesa - Domino",
    category: "Juegos",
    image: "/imagenes/juegos-domino.webp",
    points: "2100",
    description: "Set completo de dominó. El clásico juego de estrategia para 2 a 4 jugadores."
  },
  { id: 15, name: "Nintendo Switch",
    category: "Juegos",
    image: "/imagenes/juegos-nintendo.webp",
    points: "55000",
    description: "Consola Nintendo Switch. Jugá en tu televisor o llevala a donde quieras en modo portátil."
  },

  // AUTOMOTOR
  { id: 16, name: "Aceite de Motor",
    category: "Automotor",
    image: "",
    points: "3500",
    description: "Aceite sintético para motor. Protege el motor y mejora el rendimiento del vehículo."
  },
  { id: 17, name: "Kit de Herramientas",
    category: "Automotor",
    image: "",
    points: "8900",
    description: "Set completo de herramientas para el automóvil. Incluye llaves, destornilladores y más."
  },
  { id: 18, name: "Cargador de Batería",
    category: "Automotor",
    image: "",
    points: "6200",
    description: "Cargador inteligente para baterías de autos. Compatible con todos los tipos de baterías de 12V."
  },

  // HOGAR
  { id: 19, name: "Sofá 3 Cuerpos",
    category: "Hogar",
    image: "/imagenes/hogar-sillón.webp",
    points: "48000",
    description: "Sofá de 3 cuerpos tapizado en tela de alta calidad. Cómodo y moderno para tu living."
  },
  { id: 20, name: "Mesa Auxiliar",
    category: "Hogar",
    image: "/imagenes/hogar-mesita auxiliar.webp",
    points: "9500",
    description: "Mesa auxiliar de madera. Ideal para el living o dormitorio, diseño compacto y elegante."
  },
  { id: 21, name: "Silla",
    category: "Hogar",
    image: "/imagenes/hogar-silla.webp",
    points: "7200",
    description: "Silla de comedor resistente y cómoda. Diseño clásico que se adapta a cualquier ambiente."
  },

  // OTROS
  { id: 22, name: "Tarjeta de Regalo",
    category: "Otros",
    image: "",
    points: "5000",
    description: "Tarjeta de regalo canjeable en toda la tienda. El regalo perfecto cuando no sabés qué elegir."
  },
  { id: 23, name: "Mochila Urbana",
    category: "Otros",
    image: "",
    points: "11000",
    description: "Mochila urbana espaciosa con compartimento para laptop. Resistente al agua y con múltiples bolsillos."
  },
  { id: 24, name: "Set de Regalo",
    category: "Otros",
    image: "",
    points: "15000",
    description: "Set de regalo premium con productos seleccionados. Presentación especial lista para regalar."
  }
];

module.exports = products;