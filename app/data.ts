type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  color: string
  bgColor: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Higher Ed Site Redesign',
    description:
      'A Large liberal arts school asked me to help redesign some parts of their main site.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Project 2',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
    {
    name: 'Project 3',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Trinity university',
    title: 'UX Designer',
    start: 'May 2025',
    end: 'Present',
    link: 'https://trinity.edu',
    id: 'work1',
    color: 'red-600',
    bgColor: 'zinc-900'
  },
    {
    company: 'Trinity university',
    title: 'UX Designer Intern',
    start: 'Dec 2024',
    end: 'May 2025',
    link: 'https://trinity.edu',
    id: 'work2',
    color: 'red-600',
    bgColor: 'zinc-950'
  },
  {
    company: 'ForeFlight: A Boeing Company',
    title: 'Software Engineer Intern',
    start: 'May 2024',
    end: 'Aug 2024',
    link: 'https://ForeFlight.com',
    id: 'work3',
    color: 'blue-600',
    bgColor: 'zinc-950'
  },
  {
    company: 'Spend With Us',
    title: 'Software Developer Intern',
    start: 'Feb 2024',
    end: 'June 2024',
    link: 'https://www.spendwithus.com.au/',
    id: 'work4',
    color: 'green-500',
    bgColor: 'zinc-950'
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  /*
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  */
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kaelub/',
  },
  /*
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
  */
]

export const EMAIL = 'kaelub.tech@gmail.com'
