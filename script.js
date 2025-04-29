// Datos de precios y especificaciones
const conceptos = {
    LONAS: [
        { nombre: "Arrendamiento y colocación de lonas de diferentes medidas, diferentes colores (blanco o amarilla) jornada de 1 día", precioDia: 9.29, precioAdicional: 9.29 },
        { nombre: "Arrendamiento y colocación de lonas de diferentes medidas, diferentes colores (blanco o amarilla) jornada por 2 a 3 días", precioDia: 7.90, precioAdicional: 7.90 },
        { nombre: "Arrendamiento y colocación de lonas de diferentes medidas, diferentes colores (blanco o amarilla) jornada por 4 días en adelante", precioDia: 6.97, precioAdicional: 6.97 },
        
    ],
    CARPAS: [
        { nombre: "Arrendamiento y colocación de carpas de diferentes medidas, color blanco con iluminación y las medidas de seguridad en la instalación Jornada de 1 día", precioDia:52.56, precioAdicional: 52.56 },
        { nombre: "Arrendamiento y colocación de carpas de diferentes medidas, color blanco con iluminación y las medidas de seguridad en la instalación  Jornada de 2 a 3 días", precioDia: 39.43, precioAdicional: 39.43 },
        { nombre: "Arrendamiento y colocación de carpas de diferentes medidas, color blanco con iluminación y las medidas de seguridad en la instalación  Jornada por 4 días en adelante", precioDia: 36.80, precioAdicional: 36.80 }
    ],
   
    TEMPLETES: [
        { nombre: "Arrendamiento y colocación de templetes de diferentes medidas y alturas, alfombrado con faldón de acuerdo a los requerimientos de la alcaldía Jornada de 1 día", precioDia: 52.56, precioAdicional: 52.56 },
        { nombre: "Arrendamiento y colocación de templetes de diferentes medidas y alturas, alfombrado con faldón de acuerdo a los requerimientos de la alcaldía Jornada por 2 a 3 días en adelante", precioDia: 39.43, precioAdicional: 39.43 },
        { nombre: "Arrendamiento y colocación de templetes de diferentes medidas y alturas, alfombrado con faldón de acuerdo a los requerimientos de la alcaldía Jornada por 4 días en adelante", precioDia: 36.80, precioAdicional: 36.80 }
    ],
    TARIMAS: [
        { nombre: "Arrendamiento de tarimas a ras de piso que se requieren para formar entarimados de diferentes medidas Jornada de 1 día", precioDia: 52.56, precioAdicional: 52.56 },
        { nombre: "Arrendamiento de tarimas a ras de piso que se requieren para formar entarimados de diferentes medidas Jornada por 2 a 3 días en adelante", precioDia: 39.43, precioAdicional: 39.43 },
        { nombre: "Arrendamiento de tarimas a ras de piso que se requieren para formar entarimados de diferentes medidas Jornada por 4 días en adelante", precioDia: 36.80, precioAdicional: 36.80 }
    ],
    MANAPARAS: [
        { nombre: "Arrendamiento y montaje de mamparas fondeadas en color blanco medida de 1.22 x 2.44 Jornada de 1 día", precioDia: 173.39, precioAdicional: 173.39 },
        { nombre: "Arrendamiento y montaje de mamparas fondeadas en color blanco medida de 1.22 x 2.44 Jornada de 2 a 3 días", precioDia: 130.05, precioAdicional: 130.05 },
        { nombre: "Arrendamiento y montaje de mamparas fondeadas en color blanco medida de 1.22 x 2.44 Jornada por 4 días en adelante", precioDia: 121.37, precioAdicional: 121.37 }
    ],
    SILLAS_PLASTICAS_PLEGADIZAS: [
        { nombre: "Arrendamiento de sillas plásticas plegadizas  Jornada de 1 día",precioDia: 5.42, precioAdicional: 5.42},
        { nombre: "Arrendamiento de sillas plásticas plegadizas  Jornada de 2 a 3 días", precioDia: 4.07, precioAdicional: 4.07 },
        { nombre: "Arrendamiento de sillas plásticas plegadizas  Jornada por 4 días en adelante", precioDia: 3.80, precioAdicional: 3.80 }
    ],
    SILLAS_PLASTICAS_ACOJINADAS: [
        { nombre: "Arrendamiento de sillas plegadizas acojinadas Jornada de 1 día",precioDia: 8.53, precioAdicional: 8.53},
        { nombre: "Arrendamiento de sillas plegadizas acojinadas Jornada de 2 a 3 días", precioDia: 6.40, precioAdicional: 6.40 },
        { nombre: "Arrendamiento de sillas plegadizas acojinadas Jornada por 4 días en adelante", precioDia: 5.97, precioAdicional: 5.97}
    ],
    SILLAS_DE_VISTA_ISO_ACOJINADAS_EN_PLIANA: [
        { nombre: "Arrendamiento de sillas de visita ISO acojinadas en plana, sin descansa brazos, apilables Jornada de 1 día",precioDia: 36.14, precioAdicional: 36.14},
        { nombre: "Arrendamiento de sillas de visita ISO acojinadas en plana, sin descansa brazos, apilables Jornada de 2 a 3 días", precioDia: 27.11, precioAdicional: 27.11 },
        { nombre: "Arrendamiento de sillas de visita ISO acojinadas en plana, sin descansa brazos, apilables Jornada por 4 días en adelante", precioDia: 25.30, precioAdicional: 25.30}
    ],
    TABLONES: [
        { nombre: "Arrendamiento de tablones de 76 cm. de ancho y 2.44 mt. de largo x 75 cm. de altura (tablón para 10 personas) Jornada de 1 día",precioDia: 39.78, precioAdicional: 39.78,},
        { nombre: "Arrendamiento de tablones de 76 cm. de ancho y 2.44 mt. de largo x 75 cm. de altura (tablón para 10 personas) Jornada de 2 a 3 días", precioDia: 29.83, precioAdicional: 29.83 },
        { nombre: "Arrendamiento de tablones de 76 cm. de ancho y 2.44 mt. de largo x 75 cm. de altura (tablón para 10 personas) Jornada por 4 días en adelante", precioDia: 27.84, precioAdicional: 27.84}
    ],
    MANTELES_PARA_TABLON: [
        { nombre: "Arriendo de manteles para tablón en color blanco y/o diversos colores jornada de 1 día",precioDia: 39.78, precioAdicional: 39.78,},
        { nombre: "Arriendo de manteles para tablón en color blanco y/o diversos colores jornada de 2 a 3 días", precioDia: 29.83, precioAdicional: 29.83 },
        { nombre: "Arriendo de manteles para tablón en color blanco y/o diversos colores jornada por 4 días en adelante", precioDia: 27.84, precioAdicional: 27.84}
    ],
    PAÑOS_DE_DIFERENTES_COLORES: [
        { nombre: "Arriendo de paños de diferentes colores para tablones jornada de 1 día",precioDia: 99.46, precioAdicional: 99.46,},
        { nombre: "Arriendo de paños de diferentes colores para tablones jornada por 2 a 3 días", precioDia: 74.59, precioAdicional: 74.59},
        { nombre: "Arriendo de paños de diferentes colores para tablones jornada por 4 días en adelante", precioDia: 69.62, precioAdicional: 69.62}
    ],
    MESA_REDONDA: [
        { nombre: "Arriendo de mesa redonda de 1.50 de diámetro cubierta de triplay y en pino de 6 mm. jornada de 1 día",precioDia: 45.34, precioAdicional:45.34,},
        { nombre: "Arriendo de mesa redonda de 1.50 de diámetro cubierta de triplay y en pino de 6 mm. jornada de 2 a 3 días", precioDia: 34.01, precioAdicional: 34.01},
        { nombre: "Arriendo de mesa redonda de 1.50 de diámetro cubierta de triplay y en pino de 6 mm. jornada por 4 días en adelante", precioDia: 31.73, precioAdicional: 31.73}
    ],
    MANTELES_PARA_MESAS_REDONDAS: [
        { nombre: "Arriendo de manteles para mesas redondas de 1.50 mts. de diámetro de diferentes colores jornada de 1 día",precioDia: 45.34, precioAdicional:45.34,},
        { nombre: "Arriendo de manteles para mesas redondas de 1.50 mts. de diámetro de diferentes colores jornada de 2 a 3 días", precioDia: 34.01, precioAdicional: 34.01},
        { nombre: "Arriendo de manteles para mesas redondas de 1.50 mts. de diámetro de diferentes colores jornada por 4 días en adelante", precioDia: 31.73, precioAdicional: 31.73}
    ],
  
    CUBRE_MANTELES_DE_DIFERENTES_COLORES: [
        { nombre: "Arriendo de cubre manteles de diferentes colores jornada de 1 día",precioDia: 39.78, precioAdicional:39.78,},
        { nombre: "Arriendo de cubre manteles de diferentes colores jornada de 2 a 3 días", precioDia: 29.83, precioAdicional: 29.83},
        { nombre: "Arriendo de cubre manteles de diferentes colores jornada por 4 días en adelante", precioDia: 27.84, precioAdicional: 27.84}
    ],
    CINTAS_PARA_MOÑOS_DE_DIFERENTE_COLOR: [
        { nombre: "Arriendo de cintas para moños de diferentes colores jornada de 1 día",precioDia: 17.87, precioAdicional:17.87,},
        { nombre: "Arriendo de cintas para moños de diferentes colores jornada de 2 a 3 días", precioDia: 13.40, precioAdicional: 13.40},
        { nombre: "Arriendo de cintas para moños de diferentes colores jornada por 4 días en adelante", precioDia: 12.51, precioAdicional: 12.51}
    ],
   FUNDA_FRANCESA_PARA_SILLAS_DE_DIFERENTES_COLORES: [
        { nombre: "Arriendo de funda francesa para sillas de diferentes colores jornada de 1 día",precioDia: 26.31, precioAdicional:26.31,},
        { nombre: "Arriendo de funda francesa para sillas de diferentes colores jornada de 2 a 3 días", precioDia: 19.73, precioAdicional: 19.73},
        { nombre: "Arriendo de funda francesa para sillas de diferentes colores jornada por 4 días en adelante", precioDia: 18.42, precioAdicional: 18.42}
    ],
    SALA_LOUNGE: [
        { nombre: "Arriendo de sala lounge jornada de 1 día", precioDia: 1239.24, precioAdicional: 1239.24 },
        { nombre: "Arriendo de sala lounge jornada de 2 a 3 días", precioDia: 929.43, precioAdicional: 929.43 },
        { nombre: "Arriendo de sala lounge jornada por 4 días en adelante", precioDia:867.47 , precioAdicional: 867.47 }
    ],
    MEGA_DOMO: [
        { nombre: "Arriendo de mega domo (escenario semiesférico, transportable, armado de estructuras metálicas de PTR, calibre 14.2, antiflamable y antihongos, con blanca blockout de 21 onzas jornada de 1 día", precioDia: 134.25, precioAdicional: 134.25 },
        { nombre: "Arriendo de mega domo (escenario semiesférico, transportable, armado de estructuras metálicas de PTR, calibre 14.2, antiflamable y antihongos, con blanca blockout de 21 onzas jornada de 2 a 3 días", precioDia: 100.69, precioAdicional: 100.69 },
        { nombre: "Arriendo de mega domo (escenario semiesférico, transportable, armado de estructuras metálicas de PTR, calibre 14.2, antiflamable y antihongos, con blanca blockout de 21 onzas jornada por 4 días en adelante", precioDia: 93.98, precioAdicional: 93.98 }
    ],
    SANITARIOS_PORTÁTILES: [
        { nombre: "Sanitarios portátiles estándar fabricado en plástico de alto impacto jornada de 1 día (mantenimiento y servicio de limpieza será a partir del término de cada jornada)", precioDia: 1471.60, precioAdicional: 1471.60 },
        { nombre: "Sanitarios portátiles estándar fabricado en plástico de alto impacto jornada de 2 a 3 días (el mantenimiento y servicio de limpieza será a partir del término de cada jornada)", precioDia: 1250.86, precioAdicional: 1250.86 },
        { nombre: "Sanitarios portátiles estándar fabricado en plástico de alto impacto jornada por 4 días en adelante (el mantenimiento y servicio de limpieza será a partir del término de cada jornada)", precioDia: 1103.70, precioAdicional: 1103.70 }
    ],
    
    RENTA_E_INSTALACIÓN_DE_PASARELA: [
        { nombre: "Renta e instalación de pasarela de estructura metálica de 60 metros de largo x 2 metros de ancho y 2.10 metros de altura, con barandales en un extremo y 2 escaleras de acceso jornada de 1 día", precioDia: 30981.00, precioAdicional: 30981.00 },
        { nombre: "Metros de largo x 1 metro de ancho y 2.10 metros de altura,con barandales en un extremo,2 escaleras de acesso jornada de 2 a 3 días", precioDia: 23235.75, precioAdicional: 23235.75 },
        { nombre: "Renta e instalacion de pasarela de estructura metálica de 60 metros de largo X 1 metro de ancho y 2.10 metros de altura,con barandales en un extremo,2 escaleras de acceso jornada por 4 días en adelante", precioDia: 21686.70, precioAdicional: 21686.70 }
    ]


};   

