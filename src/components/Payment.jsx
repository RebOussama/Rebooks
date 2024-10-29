import React, { useState } from 'react'
import Selector from './Selector'
import '../pages/Membership/Membership.css'

const dataCountries = [
  { "name": "Afghanistan", "independent": false },
  { "name": "Åland Islands", "independent": false },
  { "name": "Albania", "independent": false },
  { "name": "Algeria", "independent": false },
  { "name": "American Samoa", "independent": false },
  { "name": "AndorrA", "independent": false },
  { "name": "Angola", "independent": false },
  { "name": "Anguilla", "independent": false },
  { "name": "Antarctica", "independent": false },
  { "name": "Antigua and Barbuda", "independent": false },
  { "name": "Argentina", "independent": false },
  { "name": "Armenia", "independent": false },
  { "name": "Aruba", "independent": false },
  { "name": "Australia", "independent": false },
  { "name": "Austria", "independent": false },
  { "name": "Azerbaijan", "independent": false },
  { "name": "Bahamas", "independent": false },
  { "name": "Bahrain", "independent": false },
  { "name": "Bangladesh", "independent": false },
  { "name": "Barbados", "independent": false },
  { "name": "Belarus", "independent": false },
  { "name": "Belgium", "independent": false },
  { "name": "Belize", "independent": false },
  { "name": "Benin", "independent": false },
  { "name": "Bermuda", "independent": false },
  { "name": "Bhutan", "independent": false },
  { "name": "Bolivia", "independent": false },
  { "name": "Bosnia and Herzegovina", "independent": false },
  { "name": "Botswana", "independent": false },
  { "name": "Bouvet Island", "independent": false },
  { "name": "Brazil", "independent": false },
  { "name": "British Indian Ocean Territory", "independent": false },
  { "name": "Brunei Darussalam", "independent": false },
  { "name": "Bulgaria", "independent": false },
  { "name": "Burkina Faso", "independent": false },
  { "name": "Burundi", "independent": false },
  { "name": "Cambodia", "independent": false },
  { "name": "Cameroon", "independent": false },
  { "name": "Canada", "independent": false },
  { "name": "Cape Verde", "independent": false },
  { "name": "Cayman Islands", "independent": false },
  { "name": "Central African Republic", "independent": false },
  { "name": "Chad", "independent": false },
  { "name": "Chile", "independent": false },
  { "name": "China", "independent": false },
  { "name": "Christmas Island", "independent": false },
  { "name": "Cocos (Keeling) Islands", "independent": false },
  { "name": "Colombia", "independent": false },
  { "name": "Comoros", "independent": false },
  { "name": "Congo", "independent": false },
  { "name": "Congo, The Democratic Republic of the", "independent": false },
  { "name": "Cook Islands", "independent": false },
  { "name": "Costa Rica", "independent": false },
  { "name": "Cote D'Ivoire", "independent": false },
  { "name": "Croatia", "independent": false },
  { "name": "Cuba", "independent": false },
  { "name": "Cyprus", "independent": false },
  { "name": "Czech Republic", "independent": false },
  { "name": "Denmark", "independent": false },
  { "name": "Djibouti", "independent": false },
  { "name": "Dominica", "independent": false },
  { "name": "Dominican Republic", "independent": false },
  { "name": "Ecuador", "independent": false },
  { "name": "Egypt", "independent": false },
  { "name": "El Salvador", "independent": false },
  { "name": "Equatorial Guinea", "independent": false },
  { "name": "Eritrea", "independent": false },
  { "name": "Estonia", "independent": false },
  { "name": "Ethiopia", "independent": false },
  { "name": "Falkland Islands (Malvinas)", "independent": false },
  { "name": "Faroe Islands", "independent": false },
  { "name": "Fiji", "independent": false },
  { "name": "Finland", "independent": false },
  { "name": "France", "independent": false },
  { "name": "French Guiana", "independent": false },
  { "name": "French Polynesia", "independent": false },
  { "name": "French Southern Territories", "independent": false },
  { "name": "Gabon", "independent": false },
  { "name": "Gambia", "independent": false },
  { "name": "Georgia", "independent": false },
  { "name": "Germany", "independent": false },
  { "name": "Ghana", "independent": false },
  { "name": "Gibraltar", "independent": false },
  { "name": "Greece", "independent": false },
  { "name": "Greenland", "independent": false },
  { "name": "Grenada", "independent": false },
  { "name": "Guadeloupe", "independent": false },
  { "name": "Guam", "independent": false },
  { "name": "Guatemala", "independent": false },
  { "name": "Guernsey", "independent": false },
  { "name": "Guinea", "independent": false },
  { "name": "Guinea-Bissau", "independent": false },
  { "name": "Guyana", "independent": false },
  { "name": "Haiti", "independent": false },
  { "name": "Heard Island and Mcdonald Islands", "independent": false },
  { "name": "Holy See (Vatican City State)", "independent": false },
  { "name": "Honduras", "independent": false },
  { "name": "Hong Kong", "independent": false },
  { "name": "Hungary", "independent": false },
  { "name": "Iceland", "independent": false },
  { "name": "India", "independent": false },
  { "name": "Indonesia", "independent": false },
  { "name": "Iran, Islamic Republic Of", "independent": false },
  { "name": "Iraq", "independent": false },
  { "name": "Ireland", "independent": false },
  { "name": "Isle of Man", "independent": false },
  { "name": "Israel", "independent": false },
  { "name": "Italy", "independent": false },
  { "name": "Jamaica", "independent": false },
  { "name": "Japan", "independent": false },
  { "name": "Jersey", "independent": false },
  { "name": "Jordan", "independent": false },
  { "name": "Kazakhstan", "independent": false },
  { "name": "Kenya", "independent": false },
  { "name": "Kiribati", "independent": false },
  { "name": "Korea, Democratic People'S Republic of", "independent": false },
  { "name": "Korea, Republic of", "independent": false },
  { "name": "Kuwait", "independent": false },
  { "name": "Kyrgyzstan", "independent": false },
  { "name": "Lao People'S Democratic Republic", "independent": false },
  { "name": "Latvia", "independent": false },
  { "name": "Lebanon", "independent": false },
  { "name": "Lesotho", "independent": false },
  { "name": "Liberia", "independent": false },
  { "name": "Libyan Arab Jamahiriya", "independent": false },
  { "name": "Liechtenstein", "independent": false },
  { "name": "Lithuania", "independent": false },
  { "name": "Luxembourg", "independent": false },
  { "name": "Macao", "independent": false },
  { "name": "Macedonia, The Former Yugoslav Republic of", "independent": false },
  { "name": "Madagascar", "independent": false },
  { "name": "Malawi", "independent": false },
  { "name": "Malaysia", "independent": false },
  { "name": "Maldives", "independent": false },
  { "name": "Mali", "independent": false },
  { "name": "Malta", "independent": false },
  { "name": "Marshall Islands", "independent": false },
  { "name": "Martinique", "independent": false },
  { "name": "Mauritania", "independent": false },
  { "name": "Mauritius", "independent": false },
  { "name": "Mayotte", "independent": false },
  { "name": "Mexico", "independent": false },
  { "name": "Micronesia, Federated States of", "independent": false },
  { "name": "Moldova, Republic of", "independent": false },
  { "name": "Monaco", "independent": false },
  { "name": "Mongolia", "independent": false },
  { "name": "Montserrat", "independent": false },
  { "name": "Morocco", "independent": false },
  { "name": "Mozambique", "independent": false },
  { "name": "Myanmar", "independent": false },
  { "name": "Namibia", "independent": false },
  { "name": "Nauru", "independent": false },
  { "name": "Nepal", "independent": false },
  { "name": "Netherlands", "independent": false },
  { "name": "Netherlands Antilles", "independent": false },
  { "name": "New Caledonia", "independent": false },
  { "name": "New Zealand", "independent": false },
  { "name": "Nicaragua", "independent": false },
  { "name": "Niger", "independent": false },
  { "name": "Nigeria", "independent": false },
  { "name": "Niue", "independent": false },
  { "name": "Norfolk Island", "independent": false },
  { "name": "Northern Mariana Islands", "independent": false },
  { "name": "Norway", "independent": false },
  { "name": "Oman", "independent": false },
  { "name": "Pakistan", "independent": false },
  { "name": "Palau", "independent": false },
  { "name": "Palestinian Territory, Occupied", "independent": false },
  { "name": "Panama", "independent": false },
  { "name": "Papua New Guinea", "independent": false },
  { "name": "Paraguay", "independent": false },
  { "name": "Peru", "independent": false },
  { "name": "Philippines", "independent": false },
  { "name": "Pitcairn", "independent": false },
  { "name": "Poland", "independent": false },
  { "name": "Portugal", "independent": false },
  { "name": "Puerto Rico", "independent": false },
  { "name": "Qatar", "independent": false },
  { "name": "Reunion", "independent": false },
  { "name": "Romania", "independent": false },
  { "name": "Russian Federation", "independent": false },
  { "name": "RWANDA", "independent": false },
  { "name": "Saint Helena", "independent": false },
  { "name": "Saint Kitts and Nevis", "independent": false },
  { "name": "Saint Lucia", "independent": false },
  { "name": "Saint Pierre and Miquelon", "independent": false },
  { "name": "Saint Vincent and the Grenadines", "independent": false },
  { "name": "Samoa", "independent": false },
  { "name": "San Marino", "independent": false },
  { "name": "Sao Tome and Principe", "independent": false },
  { "name": "Saudi Arabia", "independent": false },
  { "name": "Senegal", "independent": false },
  { "name": "Serbia and Montenegro", "independent": false },
  { "name": "Seychelles", "independent": false },
  { "name": "Sierra Leone", "independent": false },
  { "name": "Singapore", "independent": false },
  { "name": "Slovakia", "independent": false },
  { "name": "Slovenia", "independent": false },
  { "name": "Solomon Islands", "independent": false },
  { "name": "Somalia", "independent": false },
  { "name": "South Africa", "independent": false },
  { "name": "South Georgia and the South Sandwich Islands", "independent": false },
  { "name": "Spain", "independent": false },
  { "name": "Sri Lanka", "independent": false },
  { "name": "Sudan", "independent": false },
  { "name": "Suriname", "independent": false },
  { "name": "Svalbard and Jan Mayen", "independent": false },
  { "name": "Swaziland", "independent": false },
  { "name": "Sweden", "independent": false },
  { "name": "Switzerland", "independent": false },
  { "name": "Syrian Arab Republic", "independent": false },
  { "name": "Taiwan, Province of China", "independent": false },
  { "name": "Tajikistan", "independent": false },
  { "name": "Tanzania, United Republic of", "independent": false },
  { "name": "Thailand", "independent": false },
  { "name": "Timor-Leste", "independent": false },
  { "name": "Togo", "independent": false },
  { "name": "Tokelau", "independent": false },
  { "name": "Tonga", "independent": false },
  { "name": "Trinidad and Tobago", "independent": false },
  { "name": "Tunisia", "independent": false },
  { "name": "Turkey", "independent": false },
  { "name": "Turkmenistan", "independent": false },
  { "name": "Turks and Caicos Islands", "independent": false },
  { "name": "Tuvalu", "independent": false },
  { "name": "Uganda", "independent": false },
  { "name": "Ukraine", "independent": false },
  { "name": "United Arab Emirates", "independent": false },
  { "name": "United Kingdom", "independent": false },
  { "name": "United States", "independent": false },
  { "name": "United States Minor Outlying Islands", "independent": false },
  { "name": "Uruguay", "independent": false },
  { "name": "Uzbekistan", "independent": false },
  { "name": "Vanuatu", "independent": false },
  { "name": "Venezuela", "independent": false },
  { "name": "Viet Nam", "independent": false },
  { "name": "Virgin Islands, British", "independent": false },
  { "name": "Virgin Islands, U.S.", "independent": false },
  { "name": "Wallis and Futuna", "independent": false },
  { "name": "Western Sahara", "independent": false },
  { "name": "Yemen", "independent": false },
  { "name": "Zambia", "independent": false },
  { "name": "Zimbabwe", "independent": false }
]

