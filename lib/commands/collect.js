/**
 * Created by taoyuan on 2017/6/30.
 */

const Packer = require('impack').Packer;

module.exports = async (args, options) => {
  const file = options.file || process.cwd();
  const packer = new Packer(file);
  await packer.collect(options);
};
