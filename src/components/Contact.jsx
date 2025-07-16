import React from 'react'
import { openingHours } from '../../constants'
import { socials } from '../../constants'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'

const Contact = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type:'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut'
    })

    timeline.from(titleSplit.words, {
      opacity:0,yPercent:100, stagger:0.02,duration:1.5
    })
    .from('#contact h3, #contact p',{
      opacity:0,yPercent:100, stagger:0.02,duration:1.5
    })
    .to('#f-right-leaf', {
      opacity:1,xPercent:0,yPercent:-30, duration:1,ease:'power1.inOut'
    },'<')
    .to('#f-left-leaf', {
      opacity:1,y:'50', duration:1,ease:'power1.inOut'
    },'<')
  
  })
  return (
    <footer id='contact'>
      <img
        src='/images/footer-right-leaf.png'
        alt='leaf-right'
        id='f-right-leaf'
      />
      <img
        src='/images/footer-left-leaf.png'
        alt='leaf-left'
        id='f-left-leaf'
      />
      <div className='content'>
        <h2>Where to find us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>794, Gau Blfd. #9032, Los Angeles, CA 87620</p>
        </div>
        <div>
          <h3>Call Us</h3>
          <p>(123) 456-7890</p>
          <p>hello@moctail.com</p>
        </div>
      
      
      <div>
        <h3>
          Open Every Day
        </h3>
        {openingHours.map((time) => (
          <p key={time.day}>{time.day}: {time.time}</p>
        ))}
      </div>

      <div className='flex-center gap-5'>
        {socials.map((social) => (
          <a
          key={social.name}
          href={social.url}
          target='_blank'
          rel='noopenernoreferrer'
          aria-label={social.name}>

          <img
            src={social.icon}
            alt={social.name}/>
        </a>
        ))}

      </div>
      </div>

    </footer>
  )
}

export default Contact
