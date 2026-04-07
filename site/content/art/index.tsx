import { dirs, type Page } from '@brz';
import { brz } from '@brz/runtime';
import Sidenote from '@brz/components/sidenote';
import CirclePatternSymbol from '@site/components/circle-pattern-symbol';
import ArtCard from '@site/components/art-card';
import Header from '@site/components/header';
import BaseTemplate from '@site/templates/base';
import { join } from 'node:path';

export type ArtPage = Page & {
  pageData: {
    slug: string;
    title: string;
    titlePlain: string;
    description: string;
    aliases?: string[];
    date: string;
    image: string;
    theme?: string;
    draft?: boolean;
    wide?: boolean;
    // TODO add pens, paper, size...
  };
};

const Art = async () => {
  let art = brz.pages.getCollection('art') as ArtPage[];

  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT, 'art')}
      dirPath={join(dirs.CONTENT, 'art')}
      pathname="/art/"
      description="I use code and algorithms to make drawings, and a robot to draw them."
      title="Procedural Art"
      theme="red"
    >
      <Header title="<span>Procedural</span> Art">
        I use code and algorithms to make drawings, and a robot to draw them.
      </Header>

      <main className="art page-padding">
        <article className="article">
          <p>
            In 2020 I started playing with generative art and I immediately fell
            in love with it. Soon after, I got a pen plotter. The plotter allows
            me to bring these digital drawings to the physical world.{' '}
            <Sidenote note="If not stated otherwise">
              All of the drawings below
            </Sidenote>{' '}
            are real, physical, pen plotted drawings on paper.
          </p>

          <p>
            I'm very proud of my drawings, so I really hope you'll like them.
            For more experiments and work in progress check out my Instagram{' '}
            <a href="https://www.instagram.com/muffinman_io/">profile</a>.
          </p>
        </article>

        <div className="container art__items">
          {art.map((page) => {
            return (
              <ArtCard
                key={page.pathname}
                page={page}
                outputDir={join(dirs.OUTPUT, 'art')}
              />
            );
          })}
        </div>
      </main>

      <CirclePatternSymbol />
    </BaseTemplate>
  );
};

export default Art;
