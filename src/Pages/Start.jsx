import { useEffect, useState } from "react"
import Client from "../Components/Client";

const Start = () => {
  //State that saves the results of the API
  const [clients, setClients] = useState([]);


  useEffect(() => {

    const getClientAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL
        const response = await fetch(url)
        const result = await response.json()
        setClients(result);


      } catch (error) {
        console.log(error)
      }
    }

    getClientAPI();
  }, []);

  const handlerDelate = async (id) =>{
    const clientsUpdate = clients.filter(client => client.id !== id );
   setClients(clientsUpdate);

   try{
    const url = `${import.meta.env.VITE_API_URL}/${id}`
    const serverResponse = await fetch(url, {
      method: 'DELETE',})

      await serverResponse.json();
      console.log(serverResponse);
    

   }catch(error){

   }
    
  }

  return (
    <div className="px-5">
      <h1 className='font-black text-4xl text-blue-900 pt-10 pl-5 hover:ease-in-out duration-300'>Clientes</h1>
      <p className='mt-3'>Administra tus clientes.</p>

      <table className="w-full mt-5 table-auto shadow bg-white mb-10 ">
        <thead className="bg-blue-800 text-white rounded-md">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>

          </tr>
        </thead>
        <tbody>
          {clients.map(clt => (
            <Client
              key={clt.id}
              clt={clt}
              handlerDelate={handlerDelate}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Start;