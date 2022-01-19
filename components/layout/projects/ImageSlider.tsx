import React, { useRef, useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";
import Image from "next/image";

const ImageSlider: React.FC<{ images: any[]; projectName: string }> = ({
	images,
	projectName,
}) => {
	const [currentImg, setCurrentImg] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		activateController(projectName, currentImg);
		moveSlider(projectName, currentImg);
	}, [currentImg, projectName]);

	const changeImage = (index: number) => {
		setCurrentImg(index);
	};

	function activateController(sliderName: string, currentImg: number) {
		const controllers = document.querySelectorAll(
			`[data-project__images-controller=${sliderName}]`
		);
		controllers.forEach((controller, index) => {
			if (index === currentImg) {
				controller.classList.add(styles.active);
			} else {
				controller.classList.remove(styles.active);
			}
		});
	}

	function moveSlider(sliderName: string, currentImg: number) {
		const slider: HTMLDivElement = document.querySelector(
			`[data-project__images-slider=${sliderName}]`
		)!;
		slider.style.transform = `translate(-${currentImg * 100}%,0px)`;
	}

	return (
		<>
			<div className={styles.sliderContainer}>
				<div
					ref={sliderRef}
					className={styles.slider}
					data-project__images-slider={projectName}
				>
					{images.map(image => {
						return (
							<div key={Math.random()} className={styles.slide}>
								<Image src={image} alt='' />
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles.controllers}>
				{images.map((image, index) => {
					return (
						<button
							key={Math.random()}
							data-project__images-controller={projectName}
							onClick={() => {
								changeImage(index);
							}}
							className={styles.controller}
						></button>
					);
				})}
			</div>
		</>
	);
};

export default ImageSlider;
