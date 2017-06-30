/**
 * Created by taoyuan on 2017/6/30.
 */

const _ = require('lodash');
const Packer = require('impack').Packer;

module.exports = async (args, options, logger) => {
  const file = options.file || process.cwd();
  const packer = new Packer(file);
  await packer.pack(_.omit(options, ['file']));
};
