import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = ({ token, user }) => {
	return (
		<>
			<Header token={token} user={user} />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
