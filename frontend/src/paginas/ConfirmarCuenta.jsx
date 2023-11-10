import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ConfirmarCuenta = () => {
    const params = useParams();

    const { id } = params;
  
    useEffect(() => {
  
      const confirmarCuenta = async () => {
        try {
            const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`;
            const { data } = await axios(url);
            
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
      }
  
      confirmarCuenta();
    }, []);
  
    return (
      <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Confirma tu cuenta y Comienza a Administrar <span className="text-black"> tus Pacientes </span>
          </h1>
        </div>
  
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
  
          
  
        </div>
      </>
    )
}

export default ConfirmarCuenta
