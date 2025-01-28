// Codigo By: Geovas or MartL7
// ira nomas <3

var elementos = {
  "H":  { nombre: "Hidrógeno", simbolo: "H", numeroAtomico: 1, grupo: "No metal", periodo: 1 },
  "He": { nombre: "Helio", simbolo: "He", numeroAtomico: 2, grupo: "Gas noble", periodo: 1 },
  "Li": { nombre: "Litio", simbolo: "Li", numeroAtomico: 3, grupo: "Metal alcalino", periodo: 2 },
  "Be": { nombre: "Berilio", simbolo: "Be", numeroAtomico: 4, grupo: "Metal alcalinotérreo", periodo: 2 },
  "B":  { nombre: "Boro", simbolo: "B", numeroAtomico: 5, grupo: "Metal metaloide", periodo: 2 },
  "C":  { nombre: "Carbono", simbolo: "C", numeroAtomico: 6, grupo: "No metal", periodo: 2 },
  "N":  { nombre: "Nitrógeno", simbolo: "N", numeroAtomico: 7, grupo: "No metal", periodo: 2 },
  "O":  { nombre: "Oxígeno", simbolo: "O", numeroAtomico: 8, grupo: "No metal", periodo: 2 },
  "F":  { nombre: "Flúor", simbolo: "F", numeroAtomico: 9, grupo: "Halógeno", periodo: 2 },
  "Ne": { nombre: "Neón", simbolo: "Ne", numeroAtomico: 10, grupo: "Gas noble", periodo: 2 },
  "Na": { nombre: "Sodio", simbolo: "Na", numeroAtomico: 11, grupo: "Metal alcalino", periodo: 3 },
  "Mg": { nombre: "Magnesio", simbolo: "Mg", numeroAtomico: 12, grupo: "Metal alcalinotérreo", periodo: 3 },
  "Al": { nombre: "Aluminio", simbolo: "Al", numeroAtomico: 13, grupo: "Metal", periodo: 3 },
  "Si": { nombre: "Silicio", simbolo: "Si", numeroAtomico: 14, grupo: "Metal metaloide", periodo: 3 },
  "P":  { nombre: "Fósforo", simbolo: "P", numeroAtomico: 15, grupo: "No metal", periodo: 3 },
  "S":  { nombre: "Azufre", simbolo: "S", numeroAtomico: 16, grupo: "No metal", periodo: 3 },
  "Cl": { nombre: "Cloro", simbolo: "Cl", numeroAtomico: 17, grupo: "Halógeno", periodo: 3 },
  "Ar": { nombre: "Argón", simbolo: "Ar", numeroAtomico: 18, grupo: "Gas noble", periodo: 3 },
  "K":  { nombre: "Potasio", simbolo: "K", numeroAtomico: 19, grupo: "Metal alcalino", periodo: 4 },
  "Ca": { nombre: "Calcio", simbolo: "Ca", numeroAtomico: 20, grupo: "Metal alcalinotérreo", periodo: 4 },
  "Sc": { nombre: "Escandio", simbolo: "Sc", numeroAtomico: 21, grupo: "Metal de transición", periodo: 4 },
  "Ti": { nombre: "Titanio", simbolo: "Ti", numeroAtomico: 22, grupo: "Metal de transición", periodo: 4 },
  "V":  { nombre: "Vanadio", simbolo: "V", numeroAtomico: 23, grupo: "Metal de transición", periodo: 4 },
  "Cr": { nombre: "Cromo", simbolo: "Cr", numeroAtomico: 24, grupo: "Metal de transición", periodo: 4 },
  "Mn": { nombre: "Manganeso", simbolo: "Mn", numeroAtomico: 25, grupo: "Metal de transición", periodo: 4 },
  "Fe": { nombre: "Hierro", simbolo: "Fe", numeroAtomico: 26, grupo: "Metal de transición", periodo: 4 },
  "Co": { nombre: "Cobalto", simbolo: "Co", numeroAtomico: 27, grupo: "Metal de transición", periodo: 4 },
  "Ni": { nombre: "Níquel", simbolo: "Ni", numeroAtomico: 28, grupo: "Metal de transición", periodo: 4 },
  "Cu": { nombre: "Cobre", simbolo: "Cu", numeroAtomico: 29, grupo: "Metal de transición", periodo: 4 },
  "Zn": { nombre: "Zinc", simbolo: "Zn", numeroAtomico: 30, grupo: "Metal de transición", periodo: 4 },
  "Ga": { nombre: "Galio", simbolo: "Ga", numeroAtomico: 31, grupo: "Metal", periodo: 4 },
  "Ge": { nombre: "Germanio", simbolo: "Ge", numeroAtomico: 32, grupo: "Metal metaloide", periodo: 4 },
  "As": { nombre: "Arsénico", simbolo: "As", numeroAtomico: 33, grupo: "Metal metaloide", periodo: 4 },
  "Se": { nombre: "Selenio", simbolo: "Se", numeroAtomico: 34, grupo: "No metal", periodo: 4 },
  "Br": { nombre: "Bromo", simbolo: "Br", numeroAtomico: 35, grupo: "Halógeno", periodo: 4 },
  "Kr": { nombre: "Kriptón", simbolo: "Kr", numeroAtomico: 36, grupo: "Gas noble", periodo: 4 },
  "Rb": { nombre: "Rubidio", simbolo: "Rb", numeroAtomico: 37, grupo: "Metal alcalino", periodo: 5 },
  "Sr": { nombre: "Estroncio", simbolo: "Sr", numeroAtomico: 38, grupo: "Metal alcalinotérreo", periodo: 5 },
  "Y":  { nombre: "Itrio", simbolo: "Y", numeroAtomico: 39, grupo: "Metal de transición", periodo: 5 },
  "Zr": { nombre: "Zirconio", simbolo: "Zr", numeroAtomico: 40, grupo: "Metal de transición", periodo: 5 },
  "Nb": { nombre: "Niobio", simbolo: "Nb", numeroAtomico: 41, grupo: "Metal de transición", periodo: 5 },
  "Mo": { nombre: "Molibdeno", simbolo: "Mo", numeroAtomico: 42, grupo: "Metal de transición", periodo: 5 },
  "Tc": { nombre: "Tecnecio", simbolo: "Tc", numeroAtomico: 43, grupo: "Metal de transición", periodo: 5 },
  "Ru": { nombre: "Rutenio", simbolo: "Ru", numeroAtomico: 44, grupo: "Metal de transición", periodo: 5 },
  "Rh": { nombre: "Rodio", simbolo: "Rh", numeroAtomico: 45, grupo: "Metal de transición", periodo: 5 },
  "Pd": { nombre: "Paladio", simbolo: "Pd", numeroAtomico: 46, grupo: "Metal de transición", periodo: 5 },
  "Ag": { nombre: "Plata", simbolo: "Ag", numeroAtomico: 47, grupo: "Metal de transición", periodo: 5 },
  "Cd": { nombre: "Cadmio", simbolo: "Cd", numeroAtomico: 48, grupo: "Metal de transición", periodo: 5 },
  "In": { nombre: "Indio", simbolo: "In", numeroAtomico: 49, grupo: "Metal", periodo: 5 },
  "Sn": { nombre: "Estaño", simbolo: "Sn", numeroAtomico: 50, grupo: "Metal", periodo: 5 },
  "Sb": { nombre: "Antimonio", simbolo: "Sb", numeroAtomico: 51, grupo: "Metal metaloide", periodo: 5 },
  "Te": { nombre: "Telurio", simbolo: "Te", numeroAtomico: 52, grupo: "Metal metaloide", periodo: 5 },
  "I":  { nombre: "Yodo", simbolo: "I", numeroAtomico: 53, grupo: "Halógeno", periodo: 5 },
  "Xe": { nombre: "Xenón", simbolo: "Xe", numeroAtomico: 54, grupo: "Gas noble", periodo: 5 },
  "Cs": { nombre: "Cesio", simbolo: "Cs", numeroAtomico: 55, grupo: "Metal alcalino", periodo: 6 },
  "Ba": { nombre: "Bario", simbolo: "Ba", numeroAtomico: 56, grupo: "Metal alcalinotérreo", periodo: 6 },
  "La": { nombre: "Lantano", simbolo: "La", numeroAtomico: 57, grupo: "Lantánidos", periodo: 6 },
  "Ce": { nombre: "Cerio", simbolo: "Ce", numeroAtomico: 58, grupo: "Lantánidos", periodo: 6 },
  "Pr": { nombre: "Praseodimio", simbolo: "Pr", numeroAtomico: 59, grupo: "Lantánidos", periodo: 6 },
  "Nd": { nombre: "Neodimio", simbolo: "Nd", numeroAtomico: 60, grupo: "Lantánidos", periodo: 6 },
  "Pm": { nombre: "Prometio", simbolo: "Pm", numeroAtomico: 61, grupo: "Lantánidos", periodo: 6 },
  "Sm": { nombre: "Samario", simbolo: "Sm", numeroAtomico: 62, grupo: "Lantánidos", periodo: 6 },
  "Eu": { nombre: "Europio", simbolo: "Eu", numeroAtomico: 63, grupo: "Lantánidos", periodo: 6 },
  "Gd": { nombre: "Gadolinio", simbolo: "Gd", numeroAtomico: 64, grupo: "Lantánidos", periodo: 6 },
  "Tb": { nombre: "Terbio", simbolo: "Tb", numeroAtomico: 65, grupo: "Lantánidos", periodo: 6 },
  "Dy": { nombre: "Disprosio", simbolo: "Dy", numeroAtomico: 66, grupo: "Lantánidos", periodo: 6 },
  "Ho": { nombre: "Holmio", simbolo: "Ho", numeroAtomico: 67, grupo: "Lantánidos", periodo: 6 },
  "Er": { nombre: "Erbio", simbolo: "Er", numeroAtomico: 68, grupo: "Lantánidos", periodo: 6 },
  "Tm": { nombre: "Tulio", simbolo: "Tm", numeroAtomico: 69, grupo: "Lantánidos", periodo: 6 },
  "Yb": { nombre: "Iterbio", simbolo: "Yb", numeroAtomico: 70, grupo: "Lantánidos", periodo: 6 },
  "Lu": { nombre: "Lutecio", simbolo: "Lu", numeroAtomico: 71, grupo: "Lantánidos", periodo: 6 },
  "Hf": { nombre: "Hafnio", simbolo: "Hf", numeroAtomico: 72, grupo: "Metal de transición", periodo: 6 },
  "Ta": { nombre: "Tantalio", simbolo: "Ta", numeroAtomico: 73, grupo: "Metal de transición", periodo: 6 },
  "W":  { nombre: "Wolframio", simbolo: "W", numeroAtomico: 74, grupo: "Metal de transición", periodo: 6 },
  "Re": { nombre: "Renio", simbolo: "Re", numeroAtomico: 75, grupo: "Metal de transición", periodo: 6 },
  "Os": { nombre: "Osmio", simbolo: "Os", numeroAtomico: 76, grupo: "Metal de transición", periodo: 6 },
  "Ir": { nombre: "Iridio", simbolo: "Ir", numeroAtomico: 77, grupo: "Metal de transición", periodo: 6 },
  "Pt": { nombre: "Platino", simbolo: "Pt", numeroAtomico: 78, grupo: "Metal de transición", periodo: 6 },
  "Au": { nombre: "Oro", simbolo: "Au", numeroAtomico: 79, grupo: "Metal de transición", periodo: 6 },
  "Hg": { nombre: "Mercurio", simbolo: "Hg", numeroAtomico: 80, grupo: "Metal de transición", periodo: 6 },
  "Tl": { nombre: "Talio", simbolo: "Tl", numeroAtomico: 81, grupo: "Metal", periodo: 6 },
  "Pb": { nombre: "Plomo", simbolo: "Pb", numeroAtomico: 82, grupo: "Metal", periodo: 6 },
  "Bi": { nombre: "Bismuto", simbolo: "Bi", numeroAtomico: 83, grupo: "Metal", periodo: 6 },
  "Po": { nombre: "Polonio", simbolo: "Po", numeroAtomico: 84, grupo: "Metal metaloide", periodo: 6 },
  "At": { nombre: "Astato", simbolo: "At", numeroAtomico: 85, grupo: "Halógeno", periodo: 6 },
  "Rn": { nombre: "Radón", simbolo: "Rn", numeroAtomico: 86, grupo: "Gas noble", periodo: 6 },
  "Fr": { nombre: "Francio", simbolo: "Fr", numeroAtomico: 87, grupo: "Metal alcalino", periodo: 7 },
  "Ra": { nombre: "Radio", simbolo: "Ra", numeroAtomico: 88, grupo: "Metal alcalinotérreo", periodo: 7 },
  "Ac": { nombre: "Actinio", simbolo: "Ac", numeroAtomico: 89, grupo: "Actínidos", periodo: 7 },
  "Th": { nombre: "Torio", simbolo: "Th", numeroAtomico: 90, grupo: "Actínidos", periodo: 7 },
  "Pa": { nombre: "Protactinio", simbolo: "Pa", numeroAtomico: 91, grupo: "Actínidos", periodo: 7 },
  "U":  { nombre: "Uranio", simbolo: "U", numeroAtomico: 92, grupo: "Actínidos", periodo: 7 },
  "Np": { nombre: "Neptunio", simbolo: "Np", numeroAtomico: 93, grupo: "Actínidos", periodo: 7 },
  "Pu": { nombre: "Plutonio", simbolo: "Pu", numeroAtomico: 94, grupo: "Actínidos", periodo: 7 },
  "Am": { nombre: "Americio", simbolo: "Am", numeroAtomico: 95, grupo: "Actínidos", periodo: 7 },
  "Cm": { nombre: "Curio", simbolo: "Cm", numeroAtomico: 96, grupo: "Actínidos", periodo: 7 },
  "Bk": { nombre: "Berkelio", simbolo: "Bk", numeroAtomico: 97, grupo: "Actínidos", periodo: 7 },
  "Cf": { nombre: "Californio", simbolo: "Cf", numeroAtomico: 98, grupo: "Actínidos", periodo: 7 },
  "Es": { nombre: "Einstenio", simbolo: "Es", numeroAtomico: 99, grupo: "Actínidos", periodo: 7 },
  "Fm": { nombre: "Fermio", simbolo: "Fm", numeroAtomico: 100, grupo: "Actínidos", periodo: 7 },
  "Md": { nombre: "Mendelevio", simbolo: "Md", numeroAtomico: 101, grupo: "Actínidos", periodo: 7 },
  "No": { nombre: "Nobelio", simbolo: "No", numeroAtomico: 102, grupo: "Actínidos", periodo: 7 },
  "Lr": { nombre: "Lawrencio", simbolo: "Lr", numeroAtomico: 103, grupo: "Actínidos", periodo: 7 },
  "Rf": { nombre: "Rutherfordio", simbolo: "Rf", numeroAtomico: 104, grupo: "Metal de transición", periodo: 7 },
  "Db": { nombre: "Dubnio", simbolo: "Db", numeroAtomico: 105, grupo: "Metal de transición", periodo: 7 },
  "Sg": { nombre: "Seaborgio", simbolo: "Sg", numeroAtomico: 106, grupo: "Metal de transición", periodo: 7 },
  "Bh": { nombre: "Bohrio", simbolo: "Bh", numeroAtomico: 107, grupo: "Metal de transición", periodo: 7 },
  "Hs": { nombre: "Hassio", simbolo: "Hs", numeroAtomico: 108, grupo: "Metal de transición", periodo: 7 },
  "Mt": { nombre: "Meitnerio", simbolo: "Mt", numeroAtomico: 109, grupo: "Metal de transición", periodo: 7 },
  "Ds": { nombre: "Darmstadtio", simbolo: "Ds", numeroAtomico: 110, grupo: "Metal de transición", periodo: 7 },
  "Rg": { nombre: "Roentgenio", simbolo: "Rg", numeroAtomico: 111, grupo: "Metal de transición", periodo: 7 },
  "Cn": { nombre: "Copernicio", simbolo: "Cn", numeroAtomico: 112, grupo: "Metal de transición", periodo: 7 },
  "Nh": { nombre: "Nihonio", simbolo: "Nh", numeroAtomico: 113, grupo: "Metal de transición", periodo: 7 },
  "Fl": { nombre: "Flerovio", simbolo: "Fl", numeroAtomico: 114, grupo: "Metal de transición", periodo: 7 },
  "Mc": { nombre: "Moscovio", simbolo: "Mc", numeroAtomico: 115, grupo: "Metal de transición", periodo: 7 },
  "Lv": { nombre: "Livermorio", simbolo: "Lv", numeroAtomico: 116, grupo: "Metal de transición", periodo: 7 },
  "Ts": { nombre: "Teneso", simbolo: "Ts", numeroAtomico: 117, grupo: "Metal de transición", periodo: 7 },
  "Og": { nombre: "Oganesón", simbolo: "Og", numeroAtomico: 118, grupo: "Metal de transición", periodo: 7 }
};

