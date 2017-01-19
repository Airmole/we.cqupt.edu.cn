We重邮 - 官网网站
===
* 官网网站: https://we.cqu.pt \ http://we.cqupt.edu.cn
* 微信小程序-代码仓库: https://github.com/lanshan-studio/wecqupt

该项目含We重邮官网展示主页`/home`及数据统计大盘`/dashboard`

> 所用技术栈
> * 自动化构建工具`gulp`：编译`sass` `compass`、压缩静态文件
> * nodejs框架`express4`：路由、中间件、视图渲染、模板引擎`ejs`
> * 数据可视化工具`echarts`：大盘展示

---

## 项目目录
```
构建前
  ├── .gitignore
  ├── README.md
  ├── package.json
  ├── gulpfile.js     // gulp配置文件
  ├── app.js          // express入口
  ├── mysql.js        // mysql相关信息（已被gitignore）
  ├── src/            // 前端文件
  │    ├── html/        // html页面文件夹，构建后至/views/
  │    ├── css/         // css静态文件夹，构建后至/dist/css/
  │    ├── js/          // js静态文件夹，构建后至/dist/js/
  │    ├── img/         // 图片文件夹，构建后至/dist/img/
  │    └── favicon.png
  └── routes/
  │    └── ...          // 导航侧栏脚本及样式 (通过nginx注入) (打包后)
  │   
gulp build
构建后新增
  ├── dist/           // 静态文件
  │    ├── hash.json    // 静态文件hash列表，会替换路径生成至/views/
  │    └── css\js\img/       
  └── views/          // 视图目录
```
## 开发

#### 0、安装`cnpm`
如果已安装，则跳过该步骤。
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
// 从此你将使用cnpm代替npm命令
```

### 1、安装`node_modules`
可根据`package.json`直接运行命令
```
$ cnpm install
```
> 约定俗成：新安装npm包时，
>
> `npm install [name] --save-dev` 表示 **构建项目时开发依赖**（如gulp、webpack等）
>
> `npm install [name] --save` 表示 **项目自身依赖** （如express、jquery等）

### 2、后续开发

`doing something`

### 3、重新构建

```
$ npm run rebuild      // 即 gulp clean && gulp build
```

### 4、调试部署

```
$ node app.js
```
启动成功，即可`http://localhost:3030/`

## 部署
利用`pm2`守护进程
##### 启动并命名为we.cqu.pt
```
$ pm2 start app.js --name we.cqu.pt
```
##### 重启
```
$ pm2 restart we.cqu.pt
```
##### 停止&清除
```
$ pm2 stop we.cqu.pt
$ pm2 delete we.cqu.pt
```
`nginx`配置域名代理至`3030`端口即可

---

@ [蓝山工作室](https://lanshan.studio)
