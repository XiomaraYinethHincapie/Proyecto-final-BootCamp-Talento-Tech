// Estructura de datos
const datosEncuesta = [
  {
    pregunta: "EDUCACION AMBIENTAL",
    opciones: [
      { opcion: "Capacitar estudiantes en tecnologias limpias", porcentaje: 90 },
      { opcion: "Charlas magistrales con Expertos", porcentaje: 60 },
      { opcion: "Campañas en Redes Sociales", porcentaje: 40 },
      { opcion: "Proyectos Comunitarios Ambientales", porcentaje: 80}
    ]
  },
  {
    pregunta: "TURISMO",
    opciones: [
      { opcion: "Ecoturismo Comunitario", porcentaje: 88 },
      { opcion: "Capacitar a Empresas turisticas", porcentaje: 50 },
      { opcion: "Alojamiento Cero Residuos", porcentaje: 70 },
      { opcion: "Transporte Turistico libre de emisiones", porcentaje: 40 }
    ]
  },

    {
    pregunta: "DUNAS",
    opciones: [
      { opcion: "Proyectos escolares de protección", porcentaje: 45 },
      { opcion: "Pasarelas elevadas y Zonas delimitadas", porcentaje: 65 },
      { opcion: "Restauración activa con Especies Nativas", porcentaje: 90 },
      { opcion: "Prohibición total de acceso", porcentaje: 30 }
    ]
  },

    {
    pregunta: "CENTRO DE INVESTIGACIÓN DEL OCEANO",
    opciones: [
      { opcion: "Programa de charlas mensuales", porcentaje: 35 },
      { opcion: "Laboratorio de Biotecnologia Marina", porcentaje: 68 },
      { opcion: "Acuario cientifico Interactivo", porcentaje: 55 },
      { opcion: "Centro de Monitoreo Integrado con Tecnologia avanzada", porcentaje: 92 }
    ]
  },

    {
    pregunta: "ACUEDUCTO y ALCANTARILLADO",
    opciones: [
      { opcion: "Sistema de Desalinización Sostenible", porcentaje: 90 },
      { opcion: "Programa para Proyectos de agua potable", porcentaje: 50 },
      { opcion: "Humedales Artificiales para tratamiento de aguas residuales", porcentaje: 70 },
      { opcion: "Campañas de Uso Racional del agua", porcentaje: 30 }
    ]
  },

    {
    pregunta: "ZONA RESIDENCIAL",
    opciones: [
      { opcion: "Minimizar residuos em la comunidad", porcentaje: 35 },
      { opcion: "Programa de residentes en Conversacion Costera", porcentaje: 65 },
      { opcion: "Urbanismo Ecologico Integrado", porcentaje: 93 },
      { opcion: "Ordenamiento en Zonas de alto Riesgo", porcentaje: 55 }
    ]
  },

    {
    pregunta: "INSTITUTO DE DESARROLLO URBANO",
    opciones: [
      { opcion: "Plan maestro de Adaptación Climatica", porcentaje: 95 },
      { opcion: "Maximizar uso de espacios en areas densas", porcentaje: 68 },
      { opcion: "Rediseño de Malecones Multifunciones", porcentaje: 35 },
      { opcion: "Guias de Autoconstrucción Sostenible", porcentaje: 40 }
    ]
  },

    {
    pregunta: " CIENAGA",
    opciones: [
      { opcion: "Sendero Ecoturistico Flotante", porcentaje: 45 },
      { opcion: "Restauración Hidrologica con Comunidades", porcentaje: 90 },
      { opcion: "Campañas de ayuda para la Cienaga", porcentaje: 25},
      { opcion: "Sostenibilidad de Especies Nativas", porcentaje: 15 }
    ]
  },

];

// Renderiza las preguntas y opciones en el DOM
function renderEncuesta() {
  const container = document.getElementById('encuesta-container');
  datosEncuesta.forEach((item, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const title = document.createElement('div');
    title.classList.add('question-title');
    title.textContent = item.pregunta;
    questionDiv.appendChild(title);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    item.opciones.forEach((opt, optIndex) => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `pregunta${index}`;
      radio.value = opt.porcentaje;
      label.appendChild(radio);
      label.append(` ${opt.opcion}`);
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    container.appendChild(questionDiv);
  });
}

// Calcula el promedio de los porcentajes seleccionados
function calcularPromedio() {
  let suma = 0;
  let conteo = 0;

  datosEncuesta.forEach((_, index) => {
    const seleccion = document.querySelector(`input[name=pregunta${index}]:checked`);
    if (seleccion) {
      suma += parseFloat(seleccion.value);
      conteo++;
    }
  });

  const resultadoDiv = document.getElementById('resultado');
  if (conteo === 0) {
    resultadoDiv.textContent = 'Por favor, selecciona al menos una opción.';
  } else {
    const promedio = (suma / conteo).toFixed(2);
    resultadoDiv.textContent = `Promedio de respuestas: ${promedio}%`;
  }
}

// Inicializa la encuesta y el botón
document.addEventListener('DOMContentLoaded', () => {
  renderEncuesta();
  document.getElementById('calcular-btn')
    .addEventListener('click', calcularPromedio);
});