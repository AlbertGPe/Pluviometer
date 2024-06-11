import CitySelector from "./components/CitySelector";
import DateSelector from "./components/DateSelector";
import Pluviometer from "./components/Pluviometer";
import cities from './data/cities.json'

function App() {
  return (
    <div className="App">
      <DateSelector selectedDate={'Today'}/>
    </div>
  );
}

export default App;
