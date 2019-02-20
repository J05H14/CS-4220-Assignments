//1. Using async/await syntax write a set of functions that adds numbers and awaits for the total.
//Promise to add two numbers with a given time
const add = ({first, second, time} ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //checks to make sure the inputs are numbers
            const error1 = isNaN(first) ? `${first} is not a number` : null
            const error2 = isNaN(second) ? `${second} is not a number` : null
            
            //handling the NaN error
            if(error1 || error2){
                if(error1){
                    reject(error1)
                }
                if(error2){
                    reject(error2)
                }
            }
            //Adding the numbers up
            else{
                resolve(first + second)
            }
        })
    }, time)
}

//adder function to call the promise so that it only needs the numbers, not the time
const adder = (previous, next) => {
    // add({first: previous, second: next, time: 10})
    //     .then((result) => {
    //         console.log(result)
    //     })
    return add({first: previous, second: next, time: 10})
}

//interateNumbers async function
async function iterateNumbers(numbers){
    let total = 0
    for(let i = 0; i < numbers.length; i += 2){
        const current = numbers[i]
        let next

        //if else for the case that there are an odd number of elements
        if(!(i == numbers.length - 1)){
          next = numbers[i+1]
        }
        else{
          next = 0
        }
        try{
            const add2 = await adder(current, next)
            // console.log(`add: ${add2}`)
            total += add2
        }catch(err){
            console.log(err)
        }
    }
    console.log(`Total:\n${total}`)
}

//Testing Question 1
console.log("Question 1 Test");
iterateNumbers([1, 2, 3, 5, 8, 13, 21])