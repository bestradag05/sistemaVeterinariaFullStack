import { Link } from "react-router-dom"
const AdminNav = () => {
  return (
    <nav className="flex gap-3">

        <Link 
            to="/admin/perfil"
            className="font-bol uppercase text-gray-500"
        >Perfil</Link>
        <Link 
            to="/admin/cambiar-password"
            className="font-bol uppercase text-gray-500"
        >Cambiar Password</Link>

    </nav>
  )
}

export default AdminNav