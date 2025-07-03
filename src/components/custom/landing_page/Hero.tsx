"use client"
import { Typewriter } from "react-simple-typewriter"
export default function Hero() {
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center snap-start'>
                <div className='text-[25px] md:text-[75px] font-bold text-center mb-4'>
                    Hello, I'm Dimas.
                    <div>
                    I am a
                    <span aria-hidden="true" className="absolute text-white opacity-10">
                    {' Software Engineer'}
                    </span>
                    <span className='text-yellow-400'>
                        <Typewriter
                            words={[' Dimsum Enthusiast', ' Problem Solver', ' Lifelong Learner', ' Software Engineer',]}
                            loop={5}
                            cursor
                            typeSpeed={75}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/nomenklatur" target="_blank" className="flex gap-1 font-figtree text-sm items-center md:text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                        </svg>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/masdimasekaputra/" target="_blank" className="flex gap-1 font-figtree text-sm items-center md:text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z"/>
                    </svg>
                        LinkedIn
                    </a>
                    <a href="https://wa.me/6285179728146?text=Hello%2C%20I%20want%20to%20ask%20a%20favor%20for%20" target="_blank" className="flex gap-1 font-figtree text-sm items-center md:text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
                    </svg>
                        WhatsApp
                    </a>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-2 items-center">
                    <a href="#Experience" className="bg-gray-800 cursor-pointer text-white px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg">Get to know me!</a>
                    <small className="text-gray-500">or</small>
                    <a href="https://ask.dimaseka.my.id" target="_blank" className="cursor-pointer text-gray-800 px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg border border-gray-800">Ask me questions</a>
                </div>
            </div>
        </>
    )
}