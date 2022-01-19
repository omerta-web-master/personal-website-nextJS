import React from "react";
import img1 from "../../../assets/images/bugTracker1.jpg";
import img2 from "../../../assets/images/bugTracker2.jpg";
import img3 from "../../../assets/images/bugTracker3.jpg";
import img4 from "../../../assets/images/bugTracker4.jpg";
import ImageSlider from "./ImageSlider";
import ProjectLayout from "./ProjectLayout";
import ProjectNav from "./ProjectNav";
import styles from "./Projects.module.scss";

const images = [img1, img2, img3, img4];
const projectName = "bugTracker";
const liveLink = "https://focused-minsky-858c37.netlify.app/login";
const repoLink = "https://github.com/omerta-web-master/Issues-tracker";

const BugTracker = () => {
	return (
		<>
			<ProjectLayout projectName={projectName}>
				<div>
					<ImageSlider images={images} projectName={projectName} />
				</div>
				<div className={styles.project__info}>
					<h1 className={styles.project__title}>Bug tracker</h1>
					<p>
						This is kind of the application you see in a company for managing
						project. All the company projects are listed inside the app and if
						some user notices a bug or some issues they can send a ticket
						explaining the problem. This ticket can be later assigned to a
						developer to fix.
					</p>
					<p>Functionality:</p>
					<ul className={styles.project__featureList}>
						<li>- authentication system (JWT)</li>
						<li>
							- role management (user can have admin, developer, submitter, or
							project manager role)
						</li>
						<li>- users can add comments, send tickets</li>
						<li>- developers can solve issues and update ticket status</li>
						<li>- admins can manage users, projects, roles</li>
					</ul>
					<p>
						Tech stack: Javascript, React, Context API, Node Js, Express, Mongo
						DB (NoSQL), HTML, CSS, Bootstrap
					</p>
					<ProjectNav liveLink={liveLink} repoLink={repoLink} />
				</div>
			</ProjectLayout>
		</>
	);
};

export default BugTracker;