const Payment = () => {
    const [Country, setCountry] = useState("")
    const [selected, setSelected] = useState("");
  return (
    <div>
         <div className='font-inter'>

          
<div className="w-full pt-20 pb-12  mx-auto rounded-md bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>

  <div className="mb-6">
    <h1 className=" font-bold text-xl ">Checkout</h1>
  </div>
  <div className="mb-3 flex -mx-2">
    <div className="px-2 w-1/2">
      <label htmlFor="type1" className="flex items-center cursor-pointer py-2  pl-4 rounded-md">
        <input type="radio" className="form-radio h-5 w-5 text-[#44B89D] " name="type" id="type1" defaultChecked />
        <img src="./visa.png" className="h-8 py-0 ml-3 bg-gray-100 rounded-lg p-2" alt="Credit Card" />
        <h1 className='text-sm  pl-4'>Credit Card</h1>
      </label>
    </div>
    <div className="px-2 w-1/2">
      <label htmlFor="type2" className="flex items-center cursor-pointer py-2  pl-4 rounded-md">
        <input type="radio" className="form-radio h-5 w-5 text-[#44B89D] " name="type" id="type2" />
        <img src="./paypal.png" className="h-8 px-5 py-2 ml-3 bg-gray-100 rounded-lg p-2" alt="PayPal" />
        <h1 className='text-sm pl-4'>Paypal</h1>
      </label>
    </div>
  </div>
  <div className="my-8">
    <h1 className=" font-bold text-xl ">Billing Details</h1>
  </div>
  <div className='inputs_Billing flex flex-col gap-y-4'>
    <div className='grid grid-cols-2 gap-4'>
      <input type="email" placeholder='Email Address' className='border-2 p-2  rounded-md placeholder:text-black shadow-sm' />
      <input type="password" placeholder='Password' className='border-2 p-2   rounded-md placeholder:text-black shadow-sm' />
    </div>
    <div className='grid grid-cols-2 gap-4'>
      <Selector selected={Country} setSelected={setCountry} title="Country" data={dataCountries} />
      <input type="number" placeholder='Billing Zip / Postal Code' className=' max-h-12 h-10 border-2 p-2   rounded-md placeholder:text-black shadow-sm' />
    </div>
  </div>
  <div className="my-8">
    <h1 className=" font-bold text-xl ">Credit Card Info</h1>
  </div>
  <div className='flex flex-col gap-4'>
    <input type="number" placeholder='Card number' className='border-2 p-2 w-full  rounded-md placeholder:text-black shadow-sm' />
    <div className='grid grid-cols-2 gap-4'>
      <input type="number" placeholder='Card holder' className='border-2 p-2  rounded-md placeholder:text-black shadow-sm' />
      <div className='flex gap-4 '>
        <input type="number" placeholder='EXP. Date' className='border-2 p-2 w-1/2  rounded-md placeholder:text-black shadow-sm' />
        <input type="number" placeholder='CCV' className='border-2 p-2  w-1/2  rounded-md placeholder:text-black shadow-sm' />
      </div>

    </div>

  </div>
</div>
</div>
      
    </div>
  )
}

export default Payment
