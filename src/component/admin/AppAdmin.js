
import './App.css';
import { Routes, Route } from "react-router-dom";



import Category from './component/componentuser/catalog/Category';
import Index from './component/componentuser/home/Index';
// import Product from './component/componentuser/product/Product';
import User from './component/componentuser/user/User';
import Nav from './component/componentuser/navbar/NavBar';
import Topping from './component/componentuser/topping/Topping';
import NewUse from './component/componentuser/user/NewUser';
import NewCatalog from './component/componentuser/catalog/NewCatalog';
import UpdateCatalog from './component/componentuser/catalog/UpdateCatalog';
import CreateProduct from './component/componentuser/product/CreateProduct';
import NewTopping from './component/componentuser/topping/NewTopping';
import UpdateProduct from './component/componentuser/product/UpdateProduct';
import UpdateTopping from './component/componentuser/topping/UpdateTopping';
import ListProduct from './component/componentuser/product/ListProduct';
import ListCatalog from './component/componentuser/catalog/ListCatalog';
import ListTopping from './component/componentuser/topping/ListTopping';
import ListUser from './component/componentuser/user/ListUser';
import Detail from './component/componentuser/product/Detail';
import DetailTopping from './component/componentuser/topping/DetailTopping';



function App() {
  return (
  <>
  <Routes>
      <Route path="/" element={<Nav></Nav>}>
        <Route index element  ={<Index />} />
        <Route path="/Index" element={<Index></Index>}></Route>
        <Route path="/Category" element={<ListCatalog></ListCatalog>}></Route>
        <Route path="/Product" element={<ListProduct></ListProduct>}></Route>
        <Route path="/Topping" element={<ListTopping></ListTopping>}></Route>
        <Route path="/User" element={<ListUser></ListUser>}></Route>
        <Route path="/newUser" element={<NewUse></NewUse>}></Route>
        <Route path="/newCatalog" element={<NewCatalog></NewCatalog>}></Route>
        <Route path="/updateCatalog" element={<UpdateCatalog></UpdateCatalog>}></Route>
        <Route path="/CreateProduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/Topping" element={<Topping></Topping>}></Route>
        <Route path="/NewTopping" element={<NewTopping></NewTopping>}></Route>
        <Route path="/UpdateProduct" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/UpdateTopping" element={<UpdateTopping></UpdateTopping>}></Route>
        <Route path="/DetailProduct" element={<Detail></Detail>}></Route>
        <Route path="/DetailTopping" element={<DetailTopping></DetailTopping>}></Route>

      </Route>
  </Routes>
  </>
  );
}

export default App;
