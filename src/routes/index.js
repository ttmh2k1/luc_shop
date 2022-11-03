import LoginPage from "../pages/login/loginShop";
import RegisterPage from "../pages/register/register";
import ForgotPasswordPage from "../pages/login/forgotPassword";
import ResetPasswordPage from "../pages/login/resetPassword";
import HomePage from "../pages/home/home";
import MenPage from "../pages/product/men";
import WomenPage from "../pages/product/women";
import SalePage from "../pages/product/sale";
import NewArrivalPage from "../pages/product/newArrival";
import BestSellerPage from "../pages/product/bestSeller";
import SearchPage from "../pages/product/search";
import ContactPage from "../pages/contact/contact";
import ProductDetailsPage from "../pages/productDetails/productDetails";
import CartDetailsPage from "../pages/cart/cartDetails";
import PaymentPage from "../pages/cart/payment";
import ProfilePage from "../pages/account/profile";
import ChangePasswordPage from "../pages/account/changePassword";
import OrderHistoryPage from "../pages/account/orderHistory";

//Public routes
const publicRoutes = [
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/forgot-password", component: ForgotPasswordPage },
  { path: "/reset-password", component: ResetPasswordPage },
  { path: "/home", component: HomePage },
  { path: "/men", component: MenPage },
  { path: "/women", component: WomenPage },
  { path: "/sale", component: SalePage },
  { path: "/new-arrival", component: NewArrivalPage },
  { path: "/best-seller", component: BestSellerPage },
  { path: "/search", component: SearchPage },
  { path: "/contact", component: ContactPage },
  { path: "/product-details", component: ProductDetailsPage },
  { path: "/cart-details", component: CartDetailsPage },
  { path: "/payment", component: PaymentPage },
  { path: "/profile", component: ProfilePage },
  { path: "/change-password", component: ChangePasswordPage },
  { path: "/oder-history", component: OrderHistoryPage },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
