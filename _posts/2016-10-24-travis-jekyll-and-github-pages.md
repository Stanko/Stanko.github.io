---
layout: post
title: Setting up Travis, Jekyll and GitHub pages
category: [Jekyll]
---

As I already mentioned, GitHub pages do not work with the Jekyll plugins.
It is a security measure. So I researched it a bit, and colleague of mine
proposed a simple solution - Travis CI.

There is a great repo with instructions how to set everything up -
[jekyll-travis](https://github.com/mfenner/jekyll-travis).
But few steps are kinda confusing, and it took me 10 failed builds to make
it work. So I'll try to help you with those.

<!--more-->

I copied the steps from the original repo and updated steps where I got stuck.
Be sure to check the original readme as well.

## Flow

* When you push to your GitHub repo, it triggers Travis
* Travis starts up a virtual machine and installs all required software (mostly Ruby gems)
* We use a custom rake task to tell travis how to build the Jekyll site and push the updated content back to Github
* Travis clones a different branch (either `gh-pages` or `master`, depending on the kind of Github repo) that holds the static HTML pages
* Travis runs `jekyll build` with the destination in the other branch
* Travis does a `git push` of the other branch
* Github Pages starts serving the updates site

## Steps to make it work

* Move your Jekyll source files to the `source` branch (name it as you like).
We'll use `master` or `gh-pages` branch to host generated HTML website.

* Make sure you have enabled your source repo in the Travis CI admin dashboard so that the webhook is triggered

* Create a GitHub Personal Access Token from you [profile page](https://github.com/settings/tokens).

* If you haven't already, create a `Gemfile`, and add `rake` gem to it.

```ruby
source "http://production.cf.rubygems.org/"

gem "rake", "~> 10.1.1"
gem "jekyll-paginate"
gem "jekyll-archives"
```

<small>
We have seen [intermittent timeouts](http://blog.travis-ci.com/2013-05-20-network-timeouts-build-retries/) fetching gems from Rubygems.org. `install: bundle install` lets Travis CI automatically retry, and we are using `source "http://production.cf.rubygems.org/"` in Gemfile to point to a different repository.
</small>

* Install the travis gem (`gem install travis`) and create `.travis.yml`.
It will tell Travis what to install and how build our Jekyll site.
Add following data to it.

```yaml
language: ruby
rvm:
- 2.3.1
install:
- bundle install
script: bundle exec rake site:deploy --quiet
env:
  global:
    secure: YOUR_ENCRYPTED_INFO
```

Replace the `YOUR_ENCRYPTED_INFO` with the output of the following command:

```bash
travis encrypt 'GIT_NAME="Your Username" GIT_EMAIL="your@email.com" GH_TOKEN=GITHUB_PERSONAL_TOKEN_YOU_CREATED'
```

* Make sure you add `vendor` to your .gitignore as Travis CI is vendoring the Ruby gems there. The `vendor` folder should also be excluded in the Jekyll `_config.yml`.

* Add the following to your Jekyll `_config.yml` file: `username`, `repo` and `branch`.

```yaml
# GitHub
username:             Stanko
repo:                 Stanko.github.io
branch:               source

# Jekyll source / destination
source:               .
destination:          _site
```

* Add the contents of `Rakefile` to your Jekyll Rakefile (or replace it).
The provided [Rakefile](https://github.com/Stanko/Stanko.github.io/blob/source/Rakefile)
 has some additional commands, but the important one here is `rake site:deploy`.

And you are done! That should be it, of course you need to create a Travis CI account.
Travis is free for the open source projects. If you are using it for the commercial stuff,
play fair and check their payed tiers.

Build for my blog takes about a minute.
It depends of the software Travis installs on every build.

Now you can use custom plugins and asset pipeline with Jekyll. Cheers!
