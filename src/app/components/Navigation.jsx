import Link from 'next/link'
import React from 'react'


const Navigation = () => {

    return (
        <>

            <header className="header">
                <figure>
                    <img
                        src="/logo.png"
                        alt="Virgin imagen"
                        className='m-auto'
                    >
                    </img>
                </figure>

                <nav>
                    <Link href="/"> Inicio</Link>
                    <Link href="/registrados"> Registrados</Link>
                </nav>

                <Link href="/#" className="header__btn"> Ver en opensea</Link>
            </header>
        </>

    )
}

export default Navigation;