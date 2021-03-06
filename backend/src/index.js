require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const mongoose = require('mongoose');

const api = require('./api');

const {
  PORT: port = 4000,
  MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI).then(() => {
  console.log('connect to mongodb');
}).catch((e) => {
  console.log(e);
});

const app = new Koa();
const router = new Router();

// Router settings
router.use('/api', api.routes());

// before use route
app.use(bodyParser());

// use router
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port)
});