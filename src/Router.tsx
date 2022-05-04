import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import {
	BuyerHome,
	BuyerLogin,
	BuyerProfile,
	BuyerProperty,
	BuyerRegister,
} from './comps/buyer';
import Home from './comps/home';
import {
	SellerHome,
	SellerAdd,
	SellerEdit,
	SellerLogin,
	SellerProfile,
	SellerRegister,
} from './comps/seller';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='seller'>
						<Route index element={<SellerHome />} />
						<Route path='profile' element={<SellerProfile />} />
						<Route
							path='edit/:propertyId'
							element={<SellerEdit />}
						/>
						<Route path='add/:propertyId' element={<SellerAdd />} />
						<Route path='login' element={<SellerLogin />} />
						<Route path='register' element={<SellerRegister />} />
					</Route>
					<Route path='buyer'>
						<Route index element={<BuyerHome />} />
						<Route path='profile' element={<BuyerProfile />} />
						<Route
							path='property/:propertyId'
							element={<BuyerProperty />}
						/>
						<Route path='login' element={<BuyerLogin />} />
						<Route path='register' element={<BuyerRegister />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
