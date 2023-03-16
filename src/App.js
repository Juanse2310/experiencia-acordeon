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
    experiencia: 'experiencia1',
    descripcion:
  'descripcion experiencia laboral 1'
  },
  {
    experiencia: 'experiencia2',
    descripcion:
    'descripcion experiencia laboral  2'
  },
  {
    experiencia: 'experiencia3',
    descripcion:
    'descripcion experiencia laboral  3'
  },
  {
    experiencia: 'experiencia4',
    descripcion:
    'descripcion experiencia laboral  4'
  }
]

export default App;
