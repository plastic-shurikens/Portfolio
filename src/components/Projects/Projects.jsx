import {useState, useEffect} from 'react';
import ProjectsList from '../ProjectsList/ProjectsList';
import {
    featured,
    webApps,
    mobileApps,
    designs
} from '../../data'
import './projects.scss';

const Projects = () => {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            name: 'Featured',
        },
        {
            id: 'web',
            name: 'Web Apps',
        },
        {
            id: 'mobile',
            name: 'Mobile Apps',
        },
        {
            id: 'designs',
            name: 'Designs',
        },
    ]

    const fetchData = () => {
      selected === 'web' ? setData(webApps) 
      : selected === 'mobile' ? setData(mobileApps) 
      : selected ===  'designs' ? setData(designs)
      : setData(featured)
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div className='projects' id='projects'>
            <div className="container">
                <h1 className='title-container'>Projects</h1>
                <ul className='ul-container'>
                    {list.map(item => (
                        <ProjectsList
                           key={item.id}
                           id={item.id}
                           name={item.name}
                           active={selected === item.id}
                           setSelected={setSelected} 
                        />
                    ))}
                </ul>
            </div>
            <div className="image-container">
                {data.map(item => (
                    <div className="overlay" key={item.id}>
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
