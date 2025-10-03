'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import {
  PROJECTS,
  VIDEOS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

import { SVGProps, useState } from 'react'

// Variants
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.9 }

// Project image dialog
function ProjectImage({ src }: { src: string }) {
  return (
    <MorphingDialog
      transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
    >
      <MorphingDialogTrigger>
        <img
          src={src}
          alt="Project preview"
          className="w-full h-full object-cover sm:h-100px"
        />
      </MorphingDialogTrigger>
    </MorphingDialog>
  )
}

// Social link with subtle HUD feel
function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.25}>
      <a
        href={link}
        className="group relative inline-flex items-center gap-1 rounded-full border border-zinc-700/50 bg-zinc-900 px-3 py-1.5 text-xs uppercase tracking-widest text-zinc-200 transition-colors duration-200 hover:border-cyan-500/50 hover:text-cyan-400"
      >
        {children}
        <svg
          width="14"
          height="14"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-cyan-400 opacity-70 group-hover:opacity-100"
        >
          <path
            d="M3.6 11.35c-.2-.2-.2-.52 0-.71L10.3 4H6c-.28 0-.5-.22-.5-.5S5.72 3 6 3h5.5c.14 0 .26.05.35.15.1.1.15.22.15.35V9c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.7L4.35 11.35a.5.5 0 0 1-.71 0z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >

      {/* Projects */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pt-10"
      >
        <h3 className="mb-5 pl-2 text-xs font-semibold tracking-widest uppercase border-l-4 border-cyan-600/60 text-zinc-700 dark:text-zinc-300">
          Selected Projects_
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.name} className="transition-all duration-300 grayscale hover:grayscale-0">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
                className="block group border border-zinc-700/50  overflow-hidden bg-gradient-to-br from-zinc-950/80 to-zinc-900/40"
                whileHover={{ scale: 1.02, y: -1 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <motion.div className="relative ring-1 ring-zinc-800/50">
                  <div className="h-100px">
                    <ProjectImage src={project.image} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-zinc-950/90 via-zinc-900/60 to-transparent">
                    <h4 className="text-2xl font-bold text-cyan-400 tracking-tight">
                      {project.name}
                    </h4>
                    <p className="text-sm text-zinc-300">{project.description}</p>

                    <motion.div
                      className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.2}
                        strokeLinecap="square"
                        className="w-5 h-5 text-cyan-400"
                      >
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

      {/* Multimedia */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 pl-2 text-xs font-semibold tracking-widest uppercase border-l-4 border-cyan-600/60 text-zinc-700 dark:text-zinc-300">
          Selected Multimedia_
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VIDEOS.map((video) => (
            <motion.a
              key={video.name}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="group block border border-zinc-700/50  overflow-hidden bg-zinc-950/80 hover:bg-zinc-900/80 transition-all"
              whileHover={{ scale: 1.03, y: -1 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <div className="p-6 flex flex-col gap-1.5">
                <h4 className="text-xl font-bold text-cyan-400">{video.name}</h4>
                <p className="text-rose-500 text-sm">+ {video.id}</p>
                <p className="text-sm text-zinc-300">{video.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 pl-2 text-xs font-semibold tracking-widest uppercase border-l-4 border-cyan-600/60 text-zinc-700 dark:text-zinc-300">
          Work Experience_
        </h3>

        <div className="flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <motion.a
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative border border-zinc-700/50 overflow-hidden bg-gradient-to-br from-zinc-950/80 to-zinc-900/60"
            >
              <Spotlight
                className={`from-zinc-900 via-zinc-800 to-zinc-700 blur-0xl dark:from-${job.color} dark:via-${job.color} dark:to-${job.color}`}
                size={400}
              />
              
              <div className="relative p-4">
                <div className="flex w-full justify-between">
                  <div>
                    <h4 className="font-semibold text-zinc-100">{job.title}</h4>
                    <p className="text-sm text-zinc-400">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 pl-2 text-xs font-semibold tracking-widest uppercase border-l-4 border-cyan-600/60 text-zinc-700 dark:text-zinc-300">
          Connect_
        </h3>
        <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
          Contact me at{' '}
          <a className="underline text-cyan-400" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center gap-3">
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
