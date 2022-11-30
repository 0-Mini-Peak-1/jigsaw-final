import logo from '../images/logowhite.png';
import logowhite from '../images/logo.png';

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  }

  return (
    <nav> 
        <div className="logo-container">
            <img className="logo" src={minimal ? logo : logowhite} />
        </div>

        {!authToken && !minimal && <button 
            onClick={handleClick}
            className="nav-button"
            disabled={showModal}
          >Log in</button>} 

    </nav>
  )
}

export default Nav
