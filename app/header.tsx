'use client'
import { Cursor } from '@/components/motion-primitives/cursor'
import { TransitionPanel } from '@/components/motion-primitives/transition-panel'
import { TextScramble } from '@/components/ui/text-scramble'
import Link from 'next/link'
import {
  TransitionPanelInfo,
} from './data'
import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'


export function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    
    <header className='grid grid-cols-1 md:grid-cols-2 gap-4 border-b-1 border-t-1 border-zinc-800 p-7'> 
        <div className='flex flex-col space-y-4'>
          <header className="mb-8 flex items-center justify-between">
            <div className='flex flex-col gap-2'>
              <Link href="/" className="md:text-7xl text-black dark:text-white font-bold text-3xl ">
                Hi, I'm Caleb_
              </Link>
              <TextScramble
                duration={1}
                className="text-zinc-600 dark:text-white"
              >
                Product Designer and Software Engineer
              </TextScramble>
            </div>
          </header>
            <div className='md:w-full'>
              <div className='mb-4 flex space-x-4'>
                {TransitionPanelInfo.map((item, index) => (
                  <ButtonScale
                    key={index}
                    onClick={() => setActiveIndex(index)}

                    className={`px-3 py-1 text-sm font-medium ${
                      activeIndex === index
                        ? 'bg-zinc-200 text-zinc-900 dark:bg-rose-500 dark:text-zinc-100'
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                    }`}
                  >
                    {item.title}
                  </ButtonScale>
                ))}
              </div>
            <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
              <TransitionPanel
                activeIndex={activeIndex}
                transition={{ duration: 0.3, spring: 'easeInOut' }}
                variants={{
                  enter: { opacity: 0, y: -20, filter: 'blur(0px)' },
                  center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  exit: { opacity: 0, y: 20, filter: 'blur(0px)' },
                }}
              >
                {TransitionPanelInfo.map((item, index) => (
                  <div key={index} className='py-2'>
                    <ul className="text-zinc-600 dark:text-zinc-400">{item.content}</ul>
                    {Array.isArray(item.list) ? (
                      <ul className="list-none pl-4">
                        {item.list.map((line, idx) => (
                          <li key={idx} className="relative before:content-['+'] before:absolute before:-left-4 before:text-rose-500 text-zinc-400">
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.list}</p>
                    )}
                  </div>
                ))}
              </TransitionPanel>
            </div>
          </div>
        </div>

        <div className='w-full' > 
          <Cursor
            attachToParent
            variants={{
              initial: { scale: 0.3, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.3, opacity: 0 },
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
            }}
            className='left-0 top-4'
          >
          <div>
            <div className='ml-4 mt-1 bg-rose-500 px-2 py-0.5 text-neutral-50'>
              Based In Seattle
            </div>
          </div>
        </Cursor>
          <Image src="/Seattle.png" width={500} height={500} alt="Picture of the author" />
        </div>
      </header>
  )
}

const ButtonScale = styled.button`
  transition: transform 0.2s ease-in-out; 
  &:hover {
    transform: scale(1.05);
  }
`