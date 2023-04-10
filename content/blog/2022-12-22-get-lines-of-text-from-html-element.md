+++
title = "Get <span>lines of text</span> from an HTML element"

[taxonomies]
category = ["JavaScript"]
tags = ["js", "lines", "text"]

[extra]
intro = "I've done this many times, and finally I have a solution I'm satisfied with."
image = "/img/lines-of-text.png"

+++
<link rel="stylesheet" href="/posts/text-lines.css" />

I was tasked with getting lines of text from an element many times. Usually it was to
{{ sidenote(
  text="truncate the text",
  note="Before [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) was a thing"
)}}
 or to animate the text line by line.

It sounds easy, but I have encountered many edge cases in practice. After trying out multiple approaches, I finally have a solution I'm satisfied with, although it has some limitations.

Let's start with a demo which displays one of my favorite Frank Zappa quotes:

<div class="example example--demo is-in-viewport">
  <div class="example-text">
    Information is not knowledge.
    Knowledge is not wisdom.
    Wisdom is not truth.
    Truth is not beauty.
    Beauty is not love.
    Love is not music.
    Music is THE BEST.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

<small>To restart the animation, resize the element using a handle on the right.</small>

The same code is also available on [CodePen](https://codepen.io/stanko/pen/eYMQOVP) for you to play with.

## Implementation

The idea is to go word by word and check if the word has fallen into the next line. To determine if a word has fallen, we need to compare the word's top offset with the previous word's top offset. When it changes, it means a new line has started.

We can't get top offset from text, but we can get it from HTML elements. Therefore, we need to wrap each word in a separate `<span>` element first. Then we can loop through all the spans and use `getBoundingClientRect` to get the top offset value. When the value changes compared to the previous word, it means that the current word fell into a new line.

```ts
function getTextLines(element) {
  // Get plain text from the element
  const text = element.innerText
    // Replace all whitespace (newlines, tabs and space) with a single space
    .replace(/\s+/gm, " ")
    // Remove leading and trailing whitespace
    .trim();

  // Split text into words
  const words = text.split(" ");

  // Wrap all words in spans
  const spans = words.map((word) => {
    // Adding inline-block to make sure single word doesn't break into multiple lines
    // For example: short-term, full-scale
    return `<span style="display: inline-block;">${word}</span>`;
  });

  // Replace initial element content with our spans.
  // It is a simple way to preserve the original styling,
  // without creating a new element.
  element.innerHTML = spans.join(" ");

  const lines = [];
  // Curren't line top offset.
  // We still haven't started, so it is null for now.
  let previousTop = null;
  // Array of words
  let currentLine = [];

  // Loop through newly created spans
  element.querySelectorAll("span").forEach((wordSpan, index) => {
    // Get position of each span
    const wordRect = wordSpan.getBoundingClientRect();

    // It span's top is different than previous top,
    // it means the current word fell in the next line.
    // Skip this check for the first line, as previousTop's
    // initial value is null.
    if (previousTop !== wordRect.top && index > 0) {
      // Finish the current line
      lines.push(currentLine);
      // And start a new one
      currentLine = [words[index]];
    } else {
      // We are still in the current line, add a word to it
      currentLine.push(words[index]);
    }

    // Update previousTop value
    previousTop = wordRect.top;
  });

  // Push whatever words are left as the last line
  lines.push(currentLine);

  return lines;
}
```

I'm adding `display: inline-block` to each word's span element to prevent a single word from breaking into multiple lines.

### Limitations

This approach worked very well for my use case, but it has one main limitation - it works with plain text only. HTML elements will be ignored. I played with implementing support for nested elements as well, but it got complicated quickly, so I [never finished it](https://codepen.io/stanko/pen/vYaYqdN).

Your fonts have to be loaded before running this script. Otherwise it will calculate lines against one font and when the other loads, it may not be correct.

And one last thing, my code does everything inline and replaces the element's text with a bunch of span elements. If you don't want that, you can clone the element, run the code and then remove the clone from DOM.

## Examples

I've put a couple of examples below, and as far as I can see, each one works well, no matter the language, alphabet or direction.

Please excuse me if I butchered your language, I just used Google Translate with the original English text.

### English

<div class="example example--debug">
  <div class="example-text">
    Information is not knowledge.
    Knowledge is not wisdom.
    Wisdom is not truth.
    Truth is not beauty.
    Beauty is not love.
    Love is not music.
    Music is THE BEST.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

### Serbian

<div class="example example--debug">
  <div class="example-text">
Информација није знање. Знање није мудрост. Мудрост није истина. Истина није лепота. Лепота није љубав. Љубав није музика. Музика је НАЈБОЉА.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>


### Arabic

<div class="example example--debug">
  <div class="example-text" dir="rtl">
المعلومات ليست معرفة. المعرفة ليست كذلك
حكمة. الحكمة ليست حقيقة. الحقيقة ليست الجمال.
الجمال ليس حب. الحب ليس موسيقى. الموسيقى
الأفضل.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

### Japanese

<div class="example example--debug">
  <div class="example-text">
情報は知識ではありません。 知識はそうではない
知恵。 知恵は真実ではありません。 真実は美ではありません。
美しさは愛ではありません。 愛は音楽ではありません。 音楽は
最高の。
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

### Korean

<div class="example example--debug">
  <div class="example-text">
정보는 지식이 아닙니다. 지식은 아니다
지혜. 지혜는 진리가 아닙니다. 진실은 아름다움이 아닙니다.
아름다움은 사랑이 아닙니다. 사랑은 음악이 아닙니다. 음악은
최고.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

### Thai

<div class="example example--debug">
  <div class="example-text">
ข้อมูลไม่ใช่ความรู้ ความรู้ไม่ได้
ภูมิปัญญา. ปัญญาไม่ใช่ความจริง ความจริงไม่ใช่ความงาม
ความงามไม่ใช่ความรัก ความรักไม่ใช่ดนตรี ดนตรีคือ
ที่สุด.
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

### Myanmar (Burmese)

<div class="example example--debug">
  <div class="example-text">
သတင်းအချက်အလက်သည် အသိပညာမဟုတ်ပါ။
ပညာသည် ပညာမဟုတ်။
ပညာသည် အမှန်တရားမဟုတ်ပါ။
အမှန်တရားသည် အလှတရားမဟုတ်ပါ။
အလှသည် အချစ်မဟုတ်ပါ။
အချစ်ဆိုတာ ဂီတမဟုတ်ဘူး။
ဂီတသည် အကောင်းဆုံးဖြစ်သည်။
  </div>
  <div class="example-handle" title="Drag to resize"><span></span></div>
</div>

<script src="/js/posts/text-lines.js"></script>
