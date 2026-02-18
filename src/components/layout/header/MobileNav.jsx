import HeaderIcons from "./HeaderIcons";
import MobileMenuButton from "./MobileMenuButton";

const MobileNav = ({isCartOpen, isSearchOpen, isMenuOpen, setActivePanel}) => {
  return (
    <div className="flex items-center justify-around w-full">
      <HeaderIcons 
        isCartOpen={isCartOpen} 
        isSearchOpen={isSearchOpen}
        setActivePanel={setActivePanel}
      />
      
      <MobileMenuButton 
        isMenuOpen={isMenuOpen}
        setActivePanel={setActivePanel} 
      />

    </div>
  )
}

export default MobileNav;