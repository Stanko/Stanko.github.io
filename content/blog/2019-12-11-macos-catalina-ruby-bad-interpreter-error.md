+++
title = "MacOS Catalina, ruby bad interpreter error"
aliases = ["/macos-catalina-ruby-bad-interpreter-error/"]

[taxonomies]
category = ["Rants"]
tags = ["rants", "ruby", "jekyll", "mac"]

[extra]
comments = [
  "comments/macos-catalina-ruby-bad-interpreter-error/1581333359330.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1581333993703.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1590675200152.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1594769534724.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1594795431477.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1596190492431.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1597902815567.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1597949056674.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1599820087118.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1599822113207.toml",
  "comments/macos-catalina-ruby-bad-interpreter-error/1604872693798.toml"
]
image = "/img/catalina-ruby-bad-interpreter.png"
+++

Another Catalina rant, this time about Ruby. As far as I know, on MacOS, it is advisable to
{{ sidenote(text="leave system Ruby version to the OS", note="
For example users don't have write permission on the system's gems folder.
") }}
, and install a separate version for development. I had one installed via [Homebrew](https://brew.sh/), and never had any issues with it.

<!-- more -->

But after Catalina upgrade, I couldn't run Jekyll. Every time it would fail with the following error:

```
$ jekyll
  -bash: /usr/local/bin/jekyll: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby:
  bad interpreter: No such file or directory
```

I checked my bash profile and run `which ruby` to make sure I'm using the one installed by brew, and everything seemed to be in order.

```bash
# .bash_profile
export PATH="/usr/local/opt/ruby/bin:$PATH"

# bash
$ which ruby
/usr/local/opt/ruby/bin/ruby
```

After quick internet search I learned a lot of people are having similar problems after system upgrade, but I couldn't find the solution.

I've tried reinstalling ruby, setting `GEM_HOME`, altering `PATH` in `/etc/profile` and `/etc/bashrc`, removing and reinstalling gems, but nothing worked.

Then I tried to see which Jekyll binary is used and realized - for some reason gems were installed using the correct ruby version, but binaries weren't linked properly.

{{ image(
  src="/img/catalina-ruby-bad-interpreter.png",
  alt="Jekyll binary wasn't coming from brew ruby installation",
  size="md"
) }}

So the solution was pretty easy at the end, all I had to do is to find `gems/bin` folder and add it to my path.

```bash
# Use ruby installed by brew
export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/2.6.0/bin/:$PATH"
```

It looks like a common sense, but it took me a couple of hours to figure it out. Hopefully this will save time people facing the same issue.

----

## Big Sur update (December 2020)

I got the same error after updating to Big Sur, but this time I couldn't solve it. I still don't know what I was doing wrong. In the end I started using [rbenv](https://github.com/rbenv/rbenv) to manage ruby installations, and it works flawlessly.
