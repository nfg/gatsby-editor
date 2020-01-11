const util = require('../src/Util.js');
const tap = require('tap');

tap.test("get", t => {
  t.plan(6);
  t.equal(util.get(undefined, undefined), undefined);
  t.equal(util.get(undefined, ""), "");
  t.equal(util.get(undefined, "yarr"), "yarr");
  t.equal(util.get("foo", ""), "foo");
  t.equal(util.get("foo", "yarr"), "foo");
  t.equal(util.get("", "disco"), "");
});
