import React, {useState} from 'react';
import styled from 'styled-components';
import menu from '../Img/Icons/menu-outline.svg'
import search from '../Img/Icons/search-circle-outline.svg'


const TopNavStyle = styled.div`
    position: relative;
    width: 100%;
    height: 5vh;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    ul {
        user-select: none;
        padding: 0;
        margin: auto;
        margin-top: 0.7rem;
        display: flex;
        flex-direction: row;
        list-style: none;
        li {
            margin: auto;
            width: 2rem;

            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
        }
        #nav_icon {
            margin-right: 0;
            margin-left: 1rem;
        }
        #home {
            position: absolute;
            left: 3rem;
            width: fit-content;
            cursor: pointer;
            margin-left: 0.5rem;
            margin-right: 0;
            margin-top: 0.6rem;
        }
        #title {
            width: fit-content;
            margin: auto;
            margin-top: 0.2rem;
            font-weight: 900;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.105em;
            text-transform: uppercase;
            color: #000000;
            @media only screen and (max-width: 600px) {
                // display: none;
                font-size: 16px;
            }
        }
        #blank {
            position: absolute;
            right: 12rem;
            top: 1.1rem;
            display: ${p => p.searchToggled ? 'inherit' : 'none'};    
        }
        #search {
            width: 3.5rem;
            margin-right: 0;
            margin-left: 0;
            // @media only screen and (max-width: 600px) {
            //     margin-left: auto;
            // }
            img {
                margin-left: auto;
                margin-right: 1rem;
            }
        }
    }

    img {
        cursor: pointer;
        width: auto;
        height: 2rem;
    }
`;

const SideNavStyle = styled.div`
    position: absolute;
    z-index: 55;
    display: ${p => p.toggled ? 'inherit' : 'none'};
    border: 1px solid transparent;
    min-width; 200px;
    width: fit-content;
    padding-right: 2rem;
    height: 100vh;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    ul {
        user-select: none;
        padding: 0;
        margin: auto;
        margin-top: 0.7rem;
        display: flex;
        flex-direction: column;
        list-style: none;
        // margin-top: 4.5rem;
        li {
            cursor: pointer;
            margin-left: 2rem;
            margin-top: 1rem;
            width: fit-content;
            position: relative;

            &:after {
                content: ' ';
                position: absolute;
                top: 50%;
                left: 0;
                width: 0%;
                height: 2px;
                background: black;              
            }

            &:hover {
                &:after {
                    animation: strike 1s alternate forwards;
                }
            }

            
        }

        .active {
            &:after {
                width: 100%;
            }
        }
       
    }



    @keyframes strike{
        0%   { width : 0; }
        100% { width: 100%; }
    }
`;

const Nav = (p) => {
    const [activePage, setActivePage] = useState(0);
    const [sideNavToggled, setSideNavToggled] = useState(false);
    const [searchBarToggled, setSearchBarToggled] = useState(false);


    return(
        <div>
        <TopNavStyle searchToggled={searchBarToggled}>
            <ul>
                <li id='nav_icon' onClick={()=>setSideNavToggled(!sideNavToggled)}>
                    <img src={menu}/>
                </li>
                <li id='home' onClick={()=>{p.setActivePage('home')}}>
                    {p.activePage}
                </li>
                <li id='title'>
                    Watch Order
                </li>
                <li id='blank'>
                    <input/>
                </li>
                <li id='search' onClick={()=>setSearchBarToggled(!searchBarToggled)}>
                    <img src={search}/>
                </li>
            </ul>
        </TopNavStyle>
        <SideNavStyle toggled={sideNavToggled}>
            <ul>
                <li className={p.activePage === 'Home' ? 'active' : null} onClick={()=>{p.setActivePage('Home')}}>
                    Home
                    </li>
                <li className={p.activePage === 'Infinity Saga' ? 'active' : null} onClick={()=>{p.setActivePage('Infinity Saga')}}>
                    Marvel Infinity Saga by Release Order
                    </li>
                <li className={p.activePage === 'Infinity Saga - Chronological' ? 'active' : null} onClick={()=>{p.setActivePage('Infinity Saga - Chronological')}}>
                    Marvel Infinity Saga Chronologically
                    </li>
                <li className={p.activePage === 'Wizarding World' ? 'active' : null} onClick={()=>{p.setActivePage('Wizarding World')}}>
                    J.K Rowlings Wizarding World
                    </li>
                <li className={p.activePage === 'Skywalker Saga' ? 'active' : null} onClick={()=>{p.setActivePage('Skywalker Saga')}}>
                    Skywalker Saga
                    </li>
            </ul>
        </SideNavStyle>
        </div>
    )
}

export default Nav;