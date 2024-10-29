import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div>
        <Header/>

        <div className='flex flex-col items-center my-16 gap-16'>
                <h1 className='text-[#1B1A32] text-2xl font-bold font-jomolhari'>Privacy Policy</h1>

                <div className='flex flex-col w-4/5 font-inter gap-6'>
                    <div>
                        <h1 className='font-black mb-4'>Privacy Policy</h1>
                        <p>This Privacy Policy ("Policy") describes how [Your Company Name] ("we", "us", or "our") collects, uses, and protects the personal information you provide when using the ReBooks website and services (collectively referred to as the "Service"). By using the Service, you agree to the terms of this Policy.</p>
                    </div>
                    <div>
                        <ol className='flex flex-col gap-4'>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>1. Information We Collect</h1>
                                <p>1.1. Personal Information: When you create an account on ReBooks, we may collect personal information such as your name, email address, and phone number.</p>
                                <p>1.2. Book Listings: If you list books for sale or exchange on ReBooks, we may collect information about the books you list, including titles, authors, descriptions, and photos.</p>
                                <p>1.3. Transaction Information: When you buy, sell, or exchange books on ReBooks, we may collect transaction information such as purchase history, shipping addresses, and payment details.</p>
                                <p>1.4. Usage Data: We may collect information about how you interact with the Service, including pages visited, time spent on the site, and referral sources.</p>
                                
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>2. How We Use Your Information</h1>
                                <p>2.1. We use the information we collect to provide and improve the Service, process transactions, and communicate with you about your account and transactions.</p>
                                <p>2.2. We may also use your information to personalize your experience on ReBooks, including recommending books and features that may be of interest to you.</p>
                                <p>2.3. We may use aggregate data for statistical analysis, research, and marketing purposes, but we will not disclose individual user information without your consent.</p>

                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>3. How We Protect Your Information</h1>
                                <p>3.1. We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>4. Sharing Your Information</h1>
                                <p>4.1. We may share your personal information with third-party service providers who assist us in operating the Service, such as payment processors and shipping companies. These third parties are obligated to protect your information in accordance with this Policy.</p>
                                <p>4.2. We may also disclose your information as required by law or to comply with a legal obligation, such as in response to a subpoena or court order.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>5. Your Choices</h1>
                                <p>5.1. You may update or correct your account information at any time by logging in to your ReBooks account and accessing your profile settings.</p>
                                <p>5.2.  You may opt out of receiving promotional emails from us by following the unsubscribe instructions included in each email.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>6. Children's Privacy</h1>
                                <p> ReBooks is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>7. Changes to this Policy</h1>
                                <p> We reserve the right to update or modify this Policy at any time without prior notice. Any changes to this Policy will be effective immediately upon posting on this page.</p>
                            </li>
                
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>8. Contact Us</h1>
                                <p>8.1. If you have any questions about these Terms, please contact us at <Link to="/ContactUs" className="text-[#283342] underline font-bold">Contact Us</Link>.</p>                    </li>
                        </ol>

                    </div>


                </div>


            </div>

        


        <Footer/>
    </div>
  )
}

export default Privacy
