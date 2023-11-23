import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
const Header = () => {

    const { cerrarSesion } = useAuth();
    return (
        <header className="py-10 bg-indigo-600">
            <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center">
                <h1 className="font-bold text-2xl text-indigo-200 text-center">
                    Administrador de Pacientes de 
                    <span className="text-white"> Veterinarios</span>
                </h1>

                <nav className="flex gap-4 flex-col items-center lg:flex-row mt-5 lg:mt-0">
                    <Link to="/admin" className="text-white text-sm uppercase font-bold">Pacientes</Link>
                    <Link to="/admin/perfil" className="text-white text-sm uppercase font-bold">Perfil</Link>

                    <button
                    type="button"
                    className="text-white text-sm uppercase font-bold"
                    onClick={cerrarSesion}>
                        Cerrar Sesión
                    </button>
                </nav>
            </div>

        </header>
    )
}

export default Header