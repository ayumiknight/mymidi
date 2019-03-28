const APP_PORT = process.env.APP_PORT || 9901;
const Koa = require('koa');



const app = new Koa();


//输出首页
let IndexHTML = require('fs').readFileSync('./src/index.html', 'utf8');


if (process.env.NODE_ENV === 'development') {
	console.log('develop mode, starting webpack hot module replacement ... ');
	const koaWebpack = require('koa-webpack');
	const webpackConfig = require('./webpack.config');
	app.use(koaWebpack({
		config: webpackConfig
	}));
}

app.use(async (ctx,next)=>{
	if (ctx.method === 'GET') ctx.body = IndexHTML;
	await next();
});



/**
 * 创建最外层Koa
 */

 app.listen(APP_PORT, ()=>{
	console.log('zhida restaurant server started on port',APP_PORT);
});
