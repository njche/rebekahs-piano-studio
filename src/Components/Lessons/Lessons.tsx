import { useState, useEffect } from 'react'
import Quote from '../Lessons/Quote';

function Lessons() {

    const images = [
        'Tech.webp',
        'Sheet.webp',
        'Musicality.webp',
        'Sheet.webp',
    ]

    const texts = [
        'I strive to teach healthy piano technique based on the Russian school of piano playing, with an emphasis on involving the whole body. We focus on using the whole arm to play instead of just our fingers; but while remaining as relaxed as possible. Having been injured in the past, it is one of my passions to make sure my students are able to play comfortably and freely for the rest of their lives.',
        'Reading music is a skill that all students take with them long after they leave my studio; thus, it is something we work on in every lesson. As a classically trained church musician, I focus on reading sheet music (which allows students to learn any song they want outside of lessons) and chord charts (a flexible style of playing that can open doors to a variety of other formats including improv, jazz, church music, and more).',
        'Musicians are artists, and I love showing my students how to tell stories and communicate emotion to their audience through the songs they play. We learn songs in a variety of styles, including classical, contemporary, ragtime, folk songs, and more!',
        'Did you know even 3 or 4 year olds can play piano? Introducing piano at this age is more about playing musical games – children this young don’t even know they’re “learning”. The first 6 years of a child’s life are the most important in terms of learning – don’t hesitate to start your young child on piano! Parental involvement is key. I accept students starting as young as 3 years old, based on a meeting with them and their parents.'
    ]

    
    const highlightedBackground = {
        outline: '1px solid rgba(55, 119, 172, 0.6)',
        height: '16px',
        width: '16px',
        backgroundColor: 'white',
        borderRadius: '50%',
        transition: '1s',
    }
    
    const highlightedLine = {
        display: 'inherit',
        backgroundColor: 'white',
        filter: 'drop-shadow(0px 0px 2px rgba(255, 255, 255, 1))',
        animationName: 'circle-change',
        animationDuration: '1.4s',
        animationTimingFunction: 'ease-out'
    }
    
    const highlightedText = {
        display: 'inherit',
        animationName: 'text-change',
        animationDuration: '2.7s'
    }

    const slideBarReset = {
        animationName: "none" 
    }

    const slideBar = {
        animationName: "slide-bar" 
    }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [seconds, setSeconds] = useState(0)
    
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length)
        setSeconds(0)
    };
    
    const handlePrev = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length)
        setSeconds(0)
    };

    useEffect(() => {
        if (seconds > 14) {
            handleNext()
        }

        const timer = setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }

    }, [seconds])

    return (
        <div className="Lessons">
        <link rel="preload" as="image" href="Tech.webp" type="image/webp"/>
        <link rel="preload" as="image" href="Sheet.webp" type="image/webp"/>
        <link rel="preload" as="image" href="Musicality.webp" type="image/webp"/>
            <div className="Lessons-wrapper">
                <Quote />
                <div className="Lessons-grid-1" id="Lessons">
                    <h1 className="Lessons-header">
                        Lessons
                    </h1>
                    {
                        window.innerWidth <= 750 ?
                        <div className="Lessons-slide-wrapper">
                            <div className='Lessons-slide-grid'> 
                                <img className='Lessons-slide-pictures' src={`${images[0]}`} srcSet="Tech-lite.webp" loading="lazy" width="100%" height="auto" alt="Slide" />
                                <div className={'Lessons-slide-text-0'}>
                                    {texts[0]}
                                </div>
                                <img className='Lessons-slide-pictures' src={`${images[1]}`} srcSet="Sheet-lite.webp" loading="lazy" width="100%" height="auto" alt="Slide" />
                                <div className={'Lessons-slide-text-1'}>
                                    {texts[1]}
                                </div>
                                <img className='Lessons-slide-pictures' src={`${images[2]}`} srcSet="Musicality-lite.webp" loading="lazy" width="100%" height="auto" alt="Slide" />
                                <div className={'Lessons-slide-text-2'}>
                                    {texts[2]}
                                </div>
                                <img className='Lessons-slide-pictures' src={`${images[3]}`} srcSet="Sheet-lite.webp" loading="lazy" width="100%" height="auto" alt="Slide" />
                                <div className={'Lessons-slide-text-3'}>
                                    {texts[3]}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="Lessons-slide-wrapper">
                            <div className='button-background' id="prev" onClick={handlePrev}>
                            <div className='button-prev'></div>
                            </div>
                            <div className='Lessons-slide-grid'> 
                                <img className='Lessons-slide-pictures' src={`${images[currentIndex]}`} loading="lazy" width="100%" height="auto" alt="Slide" />
                                <div className={'Lessons-slide-text-' + currentIndex}>
                                    {texts[currentIndex]}
                                </div>
                            </div>
                            <div className='button-background' id="next" onClick={handleNext}>
                                <div className='button-next'></div>
                            </div>
                        </div>
                    }
                    <div className="Slide-progress" style={seconds === 0 ? slideBarReset : slideBar }/>
                    <div className="Slide-circles" >
                        <div className="Slide-circle-0" onClick={() => { 
                                setCurrentIndex(0)
                                setSeconds(0)
                            }}>
                        <div className="Slide-circle-0-background" style={currentIndex === 0 ? highlightedBackground : {}} />
                            <div className="Slide-circle-0-line" style={currentIndex === 0 ? highlightedLine : {}} />
                            <div className="Slide-circle-0-text" style={currentIndex === 0 ? highlightedText : {}}>
                                Technique
                            </div>
                        </div>
                        <div className="Slide-circle-1" onClick={() => { 
                                setCurrentIndex(1)
                                setSeconds(0)
                            }}>
                            <div className="Slide-circle-1-background" style={currentIndex === 1 ? highlightedBackground : {}} />
                            <div className="Slide-circle-1-line" style={currentIndex === 1 ? highlightedLine : {}} />
                            <div className="Slide-circle-1-text" style={currentIndex === 1 ? highlightedText : {}}>
                                Sheet Music
                                </div>
                        </div>
                        <div className="Slide-circle-2" onClick={() => { 
                                setCurrentIndex(2)
                                setSeconds(0)
                            }}>
                            <div className="Slide-circle-2-background" style={currentIndex === 2 ? highlightedBackground : {}} />
                            <div className="Slide-circle-2-line" style={currentIndex === 2 ? highlightedLine : {}} />
                            <div className="Slide-circle-2-text" style={currentIndex === 2 ? highlightedText : {}}>
                                Musicality
                                </div>
                        </div>
                        <div className="Slide-circle-3" onClick={() => { 
                                setCurrentIndex(3)
                                setSeconds(0)
                            }}>
                            <div className="Slide-circle-3-background" style={currentIndex === 3 ? highlightedBackground : {}} />
                            <div className="Slide-circle-3-line" style={currentIndex === 3 ? highlightedLine : {}} />
                            <div className="Slide-circle-3-text" style={currentIndex === 3 ? highlightedText : {}}>
                                Accessibility
                            </div>
                        </div>
                    </div>
                    <div className="Lessons-grid-2">
                        <div className="Testimonials-1">
                            <p className="Testimonials-quotation-1">“</p>
                            <p className="Testimonials-1-text">
                                Mrs. Rebekah truly is the greatest piano teacher. My son, her student of 7 who likes to wiggle and ask a million questions, showed interest in music early on. His school music teacher gave us a long list of names for piano teachers who work with kids in his age group. Several fell into our range of affordability and scheduling, but only one seemed to communicate with Brody in a way that connected. Mrs. Rebekah’s teaching method resonates with him both at lessons and is easy to follow at home during practice. When we hit a challenge, as we often do learning new things, Mrs. Rebekah recognizes and shows a talent for managing around those negative feelings, can keep lessons moving forward, and build the confidence needed to overcome. We’ve had a great experience over the past year, and I’m very thankful we’ve found someone who has guided our son’s musical skills to grow. Thanks! 
                            </p>
                            <p className="Testimonials-quotation-2">”</p>
                            <p className="Testimonials-name-1">
                            — Jessica & Brody —
                            </p>
                        </div>
                        <div className="Testimonials-2">
                            <p className="Testimonials-quotation-1">“</p>
                            <p className="Testimonials-1-text">
                            Rebekah is a fantastic piano teacher. Our son, Noah (13), started out just casually playing around on my in-laws' piano and then took an interest in learning how to formally play. He has really grown as a young pianist in the past 10 months thanks to Rebekah! She has a gentle delivery and is very observant during lessons, carefully tailoring each session toward what Noah needs to work on but also allowing for some flexibility if there's a piece he wants to repeat or something additional he wants to try. It's obvious she enjoys teaching, and her enthusiasm during lessons keeps Noah motivated. We are really happy with Noah's progress and recommend Rebekah to anyone looking for piano lessons!
                            </p>
                            <p className="Testimonials-quotation-2" id="quotation-2">”</p>
                            <p className="Testimonials-name-1">
                            — Stephanie & Noah —
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lessons