// Mostrar campos específicos según el tipo de concepto seleccionado
function mostrarCamposConcepto() {
    const tipo = document.getElementById('tipoConcepto').value;
    const divCampos = document.getElementById('camposConcepto');
    divCampos.innerHTML = '';
  
    if (!tipo) return;
  
    // Crear select para elegir el concepto específico
    const select = document.createElement('select');
    select.id = 'conceptoEspecifico';
    select.style.width = '100%';
    select.style.marginBottom = '10px';
  
    // Agregar opciones según el tipo
    conceptos[tipo].forEach(item => {
      const option = document.createElement('option');
      option.value = JSON.stringify(item); // Guardamos el objeto completo como string
      option.textContent = item.nombre;
      select.appendChild(option);
    });
  
    divCampos.appendChild(select);
  
    // Campos comunes
    const divCantidad = document.createElement('div');
    divCantidad.innerHTML = '<label>Pieza:</label><input type="number" id="cantidad" min="1" value="1" required>';
    divCampos.appendChild(divCantidad);
  
    // Campos adicionales para productos con dimensiones
    if (tipo === 'LONAS' || tipo === 'CARPAS' || tipo === 'TEMPLETES'|| tipo === 'TARIMAS'|| tipo === 'MEGA_DOMO' || tipo === 'RENTA_E_INSTALACIÓN_DE_PASARELA'  ) {
      const divDimensiones = document.createElement('div');
      divDimensiones.innerHTML = `
        <label>Ancho (m):</label>
        <input type="number" id="ancho" step="0.1" min="0.1" required>
        <label>Largo (m):</label>
        <input type="number" id="largo" step="0.1" min="0.1" required>
      `;
      divCampos.appendChild(divDimensiones);
    }
  }
  
  // Agregar concepto a la tabla
  function agregarConcepto() {
      const tipo = document.getElementById('tipoConcepto').value;
      if (!tipo) {
        alert('SELECCIONE UN TIPO DE CONCEPTO');
        return;
      }
    
      const conceptoObj = JSON.parse(document.getElementById('conceptoEspecifico').value);
      const cantidad = parseInt(document.getElementById('cantidad').value);
      const duracion = parseInt(document.getElementById('duracion').value);
      
      let nombreConcepto = conceptoObj.nombre;
      let precioUnitario = conceptoObj.precioDia; // Precio del primer día
      let total = 0;
    
      // Calcular precio según días (aplicando descuento por días adicionales)
      if (duracion === 1) {
        total = precioUnitario * cantidad;
      } else {
        // Para el segundo día, usar el precio adicional
        if (duracion === 2) {
          precioUnitario = conceptoObj.precioAdicional; // Precio del segundo día
        } else {
          // Para más de 2 días, usar el precio adicional para los días adicionales
          total = precioUnitario * cantidad + (conceptoObj.precioAdicional * (duracion - 1) * cantidad);
          precioUnitario = (total / (cantidad * duracion)); // Mostrar precio unitario promedio
        }
        total = (precioUnitario * cantidad) + (conceptoObj.precioAdicional * (duracion - 1) * cantidad);
      }
    
      // Ajustar para productos con dimensiones
      if (tipo === 'LONAS' || tipo === 'CARPAS' || tipo === 'TEMPLETES'|| tipo === 'TARIMAS'|| tipo === 'MEGA_DOMO' || tipo === 'RENTA_E_INSTALACIÓN_DE_PASARELA') {
        const ancho = parseFloat(document.getElementById('ancho').value);
        const largo = parseFloat(document.getElementById('largo').value);
        
        if (ancho && largo) {
          const area = ancho * largo;
          nombreConcepto += ` (${ancho}m x ${largo}m = ${area}m²)`;
          
          if (duracion === 1) {
            total = precioUnitario * area * cantidad;
          } else {
            total = (precioUnitario * area * cantidad) + (conceptoObj.precioAdicional * area * (duracion - 1) * cantidad);
          }
          
          precioUnitario = total / (area * cantidad);
        }
      }
    
// Agregar a la tabla
const tabla = document.getElementById('tablaConceptos');
const fila = tabla.insertRow();

fila.insertCell(0).textContent = nombreConcepto;
fila.insertCell(1).textContent = cantidad;
fila.insertCell(2).textContent = `$${precioUnitario.toFixed(2)}`;
fila.insertCell(3).textContent = duracion + (duracion === 1 ? " día" : " días");
fila.insertCell(4).textContent = `$${total.toFixed(2)}`;
    
      // Calcular total general
      calcularTotal();
    }
  // Borrar todos los datos
  function borrarDatos() {
      if (confirm('¿ESTÁ SEGURO QUE DESEA BORRAR TODOS LOS CONCEPTOS?')) {
          document.getElementById('tablaConceptos').innerHTML = '';
          calcularTotal();
      }
  }
  
 // Calcular el total general
