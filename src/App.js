import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  /**
   * Função callback para receber as recomendações do formulário
   */
  const handleRecommendations = (results) => {
    setRecommendations(results);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 mt-4 sm:mt-8 text-gray-800">
        Recomendador de Produtos RD Station
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-6xl">
        <div className="mb-6">
          <p className="text-base text-gray-600 leading-relaxed border-b pb-4 mb-4">
            Bem-vindo ao Recomendador de Produtos RD Station. Use o formulário
            abaixo para selecionar suas preferências e funcionalidades desejadas
            e receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Form onSubmit={handleRecommendations} />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              Produtos Recomendados ({recommendations.length})
            </h2>
            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
