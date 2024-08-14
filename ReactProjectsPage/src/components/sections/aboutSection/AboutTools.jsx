import AboutRotatable from "./AboutRotatable";

const AboutTools = () => {	
	return (
		<div className="border border-blue-800 flex flex-col items-center relative transition-all duration-400">
			<div className="w-[300px] h-[200px] rounded-[100%] p-[3rem] absolute z-10 hide ">
                <h2 className="text-white font-[500] text-[1.2rem] text-center  ">Click and rotate to see other tools</h2>
            </div>
            <AboutRotatable />
			<img
				src="./imgs/about.jpeg"
				alt=""
				className="rounded-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px]"
			/>
		</div>
	);
};

export default AboutTools;
