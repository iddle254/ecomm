import React, { useState } from "react";
import RegularButton from "./Button";
import CustomInput from "./CustomInput";

function SearchComponent({ search }) {
  const [searchItem, setSearchItem] = useState([]);

  async function search($key) {
    let result = await fetch(`http://localhost:8000/api/search/${$key}`);
    result = await result.json();
    console.log(result);
    setSearchItem(result);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <CustomInput
        labelText="Search by artist"
        formControlProps={{ fullWidth: true }}
        onChange={(e) => search(e.target.value)}
      />
      <RegularButton color="white" variant="contained">
        Search
      </RegularButton>
    </div>
  );
}

export default SearchComponent;
