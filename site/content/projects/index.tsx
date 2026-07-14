import { dirs } from '@brz';
import Img from '@brz/components/img';
import InlineMarkdown from '@brz/components/inline-markdown';
import ArrowTitle from '@site/components/arrow-title';
import Header from '@site/components/header';
import Vertigo from '@site/components/vertigo';
import BaseTemplate from '@site/templates/base';
import { join } from 'node:path';

type Project = {
  name: string;
  description: string;
  link: string;
  image?: string;
  thumb?: React.ReactElement;
};

const Monorail = () => {
  return (
    <svg viewBox="0 0 100 56" fill="none" className="project__image">
      <style>
        {`
        :root {
          --monorail-bg: #fdfaf9;
          --monorail-fg: #191819;
          --monorail-light-gray: #c1c1c9;
          --monorail-gray: #515159;
          --monorail-text-gray: #818189;

          --monorail-red: #d9174b;
          --monorail-orange: #f27d00;
          --monorail-yellow: #e3aa00;
          --monorail-green: #00b96b;
          --monorail-blue: #0085fb;
          --monorail-purple: #3a17c6;

          --monorail-current-time: #940757;
          --monorail-swatch-outline: rgb(0 0 0 / 0.1);
        }

        /*
        @media (prefers-color-scheme: dark) {
          :root {
            --monorail-bg: #191819;
            --monorail-fg: #fdfaf9;
            --monorail-light-gray: #313139;
            --monorail-gray: #b1b1b9;
            --monorail-text-gray: #818189;

            --monorail-red: #ff4073;
            --monorail-orange: #ff9320;
            --monorail-yellow: #ffd700;
            --monorail-green: #00ff93;
            --monorail-blue: #3ea5ff;
            --monorail-purple: #8b6eff;

            --monorail-current-time: #fd799c;
            --monorail-swatch-outline: rgb(255 255 255 / 0.1);
          }
        }
        */
    `}
      </style>
      <g className="monorail-fills" style={{ opacity: 0.1 }}>
        <path
          fill="var(--monorail-green)"
          d="M 0.0 30.0 C 4.2 30.0 5.8 53.5 10.0 53.5 C 19.8 53.5 23.5 27.0 33.3 27.0 C 61.3 27.0 72.0 30.0 100.0 30.0 V 30 H 0.0 Z"
        />
        <path
          fill="var(--monorail-blue)"
          d="M 0.0 30.0 C 4.2 30.0 5.8 30.0 10.0 30.0 C 19.8 30.0 23.5 54.0 33.3 54.0 C 61.3 54.0 72.0 30.0 100.0 30.0 V 30 H 0.0 Z"
        />
        <path
          fill="var(--monorail-purple)"
          d="M 0.0 0.0 C 28.0 0.0 38.6 15.0 66.6 15.0 C 80.6 15.0 86.0 0.0 100.0 0.0 V 30 H 0.0 Z"
        />
        <path
          fill="var(--monorail-yellow)"
          d="M 0.0 28.4 C 4.2 28.4 5.8 20.2 10.0 20.2 C 26.8 20.2 33.2 6.0 50.0 6.0 C 71.0 6.0 79.0 28.4 100.0 28.4 V 30 H 0.0 Z"
        />
      </g>
      <polyline
        className="monorail-zero-line"
        vectorEffect="non-scaling-stroke"
        points="0,30 100,30"
      />
      <g className="monorail-lines">
        <path
          vectorEffect="non-scaling-stroke"
          stroke="var(--monorail-green)"
          d="M 0.0 30.0 C 4.2 30.0 5.8 53.5 10.0 53.5 C 19.8 53.5 23.5 27.0 33.3 27.0 C 61.3 27.0 72.0 30.0 100.0 30.0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          stroke="var(--monorail-blue)"
          d="M 0.0 30.0 C 4.2 30.0 5.8 30.0 10.0 30.0 C 19.8 30.0 23.5 54.0 33.3 54.0 C 61.3 54.0 72.0 30.0 100.0 30.0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          stroke="var(--monorail-purple)"
          d="M 0.0 0.0 C 28.0 0.0 38.6 15.0 66.6 15.0 C 80.6 15.0 86.0 0.0 100.0 0.0"
        />
        <path
          vectorEffect="non-scaling-stroke"
          stroke="var(--monorail-yellow)"
          d="M 0.0 28.4 C 4.2 28.4 5.8 20.2 10.0 20.2 C 26.8 20.2 33.2 6.0 50.0 6.0 C 71.0 6.0 79.0 28.4 100.0 28.4"
        />
      </g>
    </svg>
  );
};

