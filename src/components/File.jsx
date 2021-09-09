import React from 'react'

export const File = ({id, name, data, type, size, icon, setModalActive, setCurrentId}) => {
    return (
        <div className="file" onClick={() => { 
            setModalActive(true)
            setCurrentId(id)}
        }>
                        <img width='18px' height='18px' src={icon} alt="" />
                        <div style={{width: '260px'}} className="file-body content-files__name">{name}</div>
                        <div className="file-body content-files__data">{data}</div>
                        <div className="file-body content-files__type">{type}</div>
                        <div className="file-body content-files__size">{size} KB</div>
        </div>
    )
}