function calcularTotal() {
    const filas = document.getElementById('tablaConceptos').rows;
    let totalGeneral = 0;
    
    for (let i = 0; i < filas.length; i++) {
        const totalTexto = filas[i].cells[4].textContent.replace('$', '').replace(',', '');
        const total = parseFloat(totalTexto);
        if (!isNaN(total)) {
            totalGeneral += total;
        }
    }
    
    document.getElementById('total').textContent = `TOTAL: $${totalGeneral.toFixed(2)}`;
}

// Definición de las áreas específicas para cada dirección general
const areasEspecificas = {
    DIRECCION_GENERAL_DE_GOBIERNO_Y_ASUNTOS_JURIDICOS: [
        { nombre: "JUD DE LICENCIAS Y CONTROL VEHICULAR" },
        { nombre: "DIRECCIÓN DE GOBIERNO Y POBLACIÓN" },
        { nombre: "JUD DE PANTEONES" },
        { nombre: "JUD DE LICENCIAS, GIROS MERCANTILES Y ESPECTÁCULOS PÚBLICOS " },
        { nombre: "JUD DE MERCADOS" },
        { nombre: "JUD DE VÍA PÚBLICA" },
        { nombre: "DIRECCIÓN JURÍDICA" },
        { nombre: "DIRECCIÓN JURÍDICA" },
        { nombre: "JUD DE RESOLUCIONES ADMINISTRATIVAS" },
        { nombre: "JUD DE LO CONTENCIOSO Y AMPAROS" },
        { nombre: "SUBDIRECCIÓN DE DICTAMINACIÓN Y ANÁLISIS" },
        { nombre: "DIRECCIÓN DE PLANEACION Y ORDENAMIENTO TERRITORIAL SUSTENTABLE" },
        { nombre: "JUD DE VIGILANCIA Y PROTECCIÓN AL SUELO DE CONSERVACIÓN" },
        { nombre: "JUD DE GESTIÓN PARA LA ASIGNACIÓN Y REGULARIZACIÓN DE BIENES DEL DOMINIO PÚBLICO " },
        { nombre: "SUBDIRECCIÓN DE PLANEACIÓN DEL DESARROLLO Y GESTIÓN METROPOLITANA" },
        { nombre: "JUD DE PROGRAMAS Y ANÁLISIS" },
        { nombre: "DIRECCIÓN DE VERIFICACIÓN Y REGLAMENTOS" },
        { nombre: "SUBDIRECCIÓN DE VERIFICACIÓN" }
    ],
    DIRECCION_GENERAL_DE_ADMINISTRACION: [
        { nombre: "JUD DE TEGNOLOGÍAS DE LA INFORMACIÓN Y LA COMUNICACIÓN" },
        { nombre: "DIRECCIÓN DE RECURSOS FINANCIEROS" },
        { nombre: "JUD DE RECURSOS AUTOGENERADOS" },
        { nombre: "JUD DE CONTABILIDAD" },
        { nombre: "SUBDIRECCIÓN DE FINANZAS Y PRESUPUESTO" },
        { nombre: "DIRECCIÓN DE ADMINISTRACIÓN DE PERSONAL" },
        { nombre: "JUD DE RELACIONES LABORALES Y PRESTACIONES LABORALES " },
        { nombre: "JUD DE PLANEACIÓN, EMPLEO Y MOVIMIENTOS " },
        { nombre: "JUD DE NOMINAS Y PAGOS" },
        { nombre: "SUBDIRECCIÓN DE DESARROLLO DE PERSONAL Y MODERNIZACIÓN ADMINISTRATIVA" },
        { nombre: "JUD DE CAPACITACIÓN Y DESARROLLO DE PERSONAL " },
        { nombre: "DIRECCIÓN DE ADQUISICIONES, RECURSOS MATERIALES Y SERVICIOS GENERALES " },
        { nombre: "JUD DE APOYOS LOGÍSTÍCOS " },
        { nombre: "JUD DE SERVICIOS GENERALES " },
        { nombre: "SUBDIRECCIÓN DE RECURSOS MATERIALES" },
        { nombre: "JUD DE ADQUISICIONES" },
        { nombre: "JUD DE ALMACENES E INVENTARIOS" },
        { nombre: "SUBDIRECCIÓN DE TRANSPORTES" },
        { nombre: "JUD DE TRANSPORTES Y TALLERES" }   
    ],
    DIRECCION_GENERAL_DE_SERVICIOS_URBANOS: [
        { nombre: "DIRECCIÓN DE SERVICIOS ECOLÓGICOS Y URBANOS" },
        { nombre: "JUD DE PARQUES Y JARDINES" },
        { nombre: "JUD DE  LIMPIA" },
        { nombre: "DIRECCIÓN DE MEJORAMIENTO URBANO" },
        { nombre: "JUD DE ALUMBRADO PÚBLICO" },
        { nombre: "JUD DE IMAGEN URBANA" },
        { nombre: "JUD DE REFORESTACIÓN" }
    ],
    DIRECCION_GENERAL_DE_OBRAS_Y_DESARROLLO_URBANO: [
        { nombre: "JUD DE AGUA POTABLE " },
        { nombre: "JUD DE DRENAJE" },
        { nombre: "DIRECCIÓN DE OBRAS Y MANTENIMIENTO" },
        { nombre: "JUD DE CONSERVACIÓN Y MANTENIMIENTO DE EDIFICIOS" },
        { nombre: "JUD DE OBRAS VIALES" },
        { nombre: "JUD DE SUPERVISIÓN TÉCNICA" },
        { nombre: "DIRECCIÓN DE MOVILIDAD" },
        { nombre: "JUD DE CIRCULACIÓN VIAL" },
        { nombre: "JUD DE TRANSPORTE URBANO" },
        { nombre: "DIRECCIÓN DE MANIFESTACIONES, LICENCIAS Y USO DE SUELO" },
        { nombre: "JUD DE ALINEACIÓN Y NÚMERO OFICIAL, MANIFESTACIONES Y LICENCIAS DE CONSTRUCCIÓN" },
        { nombre: " JUD DE ORDENAMIENTO TERRITORIAL" }
    ],
    DIRECCION_GENERAL_DE_DESARROLLO_SOCIAL_Y_BIENESTAR: [
        { nombre: "JUD DE PROYECTOS MUSEOGRÁFICOS" },
        { nombre: "JUD DE ATENCIÒN A PUEBLOS ORIGINARIOS " },
        { nombre: "SUBDIRECCIÓN DE DERECHOS HUMANOS E IGUALDAD SUSTANTIVA" },
        { nombre: "JUD DE LA JUVENTUD" },
        { nombre: "JUD DE IGUALDAD SUSTANTIVA" },
        { nombre: "DIRECCIÓN DE SERVICIOS EDUCATIVOS Y ASISTENCIA MÉDICA " },
        { nombre: "JUD DE SALUD PÚBLICA" },
        { nombre: "JUD DE PROTECCIÓN A ANIMALES" },
        { nombre: "SUBDIRECCIÓN DE SERVICIOS EDUCATIVOS " },
        { nombre: "JUD DE CENTROS DE ENSEÑANZA Y DESARROLLO INFANTIL " },
        { nombre: "JUD DE APOYO EDUCATIVO " },
        { nombre: "DIRECCIÓN DE DERECHOS CULTURALES, RECREATIVOS Y PROMOCIÓN DEPORTIVA " },
        { nombre: "JUD DE PROYECTOS CULTURALES " },
        { nombre: "JUD  DE ACTIVIDADES RECREATIVAS" },
        { nombre: "JUD DE PROMOCIÓN DEPORTIVA" },
        { nombre: "DIRECCIÓN DE SERVICIOS SOCIALES Y PROGRAMAS COMUNITARIOS" },
        { nombre: "JUD DE SERVICIOS SOCIALES" },
        { nombre: "JUD DE BIENESTAR SOCIAL" },
        { nombre: "JUD DE PROGRAMAS COMUNITARIOS" }
    ],
    DIRECCION_GENERAL_DE_DESARROLLO_ECONOMICO_Y_RURAL: [
        { nombre: "JUD DE ASUNTOS AGRARIOS" },
        { nombre: "DIRECCIÓN DEL BOSQUE DE TLÁHUAC " },
        { nombre: "JUD DE CENTROS GENERADORES DEL BOSQUE DE TLÁHUAC " },
        { nombre: "DIRECCIÓN DE DESARROLLO RURAL" },
        { nombre: "SUBDIRECCIÓN DE DESARROLLO AGROPECUARIO" },
        { nombre: "JUD DE FOMENTO A LA PRODUCCIÓN AGROPECUARIA" },
        { nombre: "JUD DE CAPACITACIÓN Y DIFUSIÓN AGROPECUARIA" },
        { nombre: "SUBDIRECCIÓN DE INFRAESTRUCTURA RURAL Y ECOLÓGICA" },
        { nombre: "JUD DE INFRAESTRUCTURA HIDROAGRÍCOLA" },
        { nombre: "JUD DE CONSERVACIÓN AMBIENTAL" },
        { nombre: "DIRECCIÓN DE FOMENTO ECONÓMICO Y COOPERATIVO" },
        { nombre: "JUD DE FOMENTO EMPRESARIAL" },
        { nombre: "JUD DE FOMENTO COOPERATIVO Y ORGANIZACIÓN DE PRODUCTORES" },
        { nombre: "SUBDIRECCIÓN DE FOMENTO ECONÓMICO" },
        { nombre: "JUD DE ABASTO Y COMERCIALIZACIÓN" },
        { nombre: "JUD DE FOMENTO A LA ACTIVIDAD TURÍSTICA" }
    ],
    DIRECCION_GENERAL_DE_PARTICIPACION_CIUDADANA: [
        { nombre: "DIRECCIÓN DE ATENCIÓN A UNIDADES HABITACIONALES" },
        { nombre: "JUD DE INTEGRACIÓN Y PARTICIPACIÓN VECINAL EN UNIDADES HABITACIONALES" },
        { nombre: "JUD DE APOYO AL MANTENIMIENTO Y CONSERVACIÓN DE UNIDADES HABITACIONALES" },
        { nombre: "DIRECCIÓN DE GESTIÓN Y ATENCIÓN VECINAL" },
        { nombre: "JUD DE PROMOCIÓN CIUDADANA" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL DEL MAR" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL NOPALERA" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL DE LOS OLIVOS" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL MIGUEL HIDALGO" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL SANTIAGO ZAPOTITLÁN" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL ZAPOTITLA" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL SANTA CATARINA YECAHUITZOTL" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL SAN FRANCISCO TLALTENCO" },
        { nombre: "JUD DE COORDINACIÓN TERRITORIAL SAN PEDRO TLÁHUAC" },
        { nombre: "JUD DE COORDINACION TERRITORIAL SAN JUAN IXTAYOPAN" },
        { nombre: "JUD DE COORDINACIÓN TERITORIAL SAN NICOLÁS TETELCO" },
        { nombre: " JUD DE COORDINACIÓN TERRITORIAL SAN ÁNDRES MIXQUIC" }
    ],
    DIRECCION_SEGURIDAD_CIUDADANA: [
        { nombre: "SUBDIRECCIÓN DE PROTECCIÓN CIUDADANA" },
        { nombre: "JUD DE PREVENCIÓN DEL DELITO" },
        { nombre: "JUD DE COORDINACIÓN, EVALUACIÓN Y SEGUIMIENTO" },
        { nombre: "DIRECCIÓN DE GESTIÓN INTEGRAL DE RIESGOS Y PROTECCIÓN CIVIL" },
        { nombre: "JUD DE SISTEMAS DE DETECCIÓN DE MONITOREO Y PRONÓSTICO" },
        { nombre: "JUD DE CAPACITACIÓN Y ENLACE INTERINSTITUCIONAL " },
        { nombre: "CONCEJAL" }
    ]
};




