import React from 'react'

export const Modal = ({modalActive,setModalActive, currentId}) => {
    const objTitle = {
        1: 'AboutMe',
        2: 'Skills',
        3: 'Expirience',
        4: 'Contacts',
        5: 'readme',
    }
    return (
        <div className={`modal ${modalActive === true &&  'modal--active'}`}>
            <div className="modal-head">
                <div className="modal-head__title">
                <img width='20px' src="https://i.postimg.cc/3N0PpJF0/Notes.png" alt="" />
                Notebook -   {
                    objTitle[currentId]
                }
                </div>
                <div className="head-right__icons">
                    <div className="head-right__icons-block" onClick={() => setModalActive(false)}>
                        <img width='10px' height='8px' src="https://win11.blueedge.me/img/icon/ui/minimize.png" alt=""/>
                    </div>
                    <div className="head-right__icons-block">
                        <img width='12px' src="https://win11.blueedge.me/img/icon/ui/maximize.png" alt="" />
                    </div>
                    <div className="head-right__icons-block head-right__icons-block-close" onClick={() => setModalActive(false)}>
                        <img width='10px' src="https://win11.blueedge.me/img/icon/ui/close.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="modal-head__nav">
                <div className="modal-head__nav-item">File</div>
                <div className="modal-head__nav-item">Edit</div>
                <div className="modal-head__nav-item">Format</div>
                <div className="modal-head__nav-item">View</div>
                <div className="modal-head__nav-item">Reference</div>
            </div>
            <div className="modal-body">
            {objTitle[currentId]}
                {currentId === 1 && 
                    <> 
                        <p>Hi! My name is What? My name is Who? My name is Chika-chika Slim Shady</p>
                        <p>No, my name is Vova, I'm 20 years old</p>
                        <p>I live in Kiev, I am fond of development and if you see this entry, then I'm looking for a job</p>
                        <p>I going to the gym, I want to pass my license, so I go to the Driving School, sometimes I play computer games, sometimes basketball</p>
                        <p>I need a job:</p>
                        <ul>
                        <li> with cool people</li>
                        <li> with cool projects</li>
                        </ul>
                        <p> If you have this, send me email or call me=)</p>
                    </>
                }
                {currentId === 2 && 
                    <>
                    <br></br>
                    <p className='modal-title'>HTML</p>
                    <ul>
                        <li>Semantic HTML</li>
                        <li>Forms and Validation</li>
                        <li>Best Practices</li>
                        <li>SEO</li>
                    </ul>
                    <p className='modal-title'>CSS</p>
                    <ul>
                        <li>Floats</li>
                        <li>Flex Box</li>
                        <li>Grid CSS</li>
                        <li>SASS</li>
                        <li>etc...</li>
                    </ul>
                    <p className='modal-title'>JavaScript</p>
                    <ul>
                        <li>DOM</li>
                        <li>API</li>
                        <li>ES6+</li>
                        <li>Basic Constructs</li>
                    </ul>
                    <p className='modal-title'>React</p>
                    <ul>
                        <li>Hooks</li>
                        <li>CSS Modules, Styled Components</li>
                        <li>Async Data</li>
                        <li>Redux, Redux-Thunk</li>
                    </ul>
                    <p className='modal-title'>React</p>
                    <ul>
                        <li>Hooks</li>
                        <li>CSS Modules, Styled Components</li>
                        <li>Async Data</li>
                        <li>Redux, Redux-Thunk</li>
                        <li>map(), filter(), reduce() etc...</li>
                        <li>router-dom, chackra-ui etc...</li>
                    </ul>
                    <p className='modal-title'>Other</p>
                    <ul>
                        <li>English: pre-intermediate (inprogress)</li>
                        <li>TypeScript (inprogress)</li>
                        <li>Git, Git-Lab</li>
                        <li>Jquery</li>
                    </ul>
                    </>
                }
                {currentId === 3 &&
                    <>
                    <p>Before that, I worked as a barista for a very long time, let's miss this =D</p>
                    <p>Renklod LLD - from May 2021 to today | FrontEnd developer</p>
                    <p>About work: Editing current projects, their visual part, adding new modules, layout templates, writing a project on React</p>
                    
                    </>
                }

                {currentId === 4 && 
                    <>
                    <p className='modal-title'>Phone: +380 96 294 90 80</p>
                    <p className='modal-title'>email: the.sirenko@gmail.com</p>
                    <p className='modal-title'>telegram: @vova_s1r</p>
                    <p className='modal-title'>Linkedin: <a href='https://www.linkedin.com/in/vladimir-sirenko-89b5931a4/'>Link</a></p>

                    </>
                }

                {currentId === 5 &&
                    <>
                    <p>I made this site in order to surprise and brighten up the gray life of HR</p>
                    <p>While filters, pop-up, and search are working here, and nothing more</p>
                    <p>You can open any "file" and read what interests you</p>
                    <p>Sirenko Vladimir (c) 2021</p>
                    </>
                }
            </div>
        </div>
    )}
