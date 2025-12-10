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
    }
  ])

  return { articles }
}

