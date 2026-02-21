import clsx from "clsx";
import { useRef, useState } from "react";

import { filtersList, sortOptions } from "../../../lib/contants";
import useShowPanel from "../../../components/layout/header/hooks/useShowPanel";

const Filters = ({state, setState}) => {
  const [filters, setFilters] = useState({
    sort: "featured",
    gender: new Set(),
    productType: new Set(),
    activity: new Set()
  })

  const drawerRef = useRef(null);
  const containerRef = useRef(null);

  const changeSort = (value) => {
    setFilters((prev) => ({
      ...prev,
      sort: value
    }))
  }

  const toggleFilters = (key, value) => {
    setFilters((prev) => {
      const next = new Set(prev[key]);
      next.has(value) ? next.delete(value) : next.add(value)

      return {
        ...prev,
        [key]: next
      }
      } 
    )
  }

  const removeFilter = (value) => {
    setFilters((prev) => {
      const update = (key) => {
        const next = new Set(prev[key]);
        next.delete(value);
        return next;
      };

      return {
        ...prev,
        gender: update("gender"),
        productType: update("productType"),
        activity: update("activity"),
      }
    })
  }

  const selectedFilters = [
    ...filters.gender,
    ...filters.productType,
    ...filters.activity,
  ];


  const clearFilters = () => {
    setFilters({
      sort: "featured",
      gender: new Set(),
      productType: new Set(),
      activity: new Set()
    })
  }

  return (
    <div
      ref={containerRef}
      id="filter-grid"
      className={clsx(
        "fixed z-50 top-0 left-0 size-full justify-end",
        state ? "flex" : "hidden"
      )}
      aria-hidden={!state}
      aria-label="filter & sort products"
      onClick={() => setState(false)}
    >
      <div 
        ref={drawerRef}
        className="px-5 md:px-8 lg:px-12 bg-white h-screen w-full overflow-auto lg:max-w-211.5 shadow-left"
        onClick={(e) => e.stopPropagation()}
      >

        <div 
          className="flex items-center justify-between px-5 md:px-8 lg:px-12 py-3 fixed top-0 right-0 w-full lg:max-w-211.5 bg-white"
        >
          <p className="text-sm text-dark-gray font-geist uppercase font-medium">Filter & sort</p>

          <button
            type="button"
            className="h-10 w-10 rounded-full bg-light-gray hover:bg-dark-gray grid-center"
            aria-label="close filter"
            aria-controls="filter-grid"
            aria-pressed={state}
            onClick={() => setState(false)}
          ><i className="ri-close-large-fill"></i></button>
        </div>

        <div className="mt-16 mb-22">
          {/* Implied Filters */}
          {
            selectedFilters.length > 0 && (
            <div className="flex flex-col gap-4 pb-5 border-b border-dark-gray">
              <h3 className="font-semibold md:text-lg">Applied filters</h3>
              <ul className="flex gap-2 flex-wrap">
                {selectedFilters.map((value) => (
                  <li 
                    key={value}
                    role="button"
                    className="px-4 flex items-center gap-2 border border-dark-gray hover:border-black rounded-full capitalize h-10 cursor-pointer font-medium"
                    onClick={() => removeFilter(value)}
                  >
                    <span>{value.replace("_", " ")}</span>
                    <i className="ri-close-fill text-lg"></i>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="font-geist text-sm uppercase font-medium hover:bg-black hover:text-white w-fit px-1 my-2.5"
                aria-label="clear filters"
                onClick={() => clearFilters()}
              >Clear all</button>
            </div>)
          }

          {/* Filters & sort */}
          <div className="flex flex-col gap-12 py-4">
            <div className="flex flex-col gap-4">
                <h4 className="font-semibold">Sort by</h4>

                <ul 
                  className="flex flex-col gap-2"
                  aria-label="sort products"
                >
                  {sortOptions.map((opt) => {
                    const active = filters.sort === opt.value;
                    return (
                      <li 
                        key={opt.value}
                        role="button"
                        className="flex items-center gap-3 cursor-pointer font-medium"
                        aria-label={`sort by ${opt.value}`}
                        aria-pressed={active}
                        onClick={() => changeSort(opt.value)}
                      >
                        <span className="h-5 w-5 border rounded-full flex-center">
                          {active && <span className="h-3 w-3 bg-black rounded-full" />}
                        </span>
                        <span className="capitalize">{opt.label}</span>
                      </li>
                  )})}
                </ul>
              </div>

            {filtersList.map((filter) => (
              <div
                key={filter.id}
                className="flex flex-col gap-4">
                <h4 className="font-semibold">{filter.label}</h4>

                <ul 
                  className="flex flex-col gap-2"
                  aria-label={`filter based on ${filter.label}`}
                >
                  {filter.options.map((opt) => {
                    const active = filters[filter.id].has(opt.value)
                    return (
                      <li 
                        key={opt.value}
                      >
                        <button
                          role="button"
                          className="flex items-center gap-3 cursor-pointer font-medium"
                          aria-label={`Filter by ${opt.value}`}
                          aria-pressed={active}
                          onClick={() => toggleFilters(filter.id, opt.value)}
                        >
                          <span className={clsx("h-5 w-5 border flex-center text-lg",
                            active ? "bg-black" : "bg-white"
                          )}>
                            <i className="ri-check-line text-white"></i>
                          </span>
                          <span className="capitalize">{opt.label}</span>
                        </button>
                      </li>
                  )})}
                </ul>
              </div>
              ))
            }
          </div>
        </div>

        <div
          className="fixed grid-center right-0 bottom-0 w-full lg:max-w-[846px] leading-0 p-5 bg-white"
        >
          <button
            type="button"
            className="capitalize w-full md:max-w-80 bg-black hover:bg-md-black rounded-full h-12 grid-center text-white"
          >view results(87)</button>
        </div>

      </div>
    </div>
  )
}

export default Filters;