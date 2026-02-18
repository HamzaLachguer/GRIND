import { NavLink } from "react-router-dom";

import { navLinks, supportLinks } from "../../../../lib/contants";



const MobileMenu = ({isMenuOpen}) => {
  return (
    <div 
        id="main-navigation"
        className={`absolute h-[calc(100vh-140px)] w-screen bg-white ${isMenuOpen? "flex flex-col justify-between" : "hidden"} top-20 left-0 px-5 py-10 sm:px-8 lg:hidden`}
        aria-hidden={!isMenuOpen}
      >
        <nav>
          <ul className="text-[26px] font-semibold flex items-start flex-col">
            {navLinks.map(link => (
              <li key={link.id}>
                <NavLink 
                  className="nav-link" 
                  to={link.href}
                >{link.label}</NavLink></li>
              )
            )}
          </ul>
        </nav>

        <nav aria-label="support">
          <ul className="text-xl font-medium flex flex-col items-start gap-1">
            {supportLinks.map(link => (
              <li key={link.label}>
                <NavLink 
                  className="nav-link" 
                  to={link.path}
                >{link.label}</NavLink>
              </li>
              )
            )}
          </ul>
        </nav>      
        
      </div>
  )
}

export default MobileMenu;