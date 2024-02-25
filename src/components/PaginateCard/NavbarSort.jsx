import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ProductContext";

const NavbarSort = () => {
  const { data, setData, readProduct, fetchShopsParams } = useShop();
  const [status, setStatus] = useState(null);
  const [sortPrice, setSortPrice] = useState("");
  const [sort, setSort] = useState(0);

  const hendleShopMenu = (event) => {
    setStatus(event.currentTarget);
  };
  const hendleClose = () => {
    setStatus(null);
  };

  function hendleShopSortPrice() {
    if (sortPrice === "hich-low") {
      let result = data.sort((a, b) => +b.price - +a.price);
      console.log(result);
      setData(result);
      return result;
    }
  }

  useEffect(() => {
    hendleShopSortPrice();
    readProduct();
  }, [sortPrice]);

  return (
    <Box sx={{ position: "absolute", right: "150px" }}>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <input type="radio" id="huey" name="drone" value="shops" checked />
        {sort === 1 ? (
          <>
            <label onClick={() => setSort(0)} for="Shops"></label>

            <FormControl sx={{ position: "absolute", width: "160px" }}>
              <FormLabel sx={{ color: "000" }} onClick={hendleShopMenu}>
                filter
              </FormLabel>
              <RadioGroup
                status={status}
                onChange={(e) => fetchShopsParams("type", e.target.value)}
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Radio value="all" label="All" onClick={hendleClose} />
                    <Typography>All</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Radio value="men" label="Men" />
                    <Typography>men</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Radio value="women" label="Women" />
                    <Typography>women</Typography>
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>
          </>
        ) : (
          <label onClick={() => setSort(1)} for="Shops">
            Sort
          </label>
        )}
      </Box>
    </Box>
  );
};

export default NavbarSort;
