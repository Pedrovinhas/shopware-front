import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryPage } from "../pages/CategoryPage";
import { Home } from "../pages/Home";
import { ProductPage } from "../pages/ProductPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/category' element={<CategoryPage/>}/>
                <Route path='/product' element={<ProductPage/>} />
                {/* <Route path='*' element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}