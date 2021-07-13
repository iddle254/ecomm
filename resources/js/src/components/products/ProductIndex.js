import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Typography from "../common/Typography";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import SearchComponent from "../common/SearchComponent";

function Index() {
  const [data, setData] = useState([]);

  const cleanup = useEffect(async () => {
    getData();
    return () => {
      setData([]);
      cleanup();
    };
  }, [data]);

  async function deleteItem(id) {
    let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      {data ? (
        <div className="container">
          <SearchComponent />
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Typography
                      style={{ color: "white" }}
                      color="inherit"
                      align="center"
                      variant="h6"
                      marked="center"
                    >
                      {item.id}
                    </Typography>{" "}
                  </td>
                  <td>
                    <Typography
                      style={{ color: "white" }}
                      color="inherit"
                      align="center"
                      variant="h6"
                      marked="center"
                    >
                      {item.name}
                    </Typography>
                  </td>
                  <td>
                    <img
                      width="100px"
                      src={"http://localhost:8000/" + item.file_path}
                    />
                  </td>
                  <td>
                    <Typography
                      style={{ color: "white" }}
                      color="inherit"
                      align="center"
                      variant="h6"
                      marked="center"
                    >
                      {item.price}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      style={{ color: "white" }}
                      color="inherit"
                      align="center"
                      variant="h6"
                      marked="center"
                    >
                      {item.description}
                    </Typography>
                  </td>
                  <td>
                    <Button
                      color="rose"
                      variant="contained"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      color="success"
                      variant="contained"
                      href={`/edit-product/${item.id}`}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
    </div>
  );
}

export default Index;
