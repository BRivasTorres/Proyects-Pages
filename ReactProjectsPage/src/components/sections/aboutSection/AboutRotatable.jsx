import { useRef, useState } from "react";
import AboutPrintIcons from "./AboutPrintIcons";
import { getAngle } from "../../../utils/getAngle";

const AboutRotatable = ({children}) => {
    const rotatebleRef = useRef(null);
    const [rotate, setRotate] = useState({
        isDragging: false,
        startAngle: 0,
        currentAngle: 0,
    });
	
	const setRotateToFalse = () => {
		setRotate((prev) => ({
			...prev,
			isDragging: false,
		}));
	}
	
	const setRotateStart = (e) => {
		const startRotation = (point) => {
			setRotate((prev) => ({
				...prev,
				isDragging: true,
				startAngle: getAngle(
					point,
					rotatebleRef.current.getBoundingClientRect()
				),
			}));		
		}
		
		switch (e.type) {
			case "mousedown":
				startRotation(e)
				break;
			case "touchdown":	
				startRotation(e.touches[0])	
				break;
		}
	}
	
	const setRotateMove = (e) => {
		const currAngleMoving = (point) => {
			const angle = getAngle(
				point,
				rotatebleRef.current.getBoundingClientRect()
			);
			const diff = angle - rotate.startAngle;
			setRotate((prev) => ({
				...prev,
				currentAngle: prev.currentAngle + diff,
				startAngle: angle,
			}));
		}
		
		if(rotate.isDragging) {
			switch (e.type) {
				case "mousemove":
					currAngleMoving(e)
					break;
				case "touchmove":
					currAngleMoving(e.touches[0])
					break;
			}
		}
	}
	
    const handleMouseDown = (e) => setRotateStart(e);
	const handleTouchStart = (e) => setRotateStart(e);

    const handleMouseMove = (e) => setRotateMove(e);
	const handleTouchMove = (e) => setRotateMove(e);
	
	const handleTouchEnd = () => setRotateToFalse();
    const handleMouseUp = () => setRotateToFalse();
	

    
    return (
		<>
			<ul
				className="w-[300px] h-[300px] bg-primary-color relative p-[1rem] rounded-[100%] cursor-grab"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
				ref={rotatebleRef}
				style={{
					transform: `rotate(${rotate.currentAngle}deg)`,
				}}
			>
				<AboutPrintIcons currentAngle={rotate.currentAngle} />
			</ul>
		</>
	);
}

export default AboutRotatable
