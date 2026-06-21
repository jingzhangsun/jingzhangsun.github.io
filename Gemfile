source 'https://rubygems.org'

# 中文维护说明：
# GitHub Pages 会使用 github-pages 这组兼容依赖。
# 当前站点只启用 sitemap 和 redirect-from，不再使用博客 feed、评论、分页或 emoji 插件。
group :jekyll_plugins do
  gem 'github-pages'
  gem 'jekyll-sitemap'
  gem 'jekyll-redirect-from'
  gem 'webrick', '~> 1.8'
end

# 保留原项目中的兼容锁定，避免部分 Ruby 环境解析 github-pages 依赖时报 connection_pool 版本冲突。
gem 'connection_pool', '2.5.0'
