import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';

import logo from './assets/Logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image 6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gradient-game absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm mt-1'>Anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] pt-8 px-8 py-6 self-stretch flex justify-between items-center' >
          <div>
            <strong className='text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
