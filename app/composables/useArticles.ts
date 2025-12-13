import { ref } from 'vue'

export function useArticles() {
  const articles = ref([
    {
      id: 1,
      title: 'How to Improve Your Coding Skills in 30 Days',
      excerpt: 'Practical strategies and exercises to boost your programming abilities within a month.',
      image: '/images/blog/1.png',
      category: 'development',
      date: '2023-05-10',
      readTime: 8,
      slug: 'improve-coding-skills',
      author: { name: 'Sarah Johnson', avatar: '/images/instructors/sarah-johnson.jpg' }
    },
    {
      id: 2,
      title: 'The Importance of User Experience in Web Design',
      excerpt: 'Understanding how UX design impacts user satisfaction and business success.',
      image: '/images/blog/2.png',
      category: 'design',
      date: '2023-05-08',
      readTime: 6,
      slug: 'ux-importance',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 3,
      title: 'Top 10 Programming Languages to Learn in 2023',
      excerpt: 'A comprehensive guide to the most in-demand programming languages for the year.',
      image: '/images/blog/3.png',
      category: 'development',
      date: '2023-05-05',
      readTime: 10,
      slug: 'top-programming-languages',
      author: { name: 'John Doe', avatar: '/images/instructors/john-doe.jpg' }
    },
    {
      id: 4,
      title: 'Building Responsive Layouts with CSS Grid',
      excerpt: 'Master CSS Grid to create flexible and responsive web layouts with ease.',
      image: '/images/blog/4.png',
      category: 'development',
      date: '2023-05-02',
      readTime: 7,
      slug: 'css-grid-tutorial',
      author: { name: 'David Wilson', avatar: '/images/instructors/david-wilson.jpg' }
    },
    {
      id: 5,
      title: 'Career Tips for Aspiring Web Developers',
      excerpt: 'Advice on building a successful career in web development.',
      image: '/images/blog/5.png',
      category: 'career',
      date: '2023-04-28',
      readTime: 9,
      slug: 'developer-career-tips',
      author: { name: 'Emily Davis', avatar: '/images/instructors/emily-davis.jpg' }
    },
    {
      id: 6,
      title: 'Color Theory Basics for Web Designers',
      excerpt: 'Understanding color theory principles to create harmonious and effective designs.',
      image: '/images/blog/6.png',
      category: 'design',
      date: '2023-04-25',
      readTime: 6,
      slug: 'color-theory-web-design',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 7,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'Learn how TypeScript can improve your JavaScript code with static typing.',
      image: '/images/blog/7.png',
      category: 'development',
      date: '2023-04-22',
      readTime: 8,
      slug: 'typescript-introduction',
      author: { name: 'John Doe', avatar: '/images/instructors/john-doe.jpg' }
    },
    {
      id: 8,
      title: 'Effective JavaScript Debugging Techniques',
      excerpt: 'Practical methods to debug complex issues efficiently in modern apps.',
      image: '/images/blog/2.png',
      category: 'development',
      date: '2023-04-20',
      readTime: 7,
      slug: 'js-debugging-techniques',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 9,
      title: 'Designing Accessible Web Interfaces',
      excerpt: 'Key accessibility principles to make your UI usable for everyone.',
      image: '/images/blog/3.png',
      category: 'design',
      date: '2023-04-18',
      readTime: 6,
      slug: 'accessible-web-interfaces',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 10,
      title: 'Building a Personal Portfolio That Stands Out',
      excerpt: 'Showcase your work and skills effectively to attract opportunities.',
      image: '/images/blog/4.png',
      category: 'career',
      date: '2023-04-15',
      readTime: 9,
      slug: 'standout-portfolio',
      author: { name: 'Emily Davis', avatar: '/images/instructors/emily-davis.jpg' }
    },
    {
      id: 11,
      title: 'Optimizing Frontend Performance in 2023',
      excerpt: 'Strategies to reduce bundle size and improve runtime performance.',
      image: '/images/blog/5.png',
      category: 'development',
      date: '2023-04-12',
      readTime: 8,
      slug: 'optimize-frontend-performance-2023',
      author: { name: 'John Doe', avatar: '/images/instructors/john-doe.jpg' }
    },
    {
      id: 12,
      title: 'Figma to Code: Practical Tips',
      excerpt: 'Bridging design and development with consistent handoff practices.',
      image: '/images/blog/6.png',
      category: 'design',
      date: '2023-04-10',
      readTime: 5,
      slug: 'figma-to-code-tips',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 13,
      title: 'Networking Strategies for Developers',
      excerpt: 'Build meaningful connections and grow your career in tech.',
      image: '/images/blog/7.png',
      category: 'career',
      date: '2023-04-08',
      readTime: 7,
      slug: 'networking-strategies-developers',
      author: { name: 'Emily Davis', avatar: '/images/instructors/emily-davis.jpg' }
    },
    {
      id: 14,
      title: 'Modern CSS: Flexbox vs Grid',
      excerpt: 'When to choose Flexbox or Grid for layout problems.',
      image: '/images/blog/1.png',
      category: 'development',
      date: '2023-04-06',
      readTime: 6,
      slug: 'flexbox-vs-grid',
      author: { name: 'David Wilson', avatar: '/images/instructors/david-wilson.jpg' }
    },
    {
      id: 15,
      title: 'Color Palettes that Convert',
      excerpt: 'Use color psychology to improve design impact and conversions.',
      image: '/images/blog/2.png',
      category: 'design',
      date: '2023-04-04',
      readTime: 6,
      slug: 'color-palettes-that-convert',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 16,
      title: 'Preparing for Tech Interviews',
      excerpt: 'A structured approach to algorithms, systems and behavioral prep.',
      image: '/images/blog/3.png',
      category: 'career',
      date: '2023-04-02',
      readTime: 10,
      slug: 'prepare-tech-interviews',
      author: { name: 'Emily Davis', avatar: '/images/instructors/emily-davis.jpg' }
    },
    {
      id: 17,
      title: 'TypeScript Patterns for Large Apps',
      excerpt: 'Scalable typing, module design, and code organization patterns.',
      image: '/images/blog/4.png',
      category: 'development',
      date: '2023-03-30',
      readTime: 9,
      slug: 'typescript-patterns-large-apps',
      author: { name: 'John Doe', avatar: '/images/instructors/john-doe.jpg' }
    },
    {
      id: 18,
      title: 'UI Microinteractions that Delight',
      excerpt: 'Enhance perceived quality with subtle and meaningful interactions.',
      image: '/images/blog/5.png',
      category: 'design',
      date: '2023-03-28',
      readTime: 5,
      slug: 'ui-microinteractions-delight',
      author: { name: 'Jane Smith', avatar: '/images/instructors/jane-smith.jpg' }
    },
    {
      id: 19,
      title: 'Career Roadmap: Junior to Senior',
      excerpt: 'Milestones and skillsets to progress in software engineering.',
      image: '/images/blog/6.png',
      category: 'career',
      date: '2023-03-26',
      readTime: 8,
      slug: 'career-roadmap-junior-to-senior',
      author: { name: 'Emily Davis', avatar: '/images/instructors/emily-davis.jpg' }
    },
    {
      id: 20,
      title: 'Testing Strategies with Vitest',
      excerpt: 'Unit, integration and component testing patterns with Vitest.',
      image: '/images/blog/7.png',
      category: 'development',
      date: '2023-03-24',
      readTime: 7,
      slug: 'testing-strategies-vitest',
      author: { name: 'John Doe', avatar: '/images/instructors/john-doe.jpg' }
    }
  ])

  return { articles }
}
