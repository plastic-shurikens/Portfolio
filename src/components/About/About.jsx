import './about.scss'

const About = ({setMenuOpen}) => {
    return (
        <div className="about" id='about' onClick={()=>setMenuOpen(false)}>
            <div className='container'>
                    <h1>About Me</h1>
                    <h2>Web Developer / Designer</h2>
                    <img className='image' src="assets/me.jpg" alt="" />
                     <p>Hi, my name is Ismail Dahri, welcome to my portfolio, I'm a developer who's passionate about building interactive web apps.</p>
                     <p>I use react (Javascript framework), Sass (CSS preprocessor) and Material UI (CSS And React library) mainly for building the UI And NodeJs, Express and Mongodb for the backend</p>    
                    <div className="stack">
                        <img className='icon' src="assets/Mui.png" alt="Material-UI" />
                        <img className='icon' src="assets/Sass.png" alt="Sass" />
                        <img className='icon' src="assets/React.png" alt="React" />
                        <img className='icon' src="assets/MongoDB.png" alt="MongoDB" />
                        <img className='icon' src="assets/Nodejs2.png" alt="NodeJs" />
                     </div>
            </div>
        </div>
    )
}

export default About
