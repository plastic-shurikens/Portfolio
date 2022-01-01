import { useState, useEffect } from 'react';
import { webApps } from '../../sliderData'
import './projects.scss';

const Projects = ({menuOpen, setMenuOpen}) => {
    const [div, setDiv] = useState(false);
    const [id, setId] = useState(0);
    const [objData, setObjData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(webApps)
        setObjData(webApps[id])
    }, [id])

    return (
        <div className='projects' id='projects' onClick={()=>setMenuOpen(false)}>
            <div className="container">
                <h1 className='title-container'>Projects</h1>
            </div>

                <div className='image-container'>    
                    {data.map(item => (
                        <div className={!data ? 'overlay active' : 'overlay' } key={item.id}>
                            <img className='image' src={item.image} alt={item.name} />
                            <div className="items">
                                <h2>{item.name}</h2>
                                <div className={ 'nested-items'}>
                                    <li
                                     onClick={
                                        () => {
                                         setDiv(true);
                                         setId(item.id);
                                        }
                                     }
                                     className='link'
                                    >
                                      View Details
                                    </li>
                                    <a className='link' href={item.siteUrl}>Visit Site</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={div ? 'project-container active' : 'project-container'}>
                  <div className='inside-p-container'>
                    {objData && [objData].map(item => (
                      <>
                      <div className='inside-p-container-content'>
                        <h1>{item.name}</h1>
                        {item.description && item.description.map(item => (
                            <p>{item}</p>
                        ))}
                        <div className='stack'>
                            {item.stack && item.stack.map(pic => (
                                <img className='icon' src={pic} alt="" />
                            ))}
                        </div>
                        <ul className="buttons">
                            <li><a href={item.githubUrl}>View Github</a></li>
                            <li><a href={item.siteUrl}>View Site</a></li>
                        </ul>
                      </div>  
                      <div className='inside-p-container-image'>
                          <img className='close-svg' onClick={() => setDiv(false)} src="/assets/close.svg" alt="" />
                          <img className='container-image' src={item.image} alt="" />
                      </div>
                      </> 
                    ))}
                  </div>

                </div>
        </div>
       
    )
}

export default Projects
