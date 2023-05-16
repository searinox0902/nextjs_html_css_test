import Link from 'next/link'
import React from 'react'


const Navigation = () => {

    return (
        <>

            <header className="header">
                <figure>
                    <img
                        src="nextjs_html_css_test/logo.png"
                        alt="Virgin imagen"
                        className='m-auto'
                    >
                    </img>
                </figure>

                <nav>
                    <Link href="/nextjs_html_css_test/"> Inicio</Link>
                    <Link href="/nextjs_html_css_testregistrados/"> Registrados</Link>
                </nav>

                <Link href="/nextjs_html_css_test/" className="header__btn"> Ver en opensea</Link>
            </header>
        </>

    )
}

export default Navigation;