var DivTabla = document.getElementById("Tabla");
DivTabla.style.opacity = "0";

let BotonVerTabla = document.getElementById("VerTabla");

let BotonBuscar = document.getElementById("Buscar");
BotonBuscar.style.opacity = "0.5";
BotonBuscar.disabled = true;

BotonBuscar.addEventListener('click', function(){
  const cuadrado = document.getElementById("resultado");
  cuadrado.style.display = "block";
})

var BotonCerrar = document.getElementById("BotonCerrar");
BotonCerrar.addEventListener('click', function(){
    const cuadrado = document.getElementById("resultado");
    cuadrado.style.display = "none";
})

function VerTabla(){
  var tabla = document.querySelector('.tabla');
  BotonVerTabla.remove();
  DivTabla.style.opacity = "1";
  BotonBuscar.disabled = false;
  BotonBuscar.style.opacity = "1";

  // Crear las celdas de la tabla periodica
  for (var fila = 0; fila < 7; fila++) {
    for (var columna = 0; columna < 18; columna++) {
      var celda = document.createElement('div');
      celda.className = 'celda';
      celda.dataset.elemento = String.fromCharCode(65 + fila * 18 + columna);
      tabla.appendChild(celda);
    }
  }
  var elementosArray = Object.keys(elementos);
  for (var i = 0; i < elementosArray.length; i++) {
    var tecla = document.createElement('div');
    tecla.className = 'tecla';
    tecla.textContent = elementosArray[i];
    tabla.appendChild(tecla);
  }
}

