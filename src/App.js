// import logo from './logo.svg';
import './App.css';
import Index from './component/user/home/Index';
import {  Routes, Route } from "react-router-dom";
import Menu from './component/user/menu/Menu';
import Book from './component/user/order/Book';
import About from './component/user/about/About';
import Cart from './component/user/cart/ListCart';
import Detail from './component/user/Product/Detail';// import Map from './component/Map';
import Singin from './component/user/singin/Singin';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
   {/* <Map></Map> */}
  <Routes>
    <Route>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/Menu" element={<Menu></Menu>}></Route>
        <Route path="/Book" element={<Book></Book>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/Detail" element={<Detail></Detail>}></Route>
        <Route path="/Singin" element={<Singin></Singin>}></Route>

        </Route>

      {/* <Route path="/admin" element={<Nav></Nav>}>
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
      </Route>
     */}
  </Routes>
  
  </div>
  );
}

export default App;
