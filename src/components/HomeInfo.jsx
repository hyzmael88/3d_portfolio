import Link from 'next/link'
import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import Image from 'next/image'

const InfoBox = ({text,link,btnText}) => {
    return (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
              {text}
            </p>
            <Link href={link} className='neo-brutalism-white neo-btn'>{btnText}
            <Image src={arrow}  className='w-4 h-4 object-contain' alt='arrow icon'/>
            </Link>
        </div>
    )
}

const renderContent = {
    1:(
        <h1 className='sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Hyzmael</span> ✌ 
        <br/>
        A Software Engineer Form Mexico
        </h1>
    ),
    2:(
        <InfoBox
        text='Worked with many companies and picked up many skills along the way'
        link="/Projects"
        btnText="Visit my portfolio"

        />
    ),
    3:(
        <InfoBox
        text='Led multiple projects to success over the years. Curious about the imapct?'
        link="/About"
        btnText="Learn More"

        />
    ),
    4:(
        <InfoBox
        text='Need a project done or loocking for a dev? Im just a few keystrokes away'
        link="/Contact"
        btnText="Lets Talk!"

        />
    ),
}



function HomeInfo({currentStage}) {
    return renderContent[currentStage] || null

}

export default HomeInfo