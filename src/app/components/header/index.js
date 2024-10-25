'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import './index.scss'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const currentPathname = usePathname()
	const navLinks = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Page 2',
			link: '/page2',
		},
	]
	const scrollHeader = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop
		setIsScrolled(scrollTop > 100)
	}

	useEffect(() => {
		scrollHeader()
		window.addEventListener('scroll', scrollHeader)
	}, [])

	return (
		<header id="header" className={isScrolled ? 'scrolled' : ''}>
			<div className="container">
				<nav>
					<ul className="nav justify-content-center">
						{navLinks.map((item, idx) => {
							const isActive = currentPathname === item.link
							return (
								<li
									key={idx}
									className={isActive ? 'active' : ''}
								>
									<Link href={item.link}>{item.name}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}
