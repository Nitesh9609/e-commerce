import React, { useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cartContext } from "../../Context";
import "./Filter.css";

const Filter = () => {
  const {
    searchHandler,
    categoryHandler,
    companyHandler,
    priceHandler,
    priceValue,
  } = useContext(cartContext);

  const [input, setInput] = useState({
    search: "",
    category: "",
    brands: "none",
    price: "0",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
    switch (name) {
      case "search":
        searchHandler(value);
        break;
      // case "category":
      // categoryHandler(event.target.innerText);
      // break;
      case "brands":
        companyHandler(value);
        break;
      case "price":
        priceHandler(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter-class">
      <div className="filter-name">
        <h3>Filters</h3>
      </div>
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="SEARCH"
          onChange={handleInput}
          name="search"
        />
      </div>

      {/* <div>
        <h2>Category</h2>
        <p onClick={handleInput} name='category'>Men's</p>
        <p onClick={handleInput} name='category'>Women's</p>
        <p onClick={handleInput} name='category'>kids</p>
      </div> */}

      <div className="brands">
        <h3>Brands</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Brands"
              onChange={handleInput}
              name="brands"
            >
              <MenuItem value="Roadster">Roadster</MenuItem>
              <MenuItem value="Puma">Puma</MenuItem>
              <MenuItem value="Nike">Nike</MenuItem>
              <MenuItem value="Tommy Hilfiger">Tommy Hilfiger</MenuItem>
              <MenuItem value="Adidas">Adidas</MenuItem>
              <MenuItem value="AURELIA">AURELIA</MenuItem>
              <MenuItem value="HERE&NOW">HERE&NOW</MenuItem>
              <MenuItem value="Vero Moda">Vero Moda</MenuItem>
              <MenuItem value="Van Heusen">Van Heusen</MenuItem>
              <MenuItem value="Gini and Jony">Gini and Jony</MenuItem>
              <MenuItem value="United Colors of Benetton">
                United Colors of Benetton
              </MenuItem>
              <MenuItem value="CUTECUMBER">CUTECUMBER</MenuItem>
              <MenuItem value="Bella Moda">Bella Moda</MenuItem>
              <MenuItem value="Nauti Nati">Nauti Nati</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <h2>Price</h2>
        <h3>&#x20b9; {input.price}</h3>
        <Box sx={{ m: 1 }} />
        <Slider sx={{width: 200}}
          defaultValue={0}
          max={1000}
          onChange={handleInput}
          name="price"
        />
      </div>
    </div>
  );
};

export default Filter;
