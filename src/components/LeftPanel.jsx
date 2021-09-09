import React from 'react'
import { Folder } from './Folder'

export const LeftPanel = () => {
    const folders = [
        {
            text: 'Desktop',
            src: 'https://i.postimg.cc/gjKZrwKD/Computer.png',
            pin: true
        },
        {
            text: 'Downloads',
            src: 'https://i.postimg.cc/d1ptjGq6/Folder-Downloads.png',
            pin: true
        },
        {
            text: 'Images',
            src: 'https://i.postimg.cc/hj5qqn6t/Folder-Pictures.png',
            pin: true
        },
        {
            text: 'Documents',
            src: 'https://i.postimg.cc/QxLdBgYx/Folder-Documents.png',
            css: 'folder--active',
            pin: true
        },
        {
            text: 'Sirenko_Vladimir',
            src: 'https://i.postimg.cc/yYyfZ3ZR/Folder-Open.png',
            css: 'folder-child folder--child-active'
        },
        {
            text: 'Other',
            src: 'https://i.postimg.cc/yYyfZ3ZR/Folder-Open.png',
            css: 'folder-child'
        }
    ]
    return (
        <div className='leftnav'>
            {folders.map((item)=> {
                return(
                    <Folder {...item}/>
                )
            })}
        </div>
    )
}
