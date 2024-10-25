import './page.scss'

export async function generateMetadata({ params }) {
	const { slug } = await params

	return {
		title: slug,
		description: slug,
		openGraph: {
			title: slug,
		},
	}
}

export default async function PageSlug({ params }) {
	const { slug } = await params

	return (
		<div className="page-slug">
			<h3>{slug}</h3>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</div>
	)
}
