import React, { useState } from "react";
import '@fontsource/roboto/500.css';
import NavBar from "../components/NavBar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const  Bienvenida = () => {
  const [welcomeState, setWelcomeState] = useState(true);

  const onMouseOverLogo = () => {
    setWelcomeState(false)
  }
 
  return (
    <div >
        <NavBar onMouseOver={onMouseOverLogo}/>
        <Box sx={{ display:"flex", justifyContent:"center", pt: 5}}>
            <img src="https://images.vexels.com/media/users/3/239034/isolated/preview/2011ded47041cf9ff35bb6da51dae22f-camion-2.png" alt="logo" width={"20%"} onMouseOver={onMouseOverLogo} />
        </Box>     
        <Box sx={{ display:"flex", justifyContent:"center"}}>
            <img src="https://uthapd.files.wordpress.com/2017/03/bienvenidos.png" alt="logo" width={"20%"}  hidden={welcomeState}/>
        </Box>     
        <Typography variant="h4" sx={{'text-align':'center', mt:4,color:'#3f51b5'}}> ¿Quiénes Somos?</Typography>
        <Typography variant="p" component="div" sx={{'text-align':'center', m:8}}>
            Somos una empresa con cobertura en todo el territorio nacional y con más de 11 años de experiencia en el mercado del 
            transporte de carga terrestre.Contamos con una flota de 30 vehículos como camiones y cabezales de alto tonelaje la cual está 
            debidamente equipada y con los permisos correspondientes para la movilización de cargas. Contamos con chasis de 20”y 40”; 
            plataformas de 2 y 3 ejes con una capacidad de carga de hasta 50 toneladas. Además de prestar servicios con los vehículos 
            propios de nuestra compañía, tenemos vinculados alrededor 20 cabezales, con los cuales cumplimos los requerimientos de nuestros 
            clientes. Nuestras operaciones son realizadas por personal efectivamente calificado y que responden a cualquier solicitud del 
            cliente, desempeñando sus funciones en el área de puertos y oficinas.
        </Typography>
    </div>
  );
}

export default Bienvenida;
