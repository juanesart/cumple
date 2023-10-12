'use client'
import Image from 'next/image'
import ConfettiExplosion from'react-confetti-explosion';

export default function Home() {
  return (
    <main className="flex relative text-[#fff] text-center  min-h-screen flex-col items-center justify-between  p-24">
      <ConfettiExplosion
        particleCount={150}
       />
      <Image className='absolute top-0 right-0'
        src='/araña.svg'
        alt='araña'
        width={150}
        height={1500}
       />
      <h1 className='  font-bold text-4xl mb-4'>Feliz Cumpleaños mi amor</h1>
      <Image className=' rounded-full mb-4'
        src='/amor.jpg'
        alt='amor'
        width={400}
        height={400}
      />
      <p className=' text-center mb-8 font-semibold text-2xl'>
        Se que no te gusta esta fecha, a mí tampoco me agrada mucho mi Cumpleaños, pero si quiero celebrar el tuyo ya que eres la persona a la que más amo.
      </p>
      <p className=' text-center mb-8 font-semibold text-2xl'>
        Así que te lo digo de nuevo, Feliz Cumpleaños mi amor!!! feliz de acompañarte y estar contigo esta fecha y hacer que poco a poco te guste más porque ahí estaré para ti, no sabes como quisiera poder abrazarte y decirte todo esto en persona, pero de momento es lo único que  se me ocurre.
      </p>
      <p className=' text-center mb-8 font-semibold text-2xl'>
        Gracias por quererme, soportarme y hacerme tan feliz. Sabes que yo estaré para ti siempre que pueda para amarte, protegerte y mimarte.
      </p>
      <ul>
        <li>Mi amor</li>
        <li>Mi nubecita de tormenta</li>
        <li>Mi huracan</li>
        <li>Mi vida</li>
      </ul>
      <p className=' text-center mb-14 font-semibold text-3xl'>Te Amo </p>
      <Image className=' fill-[#ffff] absolute bottom-0 left-0'
        src='/calaca.svg'
        alt='calabaza'
        width={200}
        height={200}
       />
    </main>
  )
}
