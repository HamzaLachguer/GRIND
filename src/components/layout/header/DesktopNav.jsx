import clsx from "clsx";
import { NavLink } from "react-router-dom";

import HeaderIcons from "./HeaderIcons";

import { navLinks } from "../../../lib/contants";

const DesktopNav = ({isCartOpen, isSearchOpen, setActivePanel}) => {
  return (
      <div className={clsx(
        "hidden lg:flex justify-between items-center w-[846px] h-20 px-5 md:px-8 lg:px-12",
        (isSearchOpen || isCartOpen) && "absolute z-50 right-0 bg-white"
        )}
      >
      <nav>
        <ul className="text-xl font-semibold flex items-center gap-8">
          {navLinks.map(link => (
              <li key={link.id}>
                <NavLink 
                  className="nav-link" 
                  to={link.path}
                >{link.title}</NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <HeaderIcons 
          isCartOpen={isCartOpen} 
          isSearchOpen={isSearchOpen}
          setActivePanel={setActivePanel}
        />
      </div>
    </div>
  )
}

export default DesktopNav;