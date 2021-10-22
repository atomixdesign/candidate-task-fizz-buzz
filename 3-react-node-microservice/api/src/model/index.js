function getResults(start,end){
    let current = start;
    let dataArray = [];
    let counter = 1;
    while(current<=end){
        if(current%15===0){
            dataArray.push({input:counter,output:'FizzBuzz'})
        }else if(current%5===0){
            dataArray.push({input:counter,output:'Buzz'})
        }else if(current%3===0){
            dataArray.push({input:counter,output:'Fizz'})
        }else{
            dataArray.push({input:counter,output:''})
        }
        current++;
        counter++;
    }
    return dataArray;
};

module.exports = {getResults};