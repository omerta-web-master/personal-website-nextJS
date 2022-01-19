import React, { Fragment } from "react";
import Header from "../components/layout/Header/Header";
import Showcase from "../components/layout/Showcase/Showcase";
import Projects from "../components/layout/projects/Projects";

const index = () => {
	return (
		<Fragment>
			<Header />
			<Showcase />
			<Projects />
		</Fragment>
	);
};

export default index;
