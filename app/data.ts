type Project = {
  name: string
  description: string
  link: string
  image: string
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
      'A prominent liberal arts school asked me to help redesign some parts of their main site_',
    link: 'https://www.figma.com/deck/9hiIS5UvcTzBjwu7Hdkz7P/Trinity-UX-Redesign?node-id=1-42&t=SwMKkwf4R8OScebm-1',
    image:
      '/p_1.JPG',
    id: 'project1',
  },
  {
    name: 'Trinity University Search',
    description: 'Sitewide search implementation needed a new look_',
    link: 'https://www.figma.com/design/GXBBaodKgwj4SOgDDWU8sz/Trinity-Design-Work?node-id=8-144&t=wtRXNndwh1NrzBnX-1',
    image:
      '/p_2.png',
    id: 'project2',
  },
    {
    name: 'Animal Advocacy Through Virtual Reality',
    description: 'Design and programming work created at the University of Sydney_',
    link: 'https://youtu.be/jLWcoMTBHGM',
    image:
      '/p_3.JPG',
    id: 'project3',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Trinity university',
    title: 'UX Designer',
    start: "May '25",
    end: 'Present',
    link: 'https://trinity.edu',
    id: 'work1',
    color: 'red-600',
    bgColor: 'zinc-900'
  },
    {
    company: 'Trinity university',
    title: 'UX Designer Intern',
    start: "Dec '24",
    end: "May '25",
    link: 'https://trinity.edu',
    id: 'work2',
    color: 'red-600',
    bgColor: 'zinc-950'
  },
  {
    company: 'ForeFlight: A Boeing Company',
    title: 'Software Engineer Intern',
    start: "May '24",
    end: "Aug '24",
    link: 'https://ForeFlight.com',
    id: 'work3',
    color: 'blue-600',
    bgColor: 'zinc-950'
  },
  {
    company: 'Spend With Us',
    title: 'Software Developer Intern',
    start: "Feb '24",
    end: "June '24",
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
