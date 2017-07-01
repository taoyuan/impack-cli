/**
 * Created by taoyuan on 2017/6/30.
 */

const _ = require('lodash');
const Packer = require('impack').Packer;

module.exports = async (args, options, logger) => {
  let {file, dir} = options;
  options = _.omit(options, ['file', 'dir']);
  file = file || process.cwd();
  const packer = new Packer(file, {output: dir});
  await packer.pack(_.omit(options, {output: dir}));
};
