import { useState } from 'react'


const questionsAndAnswers: string[][] = [['beer', 'cerveza'], ['tree', 'árbol'], ['car', 'coche']]
export const Home = () => {
  const [question, setQuestion] = useState<string>('')

  return <div className='flex h-screen w-full flex-col items-center bg-gray-100'>
    <div className='flex w-full h-full items-center justify-center gap-x-2'>
      <input className='px-4 py-2' type='text' value={question} onChange={e => setQuestion(e.target.value)}/>
      <button className='rounded-full px-4 py-2 bg-blue-400 text-white'>Submit</button>
    </div>
  </div>
}
