type FizzBuzzInputProps = {
  inputText: string;
  inputIdText: string;
  inputValue: number;
  inputOnChange(stateValue: any, inputId: any): void;
};
const FizzBuzzInput = ({
  inputText,
  inputIdText,
  inputValue,
  inputOnChange,
}: FizzBuzzInputProps) => {
  return (
    <div className="input-element">
      <span>{inputText}</span>
      <input
        type="number"
        id={inputIdText}
        required
        value={inputValue}
        onChange={(event) => inputOnChange(event, inputIdText)}
      />
    </div>
  );
};

export default FizzBuzzInput;
