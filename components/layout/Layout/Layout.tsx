import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: React.FC = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main className='main__container'>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
