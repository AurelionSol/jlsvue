[toc]
## 一.项目结构

功能模块
![struct](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/struct.png)
单页Web应用基本结构为
```
<template>
  <div id="app">
    <el-container direction="vertical">
      <HeadNav v-if="header_show">Header</HeadNav>
      <keep-alive>
        <router-view>Main</router-view>
      </keep-alive>
      <myfooter v-if="footer_show">footer</myfooter>
    </el-container>
  </div>
</template>
```
## 二.设计原型

以学习交流页面为例：
![page](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/page.png)

公共样式：

纯色背景从底到高 #FFFFFF，#FCFCFC，#F5F5F5；

文字字号从大到小 32px，28px，24px，20px，16px；

文字颜色从大到小 #FFFFFF，#000000，#303133，#909399；

颜色：蓝色#409EFF，绿色#67C23A；

阴影参数为
```
box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
```

### 1.顶部导航栏
![header](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/header.png)
导航栏固定在页面顶端，内容高度60px，宽度为80%，logo、菜单、搜索栏、登录按钮占据比例为3：5：3：1，间隔10px。

### 2.背景图
![back](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/back.png)
背景图高度统一为400px(按需切图)
### 3.文章条目
![list1](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/list1.png)
![list2](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/list2.png)
文章条目高度180px，宽度50%，题图和标题栏按1：3分割，间隔10px。 

不同类型用蓝绿区分(考虑一致性，暂不允许自定义题图)。

标题、作者、简介左对齐，距离上端20px。

阅读量置于右下角，距离下端10px，距离右端20px。


每个条目之间距离20px。

每页8个条目(分页由前端完成)；

### 4.底部页脚
![footer](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/footer.png)

页脚高度200px，内容宽度80%，垂直居中。

logo置于左端，描述置于右端。

## 三.技术选型
- 核心框架：Vue
- 状态管理：Vuex
- 路由映射：vue-router
- UI组件库：Element-UI
- HTTP请求库：axios
- 资源加载打包工具：Webpack
- 其他：ES6,node.js,npm
## 四.代码规范
###  1.目录结构
├─api  
├─assets           #静态图片  
├─components       #子文件夹为页面，文件夹内.vue文件为组件  
│  ├─blog  
│  ├─code  
│  ├─learn  
│  ├─question  
│  └─userinfo  
├─router         #路由  
├─static  
│  └─styles  
└─stroe          #vuex状态管理
###  2.组件规范

每个vue组件有三个标签，<template>、<script>、<style>，分别对应HTML,JS,CSS。都应该有各自的规范
(可参考[前端文档基本例子](https://github.com/mgbq/front-end-Doc/blob/master/base.md)) 

公共的组件,JS,CSS应该抽取出来封装后使用。

## 五.接口规范

项目后端集成了Swagger框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。访问/swagger-ui.html查询即可 

![swagger-ui](https://raw.githubusercontent.com/AurelionSol/jlsvue/master/src/assets/Impress/Swagger%20UI.png)

/admin方法是后台管理的接口，前端不应该访问  

/api是留给前端访问的接口，GET,POST,PUT,DELETE方法分别对应查询，增加，更新，删除操作。执行POST方法时，参数应以Key，Value的方式提交。

与用户有关的操作应该在URL后附加Token，Token作为前端唯一识别用户的值


