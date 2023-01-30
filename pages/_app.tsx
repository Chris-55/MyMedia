import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setisSSR] = useState(true)

  useEffect(() =>  {
    setisSSR(false);
  }, [])

    if(isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
        <Navbar />
        <div className="flex-gap-6 md:gap-20">
          <div className="h-[0vh]  xl:hover:overflow-auto">
            <Sidebar />
          </div>
          <div className="flex h-screen items-center justify-center">
            <Component {...pageProps} />
          </div>
        </div>   
    </GoogleOAuthProvider>   
  );
}
