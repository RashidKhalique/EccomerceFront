import Signup from './Auth/Signup'
import Login from './Auth/login'
import Dashboard from './Pages/Dashboard'
import PrivateRoute from './Auth/PrivateRoute'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Products from './Pages/Products.jsx'
import UserManagements from './Pages/UserManagements.jsx'
import CreateProduct from './Pages/CreateProduct.jsx'
import UpdateProduct from './Pages/updateProduct.jsx'
import OrderManagement from './Pages/OrderManagement.jsx'
import ProductDetail from './Pages/userPages/ProductDetail.jsx'
import ShoppingCart from './Pages/userPages/ShoppingCart.jsx'
import UserHome from './Pages/userPages/UserHome.jsx'
import ProductStore from './Pages/userPages/ProductStore.jsx'
import PaymentSuccess from './Pages/userPages/PaymentSuccess.jsx'
import UpdateUser from './Pages/updateUser.jsx'
import UserOrderTracking from './Pages/userPages/UserOrderTracking.jsx'
import CategoryPage from './Pages/userPages/CategoryPage.jsx'
import CouponManager from './Pages/CouponManager.jsx'

import NotFoundPage from './Pages/userPages/NotFoundPage.jsx'
import Invoice from './Pages/userPages/InvoiceReport.jsx'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<UserHome />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path='/ShopCart' element={<ShoppingCart />} />
                <Route path='/ProductStore' element={<ProductStore />} />
                <Route path='/updateUser/:id' element={<UpdateUser />} />
                <Route path='/Invoice/:id' element={<Invoice/>} />
               

                <Route path='/PaymentSuccess/:id' element={
                    <PaymentSuccess />

                } />


                <Route path='/UserOrderTracking' element={
                    <UserOrderTracking />

                }
                />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute >
                            <Dashboard />
                        </PrivateRoute>
                    }

                />
                <Route
                    path='/products'
                    element={
                        <PrivateRoute >
                            <Products />


                        </PrivateRoute>
                    }

                />
                <Route path='/user'
                    element={
                        <PrivateRoute >
                            <UserManagements />
                        </PrivateRoute >
                    }
                />
                <Route path='/create'
                    element={
                        <PrivateRoute >
                            <CreateProduct />
                        </PrivateRoute >
                    }
                />
                <Route path="/edit/:id"
                    element={
                        <PrivateRoute>
                            <UpdateProduct />
                        </PrivateRoute>
                    }
                />
                <Route path="/order" element={
                    <PrivateRoute>
                        <OrderManagement />
                    </PrivateRoute>

                } />
                <Route path="/CouponManager" element={
                    <PrivateRoute>
                        <CouponManager />
                    </PrivateRoute>

                } />
                 <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App
