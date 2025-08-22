import { brz, dirs } from '@brz';
import Arrow from '@site/components/arrow';
import CirclePatternSymbol from '@site/components/circle-pattern-symbol';
import Header from '@site/components/header';
import PostCard from '@site/components/post-card';
import BaseTemplate from '@site/templates/base';
import clsx from 'clsx';
import { join } from 'node:path';
import type { BlogPost } from './blog';

const NotFound = () => {
  const postPathnames = [
    '/blog/draw-svg-rope-using-javascript/',
    '/blog/invaders/',
    '/blog/the-tiny-book-of-great-joys/',
  ];
  let posts = brz.pages
    .getCollection('blog')
    // Removes unlisted posts from the home page
    .filter((post) => !post.pageData.unlisted)
    .filter((post) => postPathnames.includes(post.pathname));

  const links = [
    { href: '/art/', label: 'Art', theme: 'red', main: true },
    { href: '/blog/', label: 'Blog', theme: 'blue', main: true },
    { href: '/projects/', label: 'Projects', theme: 'purple', main: true },
  ];

  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT)}
      dirPath={join(dirs.CONTENT)}
      pathname=""
      description="The page you're looking for doesn't exist."
      title="Not Found"
    >
      <Header title="Not Found">
        Unfortunately, the page you're looking for doesn't exist.
      </Header>

      <main className="container not-found__content">
        <p>Feel free to explore around:</p>
        <div className="not-found__links">
          {links.map((link) => {
            return (
              <a
                key={link.href}
                href={link.href}
                className={clsx('not-found__link', 'h3', link.theme)}
              >
                {link.label}
                <Arrow className="menu__link-arrow" />
              </a>
            );
          })}
        </div>
        <div className="not-found__404">
          <span className="not-found__first-four">4</span>
          <span className="not-found__zero">0</span>
          <span className="not-found__second_four">4</span>
        </div>
        <p>Or read some of my favorite posts:</p>
        <div className="not-found__posts">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.pathname}
                post={post as BlogPost}
                outputDir={dirs.OUTPUT}
                image
              />
            );
          })}
        </div>
      </main>

      <CirclePatternSymbol />
    </BaseTemplate>
  );
};

export default NotFound;
