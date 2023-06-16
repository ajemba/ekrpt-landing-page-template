export const metadata = {
  title: 'Receive Text SMS & OTP Online - US Phone Numbers',
  description: 'Get Real US Phone Numbers to Verify Your Social Accounts Online',
  keywords: 'sms verification,voice verification,mobile phone numbers,rental numbers,non-voip us numbers,non voip usa numbers,non virtual usa number,ekrptsms,text verification,non voip number for verification,receive sms online non voip,non voip sms verification,non voip phone number,non voip sms receiver,non voip phone number app,non voip phone number for verification,verified text,sms account verification,account verification,phone verification,text verification',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <meta property="og:image" content="http://ekrpt.com/api/og" /> 
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
