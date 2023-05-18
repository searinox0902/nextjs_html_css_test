'use client';

import React from 'react'
import CustomTable from '../components/CustomTable'
import Link from 'next/link';

const Registrados = () => {

    return (
        <>
            <main>
                <section className="table-section px-4">
                    <h1>Usuarios Registrados</h1>
                    <CustomTable />
                </section>
            </main>
        </>

    )
}

export default Registrados;