import { app } from "../Data/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const getProducts = () => {
  const db = getFirestore(app);
  const productsCollection = collection(db, "products");
  const products = getDocs(productsCollection);
  
  return products
    .then((res) => {
      const products = res.docs.map((doc) => {
        const products = doc.data();
        products.id = doc.id;
        return products;
      });
      return products;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getProductCategories = (categoria) => {
  const db = getFirestore(app);
  const productsCollection = collection(db, "products");
  const filtro = query(productsCollection, where("category", "==", categoria));
  const consulta = getDocs(filtro);
  return consulta
    .then((res) => {
      const products = res.docs.map((doc) => {
        const products = doc.data();
        products.id = doc.id;
        return products;
      });
      return products;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getProductDetail = (id) => {
  const db = getFirestore(app);
  const productsCollection = collection(db, "products");
  const filtro = doc(productsCollection, id);
  const consulta = getDoc(filtro);
  return consulta
    .then((res) => {
      const products = res.data();
      products.id = res.id;
      return products;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createSale = () => {
  const db = getFirestore(app);
  const salesCollection = collection(db, "sales");
  const sale = {
    items: [],
    usuario:{name: "Juan", tel: "123456789", email: "test@test"},
    fechaDeCompra: serverTimestamp(),
    status: "pendiente",
    total: 0
  }
  const consulta = addDoc(salesCollection, sale)

  consulta
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};