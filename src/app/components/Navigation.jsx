import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const Navigation = () => {

    return (
        <>

            <header className="header">
                <figure>
                    <Image
                        src="/logo.png"
                        alt="Virgin imagen"
                        width={63}
                        height={62}
                        priority
                    >
                    </Image>
                </figure>

                <nav>
                    <Link href="/"> Inicio</Link>
                    <Link href="/registrados"> Registrados</Link>
                </nav>

                <Link href="/" className="header__btn"> Ver en opensea</Link>
            </header>
        </>

    )
}

export default Navigation;