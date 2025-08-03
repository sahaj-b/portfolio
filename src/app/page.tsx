import MainCard from '@/components/MainCard'
import DotsBackground from '@/components/DotsBackground'
import Showcase from '@/components/Showcase'
import { AngleToggledProvider } from '@/context/angleToggledContext'
import Journey from '@/components/Journey'
import Tools from '@/components/Tools'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <div className="font-popins flex flex-col items-center justify-center space-y-28 px-3 pb-20 pt-10 text-text md:bg-mantle">
        <DotsBackground />
        <AngleToggledProvider>
          <MainCard />
          <Showcase />
          <Journey />
          <Tools />
        </AngleToggledProvider>
      </div>
      <Footer />
    </>
  )
}
