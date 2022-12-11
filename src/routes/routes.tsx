import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CartPage";
import { CategoryPage } from "../pages/CategoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Home } from "../pages/Home";
import { OrderDetailPage } from "../pages/OrderDetailPage";
import { OrdersPage } from "../pages/OrdersPage";
import { PageNotFound } from "../pages/PageNotFound";
import { ProductPage } from "../pages/ProductPage";
import { UserPage } from "../pages/UserPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/products' element={<CategoryPage/>}/>
                <Route path='/categories/:categoryId/products' element={<CategoryPage/>}/>
                <Route path='/products/:productId' element={<ProductPage/>} />
                <Route path='*' element={<PageNotFound/>}/>

                <Route path='/cart' element={<CartPage />}/>
                <Route path='/checkout' element={<CheckoutPage />}/>
                <Route path='/user-profile' element={<UserPage />}/>
                <Route path='/user-profile/my-orders' element={<OrdersPage />}/>
                {/* <Route path='/user-profile/my-orders/:orderId' element={<OrderDetailPage/>}/> */}
                <Route path='/user-profile/my-orders/orderId' element={<OrderDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}