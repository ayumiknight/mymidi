直客通商户版前端
=====================

# 安装

1. 升级到最新的npm
2. 添加以下代码到 .bashrc 或者 直接终端执行
```
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/mirrors/node \
--userconfig=$HOME/.cnpmrc"
```
3. cnpm install 安装依赖， 会比较久
4. apache .htaccess
```
RewriteEngine On
      RewriteBase /
          rewrite ^/r\_(.+) /index.php?p=react&v=$1 last;

```

# 启动开发环境

打开终端，执行：
```
npm run dev  
```

现在打开浏览器，http://localhost/r_ticket_poster?id=195

以r_开头的文件,即访问的后面的文件

# 启动正式环境

```
NODE_ENV=production node index.js
```
或者
```
npm run production-server
```

# 修改并发布

 - 修改app目录里面的代码
 - 编译代码 `gulp` 或者 `npm run build`
 - git提交
 - 更新服务器代码
 - 无需重启服务器

# 学习

## ES6

ECMAScript 6入门: http://es6.ruanyifeng.com/

本项目主要用到的ES6特性有：
 - 箭头函数
 - 简化的object写法
 - class
 - 模块化
 - fetch （服务端和客户端都全部使用fetch进行网络请求）
 - generator （co模块用到）
 - Promise （重要）
 - spread (http://es6.ruanyifeng.com/?search=spread&x=0&y=0#docs/function#扩展运算符)

因为大量使用剪头函数，所以大括号的风格也改成了 
```
(a,b)=>{
	...
}
if (true) {
	...
}
```

## package.json

package.json里面配置了几个scripts：
```
{
    "dev": "node dev-server.js",
    "dev-server": "NODE_ENV=develop node index.js",
    "production-server": "NODE_ENV=production node index.js",
    "lint": "eslint app",
    "build": "gulp"
}
```

用法： `npm run dev`

其中：

 - dev: 启动webpack hot module loader
 - dev-server: 启动开发环境的web server
 - production-server: 启动正式环境的web server
 - lint: app文件夹的代码格式化检查
 - build: 用gulp命令打包代码（配置文件在gulpfile.js）


## webpack

webpack 是一个打包的工具。可以把各种资源（js,css,图片等）打包成一个js文件。 
根目录的 webpack.config.js 是正式环境的webpack配置（只在打包的时候用到，不会在正式环境运行）。  
webpack.dev.js 是开发环境的 webpack 配置。 

webpack的配置文件大概分为几个部分：
 - "entry" 入口文件配置
 - "module.loaders" loader配置（配置某种类型的文件用什么加载器）
 - "ouput" 输出配置
 - "plugins" 插件

其中loader部分最神奇。 可以在webpack配置文件里面写 
```javascript
{
	test: /\.scss$/,
	loaders: ["style", "css", "sass"],
	include: path.join(__dirname, 'app')
}
```
也可以在js文件里面写 
```
var css = require('style!css!sass!../css/style.scss');
```
表示用sass加载器加载某个scss文件，然后把scss处理成普通的css。然后再传递给css加载器，再传递给style加载器。
有点类似linux的通道的概念，只是加载顺序是从右到左。


## 服务器端

node入口文件为 index.js。此文件：

 - 启动一个http server
 - serve 静态文件
 - 模板解析 index.html 文件
 - 提供 api 接口

其中，各个API的文件在 lib/controllers/*.js 。通过 lib/apis.js 文件统一载入。  zkt.js 提供一些通用的辅助函数。

## 客户端

首先浏览器发起一个请求到 index.js 启动的web server。 然后server返回index.html内容。 server会根据当前是否是开发环境返回不同的index.html（主要是载入的js文件不同）。


如果是开发环境，则会载入一个动态的bundle.js，如果是正式环境，直接载入已经编译过的bundle.js。


开发环境下载入的动态js就是用`npm run dev`启动的dev-server.js提供的。 这个服务不仅可以根据配置的入口文件打包需要的各种资源，还注入了一堆代码，从浏览器启动websocket连到服务器通信。一旦服务器发现有文件更新，客户端就会收到改动的内容，然后动态更新。


正是因为这样，所以开发环境需要启动两个服务。

## React

入门： http://www.ruanyifeng.com/blog/2015/03/react.html

所有代码在app目录。 所有代码通过babel加载（不能直接在浏览器运行），所以可以无限制使用最新的ES6甚至ES7特性。代码里面有 import 加载方式，也有require加载方式。

### app.jsx

此页面主要作用是加载各种资源，然后配置react-router。 react-router可以根据不同的url加载不同的页面，可以异步加载。但是此项目没有用异步加载，因为把所有页面打包到一个js文件只是增加了几个kb。所以此项目不同的url加载的代码一模一样，只是根据不同的url显示不同页面而已。

### zkt.js

此模块提供各种帮助函数，polyfill。

### app/pages目录

此目录有所有的页面的jsx文件。 各个模块的入口为render方法。

### app/css目录

此目录有所有的scss文件。 关于scss:  http://sass-lang.com/

### app/components目录

一些通用的react组件


# 总结

玩转此项目，需要先学习：

 - ES6: http://es6.ruanyifeng.com/
 - Promise: http://es6.ruanyifeng.com/#docs/promise
 - fetch: http://www.cnblogs.com/snandy/p/5076512.html
 - sass: http://sass-lang.com/
 - React: http://www.ruanyifeng.com/blog/2015/03/react.html
 - webpack: https://webpack.github.io/
 - gulp: http://gulpjs.com/