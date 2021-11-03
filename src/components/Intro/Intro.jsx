import './intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef, useEffect } from 'react';
import { init } from 'ityped'

const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 1500, strings: ['Developer!', 'Designer!' ] })

    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
               <h3 className='left-title'>Hi I'm</h3>
               <h1 className='left-f-title'>Ismail Dahri</h1>
               <h3 className='left-title'>I'm a Web <span className='left-span' ref={textRef}></span></h3>
            </div>
            <div className="right">
                <img className='right-image' src="assets/developer.svg" alt="" />
                <div className='right-link'>
                    <a href='#projects'><ArrowDownwardIcon className='icon' /></a> 
                </div>
            </div>
        </div>
    )
}

export default Intro
