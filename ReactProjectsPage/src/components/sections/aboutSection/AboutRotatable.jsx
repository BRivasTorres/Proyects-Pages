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

    const handleMouseDown = (e) => {
        setRotate((prev) => ({
            ...prev,
            isDragging: true,
            startAngle: getAngle(e, rotatebleRef.current.getBoundingClientRect()),
        }));
    };

    const handleMouseUp = () => {
        setRotate((prev) => ({
            ...prev,
            isDragging: false,
        }));
    };

    const handleMouseMove = (e) => {
        if (rotate.isDragging) {
            const angle = getAngle(e, rotatebleRef.current.getBoundingClientRect());
            const diff = angle - rotate.startAngle;
            setRotate((prev) => ({
                ...prev,
                currentAngle: prev.currentAngle + diff,
                startAngle: angle,
            }));
        }
    };
    
    return (
		<div
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			ref={rotatebleRef}
			style={{
				transform: `rotate(${rotate.currentAngle}deg)`,
			}}
		>
			<ul className="w-[300px] h-[300px] bg-primary-color relative p-[1rem] rounded-[100%] cursor-grab">
			    <AboutPrintIcons currentAngle={rotate.currentAngle} />
            </ul>
		</div>
	);
}

export default AboutRotatable
