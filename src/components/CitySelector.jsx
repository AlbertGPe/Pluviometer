function CitySelector({ cities, selectedCity, onChangeCity }) {
  function handleChange(event) {
    onChangeCity(event.target.value);
  }

  return (
    <select
      className="form-select"
      onChange={handleChange}
      value={selectedCity}
    >
      {cities.map((city) => (
        <option key={city}>{city}</option>
      ))}
    </select>
  );
}

CitySelector.defaultProps = {
  onChangeCity: () => {},
};

export default CitySelector;
