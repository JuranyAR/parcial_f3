import { useState } from 'react'
import Card from "./components/Card";
import './App.css'

function App() {
  const [data, setData] = useState({name:'', book:''})
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>{
    setSubmitted(false);
    setData({...data, [e.target.name]: e.target.value})
  }

  const validate = () =>{
    if (data.name.trim().length < 3 || data.book.trim().length < 6) {
      return 'Por favor chequea que la información sea correcta';
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const error = validate()
    if(!error){
      setSubmitted(true)
      setError('')
    } else {
      setError(error)
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Cuál es tu libro favorito?</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder='Ingresa tu nombre'
            value={data?.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="title">Título del libro:</label>
          <input
            type="text"
            placeholder='Ingresa tu libro favorito'
            name="book"
            value={data?.book}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Enviar</button>
        {error && <p className='error'>{error}</p>}
      </form>
      {submitted && (
        <Card data={data} />
      )}
    </div>
  );
}



export default App
