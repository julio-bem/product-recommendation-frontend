const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products = []
) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;

  const selectedPreferencesSet = new Set(selectedPreferences);
  const selectedFeaturesSet = new Set(selectedFeatures);

  const scoredProducts = products.map((product) => {
    let score = 0;

    if (product.preferences) {
      score += product.preferences.filter((pref) =>
        selectedPreferencesSet.has(pref)
      ).length;
    }

    if (product.features) {
      score += product.features.filter((feat) =>
        selectedFeaturesSet.has(feat)
      ).length;
    }

    return { ...product, score };
  });

  const validProducts = scoredProducts.filter((p) => p.score > 0);

  if (validProducts.length === 0) {
    return [];
  }

  if (selectedRecommendationType === 'SingleProduct') {
    const maxScore = Math.max(...validProducts.map((p) => p.score));

    const bestMatches = validProducts.filter((p) => p.score === maxScore);

    const winner = bestMatches[bestMatches.length - 1];

    const { score, ...productData } = winner;
    return [productData];
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return validProducts.map(({ score, ...rest }) => rest);
  }

  return [];
};

export default { getRecommendations };
