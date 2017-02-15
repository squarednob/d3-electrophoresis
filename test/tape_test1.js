// npm instll tapeでインストールした後、testより上のメインフォルダからnode test/tape_test1.jsで実行する。
var test = require("../node_modules/tape");
var elect = require("../src/d3-electrophoresis.js");

test("test_test1", function(t){
  t.equal(1+1, 2);
  t.end();
})
