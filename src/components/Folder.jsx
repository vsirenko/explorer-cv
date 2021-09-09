import React from 'react'

export const Folder = ({src, text, css, pin}) => {
    return (
        <div className={`folder ${css}`}>
            <div className="folder-body">
                <img width='22px' src={src} alt="" />
                {text}
            </div>
            {pin && 
                <div className="folder-clip">
                <img width='11px' src="https://i.postimg.cc/4xwjpZPN/office-push-pin.png" alt="" />
                </div>
            }
        </div>
    )
}
