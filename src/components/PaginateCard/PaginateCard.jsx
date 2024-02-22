import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useShop } from "../../context/ProductContext";

export default function PaginateCard() {
  const { setPage, count } = useShop();

  function hendleChange(p, n) {
    setPage(n);
  }

  return <Pagination onChange={hendleChange} count={count} color="secondary" />;
}
