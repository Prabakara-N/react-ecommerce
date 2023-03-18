import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// cart conetext
import { CartContext } from "../contexts/CartContext";
// product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the Id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure products
  const { title, price, description, image } = product;
  return (
    <section className="pt-28 pb-12 lg:py-32 h-screen flex bg-slate-300">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img
              className="max-w-[200px] h-[200px] lg:max-w-sm md:h-[350px] p-img"
              src={image}
              alt={title}
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] font-medium mb-2 max-w-[450px] md:text-[25px] mx-auto lg:mx-0">
              {title}
            </h2>
            <div>
              <div className="text-xl font-medium mb-6 bg-slate-900 text-white px-5 py-2 rounded-md d-in inline-block">
                {" "}
                $ {price}
              </div>
            </div>
            <p className="mb-8">{description}</p>
            <button
              className="bg-gray-600 py-4 px-8 text-white rounded-md hover:bg-gray-800 transition-all duration-300"
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
