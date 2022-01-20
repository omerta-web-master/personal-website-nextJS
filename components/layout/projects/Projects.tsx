import React from "react";
import styles from "./Projects.module.scss";
import ECommerce from "./ECommerce";
import BugTracker from "./BugTracker";
import InstagramClone from "./InstagramClone";
import Pasolino from "./Pasolino";
import Barberya from "./Barberya";
import MovieApp from "./MovieApp";

const Projects = () => {
	return (
		<section id='projects' className={styles.projects__section}>
			<InstagramClone />
			<ECommerce />
			<BugTracker />
			<MovieApp />
			<Pasolino />
			<Barberya />
		</section>
	);
};

export default Projects;
