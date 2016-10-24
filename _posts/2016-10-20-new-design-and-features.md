---
layout: post
title: Blog redesign and new features
category: [Jekyll]
---

As you probably noticed I redesigned my blog and added some new features.
This is a list of the new stuff.

* New design
* Category pages
* Comments
* Search
* Reading time
* Share buttons

<!--more-->

### New design

My friend Nikola, from [MIDA](http://mida.rs) digital agency, helped me a lot with this one.
I gave him a basic idea what I wanted, and he came up with this simple but beautiful design.
It might go through some smaller changes in the future, but nothing major.
Hope you like it.

### Category pages

These are accessible from the main menu, or by clicking on the category link at the end of the post.
Obviosly, they list all of the posts for the selected category.
Plugin I used is [jekyll-archives](https://github.com/jekyll/jekyll-archives).

### Comments

[Staticman](https://staticman.net/) brings user generated content to the static site generators.
You can add their bot to your repo, and then hitting specific endpoint will
generate a pull request (or push directly) with the data user entered.
My comments are going through pull requests, which enables me to moderate them.

### Search

Also accessible from the main menu. Search is done by JavaScript and it
goes through JSON object with post titles.
It uses fuzzy search algorithm, so it will find every title
that has all of the letters you entered.
Longer word matched will give higher priority to a result.
(Try typing `SASS` for example.)


### Reading time

At the top of each post, you'll see estimated reading time.
It is a very simple plugin I found somewhere on the internet and modified a bit.

Here it is:

```ruby
# Outputs the reading time

# Read this in "about 4 minutes"
# Put into your _plugins dir in your Jekyll site
# Usage: Read this in about {{ page.content | reading_time }}

module ReadingTimeFilter
  def reading_time( input )
    words_per_minute = 180

    words = input.split.size;
    minutes = ( words / words_per_minute ).floor
    minutes_label = minutes === 1 ? " minute" : " minutes"
    minutes > 0 ? "about #{minutes} #{minutes_label}" : "less than 1 minute"
  end
end

Liquid::Template.register_filter(ReadingTimeFilter)
```

### Share buttons

At the end of each post, there are three simple sharing buttons.
For Facebook, Twitter and Google+. No API or third party scripts are loaded.

### Other stuff I want to add

* Real related posts - Jekyll by default as related posts actually shows latest posts.
I'm still looking for a nice way to implement this.
Probably I'll just match posts by tags.
* Meta data (for sharing and SEO) - just need to add few meta tags to the head.
* JSX syntax highlighting - not sure how to make this one, still at the drawing board.
* Add icon for the [ATOM feed](/atom.xml)

### Custom plugins and GitHub pages

When I first pushed new version of the blog, most of the new features were missing.
I quickly learned that GitHub pages doesn't allow custom plugins.
It is a reasonable security feature.

I decided to get a hosting for the blog, and then use Jenkins to make a Jekyll builds.
But colleague told me that this is easily doable using [Travis](https://travis-ci.org/),
without any outside hosting.
There will be a [new post](/travis-jekyll-and-github-pages/) about it, with detailed description how to set it up.

Basically I use the `source` branch for the Jekyll website, and Travis is watching for the pushes on that branch.
When push is detected, Travis builds static HTML and pushes it to the `master` branch.
From there GitHub pages takes over and deploys it.

### For the end

Hope you guys like the changes, if you are interested in anything specific, feel free to leave a comment.
I'll try to answer it, or even write a completely new post about it. Thanks!
