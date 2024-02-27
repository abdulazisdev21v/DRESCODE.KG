import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

const ProductContext = ({ children }) => {
  const API_SHOP = "http://localhost:3000/data";

  const API_BASKET = "http://localhost:3000/data";

  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function shopProduct(newProduct) {
    await axios.post(API_SHOP, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_SHOP);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_SHOP}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API_SHOP}/${id}`);
    setOneProduct(data);
    readProduct();
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API_SHOP}/${id}`, editedProduct);
  }

  const [page, setPage] = useState(1);
  const itemPage = 2;
  const count = Math.ceil(data.length / itemPage);

  function currentPage() {
    const next = (page - 1) * itemPage;
    const prev = next + itemPage;

    return data.slice(next, prev);
  }

  const location = useLocation();
  const navigate = useNavigate();

  function fetchShopsParams(query, value) {
    const searchParamsUrl = new URLSearchParams(location.search);
    if (value === "all") {
      searchParamsUrl.delete(query);
    } else {
      searchParamsUrl.set(query, value);
    }
    const url = `${location.pathname}?${searchParamsUrl.toString()}`;
    navigate(url);
  }

  const values = {
    shopProduct,
    readProduct,
    data,
    setData,
    deleteProduct,
    getOneProduct,
    oneProduct,
    editProduct,
    setPage,
    currentPage,
    count,
    fetchShopsParams,
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export default ProductContext;
