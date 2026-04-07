import { brz } from '@brz/runtime';
import type { BlogPost } from '@site/content/blog';
import clsx from 'clsx';

interface YearsStatsProps extends React.HTMLAttributes<HTMLDivElement> {}

type YearGroup = {
  year: number;
  posts: BlogPost[];
};

const StatsSVG = ({
  chartData,
  width,
  height,
  yearWidth,
  postHeight,
  wordRatio,
  maxPosts,
}: {
  chartData: { year: number; posts: number; words: number }[];
  width: number;
  height: number;
  yearWidth: number;
  postHeight: number;
  wordRatio: number;
  maxPosts: number;
}) => {
  const horizontalLines = Array.from(
    { length: Math.ceil(maxPosts / 10) + 1 }, // line is at every 10 posts
    (_, i) => i * 10 * postHeight
  );
  const verticalLines = Array.from(
    { length: chartData.length + 1 },
    (_, i) => i * yearWidth
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="year-stats__chart"
      fill="none"
    >
      <g className="year-stats__grid year-stats__grid--horizontal">
        {horizontalLines.map((y) => (
          <path key={y} d={`M 0 ${y} h ${width}`} />
        ))}
      </g>
      <g className="year-stats__grid year-stats__grid--vertical">
        {verticalLines.map((x, i) => (
          // leaving 1 pixel so it doesn't overlap with the horizontal lines
          <path key={x} d={`M ${x} 0 v ${i === 0 ? height : height - 1}`} />
        ))}
      </g>
      <g className="year-stats__posts blue">
        <path
          className="year-stats__line"
          d={`M ${chartData
            .map((year, index) => {
              const x = yearWidth * index;
              const y = height - year.posts * postHeight;
              return `${x} ${y}`;
            })
            .join(' L ')}`}
        />
        {chartData.map((year, index) => {
          const x = yearWidth * index;
          const y = height - year.posts * postHeight;
          return (
            <path
              key={year.year}
              className="year-stats__point"
              d={`M ${x} ${y} h 0.001`}
            />
          );
        })}
      </g>
      <g className="year-stats__words red">
        <path
          className="year-stats__line"
          d={`M ${chartData
            .map((year, index) => {
              const x = yearWidth * index;
              const y = height - year.words / wordRatio;
              return `${x} ${y}`;
            })
            .join(' L ')}`}
        />
        {chartData.map((year, index) => {
          const x = yearWidth * index;
          const y = height - year.words / wordRatio;
          return (
            <path
              key={year.year}
              className="year-stats__point"
              d={`M ${x} ${y} h 0.001`}
            />
          );
        })}
      </g>
    </svg>
  );
};

const Columns = ({
  chartData,
  maxPosts,
  maxWords,
}: {
  chartData: { year: number; posts: number; words: number }[];
  maxPosts: number;
  maxWords: number;
}) => {
  return (
    <div
      className="year-stats__columns"
      style={{ marginLeft: `${100 / chartData.length / -2}%` }}
    >
      {chartData.map(({ year, posts, words }) => {
        // Calculate y positions (normalized 0-1)
        const y = posts / maxPosts;
        const yWordCount = words / maxWords;

        // Calculate difference and class
        let diff = y - yWordCount;
        let absDiff = Math.abs(diff);
        let wordClass = '';

        let adjustedYWordCount = yWordCount;
        if (absDiff < 0.2) {
          adjustedYWordCount += diff;
          wordClass = diff > 0 ? 'move-down' : 'move-up';
        }

        return (
          <div
            key={year}
            className="year-stats__column"
            style={{ flex: `0 0 ${100 / chartData.length}%` }}
            aria-label={`Year ${year}, ${posts} posts, averaging ${words} words per post`}
          >
            <span
              style={{ top: `${100 - adjustedYWordCount * 100}%` }}
              aria-hidden="true"
              className={`red ${wordClass}`}
            >
              {words}
              <br />
              words
            </span>
            <span style={{ top: `${100 - y * 100}%` }} aria-hidden="true">
              {posts}
              <br />
              posts
            </span>
          </div>
        );
      })}
    </div>
  );
};

const YearsStats = ({
  children,
  className = '',
  ...props
}: YearsStatsProps) => {
  const posts = brz.pages.getCollection('blog') as BlogPost[];

  // Group posts by year
  const groupedPosts = posts
    .toReversed()
    // All posts have post.pageData.date in YYYY-MM-DD format
    .reduce((acc, post) => {
      const year = parseInt(post.pageData.date.split('-')[0] as string, 10);

      const yearGroup = acc.find((group) => group.year === year);

      if (!yearGroup) {
        acc.push({ year, posts: [post] });
      } else {
        yearGroup.posts.push(post);
      }

      return acc;
    }, [] as YearGroup[]);

  let maxWords = 0;
  let maxPosts = 0;

  const chartData = groupedPosts.map(({ year, posts }) => {
    if (posts.length > maxPosts) {
      maxPosts = posts.length;
    }

    const words =
      posts.reduce((acc, post) => acc + post.pageData.words, 0) / posts.length;

    if (words > maxWords) {
      maxWords = words;
    }

    return {
      year: year,
      posts: posts.length,
      words: Math.round(words),
    };
  });

  maxWords = Math.ceil(maxWords / 100) * 100;
  maxPosts = Math.ceil(maxPosts / 10) * 10;

  const postHeight = 10;
  const yearWidth = 100;
  const height = postHeight * maxPosts;
  const width = yearWidth * chartData.length;
  const wordRatio = maxWords / height;

  const leftValues = Array.from(
    { length: Math.ceil(maxPosts / 10) }, // line is at every 10 posts
    (_, i) => (i + 1) * 10
  ).reverse();

  return (
    <div className={clsx('year-stats', className)} {...props}>
      <div className="year-stats__chart-wrapper">
        <StatsSVG
          chartData={chartData}
          width={width}
          height={height}
          yearWidth={yearWidth}
          postHeight={postHeight}
          wordRatio={wordRatio}
          maxPosts={maxPosts}
        />
        <Columns
          chartData={chartData}
          maxPosts={maxPosts}
          maxWords={maxWords}
        />
      </div>
      <div className="year-stats__left">
        {leftValues.map((value) => (
          <div key={value} className="year-stats__left-value">
            {value}
          </div>
        ))}
      </div>

      <div
        className="year-stats__bottom"
        aria-hidden="true"
        style={{
          gridTemplateColumns: `repeat(${chartData.length}, ${
            100 / chartData.length
          }%)`,
        }}
      >
        {chartData.map(({ year }) => (
          <div key={year} className="year-stats__bottom-year">
            <span>{year}</span>
          </div>
        ))}
        <div
          className="year-stats__bottom-year"
          style={{ flexBasis: `${100 / chartData.length}%` }}
        >
          <span>{new Date().getFullYear() + 1}</span>
        </div>
      </div>
    </div>
  );
};

export default YearsStats;
