/**
 * Created by taoyuan on 2017/6/30.
 */

const prog = require('caporal');
const pkg = require('../package.json');

module.exports = () => {
  prog
    .version(pkg.version)
    .command('collect', 'Collect all components defined in impack file')
    .option('--file, -f', 'Specify the impack file or directory')
    .option('--skip-hooks', 'Skip generate hook scripts')
    .option('--dir, -d', 'The working directory')
    .action(require('./commands/collect'))

    .command('npm', 'Run npm install or build action iterate components')
    .argument('<action>', 'Specify npm action', /^install|rebuild$/)
    .option('--file, -f', 'Specify the impack file or directory')
    .option('--dir, -d', 'The working directory')
    .option('--registry, -r', 'Specify npm registry url')
    .action(require('./commands/npm'))

    .command('pack', 'Pack resources to deb file')
    .option('--file, -f', 'Specify the impack file or directory')
    .option('--dir, -d', 'The working directory')
    .action(require('./commands/pack'));

  prog.parse(process.argv);

};

