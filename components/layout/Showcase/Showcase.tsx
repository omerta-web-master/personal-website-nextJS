import React from "react";
import styles from "./Showcase.module.scss";
import img from "../../../assets/images/showcase1.jpg";
import Image from "next/image";

const Showcase = () => {
	return (
		<section className={styles.showcase__section}>
			<div className='container' style={{ height: "100%" }}>
				<div className={styles.showcase__container}>
					<div className={styles.showcase__content}>
						<div className={styles.hello__message}>
							<div className={styles.line}></div>
							<h4>hello there</h4>
						</div>

						<h1 className={`${styles.title} ${styles.title__primary}`}>
							I am Dumitru Merlusca
						</h1>
						<h1 className={`${styles.title} ${styles.title__secondary}`}>
							I am Web <span>Developer</span>
						</h1>
						<div className={styles.button__group}>
							<a href='#projects' className={styles.primary__btn}>
								LATEST PROJECTS
							</a>
							{/* <a href='' className={styles.secondary__btn}>
								MORE ABOUT ME
							</a> */}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.showcase__img}></div>
		</section>
	);
};

export default Showcase;
