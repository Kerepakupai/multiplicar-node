const fs = require('fs');
const colors = require('colors/safe');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || base === 0) {
            reject(`(${ base }) Base debe ser Numerico, diferente de 0`);
            return;
        }

        if (!Number(limite) || limite < 1) {
            reject(`(${ limite }) Limite debe ser Numerico mayor o igual a 1`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(colors.green(`tabla-${base}.txt`));
            }
        });
    });
}

let listarTabla = (base, limite) => {

    console.log('============================'.green);
    console.log(`Tabla de Multiplicar del ${ base }`.green);
    console.log('============================'.green);


    return new Promise((resolve, reject) => {
        if (!Number(base) || base === 0) {
            reject(`(${ base }) Base debe ser Numerico, diferente de 0`);
            return;
        }

        if (!Number(limite) || limite < 1) {
            reject(`(${ limite }) Limite debe ser Numerico mayor o igual a 1`);
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            console.log(`${ base } * ${ index } = ${ base * index }`);
        }
        console.log('============================'.green);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}