import { join } from 'node:path';

import BaseTemplate from '@site/templates/base';
import { type Page, brz, dirs } from '@brz';
import Header from '@site/components/header';
import Favorite from '@site/components/favorite';
import ArrowTitle from '@site/components/arrow-title';
import Keyboard from '@site/components/keyboard';
import { formatDate } from '@brz/utils/format-date';
import { getSlug } from '@site/lib/get-slug';
import { Fragment } from 'react/jsx-runtime';

type ArchiveProps = {};

export type BlogPost = Page & {
  pageData: {
    intro?: string;
    slug: string;
    title: string;
    titlePlain: string;
    description: string;
    aliases?: string[];
    date: string;
    tags?: string[];
    category?: string;
    theme?: string;
    favorite?: boolean;
    draft?: boolean;
    minutes: number;
    template?: string;
    image?: string;
  };
};

type CategoryGroup = {
  name: string;
  slug: string;
  posts: BlogPost[];
};

const Archive = async ({ ...props }: ArchiveProps) => {
  let posts = brz.pages.getCollection('blog') as BlogPost[];

  const intro = `All of my ${posts.length} posts, sorted in categories.`;

  // Group posts by category
  const groupedPosts = posts.reduce((acc, post) => {
    // Category is mandatory
    // post.pageData.category[0]

    const category = post.pageData.category?.[0] || 'Uncategorized';
    const categoryGroup = acc.find((group) => group.name === category);

    if (categoryGroup) {
      categoryGroup.posts.push(post);
    } else {
      acc.push({
        name: category,
        slug: getSlug(category),
        posts: [post],
      });
    }

    return acc;
  }, [] as CategoryGroup[]);

  return (
    <BaseTemplate
      {...props}
      outputDir={join(dirs.OUTPUT, 'archive')}
      dirPath={join(dirs.CONTENT, 'archive')}
      pathname="/archive/"
      description={intro}
      title="Archive"
    >
      <Header title="Archive">
        {intro}
        <div className="archive__favorite-text text-sm">
          <Favorite /> Posts marked with the star symbol are my personal
          favorites.
        </div>
      </Header>

      <Keyboard />

      <main className="container page-padding archive">
        {groupedPosts.map((categoryGroup) => {
          return (
            <Fragment key={categoryGroup.name}>
              <div className="archive__category-header">
                <h2
                  className="archive__category-name h2 text-neutral-500"
                  id={categoryGroup.slug}
                >
                  {categoryGroup.name}{' '}
                  <a className="anchor-link" href={`#${categoryGroup.slug}`}>
                    #
                  </a>
                </h2>
                <div className="text-sm text-neutral-500">
                  {categoryGroup.posts.length} posts
                </div>
              </div>
              <ul className="archive__posts">
                {categoryGroup.posts.map((post) => (
                  <li key={post.pathname} className="archive__post">
                    <a href={post.pathname} className={post.pageData.theme}>
                      <div className="text-sm text-neutral-500">
                        {formatDate(post.pageData.date)}
                      </div>
                      <ArrowTitle>
                        {post.pageData.favorite && <Favorite />}{' '}
                        {post.pageData.draft && '[DRAFT] '}
                        {post.pageData.titlePlain}
                      </ArrowTitle>
                    </a>
                  </li>
                ))}
              </ul>
            </Fragment>
          );
        })}
      </main>
    </BaseTemplate>
  );
};

export default Archive;
