/* 
  文档生成
*/
const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");
const output = jsdoc2md.renderSync({ files: "./index.js" });
fs.writeFileSync("./README.md", output);
