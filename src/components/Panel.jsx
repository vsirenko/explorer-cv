import React from 'react'

export const Panel = ({setSearch}) => {
    return (
        <div className='panel'>
            <div className="panel-nav">
                {/* <div className="panel-nav__body"><img width='13px' src="https://i.postimg.cc/3xCZkkdq/271218.png" alt="" /></div>
                <div className="panel-nav__body"><img width='13px' src="https://i.postimg.cc/3xCZkkdq/271218.png" alt="" /></div>
                <div className="panel-nav__body"><img width='13px' src="https://i.postimg.cc/3xCZkkdq/271218.png" alt="" /></div> */}
            </div>
            <div className="panel-rout">
                <img width='18px' src="https://i.postimg.cc/yYyfZ3ZR/Folder-Open.png" alt="" />
                <input type="text" readonly className="panel-rout__inp" placeholder='C:/users/best-hr/documents/sirenko_vladimir'/>
            </div>
            <div className="panel-search">
            <img width='16px' src="https://i.postimg.cc/v82HzLNs/Search.png" alt="" />
                <input type="text" className="panel-search__inp" placeholder='Search: readme.md' onChange={e => setSearch(e.target.value)}/>
            </div>
        </div>
    )
}
