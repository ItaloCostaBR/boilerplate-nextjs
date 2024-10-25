import localFont from 'next/font/local'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import './globals.scss'
import Transition from '@/app/transition'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	openGraph: {
		title: 'Create Next App',
		description: 'Generated by create next app',
		// images: `/images/ogimage.jpg`,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<main>
					<Transition>{children}</Transition>
				</main>
				<Footer />
			</body>
		</html>
	)
}
