+++
title = "The <span>Tiny Book</span>  of Great Joys"

[taxonomies]
category = ["Random"]
tags = ["ai", "midjourney", "svg", "plotter", "book"]

[extra]
theme = "purple"
intro = "I created a tiny, hand-crafted book for my wife, using AI, a pen plotter and 3D printer. Here's how I over-engineered a simple gift into a full blown passion project."
image = "/img/tiny-book/the-book-02.jpg"
favorite = true
+++

If you are interested in how I over-engineered the process of making a tiny book for my wife, using AI, a pen plotter, a 3D printer, and a lot of time, you are in the right place. The book is titled {{ sidenote(text="The Tiny Book of Great Joys", note="*Mala Knjiga Velikih Radosti* in Serbian") }}, and here is how it turned out:

![The Tiny Book of Great Joys sitting on the table slightly open with the title page showing](/img/tiny-book/the-book-01.jpg)

{{
  gallery(images = [
    "/img/tiny-book/the-book-02.jpg",
    "/img/tiny-book/the-book-03.jpg",
    "/img/tiny-book/the-book-04.jpg",
  ])
}}

My wife is delighted with it, so it was worth all the effort.

This post will take you through the process. It will be a long one, but please stick around - I promise there will be a lot of pretty pictures.

Here is the outline of the post:

