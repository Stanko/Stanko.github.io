+++
title = "My favorite bash oneliner"
aliases = ["/my-favorite-bash-oneliner/"]

[taxonomies]
category = ["Development"]
tags = ["dev", "bash"]

[extra]

+++

This simple bash command finds all of the files matching `*~` recursively, executes `rm` on them
and prints out which files are affected.

You can replace file matching pattern, and command you want to execute.

```
find ./ -name '*~' -exec rm '{}' ';' -print
```
