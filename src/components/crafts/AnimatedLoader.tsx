"use client"

import React from 'react'
import { motion } from 'framer-motion'

function AnimatedLoader() {
    return (
        <div
            className='flex gap-1.5 h-8 items-center'
        >
            <motion.span
                animate={{ height: [10, 30, 10] }}
                transition={{ repeat: Infinity }}
                className='bg-primary w-1 rounded-full'
            />
            <motion.span
                animate={{ height: [10, 30, 10] }}
                transition={{ delay: 0.3, repeat: Infinity }}
                className='bg-primary w-1 rounded-full'
            />
            <motion.span
                animate={{ height: [10, 30, 10] }}
                transition={{ delay: 0.6, repeat: Infinity }}
                className='bg-primary w-1 rounded-full'
            />
        </div>
    )
}

export default AnimatedLoader