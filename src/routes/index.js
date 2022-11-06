import LoginPage from '../pages/login/loginShop';
import RegisterPage from '../pages/register/register';
import ForgotPasswordPage from '../pages/login/forgotPassword';
import ResetPasswordPage from '../pages/login/resetPassword';
import HomePage from '../pages/home/home';
import MenPage from '../pages/product/men';
import WomenPage from '../pages/product/women';
import SalePage from '../pages/product/sale';
import NewArrivalPage from '../pages/product/newArrival';
import BestSellerPage from '../pages/product/bestSeller';
import SearchPage from '../pages/product/search';
import ContactPage from '../pages/contact/contact';
import ProductDetailsPage from '../pages/productDetails/productDetails';
import CartDetailsPage from '../pages/cart/cartDetails';
import PaymentPage from '../pages/cart/payment';
import ProfilePage from '../pages/account/profile';
import ChangePasswordPage from '../pages/account/changePassword';
import OrderHistoryPage from '../pages/account/orderHistory';
import {
  DefaultLayout,
  BackgroundLayout,
  HomeLayout,
} from '~/components/Layout';

//Public routes
const publicRoutes = [
  { path: '/login', component: LoginPage, layout: BackgroundLayout },
  { path: '/register', component: RegisterPage, layout: BackgroundLayout },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage,
    layout: BackgroundLayout,
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage,
    layout: BackgroundLayout,
  },
  { path: '/home', component: HomePage, layout: HomeLayout },
  { path: '/men', component: MenPage, layout: DefaultLayout },
  { path: '/women', component: WomenPage, layout: DefaultLayout },
  { path: '/sale', component: SalePage, layout: DefaultLayout },
  { path: '/new-arrival', component: NewArrivalPage, layout: DefaultLayout },
  { path: '/best-seller', component: BestSellerPage, layout: DefaultLayout },
  { path: '/search', component: SearchPage, layout: DefaultLayout },
  { path: '/contact', component: ContactPage, layout: DefaultLayout },
  {
    path: '/product-details',
    component: ProductDetailsPage,
    layout: DefaultLayout,
  },
  { path: '/cart-details', component: CartDetailsPage, layout: DefaultLayout },
  { path: '/payment', component: PaymentPage, layout: DefaultLayout },
  { path: '/profile', component: ProfilePage, layout: DefaultLayout },
  {
    path: '/change-password',
    component: ChangePasswordPage,
    layout: DefaultLayout,
  },
  { path: '/oder-history', component: OrderHistoryPage, layout: DefaultLayout },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
