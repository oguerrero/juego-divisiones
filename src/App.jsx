import { useEffect, useState } from 'react'
import data from './data.json'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Operacion from './Operacion';

export default function App () {
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

    if (result === current.resultado) toast.success('Correcto 🥳')

    if (result !== current.resultado) toast.error('Incorrecto 😱')

    resultContainer.current.value = null
    handleChange('RANDOM')
  }

  useEffect(() => setCurrent(data[getRandom()]), [])

  return (
    <main className="h-screen min-w-full bg-yellow-400 overflow-hidden">
      <Operacion current={ current } handleChange={ handleChange } handleResult={ handleResult } />
      <ToastContainer
        position="top-right"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  )
}