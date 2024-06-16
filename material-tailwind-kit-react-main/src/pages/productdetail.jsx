import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { Footer } from "@/widgets/layout";
import { useCart } from './CartContext';

export function ProductDetail({ product }) {
  const { category, title } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const navigationElement = document.getElementById('navigation');
    if (navigationElement) {
      const yOffset = -100;
      const y = navigationElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  }, []);

  const handleAddToCart = () => {
    if (selectedSize) {
      const itemToAdd = {
        id: product.id,
        thumbnail: product.img,
        category: product.category,
        product: product.title,
        size: selectedSize,
        description: product.description,
        quantity: quantity,
        subtotal: product.description * quantity,
      };
      
      // Use addToCart function from context to add item to cart
      addToCart(itemToAdd);
      alert('Product added to cart!');
    } else {
      alert('Please select a size before adding to cart.');
    }
  };

  const { rating, description, img, detail, id} = product;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} className="w-5 h-5 text-black-500 text-4xl" />);
    }
    return stars;
  };

  const handleQuantityChange = (e) => {
    const input = e.target.value.trim();
    const newQuantity = input === '' ? 0 : parseInt(input);

    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = Math.max(quantity, 1) * product.description;
  const formattedSubtotal = subtotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

  return (
    <div>
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto my-12">
        <nav className="text-zinc-500 text-sm mb-6">
          <Link to="/home">Home</Link> / {category} / {title}
        </nav>
        <div className="flex items-center justify-between bg-zinc-100 p-4 rounded-lg">
          <div className="flex items-center" id="navigation">
            <img src={product.img} width={200} alt={title} className="mr-5 rounded" />
            <div>
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <div className="flex items-center mb-4">{renderStars()}</div>
              <div className="text-xl font-semibold">
                {product.description.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
              </div>
              <div className="mb-4">
                <label htmlFor="size" className="block text-lg font-medium mb-1" style={{ marginTop: '10px' }}>
                  Select shoe size:
                </label>
                <div className="flex gap-2">
                  {[37, 38, 39, 40, 41, 42].map((size) => (
                    <button
                      key={size}
                      className={`border px-3 py-2 rounded text-base font-medium ${
                        selectedSize === size ? 'border-blue-500 text-blue-500' : 'border-zinc-300 text-black'
                      } hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-200`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Detail:</h2>
          <p className="text-zinc-600 dark:text-zinc-400">{product.detail}</p>
        </div>

        <div className="flex items-center mb-4">
          <button
            className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
            style={{ backgroundColor: '#413F3F' }}
            onClick={decreaseQuantity}
          >
            -
          </button>
          <input
            type="text"
            className="text-center w-10 mx-2 h-8 bg-gray-200 rounded-lg"
            value={quantity === 0 ? '' : quantity}
            onChange={handleQuantityChange}
          />
          <button
            className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
            style={{ backgroundColor: '#413F3F' }}
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        <div className="text-lg font-semibold mb-4">Subtotal: <br/>{formattedSubtotal}</div>

        <div className="flex gap-4">
          <button className="text-center lg:w-2/10 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" style={{ height: '45px' }}>
            Buy Directly
          </button>
          <button
            className="text-center lg:w-2/10 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.number.isRequired,
    detail: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetail;
