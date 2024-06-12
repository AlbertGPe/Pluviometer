import React, { useState } from 'react'
import CitySelector from './CitySelector';
import DateSelector from './DateSelector'
import cities from './../data/cities.json'

function Pluviometer() {

  const [city, setCity] = useState('Madrid');
  const [date, setDate] = useState('Today');
  const [litres, setLitres] = useState();

  const handleChangeCity = (city) => {
    setCity(city)
  }

  const handleChangeDate = (date) => {
    setDate(date)
  }

  return (
    <div>
      <CitySelector cities={cities} selectedCity={city} onChangeCity={handleChangeCity} />
      <DateSelector selectedDate={date} onDateChange={handleChangeDate} />
    </div>  
  )
}

export default Pluviometer