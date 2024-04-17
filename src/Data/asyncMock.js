const products = [
  {
    id: 1,
    name: "product 1",
    price: 100000,
    category: "AMD",
    stock: 10,
  },
  {
    id: 2,
    name: "product 2",
    price: 200000,
    category: "Intel",
    stock: 5,
  },
  {
    id: 3,
    name: "product 3",
    price: 300000,
    category: "AMD",
    stock: 3,
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    }, 500);
  });
};
