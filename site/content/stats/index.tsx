import { dirs } from '@brz';
import { brz } from '@brz/runtime';
import Header from '@site/components/header';
import BaseTemplate from '@site/templates/base';
import { join } from 'node:path';
import type { BlogPost } from '../blog';
import { getYearsAndMonthsFromBlogStart } from '@site/lib/get-blog-stats';
import ArrowTitle from '@site/components/arrow-title';
import YearsStats from '@site/components/year-stats';

const getStats = () => {
  const posts = brz.pages.getCollection('blog') as BlogPost[];

  const time = getYearsAndMonthsFromBlogStart();

  const stats = [];

  let months = ` and ${time.months} months`;

  if (time.months === 1) {
    months = `and one month`;
  } else if (time.months === 0) {
    months = '';
  }

  stats.push({
    label: 'Writing for',
    value: `${time.years} years ${months}`,
  });

  stats.push({
    label: 'Posts written',
    value: posts.length,
  });

  stats.push({
    label: 'Total words written',
    value: posts.reduce((acc, post) => acc + post.pageData.words, 0),
  });

  stats.push({
    label: 'Average words per post',
    value: Math.round(
      posts.reduce((acc, post) => acc + post.pageData.words, 0) / posts.length
    ),
  });

  const totalMinutes = posts.reduce(
    (acc, post) => acc + post.pageData.minutes,
    0
  );
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  let readingTimeMinutes = `${minutes} minutes`;
  if (minutes === 1) {
    months = `and one minute`;
  } else if (minutes === 0) {
    months = '';
  }

  stats.push({
    label: 'Total estimated reading time',
    value: `${hours} hours ${readingTimeMinutes}`,
  });

  const longestPost = posts.reduce((acc, post) => {
    if (post.pageData.words > acc.pageData.words) {
      return post;
    }
    return acc;
  });

  stats.push({
    label: 'Longest post',
    value: (
      <a href={longestPost.pathname} className={longestPost.pageData.theme}>
        <ArrowTitle>{longestPost.pageData.titlePlain}</ArrowTitle>
        <span className="text-sm text-light">
          {longestPost.pageData.words} words
        </span>
      </a>
    ),
  });

  const shortestPost = posts.reduce((acc, post) => {
    if (post.pageData.words < acc.pageData.words) {
      return post;
    }
    return acc;
  });

  stats.push({
    label: 'Shortest post',
    value: (
      <a href={shortestPost.pathname} className={shortestPost.pageData.theme}>
        <ArrowTitle>{shortestPost.pageData.titlePlain}</ArrowTitle>
        <span className="text-sm text-light">
          {shortestPost.pageData.words} words
        </span>
      </a>
    ),
  });

  stats.push({
    label: 'Number of drawings',
    value: brz.pages.getCollection('art').length,
  });

  stats.push({
    label: 'Redesigns',
    value: (
      <div>
        4<div className="text-sm text-light">That I can remember</div>
      </div>
    ),
  });

  return stats;
};

const Stats = () => {
  const stats = getStats();

  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT, 'stats')}
      dirPath={join(dirs.CONTENT, 'stats')}
      pathname="/stats/"
      description="I thought it would fun to show some numbers for this website."
      title="Stats"
    >
      <Header title="Statistics">
        I thought it would fun to show some numbers for this website.
      </Header>

      <main className="stats page-padding">
        <div className="article">
          <div className="stats__table">
            {stats.map((stat) => {
              return (
                <div className="stats__row" key={stat.label}>
                  <div>
                    <b>{stat.label}:</b>
                  </div>
                  <div className="stats__row-value">{stat.value}</div>
                </div>
              );
            })}
          </div>

          <h2 className="text-light">Yearly Stats</h2>

          <p>
            The blue line shows the number of posts I published each year. The
            red line represents the average number of words in each post.
          </p>
          <YearsStats />
        </div>
      </main>
    </BaseTemplate>
  );
};

export default Stats;
