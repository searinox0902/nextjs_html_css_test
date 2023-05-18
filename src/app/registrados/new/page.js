'use client';

import React, { useEffect, useState } from 'react'
import { useUsers } from '../../context/UserContext';
import { useRouter } from 'next/navigation'


const Page = ({params}) => {
    
    const isEdit = Object.entries(params).length;
    const createUser = useUsers().addUser;
    const updateUser = useUsers().updateUser;
    const users = useUsers().users;
    const [user, setUser] = useState({
        name : '',
        email : '',
        cel : '',
    });
    const router = useRouter();

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isEdit){
            updateUser(user)
            router.push('/registrados')
            return;
        }

        createUser(user.name, user.email, user.cel);
        router.push('/registrados')
    }
 
    useEffect(() => {
        
        if(Object.entries(params).length){
            const userFound = users.find(e => {return e.id === params } );

            if(userFound) {
                setUser(userFound);
            }
        } 
    }, [])

    return (
        <>
            <main>
                <section className="py-16">
                    <div className='mt-36 bg-yellow-primary py-12 text-center'>
                        <div className='max-w-3xl mx-auto'>

                            {
                                isEdit
                                ? 
                                (<h1 className='text-center text-black text-4xl pb-6'>Editando : {params}</h1>)    
                                :
                                (<h1 className='text-center text-black text-4xl pb-6'>Registrate</h1>)    
                                
                            }
                           
                            <form onSubmit={handleSubmit}>
                                <div className='w-full '>
                                    <label htmlFor="name"></label>
                                    <input onChange={handleChange} type='text' required name="name" value={user.name} placeholder='Ingrese su Nombre' 
                                        className='w-full py-2 px-4 rounded-2xl bg-yellow-primary text-black border border-black mb-6'
                                    ></input>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="email"></label>
                                    <input onChange={handleChange} type='mail' required name="email" value={user.email} placeholder='Ingrese su Email' 
                                        className='w-full py-2 px-4 rounded-2xl bg-yellow-primary text-black border border-black mb-6'
                                    ></input>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="cel"></label>
                                    <input onChange={handleChange} type='text' required name="cel"  value={user.cel}  placeholder='Ingrese su número de celular' 
                                        className='w-full py-2 px-4 rounded-2xl bg-yellow-primary text-black border border-black'
                                    ></input>
                                </div>

                                <div className='w-full'>
                                    {   
                                        isEdit
                                        ? 
                                        (
                                            <button type='submit' className='py-4 px-8 border-2 border-black'>
                                                Editar
                                            </button>
                                        )    
                                        :
                                        (
                                        <button type='submit'  className='py-4 px-8 border-2 border-black'>
                                            Enviar
                                        </button>
                                        )    
                                    }
                                    
                                </div>
                            </form>
                        </div>  
                    </div>
                </section>
            </main>
        </>

    )
}

export default Page;