const MobileMenuButton = ({isMenuOpen, setActivePanel}) => {
  return (
    <>
      <button 
        aria-controls="main-navigation"
        aria-label="open user menu"
        aria-expanded={isMenuOpen}
        className="h-12 w-12 rounded-full flex flex-col gap-2 justify-center items-center hover:bg-light-gray relative"
        onClick={() => setActivePanel(isMenuOpen ? null : "menu")}
      >
        <div className={`h-0.5 w-6 bg-black transition-300 ${isMenuOpen && "absolute rotate-45"}`}></div>
        <div className={`h-0.5 w-6 bg-black transition-300 ${isMenuOpen && "absolute -rotate-45"}`}></div>
      </button>
    </>
  )
}

export default MobileMenuButton;