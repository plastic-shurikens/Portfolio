import { useState, useEffect} from 'react';
import { webApps, mobileApps, designs } from '../../sliderData';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import './slider.scss';

const Slider = () => {
    const [select, setSelect] = useState('Web Apps');
    const [current, setCurrent] = useState(0);
    const [nestCurrent, setNestCurrent] = useState(0);
    const [data, setData] = useState([]);

    console.log(nestCurrent)

    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
        setNestCurrent(0);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
        setNestCurrent(0);
    }

    const list = [
      {
        id: 'web',
        name: 'Web Apps',
      },
      {
        id: 'mobile',
        name: 'Mobile Apps'
      },
      {
        id: 'designs',
        name: 'Designs'
      },
    ]

    const fetchData = () => {
      select === 'Mobile Apps' ? setData(mobileApps) 
     : select === 'Designs' ? setData(designs) 
     : setData(webApps)
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div className='slider' id='slider'>
            <div className="title">
                <h1>{select}</h1>
                <ul className="buttons">
                    {list.map(item => (
                         <li className={select === item.name ? 'li-item active' : 'li-item'} key={item.id} onClick={() => {setSelect(item.name)}}>{item.name}</li> 
                    ))}
                </ul>
            </div>
            <ArrowLeft className='left' onClick={prevSlide} />
            <ArrowRight className='right' onClick={nextSlide} />
            <div className="container">
                {data.map((item, index) => (
                   <div className={index === current ? 'sliding active' : 'sliding'} key={index}> 
                    {index === current && (
                     <>
                        <div className="content">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <div className="stack">
                                {item.stack.map(pic => 
                                        <img className='icon' src={pic} alt="" />
                                )} 
                            </div>
                            <ul className="buttons">
                                <li><a href='https://www.google.com'>View Github</a></li>
                                <li><a href='https://www.google.com'>View Site</a></li>
                            </ul>
                        </div>
                        <div className="carousel">
                            <ArrowLeft className='left' onClick={() => setNestCurrent(nestCurrent === item.images.length - 1 ? 0 : nestCurrent + 1)} />
                            <ArrowRight className='right' onClick={() => setNestCurrent(nestCurrent === 0 ? item.images.length - 1 : nestCurrent - 1)}  /> 
                            {item.images.map((img, index) => (
                                <div className={index === nestCurrent ? 'slide active' : 'slide'} key={index}> 
                                {index === nestCurrent && (
                                  <img className='image-carousel' src={img} alt="" /> 
                                )}
                                </div>
                            ))}
                        </div> 
                      </>
                    )}   
                   </div> 
                ))}
            </div>
        </div>
    )
}

export default Slider;
