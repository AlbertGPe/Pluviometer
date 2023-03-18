function DateSelector({ selectedDate, onDateChange }) {
  const options = ["Today", "7 days", "Month"];

  return (
    <div className="row fixed-bottom">
      {options.map((option) => (
        <div
          onClick={() => onDateChange(option)}
          key={option}
          className={`col text-center border p-3 ${
            selectedDate === option ? "text-primary" : ""
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

DateSelector.defaultProps = {
  onDateChange: () => {},
};

export default DateSelector;
