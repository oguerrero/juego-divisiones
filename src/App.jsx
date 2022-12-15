import { useEffect, useState } from 'react'
import data from './data.json'
import Operacion from './Operacion'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import confetti from 'canvas-confetti'

export default function App () {

  // ? Canvas Conffeti Star Config
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ['star'],
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  }

  function shoot () {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    })

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    })
  }

  const [current, setCurrent] = useState(data[0])

  const getRandom = () => Math.floor(Math.random() * (data.length - 0))
  const getSelectedOP = (dataLen) => Math.floor(Math.random() * (dataLen - 0))

  const handleChange = (operation) => {
    if (operation === 'RANDOM') { setCurrent(data[getRandom()]) }

    else {
      const opData = data.filter(op => op.operator === operation)
      setCurrent(opData[getSelectedOP(opData.length)])
    }
  }

  const handleResult = (resultContainer) => {
    const result = +resultContainer.current.value
    if (result === current.result) {
      toast.success('Correcto 🥳')
      setTimeout(shoot, 0)
      setTimeout(shoot, 100)
      setTimeout(shoot, 200)
    }

    if (result !== current.result) toast.error('Incorrecto 😱')

    resultContainer.current.value = null
    handleChange('RANDOM')
  }

  useEffect(() => setCurrent(data[getRandom()]), [])

  return (
    <main className="h-screen min-w-full bg-indigo-400 overflow-hidden">
      <Operacion current={ current } handleChange={ handleChange } handleResult={ handleResult } />
      <ToastContainer
        position="top-right"
        autoClose={ 3000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover={ false }
        theme="colored"
      />
    </main>
  )
}