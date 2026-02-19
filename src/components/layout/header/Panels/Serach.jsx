import ProductCard from "../../../../features/products/ProductCard";
//import QuestionSlider from "../../QuestionSlider";
import clsx from "clsx";
import { useRef } from "react";
import useShowPanel from "../hooks/useShowPanel";
import { keywords } from "../../../../lib/contants";

const TEST_PDT = {
    id: "0053688",
    brand: "ON RUNNING",
    collection: "Populaire",
    gender: "men",
    title: "Cloudtilt",
    description: [
      "Your lightweight, ultra-cushioned hero. Precision-engineered for lasting comfort during all-day city adventures.",
    ],
    category: "shoes",
    type: "running",

    pricing: {
      currency: "MAD",
      basePrice: 990,
    },

    sale: {
      active: false,
      discountPercent: null, // optional
    },
    variants: [
      {
        id: "0053688",
        color: {
          name: "Eclipse | Black",
          code: "",
          thumbnail:
            "https://images.ctfassets.net/hnk2vsx53n6l/3dUFabkzmZu7LWkQh5OqVz/71f3dfb52e6e53da444613e60623be21/c2137ab0c9c77cd6680c757c458369c42b6b5a87.png?w=616&h=616&fm=avif&f=center&fit=fill&q=80",
        },
        gallery: [
          "https://images.ctfassets.net/hnk2vsx53n6l/3dUFabkzmZu7LWkQh5OqVz/71f3dfb52e6e53da444613e60623be21/c2137ab0c9c77cd6680c757c458369c42b6b5a87.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/76JIGzdSxVG2Vnfi26vQV/2f10f99a2f70b54a529313d44a35fec3/d60155a6f9acb3469c0a21b30d8c6be487c12f92.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/7t5bihqqMqRj0GnQKOHnec/27ecf91c9d191440848d01c8aec59118/d7b2643a1717f122286d9776224f2c1705b8d3a1.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/52sLqEyqh5w4CIwFpqgLtz/690b3447eb275bab50e2ca344f4f387b/ff9a60299b3b7fa5903b0345ae362c6ba4afead7.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/60Ig05nirpcbjwI1byzKgv/7f6e3d36b0167921188bebd8ef74bb0c/b6882f928bae5426a24030d26536e3e3c556f607.png?w=800&h=800&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/6sgAsnBvKXvSc5WCBC8YXJ/6dfef523c546b632303519a67de1945f/9c2a9fe84fff5caa68b2b5db0c7521122b4d9d3d.png?w=800&h=800&fm=avif&f=center&fit=fill&q=80",
        ],
        available: true,
      },
      {
        id: "8738920",
        color: {
          name: "Caper | Ghost",
          code: "",
          thumbnail:
            "https://images.ctfassets.net/hnk2vsx53n6l/1qgYS1PKQFvPiplD5lNmU3/411a97356345522e517fd8677e6364e5/b8c157dcefc0222eae6e5e12815b76d2e6f134f4.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        },
        gallery: [
          "https://images.ctfassets.net/hnk2vsx53n6l/1qgYS1PKQFvPiplD5lNmU3/411a97356345522e517fd8677e6364e5/b8c157dcefc0222eae6e5e12815b76d2e6f134f4.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/6lAEaKxJgaPaV9vKHyDgOG/105ac5037efcb80ab1f7635fcacbe1d2/8e3bfcb2e07ed6e665f86bb4647b85dfe615e5c7.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/hUHOS4UACQ4xXaACIuAfp/8d251a2d49d411788885a75461fd13df/333209277e2bb888a3dd446537b0158221bebffd.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/6WtOdKbyUOx5sjXpUe1XZ3/515ac695d7d3be0573e682923b374b60/95d298b8a0a947422ea84ebaec0087677abec835.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/2fVgMrxrragVzVwek1sAxh/a711e8b34a52a8b25baccfe5a4f566a8/50fcde0baafda0f4571194aef75f0768a740e5e7.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/uTfa8pZvvCjvPurcdUpF8/20819a78d6dce7560a96c0f273134256/dba711895cd698f85c7e6659e647c70035093442.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        ],
        available: true,
      },
      {
        id: "7630284",
        color: {
          name: "Cinder | Ash",
          code: "",
          thumbnail:
            "https://images.ctfassets.net/hnk2vsx53n6l/6h8RGiqllFf1m01NVIYwyp/332cd2f483e8474135a9999adc05a1b0/737bc4d20e0b8386144bf18e4c6c6a7fc6bf7c57.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        },
        gallery: [
          "https://images.ctfassets.net/hnk2vsx53n6l/6h8RGiqllFf1m01NVIYwyp/332cd2f483e8474135a9999adc05a1b0/737bc4d20e0b8386144bf18e4c6c6a7fc6bf7c57.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/TfFzXjz4DwcziiNbgszfb/f7f82bbda94d6314f193a2ced059e757/ac3548a26ba2a0026a0123429a60c9b4522d3384.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/77M4HOaRTPbfWcTsuJRgt4/c35911ca5a7456d119d4432529d053ec/03cee1eca40465663e67e5a6bed89283e5c35489.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/1c4TDDiM0kGtZdRlRxBo9x/de448414d752d52087b69ff45b56fdbc/5471b2470ecb6990b6870f4d1999b898cc72dbcf.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/2in6uS3hD4O6Ns9ioNSiq3/542c1d1dbf978e0c2507f86ecacc1cb5/ddba73d3c45b888e84d4925ada465234166bfc3c.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/7cW9dwlXqiyg046qYdaImq/7b485e189b970bad724acf0425f34c55/8e47e566ae679d0d0fd7eafc9ca71d7885ed4e14.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        ],
        available: true,
      },
      {
        id: "8154801",
        color: {
          name: "Pearl | Ice",
          code: "",
          thumbnail:
            "https://images.ctfassets.net/hnk2vsx53n6l/73TVCrxTKTaHJC45e79xOj/6412fc96392830177d0b870df4db576f/36438b1ff6bded511e9fcdc31297d9e836ede5ef.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        },
        gallery: [
          "https://images.ctfassets.net/hnk2vsx53n6l/73TVCrxTKTaHJC45e79xOj/6412fc96392830177d0b870df4db576f/36438b1ff6bded511e9fcdc31297d9e836ede5ef.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/7aThRnuBSybPGl5ZtvlCDw/25c361afc3302351ebdbb5509e07895c/35564f3180f3c0321e7f613c71c0aff076e07708.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/Wqbv1DCh5UgkVnstDX2Hc/31162178238af30731f2a26b7edfee7c/9a913b2a35a70dec87bad4cf61fd2f0bf9620c32.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/pd23zIfItwoowCDKT29Ue/ce135c5bb373eaf4536893c1e827a25f/47154680e13ae0f3707bde283e26a4b7162df4d5.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/1Mxp6Cjrs29nmgydPDwXig/c54908163ed5195234e1e0ec50173a32/7bf8b6e178b78a5c398f4398ff5450cbb96214f6.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
          "https://images.ctfassets.net/hnk2vsx53n6l/3ij1g5QQVOI1kwbWAfg8sO/58f21b696efa59583b2d91735f736944/fb3b96a626a2dacb1b94a16180d8aca3c09b6275.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80",
        ],
        available: true,
      },
    ],
  }

const Search = ({state, setState}) => {
  const containerRef = useRef(null);
  const drawerRef = useRef(null);

  useShowPanel(state, containerRef, drawerRef);

  return (
    <div 
      ref={containerRef}
      aria-label="search containner"
      aria-hidden={state}
      className={clsx(
        "fixed size-full z-40 top-0 pt-0 right-0 flex justify-end",
        state ? "pointer-events-auto" : "pointer-events-none"
      )}
      onClick={() => setState(false)}
    >

      <div 
        ref={drawerRef}
        className="w-full h-screen lg:max-w-[846px] bg-white px-5 py-10 lg:pt-25 overflow-auto flex flex-col shadow-left"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="relative" action="" method="post">
          <input 
            className="h-16 w-full px-14 bg-light-gray hover:bg-[#f5f5f550] border border-dark-gray placeholder:text-dark-gray placeholder:font-medium focus:outline"
            type="text" 
            placeholder="Search for products & FAQs" 
          />

          <div className="h-16 w-14 absolute left-0 top-0 grid-center text-xl text-dark-gray">
            <i className="ri-search-line" aria-hidden="true"></i>
          </div>
        </form>

        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize mb-4 mt-6">Suggested searches</h2>
          
          <ul className="flex gap-2 flex-wrap">
            {keywords.map((keyword) => (
              <li 
                key={keyword}
                role="button"
                className="px-4 h-10 grid-center cursor-pointer border border-dark-gray hover:border-md-black rounded-full"
              >{keyword}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize mb-4 mt-6">products</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 pb-8">
            <li>
              <ProductCard product={TEST_PDT} showColors={false} />
            </li>
          </ul>

          <div className="grid-center mb-8">
            <button className="primary-btn">Show more</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-2xl">FAQs</h2>
            <a 
              href="#"
              className="font-geist font-medium uppercase border-b hover:text-md-black"
            >Show all</a>
          </div>

          <div className="w-full overflow-hidden">
            {/* <QuestionSlider /> */}
          </div>
        </div>
      </div>

      {/* Close button */}
      <button 
        type="button"
        aria-label="close search"
        aria-hidden={state}
        className={clsx(
          "absolute bottom-5 right-5 items-center justify-center text-xl h-12 w-12 bg-black rounded-full text-white lg:hidden",
          state ? "flex" : "hidden"
        )}
        onClick={() => setState(false)}
      >
        <i className="ri-close-large-fill" aria-hidden="true"></i>
      </button>

    </div>
  )
}

export default Search;