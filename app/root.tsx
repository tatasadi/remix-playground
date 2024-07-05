import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { LinksFunction } from '@remix-run/node'
import tailwindStylesheetUrl from './styles/tailwind.css?url'
import fontStylesheetUrl from './styles/font.css?url'

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
		{ rel: 'stylesheet', href: tailwindStylesheetUrl },
		{ rel: 'stylesheet', href: fontStylesheetUrl },
	]
}
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
