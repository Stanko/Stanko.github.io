+++
title = "Introducing <span>keen</span>"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "npm", "package", "esbuild", "typescript"]

[extra]
intro = "Minimal workflow I use to build and release npm packages."
image = "/img/keen/cover.png"

+++

As someone who maintains a couple of npm packages, I got frustrated by all of the notifications about security issues in my dev dependencies. In 99.99% I wasn't even using the vulnerable code, and usually it would be buried deep in the dependency tree.

Therefore, I decided to revisit and simplify my workflow. These were the main things I wanted to have:

* Use TypeScript and generate type definitions
* Generate both ESM and CJS modules
* Reduce the number of dev dependencies
* Have an easy way to develop and deploy a demo page

Less dependencies makes maintenance easier and code is less prone to the security issues.

## Keen

So without further ado I present you [keen](https://github.com/Stanko/keen/), my npm package boilerplate. It does all of the things mentioned above with only two dependencies, `esbuild` and `typescript`.

{{ image(
  alt="Terminal windows with keen's node_modules folder listed"
  src="/img/keen/dependencies.png"
  shadow=true
  caption="These are all dependencies keen comes with out of the box."
) }}

[esbuild](esbuild.github.io/) handles local development and builds a demo page. TypeScript takes care of building ESM and CJS modules as well as type definitions.


### Disclaimer

Keen is minimal and opinionated on purpose, and it might not fit your workflow. If you want something more robust and don't mind having more dependencies, check tools like [tsup](https://github.com/egoist/tsup) or [unbuild](https://github.com/unjs/unbuild).

### ESM and CJS modules

It helps your users to have both types of modules available. The main blocker is that you can't use ESM packages in CJS.

That's why I have two builds which are using different TypeScript configurations. Both config files extend [tsconfig-base.json](https://github.com/Stanko/keen/blob/dev/tsconfig-base.json) and they just define the appropriate module type and transpile target:

{{spoiler(text='
```json
{
  "extends": "./tsconfig-base.json",
  "compilerOptions": {
    "module": "ES2020",
    "outDir": "dist/esm",
    "target": "ES2015"
  }
}
```
', show="Show tsconfig-esm.json", hide="Hide tsconfig-esm.json" )}}



{{spoiler(text='
```json
{
  "extends": "./tsconfig-base.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "dist/cjs",
    "target": "ES2015"
  }
}
```
', show="Show tsconfig-cjs.json", hide="Hide tsconfig-cjs.json" )}}


I won't go into more details, but there are a couple of other things I had to setup. The code I ended up using is heavily based on these two articles. If you are interested to find out more, check them out:

* [How to Create a Hybrid NPM Module for ESM and CommonJS.](https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html)
* [Publish ESM and CJS in a single package](https://antfu.me/posts/publish-esm-and-cjs)


### Local development and demo page

In the past I used `webpack`, then switched to `parcel` and now ended up using `esbuild`. It is a super fast JavaScript bundler and it has no dependencies.

It includes [serve](https://esbuild.github.io/api/#serve) option which allows me to run a simple development server while working on the library. Just run `npm start` and you'll get `docs/index.html` page served on [localhost:8000](http://localhost:8000).

It doesn't include HMR nor live reload, but I don't mind it.

#### GitHub pages

Demo page was made with GitHub pages in mind. Once built, you should commit `docs/build` and push it to GitHub. Then in GitHub Pages settings select your branch and `/docs` folder.

Here are two examples:

* [React Plx v2](https://muffinman.io/react-plx/)
* [React Animate Height v3](https://muffinman.io/react-animate-height/).

Keen was actually extracted from the workflow I created for the new version of Animate Height.


## What keen doesn't include

The main premise was to keep it as simple as possible, to make maintenance easier. So I left out some things on purpose. To name a few:

* Tests
* CSS pre/post processors
* HMR / Live reload - for the pure esbuild solution, check [this comment](https://github.com/evanw/esbuild/issues/802#issuecomment-819578182)
* License

I add these features when I need them on project basis.

Hopefully, you'll find keen useful and customize it to your own needs. If you do, please let me know!



