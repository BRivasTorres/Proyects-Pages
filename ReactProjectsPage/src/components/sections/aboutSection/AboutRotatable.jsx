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
    
    const handleTouchStart = (e) => {
		const touch = e.touches[0];
		setRotate((prev) => ({
			...prev,
			isDragging: true,
			startAngle: getAngle(
				touch,
				rotatebleRef.current.getBoundingClientRect()
			),
		}));
	};

	const handleTouchEnd = () => {
		setRotate((prev) => ({
			...prev,
			isDragging: false,
		}));
	};

	const handleTouchMove = (e) => {
		if (rotate.isDragging) {
			const touch = e.touches[0];
			const angle = getAngle(
				touch,
				rotatebleRef.current.getBoundingClientRect()
			);
			const diff = angle - rotate.startAngle;
			setRotate((prev) => ({
				...prev,
				currentAngle: prev.currentAngle + diff,
				startAngle: angle,
			}));
		}
	};
    
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
