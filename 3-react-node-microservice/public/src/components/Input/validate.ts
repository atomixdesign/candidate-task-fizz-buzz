interface IErrors{
    start: string;
    end: string;
}
const ValidateInfo = (userInput: IErrors) => {
    let errors:string = ''
    if(!(userInput.start.match("^\\d+$")) || !(userInput.end.match("^\\d+$"))) {
        errors ="Please enter the correct number.";
    }
    if(parseInt(userInput.start,10)>parseInt(userInput.end,10)){
        errors = 'The starting number must be greater than the ending number.'
    }

    return errors
};

export default ValidateInfo