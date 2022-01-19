import React from "react";
import styles from "./Projects.module.scss";
import img1 from "../../../assets/images/shoesGenius.png";
import img2 from "../../../assets/images/shoesGenius2.png";
import img3 from "../../../assets/images/shoesGenius3.png";
import ImageSlider from "./ImageSlider";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";

const images = [img1, img2, img3];
const projectName = "shoesGenius";
const liveLink = "https://shoes-genius.herokuapp.com/";
const repoLink = "https://github.com/omerta-web-master/e-commerce-platform";

const ECommerce = () => {
	return (
		<>
			<ProjectLayout projectName={projectName}>
				<div className={styles.project__images}>
					<ImageSlider images={images} projectName={projectName} />
				</div>
				<div className={styles.project__info}>
					<h1 className={styles.project__title}>React e-commerce platform</h1>
					<p>
						This is a functional online shop with a modern design and ready to
						be used. It is built completely from scratch using React as a front
						end framework, Node Js and Express for the backend, and MongoDB as
						the main database.
					</p>
					<p>Functionality:</p>
					<ul className={styles.project__featureList}>
						<li>- authentication system (JWT)</li>
						<li>- adding items to cart</li>
						<li>- checkout</li>
						<li>- paypal payment system</li>
						<li>- order tracking</li>
						<li>- admin functionality</li>
						<li>
							- product management (create new products, update existent
							products)
						</li>
						<li>- file uploading</li>
					</ul>
					<p>
						Tech stack: Javascript, React, Redux, Node Js, Express, Mongo DB
						(NoSQL), HTML, CSS, Tailwind CSS
					</p>
					<div className={styles.project__actions}>
						<ProjectNav liveLink={liveLink} repoLink={repoLink} />
					</div>
				</div>
			</ProjectLayout>
		</>
	);
};

export default ECommerce;
