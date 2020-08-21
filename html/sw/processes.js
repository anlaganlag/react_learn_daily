const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
  async process01() {
    console.log("Process 01 started");
    console.time("end1");
    await wait(5000);
    console.timeEnd("end1");  
    console.log();  
    return 'process01-value';
  },

  async process02() {
    console.log("Process 02 started");
    console.time("end2");
    await wait(3000);
    console.timeEnd("end2");
    console.log();
    return 'process02-value';
  }
}