
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    console.log(auth);
    console.log(cargando);

    if (cargando) return 'cargando...';

    return (
        <>
            <Header />
            {auth?._id ?
                (
                    <main className="container mx-auto mt-10">
                        <Outlet />
                    </main>
                ) : <Navigate to={"/"} />}
            <Footer />
        </>

    )
}

export default RutaProtegida