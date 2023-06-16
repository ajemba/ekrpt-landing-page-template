import Footer from "@/components/ui/footer";
import Link from "next/link";


export const metadata = {
  title: ' About Us - Receive Text, Calls, SMS & OTP Online Real US Numbers',
  description: 'Get Real Mobile Phone Numbers to Verify Your Social Accounts Online',
}

export default function AboutUs() {
    return (
      
      <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">About Us</h1>
            <p className="text-xl text-gray-600">Verify your online social profiles, Dating profiles, User accounts and lots more with our mobile numbers!</p>
          </div>
  
            {/* Form */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-600 mb-5">
                <h1 className="h1 mb-4"><strong>Real US Numbers</strong></h1>
              </p>
              <p className="text-xl text-gray-600 mb-5"><strong>Get SMS Codes Securely & Privately with our platform</strong> 
              </p>
              <p className="text-xl text-gray-600 mb-5">As quick and easy, just like ABC... you can verify your online social profiles, dating profiles, user accounts and a lot more while safeguarding your personal and private information.</p>
              <p className="text-xl text-gray-600 mb-5"> Our services works on all major website, mobile applications and other systems that requires a mobile phone verification.</p>
              <p className="text-xl text-gray-600 mb-5"></p>
              <p className="text-xl text-gray-600 mb-5">
                <strong className="pt-5">Ecosystem Services</strong>
              </p>
              <p className="text-xl text-gray-600 mb-5">
              This SERVICE is provided by Ekrpt Networking Labs and is intended for use as is. The Ekrpt Networking comprises of privacy preserving apps and are built as Commercial Apps, serving different sections of the privacy preserving ecosystem.
              </p>
              <div>
                <p className="text-xl text-gray-600 mb-5">
                  All our ecosystem apps don't collect information used to identify you.
                </p>
                <p className="text-xl text-gray-600 mb-5">
                  Link to the privacy policy of third-party service providers used
                  by the app
                </p>
                <ul>
                  <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                    <Link
                      href="https://www.smsbuds.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SMS Buds
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                    <Link
                      href="https://www.piggypost.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Piggy Post
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
       </div>
       <Footer />
      </section>
      
    );
  }