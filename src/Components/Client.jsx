import React from 'react';
import { useNavigate } from 'react-router-dom';

const Client = ({clt,handlerDelate}) => {
    const navigate = useNavigate();
    

    const {Name,Business,Email,Phone,id} = clt;
    return (
        <tr className='hover:bg-gray-100 transition-all  border-b-2' >
            <td className='p-3 '>{Name}</td>
            <td className='p-3 '>
                <p className='text-bold'>Email: <span>{Email}</span></p>
                <p className='text-bold'>Tel: <span>{Phone}</span></p>
            </td>
            <td className='p-3 '>{Business}</td>
            <td className='p-3 '>
            <button
                type="text"
                className='bg-green-600 hover:bg-green-700 block w-full text-white p-2 font-bold text-xs rounded-md mb-1 transition-all'
                onClick={() => navigate(`/${id}`)}
              
                >
                  ver  
                </button>
                <button
                type="text"
                className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 font-bold text-xs rounded-md mb-1 transition-all'
                onClick={() => navigate(`/edit/${id}`)}
                >
                  Editar  
                </button>
                <button
                type="text"
                className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 font-bold text-xs rounded-md transition-all'
               onClick={() => handlerDelate(id)}
               >
                  Eliminar  
                </button>
            </td>
        </tr>
    );
};

export default Client;