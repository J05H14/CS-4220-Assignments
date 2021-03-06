//1. Write a function called replaceLetters and that takes a string and an array of letters.
function replaceLetters(str, arr){
	for(let i = 0; i < str.length; i++){
		const char = str[i]
		if(arr.includes(char)){
			str = str.replace(char, '-')
		}
	}
	return str
}

//Testing Question 1
console.log('Question 1 Test')
const arr1 = ['a', 'e', 'i', 'o', 'u' ]
const s = 'aerial'
console.log('original word: ' + s)
const replacedS = replaceLetters(s, arr1)
console.log('replaceLetters:' +replacedS)


//2. Write a function called sumArray.
function sumArray(arr){
	let sum = 0
	arr.forEach(elem => {
		if(!isNaN(elem) && typeof(elem) != typeof(true)){
			sum += parseInt(elem)
		}
	})
	return sum
}

//Testing Question 2
console.log('Question 2 Test')
const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false]
const sumArr2 = sumArray(arr2)
console.log('Original Array: ' + arr2)
console.log('SumArray: ' + sumArr2)


//3. Write a function called countingWords and it counts the number of times they are present in the array.
function countingWords(arr){
    let words = {}
    arr.forEach(word => {
        if(words[word] == undefined){
            
            words[word] = 0

        }
        words[word] += 1
    })
    
    return words
}

//Testing Question 3
console.log('Question 3 Test')
const arr3 = ['hi', 'hi', 'hello', 'world', 'hello', 'hi' , 'greetings']
console.log("Array: " + arr3)
console.log(countingWords(arr3))


//4. Write a function called createAnimals and is able to create an object.
function createAnimals(arr){
    let animalObj = {}
    
    for(let i = 0; i < arr.length ; i++){
        const array = arr[i]
        animalObj[i] = {}
        array.forEach(obj => {
            keys = Object.keys(obj)
            for(let j = 0; j < keys.length; j+=2){
                animalObj[i][obj[keys[j]]] = obj[keys[j+1]]
            }
            
        })
        console.log(animalObj[i])
    }
    return animalObj
}

//Testing Question 4
console.log('Question 4 Test')

const arr4 =
    [
       [
           { property: 'name', assign: 'Garfield'},
           { property: 'owner', assign: 'Jon Arbuckle'},
           { property: 'type', assign: 'cat' }
       ],
       [
           { property: 'name',assign: 'Snoopy' },
           { property: 'owner',assign: 'Charlie Brown' },
           { property: 'type',assign: 'dog' }
       ]
   ]
   
const animals = createAnimals(arr4)
console.log(animals)