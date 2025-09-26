'use client'
import { TextScramble } from '@/components/ui/text-scramble'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className='gap'>
        <Link href="/" className="md:text-7xl text-black dark:text-white font-bold text-3xl ">
          Hi, I'm Caleb_
        </Link>
        <TextScramble
          duration={1}
          className="text-zinc-600 dark:text-rose-500"
        >
          Product Designer and Software Engineer
        </TextScramble>
      </div>
    </header>
  )
}
