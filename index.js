const Waline = require('@waline/vercel');

const app = Waline({
  secureDomains: ['localhost', '127.0.0.1', 'blog.rutilius.dev'],
  async preSave(comment) {
    console.log("PreSave Log: " + comment);
  },
  async postSave(comment) {
    console.log("PostSave Log: " + comment);
  },
});

require('http').createServer(app).listen(process.env.PORT || 3000);