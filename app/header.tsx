'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className=" text-black dark:text-white font-bold text-3xl ">
          Caleb Aguiar
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-sky-500"
          delay={0.5}
        >
          Product Designer
        </TextEffect>
      </div>
    </header>
  )
}
