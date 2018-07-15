/* Crea todas las tablas de Multiplicar y las guarda en un archivo */

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

let comando = argv._[0].toLowerCase();
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Creado archivo`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comadno no Reconocido');
        break;
}

// let argv2 = process.argv;  Process variable Global con Informacion 

// let param = argv[2];
// let base = param.split('=')[1];