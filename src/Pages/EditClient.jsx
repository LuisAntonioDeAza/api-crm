import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Forms from '../Components/Forms'
import Spinner from '../Components/Spinner';

const EditClient = () => {

    const param = useParams();
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(true);
    const [exist, setExiste] = useState(true);

    const { Name, Business, Note, Phone, Email } = client;

    useEffect(() => {

        const getClientAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${param.id}`
                const response = await fetch(url)
                const result = await response.json()
                setClient(result);

                setTimeout(() => {
                    if (result.id) {
                        setLoading(false);
                        
                    
                    }else{
                        setExiste(false);
                    }
                    
                }, 2000);
                

            } catch (error) {
                console.log(" error en obtenerClientesApi", error)
            }
        }
        getClientAPI();
    }, [])

    return (
        <>
            {loading  ? (
                <div className='py-20'>

                    <Spinner />
                    {!exist?(<p className='text-center text-xl text-indigo-600 font-bold'>Cliente no encontrado</p>):null}
                </div>
            ) : (<>
                <h1 className='font-black text-4xl text-blue-900 pt-10 pl-5 hover:ease-in-out duration-300'>Editar Cliente</h1>
                <p className='mt-3 px-5 mb-5'>Edita los campos con los nuevos datos del cliente.</p>
            </>
            )}

            <div className={`${loading ? 'invisible' : 'visible'} transition-all duration-700`}>
                <Forms
                    client={client}
                />
            </div>

        </>
    );
};

export default EditClient;