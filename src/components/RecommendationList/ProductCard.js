import React from 'react';

function ProductCard({ product }) {
  const { name, category, preferences, features } = product;

  const renderList = (items, title) => {
    if (!items || items.length === 0) return null;

    const displayItems = items.slice(0, 3);

    return (
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">{title}:</h4>
        <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-600 ml-2">
          {displayItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-blue-600 flex flex-col h-full">
      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>

      <div className="flex-grow">
        {renderList(preferences, 'Principais Preferências')}
        {renderList(features, 'Funcionalidades Chave')}
      </div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-150"
        onClick={() => alert(`Saiba mais sobre ${name}`)}
      >
        Ver Detalhes
      </button>
    </div>
  );
}

export default ProductCard;
