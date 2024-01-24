+++
title = "Simple <span>colorful</span> logging in Node.js"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "node", "color", "logging", "terminal", "console"]

[extra]
intro = "An easy way to add some color to your node scripts."
image = "/img/log-colors/chameleon.png"

+++

When writing Node.js scripts, I often want to output information to the console in different colors. Usually, it is to get the user's attention and signalize success or error.

I could reach for a battle-tested library like [Chalk](https://github.com/chalk/chalk), but I usually don't need all of its features. Instead, I have a tiny script I copy from project to project:

```js
const reset = "\x1b[0m";

const log = {
  green: (text) => console.log("\x1b[32m" + text + reset),
  red: (text) => console.log("\x1b[31m" + text + reset),
  blue: (text) => console.log("\x1b[34m" + text + reset),
  yellow: (text) => console.log("\x1b[33m" + text + reset),
};
```

Then, I can easily log things in color:

```js
log.green("This seems like a very successful message");
log.red("Something might have gone wrong");
log.blue("I'm here to inform you of something");
log.yellow("Lemon 🍋");
```

Once executed, it looks like this:

![Colorful output strings in terminal](/img/log-colors/simple.png)

## How it works

The script uses something called [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code). It is a way to give commands to a terminal by passing sequences of bytes, usually starting with an ASCII escape character `\x1b`. They are mostly used to move the cursor and to change the color or styling of the text. They are standardized, and they should work on any platform.

For example, `\x1b[31m` is an escape sequence that tells our terminal to switch color to red. All text after it will be red, until we pass the _reset_ sequence `\x1b[0m`, which will revert text to the default color.

## More robust version

If you need more features, I suggest using an existing library. I usually recommend picking one of these two:

- [picocolors](https://github.com/alexeyraspopov/picocolors) - when I need more robust but still lightweight library
- [Chalk](https://github.com/chalk/chalk) - when I need a fully featured coloring library

But for the sake of learning, I added a few more features and copied code to [CodeSandbox](https://codesandbox.io/p/devbox/simple-colorful-loggin-in-node-js-856gly). This version allows you to pass multiple parameters, keeps native coloring for objects, and exposes a `paint` method which only colors parts of the string.

![Colorful output in terminal](/img/log-colors/chameleon.png)

## Browser

As a bonus, let's see how we can use color in a browser's console. Escape sequences are not going to work, but we can actually [use CSS](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output).

```js
console.log("%c🍋 Lemon", "background: black; color: yellow;");
```

Everything after `%c` will be styled using CSS defined in the parameter after it.

Open the console in your browser and click on the button below to test it yourself.

<button class="btn btn--empty" onclick='console.log("%c🍋 Lemon", "background: black; color: yellow; display: inline-block; padding: 3px 6px")'>Log 🍋 Lemon</button>

And please, just because you have CSS at your disposal, don't go crazy with styling console messages. Your users might not appreciate it.

Have a colorful afternoon!
