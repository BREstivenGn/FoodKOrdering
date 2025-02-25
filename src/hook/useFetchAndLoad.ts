import { AxiosResponse } from 'axios';
import { useEffect, useState, useRef } from "react";

export interface AxiosCall<T = unknown> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

// Definimos el tipo genérico T
//este hook funciona para poder cancelar las peticiones que se repiten
const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  // Usar useRef para mantener la referencia del controller entre renders
  const controllerRef = useRef<AbortController>();
  
  //funcion que recibe un objeto {call, controller} 
  //call: funcion callback que es donde se hace la peticion
  //controller: controlador de la peticion para poder cancelarla
  const callEndpoint = async <T = unknown>(axiosCall: AxiosCall<T>) => {
    if (axiosCall.controller) controllerRef.current = axiosCall.controller;
    setLoading(true);
    //se inicia el resultado de la peticion
    let result = {} as AxiosResponse<T>;
    try {
      //se hace la peticion y se guarda el resultado en result
      result = await axiosCall.call;
    } catch (err: unknown) {
      //manejo de error
      setLoading(false);
      throw err;
    }
    setLoading(false);
    //se retorna el resultado de la peticion
    return result;
  };
  //funciion para cancelar la peticion
  const cancelEndpoint = () => {
    setLoading(false);
    controllerRef.current?.abort();
  };
  useEffect(() => {
    return () => {
      //la peticion muere si se encuentra otra peticion, por ende solo se ejecuta la ultima, 
      // y no se hacen peticiones de mas
      cancelEndpoint();
    };
  }, []);
  //asi se retorna las  variables de un hook para que sea inicializado 
  //cancelEndpoint: esta funcion es pasada invocandola ejm:    cancelEndpoint(funcion())
  return { loading, setLoading, callEndpoint };
};

export default useFetchAndLoad;