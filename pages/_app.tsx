import Head from 'next/head'
import '../src/style/global.scss'
import '../src/style/typography.scss'

//import { DefaultSeo, LogoJsonLd } from 'next-seo'
//import DefaultSeoProps from '../next-seo.config';

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta name='theme-color' content='#317EFB' />

				<title>Cloud Flight</title>
			</Head>

			{/*
			<DefaultSeo {...DefaultSeoProps} />
			<LogoJsonLd
				logo={`${process.env.NEXT_PUBLIC_HOST}/assets/img/logo.png`}
				url={`${process.env.NEXT_PUBLIC_HOST}`}
			/>
			*/}

			<Component {...pageProps} />
		</>
	)
}

export default App
