import { WavyBackground } from "./ui/wavy-background"

export function WavyBackgroundDemo() {
  return (
    <section>
      <WavyBackground className="pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-customGray font-bold inter-var text-center">
         The most dreamed products
        </p>
        <p className="text-base md:text-lg mt-4 text-customGray font-normal inter-var text-center">
          E-commerce online with the best products and the best quality to your scope
        </p>
      </WavyBackground>
    </section>
  )
}