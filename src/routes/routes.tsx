import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext";
import { AboutPage } from "../pages/AboutPage";
import { AdressBookPage } from "../pages/AdressBookPage";
import { CartPage } from "../pages/CartPage";
import { CategoryPage } from "../pages/CategoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { OrderDetailPage } from "../pages/OrderDetailPage";
import { OrdersPage } from "../pages/OrdersPage";
import { PageNotFound } from "../pages/PageNotFound";
import { ProductPage } from "../pages/ProductPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ReferAndEarnPage } from "../pages/ReferAndEarnPage";
import { ReviewPage } from "../pages/ReviewPage";
import { SignUpOtpPage } from "../pages/SignUpOtpPage";
import { SignUpPage } from "../pages/SignUpPage";
import { SignUpPhonePage } from "../pages/SignUpPhonePage";
import { UserPage } from "../pages/UserPage";
import { WishlistPage } from "../pages/WishlistPage";
import { PrivateRoutes } from "./PrivateRoutes";


export function Router() {
    return (
        <BrowserRouter>
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<PageNotFound/>}/>

                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/signup/phone' element={<SignUpPhonePage/>}/>
                <Route path='/signup/otp' element={<SignUpOtpPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>

                <Route path='/about' element={<AboutPage/>} />
                <Route path='/products' element={<ProductsPage/>}/>
                <Route path='/categories/:categoryId/products' element={<CategoryPage/>}/>
                <Route path='/products/:productId' element={<ProductPage/>} />

                    <Route path='/cart' element={<CartPage />}/>
                    <Route path='/checkout' element={<CheckoutPage />}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path='/user-profile' element={<UserPage />}/>
                    <Route path='/user-profile/wishlist' element={<WishlistPage />}/>
                    <Route path='/user-profile/reviews' element={<ReviewPage />}/>
                    <Route path='/user-profile/address-book' element={<AdressBookPage />}/>
                    <Route path='/user-profile/refer' element={<ReferAndEarnPage />}/>
                    <Route path='/user-profile/my-orders' element={<OrdersPage />}/>
                    {/* <Route path='/user-profile/my-orders/:orderId' element={<OrderDetailPage/>}/> */}
                    <Route path='/user-profile/my-orders/orderId' element={<OrderDetailPage/>}/>
                </Route>
            </Routes>
        </AuthContextProvider>
        </BrowserRouter>
    )
}