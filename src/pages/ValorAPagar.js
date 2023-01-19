import React, { useState } from "react";
import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';
import NavBar from "../components/NavBar";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

const ValorAPagar = () => {

  const [valorAPagar, setValorAPagar] = useState(0);


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
  
  return (
    <div >
      <NavBar/>
      <Box sx={{ display:"flex", justifyContent:"center", pt: 5}}>
          <img src="https://images.vexels.com/media/users/3/239034/isolated/preview/2011ded47041cf9ff35bb6da51dae22f-camion-2.png" alt="logo" width={"20%"}  />
      </Box>

      <Typography variant="h3" component="div" sx={{ display:"flex", justifyContent:"center", pb:2}}>Valor a Pagar</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
          width: 300,
          height: 300,
        }}>
          <form onSubmit={handleSubmit}>
          <FormControl fullWidth  >
            <InputLabel id="select-destino">Destino</InputLabel>
            <Select
              labelId="select-destino"
              id="destino"
              name="destino"           
              label="Destino"
            >
              <MenuItem key="G" value={"Guayaquil"}>Guayaquil</MenuItem>
              <MenuItem key="C" value={"Cuenca"}>Cuenca</MenuItem>
              <MenuItem key="T" value={"Tena"}>Tena</MenuItem>
              <MenuItem key="Cpx" value={"Cotopaxi"}>Cotopaxi</MenuItem>
            </Select><br/>
            <TextField  
              id="outlined-basic" label="Peso de carga (kg)" variant="outlined" type="number" name="peso"/><br/>
            <Typography variant="h6" component="div">Lugar de origen: Quito</Typography><br/>

            <Button type="submit" variant="contained" color="success">Calcular</Button><br/>

            <Typography variant="p" component="div" key="textoPagar" >Usted debe pagar: ${valorAPagar} </Typography>

          </FormControl>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default ValorAPagar;
