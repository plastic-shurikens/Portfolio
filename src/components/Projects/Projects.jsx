import { useState, useEffect } from 'react';
import { featured, webApps, frontEnd } from '../../sliderData'
import './projects.scss';

const Projects = ({menuOpen, setMenuOpen}) => {
    const [selected, setSelected] = useState('Featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'Featured',
            name: 'Featured',
        },
        {
            id: 'Web Apps',
            name: 'Web Apps',
        },
        {
            id: 'Front End',
            name: 'Front-end',
        },
    ]

    const fetchData = () => {
      selected === 'Web Apps' ? setData(webApps)  
      : selected ===  'Front End' ? setData(frontEnd)
      : setData(featured)
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div className='projects' id='projects' onClick={()=>setMenuOpen(false)}>
            <div className="container">
                <h1 className='title-container'>{selected}</h1>
                <ul className='ul-container'>
                    {list.map(item => (
                        <li 
                          key={item.id}
                          className={selected === item.id ? 'li-item active' : 'li-item'} 
                          onClick={
                            () => setSelected(item.id)
                          }
                        >
                         {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='image-container'>    
                {data.map(item => (
                    <div className={!data ? 'overlay active' : 'overlay' } key={item.id}>
                        <img className='image' src={item.image} alt={item.name} />
                        <div className="items">
                            <h2>{item.name}</h2>
                            <div className="nested-items">
                                <a className='link' href='#slider'>View Details</a>
                                <a className='link' href='https://github.com/Plvtinum-1?tab=repositories'>Visit Site</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       
    )
}

export default Projects
