import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faHtml5,
	faCss3,
	faJs,
	faNode,
	faNpm,
	faFigma,
	faUnsplash,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const AboutPrintIcons = ({currentAngle}) => {
	const iconsRef = useRef([]);
	const iconsStack = [
		faReact,
		faHtml5,
		faCss3,
		faJs,
		faNode,
		faNpm,
		faFigma,
		faUnsplash,
		faCodeBranch,
	];
    
    const rotateIcons = () => {
		iconsRef.current.forEach((icon) => {
			icon.style.transform = `translate(-50%, -50%) rotate(${-currentAngle}deg)`;
		});
	};
    
    useEffect(() => {
        rotateIcons();
    }, [currentAngle]);
    
  return (
    <div>
        {iconsStack.map((icon, id) => {
            return (
                <FontAwesomeIcon
                    icon={icon}
                    key={id}
                    style={{ "--i": id }}
                    ref={(el) => (iconsRef.current[id] = el)}
                    className="text-[1.8rem] absolute text-quaternary-color icons cursor-pointer"
                />
            );
        })}
    </div>
  )
}

export default AboutPrintIcons
