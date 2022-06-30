import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Check your DAO
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            So, you think you have a DAO. It may well meet all the characteristics of a DAO. But did society have a solution to get already? Or are there potential risks with your DAO?
          </p>
          <Button href="/register" color="white" className="mt-10">
            Investigate my DAO
          </Button>
        </div>
      </Container>
    </section>
  )
}
