---
layout: post
title: Running Staticman on Heroku
category: [Jekyll]
tags: [staticman,jekyll,comments,heroku]
redirect_from: "/running-staticman-on-heroku/"
---

I'm using [Staticman](https://github.com/eduardoboucas/staticman/issues/222) as a comment system on this blog. Unfortunately public instance [can't handle](https://github.com/eduardoboucas/staticman/issues/294) all of the requests coming in. That resulted in some readers being unable to post a comment.

That is why I decided to run my own instance on Heroku. It was easy to find this [great article](https://vincenttam.gitlab.io/post/2018-09-16-staticman-powered-gitlab-pages/2/) describing the process thoroughly. But after following it and deploying Statamic to Heroku, I just couldn't make it work.

It took me a while until I found [another article with a workaround](https://networkhobo.com/staticman-the-journey-continues). Long story short, you need to use a specific version instead of the latest one.

In the first article in "Stage 2" in "Step 7" replace this:

```
git checkout -b production origin/dev
```

with this:

```
git checkout -b production 55d1430
```

That should be it. Now I have my own instance (running on a Heroku's free tier) and hopefully there will be no further issues with posting comments.
