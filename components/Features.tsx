"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import vec from "../public/Vector.png";

const features = [
	{
		title: "Integration ecosystem",
		desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
	},
	{
		title: "Goal setting and tracking",
		desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
	},
	{
		title: "Secure data encryption",
		desc: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
	},
];
function Features() {
	return (
		<div className="bg-black text-white py-16 md:py-20">
			<div className="px-10 mx-auto max-w-screen-lg">
				<h2 className="font-bold text-4xl md:text-6xl text-center tracking-tighter">
					Everything you need
				</h2>
				<p className="text-center mt-5 text-lg text-white/70 max-w-xl mx-auto text-pretty">
					Enjoy customizable lists, team work tools, and smart
					tracking all in one place. Set tasks, get reminders, and see
					your progress simply and quickly.
				</p>

				<div className="mt-16 flex flex-col sm:flex-row gap-12 ">
					{features.map(({ title, desc }) => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
						>
							<div
								key={title}
								className=" border border-white/40 rounded-xl px-6 py-10 text-center hover:border-[#5D2CA8] min-h-80"
							>
								<div className="inline-flex items-center justify-center rounded-xl text-center bg-white h-14 w-14 ">
									<Image
										src={vec}
										alt="vector"
										width={500}
										height={500}
										className="size-10"
									/>
								</div>
								<h3 className="mt-6 font-bold">{title}</h3>
								<p className="mt-2 text-white/70 leading-5">{desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