function mostrarCamposArea() {
    const areaSeleccionada = document.getElementById('areaSolicitante').value;
    const divCampos = document.getElementById('camposAreaEspecifica');
    
    // Limpiar el div antes de agregar nuevos campos
    divCampos.innerHTML = '';
    
    if (areaSeleccionada && areasEspecificas[areaSeleccionada]) {
        // Crear un nuevo div con la clase area-group para mantener el mismo estilo
        const nuevoAreaGroup = document.createElement('div');
        nuevoAreaGroup.className = 'area-group';
        
        // Crear el título
        const titulo = document.createElement('label');
        titulo.textContent = 'Área Encargada del Evento:';
        nuevoAreaGroup.appendChild(titulo);
        
        // Crear un nuevo select con los mismos atributos que el original
        const select = document.createElement('select');
        select.name = 'areaEspecifica';
        select.id = 'areaEspecifica';
        select.required = true;
        
        // Agregar opción por defecto
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Elige una area';
        select.appendChild(defaultOption);
        
        // Agregar opciones para cada área específica
        areasEspecificas[areaSeleccionada].forEach(area => {
            const option = document.createElement('option');
            option.value = area.nombre;
            option.textContent = area.nombre;
            select.appendChild(option);
        });
        
        // Agregar el select al div
        nuevoAreaGroup.appendChild(select);
        
        // Agregar el nuevo div al contenedor principal
        divCampos.appendChild(nuevoAreaGroup);
    }
}


