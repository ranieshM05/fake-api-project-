import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => openModal(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Modal"
        >
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <button onClick={() => {
            addToCart(selectedProduct);
            closeModal();
          }}>
            Add to Cart
          </button>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
