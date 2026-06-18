<p align="center">
  <img src="source/DM_20260618145850_001.png" alt="国家反诈中心图标" width="120">
</p>

<div align="center">
<h1>国家反诈中心提示页面</h1>
<p>（Anti-Fraud-Page）</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 项目简介

本项目是一个仿制风格的国家反诈中心风险警示页面，用于在网页中展示反诈提示信息。页面包含机构标识、风险警告文案、举报与申诉联系方式，以及国家反诈中心和工信部反诈专班的二维码入口。

## 技术栈

- **HTML5**：页面结构与语义化标签
- **CSS3**：响应式布局、渐变背景、Flexbox 排版
- **JavaScript**：图标与文字的动态对齐逻辑

## 目录结构

```text
反诈页面/
├── index.html              # 页面入口
├── static/
│   ├── css/style.css       # 页面样式
│   └── js/main.js          # 图标对齐脚本
├── source/                 # 图片与图标资源
│   ├── DM_20260618145830_001.png
│   ├── DM_20260618145835_001.png
│   ├── DM_20260618145841_001.png
│   ├── DM_20260618145850_001.png   # 国家反诈中心图标
│   ├── ...
│   └── favicon.ico
└── README.md               # 项目说明
```

## 本地启动

由于本项目是纯静态 HTML + CSS + JavaScript 页面，建议使用 Python 启动本地服务器进行预览：

```bash
python -m http.server 8000
```

启动后，在浏览器中访问：

```text
http://localhost:8000
```

## 免责声明

本页面仅作为前端展示示例，所有标识与图片均来自公开渠道，实际使用请遵循相关法律法规及官方授权要求。
