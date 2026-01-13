'use client';

import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicyPage = () => {
	return (
		<motion.section 
			className="flex h-full flex-col gap-2.5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div 
				className="font-title px-5 py-8 text-4xl font-bold tracking-tight text-zinc-100"
				initial={{ x: -20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				Privacy Policy
			</motion.div>
			<motion.div 
				className="bg-background flex flex-col items-center gap-5 rounded-t-2xl p-5 pt-12"
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
			>
				<motion.div 
					className="font-title text-foreground/70 text-sm font-medium uppercase"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.7 }}					>
					Please just pretend this is legit privacy policy text. thank you :)
				</motion.div>
				<div className="w-full text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias,
					amet aspernatur distinctio exercitationem facilis in iste laboriosam
					laborum, maxime, minima possimus praesentium qui quibusdam
					reprehenderit tempore temporibus vero voluptatum? Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Ad alias, amet aspernatur
					distinctio exercitationem facilis in iste laboriosam laborum, maxime,
					minima possimus praesentium qui quibusdam reprehenderit tempore
					temporibus vero voluptatum?
				</div>
				<div className="w-full text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias,
					amet aspernatur distinctio exercitationem facilis in iste laboriosam
					laborum, maxime, minima possimus praesentium qui quibusdam
					reprehenderit tempore temporibus vero voluptatum? Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Ad alias, amet aspernatur
					distinctio exercitationem facilis in iste laboriosam laborum, maxime,
					minima possimus praesentium qui quibusdam reprehenderit tempore
					temporibus vero voluptatum?
				</div>
				<div className="w-full text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias,
					amet aspernatur distinctio exercitationem facilis in iste laboriosam
					laborum, maxime, minima possimus praesentium qui quibusdam
					reprehenderit tempore temporibus vero voluptatum? If you see this,
					reply to our forum post with a Yoohoo lol. Ad alias, amet aspernatur
					distinctio exercitationem facilis in iste laboriosam laborum, maxime,
					minima possimus praesentium qui quibusdam reprehenderit tempore
					temporibus vero voluptatum?
				</div>
			</motion.div>
		</motion.section>
	);
};

export default PrivacyPolicyPage;
