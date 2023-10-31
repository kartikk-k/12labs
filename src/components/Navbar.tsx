import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@public/logo.svg'

function Navbar() {
    return (
        <div className='flex items-center justify-between'>
            <Link href='/'>
                <Image src={Logo} alt='12 labs' />
            </Link>

            <div className='space-x-4'>
                <Link href={'https://twitter.com/kartik_builds'} target='_blank' className='text-sm text-gray-500'>
                    Twitter
                </Link>
                <Link href={'https://github.com/kartikk-k'} target='_blank' className='text-sm text-gray-500'>
                    Github
                </Link>
            </div>
        </div>
    )
}

export default Navbar