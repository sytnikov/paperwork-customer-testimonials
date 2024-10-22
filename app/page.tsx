'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { companies, industries } from '../utils/data'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Company } from '@/utils/types'

export default function CustomerTestimonials() {
  const [filter, setFilter] = useState<string>('All')
  const [filteredCompanies, setFilteredCompanies] =
    useState<Company[]>(companies)

  const handleFilter = (industry: string) => {
    setFilter(industry)
    if (industry === 'All') {
      setFilteredCompanies(companies)
    } else {
      setFilteredCompanies(
        companies.filter((company) => company.industry === industry)
      )
    }
  }

  const featuredCompanies = filteredCompanies.filter(
    (company) => company.featured
  )
  const regularCompanies = filteredCompanies.filter(
    (company) => !company.featured
  )

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

      {featuredCompanies.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 mx-auto w-full max-w-4xl">
          {featuredCompanies.map((company) => (
            <Card
              key={company.id}
              className={`w-full border border-gray-800 relative rounded-2xl transition-all duration-300 ease-in-out hover:border-orange-500 hover:bg-orange-50`}
            >
              <Link
                href={company.url}
                className="group block w-full rounded-xl outline-none focus-visible:ring-1 focus-visible:ring-orange-400"
              >
                <CardContent className="p-0">
                  <div className="p-4 relative flex h-96 w-full flex-col items-center justify-center">
                    <div className="relative mx-auto block h-10 w-full max-w-32">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="object-contain absolute top-0 bottom-0 left-0 right-0 w-full h-full transition-all duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                      />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[60rem] mx-auto">
        {regularCompanies.map((company) => (
          <div key={company.id} className="flex flex-col items-center">
            <Link href={company.url} target='_blank'>
              <div className="flex items-center justify-center w-32 h-32 relative mb-4">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
