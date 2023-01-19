import React, { useState } from "react";
import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';
import NavBar from "../components/NavBar";
import { Box } from "@mui/system";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Sucursales = () => {

  const btns1 = document.getElementById("btns1");
  if(btns1){
  btns1.addEventListener('click', cambiarColor);
  }

  const btns2 = document.getElementById("btns2");
  if(btns2){
  btns2.addEventListener('click', cambiarBackground);
  }

  function cambiarBackground(){
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";
  
    for(var i = 0; i < 6; i++){
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
  
    document.body.style.background = color;
  }

  function cambiarColor() {
    document.getElementById("header").style.background = "#2196f3"
    document.getElementById("sucursal1").style.background = "#A1E2D2"
    document.getElementById("sucursal2").style.background = "#FF828B"
    document.getElementById("sucursal3").style.background = "#FFD872"
    document.getElementById("sucursal4").style.background = "#FFA23A" 

  }

  const [leavingState, setLeavingState] = useState(true);

  const onMouseOverLeaving = () => {
    setLeavingState(false)
  }
  

  return (
    <div >
      <NavBar/>
      <Box sx={{ display:"flex", justifyContent:"center", pt: 5}}>
        <img src="https://images.vexels.com/media/users/3/239034/isolated/preview/2011ded47041cf9ff35bb6da51dae22f-camion-2.png" alt="logo" width={"20%"}  />
      </Box>
      <Typography variant="h3" component="div" sx={{mb:4, 'text-align':"center"}}>Información Sucursales</Typography>
      {/* <table>
        <tr>
          <th>Guayaquil</th>
          <th>Cuenca</th>
          <th>Tena</th>
          <th>Cotopaxi</th>
        </tr>
        <tr>
          <td>
              <p id="sucursal1">GUAYAQUIL_29 AVA	29 AVA E./ VENEZUELA Y COLOMBIA</p></td>
              <td>
              <p id="sucursal2">CUENCA_AMERICAS	AV DE LAS AMERICAS Y NICOLAS ROCHA</p></td>
              <td>
              <p id="sucursal3">TENA_PRINCIPAL	AV. PANO Y VICTOR HUGO SAN MIGUEL</p></td>
              <td>
              <p id="sucursal4">LA MANA_AV. 19 DE MAYO	AV. 19 DE MAYO Y AMERICA</p></td>
        </tr>
      </table> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead id="header">
          <TableRow>
            <TableCell >Guayaquil</TableCell>
            <TableCell >Cuenca</TableCell>
            <TableCell >Tena</TableCell>
            <TableCell >Cotopaxi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell  id="sucursal1">GUAYAQUIL_29 AVA	29 AVA E./ VENEZUELA Y COLOMBIA</TableCell>
            <TableCell  id="sucursal2">CUENCA_AMERICAS	AV DE LAS AMERICAS Y NICOLAS ROCHA</TableCell>
            <TableCell  id="sucursal3">TENA_PRINCIPAL	AV. PANO Y VICTOR HUGO SAN MIGUEL</TableCell>
            <TableCell  id="sucursal4">LA MANA_AV. 19 DE MAYO	AV. 19 DE MAYO Y AMERICA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

      <Box sx={{'textAlign':'center', pt:3}}>
        <Button id="btns1" variant="contained" size="large" color="success" sx={{width:"20%",}}>Cambiar fondo</Button>
        <Button id="btns2" variant="contained" size="large" color="warning" sx={{width:"20%",}}>Cambiar background</Button>
      </Box>

      <Box sx={{ display:"flex", 'flex-direction' :'column' , justifyContent:"center", pt: 5,'textAlign':'center'}}>
        <Typography variant="h2" component="div" onMouseOver={onMouseOverLeaving}>Gracias por preferirnos</Typography>
        <Typography variant="h3" component="div" hidden={leavingState}>Vuelva pronto!!</Typography>
      </Box>                 
      
    </div>
  );
}

export default Sucursales;
