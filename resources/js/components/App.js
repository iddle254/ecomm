import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ProductIndex from "./components/products/ProductIndex.js";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new-product">
          <Protected cmp={AddProduct} />
        </Route>
        <Route exact path="/edit-product/:param">
          <Protected cmp={UpdateProduct} />
        </Route>
        <Route exact path="/">
          <Protected cmp={ProductIndex} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
