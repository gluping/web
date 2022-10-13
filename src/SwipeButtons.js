import React from 'react'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import "./SwipeButtons.css"
const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <IconButton><ReplayIcon fontSize='large'/></IconButton>
      
      <IconButton> <CloseIcon fontSize='large'/></IconButton>
      <IconButton>  <FavoriteIcon fontSize='large'/></IconButton>
      <IconButton>  <FlashOnIcon fontSize='large'/></IconButton>
    
    </div>
  )
}

export default SwipeButtons
