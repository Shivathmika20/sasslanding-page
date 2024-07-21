"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import emoji from "../public/emojistar.png";
import helix from "../public/helix.png";
function Access() {
	return (
		<div className="bg-black text-white py-16 sm:py-32">
			<div className="px-4 max-w-xl mx-auto relative ">
				<motion.div
					animate={{ y: -30 }}
					className="absolute -left-[20dvw] md:-left-[10dvw] top-0 hidden md:block "
					transition={{
						ease: "easeOut",
						duration: 2,
            repeat: Infinity,
            
					}}
				>
					<Image
						src={emoji}
						alt="emoji"
						className="w-[20dvw] md:w-[25dvw] lg:w-[10dvw]"
					/>
				</motion.div>
				<h2 className=" text-center text-4xl sm:text-6xl font-bold tracking-tighter">
					Get Instant Access
				</h2>
				<p className="text-center mt-5 text-xl  text-white/70 max-w-xl mx-auto">
					Celebrate the joy of accomplishment with an app designed to
					track your progress and motivate your efforts.
				</p>
				<form
					action=""
					className="flex flex-col items-center mt-8 gap-3 max-w-md mx-auto sm:flex-row"
				>
					<input
						type="email"
						placeholder="name@gmail.com"
						className="h-12 bg-white/20  rounded-lg  px-5 py-3 font-medium placeholder:text-[#9CA3AF] flex-1"
					/>
					<button className="h-12 bg-white text-black rounded-lg px-5">
						Get Access
					</button>
				</form>
				<motion.div
					className="absolute -right-[20dvw] md:-right-[10dvw] top-0 hidden md:block "
					animate={{ y: 30 }}
					transition={{
						ease: "easeOut",
						duration: 2,
            repeat: Infinity,
            
            
					}}
				>
					<Image
						src={helix}
						alt="helix"
						className="w-[20dvw] md:w-[25dvw] lg:w-[10dvw]"
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default Access;
