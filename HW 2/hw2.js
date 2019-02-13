//1. Write a function called print which accepts an object and prints to the console.
function print(object){
    const {name, leader = '', members} = object
    let membersString = ''
    console.log(`Team: ${name}`)
    console.log(`Leader: ${leader}`)
    
    for(let i = 0; i < members.length; i++){
        const member = members[i]
        if( i == members.length-1){
            membersString += ' and ' + member
        }
        else if (i == 0){
            membersString += member 
        }
        else{
            membersString += ', ' + member 
        }
    }
    
    console.log(`Members: ${membersString}`)
}
//Testing Question 1
console.log('Question 1 Test')
const group1 = {
name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}

print(group1)
print(group2)