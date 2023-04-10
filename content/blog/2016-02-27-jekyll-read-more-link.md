+++
title = "Jekyll Read more link"
aliases = ["/jekyll-read-more-link/"]

[taxonomies]
category = ["Jekyll"]
tags = ["jekyll"]

[extra]
comments = [
  "comments/jekyll-read-more-link/1559777044030.toml",
  "comments/jekyll-read-more-link/1577605750964.toml",
  "comments/jekyll-read-more-link/1577612158401.toml",
  "comments/jekyll-read-more-link/1609178579331.toml",
  "comments/jekyll-read-more-link/1609180274502.toml"
]

+++

It is nice to use `post.excerpt` instead of `post.content`
on your Jekyll home page, but then users can't see if there is more to read until they open
the whole post.

To add `Read more` link, you can use this simple snippet.

```
{% if post.excerpt != post.content %}
    <a href="{{ site.baseurl }}{{ post.url }}">Read more</a>
{% endif %}
```
