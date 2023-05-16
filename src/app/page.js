import Image from 'next/image'


export default function Home() {
  return (
    <>
      <main className="home">
        <section className='home__wrapper'>

          <div className='home__text'>
            <h1 className='fade-sm'>
              Collect
              Mother Mary
              art <span className='ellipse'>nft</span>
            </h1>
            <p className='fade-md'>
              Find the best upcoming and live NFT drops. Moonly provides analytics to help you make good NFT investments.
            </p>
            <button className='btn_sharp'>
              ver en opensea
            </button>
          </div>

          <div className='home__image'>
            <figure>
              <Image
                src="/virgin.webp"
                alt="Virgin imagen"
                width={512}
                height={647}
                priority
              >
              </Image>
            </figure>
          </div>
        </section>
      </main>
    </>

  )
}
