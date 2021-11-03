import React from 'react';
import './projectsList.scss';

const ProjectsList = ({id, name, active, setSelected}) => {
    return (
        <li className={active ? 'li-item active' : 'li-item'} onClick={() => setSelected(id)}>
            {name}
        </li>
    )
}

export default ProjectsList;
