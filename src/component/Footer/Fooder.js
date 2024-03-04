import React from 'react'
import {Image} from "antd";

export default function Fooder() {
  return (
    <div className='Fooder'>
        <div className='an'>
            <a href='/'  className='AB'>ABOUT TYPE 2 DIABETES TYPES DIAGNOSIS CAUSES SYMPTOMS TREATMENTS RESOURCES</a>
        </div>
        <div className='imgfooder'>
        <Image
          width={331.52}
          height={47.98}
          src="https://www.diabetesteam.com/assets/dbt/logo_home-546ebcabf03b5b7239b20df2a693684bd3db808902bc92927a1db3575d059cd7.png"
        />
        <p>New To DiabetesTeam? <a href='' className='A'>Learn More</a></p>
        <hr/>
        <div className='fooderline'>
            <div className='qli'>
                    <ul className='ul'>
                         <li className='k'>Quick Links</li>
                         <li><a href='' className='li'>Q&A</a></li>
                         <li><a href='' className='li'>Treatments A-Z</a></li>
                         <li><a href='' className='li'>Resources</a></li>
                         <li><a href='' className='li'>Are You A Provider?</a></li>
                         <li><a href='' className='li'>Crisis</a></li>
                        
                     </ul>
            </div>
            <div className='lu'>
                    <ul className='ul'>
                         <li className='k'>Help With This Site</li>
                         <li><a href='' className='li'>Getting Started</a></li>
                         <li><a href='' className='li'>Help Center</a></li>
                         <li><a href='' className='li'>Community Guidelines</a></li>
                         <li><a href='' className='li'>Accessibility</a></li>
                         
                        
                     </ul>
            </div>
            <div className='lu'>
                    <ul className='ul'>
                         <li className='k'>About Us</li>
                         <li><a href='' className='li'>Partner With Us</a></li>
                         <li><a href='' className='li'>Terms Of Use</a></li>
                         <li><a href='' className='li'>Press/News</a></li>
                         <li><a href='' className='li'>Privacy Policy</a></li>
                         <li><a href='' className='li'>Cookie Policy</a></li>
                         <li><a href='' className='li'>What Is DiabetesTeam</a></li>
                     </ul>
            </div>
            <div className='lu'>
                <p className='k'>Powered By</p>
                <Image
          width={150}
          height={62.19}
          src="https://www.diabetesteam.com/assets/mht/mht_text-f99bc3e4bd3961a44af613d3df87db2b64cd6cc2b15d01317556959b99821628.png"
        />
            </div>
        </div>
        <div>
            <p className='pa'>
                © 2024 MyHealthTeam. All rights reserved.<br/>
                DiabetesTeam is not a medical referral site and does not recommend or endorse any particular provider or medical treatment.<br/>
                No information on DiabetesTeam should be construed as medical and/or health advice.
                </p>
        </div>
        </div>
    </div>
  )
}

