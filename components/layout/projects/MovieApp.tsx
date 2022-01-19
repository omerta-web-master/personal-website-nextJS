import React from "react";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";
import ImageSlider from "./ImageSlider";
import styles from "./Projects.module.scss";
import img1 from "../../../assets/images/movieApp1.jpg";
import img2 from "../../../assets/images/movieApp2.jpg";
import img3 from "../../../assets/images/movieApp3.jpg";
import img4 from "../../../assets/images/movieApp4.jpg";

const images = [img1, img2, img3, img4];
const projectName = "movieApp";
const liveLink = "https://nostalgic-benz-8583f9.netlify.app/";
const repoLink = "https://github.com/omerta-web-master/Movie-app";

const MovieApp = () => {
	return (
		<ProjectLayout projectName='MovieApp'>
			<div>
				<ImageSlider images={images} projectName={projectName} />
			</div>
			<div className={styles.project__info}>
				<h1 className={styles.project__title}>MovieApp</h1>
				<p>Movie App created 100% with Vanilla Javascript using the TMDB api</p>
				<p>Functionality:</p>
				<ul className={styles.project__featureList}>
					<li>
						- you can search movies and tv shows by name, genre, category, year
					</li>
					<li>
						- extra details about movies / tv shows, similar movies, actors,
						seasons, trailer, budgets, release date etc..
					</li>
					<li>- pagination</li>
				</ul>
				<p>Tech stack: Javascript, HTML, CSS, SASS</p>
				<ProjectNav liveLink={liveLink} repoLink={repoLink} />
			</div>
		</ProjectLayout>
	);
};

export default MovieApp;
