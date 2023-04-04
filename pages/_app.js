import Head from 'next/head'
import '../styles/global.css'

import dynamic from 'next/dynamic'
// Import WalletConnectionProvider from components
// Import the solana wallet css
// import { WalletConnectionProvider } from '../components/WalletConnectionProvider'
import "@solana/wallet-adapter-react-ui/styles.css"


const WalletConnectionProvider = dynamic(() => import('../components/WalletConnectionProvider'), {
    ssr: false,
})

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Memoreez</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                <WalletConnectionProvider>
                <Component {...pageProps} />
                </WalletConnectionProvider>
                    
            </main>
        </>
    )
}

export default MyApp