export const projects: {
  title: string;
  projects: Project[];
}[] = [
  {
    title: 'Creative coding',
    projects: [
      {
        description:
          'My favorite hobby. I use code to create drawings, and a robot to plot them on paper. Check the art section of this website.',
        image: './art.jpg',
        link: '/art',
        name: 'Generative Art',
      },
      {
        name: 'Creative Coding Amsterdam',
        description:
          'Since early 2024, David, Sinan and myself organize monthly meetups for anyone fascinated by creative coding.',
        link: 'https://cca.codes/',
        thumb: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -10 182 70"
            className="project__image"
          >
            <g
              fill="none"
              stroke="var(--text)"
              strokeWidth="12"
              strokeLinecap="round"
            >
              <path d="M 46.97 13.029 A 24 24 1 1 0 46.97 46.97" />
              <path d="M 97.97 13.029 A 24 24 1 1 0 97.97 46.97" />
              <path
                d="M 156 29.96 A 24 24 1 1 0 156 30 v 24"
                stroke="#B52D2C"
              />
            </g>
          </svg>
        ),
      },
      {
        description:
          "Procedural space invaders generator for the CCA's code challenge. Made for fun and galatic domination.",
        image: './invader.png',
        link: 'https://muffinman.io/invaders/',
        name: 'Space Invaders Generator',
      },
      {
        description:
          'Glitchy BARD is an experiment in robot poetry. It uses a small language model to generate crappy poems for fun and profit (I lied, there is no profit).',
        link: 'https://muffinman.io/bard/',
        name: 'BARD',
        thumb: (
          <Img
            src="./bard.png"
            alt="BARD"
            className="project__image pixel-art"
            outputDir={join(dirs.OUTPUT, 'projects')}
            pageDir={join(dirs.CONTENT, 'projects')}
          />
        ),
      },
      {
        description:
          'A micro creative coding playground where you can create and share animations through code.',
        image: './pulsar.gif',
        link: 'https://muffinman.io/pulsar/',
        name: 'Pulsar',
      },
      {
        description:
          'A tool that converts photos into vectors using two unique "shaders" - circular dot grid and variable-width spiral.',
        link: 'https://muffinman.io/vertigo/',
        name: 'Vertigo',
        thumb: <Vertigo />,
      },
      {
        description:
          'An interactive article on how to transform any SVG path into a vector rope drawing.',
        image: './rope.png',
        link: '/blog/draw-svg-rope-using-javascript/',
        name: 'Draw SVG rope using JavaScript',
      },
      {
        description:
          'A custom ray marching 3D renderer that mimics hand hatching. It is using SDFs for modeling and outputs vector files. Not published yet.',
        image: './rayven.png',
        link: 'https://muffinman.io/blog/sneak-peek-of-rayven/',
        name: 'Rayven',
      },
      {
        description:
          'A tool I used to create a series of pen plotted drawings of the moon. It uses Poisson disk sampling, noise and a reference photo to create the effect.',
        image: './moon-phases.png',
        link: 'https://muffinman.io/moon/',
        name: 'Moon Phases',
      },
      {
        description:
          'One of my earliest generative projects, based on metaballs, organic-looking n-dimensional objects.',
        image: './metaballs.png',
        link: 'https://muffinman.io/metaballs/',
        name: 'Metaballs',
      },
      {
        description:
          "Unfinished port of Michael Fogleman's `ln` vector 3d engine to TypeScript.",
        image: './linea.jpg',
        link: 'https://muffinman.io/linea',
        name: 'Linea',
      },
      {
        description:
          'My first remotely presentable generative project, utilizing a vector field to draw vibrant, neon lines.',
        image: './neon.png',
        link: 'https://neon.muffinman.io/#/false/15/6/60/55/140/5/2aybxq8tmqv/crdmt2f7nn8/i5g7i80cigf',
        name: 'Neon',
      },
    ],
  },
  {
    title: 'Game Development',
    projects: [
      {
        description:
          'To be released on Steam and on an arcade cabinet. It broadens the concept I started in FTF. Combination of shoot-em-up and deck building. Made with Kaplay.',
        image: './sdx.png',
        link: 'https://muffinman-io.itch.io/spacedeck-x',
        name: 'SpaceDeck X',
      },
      {
        description:
          'My first game. A simple shoot-em-up prototype with a twist at the end. Made in Pico-8.',
        image: './ftf.png',
        link: 'https://muffinman-io.itch.io/ftf',
        name: 'FTF',
      },
    ],
  },
  {
    title: 'Hardware',
    projects: [
      {
        description:
          'Physical pixel art frame using LED matrix and ESP32, inspired by Game Frame.',
        image: './retro-frame.png',
        link: 'https://github.com/stanko/retro-frame',
        name: 'Retro Frame',
      },
    ],
  },
  {
    title: 'Libraries and tools',
    projects: [
      {
        description: 'A sane, vanilla modal using the native <dialog> element.',
        image: './nano-modal.png',
        link: 'https://muffinman.io/nano-modal/',
        name: 'Nano Modal',
      },
      {
        description:
          'Minimal library for controlling parameters, designed for algorithmic art.',
        image: './ctrls.png',
        link: 'https://muffinman.io/ctrls/',
        name: 'Ctrls',
      },
      {
        description:
          'Monorail turns any CSS keyframe animation into an interactive graph. ',
        thumb: <Monorail />,
        link: 'https://muffinman.io/monorail/',
        name: 'Monorail',
      },
      {
        description:
          'Tailor is a developer tool that simplifies inspecting spacings on websites. Available as a browser extension and as a library.',
        image: './tailor.png',
        link: 'https://muffinman.io/tailor/',
        name: 'Tailor',
      },
      {
        description:
          'Lightweight React component for animating height using CSS transitions. By far, it is my most popular library on npm.',
        link: 'https://muffinman.io/react-animate-height/',
        name: 'React Animate Height',
        thumb: (
          <div className="rah">
            <div className="rah-item"></div>
            <div className="rah-item"></div>
            <div className="rah-item"></div>
          </div>
        ),
      },
      {
        description:
          'Lightweight yet robust parallax library for React. It animates numerical CSS properties and colors.',
        link: 'https://muffinman.io/react-plx/',
        name: 'React Plx',
      },
      {
        description:
          'Lightweight *scroll to* function with a powerful API. Scrolls window or any other DOM element.',
        link: 'https://muffinman.io/animated-scroll-to/',
        name: 'Animated scroll to',
      },
      {
        description:
          'React application boilerplate that gained popularity within the community before React Create App became a thing. The project was born from my blog post series on setting up a React project from scratch.',
        image: './marvin.svg',
        link: 'https://github.com/stanko/marvin/',
        name: 'Marvin (deprecated)',
      },
      {
        description:
          'Minimal project setup for building and releasing npm packages.',
        image: './keen.png',
        link: 'https://github.com/Stanko/keen/',
        name: 'Keen',
      },
      {
        description:
          'Small CSS framework I created for my personal needs, a decade ago. Designed as a lightweight alternative to frameworks like Bootstrap. I started working on v2 recently, but I have not set a release date.',
        link: 'https://muffinman.io/skyblue/',
        name: 'SkyBlue',
      },
    ],
  },
  {
    title: 'Everything else',
    projects: [
      {
        description:
          'A tiny, hand-crafted book I made my wife using AI, a pen plotter and 3D printer.',
        image: './tiny-book.png',
        link: '/blog/the-tiny-book-of-great-joys/',
        name: 'The Tiny Book of Great Joys',
      },
      {
        description:
          'Very personal project - a web adaptation of the book **Letters From Sarajevo**. Our father was stuck in Sarajevo during the war and still sent us funny, positive letters filled with drawings.',
        image: './letters.png',
        link: 'https://lettersfromsarajevo.com/',
        name: 'Letters from Sarajevo',
      },
      {
        description:
          "Small code experiments made for Work&Co's weekly code challenge.",
        image: './code-challenge.png',
        link: 'https://muffinman.io/weekly-code-challenge/',
        name: 'Weekly Code Challenge',
      },
      {
        description:
          "A collection of parametric 3D models I've made in JavaScript for personal projects.",
        image: './3d-models.png',
        link: 'https://muffinman.io/3d-models/',
        name: '3D Models',
      },
    ],
  },
];

