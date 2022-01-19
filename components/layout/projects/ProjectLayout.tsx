import React, { useState, useEffect, useRef } from "react";
import styles from "./ProjectLayout.module.scss";

interface PropTypes {
	projectName: string;
}

const ProjectLayout: React.FC<PropTypes> = ({ children }) => {
	const animatedElementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const triggerPoint = window.innerHeight - 80;
		const animatedElement = animatedElementRef.current;
		if (animatedElement!.getBoundingClientRect().top < triggerPoint) {
			animatedElement!.classList.add(styles.animate);
		}

		window.addEventListener("scroll", () => {
			if (animatedElement!.getBoundingClientRect().top < triggerPoint) {
				animatedElement!.classList.add(styles.animate);
			}
		});
	}, []);

	return (
		<article ref={animatedElementRef} className={styles.project__container}>
			<div className='container'>
				<div className={`${styles.project}`}>{children}</div>
			</div>
		</article>
	);
};

export default ProjectLayout;
