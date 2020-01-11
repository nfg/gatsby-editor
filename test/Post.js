const tap = require('tap');
const Post = require('../src/Post');
const mockdate = require('mockdate');

tap.test("constructor", t => {
  let now = new Date();
  mockdate.set(now);
  t.plan(1);
  let yarr = new Post({});
  t.same(yarr, {
    title: "",
    author: "",
    date: now,
    draft: true,
    layout: "post",
    tags: [],
  });
});
