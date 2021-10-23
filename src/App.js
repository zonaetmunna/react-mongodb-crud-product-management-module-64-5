import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import AddProducts from './pages/Home/AddProducts/AddProducts';
import Header from './Shared/Header';
import Login from './pages/Login/Login/Login';
import ShowProduct from './pages/Home/ShowProduct/ShowProduct';
import UpdateProduct from './pages/Home/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/showProduct">
            <ShowProduct></ShowProduct>
          </Route>
          <Route path="/showProducts/updateProducts/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
