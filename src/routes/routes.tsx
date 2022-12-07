import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { CategoryPage } from "../pages/CategoryPage";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { ProductPage } from "../pages/ProductPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<CategoryPage/>}/>
                <Route path='/categories/:categoryId/products' element={<CategoryPage/>}/>
                <Route path='/products/:productId' element={<ProductPage/>} />
                <Route path='*' element={<PageNotFound/>}/>

                <Route path='/cart' element={<CartPage />}/>
            </Routes>
        </BrowserRouter>
    )
}