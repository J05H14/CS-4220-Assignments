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
const arr = ['a', 'e', 'i', 'o', 'u' ]
const s = 'aerial'
console.log('original word: ' + s)
const replacedS = replaceLetters(s, arr)
console.log('replaceLetters:' +replacedS)