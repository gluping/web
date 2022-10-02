import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
function Header()  {

    return (
      <div className='header'> 
      <IconButton><PersonIcon className='header__icon' fontSize='large'/> </IconButton>
        <img 
        className='header__logo'
        src="https://raw.githubusercontent.com/gluping/Gluping_website/master/proapp/images/logos/logo-app.png" 
        alt="logo" /> 
        <IconButton><ForumIcon  className='header__icon' fontSize='large'/></IconButton><ForumIcon  className='header__icon' fontSize='large'/>
      </div>
    )
  }

  export default Header