function EnviarElemento(){
  const mensaje = prompt("Que elemento buscas?");
  buscarElemento(mensaje);
}

//Recarga la Pagina
function Regresar(){
  location.reload();
}

//Funcion que se encarga de buscar los elementos en la tabla
function buscarElemento(mensaje){
  //Guarda objetos en un arreglo conservando sus propiedades.
  var ElementosArreglo = Object.keys(elementos);
    
    for (var i = 0; i < ElementosArreglo.length; i++) {
        var Buscar = ElementosArreglo[i].toLowerCase(); 
        if (Buscar === mensaje.toLowerCase()) {
            var elemento = elementos[ElementosArreglo[i]];
            //Le agrega la info que se imprimira y la obtiene del arreglo que recupero las propiedades de los objetos
            var info = "Nombre: " + elemento.nombre + "<br>";
            info += "Símbolo: " + elemento.simbolo + "<br>";
            info += "Número atómico: " + elemento.numeroAtomico + "<br>";
            info += "Grupo: " + elemento.grupo + "<br>";
            info += "Periodo: " + elemento.periodo + "<br>";
            
            //Cuando encuentra algo, lo imprime en el Div Resultado y acaba el ciclo con return
            document.getElementById("res").innerHTML = info;
            return;
        }
    }

    document.getElementById("res").innerHTML = "Elemento no encontrado";
}

//Funcion para el bicho SIUUU
function Siu(){
  // Obtener referencia al contenedor
  var contenedor = document.getElementById('siu');

  // Crear una nueva imagen
  var imagen = new Image();
  imagen.src = 'https://c.tenor.com/TM0Xkja0docAAAAi/cr7-si.gif';

  // Evento de carga de la imagen
  imagen.onload = function() {
    // Establecer posición inicial fuera de la pantalla
    imagen.style.position = 'absolute';
    imagen.style.left = '-500px';

    contenedor.appendChild(imagen);

    // Animación
    var posicion = -200;
    var animacion = setInterval(function() {
      if (posicion >= 0) {
        clearInterval(animacion);
        // Limpiar la imagen despues de 5 segundos
        setTimeout(function() {
          contenedor.removeChild(imagen);
        }, 900);
      } else {
        posicion += 5; // Incremento de posición
        imagen.style.left = posicion + 'px';
      }
    }, 10); // Intervalo de tiempo (ms) entre cada incremento de posición
  };
}