import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home'
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; function Sidenav() {
    return (
        <div className='sidenav'>
            <img className='sidenav__logo' src="https://i.pinimg.com/originals/c6/13/1e/c6131e0206d37d4f4146d53c6e3d16f3.jpg" alt=""></img>


            <div className='sidenav__buttons'>

                <button className='sidenav__button'>
                    <HomeIcon />
                    <span>Home</span>
                </button>



                <button className='sidenav__button'>
                    <SearchIcon />
                    <span>Search</span>
                </button>


                <button className='sidenav__button'>
                    <ExploreIcon />
                    <span>Explore</span>
                </button>




                <button className='sidenav__button'>
                    <ChatIcon />
                    <span>Messages</span>
                </button>




                <button className='sidenav__button'>
                    <FavoriteBorderIcon />
                    <span>Liked</span>

                </button>




                <button className='sidenav__button'>
                    <AddCircleOutlineIcon />
                    <span>New Post</span>
                </button>


            </div>
        </div>
    )
}

export default Sidenav