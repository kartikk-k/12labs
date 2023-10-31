import { Search } from 'lucide-react'
import React from 'react'

function Searchbar() {
    return (
        <div className='bg-primary-background flex items-center gap-2 text-gray-400 px-4 rounded-full h-10'>
            <Search size={18} />
            <input
                type="text"
                placeholder='search here...'
                className='outline-none w-full h-full font-medium placeholder:font-normal text-gray-600 placeholder:text-gray-400 bg-transparent'
            />
        </div>
    )
}

export default Searchbar