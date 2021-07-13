import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../http-common";
import Typography from "./common/Typography";
import Button from "./common/Button";

function AddProduct() {
  const [name, setName] = useState("");
  const [file_path, setFilePath] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  async function addProduct() {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("file_path", file_path);
    formData.append("price", price);
    formData.append("description", description);

    return http
      .post("/newproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(history.push("/"));
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <Typography
        style={{ color: "white" }}
        color="inherit"
        align="center"
        variant="h4"
        marked="center"
      >
        Add products
      </Typography>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="PLease enter the product's name"
      />
      <br />
      <input
        type="file"
        // value={file_path}
        onChange={(e) => setFilePath(e.target.files[0])}
        className="form-control"
        // placeholder="What is your email?"
      />
      <br />
      <input
        type="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-control"
        placeholder="price"
      />
      <br />
      <input
        type="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control"
        placeholder="description"
      />
      <br />
      <Button onClick={addProduct} color="rose">
        Post Item
      </Button>
    </div>
  );
}

export default AddProduct;
