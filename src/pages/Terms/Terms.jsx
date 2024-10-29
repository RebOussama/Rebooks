import React from 'react'
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import { Link } from 'react-router-dom';


const Terms = () => {
    return (
        <div>
            <Header />

            <div className='flex flex-col items-center my-16 gap-16'>
                <h1 className='text-[#1B1A32] text-2xl font-bold font-jomolhari'>Terms and Conditions of Use</h1>

                <div className='flex flex-col w-4/5 font-inter gap-6'>
                    <div>
                        <h1 className='font-black mb-4'>Terms of Service</h1>
                        <p>These Terms of Service ("Terms") govern your use of the ReBooks website and services (collectively referred to as the "Service"), operated by [Your Company Name] ("we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p>
                    </div>
                    <div>
                        <ol className='flex flex-col gap-4'>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>1. Account Registration</h1>
                                <p>1.1. You must be at least 18 years old to create an account on ReBooks. By creating an account, you represent that you are at least 18 years old and capable of entering into a legally binding agreement.</p>
                                <p>1.2. You agree to provide accurate and complete information when creating your account and to keep your account information updated.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>2. Use of the Service</h1>
                                <p>2.1. You may use the Service solely for your personal, non-commercial use and in compliance with these Terms and all applicable laws and regulations.</p>
                                <p>2.2. You agree not to engage in any activity that interferes with or disrupts the functioning of the Service, including but not limited to hacking, distributing malware, or transmitting spam.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>3. Buying, Selling, and Exchanging Books</h1>
                                <p>3.1. ReBooks provides a platform for users to buy, sell, and exchange books. We do not own or sell any books listed on the platform and are not responsible for the content, quality, or legality of any listings.</p>
                                <p>3.2. You agree to comply with all applicable laws and regulations when buying, selling, or exchanging books on ReBooks, including but not limited to copyright laws and restrictions on the sale of certain materials.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>4. Premium Membership</h1>
                                <p>4.1. ReBooks offers premium membership options with additional features and benefits. By subscribing to premium membership, you agree to pay the applicable fees and abide by the terms and conditions of the membership plan you select.</p>
                                <p>4.2. We reserve the right to change, modify, or discontinue premium membership options and features at any time without prior notice.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>5. Intellectual Property</h1>
                                <p>5.1. All content on the ReBooks website, including text, images, logos, and software, is owned by or licensed to us and is protected by copyright and other intellectual property laws.</p>
                                <p>5.2. You may not reproduce, distribute, modify, or create derivative works of any content on the ReBooks website without our prior written consent.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>6. Privacy Policy</h1>
                                <p>6.1. Our Privacy Policy governs the collection, use, and disclosure of your personal information when using the Service. By using the Service, you consent to the terms of our Privacy Policy.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>7. Limitation of Liability</h1>
                                <p>7.1. To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, whether based on warranty, contract, tort (including negligence), or any other legal theory.</p>                    </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>8. Governing Law</h1>
                                <p>8.1. These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>9. Changes to Terms</h1>
                                <p>9.1.  We reserve the right to update or modify these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting on this page.</p>
                            </li>
                            <li className='flex flex-col gap-4'>
                                <h1 className='font-bold'>10. Contact Us</h1>
                                <p>10.1. If you have any questions about these Terms, please contact us at <Link to="/ContactUs" className="text-[#283342] underline font-bold">Contact Us</Link>.</p>                    </li>
                        </ol>

                    </div>


                </div>

            


            </div>

            <Footer />
        </div>
    )
}

export default Terms
