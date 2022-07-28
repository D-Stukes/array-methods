const characters = [
    {
        name: "Daenerys Targaryen",
        show: "Game of Thrones",
        seasons: 8
    },
    {
        name: "Dolores Abarnathy",
        show: "West World",
        seasons: 4
    },
    {
        name: "Don Draper",
        show: "Mad Men",
        seasons: 7
    },
    {
        name: "Thomas Shelby",
        show: "Peaky Blinders",
        seasons: 6
    },
    {
        name: "Rick Sanchez",
        show: "Rick & Morty",
        seasons: 4
    },
    {
        name: "Jeff Probst",
        show: "Survivor",
        seasons: 43
    },
    {
        name: "Charlotte Hale",
        show: "West World",
        seasons: 4
    }
]


// forEach()
// characters.forEach((char) => {
//     console.log(char.name)
// })
/*
result = 
Daenerys Targaryen
Dolores Abarnathy
Don Draper
Thomas Shelby
Rick Sanchez
Jeff Probst
Charlotte Hale
*/

//characters.forEach( (char, i) => {
    //replaces each element value with the given phrase
   // characters[i] = "something else"
    

//   if (i % 2 === 0){
//     characters[i] = "even index values"
//     console.log(characters)
//   }

 // })

// map() creates a new array
// const addRealKey =  characters.map ( (char) => {
//     //creates new key "real" and sets it to false
//     char.real = false
//     if(char.name === "Jef Probst"){
//         char.real = true
//     }
//     char.name === "Jeff Probst" ? char.real = true : char.real = false
//     //alternative shorter code
 //Add key "cartoon"  and use boolean to identify which object includes animation
// char.cartoon = false
// if(char.name === "Rick Sanchez"){
//     char.cartoon = true
// }
    //         char.real = true
    //     }

//     return char
// })

// filter() - will return an new array that filters thge array for any element that matches the condition
// const moreThan5Seasons = characters.filter ( (char) => {
//    return char.seasons > 5 || char.show === "West World"
// })
// console.log (moreThan5Seasons)

//filter() - fancy version - no curly braces or return needed, as they are implied when there is only one line
const moreThan5Seasons = characters.filter ( (char) => char.seasons > 5 )


// every()


// some()


// find()
const thomas = characters.find( (char) => {
  return  char.name === "Thomas Shelby"
})

// find shorter version
const thomas = characters.find( (char) => char.name === "Thomas Shelby")

// find shorter version - destructuring the char passed to the callback
const thomas = characters.find( ({name} ) => char.name === "Charlotte Hale")
  
console.log(thomas)



//set