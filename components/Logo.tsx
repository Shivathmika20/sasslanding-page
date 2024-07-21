import React from "react";
import Image from "next/image";
import acme from "../public/acme 1.png";
import quantum from "../public/quantum 1.png";
import apex from "../public/apex 1.png";
import celestia from "../public/celestia 1.png";
import echo from "../public/echo 1.png";
import pulse from "../public/pulse 1.png";



function Logo() {
  
	return (
		<div className="bg-black text-white py-16 sm:py-20 ">
			<div className=" px-8 flex flex-col justify-center items-center">
				<h2 className="text-center text-white/50 text-lg">
					Trusted by the world’s most
					<br className="sm:hidden" /> innovative teams
				</h2>
        <div className="marquee">
				<div className=" marquee-content flex justify-between items-center gap-10 mt-12 w-full max-w-screen-xl">
					<Image
						src={acme}
						alt="acme"
						width={500}
						height={500}
						className="w-24 md:w-30"
					/>
					<Image
						src={quantum}
						alt="quantum"
						width={500}
						height={500}
						className="w-24 md:w-30"
					/>

					<Image
						src={echo}
						alt="echo"
						width={500}
						height={500}
						className="w-24 md:w-30"
					/>
					<Image
						src={celestia}
						alt="celestia"
						width={500}
						height={500}
						className="w-24 md:w-30"
					/>

					<Image
						src={pulse}
						alt="pulse"
						width={500}
						height={500}
						className="w-20 md:w-30"
					/>
					<Image
						src={apex}
						alt="apex"
						width={500}
						height={500}
						className="w-20 md:w-30"
					/>
				</div>
       </div>
			</div>
      
		</div>
	);
}

export default Logo;
