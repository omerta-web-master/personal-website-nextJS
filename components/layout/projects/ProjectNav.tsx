import React from "react";
import styles from "./ProjectNav.module.scss";

interface PropTypes {
	liveLink: string;
	repoLink: string;
}

const ProjectNav: React.FC<PropTypes> = ({ liveLink, repoLink }) => {
	return (
		<div className={styles.project__actions}>
			{liveLink && (
				<a
					target='_blank'
					rel='noreferrer'
					href={liveLink}
					className={`${styles.project__btn} ${styles.projectBtnPrimary}`}
				>
					Live project
				</a>
			)}
			{repoLink && (
				<a
					target='_blank'
					rel='noreferrer'
					href={repoLink}
					className={`${styles.project__btn} ${styles.projectBtnSecondary}`}
				>
					Github repo
				</a>
			)}
		</div>
	);
};

export default ProjectNav;
