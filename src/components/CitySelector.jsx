import React from 'react'

function CitySelector({ cities, selectedCity, onChangeCity }) {

  const handleChange = (event) => {
    onChangeCity(event.target.value)
  }

  return (
    <select className='form-select' onChange={handleChange} value={selectedCity}>
      {cities.map((city) => (
        <option key={city}>
          {city}
        </option>
      ))}

    </select>
  )
}

export default CitySelector