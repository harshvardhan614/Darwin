import {React,useState} from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./footer.css"

export default function Footer() {
  const [active, setActive] = useState();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <footer className="px-6 w-full flex items-center static bottom-0 py-5 z-20 mt-[300px]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
       
        {/* mobile navbar  */}
        <div className={`md:block ${isMobileMenuOpen? 'flex w-full absolute left-0 opacity-100 z-9999999' : 'hidden'}`}>


          {/* <ul className='list-none hidden sm:flex flex-row gap-10'> */}
          <ul className={`list-none md:flex gap-10 md:space-x-4 ${isMobileMenuOpen ? 'flex flex-col mt-[1rem] w-[100%] my-[0.1rem] gap-5 py-2 px-4 bg-white absolute bottom-7 animation-slide-up1' : 'animation-slide-down1'} `}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-black" : "text-black"
                } hover:text-danger text-[18px]  cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>




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


        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={toggleMobileMenu}
          >
            {!isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>


      </div>
    </footer>
  )
}
