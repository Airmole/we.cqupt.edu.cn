We重邮 - 官网网站
===
* 官网网站: http://we.cqupt.edu.cn
* 微信小程序-代码仓库: https://github.com/lanshan-studio/wecqupt

---

## 开发

#### 0、npm切换官方源

```
$ sudo npm install nrm -g --registry=https://registry.npm.taobao.org
$ nrm ls

* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  ...
  
$ nrm test
  
  ...
  
$ nrm use cnpm
|| or
$ nrm use taobao
```

### 1、安装`node_modules`，可直接运行
```
$ npm install
```

### 2、开发

`doing something`

#### 监听打包调试
```
$ npm run watch       // 即  webpack -p -w
```


### 3、webpack重新打包

#### 重新打包
```
$ npm run rebuild     // 即 npm run clean && npm run build
```

---

#### 打包
```
$ npm run build       // 即 webpack -p
```

#### 清除
```
$ npm run clean       // 即 rm index.html && rm -rf dist
```

---

@ [蓝山工作室](https://lanshan.studio) & [Cong Min](https://congm.in)
