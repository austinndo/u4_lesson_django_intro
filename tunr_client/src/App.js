import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URL = 'http://localhost:8000/'

function App() {
  const [artists, setArtist] = useState([])
  const [formValues, setFormValues] = useState({
    name: '',
    photo_url: '',
    nationality: ''
  })

  useEffect(() => {
    const getArtists = async () => {
      let res = await axios.get(`${URL}`)
      console.log(res)
      console.log(res.data)
      setArtist(res)
    }
    getArtists()
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      photo_url: formValues.photo_url,
      nationality: formValues.nationality,
      name: formValues.name
    }

    await axios.post(`${URL}`, data)

    setFormValues({
      photo_url: '',
      nationality: '',
      name: ''
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="photo_url"
            type="text"
            placeholder="photo_url"
            value={formValues.photo_url}
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="text"
            name="nationality"
            placeholder="nationality"
            value={formValues.nationality}
            required
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default App
