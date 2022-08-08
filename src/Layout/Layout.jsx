import {Outlet,Link,useLocation}from 'react-router-dom'

const Layout = () => {

    const Location = useLocation();
    const UrlAcrual = Location.pathname;
    return (
        <div className='md:flex md:min-h-screen'>
       <div className='md:w-1/6 bg-blue-900 px- py-10'>
        <h2 className='text-2xl font-bold text-center text-white border-b-2 '>CRM - Cliente</h2>
            <nav className='mt-10 '>
                <Link to='/'
                className={`${UrlAcrual === '/' ? ' text-blue-300 text-2xl ' : 'text-white text-xl'} block hover:text-blue-300 hover:text-2xl ease-in-out duration-500 pl-5 pb-5`}
                >Clientes</Link>
                <Link to='/new'
              className={`${UrlAcrual === '/new' ? ' text-blue-300 text-2xl' : 'text-white text-xl'} block hover:text-blue-300 hover:text-2xl ease-in-out duration-500 pl-5`}
                >Nuevo clientes</Link>

                
            </nav>
       </div>
       <div className='md:w-5/6 h-screen overflow-scroll'>
            <Outlet />
      </div>

      </div>
    );
};

export default Layout;