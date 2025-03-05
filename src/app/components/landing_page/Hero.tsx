import { Typewriter } from "react-simple-typewriter"
export default function Hero() {
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='text-[25px] md:text-[75px] font-bold text-center'>
                    Hello, I'm Dimas.
                    <div>
                    I am a
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
                <div className='mt-5 font-figtree'>
                    Stay tuned for more updates!
                </div>
            </div>
        </>
    )
}