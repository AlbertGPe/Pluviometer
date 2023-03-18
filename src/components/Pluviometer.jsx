import { useEffect, useState } from "react";
import { fetchData } from "../services/fetch-data";
import cities from "./../data/cities.json";
import CitySelector from "./CitySelector";
import DateSelector from "./DateSelector";
import RainGauge from "./RainGauge";

function Pluviometer() {
  const [city, setCity] = useState("Madrid");
  const [date, setDate] = useState("Today");
  const [litres, setLitres] = useState();

  useEffect(() => {
    setLitres(undefined);

    fetchData(city, date).then((litres) => setLitres(litres));
  }, [date, city]);

  const handleChangeCity = (city) => {
    setCity(city);
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  return (
    <main>
      <CitySelector
        cities={cities}
        selectedCity={city}
        onChangeCity={handleChangeCity}
      />

      <RainGauge litres={litres} />

      <DateSelector selectedDate={date} onDateChange={handleChangeDate} />
    </main>
  );
}

export default Pluviometer;
