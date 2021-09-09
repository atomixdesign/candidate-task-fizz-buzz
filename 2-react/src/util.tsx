
export const formValidate = (startNumber: number, endNumber: number) => {


    if (startNumber && endNumber) {
        if (!isNaN(startNumber) && !isNaN(endNumber) && (startNumber >= 1 && endNumber >= 1))
            if (endNumber >= startNumber)
                return true;
    }
    if (!isNaN(endNumber) && endNumber < 1) {
        return false;
    }

    if (!isNaN(endNumber) && endNumber < 1) {
        return false;
    }
    return false;
}

export const fetchAPI = async (startNumber: number, endNumber: number) => {
    const response_fizz = await fetch('http://localhost:8000/?a=' + startNumber + '&b=' + endNumber);
    const response_data = await response_fizz.json();

    return response_data;

}