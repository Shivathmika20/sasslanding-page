"use client";
import Image from "next/image";
import React from "react";
import showcase from "../public/App Night1.png";
import { motion } from "framer-motion";
function Showcase() {
	return (
		<div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-16 sm:py-20">
			<div className="px-6 mx-auto">
				<h2 className="text-center font-bold text-4xl sm:text-6xl tracking-tighter capitalize">
					Intuitive interface
				</h2>
				<p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
					Celebrate the joy of accomplishment with an app designed to
					track your progress, motivate your efforts, and celebrate
					your successes, one task at a time.
				</p>
				<motion.div
					animate={{ y: -30 }}
					transition={{
						ease: "easeOut",
						duration: 2,
            
					}}
				>
					<Image
						src={showcase}
						alt="showcase"
						width={1000}
						height={1000}
						className="mt-14 mx-auto w-[95%] md:w-7/12 max-w-screen-xl"
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default Showcase;
