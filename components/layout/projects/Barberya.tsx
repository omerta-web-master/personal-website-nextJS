import React from "react";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";
import ImageSlider from "./ImageSlider";
import styles from "./Projects.module.scss";
import img1 from "../../../assets/images/barberya1.jpg";
import img2 from "../../../assets/images/barberya2.jpg";
import img3 from "../../../assets/images/barberya3.jpg";
import img4 from "../../../assets/images/barberya4.jpg";

const images = [img1, img2, img3, img4];
const projectName = "barberya";
const liveLink = "https://confident-roentgen-b0a7d5.netlify.app/";
const repoLink = "https://github.com/omerta-web-master/Barberya-landing-page";

const Barberya = () => {
	return (
		<ProjectLayout projectName='Barberya'>
			<div>
				<ImageSlider images={images} projectName={projectName} />
			</div>
			<div className={styles.project__info}>
				<h1 className={styles.project__title}>Barber shop landing page</h1>
				<p>Another clean, modern and responsive landing page</p>
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

export default Barberya;
