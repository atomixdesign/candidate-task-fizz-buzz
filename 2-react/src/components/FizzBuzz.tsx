type FizzBuzzProps = {
  input: number;
  output: string;
};

export const FizzBuzz = ({ input, output }: FizzBuzzProps) => {
  return (
    <div>
      {input}. {output === "" ? "-" : output}
    </div>
  );
};

export default FizzBuzz;
