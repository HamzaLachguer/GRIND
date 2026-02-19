import clsx from "clsx"

const SubNav = ({state, setState, resetUI}) => {
  

  return (
    <div 
      aria-label="cart page"
      aria-hidden={state}
      className={clsx(
        "fixed z-20 size-full top-0 pt-0 right-0 flex justify-end",
        state ? "pointer-events-auto" : "pointer-events-none"
      )}
      onClick={() => setState(false)}
    >

      <div
        className="w-full h-screen lg:max-w-[846px] bg-white px-5 lg:px-12 py-10 lg:pt-25 overflow-auto flex flex-col shadow-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        

      </div>
      

    </div>
  )
}

export default SubNav