import {React,useState} from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";


export default function Footer() {
  const [active, setActive] = useState();

  const navLinks = [
    {
      id: "top",
      title: "TOP",
    },
    {
      id: "whatWeDo",
      title: "WHAT WE DO",
    },
    {
      id: "about",
      title: "ABOUT US",
    },
    {
      id: "portfolio",
      title: "PORTFOLIO",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];

  return (
    <nav className="px-6 w-full flex items-center py-5 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
       
        {/* mobile navbar  */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-secondary" : "text-black"
              } hover:text-danger text-[18px]  cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
         {/* main navBar logo  */}
         <Link
          to="/"
          className="flex items-center gap-20"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className="h-[30px] w-auto object-contain cursor-pointer"/>
        </Link>
      </div>
    </nav>
  )
}
