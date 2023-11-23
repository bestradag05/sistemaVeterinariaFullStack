import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  const format = (fecha) => {

    const fechaNueva = new Date(fecha);
    const year = fechaNueva.getFullYear();
    let month = fechaNueva.getMonth() + 1;
    let day = fechaNueva.getDay();

    if(month < 10){
        month = '0' + month;
    }

    if(day < 10){
        day = '0' + day;
    }

    return   year + "-" + month + "-" + day;
  

  }

  useEffect(() => {
    const obtenerPacientes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await clienteAxios("/pacientes", config);
        setPacientes(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerPacientes();
  }, []);

  const guardarPaciente = async (paciente) => {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    
    if (paciente.id) {

      try {

        const { data } =  await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);


        const pacienteActualizado = pacientes.map( pacienteState => {
            return pacienteState._id === data._id ? data : pacienteState
        })

        setPacientes(pacienteActualizado);
        
      } catch (error) {
        console.log(error);
      }

    } else {

      try {
       
        const { data } = await clienteAxios.post(
          "/pacientes",
          paciente,
          config
        );

        const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;

        setPacientes([pacienteAlmacenado, ...pacientes]);
      } catch (error) {
        console.log(error);
      }
    }

  };

  const setEdicion = (paciente) => {

    const fechaFormateada = format(paciente.fecha);
    paciente.fecha = fechaFormateada;
    setPaciente(paciente);
  };

  const eliminarPaciente = async id => {
    const confirmar = confirm('Confirmas que deseas eliminar?');

    const token = localStorage.getItem("token");

    if(confirmar){
        try {

            const config = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              };

            const { data } = await clienteAxios.delete(`/pacientes/${id}`, config);

           const pacientesActualizado = pacientes.filter(pacientesState => pacientesState._id  != id);
           
           setPacientes(pacientesActualizado);
        } catch (error) {
            console.log(error);
        }
    }
  }
 
  return (
    <PacientesContext.Provider
      value={{
        pacientes,
        guardarPaciente,
        setEdicion,
        paciente,
        eliminarPaciente
      }}
    >
      {children}
    </PacientesContext.Provider>
  );
};

export default PacientesContext;
