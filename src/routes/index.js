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
import CartPage from '../pages/cart/cart';
import ProfilePage from '../pages/account/profile';
import AddressPage from '../pages/account/address';
import ChangePasswordPage from '../pages/account/changePassword';
import OrderHistoryPage from '../pages/account/orderHistory';
import NotifyPage from '../pages/account/notify';
import {
  DefaultLayout,
  BackgroundLayout,
  HomeLayout,
  ProductLayout,
  AccountLayout,
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
  { path: '/', component: HomePage, layout: HomeLayout },
  { path: '/men', component: MenPage, layout: ProductLayout },
  { path: '/women', component: WomenPage, layout: ProductLayout },
  { path: '/sale', component: SalePage, layout: ProductLayout },
  { path: '/new-arrival', component: NewArrivalPage, layout: ProductLayout },
  { path: '/best-seller', component: BestSellerPage, layout: ProductLayout },
  { path: '/search', component: SearchPage, layout: DefaultLayout },
  { path: '/contact', component: ContactPage, layout: DefaultLayout },
  {
    path: '/product-details',
    component: ProductDetailsPage,
    layout: DefaultLayout,
  },
  { path: '/cart', component: CartPage, layout: DefaultLayout },
  { path: '/profile', component: ProfilePage, layout: AccountLayout },
  {
    path: '/change-password',
    component: ChangePasswordPage,
    layout: AccountLayout,
  },
  {
    path: '/address',
    component: AddressPage,
    layout: AccountLayout,
  },
  {
    path: '/history-order',
    component: OrderHistoryPage,
    layout: AccountLayout,
  },
  {
    path: '/notify',
    component: NotifyPage,
    layout: AccountLayout,
  },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
