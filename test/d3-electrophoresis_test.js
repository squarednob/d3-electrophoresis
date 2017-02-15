// install tape with "npm instll tape".
// From top folder, "node test/d3-electrophoresis_test.js".
var test = require("../node_modules/tape");
var elect = require("../src/d3-electrophoresis.js");

test("test_test1", function(t){
  t.equal(1+1, 2);
  t.end();
})
