import React from 'react'
import { navLinks } from '../../constants/index.js'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',

            }
        });
        navTween.from('nav',{backgroundColor: 'transparent'}, {backgroundColour: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    }); 
    return (
        <nav>
            <div>
                <a href="#hero" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" className='w-10 h-10 object-contain' />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className='text-gray-300 hover:text-purple-500'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
