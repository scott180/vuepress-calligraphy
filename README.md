# vuepress-calligraphy

使用VuePress构建《书法练习轨迹》网站。[xushufa]( https://xushufa.cn ) &ensp; [vuepress-calligraphy]( https://scott180.github.io/vuepress-calligraphy )

## 首页

```
---
home: true
lang: zh-CN
heroText: 徐书法
heroImage: /logo.jpg
actionText: 开始 →
actionLink: /练习/书法练习轨迹--明月几时有
features:
- title: 徐书法
  details: 十年如一日，徐徐练习，徐书必有法。
- title: 无为徐生
  details: 无为徐生，希冀无为有为，徐生长生。人生在世，有所作为，文化长生，思想永恒。
- title: 书法练习轨迹
  details: 人情必有所寄，习惯而成自然。练着练着，书法就成了生活的一部分，记录书法练习轨迹更是有趣有意思的点缀。
footer: Copyright © 2022 xushufa.cn 无为徐生 书法练习轨迹
---
```



## 配置

参考 [vuepress]( https://vuepress.vuejs.org/zh/ ) &ensp; [blog-vuepress]( https://github.com/codeteenager/blog-vuepress )  &ensp; [搭建自己的博客]( https://segmentfault.com/a/1190000015237352 )

在使用前请先安装VuePress

```sh
$ npm install -g vuepress
```

使用`npm run docs:dev`启动项目，启动后在浏览器中使用`localhost:3000`进行访问
```sh
$ npm run docs:dev
```

使用`npm run docs:build`打包项目
```sh
$ npm run docs:build
```



## 部署

根目录创建 `deploy.sh` 文件

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:scott180/scott180.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  注意配置 `docs\.vuepress\config.js` 的 `base`
# git push -f git@github.com:scott180/vuepress-calligraphy.git master:gh-pages

cd -

```

---

设置 `package.json`
```
{
    "scripts": {
        "deploy": "bash deploy.sh"
      }
}

```

运行 `npm run deploy` 即可部署到github静态页面

> 如出现样式丢失，css文件不能加载问题，需要在 `docs\.vuepress\config.js` 配置 `base` 字段

```
module.exports = {
  // 页面标题
  title: '徐书法',
  // 网页描述
  description: '无为徐生 书法练习轨迹',
  base: '/vuepress-calligraphy/',
```

---