import './App.css'
import Hero from './components/custom/Hero'
import { Button } from './components/ui/button'

function App() {

  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
        className='font-extrabold text-[45px] text-center mt-16'
        >
        <span className='text-[#f56551]'> Discover Your Next Adventure with AI :</span></h1>
      <h1
        className='font-extrabold text-[45px] text-center mt-0'
        >
        <span> Personal Itineraries at Your Fingertips </span></h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator , creating custom itineraries tailored to your interests and budget.</p>

        <Button> Get Started , It's Free</Button>
    </div>
  )
}

export default App
