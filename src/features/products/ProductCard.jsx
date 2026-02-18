import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

// type ProductCardProps = {
//   product: Product;
//   showColors?: boolean;
// }

const ProductCard = ({product, showColors = true, resetUI}) => {
  const [color, setColor] = useState(0);
  
  return (
      <Link 
        to={`/product/${product.id}`}
        className="flex flex-col gap-1 cursor-pointer"
        onClick={resetUI}
      >
        <div className="w-full overflow-hidden">
          <img 
            className="w-full object-center object-cover aspect-square" 
            src={product.variants[color].color.thumbnail} alt={product.title} 
          />
        </div>
        
        <ul className="grid grid-cols-6 lg:grid-cols-5 gap-1 px-2">
          {showColors && product.variants.length > 1 && (
            product.variants.slice(0, 5).map((variant, index) => {

              return (
                <li 
                  className="grid-center"
                  key={variant.color.name}
                >
                  <button 
                    type="button"
                    className={clsx("overflow-hidden", color === index && "border-b border-black")}
                    data-product-id={variant.id}
                    data-variant-index={index}
                    aria-label={`product color: ${variant.color.name}`}
                    aria-pressed={color === index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setColor(index);
                    }}
                  >
                    <img 
                      className="size-full aspect-square object-center object-cover"
                      src={variant.color.thumbnail} alt={product.title} 
                    />
                  </button>
                </li>
              )
            }))
          }
        </ul>

        <div className="px-2 py-3 flex flex-col gap-1 text-sm leading-normal">
          <p className="font-semibold">{product.title}</p>
          <p className="font-normal capitalize">{product.gender} – {product.type} {product.category}</p>
          <p className="text-sm font-geist">£{product.pricing.basePrice.toFixed(2)}</p>
        </div>
      </Link>
  )
}

export default ProductCard;