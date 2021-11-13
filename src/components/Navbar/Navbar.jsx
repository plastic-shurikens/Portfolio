import './navbar.scss';

const Navbar = ({menuOpen, setMenuOpen}) => {
  
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className='wrapper'>
            <div className="title">
                <h1 className="nav-title"><a href='#intro'>Ismail.</a></h1>
            </div>
                <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
