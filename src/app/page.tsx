import DotsBackground from '@/components/DotsBackground'
import Footer from '@/components/Footer'
import Journey from '@/components/Journey'
import MainCard from '@/components/MainCard'
import Showcase from '@/components/Showcase'
import Tools from '@/components/Tools'
import { AngleToggledProvider } from '@/context/angleToggledContext'

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
