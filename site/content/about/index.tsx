import { dirs } from '@brz';
import Img from '@brz/components/img';
import Sidenote from '@brz/components/sidenote';
import Header from '@site/components/header';
import BaseTemplate from '@site/templates/base';
import { join } from 'node:path';

const About = () => {
  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT, 'about')}
      dirPath={join(dirs.CONTENT, 'about')}
      pathname="/about/"
      description="My name is Stanko and here you'll find my ramblings, rants, projects and generative art."
      title="About me"
      image="./about.png"
    >
      <Header title="About">
        Welcome to my little website. My name is Stanko and here you'll find my
        ramblings, projects and generative art.
      </Header>

      <main>
        <div className="article about__content page-padding">
          <div className="about__intro">
            <p>
              I'm a programmer, but I like to think of myself as a maker. I
              tremendously enjoy software development, experimenting with small
              projects and playing with random technologies. That is where this
              blog comes from.
            </p>
            <Img
              alt="My pixel art portrait"
              className="about__myself pixel-art"
              src="./s2.png"
              outputDir={join(dirs.OUTPUT, 'about')}
              pageDir={import.meta.dirname}
            />
            <p>
              I'm mostly a maker of a digital stuff, but I love bringing digital
              into the physical world. That includes pen plotting my generative
              art, tinkering with hobby electronics and crafts.
            </p>

            <p>
              This is my longest living website/blog. It has been up since 2016
              and I'm pretty proud how it evolved. I also fool around on{' '}
              <a href="http://codepen.io/stanko/">CodePen</a> and maintain a few{' '}
              <a href="https://www.npmjs.com/~stanko">npm</a> packages. You can
              find me on <a href="https://github.com/Stanko">GitHub</a> or{' '}
              <a href="https://linkedin.com/in/stankotadic">LinkedIn</a>.
            </p>
          </div>

          <h2 id="work">Work</h2>
          <p>
            I'm a Group Technology Director at{' '}
            <a href="https://work.co">Work &amp; Co</a>. Work &amp; Co is a
            design and technology company, and we help our clients build digital
            products. I have personally lead the development track on multiple
            large scale projects. Mailchimp, TED, IKEA and IBM are just a few
            names on my personal client list.
          </p>
          <p>
            Prior to Work &amp; Co, I was a CTO at Null Object, small technology
            agency which I co-founded. We got acqui-hired and became Work &amp;
            Co's Belgrade office in 2016.
          </p>
          <h2 id="other">Other</h2>
          <p>
            My other interests are music,{' '}
            <Sidenote
              note="Among other things I
              made my own electric guitar."
            >
              crafts
            </Sidenote>{' '}
            and gaming. Old DOS games are what{' '}
            <a href="/blog/my-programming-story/"> got me into the tech</a> in
            the first place. I love indie games and I'm super happy that so many
            people are making them today. I'm also a terrible guitar player.
          </p>
          <p>
            Nick Muffin Man comes from{' '}
            <a href="https://www.youtube.com/watch?v=WMwY49vTBk0">
              Frank Zappa's song
            </a>{' '}
            of the same name.
          </p>
        </div>
      </main>
    </BaseTemplate>
  );
};

export default About;
