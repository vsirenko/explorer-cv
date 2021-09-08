import React from 'react'
import { Footer } from './Footer'
import { Head } from './Head'
import { Panel } from './Panel'

export const Container = () => {
    return (
        <div className='explorer'>
            <Head />
            <Panel />
            <Footer />
        </div>
    )
}
