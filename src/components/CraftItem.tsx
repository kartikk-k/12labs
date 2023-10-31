import React from 'react'
import Link from 'next/link'
import crafts from '@/data/crafts'
import { Github, Palette, Share } from 'lucide-react'

function CraftItem({ data }: { data: typeof crafts[0] }) {

    const handleClick = () => {

        // check if broswer is desktop
        if (window?.innerWidth > 768) {
            navigator?.clipboard.writeText(window.location.href)
            return
        }

        // use browser share api
        navigator.share({
            title: `${data.title} | 12 labs by Kartik`,
            text: data.description,
            url: window.location.href
        })
    }

    return (
        <div className='space-y-6'>
            <div className='border rounded-lg overflow-hidden'>
                {/* main component */}
                <div className='bg-primary-background pattern py-10 flex items-center justify-center'>
                    {<data.component />}
                </div>

                <div className=' gap-4 text-gray-500 text-sm p-4 space-y-4'>
                    <div className='flex items-center gap-10'>
                        <div className='flex items-center gap-2 w-28'>
                            <Palette size={18} />
                            <span>Color palate</span>
                        </div>
                        <div className=''>
                            <div className='inline-flex text-primary p-1 pr-2 gap-2 border rounded-2xl items-center'>
                                <span className='block w-4 h-4 bg-primary rounded-lg' />
                                <span>#7681FF</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-10'>
                        <div className='flex items-center gap-2 w-28'>
                            <Github size={18} />
                            <span>Code</span>
                        </div>

                        <Link href='' className='underline text-primary font-medium'>github.com/...</Link>
                    </div>
                </div>


            </div>

            {/* share */}
            <button onClick={handleClick} className='flex mx-auto items-center gap-2 text-primary text-sm font-medium'>
                <Share size={18} />
                Share
            </button>

        </div>
    )
}

export default CraftItem