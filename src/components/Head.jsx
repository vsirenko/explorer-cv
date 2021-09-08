import React from 'react'

export const Head = () => {
    return (
        <div className='head'>
            <div className="head-title">
                <img width="17px" src="https://win11.blueedge.me/img/icon/explorer.png" alt="" />
                File Explorer
            </div>
            <div className="head-right__icons">
                <div className="head-right__icons-block">
                    <img width='10px' height='8px' src="https://win11.blueedge.me/img/icon/ui/minimize.png" alt="" />
                </div>
                <div className="head-right__icons-block">
                    <img width='12px' src="https://win11.blueedge.me/img/icon/ui/maximize.png" alt="" />
                </div>
                <div className="head-right__icons-block head-right__icons-block-close">
                    <img width='10px' src="https://win11.blueedge.me/img/icon/ui/close.png" alt="" />
                </div>
            </div>
        </div>
    )
}
