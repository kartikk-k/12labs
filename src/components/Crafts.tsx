import React from 'react'
import crafts from '@/data/crafts'
import Image from 'next/image'
import Link from 'next/link'

function Crafts() {

    return (
        <div className='space-y-4'>
            {crafts.map((craft) => (
                <Link href={craft.link} key={craft.id} className='flex hover:translate-x-2 duration-300 bg-white items-start gap-4 p-4 rounded-xl border'>
                    <div>
                        <Image src={craft.image} alt='craft' width={82} height={82} />
                    </div>
                    <div>
                        <div>
                            <h1 className='text-sm md:text-base font-medium text-gray-800'>{craft.title}</h1>
                            <p className='text-xs md:text-sm text-gray-500'>{craft.description}</p>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Crafts