import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { Link , useHistory} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Header({backButton})  {
  const history = useHistory();

    return (
      <div className='header'> 
      {backButton? (
        <IconButton onClick={() => history.replace(backButton)} >    
              <ArrowBackIosIcon fontSize='large' className=''/>
        </IconButton>
        
      ):  (
        <IconButton><PersonIcon className='header__icon' fontSize='large'/> </IconButton>
      )}

      
        <Link to='/'><img 
        className='header__logo'
        src="https://raw.githubusercontent.com/gluping/Gluping_website/master/proapp/images/logos/logo-app.png" 
        alt="logo" /> </Link>
        
        
        <Link to="/chat"><IconButton><ForumIcon  className='header__icon' fontSize='large'/></IconButton></Link>
      </div>
    )
  }

  export default Header
