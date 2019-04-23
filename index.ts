// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
import { createServer } from 'http';
import { parse } from 'url';
import * as next from 'next';
import * as path from "path";

const proxy = require('http-proxy-middleware');//引入代理中间件
const aProxy = proxy('/graphql', {
  target: 'http://127.0.0.1:4002',
  changeOrigin: true,
  onError(err: any, req: any, res: any) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      "data": {
        "adminLogin": {
          "admin": {
            "id": 1, "email": "q@qq.com",
            "garden": {
              "id": 2, "code": "1", "name": "id2", "__typename": "Garden"
            }, "__typename": "Admin"
          },
          "loginInfo": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            "expiration": 1555701200832,
            "__typename": "LoginInfo"
          }, "authInfo": {
            "moduleNames": ["user"],
            "__typename": "AuthInfo"
          }, "__typename": "AdminLoginResult"
        }
      }
    }));
  }
});


const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  dir: './src',
  conf: require('./next.config.js')
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url || '', true);
    const { pathname = '', query } = parsedUrl;
    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico', '/assets'];
    if (rootStaticFiles.some(p => pathname.startsWith(p))) {
      const p = path.join(__dirname, 'src', pathname);
      console.log('☞☞☞ 9527 index 103', __dirname, pathname, p);
      app.serveStatic(req, res, p)
    } else if (pathname === '/graphql') {
      aProxy(req, res);
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(5000, () => {
    console.log('> Ready on http://localhost:5000')
  });
});