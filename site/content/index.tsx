import { join } from 'node:path';
import { brz, dirs } from '@brz';
import BaseTemplate from '@site/templates/base';
import type { BlogPost } from './blog';
import type { ArtPage } from './art';
import Header from '@site/components/header';
import ArtCard from '@site/components/art-card';
import Arrow from '@site/components/arrow';
import PostCard from '@site/components/post-card';
import CirclePatternSymbol from '@site/components/circle-pattern-symbol';

const Index = () => {
  let allPosts = brz.pages
    .getCollection('blog')
    // Removes unlisted posts from the home page
    .filter((post) => !post.pageData.unlisted)
    .slice(0, 6) as BlogPost[];
  let posts = allPosts.slice(0, 6) as BlogPost[];
  const latestPostHasImage = !!allPosts[0]?.pageData.image;

  if (latestPostHasImage) {
    posts = posts.slice(1, 5);
  }

  const art = brz.pages.getCollection('art').slice(0, 6) as ArtPage[];

  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT)}
      dirPath={join(dirs.CONTENT)}
      pathname="/"
      description="Hello, I'm Stanko, a software engineer in Amsterdam, making digital products and generative art."
      title="Muffin Man · FrontEnd & Creative Coding"
    >
      <Header
        className="home__header"
        title="FrontEnd & <span>Creative</span> Coding"
      >
        Hello, I'm Stanko, a software engineer in Amsterdam, making digital
        products and generative art.
      </Header>

      <main className="container home__content">
        <h2 className="home__title">
          <a href="/blog/">
            Blog
            <Arrow />
          </a>
        </h2>

        {latestPostHasImage && (
          <PostCard
            post={allPosts[0] as BlogPost}
            outputDir={dirs.OUTPUT}
            latest
            image
          />
        )}

        <div className="home__posts">
          {posts.map((post, i) => {
            return (
              <PostCard
                latest={!latestPostHasImage && i === 0}
                key={post.pathname}
                post={post}
                outputDir={dirs.OUTPUT}
              />
            );
          })}
        </div>

        <a href="/blog/" className="btn">
          Browse all posts
        </a>

        <h2 className="home__title home__title--art">
          <a href="/art/">
            Art
            <Arrow />
          </a>
        </h2>

        <div className="art__items">
          {art.map((page) => {
            return (
              <ArtCard
                key={page.pathname}
                page={page}
                outputDir={dirs.OUTPUT}
              />
            );
          })}
        </div>

        <a href="/art/" className="btn home__art-btn">
          See all drawings
        </a>
      </main>

      <CirclePatternSymbol />
    </BaseTemplate>
  );
};

export default Index;
