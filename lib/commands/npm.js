/**
 * Created by taoyuan on 2017/6/30.
 */

const _ = require('lodash');
const Packer = require('impack').Packer;

module.exports = async (args, options, logger) => {
  const file = options.file || process.cwd();
  const action = args.action;
  const packer = new Packer(file);

  await packer.npm(action, _.omit(options, ['file']));
};
