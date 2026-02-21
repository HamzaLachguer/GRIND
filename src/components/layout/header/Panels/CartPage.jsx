// import CartItem from "../../CartItem";
import clsx from "clsx";
// import ProductSlider from "../../Product/ProductSlider";
import { paymentMethods } from "../../../../lib/contants";
import { useRef } from "react";
import useShowPanel from "../hooks/useShowPanel";


const CartPage = ({state, setState, resetUI}) => {
  const containerRef = useRef(null);
  const drawerRef = useRef(null);

  useShowPanel(state, containerRef, drawerRef)

  return (
    <div 
      ref={containerRef}
      aria-label="cart page"
      aria-hidden={state}
      className={clsx(
        "fixed z-20 size-full top-0 pt-0 right-0 flex justify-end",
        state ? "pointer-events-auto" : "pointer-events-none"
      )}
      onClick={() => setState(false)}
    >

      <div 
        ref={drawerRef}
        className="w-full h-screen lg:max-w-[846px] bg-white px-5 md:px-8 lg:px-10 py-10 lg:pt-25 overflow-auto flex flex-col shadow-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">Your bag (0)</h2>

          <ul className="grid gap-10">
            {/* <CartItem resetUI={resetUI} /> */}
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          <h3 className="font-medium text-lg">Available payment methods</h3>
          <ul className="flex gap-2 flex-wrap">
            {paymentMethods.map((method) => (
              <li key={method.label}>
                <img src={method.logo} alt={method.label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          <h3 className="font-semibold text-xl">Our recommended products</h3>
          
          {/* <ProductSlider resetUI={resetUI} /> */}
        </div>

      </div>

      {/* Close button */}
      

    </div>
  )
}

export default CartPage;