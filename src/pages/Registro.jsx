import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import '../css/registro.css'

export const Registro = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify({ name, password: '123456' }))
    navigate('/capacitacion', { replace: false })
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <NavBar />
      <div className="Principal2">
        <img src="https://scontent.fcjs3-1.fna.fbcdn.net/v/t31.18172-8/856507_541021672586314_2243026_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=bLmG18Hvd-IAX-yOsTO&_nc_oc=AQn-a5euN8hy_KWSr2-ntUw2_HvYUPlaO45OSyUqF6GrWBx1XngwI4FQX2lIt88uHgg&_nc_ht=scontent.fcjs3-1.fna&oh=00_AT-OPU3OgvwC6Xzl9y4cge_PoygE6KCYeDozVdUOqY6V_A&oe=635BE582" alt="imagen de artesano" />
        <div className="principal__register">
        </div>
      </div>

      <div className='container registro'>
        <h2>Registro</h2>
      </div>

      <form className='form__datos'>
        <div className="fondo"></div>
        <h3>Datos generales</h3>
        <hr />
        <div className='form__box'>
          <p>Nombre:</p>
          <input
            onChange={handleChange}
            className='input' type="text" placeholder='Nombre' />
        </div>
        <div className='form__box'>
          <p>Apellido paterno:</p>
          <input className='input' type="text" placeholder='Apellido paterno' />
        </div>
        <div className='form__box'>
          <p>Apellido materno:</p>
          <input className='input' type="text" placeholder='Apellido Materno' />
        </div>
        <div className='form__box'>
          <p>Edad:</p>
          <input className='input' type="number" min={18} placeholder={18} />
        </div>
        <div className='form__box'>
          <p>Lugar de origen</p>
          <input className='input' type="text" placeholder='Lugar de origen' />
        </div>

        <h3>Datos específicos</h3>
        <hr />
        <div className='form__box form__box--date'>
          <p>Tiempo que lleva en el mercado:</p>
          <input className='input input--date' type="date" />
        </div>

        <div className='form__box form__box--material'>
          <p>Tipo de material que trabaja (artesania):</p>
          <input className='input' type="text" placeholder='Material de trabajo ( Artesania )' />
        </div>

        <div className='form__box form__box--negocio'>
          <div>
            <input className='input' type="checkbox" />
            <p className='parrafo__negocio'>Negocio familiar</p>
          </div>
          <div>
            <p>si no:</p>
            <select name="TipoDeNegocio">
              <option>Seleccione categoria</option>
              <option>Particular</option>
              <option>Sociedad</option>
            </select>
          </div>
        </div>

        <div className='form__box'>
          <p className='parrafo__negocio'>lugar de venta</p>
          <select name="venta">
            <option>Seleccionar</option>
            <option>Local</option>
            <option>En linea</option>
          </select>
        </div>

        <div className='form__box'>
          <p>Subir Productos:</p>
          <input className='input' accept="image/png,image/jpeg" type="file" />
        </div>

        <div className=' form__box--edit '>
          <input
            className='input__submit'
            type="submit"
            value='registrarse'
            onClick={handleSubmit}
          />
        </div>
      </form>

    </>
  )
}