const Projects = () => {
  return (
    <BaseTemplate
      outputDir={join(dirs.OUTPUT, 'projects')}
      dirPath={join(dirs.CONTENT, 'projects')}
      pathname="/projects/"
      description="List of selected projects I created."
      title="Projects"
      theme="purple"
    >
      <Header title="Projects">
        List of selected projects I created. Hopefully I'll find time to write
        more about some of them.
      </Header>

      <main className="container page-padding">
        {projects.map((group) => {
          return (
            <div key={group.title} className="projects__group">
              <h2 className="projects__group-title h3">{group.title}</h2>

              <div className="projects__group-grid">
                {group.projects.map((project) => {
                  let thumb = (
                    <div className="project__initial h5">
                      {project.name.slice(0, 1)}
                    </div>
                  );

                  if (project.thumb) {
                    thumb = project.thumb;
                  } else if (project.image) {
                    thumb = (
                      <Img
                        src={project.image}
                        alt={project.name}
                        className="project__image"
                        outputDir={join(dirs.OUTPUT, 'projects')}
                        pageDir={join(dirs.CONTENT, 'projects')}
                      />
                    );
                  }

                  return (
                    <a
                      key={project.name}
                      href={project.link}
                      className="project"
                    >
                      <div className="project__left">{thumb}</div>
                      <div>
                        <ArrowTitle className="project__name h5">
                          {project.name}
                        </ArrowTitle>
                        <p className="text-sm text-light">
                          <InlineMarkdown content={project.description} />
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </BaseTemplate>
  );
};

export default Projects;
