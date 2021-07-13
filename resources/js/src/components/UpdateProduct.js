import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Typography from "./common/Typography";
import Button from "./common/Button";

function UpdateProduct(props) {
  useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = useState({});
  const [name, setName] = useState({});
  const [price, setPrice] = useState({});
  const [description, setDescription] = useState({});
  const [file_path, setFile_path] = useState({});

  const id = props.match.params.param;

  async function getProduct() {
    let result = await fetch(`http://localhost:8000/api/product/${id}`);
    result = await result.json();
    setProduct(result);
  }
  console.log("id>>", id);
  console.log("product>>", product);
  return (
    <div className="col-sm-6 offset-sm-3">
      <Typography
        style={{ color: "white" }}
        color="inherit"
        align="center"
        variant="h4"
        marked="center"
      >
        Edit product
      </Typography>
      <input
        type="text"
        defaultValue={product.name}
        // value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="PLease enter the product's name"
      />
      <br />

      <input
        type="price"
        defaultValue={product.price}
        // value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-control"
        placeholder="price"
      />
      <br />
      <input
        type="description"
        defaultValue={product.description}
        // value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control"
        placeholder="description"
      />
      <br />
      <input
        type="file"
        defaultValue={product.file_path}
        onChange={(e) => setFile_path(e.target.files[0])}
        className="form-control"
      />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <img width="150px" src={`http://localhost:8000/${product.file_path}`} />
      </div>
      <Button onClick color="rose">
        update
      </Button>
    </div>
  );
}

export default withRouter(UpdateProduct);
