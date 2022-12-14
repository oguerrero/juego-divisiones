import { useEffect, useRef, useState } from 'react'
import data from './data.json'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App () {
  const [currentDivision, setCurrentDivision] = useState(data[0])

  const resultContainer = useRef(currentDivision.resultado)

  const getRandomDivision = () => Math.floor(Math.random() * (data.length - 0))

  const handleChange = () => setCurrentDivision(data[getRandomDivision()])

  const handleResult = () => {
    const result = +resultContainer.current.value
    if (result === currentDivision.resultado) {
      toast.success('Correcto 🥳', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    if (result !== currentDivision.resultado) {
      toast.error('Incorrecto 😱', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    handleChange()
  }

  useEffect(() => {
    setCurrentDivision(data[getRandomDivision()])
  }, [])

  return (
    <main className="h-screen min-w-full bg-yellow-400 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row content-center justify-center font-bold text-white place-content-center place-items-center text-5xl md:text-9xl">
          <p className="">{ currentDivision.dividendo }</p>{/* dividendo */ }
          <p className="">÷</p>
          <p className="">{ currentDivision.divisor }</p>{/* divisor */ }
          <p className=""> = </p>
          <input className="px-2 text-black w-20 md:w-44 md:h-32 md:text-9xl text-center rounded-3xl bg-yellow-300 shadow-lg" type='number' ref={ resultContainer } />
        </div>
        <div className="flex flex-row justify-center gap-4 my-8">
          <button className="px-8 py-2 text-xl font-bold text-white bg-red-600 rounded-full appearance-none" onClick={ () => handleChange() }>Cambiar</button>
          <button className="px-8 py-2 text-xl font-bold text-white bg-blue-600 rounded-full appearance-none" onClick={ () => handleResult() }>Enviar</button>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}