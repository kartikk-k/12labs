"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import crafts from '@/data/crafts'
import Link from 'next/link'
import CraftItem from '@/components/CraftItem'

function Craft() {

  const { id } = useParams()
  const [data, setData] = React.useState<typeof crafts[0] | null | undefined>(null)

  useEffect(() => {
    if (!id) return
    const craft = crafts.find((c) => c.id === id)
    setData(craft ? craft : undefined)
  }, [id])

  return (
    <div>
      {/* hero */}
      {data ? (
        <div className='space-y-10'>
          <div className='space-y-2 mt-20'>
            <h1 className='text-2xl text-primary font-bold'>{data.title}</h1>
            <p className='text-gray-500 max-w-sm'>{data.description}</p>
          </div>

          <div>
            <CraftItem data={data} />
          </div>

        </div>


      ) : data === null ? (
        <p className='text-center py-10 test-xs text-gray-400'>loading...</p>

      ) : (
        <div className='text-sm text-center py-10'>
          <p className='text-gray-500'>component not found</p>
          <Link href='/' className='underline text-primary font-medium'>Go home</Link>
        </div>
      )
      }

    </div >
  )
}

export default Craft