import { useState, useEffect} from 'react';
import { webApps, frontEnd } from '../../sliderData';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import './slider.scss';

const Slider = ({ setMenuOpen }) => {
    const [select, setSelect] = useState('Web Apps');
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState([]);
    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    }

    const list = [
      {
        id: 'web',
        name: 'Web Apps',
      },
      {
        id: 'front',
        name: 'Front-end'
      },
    ]

    const fetchData = () => {
     select === 'Front-end' ? setData(frontEnd) 
     : setData(webApps)
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div className='slider' id='slider' onClick={()=>setMenuOpen(false)}>
            <div className="header">
                <h1>{select}</h1>
                <ul className="buttons">
                    {list.map(item => (
                         <li className={select === item.name ? 'li-item active' : 'li-item'} key={item.id} onClick={() => {setSelect(item.name)}}>{item.name}</li> 
                    ))}
                </ul>
            </div>
            
            <div className="body">
               <ArrowLeft className='icon' onClick={prevSlide} />
                {data.map((item, index) => (
                   <div className={index === current ? 'contain sliding active' : 'contain sliding'} key={index}> 
                    {index === current && (
                     <>
                        <div className="content">
                            <h1>{item.name}</h1>
                            <ul>
                                {item.description.map(text => (
                                    <li>{text}</li>
                                ))}
                            </ul>
                            <div className="stack">
                                {item.stack.map(pic => 
                                        <img className='icon' src={pic} alt="" />
                                )} 
                            </div>
                            <ul className="buttons">
                                <li><a href={item.githubUrl}>View Github</a></li>
                                <li><a href={item.siteUrl}>View Site</a></li>
                            </ul>
                        </div>
                        <div className="video-cont">
                          <video autoPlay loop className='video' src={item.video}></video>
                        </div> 
                      </>
                    )}   
                   </div> 
                ))}
               <ArrowRight className='icon' onClick={nextSlide} />
            </div>
        </div>
    )
}

export default Slider;
