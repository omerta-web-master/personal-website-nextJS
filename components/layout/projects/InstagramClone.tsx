import React from "react";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";
import ImageSlider from "./ImageSlider";
import styles from "./Projects.module.scss";
import img1 from "../../../assets/images/instaClone1.jpg";
import img2 from "../../../assets/images/instaClone2.jpg";
import img3 from "../../../assets/images/instaClone3.jpg";
import img4 from "../../../assets/images/instaClone4.jpg";

const images = [img1, img2, img3, img4];
const projectName = "instagramClone";
const liveLink = "";
const repoLink = "https://github.com/omerta-web-master/Instagram-clone";

const InstagramClone = () => {
	return (
		<ProjectLayout projectName='instagramClone'>
			<div>
				<ImageSlider images={images} projectName={projectName} />
			</div>
			<div className={styles.project__info}>
				<h1 className={styles.project__title}>Instagram Clone</h1>
				<p>
					Yet another React project, because React is awesome, but there was one
					thing missing from the other projects, Typescript. I tried my best to
					follow the best coding and architecture patters.
				</p>
				<p>Functionality:</p>
				<ul className={styles.project__featureList}>
					<li>- authentication (JWT)</li>
					<li>- messaging</li>
					<li>- follow/unfollow system</li>
					<li>- creating a post</li>
					<li>- file upload</li>
				</ul>
				<p>
					Tech stack: Typescript, React, Redux, React Query, Node Js, MongoDB,
					HTML, CSS, Bootstrap
				</p>
				<ProjectNav liveLink={liveLink} repoLink={repoLink} />
			</div>
		</ProjectLayout>
	);
};

export default InstagramClone;
