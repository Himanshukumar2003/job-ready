import React from 'react';
import { assests } from '../../assets/assets';
import { CgMenuRight } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const NavbarUl = [
        {
            id: 1,
            Menu: "Home",
            MenuLink:"/"
        },
        {
            id: 2,
            Menu: "All Courses",
            MenuLink:"/courses"
        },
        {
            id: 3,
            Menu: "How it Works",
            MenuLink:""
        },
        {
            id: 4,
            Menu: "About",
            MenuLink:"/about"
        },
        {
            id: 5,
            Menu: "Portfolio",
            MenuLink:""
        },
        {
            id: 6,
            Menu: "Gallery",
            MenuLink:""
        },
        {
            id: 7,
            Menu: "Contact",
            MenuLink:""
        }
    ]

    return (
        <div className="-bg--theme-light py-3">
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div><img className='w-40' src={assests.logo} alt="" /></div>
                    <ul className='hidden xl:flex items-center gap-x-5'>
                        {NavbarUl.map((val)=>(
                            <li key={val.id}><a className='-font--theme-light -text--[19px] -text--theme-text-primary' onClick={()=>navigate(`${val.MenuLink}`)}>{val.Menu}</a></li>
                        ))}
                    </ul>
                    <div className='block lg:hidden'><CgMenuRight className='-text--theme-sm -text--theme-text-primary'/></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;