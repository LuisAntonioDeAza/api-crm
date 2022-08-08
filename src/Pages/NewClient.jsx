import React from 'react';
import Forms from '../Components/Forms';

const NewClient = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 pt-10 pl-5 hover:ease-in-out duration-300'>Nuevo Cliente</h1>
            <p className='mt-3'>Llena los campos para agregar un nuevo cliente.</p>
            <Forms />
        </>
    );
};

export default NewClient;