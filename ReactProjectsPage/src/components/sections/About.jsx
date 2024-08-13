import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faNode, faNpm, faFigma, faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const About = () => {
	const rotatebleRef = useRef(null)
	const iconsRef = useRef([])
	const [rotate, setRotate] = useState({
		isDraggin: false,
		startAngle: 0,
		currentAngle: 0
	})
	
	const iconsStack = [
		faReact,
		faHtml5,
		faCss3,
		faJs,
		faNode,
		faNpm,
		faFigma,
		faUnsplash,
		faCodeBranch
	];
	
	const handleMouseDown = (e) => {
		setRotate(prevVal => ({
			...prevVal,
			isDraggin: true,
			startAngle: getAngle(e)
		}))
	}
	
	const handleMouseUp = (e) => {
		setRotate(prevVal => ({
			...prevVal,
			isDraggin: false
		}))
	}	
	const getAngle = (e) => {
		const rect = rotatebleRef.current.getBoundingClientRect();
		const centerX = rect.left + (rect.width / 2)
		const centerY = rect.top + (rect.width / 2)
		const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX)
		return radians * (180 / Math.PI)
	}
	
	const handleMouseMouve = (e) => {
		if(rotate.isDraggin === true) {
			const angle = getAngle(e)
			const diff = angle - rotate.startAngle
			setRotate(prevVal => ({
				...prevVal,
				currentAngle: rotate.currentAngle + diff,
				startAngle: angle
			}))
			rotateIcons()
		}
	}
	
	const rotateIcons = () => {
		iconsRef.current.forEach(icon => {
			icon.style.transform = `translate(-50%, -50%) rotate(${-rotate.currentAngle}deg)`
		})
	}
	 
  return (
		<section
			id="about"
			className="min-h-[100vh] bg-quaternary-color grid place-content-center grid-cols-1 sm:grid-cols-2 p-4"
		>
			<div className="">
				<p>
					With these projects I had the opportunity to reinforce
					several React concepts, and I was also able to learn and
					implement new knowledge related to React. I was also able to
					discover other interactive libraries focused on the Frontend
					area.
				</p>

				<div className="border border-blue-800 flex flex-col items-center relative transition-all duration-400">
					<div className=""></div>
					<ul
						className="w-[300px] h-[300px] bg-primary-color relative p-[1rem] rounded-[100%] cursor-grab"
						onMouseDown={(e) => handleMouseDown(e)}
						onMouseUp={(e) => handleMouseUp(e)}
						onMouseMove={(e) => handleMouseMouve(e)}
						ref={rotatebleRef}
						style={{
							transform: `rotate(${rotate.currentAngle}deg)`,
						}}
					>
						{iconsStack.map((icon, id) => {
							return (
								<FontAwesomeIcon
									icon={icon}
									key={id}
									style={{ "--i": id }}
									ref={(el) => iconsRef.current[id] = el}
									className="text-[1.8rem] absolute text-quaternary-color icons cursor-pointer"
								/>
							);
						})}
					</ul>
					<img
						src="./imgs/about.jpeg"
						alt=""
						className="rounded-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px]"
					/>
				</div>
			</div>
			<div>
				<img
					src="./imgs/person-coding.png"
					alt=""
					className="max-w-[100%]"
				/>
			</div>
		</section>
  );
}

export default About
