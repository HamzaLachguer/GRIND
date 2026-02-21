import { useEffect, useState } from "react";
import Filters from "../shop/sections/Filters";
import Header from "../../components/layout/header/Header"

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? "hidden" : "";
    return () => document.body.style.overflow = "";
  }, [isFilterOpen])

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-32 px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          {/* <ul className="flex gap-1 text-sm uppercase text-dark-gray font-geist font-medium">
            <li className="">
              <a href="">shop</a>
            </li>
            <li className="">
              <a href="">running</a>
            </li>
          </ul> */}

          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl">Shop all</h1>

          <div className="flex items-center justify-between bg-white py-4 sticky top-20 w-full">
            <button
              type="button"
              className="px-5 h-10 flex items-center gap-2 capitalize font-medium border rounded-full hover:bg-light-gray"
              aria-label="show product filters"
              aria-controls="filter-grid"
              aria-pressed={isFilterOpen}
              onClick={() => setIsFilterOpen(true)}
            >
              <i className="ri-equalizer-2-line text-lg"></i>
              <span>filter & sort</span>
            </button>

            <p className="uppercase font-geist text-sm text-dark-gray">570 Results</p>
          </div>

          <div>
            <Filters state={isFilterOpen} setState={setIsFilterOpen} />

            {/* Product GRID */}
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {/* {products.map((pdt) => (
                <li key={pdt.id}>
                  <ProductCard  product={pdt} />
                </li>
              ))} */}
            </ul>
          </div>
        </div>


      </main>
    </>
  )
}

export default Shop;



// change the nav links to: -shop- -sale- -brand- -journal-