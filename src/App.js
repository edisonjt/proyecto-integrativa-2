import React, { useState } from "react";
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';

function App() {
  const [state, setState] = useState(true);

  const [valorAPagar, setValorAPagar] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.destino.value === "Guayaquil"){
      setValorAPagar(e.target.peso.value * 3)
    }
    if(e.target.destino.value === "Cuenca"){
      setValorAPagar(e.target.peso.value * 5)
    }
    if(e.target.destino.value === "Tena"){
      setValorAPagar(e.target.peso.value * 2)
    }
    if(e.target.destino.value === "Cotopaxi"){
      setValorAPagar(e.target.peso.value * 2.50)
    }
  }

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
    <div className="container" >
        <div className="navbar" sx={{display:"flex", flexDirection:"row", width:"100%"}}>
          <div style={{borderBottom:"1px solid gray", padding:"5px",background: "linear-gradient(90deg, rgba(121,9,9,0.7679446778711485) 0%, rgba(10,0,36,1) 48%, rgba(0,82,255,1) 100%)", display:"flex", justifyContent:"center"}}>
            <img src="https://basc-guayaquil.org/wp-content/uploads/2022/03/Logotipo-Transpchevez-PNG.png" alt="logo" width={"150px"}  onMouseOver={()=>setState(false)}/>
          </div>
          <div style={{textAlign:"center", background:"#A93226", color:"white", padding:"10px"}} hidden={state}>BIENVENIDOS</div>
        </div>
      <div>
        <h3>Valor a Pagar</h3>
        <form onSubmit={handleSubmit} >
          <label for="peso">Peso de la carga </label>
          <input type="number" placeholder="Ingrese el peso de la carga" name="peso"/> Kg<br />
          <label for="origen">Lugar de origen </label>
          <input type="text" placeholder="Ingrese el peso de la carga" name="origen" value="Quito"/><br/>
          <label for="destino">Lugar de destino </label>
          <select  placeholder="Escoja el destino" name="destino">
            <option value="Guayaquil">Guayaquil</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Tena">Tena</option>
            <option value="Cotopaxi">Cotopaxi</option>
          </select><br/>
          <button type="submit" className="btn btn-success" >Calcular</button>
          <p>Usted debe pagar: ${valorAPagar} </p>

        </form>
        
      </div>
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

    </div>
  );
}

export default App;
