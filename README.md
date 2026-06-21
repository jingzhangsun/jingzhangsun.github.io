# SMILab Lab Website

这是海南大学 SMILab 实验室网站的 Jekyll 代码。项目由 Academic Pages / Minimal Mistakes 模板裁剪而来，目前只保留实验室官网实际使用的页面和主题基础。

## 目录说明

- `_pages/`：正式页面，包括首页、研究方向、论文成果、知识产权、获奖情况、实验室瞬间、团队成员、致谢合作和 404 页面。
- `_publications/`：论文成果按年份维护，`_config.yml` 中的 `publication_category` 控制展示顺序。
- `_data/navigation.yml`：顶部导航链接。
- `_config.yml`：站点全局配置、作者侧栏信息、插件和 collection 设置。
- `_includes/` 和 `_layouts/`：Jekyll 模板片段与页面布局，已删除评论、博客、CV、教学、演讲地图等未使用功能。
- `_sass/`、`assets/css/`、`assets/js/`：主题样式与前端脚本。`assets/js/main.min.js` 是当前网页实际加载的脚本。
- `images/`：网站图片。已保留正式页面引用的实验室照片、头像、团队图和 favicon。

## 常见维护

1. 更新首页动态：编辑 `_pages/about.md`。
2. 更新研究方向：编辑 `_pages/research.md`。
3. 更新论文成果：编辑 `_publications/` 中对应年份文件。
4. 更新团队照片或活动照片：把图片放进 `images/`，再在对应页面用 `/images/文件名` 引用。
5. 调整顶部菜单：编辑 `_data/navigation.yml`。

## 本地预览

当前环境未检测到 Ruby/Bundler，无法直接运行本地构建。安装 Ruby 和 Bundler 后，可以执行：

```bash
bundle install
bundle exec jekyll serve -H localhost
```

然后访问 `http://localhost:4000` 预览网站。

## 维护备注

- 网站正文保持原有英文展示；源码和配置里的中文注释用于维护说明。
- 删除大功能前，先用 `rg` 搜索是否还有模板引用，例如 `rg "include xxx"` 或 `rg "/images/xxx"`。
- 主题核心 `_sass/vendor/` 和 `assets/webfonts/` 仍被主样式依赖，不建议随意删除。
