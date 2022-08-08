import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const ViewClient = () => {

    const param = useParams();
    const [client,setClient] = useState({});
    const [loading,setLoading] = useState(true);

    const {Name,Business,Note,Phone,Email} = client;

   useEffect(()=>{

    const getClientAPI = async () => {
        try {
          const url = `http://localhost:4000/client/${param.id}`
          const response = await fetch(url)
          const result = await response.json()
          setTimeout(() => {
            if(!result.id){
                setLoading(false);
            }
                setClient(result);
          }, 2000);
          setLoading(true)

        } catch (error) {
          console.log(" error en obtenerClientesApi", error)
        }
      }
      getClientAPI();
   },[])

    return (
        <>
               
       
        <h1 className='text-center text-2xl text-indigo-600 font-bold pt-5 '>Informacion del cliente.</h1>
        <div className="bg-white shadow w-4/6 mx-auto m-5 p-5 rounded-md transition-all">  
        {client.id && loading ? (                   
            <div>
            <p className='text-center font-bold text-xl pb-3'>{Name}</p>
            <p className='font-bold'>Empresa : <spa className="font-normal">{Business}</spa></p>
            <p className='font-bold'>Email : <spa className="font-normal">{Email}</spa></p>
            <p className='font-bold'>Telefono : <spa className="font-normal">{Phone}</spa></p>
            <p className='font-bold'>Notas : <spa className="font-normal">{Note}</spa></p>
            </div>
            ):(!client.id && !loading ?(  <p>Cliente no encontrado.</p>):<Spinner />)}   
        </div>

        </>
    );
};

export default ViewClient;