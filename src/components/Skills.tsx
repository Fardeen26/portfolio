"use client"

import { Badge, Tooltip } from '@radix-ui/themes'
import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts'
import Title from './ui/Title'

const Skills = () => {
  return (
    <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
      <Title title='Skills' />

      <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-">
        {
          data.map((skill, idx) => (
            <Tooltip key={idx} content={skill}>
              <Badge color="gray" variant="solid" highContrast className={`text-xs max-sm:text-[10px] dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}>
                {skill}
              </Badge>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}


export default Skills;

const data: string[] = ["JavaScript", "TypeScript", "C++", "Java", "Solidity", "Next.js", "React", "Prisma", "MongoDB", "PostgreSQL", "Supabase", "MySQL", "Docker", "Redux", "Recoil", "Tailwind CSS", "Bootstrap", "Node.js", "Express,js", "WebSocket", "foundry", "Zod", "Git"];