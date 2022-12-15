import { useRef } from "react"

export default function Operacion ({ current, handleChange, handleResult }) {

  const resultContainer = useRef(current.resultado)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row content-center justify-center gap-2 text-7xl font-bold text-white place-content-center place-items-center md:text-9xl">
        <p className="">{ current.left }</p>
        <p className="">{ current.operator }</p>
        <p className="">{ current.right }</p>
        <p className=""> = </p>
        <input className="w-28 px-2 text-center text-black bg-yellow-300 shadow-lg md:w-44 md:h-32 md:text-9xl rounded-3xl" type='number' ref={ resultContainer } />
        <button className="px-6 md:px-8 py-2 md:py-4 text-2xl ml-4 font-bold text-white bg-blue-600 rounded-full appearance-none" onClick={ () => handleResult(resultContainer) }>Enviar</button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <button className="px-8 py-2 text-2xl font-bold text-white bg-red-600 rounded-full appearance-none" onClick={ () => handleChange('RANDOM') }>Aleatorio</button>
        <button className="px-8 py-2 text-2xl font-bold text-white bg-green-600 rounded-full appearance-none" onClick={ () => handleChange('+') }>Suma</button>
        <button className="px-8 py-2 text-2xl font-bold text-white bg-orange-600 rounded-full appearance-none" onClick={ () => handleChange('-') }>Resta</button>
        <button className="px-8 py-2 text-2xl font-bold text-white bg-sky-600 rounded-full appearance-none" onClick={ () => handleChange('x') }>Multiplicación</button>
        <button className="px-8 py-2 text-2xl font-bold text-white bg-purple-600 rounded-full appearance-none" onClick={ () => handleChange('÷') }>Division</button>
      </div>
    </div>
  )
}