* [The idea](#the-idea)
* [Drawings](#drawings)
* [Text](#text)
* [Plotting](#plotting)
* [Bookbinding](#bookbinding)
* [The finished book](#the-finished-book)
* [Timeline](#timeline)
* [Conclusion](#conclusion)

## The idea

I had this idea for a while after seeing something similar somewhere on the internet.. Since then, I always wanted to make one for my wife - a physically small book with a bunch of small drawings of our memories together, inside jokes, and little things she likes.

I wanted the illustrations to be hand-drawn, and I had a plan to ask my friend to do them. But I knew he would refuse any kind of payment, so I felt bad adding more work to his plate. So I shelved the idea, but every now and then, it would pop up in my head.

Fast forward a few years - we got a kid, and our routine completely changed. We are enjoying it a lot, but it can be very exhausting, and every day seems identical to the last. That's why I decided I needed to do something for her to break the routine. The book idea seemed perfect - personal and handcrafted - so I gave it a try.

To be able to do everything myself, I went to create digital drawings and then draw them on paper using my trusty pen plotter.

With the idea in place, I moved on to creating the drawings - which turned out to be a challenge of its own.

## Drawings

For pen plotting, one needs vector files, so I started drawing in Figma. Unfortunately, I quickly realized that my drawing skills would not get me the result I had envisioned. Determined to do it this time, I decided to try using AI to generate images.

### Midjourney

I got myself a Midjourney subscription and started playing with it. It took a lot of failed attempts to figure out how to get drawings that were simple and had a strong hand-drawn feel to them. Even then, I ended up editing every one of them, but more on that later.

One of the first images I was satisfied with (it didn't end up in the book, though):

![Black and white drawing of a cute fox curled up sleeping.](/img/tiny-book/01-fox.jpg)

It took a lot of time, but it was fun. Failed attempts were often quirky and funny, and I was learning how to use the tool. And it made me feel like a secret agent, doing it next to my wife, who had no idea what I was up to.

![A bunch of attempts at drawing Link from Zelda](/img/tiny-book/fails.png)

### Prompting

I may be wrong, but I think Midjourney wasn't built for the kind of illustrations I had in mind. I was after simple, hand-drawn illustrations that felt personal. Luckily, I found a style reference (`--sref 230156437`) that worked well for my case. I used it to generate almost all of the drawings that ended up in the book. For those who haven't used Midjourney - you can use images as style references to influence the style of images you want to generate.

Most of my images were generated using that `sref` code and a {{ sidenote(text="style weight", note="A number that tells Midjourney how much the reference should influence the final output" ) }} between 150 and 400 (it can go from 0 to 1000).

As for the prompts, these are the key terms I combined with the description and the style reference:

* black and white
* vector line art
* stylized simple drawing
* solid white background
* isolated on white background
* low detail
* clean edges
* sketch
* rough sketch
* children's coloring book

It took me a lot of tries - between 10 and 30 attempts for each image you see in the book.

### AI to Plotter

Once I solved the image generation part, I had to figure out how to turn them into vector files for plotting. The first thing I tried was something similar to halftone. As you can see below, in this process, the images completely lost the hand-drawn feel.

![The same fox drawing, but but drawn with a lot of small dots, using technique similar to halftone](/img/tiny-book/02-fox.jpg)

Then I remembered [this plot](https://www.instagram.com/p/CNJ_ZBOHZKj/) of Marble Machine X I did a while ago, for which I used AutoTrace to convert the original image to a vector file. The great thing about AutoTrace is that it supports "centerline tracing". And this time, I learned that Inkscape has a great AutoTrace plugin, which made it even easier to convert.

### What makes centerline tracing different

Most of the tools that convert raster to vector images do it by outlining shapes. This is not suitable for plotting, as each line in the original image becomes a sausage-like shape. Centerline tracing, on the other hand, tries to draw a single line following the middle path through shapes. Don't worry if it sounds confusing; the example below should make things clearer.

Here is the image of Link from *The Legend of Zelda* generated by Midjourney:

![Black and white cartoony drawing of Link from The Legend of Zelda standing with a sword and shield.](/img/tiny-book/link-01-midjourney.png)

After applying a common vectorization technique, we get this. As you can see, each line in the original drawing is now outlined, creating this messy-looking image.

![Vectorized image of Link using common vectorization technique with each area outlined black](/img/tiny-book/link-03-shapes.png)

But if we use centerline tracing, it suddenly looks a lot more like a drawing. It is not perfect, but don't worry - we are going to clean it up in the next step.

![Vectorized image of Link using centerline tracing, looking much more like a real drawing](/img/tiny-book/link-04-before.png)

### Cleaning up

In the points where lines touch or cross, AutoTrace is not sure which line to follow and creates these funky-looking joints. Here is an exaggerated example to show you what I'm talking about. Input is the raster image at the top and the vectorized result is at the bottom:

![Lines that are crossing and touching before and after centerline tracing](/img/tiny-book/tracing-01.png)

But I found out that if I roughly separate these lines, I get a much better result.

![Lines that are crossing and touching, but slightly separated before tracing, with the result being much better](/img/tiny-book/tracing-02.png)

Let's now apply this technique to the image of Link we've seen above. After separating lines (and some cleaning up) this is the image I ended up with. It is rough, but it is only used as an input for the tracing process, so it doesn't really matter. This was manual and somewhat tedious process, but I enjoyed it overall. It was a sort of meditation for me.

![The image of Link, but this time with lines slightly separated and details removed](/img/tiny-book/link-02-after-cleanup.png)

And finally, when we trace this image, we get a really nice and clean vector file perfect for plotting.
![Very clean vectorized image of Link](/img/tiny-book/link-05-after.png)

Here is another example. We start with the image I generated using Midjourney:

![Black and white drawing of a woman, man, little girl and a dog walking in a forest](/img/tiny-book/setnja-01.png)

After editing, removing details and separating lines, we get this one:

![The same image of the family walking in the forest but with lines separated and some parts redrawn](/img/tiny-book/setnja-02.png)

And the traced vector result:

![Vectorized image of of the family walking in the forest](/img/tiny-book/setnja-03.png)

You'll notice that in both examples I did {{ sidenote(text="some redrawing", note="For example, in the second image, I redraw the dog completely to look like our dog Zappa.") }}. I did that for pretty much all of the images, to fix things I wasn't able to polish using prompts. I also removed a lot of details to make sure images are crisp and readable at the small size.

### Final image flow

All of this took a lot of experimentation, but it gave me a pretty solid workflow which I used to generate all of the images. The complete flow looks like this:

- Generate images using Midjourney.
- Upscale them two times, because upscaled images were easier to edit and tracing was more precise.
- Clean up, redraw and separate lines by hand using Gimp.
- Use Inkscape plugin to run AutoTrace centerline tracing.

It took me a while to generate all the images, and the fact that I was trying to keep it a secret from my wife didn't help. I think I did it over the span of two weeks, mostly in the evening after she would go to bed.

### {{sidenote(text="Ganon", note="Name of the main villain Link fights against in The Legend of Zelda series")}} never stood a chance!

Before we continue I just want to show you two funky images of Link that really made me laugh:

![Funky looking Links generated by Midjourney](/img/tiny-book/funky-links.jpg)

Midjourney please staph!

## Text

With the drawings ready, I turned to the next crucial part - the text. I first wanted to write everything by hand, photograph it and then vectorize it in the same way I did with the images. But it was a hassle - I had to do a lot of editing for text to look as my handwriting.

Evil Mad Scientist, the maker of my pen plotter, has a fantastic tool called [Hershey Text](https://wiki.evilmadscientist.com/Hershey_Text). It contains a bunch of single-line fonts ideal for plotting. I chose the EMS Elfin font as it looked playful and hand-drawn. I used it to write all of the text in the book and I think it turned out great.

Here is how it looks:

![Title of the book in English and Aerbian in EMS Elfin font](/img/tiny-book/fonts.png)

## Plotting

The tricky part with bookbinding is that pages are not printed in order, but in a way that when you fold the sheets in half, you get the right order. I used Figma to design the layout, with a great care to make sure pages are in order after double-sided plotting.

Here is the layout laid out on A4 sized paper. Sorry for blurring the text, but a lot of it is very personal and I want to keep it for our eyes only.

![Layout of the book ready for plotting](/img/tiny-book/layout.jpg)

Plotting is the part that went the smoothest, but not without hiccups. I usually use Pigma Micron blackliner markers. They use archival quality ink and they are literally indestructible. But this time, even the thinnest one I had was too thick for the book this small.

Here you can see the first {{ sidenote(text="two test plots", note="Sorry for the poor quality photos, I threw the plots away, so these are the only ones I have") }} using markers of 0.2mm and 0.1mm thickness respectively. Lines got a bit smudged and looked much thicker than I expected. This was also the moment I realized I need to remove {{ sidenote(text="a lot of details", note="A friend of mine said that in these plots, Link looks like he has measles") }} from the images to make them readable at this size.

![Test plot using 0.2mm marker](/img/tiny-book/marker-02.jpg)
![Test plot using 0.1mm marker](/img/tiny-book/marker-01.jpg)

I needed to find a thinner pen.

### Technical pen to the rescue

Blackliner markers were made as a more practical replacement for technical pens. But from what I've read, an old-school technical pen was the only thing capable of achieving super-fine lines I wanted. I went online and ordered Rotring Isograph 0.2mm. As soon as it arrived I sneaked out to my study and did another test plot using it. Oh boy, was I happy when I saw the result:

![Test plot using a technical pen](/img/tiny-book/technical-pen-01.jpg)

Lines were thin and crisp and at this point I was convinced the project will be a success!

### Smudged drawings

All of the first plots were done on 120gsm printer paper. It is somewhat thick paper and drawings looked fantastic. Unfortunately, when I bound the pages together, the drawings and letters would get transferred on the opposite pages. I could probably get away with it, considering the whole hand made feel of the book. But I wanted it to be perfect.

A friend advised me to leave ink to dry for a few hours. I left each side to dry for 24 hours, but it smudged again. Next time I tried putting the plot (before cutting the pages) between two sheets of papers and pressing it with heavy books. I did that for more than 24 hours, but still after cutting and bounding the pages, they got smudged again. At this point I was becoming somewhat desperate. As the last resort I ordered different, 100gsm paper and to my relief it worked! Crisis averted!

In the final version you can still see tiny traces on a few pages, but these are barely visible and don't really bother me.

After plotting and cutting I was left with a stack of somewhat delicate pages. Now, it was finally time to turn them into a book.

## Bookbinding

As you can imagine, I had zero bookbinding experience. There are a lot of resources online, but two of them were crucial for my project as they were on how to bind tiny books:

* [Mini BookBinding Marathon](https://www.youtube.com/watch?v=kA2bjvOAzGw) video
* [How to Make A Miniature Hardback Book](https://www.rokolee.com/diy-miniature-hardback-book) article

After reading and watching these and a few generic articles on bookbinding, I gathered enough info to try doing it myself. I thought I was super clever because I 3D printed sides and spine of the book. I designed sewing holes in the spine so I can connect the pages directly to it without using glue. It was a decent idea, but it left a gap between two {{ sidenote(text="signatures", note="In bookbinding, a section, gathering, or signature is a group of sheets folded in half.") }}. Still, I went with it for the first try.

![3D printed spine with two book signatures already sewn to it](/img/tiny-book/3d-printed-spine.jpg)

I laid everything down on the canvas that the book would be wrapped in and started assembling it. But I made a crucial mistake - I used super glue. It dries quickly, it is stiff, and doesn't glue 3D printed plastic well and it dissolved the paper I used. Long story short, I made a mess. But I didn't stress too much, I just proclaimed that version is a prototype and used it as a learning experience.

I ordered proper bookbinding glue (PVA). While I was waiting for it, I focused on properly sewing the pages together.

### Sewing the pages

The first time I sewed the pages together, I poked the holes by hand and they were somewhat uneven. Again, it was nothing major, but I didn't like it. So I designed and 3D printed a simple tool to help me drill the holes evenly.

The tool has two parts, and the pages fit snugly between them. Both top and bottom parts have holes, so I was able to put the needle through and poke perfectly even holes in the pages. I'm very proud of this silly contraption.

![3D printed tool, closed, with needle poking through it](/img/tiny-book/3d-print-01.jpg)

![3D printed tool, opened, with the sheet with sewing holes visible still in it](/img/tiny-book/3d-print-02.jpg)

Here you can see all of the eight sheets with sewing holes.

![All eight sheets with illustrations ready for sewing](/img/tiny-book/pages-with-sewing-holes.jpg)

Fun fact, I designed all 3D parts using JavaScript and [Replicad](https://replicad.xyz/) library. Here is [a link](https://studio.replicad.xyz/workbench?from-url=https://muffinman.io/img/tiny-book/model.js) if you want to play with the model in your browser.

[![Application showing code and the 3D model](/img/tiny-book/model-code.png)](https://studio.replicad.xyz/workbench?from-url=https://muffinman.io/img/tiny-book/model.js)

But I ditched the 3D printed spine and used the technique called *pamphlet stitch*, which works great when you have only two signatures. It made signatures way more tight than when I connected them separately to the 3D printed spine.

![Two book signatures sewn together using pamphlet stich](/img/tiny-book/pamphlet-stich.jpg)

![Two book signatures opened at the exact point where they meet](/img/tiny-book/signatures.jpg)

### Glue arrived

When the glue arrived, I plotted everything again and took it from the top. I swapped 3D printed sides for cardboard. Using proper glue was a game changer. I had enough time to apply it before it hardened, and when it dried it stayed flexible. And when it got onto my fingers, it was easy to remove. Everything was much cleaner, and I finally managed to put it all together.

Unfortunately, I was rushing to finish the book, so I didn't take any photos of the process. But here are a few I do have:

![Cardboard sides laid out in the bookbinding canvas](/img/tiny-book/binding.jpg)

If you are an experienced bookbinder and reading this, I'm sorry for the bookbinding crimes I probably committed. I promise I won't use super glue again.

## The finished book

It looked great! It was not perfect (more on that below), but I was super happy with how it turned out. It had a distinct handcrafted feel to it, the images turned out fantastic, and I think I really managed to bring out a personal touch with it.

On the day I finished the book and gave it to my wife, we were both exhausted (our kid was teething, and we had a very rough night), so I thought she would appreciate a little pick-me-up.

![Book opened on the table showing the illustration of the family walking in the forrest](/img/tiny-book/the-book-06.jpg)

When I gave it to her, the first thing she asked was, "Will I cry?". She was brave, but it definitely got her all mushy and made her day. After reading, she carefully put it on the shelf, out of the reach of the little one.

Then I asked her if she ever suspected I was preparing a surprise for her, and she said that she had no idea. But she also said that she thought it was weird that I would often plot something and not brag about it to her afterwards. It was true, I love showing her my work, but luckily she didn't give it too much thought, and I was able to finish my secret project.

![Book opened on the table showing the illustration of Link from The Legend of Zelda](/img/tiny-book/the-book-07.jpg)

### One thing I would like to fix

Like I mentioned, the book isn't perfect. The sides are a bit too large, so the pages seem too deep inside when the book is closed. For the same reason, the end pages turned out to be a bit short, which gives it a weird, uneven look. It is purely aesthetic, but I think it is the only thing keeping it from being perfect.

Lesson learned if I ever end up doing something similar.

## Timeline

It took way longer than it should have—it took me a month and a half to finish it. It took so long because I did it in secrecy, which meant working late in the evenings when my wife and kid were asleep. A bunch of little failures... ehm, I mean *learning opportunities* also prolonged the project. And finally, I had to order multiple things, so I was blocked a few times while I was waiting for four different deliveries.

But the final assembly took me around two and a half hours from start to finish - plotting, cutting, sewing, and bookbinding. Mostly because I had already practiced all of them and defined the exact process.

## Conclusion


It was so much fun. I love projects that span across multiple disciplines. This one touched AI, drawing, plotting, modeling, 3D printing, sewing, and bookbinding. I encountered a lot of little hiccups, but I also learned about all of them. Some of the errors I made could have been avoided if I had been more patient. But I hope you'll cut me some slack - I was super excited and eager to see how it would turn out, and I had limited time windows when I could do it in secrecy. Still, I need to take it as a lesson - being patient will help me save time when doing projects like this one.

The highlight for me was that I could do it without an illustrator. Love it or hate it, AI ended up being a fantastic tool that filled the gap in my skill set, which was crucial for making the book.

I hope you enjoyed this write-up as much as I enjoyed making the book and writing the post. And I do hope I inspired you to try making something of your own. If I did, please reach out on GitHub, I would love to see it.


{{gallery_script()}}
