'use client'

import Image from 'next/image'
import { useState } from 'react'

import { companies, industries } from '../utils/data'
import { Button } from '@/components/ui/button'
import { Company } from '@/utils/types'

export default function CustomerTestimonials() {
  const [filter, setFilter] = useState<string>('All')
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(companies)

  const handleFilter = (industry: string) => {
    setFilter(industry)
    if ((industry === 'All')) {
      setFilteredCompanies(companies)
    } else {
      setFilteredCompanies(
        companies.filter((company) => company.industry === industry)
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 font-geistSans">
      <h1 className="text-5xl font-bold text-center mb-4">
        Meet our customers
      </h1>
      <p className="text-xl text-center text-muted-foreground mb-8 font-geistMono">
        Trusted by leading companies across various industries
      </p>
      <div className="grid grid-cols-2 gap-4 sm:flex justify-center mb-12">
        {industries.map((industry) => (
          <Button
            key={industry}
            onClick={() => handleFilter(industry)}
            variant={filter === industry ? 'default' : 'outline'}
          >
            {industry}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[60rem] mx-auto">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="flex flex-col items-center">
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

{
  /* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://www.papermark.io/_next/static/media/papermark-logo.d2fc4f5c.svg"
          alt="Papermark logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            This is a wip solution for the Papermark quest in{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              oss.gg
            </code>
            .
          </li>
          <li>Here is gonna be a page with Papermark customer testimonials.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */
}
