const products = [
  {
    id: 1,
    name: "product 1",
    price: 100000,
    category: "AMD",
    stock: 10,
    img: '/src/Data/Photo/ryzen-5.jpg'
    // img: 'https://media.solotodo.com/media/products/1580673_picture_1651582928.jpg'
  },
  {
    id: 2,
    name: "product 2",
    price: 200000,
    category: "Intel",
    stock: 5,
    img: '/src/Data/Photo/intel-core-i5.jpg'
    // img: 'https://media.solotodo.com/media/products/1514024_picture_1640156807.jpg'
  },
  {
    id: 3,
    name: "product 3",
    price: 300000,
    category: "AMD",
    stock: 3,
    img: '/src/Data/Photo/ryzen-7.jpg'
    // img: 'https://media.solotodo.com/media/products/1569342_picture_1672268351.jpg'
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
