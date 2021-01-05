source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"

gem "activerecord-postgres_enum", "~> 1.5.0"
gem "awesome_print"
gem "bootsnap", require: false
gem "date_by_example"
gem "devise"
gem "jbuilder"
gem "pg", ">= 0.18", "< 2.0"
gem "puma"
gem "simple_form"
gem "rails", "~> 6.1.0"
gem "table_print"
gem "turbolinks"
gem "webpacker"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "faker"
  gem "pry-rails"
  gem "pry-rescue"
  gem "rspec-rails"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "rubocop-rspec"
  gem "test-prof"
end

group :development do
  gem "annotate"
  gem "erb_lint", require: false
  gem "htmlbeautifier"
  gem "listen", "~> 3.4.0"
  gem "spring"
  gem "spring-commands-rspec"
  gem "spring-watcher-listen"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "capybara-screenshot"
  gem "factory_bot_rails"
  gem "selenium-webdriver"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
