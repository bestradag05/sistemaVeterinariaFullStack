
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"


const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    console.log(auth);
    console.log(cargando);

    if(cargando) return 'cargando...';

    return (
        <>
            <div>Esta es una ruta Protegida</div>
            
            { auth?._id ? <Outlet /> : <Navigate to={"/"} />}
        </>

    )
}

export default RutaProtegida