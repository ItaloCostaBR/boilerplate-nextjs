'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function Transition({ children }) {
	return (
		<AnimatePresence
			mode="wait"
			initial={true}
			onExitComplete={() => window.scrollTo(0, 0)}
		>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeInOut', duration: 0.25 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
