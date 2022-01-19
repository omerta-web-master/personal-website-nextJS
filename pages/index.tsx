import React, { Fragment } from "react";
import Header from "../components/layout/Header/Header";
import Showcase from "../components/layout/Showcase/Showcase";
import Projects from "../components/layout/projects/Projects";
import Head from "next/head";

const index = () => {
	return (
		<Fragment>
			<Head>
				<title>Merlusca Dumitru, Front End Developer</title>
				<meta
					name='description'
					content='Junior self-taught front end developer personal website and portfolio '
				/>
			</Head>
			<Header />
			<Showcase />
			<Projects />
		</Fragment>
	);
};

export default index;
