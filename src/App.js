import React, { useState } from "react";
import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';
import NavBar from "./components/NavBar";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  const [welcomeState, setWelcomeState] = useState(true);

  const [valorAPagar, setValorAPagar] = useState(0);

  const [leavingState, setLeavingState] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    let destino = e.target.destino.value;
    let peso = e.target.peso.value;

    switch (destino) {
      case "Guayaquil":
        setValorAPagar(peso * 3);
        break;
      case "Cuenca":
        setValorAPagar(peso * 5);
        break;
      case "Tena":
        setValorAPagar(peso * 2);
        break;
      case "Cotopaxi":
        setValorAPagar(peso * 2.50);
        break;
      default:
        break;
    }
  }


  const onMouseOverLogo = () => {
    setWelcomeState(false)
  }
  const onMouseOverLeaving = () => {
    setLeavingState(false)
  }

  const cambioColor = () => {
    let button = document.getElementById('mybutton');
        button.addEventListener('click', function onClick(event){
          document.body.style.background = "#E788BB";
        });       

  const btns1 = document.getElementById("btns1");
  if(btns1){
  btns1.addEventListener('click', cambiarFondo);
  }

  function cambiarFondo() {
    document.getElementById("sucursal1").style.background = "#A1E2D2"
    document.getElementById("sucursal2").style.background = "#FF828B"
    document.getElementById("sucursal3").style.background = "#FFD872"
    document.getElementById("sucursal4").style.background = "#FFA23A" 

  }
  

  return (
    <div >
      <NavBar onMouseOver={onMouseOverLogo}/>
      <div className="navbar" sx={{display:"flex", flexDirection:"row", width:"100%"}}>
        <div style={{ padding:"5px", display:"flex", justifyContent:"center"}}>
          <img src="https://images.vexels.com/media/users/3/239034/isolated/preview/2011ded47041cf9ff35bb6da51dae22f-camion-2.png" alt="logo" width={"150px"}  onMouseOver={onMouseOverLogo}/>
        </div>

        <div style={{textAlign:"center", background:"#A93226", color:"white", padding:"10px"}} hidden={welcomeState}>BIENVENIDOS</div>
      </div>
      <Typography variant="h3" component="div" sx={{ display:"flex", justifyContent:"center", pb:2}}>Valor a Pagar</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
          width: 300,
          height: 300,
        }}>
          <FormControl fullWidth onSubmit={handleSubmit} >
            <InputLabel id="select-destino">Destino</InputLabel>
            <Select
              labelId="select-destino"
              id="destino"
              name="destino"           
              label="Destino" 
            >
              <MenuItem value={"Guayaquil"}>Guayaquil</MenuItem>
              <MenuItem value={"Cuenca"}>Cuenca</MenuItem>
              <MenuItem value={"Tena"}>Tena</MenuItem>
              <MenuItem value={"Cotopaxi"}>Cotopaxi</MenuItem>
            </Select><br/>
            <TextField id="outlined-basic" label="Peso de carga (kg)" variant="outlined" type="number" name="peso"/><br/>
            <Typography variant="h6" component="div">Lugar de origen: Quito</Typography><br/>

            <Button type="submit" variant="contained" color="success">Calcular</Button>

            <Typography variant="p" component="div">Usted debe pagar: ${valorAPagar} </Typography>

      <div>
        <h3>Información Sucursales</h3>
        <table>
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
        </table>
              
                <button id="btns1">Cambiar fondo</button>
      </div>

          </FormControl>
          
        </Box>
      </Box>
      <Typography variant="h2" component="div" onMouseOver={onMouseOverLeaving}>Gracias por preferirnos</Typography>
      <Typography variant="h3" component="div" hidden={leavingState}>Vuelva pronto!!</Typography>
    </div>
  );
}

export default App;
