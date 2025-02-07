import { Typewriter } from 'react-simple-typewriter'
import './App.css'

function App() {

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
          <div className='text-4xl font-bold text-center'>
            Hello, I'm <span>
            <Typewriter
                words={['Dimas', 'a Software Engineer', 'a Dimsum Entusiast', 'a Problem Solver', 'a Lifelong Learner']}
                loop={5}
                cursor
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
      </div>
    </>
  )
}

export default App
