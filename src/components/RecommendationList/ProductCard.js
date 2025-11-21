import React from 'react';

function ProductCard({ product, onViewDetails }) {
  const { name, category } = product;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-blue-600 flex flex-col h-full">
      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-150"
        onClick={() => onViewDetails(product)}
      >
        Ver Detalhes
      </button>
    </div>
  );
}

export default ProductCard;
