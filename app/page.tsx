'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { Tilt } from '@/components/motion-primitives/tilt'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

import { useRef, useState } from 'react'


const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectImageProps = {
  src: string
}

function ProjectImage({ src }: ProjectImageProps) {

  return (
    
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >

      <MorphingDialogTrigger>

          <img
            src={src}
            alt="Project preview"
            className="w-full h-full object-cover"
          />

      </MorphingDialogTrigger>
    </MorphingDialog>
  )
}


function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 border-b border-zinc-600 pb-10">
          <p className="text-zinc-600 dark:text-zinc-400">
            Hey, super glad you're here! Peruse around, this is where my portfolio and interests live.
            I attended <a href='https://www.trinity.edu/' target='_blank' className='dark:text-zinc-200'><br />Trinity University</a> 
            &nbsp;for my <i>Computer Science</i> undergrad and the <a href='https://www.washington.edu/' target='_blank' className='dark:text-zinc-200'> University of Washington </a> for my <i>Masters in Human Computer Interaction + Design. </i>
          </p>
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 ">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2 ">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 border border-zinc-200/60 dark:border-zinc-800/60"
                whileHover={{ scale: 0.99, y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >

                <motion.div
                  className="relative overflow-hidden bg-zinc-50/40 ring-1 ring-inset ring-zinc-200/50 
                            dark:bg-zinc-950/40 dark:ring-zinc-800/50 lg:h-100 "
                >
                  <ProjectImage src={project.image}   />
                  <ProgressiveBlur
                    className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full '
                    blurIntensity={1}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  />
                  <div
                    className="
                      absolute bottom-0 left-0 w-full 
                      p-6 flex gap-1.5 flex-col justify-center
                    "
                  >
                    <h4 className=" text-3xl font-bold text-white  ">
                      {project.name}
                    </h4>
                    <p className="  text-white ">{project.description}</p>
                    
                    {/* HOVER ARROW (east) */}
                      <motion.div
                        className="
                          absolute right-6 top-1/2 -translate-y-0 -translate-x-3
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          pointer-events-none
                        "
                        // smooth left-right wiggle
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ willChange: 'transform' }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="square"
                          strokeLinejoin="inherit"
                          aria-hidden="true"
                          className="w-7 h-7 text-white mix-blend-exclusion"
                        >
                          {/* ArrowRight: line + chevron */}
                          <path d="M4 12h14" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                  </div>

                </motion.div>
              </motion.a>
            </div>
          ))}
        </div>
      </motion.section>


      
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <motion.a
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative overflow-hidden  bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className={`from-zinc-900 via-zinc-800 to-zinc-700 blur-3xl dark:from-${job.color} dark:via-${job.color} dark:to-${job.color}`}
                size={500}
              />
            <div className={`relative h-full w-full bg-white p-4 dark:bg-${job.bgColor} `}>
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.4,
            }}
          >
            
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-600">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
       </motion.section>
      </motion.main>
  )
}