function exportarExcel() {
    // Obtener datos del formulario
    const evento = document.getElementById('evento').value || '';
    const fechaCotizacion = document.getElementById('fechaCotizacion').value || '';
    const nombreSolicitante = document.getElementById('nombreSolicitante').value || '';
    const fechaEvento = document.getElementById('fechaEvento').value || '';
    const fechaTermino = document.getElementById('fechaTermino').value || '';
    const duracion = document.getElementById('duracion').value || '';
    const areaSolicitante = document.getElementById('areaSolicitante').value || '';
    const areaEncargada = document.getElementById('areaEspecifica') ? document.getElementById('areaEspecifica').value : '';
    const observaciones = document.getElementById('observaciones').value || '';

    // Crear contenido HTML con formato para Excel
    let htmlContent = `
    <head>
    <!--[if gte mso 9]>
    <xml>
    <x:ExcelWorkbook>
    <x:ExcelWorksheets>
    <x:ExcelWorksheet>
    <x:Name>Cotización</x:Name>
    <x:WorksheetOptions>
    <x:DisplayGridlines/>
    </x:WorksheetOptions>
    </x:ExcelWorksheet>
    </x:ExcelWorksheets>
    </x:ExcelWorkbook>
    </xml>
    <![endif]-->
    <style>
    td {
        font-family: 'Century Gothic', sans-serif;
        text-align: center;
        vertical-align: middle;
        font-family: Arial;
    }
    .titulo {
        font-family: 'Century Gothic', sans-serif;
        font-size: 16pt;
        font-weight: bold;
        text-align: center;
    }
    .titulo-negro-blanco {
        font-family: 'Century Gothic', sans-serif;
        font-size: 16pt;
        font-weight: bold;
        text-align: center;
        background-color: #000000;
        color: white;
        padding: 5px;
    }
    .encabezado {
        font-weight: bold;
        background-color: #f2f2f2;
    }
    .total {
        font-family: 'Century Gothic', sans-serif;
        font-weight: bold;
        text-align: right;
        padding-right: 20px;
    }
    .observaciones {
        text-align: left;
        padding: 10px;
    }
    </style>
    </head>
    <body>
    <table border="1" cellpadding="3" cellspacing="0" style="border-collapse: collapse; width: 100%">
    `;

    // Añadir título centrado con fondo negro y letras blancas
    htmlContent += `
    <tr>
        <td colspan="4" class="titulo-negro-blanco">INFORME DE COTIZACIÓN DE EVENTO</td>
    </tr>
    <tr><td colspan="4"></td></tr>
    `;
    htmlContent += `
    <tr>
        <td width="25%" style="font-family: 'Century Gothic', sans-serif;"><strong>Nombre del Evento:</strong></td>
        <td width="25%" style="font-family: 'Century Gothic', sans-serif;">${evento}</td>
        <td width="25%" style="font-family: 'Century Gothic', sans-serif;"><strong>Fecha de Cotización:</strong></td>
        <td width="25%" style="font-family: 'Century Gothic', sans-serif;">${fechaCotizacion}</td>
    </tr>
    <tr>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Nombre del Solicitante:</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${nombreSolicitante}</td>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Fecha del Evento:</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${fechaEvento}</td>
    </tr>
    <tr>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Duración (Días):</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${duracion}</td>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Fecha de Termino:</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${fechaTermino}</td>
    </tr>
    <tr>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Área Solicitante:</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${areaSolicitante}</td>
        <td style="font-family: 'Century Gothic', sans-serif;"><strong>Área Encargada del Evento:</strong></td>
        <td style="font-family: 'Century Gothic', sans-serif;">${areaEncargada}</td>
    </tr>
    <tr><td colspan="4"></td></tr>
    `;

    // Encabezados de tabla
    htmlContent += `
    <tr class="encabezado">
        <td width="30%">CONCEPTO</td>
        <td width="20%">PIEZA</td>
        <td width="20%">PRECIO UNITARIO</td>
        <td width="30%">TOTAL</td>
    </tr>
    `;

    // Datos de la tabla
    const tabla = document.getElementById('tablaConceptos');
    for (let i = 0; i < tabla.rows.length; i++) {
        const row = tabla.rows[i];
        htmlContent += `
        <tr>
            <td>${row.cells[0].textContent.trim()}</td>
            <td>${row.cells[1].textContent.trim()}</td>
            <td>${row.cells[2].textContent.trim()}</td>
            <td>${row.cells[4].textContent.trim()}</td>
        </tr>
        `;
    }

    // Añadir total
    htmlContent += `
    <tr>
        <td colspan="3" class="total">TOTAL:</td>
        <td class="total">${document.getElementById('total').textContent.trim() || '0.00'}</td>
    </tr>
    `;

    // Añadir observaciones debajo de la tabla
    if (observaciones) {
        htmlContent += `
        <tr><td colspan="4"></td></tr>
        <tr>
            <td colspan="4" class="observaciones">
                <strong>Observaciones:</strong><br>
                ${observaciones.replace(/\n/g, '<br>')}
            </td>
        </tr>
        `;
    }

    // Cerrar tabla y documento HTML
    htmlContent += `
    </table>
    </body>
    </html>
    `;

    // Crear y descargar el archivo con la extensión correcta (.xls o .html)
    const blob = new Blob(["\uFEFF" + htmlContent], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Cotización_de_Evento_${evento.replace(/ /g, '_')}_${fechaCotizacion.replace(/\//g, '-')}.xls`;
    link.click();
}
function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configuración inicial
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    
    // Encabezado
    doc.setFontSize(16);
    doc.text('INFORME DE COTIZACIÓN DE EVENTO', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    
    // Información del evento
    let y = 30;
    doc.text(`Nombre del Evento: ${document.getElementById('evento').value}`, 14, y);
    y += 7;
    doc.text(`Nombre del Solicitante: ${document.getElementById('nombreSolicitante').value}`, 14, y);
    y += 7;
    doc.text(`Fecha de Cotización: ${document.getElementById('fechaCotizacion').value}`, 14, y);
    y += 7;
    doc.text(`Fecha del Evento: ${document.getElementById('fechaEvento').value}`, 14, y);
    y += 7;
    doc.text(`Fecha de Termino: ${document.getElementById('fechaTermino').value}`, 14, y);
    y += 7;
    doc.text(`Duración: ${document.getElementById('duracion').value} DÍA`, 14, y);
    y += 7;
    
    // 🔹 Área Solicitante (obtiene el texto visible sin modificar)
    const areaSelect = document.getElementById('areaSolicitante');
    const areaText = areaSelect.options[areaSelect.selectedIndex].text;
    doc.text(`Área Solicitante: ${areaText}`, 14, y);
    y += 7;
    
    // 🔹 Área Encargada del Evento (dinámico)
    const areaEncargada = document.getElementById('areaEspecifica')?.value || 'No especificado';
    doc.text(`Área Encargada del Evento: ${areaEncargada}`, 14, y);
    y += 7;
    
    // Configurar la tabla
    const headers = ['CONCEPTO', 'PIEZA', 'PRECIO UNITARIO', 'DURACION DEL EVENTO', 'TOTAL'];
    const rows = [];
    
    const tabla = document.getElementById('tablaConceptos');
    for (let i = 0; i < tabla.rows.length; i++) {
        const row = tabla.rows[i];
        rows.push([
            row.cells[0].textContent,
            row.cells[1].textContent,
            row.cells[2].textContent,
            row.cells[3].textContent,
            row.cells[4].textContent
        ]);
    }
    
    // Agregar tabla al PDF
    doc.autoTable({
        startY: y,
        head: [headers],
        body: rows,
        margin: { left: 14 },
        styles: {
            font: 'helvetica',
            fontSize: 10,
            textColor: [0, 0, 0]
        },
        headStyles: {
            fillColor: [220, 220, 220],
            textColor: [0, 0, 0]
        }
    });
    
    // Obtener la posición final después de la tabla
    y = doc.lastAutoTable.finalY + 10;
    
    // Observaciones
    const observaciones = document.getElementById('observaciones').value;
    if (observaciones) {
        doc.setFontSize(12);
        doc.text('Observaciones:', 14, y);
        y += 7;
        doc.setFontSize(10);
        doc.text(observaciones, 14, y, { maxWidth: 180 });
        y += 20;
    }
    
    // Total
    doc.setFontSize(14);
    doc.text(document.getElementById('total').textContent, 14, y);
    
    // Guardar el PDF
    doc.save(`COTIZACION_${document.getElementById('evento').value.replace(/ /g, '_')}.pdf`);
}
// Inicializar fecha de cotización con la fecha actual
window.onload = function() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    document.getElementById('fechaCotizacion').value = `${yyyy}-${mm}-${dd}`;
};

document.addEventListener('DOMContentLoaded', function() {
    const nombreSolicitante = document.getElementById('nombreSolicitante');
    const mensajeValidacion = document.createElement('div');
    mensajeValidacion.style.marginTop = '5px';
    nombreSolicitante.parentNode.appendChild(mensajeValidacion);

    // Convertir a MAYÚSCULAS mientras escribe
    nombreSolicitante.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });

    nombreSolicitante.addEventListener('blur', function() {
        const nombre = this.value.trim();
        // Expresión regular para MAYÚSCULAS (permite acentos, ñ y espacios)
        const regex = /^[A-ZÁÉÍÓÚÑ\s]+$/;
        
        if (nombre === '') {
            mensajeValidacion.textContent = '';
            return;
        }
        
        // Validar que tenga al menos 2 palabras (nombre y apellido)
        const palabras = nombre.split(/\s+/).filter(p => p.length > 0);
        
        if (!regex.test(nombre) || palabras.length < 2) {
            alert('Por favor ingrese su nombre completo correctamente.');
            mensajeValidacion.style.color = 'red';
            this.focus();
        } else {
            mensajeValidacion.textContent = '✅ Nombre correcto';
            mensajeValidacion.style.color = 'green';
            
            // Opcional: hacer desaparecer el mensaje después de 3 segundos
            setTimeout(() => {
                mensajeValidacion.textContent = '';
            }, 3000);
        }
    });
    
    // Inicializar fecha
    const today = new Date();
    document.getElementById('fechaCotizacion').value = today.toISOString().split('T')[0];
});
