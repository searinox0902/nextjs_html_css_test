import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useUsers } from '../context/UserContext'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

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

const CustomTable = () => {
    const router = useRouter();
    const values = useUsers().users;
    const deleteUser = useUsers().deleteUser;

    const [selectedRows, setSelectedRows] = useState(false);
    const [toggledClearRows, setToggleClearRows] = useState(false);
    
    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
    };

    const handleClearRows = () => {
        deleteUser(selectedRows);
        setToggleClearRows(!toggledClearRows);
    }

    const handleEdit = () => {
        if(selectedRows.length > 1){
            alert('selecciona solo un registro para editar');
            return;
        }
        const idSelected = selectedRows[0].id;
        router.push(`/registrados/edit/${idSelected}`)
    }


    return (
        <>
            <DataTable
                className='fade-lg'
                columns={columns}
                data={values}
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows}
            />
            <div className='flex justify-between'>
                <button onClick={handleClearRows}>
                    Eliminar filas
                </button>

                <button className='btn' onClick={handleEdit}>
                    Editar
                </button>
        
                <Link className='btn' href='/registrados/new'>
                    nuevo
                </Link>
            </div>
           
        </>

    )
}

export default CustomTable;