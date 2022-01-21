import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";

const triggerPoint = 100;

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const headerElement = headerRef.current;

		window.addEventListener("scroll", () => {
			if (window.scrollY > triggerPoint) {
				headerElement?.classList.add(styles.active);
			} else {
				headerElement?.classList.remove(styles.active);
			}
		});
	}, []);

	return (
		<header ref={headerRef} className={styles.header}>
			<div className='container'>
				<div className={styles.header__container}>
					<div className={styles.logo}>
						<span>D.</span>
						<span>M.</span>
					</div>
					<nav className={styles.navbar}>
						<ul>
							<li>
								<a href='' className={styles.active}>
									home
								</a>
								<div className={styles.line}></div>
							</li>
							{/* <li>
								<a href='/contact'>contact</a>
								<div className={styles.line}></div>
							</li> */}
							<li>
								<a href='#projects'>projects</a>
								<div className={styles.line}></div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
