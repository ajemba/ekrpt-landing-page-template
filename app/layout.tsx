import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Avatar from './api/og/route'
import { Analytics } from '@vercel/analytics/react'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  
  title: 'Real US Numbers - Receive Codes Online Verify Your Social Accounts Online',
  description: 'Get Real US Mobile Phone Numbers to Verify Your Social Accounts Online',
  keywords: 'sms verification,voice verification,mobile phone numbers,rental numbers,non-voip us numbers,non voip usa numbers,non virtual usa number,ekrptsms,text verification,non voip number for verification,receive sms online non voip,non voip sms verification,non voip phone number,non voip sms receiver,non voip phone number app,non voip phone number for verification,verified text,sms account verification,account verification,phone verification,text verification',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
