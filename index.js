const Waline = require('@waline/vercel');

const app = Waline({
  secureDomains: ['localhost', '127.0.0.1', 'rutilius.dev', 'www.rutilius.dev', 'blog.rutilius.dev'],
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

require('http').createServer(app).listen(process.env.PORT || 3000);