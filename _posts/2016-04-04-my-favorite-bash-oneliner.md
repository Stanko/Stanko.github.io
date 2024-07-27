---
layout: post
title: My favorite bash oneliner
category: [Development]
tags: [dev,bash]
redirect_from: "/my-favorite-bash-oneliner/"
---

This simple bash command finds all of the files matching `*~` recursively, executes `rm` on them
and prints out which files are affected.

You can replace file matching pattern, and command you want to execute.

<pre>
  find ./ -name '*~' -exec rm '{}' ';' -print
</pre>
