import React from 'react'
import DataTable from 'react-data-table-component'

const columns = [
    {
        name: 'Nombre',
        selector: row => row.name,
    },
    {
        name: 'Celular',
        selector: row => row.cel,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
];

const data = [
    {
        id: 1,
        name: 'Sebastian Vargas Quintana',
        cel: '3043499541',
        email: 'svquintana98@gmail.com'
    },
    {
        id: 2,
        name: 'Estiven Ocampo Quintana',
        cel: '3043499541',
        email: 'eoq_2013@gmail.com'
    },
    {
        id: 3,
        name: 'Diego Madrid Usuga',
        cel: '3043499541',
        email: 'dmu_1997@gmail.com'
    },
]

const CustomTable = () => {
    
    return (
        <>
            <DataTable
                className='fade-lg'
                columns={columns}
                data={data}
            />
        </>

    )
}

export default CustomTable;