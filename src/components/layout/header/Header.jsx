import { useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import Search from "./Panels/Serach";
import CartPage from "./Panels/CartPage";
import MobileMenu from "./Panels/MobileMenu";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "../../ui/Logo";

const Header = () => {
  const [activePanel, setActivePanel] = useState(null);

  const isMenuOpen = activePanel === "menu";
  const isCartOpen = activePanel === "cart";
  const isSearchOpen = activePanel === "search";


  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activePanel])

  const resetUI = () => setActivePanel(null)

  return (
    <header className={clsx("mb-2 fixed z-50 top-0 w-full left-0 pl-5 md:pl-8 lg:pl-12 bg-white"
    )}>
      {/* for Desktop */}
      <div className="h-20 flex items-center justify-between">
        <NavLink to="/" className="h-16 grid-center" aria-label="home">
          <Logo />
        </NavLink>

        {/* Desktop nav */}
        <DesktopNav 
          isCartOpen={isCartOpen} 
          isSearchOpen={isSearchOpen} 
          setActivePanel={setActivePanel} 
        />
        
      </div>
      {/* Mobile Nav */}

      <div className="fixed flex items-center bottom-0 left-0 w-full z-0 bg-white h-15.5 lg:hidden">

        <MobileNav 
          isCartOpen={isCartOpen} 
          isSearchOpen={isSearchOpen}
          
          isMenuOpen={isMenuOpen} 
          setActivePanel={setActivePanel} 
        />

      </div>

      {/* Mobile main navigation */}
      <MobileMenu isMenuOpen={isMenuOpen} />
      

      <Search state={isSearchOpen} setState={setActivePanel} />
      <CartPage state={isCartOpen} setState={setActivePanel} resetUI={resetUI} />
      
    </header>
  )
}

export default Header;