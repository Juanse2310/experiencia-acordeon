import { useState } from 'react';
import './App.css';

function App() {
  const[selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)

    }

    setSelected(i)
  }
  return (
    <div className="contenido">
      <div className='acordeon'>

        {data.map((item, i) => (
          <div className='item'>
            <div className='titulos' onClick={() => toggle(i)}>
              <h2>{item.experiencia}</h2>
              <span>{selected=== i ? '-' : '+'}</span>
            </div>
            <div className={selected=== i ? 'detalle show' : 'detalle'}>{item.descripcion}</div>
          </div>
        ))}
      </div>
    
      
    </div>
  );
}
const data =[
  { 
    experiencia: 'Facility Manager Support Citibank-Sodexo                         <MARZO 2022 – Presente>',
    descripcion:
  'Tareas administrativas vinculadas al facility managment en dos  de los sitios más importantes de CitiBank. Seguimiento de Schedule de tareas livianas. Gestión/seguimientos de materiales/servicios/presupuestos, primer contacto con proveedores. Confección y traducciones de informes & presentaciones. '
  },
  {
    experiencia: 'Asistente Administrativo & Facility coordinator   Arauco S.A.       <Sep, 2015 - Dic, 2021>',
    descripcion:
    'Asistente administrativo responsable del control documental de proveedores y contratistas. Coordinación del área de mantenimiento general del edificio, maestranza y servicio de vigilancia. Gestión de especificaciones técnicas para servicios/compras/licitaciones/visitas de obra, entre otros.'
  },
  {
    experiencia: 'Data Entry // Asistente Administrativo  Cencosud S.A.                <Feb, 2010 - Abr, 2015>',
    descripcion:
    'Ajustes y modificación de cuentas. Bajas y manejo de documentación. Capacitación constante en prevención de lavado de dinero. Confiado al proceso de migración de sistemas a plataformas MasterCard.'
  },
  {
    experiencia: 'Vendedor Telefónico   Telefonica Argentina                         <Ene, 2009 - Feb, 2010>',
    descripcion:
    'Ventas de productos telefónica para pymes y negocios. Venta de servicios para movistar'
  }
]

export default App;
