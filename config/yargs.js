const opts = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de Multiplicar', opts)
    .command('crear', 'Crea archivo con la tabla de Multiplicar', opts)
    .argv;

module.exports = {
    argv
}