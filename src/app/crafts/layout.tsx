import Navbar from '@/components/Navbar'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='p-4 py-8'>
            {/* navbar */}
            <Navbar />

            <section className='mt-20'>
                {children}
            </section>
        </div>
    )
}

export default layout