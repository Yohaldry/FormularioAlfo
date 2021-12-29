import React from 'react'

const Formulario = () => {
    


    const [datos, setDatos] = React.useState([])
    
    React.useEffect(() => {
        console.log('UseEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
          const data = await fetch('http://localhost:3001/formulario')
          const users =  await data.json()
          console.log(users)
          setDatos(users)
    }

    
    return (
        <div className='camposRecuadro'>

<form >
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Listado</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Registro</button>
  </li>
</ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        
                   <h1>Listado</h1> 
                   {
                       datos.map(item =>(
                   <table class="table table-dark">
  
  <tbody>
   
    <tr>
      <th scope="row">{item.id}</th>
      <td colspan="2" class="table-active">{item.nombre}</td>
      <td>{item.estadoCivil}</td>
      <td colspan="2" class="table-active">{item.Fnacimiento}</td>
    </tr>
  </tbody>
</table>
 ))
}
                   
      
      ...</div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      
                <h1>Formulario</h1>
                            <input type="text" name='nombre' placeholder='Nombre'/>
                            
                            <label>Fecha de Nacimieto</label>
                            <input name='Fnacimiento' type="date"/>
                            <select name="estadoCivil" id="">
                                <option value="">Casado</option>
                                <option value="">Soltero</option>
                                <option value="">Viudo</option>
                                <option value="">Divorciado</option>
                            </select>
                            <div className='botones'>
                            <button className='guardar'>Guardar</button>
                            </div>
                    
      ...</div>
</div>




            
</form>
            
            </div>
           
            
      
    )
}

export default Formulario
