import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText} from 'gsap/all'


const AboutUs = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', { type:'words' });
    

    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
        }
    })

    scrollTimeline
        .from(titleSplit.words, {
            opacity:0, duration:1, yPercent: 100,
            ease:'expo.out', stagger:0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity:0, duration:1,
                ease:'power1.inOut', stagger:0.04

                },'-=0.5')
            })

    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>
                            Where every detail matters<span className='text-white'>-</span>
                            from muddle to garnish
                        </h2>
                    </div>
                    <div className='sub-content'>
                        <p>
                            At Mojito, we believe that every cocktail tells a story. Our passion for mixology
                            drives us to create unforgettable experiences, one sip at a time.
                            through the world of cocktails, where innovation meets tradition, and every glass is a masterpiece.
                        </p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5
                            </p>
                            <p className='text-sm text-white-100'>
                                More than +12000 happy customers
                            </p>
                        </div>
                    </div>


                </div>

            </div>
            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <div className='noisy'>
                        <img src='/images/bar.jpg' alt='grig-img-1' />
                    </div>
                </div>


                <div className='md:col-span-6'>
                    <div className='noisy'>
                        <img src='/images/toss.jpg' alt='grig-img-2' />
                    </div>
                </div>


                <div className='md:col-span-3'>
                    <div className='noisy'>
                        <img src='/images/duu.jpg' alt='grig-img-5' />
                    </div>
                </div>
            </div>

            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    <div className='noisy'>
                        <img src='/images/drinks.jpg' alt='grig-img-3' />
                    </div>
                </div>


                <div className='md:col-span-4'>
                    <div className='noisy'>
                        <img src='/images/green.jpg' alt='grig-img-3' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs
