import React from 'react';
import ProductCard from './ProductCard'; // 💡 Importação do componente criado

function RecommendationList({ recommendations }) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-2">
      {recommendations.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default RecommendationList;
