---
layout: post
title: Jekyll "Read more" link
category: [Jekyll]
---

It is nice to use `{{ post.excerpt }}` instead of `{{ post.content }}`
on your Jekyll home page, but then users can't see if there is more to read until they open
the whole post.

To add `Read more` link, you can use this simple snippet.

<pre>
{&percnt; if post.excerpt != post.content &percnt;}
    &lt;a href=&quot;&lbrace;&lbrace; site.baseurl }}&lbrace;&lbrace; post.url }}&quot;&gt;Read more&lt;/a&gt;
{&percnt; endif &percnt;}
</pre>
