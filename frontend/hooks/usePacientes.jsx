import { useContext } from "react"
import  PacientesContext from "../src/context/PacientesProvides"

const usePacientes = () => {
  return ( useContext(PacientesContext)  )
}

export default usePacientes
