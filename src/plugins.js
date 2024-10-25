'use client'

import { useEffect } from 'react'

function Plugins() {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min')
	}, [])
	return null
}

export default Plugins
