import React from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { Head } from './Head'

export const Container = () => {
    return (
        <div className='explorer'>
            <Head />
            <Content />
            <Footer />
        </div>
    )
}
