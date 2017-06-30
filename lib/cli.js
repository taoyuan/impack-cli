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
    .action(require('./commands/collect'))

    .command('npm', 'Run npm install or build action iterate components')
    .option('--file, -f', 'Specify the impack file or directory')
    .argument('<action>', 'Specify npm action', /^install|rebuild$/)
    .action(require('./commands/npm'))

    .command('pack', 'Pack resources to deb file')
    .option('--file, -f', 'Specify the impack file or directory')
    .action(require('./commands/pack'));

  prog.parse(process.argv);

};

