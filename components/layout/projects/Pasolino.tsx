import React from "react";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";
import ImageSlider from "./ImageSlider";
import styles from "./Projects.module.scss";
import img1 from "../../../assets/images/pasolino1.jpg";
import img2 from "../../../assets/images/pasolino2.jpg";
import img3 from "../../../assets/images/pasolino3.jpg";
import img4 from "../../../assets/images/pasolino4.jpg";

const images = [img1, img2, img3, img4];
const projectName = "pasolino";
const liveLink = "https://competent-brattain-bbc39a.netlify.app/";
const repoLink =
	"https://github.com/omerta-web-master/Pasolino-restaurant-landing-page";

const Pasolino = () => {
	return (
		<ProjectLayout projectName='Pasolino'>
			<div>
				<ImageSlider images={images} projectName={projectName} />
			</div>
			<div className={styles.project__info}>
				<h1 className={styles.project__title}>
					Pasolino Restaurant landing page
				</h1>
				<p>Just a clean, modern and responsive landing page for a restaurant</p>
				<p>Functionality:</p>
				<ul className={styles.project__featureList}>
					<li>- responsiveness</li>
					<li>- clean design</li>
					<li>- easy customizable</li>
				</ul>
				<p>Tech stack: SASS, HTML, CSS, Javascript</p>
				<ProjectNav liveLink={liveLink} repoLink={repoLink} />
			</div>
		</ProjectLayout>
	);
};

export default Pasolino;
