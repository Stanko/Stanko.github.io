import { join } from 'node:path';

import BaseTemplate from '@site/templates/base';
import { type Page, brz, dirs, IS_PROD } from '@brz';
import Header from '@site/components/header';
import Favorite from '@site/components/favorite';
import ArrowTitle from '@site/components/arrow-title';
import Keyboard from '@site/components/keyboard';
import { getYearsFromTheBlogStart } from '@site/lib/get-blog-stats';

type BlogIndexProps = {};

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
    words: number;
    template?: string;
    image?: string;
  };
};

type MonthGroup = {
  month: string;
  posts: BlogPost[];
};

type YearGroup = {
  year: number;
  months: MonthGroup[];
};

const BlogIndex = async ({ ...props }: BlogIndexProps) => {
  const posts = brz.pages
    .getCollection('blog')
    // Removes unlisted posts from the blog index page
    .filter((post) => !post.pageData.unlisted) as BlogPost[];

  const writingFor = getYearsFromTheBlogStart();

  // Group posts by year and month
  const groupedPosts = posts
    // All posts have post.data.date in YYYY-MM-DD format
    .reduce((acc, post) => {
      const date = new Date(post.pageData.date);
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });

      const yearGroup = acc.find((group) => group.year === year);

      if (!yearGroup) {
        acc.push({ year, months: [{ month, posts: [post] }] });
      } else {
        const monthGroup = yearGroup.months.find((m) => m.month === month);

        if (!monthGroup) {
          yearGroup.months.push({ month, posts: [post] });
        } else {
          monthGroup.posts.push(post);
        }
      }

      return acc;
    }, [] as YearGroup[]);

  const description = `All ${posts.length} posts I've written over the last ${writingFor} years, in chronological order.`;

  return (
    <BaseTemplate
      {...props}
      outputDir={join(dirs.OUTPUT, 'blog')}
      dirPath={join(dirs.CONTENT, 'blog')}
      pathname="/blog/"
      description={description}
      title="Blog"
    >
      <Header title="Blog">
        {description}
        <div className="blog__favorite-text text-sm">
          <Favorite /> Posts marked with the star symbol are my personal
          favorites.
        </div>
      </Header>

      <Keyboard />

      <main className="container blog__list">
        <label className="blog__favorites-label">
          <input type="checkbox" className="blog__favorites-checkbox" />
          <Favorite className="blog__favorites-icon" />
          Show favorite posts only
        </label>

        {groupedPosts.map((yearGroup) => {
          return (
            <div key={yearGroup.year} className="blog__year">
              <h2 className="blog__year-title h3">{yearGroup.year}</h2>
              {yearGroup.months.map((monthGroup) => {
                return (
                  <div className="blog__month" key={monthGroup.month}>
                    <h3 className="blog__month-title">{monthGroup.month}</h3>
                    <ul className="blog__month-posts">
                      {monthGroup.posts.map((post) => (
                        <li className="blog__month-post" key={post.pathname}>
                          <a
                            href={post.pathname}
                            className={post.pageData.theme}
                          >
                            <ArrowTitle>
                              {post.pageData.favorite && <Favorite />}{' '}
                              {post.pageData.draft && '[DRAFT] '}
                              {post.pageData.titlePlain}
                            </ArrowTitle>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </main>
    </BaseTemplate>
  );
};

export default BlogIndex;
