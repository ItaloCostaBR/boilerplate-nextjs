import Link from 'next/link'
import Image from 'next/image'
import './page.scss'

export const metadata = {
	title: 'Page 2',
	description: 'Page 2',
	openGraph: {
		title: 'Page 2',
	},
}

export default function Page2() {
	return (
		<div className="page-2">
			{process.env.API}
			<Link href="/page2/slug-here">
				<span className="nav-link">Page Slug</span>
			</Link>
			<div className="container text-center">
				<div className="row">
					<div className="col">
						<div className="card">
							<Image
								width={200}
								height={200}
								src="https://picsum.photos/200"
								className="card-img-top"
								alt="image"
							/>

							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card" aria-hidden="true">
							<Image
								width={200}
								height={200}
								src="https://picsum.photos/200"
								className="card-img-top"
								alt="image"
							/>
							<div className="card-body">
								<h5 className="card-title placeholder-glow">
									<span className="placeholder col-6"></span>
								</h5>
								<p className="card-text placeholder-glow">
									<span className="placeholder col-7"></span>
									<span className="placeholder col-4"></span>
									<span className="placeholder col-4"></span>
									<span className="placeholder col-6"></span>
									<span className="placeholder col-8"></span>
								</p>
								<a
									className="btn btn-primary disabled placeholder col-6"
									aria-disabled="true"
								></a>
							</div>
						</div>
					</div>
					<div className="col">Column</div>
				</div>
			</div>
		</div>
	)
}
