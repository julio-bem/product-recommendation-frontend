import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

function RecommendationList({ recommendations }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (recommendations.length === 0) {
    return (
      <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-lg shadow-inner mt-4">
        <p className="font-semibold">Nenhuma recomendação encontrada.</p>
        <p className="text-sm">
          Por favor, ajuste suas preferências no formulário para obter
          resultados.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-2">
        {recommendations.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default RecommendationList;
