import React from 'react'
import {ExpandMoreOutlined} from '@material-ui/icons'
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/500px_logo_2016.svg" alt=""/>
                <div className="header__option">
                Discover
                <ExpandMoreOutlined/>
                </div>
                <div className="header__option">
                Licensing
                <ExpandMoreOutlined/>
                </div>
                <div className="header__option">
                Memberships
                </div>
                <div className="header__option">
                Quests
                </div>
                <div className="header__option">
                Creator Stories
                </div>
                <div className="header__option">
                Blog
                </div>
            </div>
            <div className="header__right">
            <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search 500px" type="text"/>
                </div>                    
                <div className="header__option">
                Log In
                </div>
                <div className="header__option">
                Sign up
                </div>


            </div>
        </div>
    )
}

export default Header
