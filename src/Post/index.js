const { get } = require('../Util.js');

const Post = class {
  constructor(data) {
    this.title = get(data.title, '');
    this.author = get(data.author, '');
    this.date = get(data.date, new Date());
    this.draft = get(data.draft, true);
    this.layout = get(data.layout, "post");
    this.tags = get(data.tags, []);
  }
};

module.exports = Post;
