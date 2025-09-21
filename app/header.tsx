'use client'
import { TextScramble } from '@/components/ui/text-scramble'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className=" text-black dark:text-white font-bold text-3xl ">
          Caleb Aguiar
        </Link>
        <TextScramble
          duration={1}
          className="text-zinc-600 dark:text-rose-500"
        >
          Product Designer
        </TextScramble>
      </div>
    </header>
  )
}
