
import React, { useState, useEffect } from 'react'
import { File } from './File'
import { LeftPanel } from './LeftPanel'
import { Modal } from './Modal'
import { Panel } from './Panel'

const files = [
    {
        id: 1,
        icon: 'https://i.postimg.cc/3N0PpJF0/Notes.png',
        name: 'AboutMe',
        data: '30.08.2021',
        type: 'txt',
        size: 12
    },
    {
        id: 2,
        icon: 'https://i.postimg.cc/3N0PpJF0/Notes.png',
        name: 'Skills',
        data: '31.08.2021',
        type: 'txt',
        size: 11
    },
    {
        id: 3,
        icon: 'https://i.postimg.cc/3N0PpJF0/Notes.png',
        name: 'Expirience',
        data: '02.09.2021',
        type: 'txt',
        size: 13
    },
    {
        id: 4,
        icon: 'https://i.postimg.cc/3N0PpJF0/Notes.png',
        name: 'Contacts',
        data: '03.09.2021',
        type: 'txt',
        size: 5
    },
    {
        id: 5,
        icon: 'https://i.postimg.cc/3N0PpJF0/Notes.png',
        name: 'readme',
        data: '09.09.2021',
        type: 'md',
        size: 3
    },
]

export const Content = () => {
    const [items, setItems] = useState(files)
    const [search, setSearch] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const [currentId, setCurrentId] = useState(1)

    useEffect(() => {
        const filterItems = items.filter((item)=> {
                if(item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    return true
                } else {
                    return false
                }
            })
        setItems([...filterItems])
        search.trim() === '' && setItems(files)
    }, [search, items])

    const sortByName = () => {
        const filtered = files.sort((a,b) => {
            return a.name < b.name ? -1 : 1;
        })
        setItems([...filtered])
    }
    const sortByData = () => {
        const filtered = files.sort((a,b) => {
            return a.data < b.data ? -1 : 1;
        })
        setItems([...filtered])
    }
    const sortByType = () => {
        const filtered = files.sort((a,b) => {
            return a.name > b.name ? -1 : 1;
        })
        setItems([...filtered])
    }
    const sortBySize = () => {
        const filtered = files.sort((a,b) => {
            return a.size - b.size
        })
        setItems([...filtered])
    }
    return (
        <div className='content'>
            <Panel setSearch={setSearch}/>
            <div className="content-wrap">
            <LeftPanel />
            <div className="content-files">
                <div className="content-files__body">
                    <div className="content-body content-files__name" onClick={() => sortByName()}><p>Name</p></div>
                    <div className="content-body content-files__data" onClick={() => sortByData()}><p>Data</p></div>
                    <div className="content-body content-files__type" onClick={() => sortByType()}><p>Type</p></div>
                    <div className="content-body content-files__size" onClick={() => sortBySize()}><p>Size</p></div>
                </div>
                <div className="content-all__files">
                    {items.map((item, key)=> {
                        return(
                            <File key={`${key}${item.name}`} setModalActive={setModalActive} setCurrentId={setCurrentId} {...item}/>
                        )
                    })}
                </div>
                <Modal modalActive={modalActive} currentId={currentId} setModalActive={setModalActive}/>
                
            </div>
            </div>
        </div>
    )
}
