import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const Forms = ({client}) => {
    const navigate = useNavigate();
    //
    const newClientSchema = Yup.object().shape({

        Name: Yup.string()
            .min(3, 'El nombre tiene que tener min 3 caracteres')
            .max(15, 'El nombre tiene que tener max 15 caracteres')
            .required('El nombre del cliente es obligatorio'),

        Business: Yup.string()
            .required('El nombre del la empresa es obligatorio'),

        Email: Yup.string()
            .email("Email invalido")
            .required('El email es obligatorio'),

        Phone: Yup.number()
            .positive('Numero no valido.')
            .integer('Solo se permiten numeros enteros')
            .typeError('El numero introducido es incorrecto.')

        ,

    });

    //
    const handleSubmit = async (values) => {
        try {
           if(client?.id){
            const url = `http://localhost:4000/client/${client.id}`;

            const serverResponse = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
           }else{

            //Nuevo registro
            const url = "http://localhost:4000/client";

            const serverResponse = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
           }
           navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='bg-white  text-gray-600 py-10  rounded-md shadow-md md:w-3/6 mx-auto mb-10'>
            <h1 className='text-center text-4xl text-gray-600'>{client?.id?'Editar cliente':'Nuevo cliente'}</h1>

            <Formik
                /*Valore iniciales para los formulario
                initialValues={{
                    Name: '',
                    Business: '',
                    Email: '',
                    Phone: '',
                    Note: ''*/

                //#0 -Initial values ​​for form when you call it from edit
                    initialValues={{
                        Name: client?.Name ?? "",
                        Business: client?.Business ?? "",
                        Email: client?.Email ?? "",
                        Phone: client?.Phone ?? "",
                        Note: client?.Note ?? ""
                }}
                //#1 - When the component is being reused and you pass props from only 1 component
                enableReinitialize={true}

              
                onSubmit={ async(values,{resetForm}) => {
                    await handleSubmit(values)

                    resetForm();
                }}

                validationSchema={newClientSchema}
                >

                {({ errors, touched }) => {
                    return (
                        <Form>

                            <div className='mx-5 mb-4'>
                                <label htmlFor='Name' >Nombre:</label>
                                <Field
                                    id="Name"
                                    name="Name"
                                    type="text"
                                    placeholder="Nombre del cliente"
                                    className={`
                                    ${errors.Name === undefined && touched.Name ? "border-2 border-green-600" : null}
                                    ${errors.Name !== undefined && touched.Name ? "border-2 border-red-600" : null}
                                    mt-2 block w-full p-3 bg-gray-50  border  rounded-md focus-red-600 focus:outline-none focus:border-sky-500`}
                                    />

                                    {errors.Name && touched.Name ? (<p className='text-red-600'>* {errors.Name}</p>) : null}
                            </div>

                            <div className='mx-5 mb-4'>
                                <label htmlFor='Business' >Empresa:</label>

                                <Field
                                    id='Business'
                                    name='Business'
                                    type="text"
                                    placeholder="Empresa del cliente"
                                    className={`
                                    ${errors.Business === undefined && touched.Business ? "border-2 border-green-600" : null}
                                    ${errors.Business !== undefined && touched.Business ? "border-2 border-red-600" : null}
                                    mt-2 block w-full p-3 bg-gray-50  border  rounded-md focus-red-600 focus:outline-none focus:border-sky-500`}
                                    />

                                    {errors.Business && touched.Business ? (<p className='text-red-600'>* {errors.Business}</p>) : null}

                            </div>

                            <div className='mx-5 mb-4'>
                                <label htmlFor='Email'>Email:</label>
                                <Field
                                    id="Email"
                                    name="Email"
                                    type="Email"
                                    placeholder="correo@correo.com"
                                    className={`
                    ${errors.Email === undefined && touched.Email ? "border-2 border-green-600" : null}
                    ${errors.Email !== undefined && touched.Email ? "border-2 border-red-600" : null}
                    mt-2 block w-full p-3 bg-gray-50  border  rounded-md focus-red-600 focus:outline-none focus:border-sky-500`}
                                />
                                {errors.Email && touched.Email ? (
                                    <p className='text-red-600'>* {errors.Email}</p>) : null}
                            </div>

                            <div className='mx-5 mb-4'>
                                <label htmlFor='Phone' >Telefono:</label>
                                <Field
                                    id="Phone"
                                    name="Phone"
                                    type="tel"
                                    placeholder="849-000-0000"
                                    className={`
                   
                    ${errors.Phone !== undefined && touched.Phone ? "border-2 border-red-600" : null}
                    mt-2 block w-full p-3 bg-gray-50  border  rounded-md focus-red-600 focus:outline-none focus:border-sky-500`}
                                />
                                {errors.Phone && touched.Phone ? (
                                    <p className='text-red-600'>* {errors.Phone}</p>) : null}
                            </div>

                            <div className='mx-5 mb-4'>
                                < label htmlFor='Note' >Notas:</label>
                                <Field
                                    id='Note'
                                    name='Note'
                                    as="textarea"
                                    type="text"
                                    placeholder="Notas del cliente"
                                    className={`
                    
                    ${errors.Note !== undefined && touched.Note ? "border-2 border-red-600" : null}
                    mt-2 block w-full p-3 bg-gray-50  border  rounded-md focus-red-600 focus:outline-none focus:border-sky-500`}
                                />
                            </div>

                            <div className='mx-10 '>
                                <input
                                    className={`${client?.id ? 'bg-green-500 hover:bg-green-600':'bg-blue-500 hover:bg-blue-600'} hover:scale-105   text-lg transition-all text-white w-full rounded-md font-blod text-center py-3  ease-in-out duration-500`}
                                    value={client?.id?'Editar' :'Guardar'}
                                    type="submit"

                                />
                            </div>

                        </Form>
                    )
                }}
            </Formik>




        </div>
    );
};
//#2- If it doesn't find a props it adds one by default
Forms.defauldProps ={
    client:{},
    loading:false

}

export default Forms;