const people = [
  { name: 'Person 0', languages: ['hindi', 'english', 'gujarati'] },
  { name: 'Person 1', languages: ['hindi', 'odia'] },
  { name: 'Person 2', languages: ['tamil', 'english'] },
  { name: 'Person 3', languages: ['odia', 'spanish'] },
  { name: 'Person 4', languages: ['gujarati', 'tamil'] },
  { name: 'Person 5', languages: ['tamil', 'odia'] },
  { name: 'Person 6', languages: ['telugu', 'english'] },
  { name: 'Person 7', languages: ['telugu', 'hindi'] },
  { name: 'Person 8', languages: ['marathi', 'hindi'] },
  { name: 'Person 9', languages: ['english', 'spanish'] }
];

let translators = (person1 , person2) => {
    return people[person1].languages.map( (x) => {
        if(people[person2].languages.includes(x)){
            return true
        }
    })
}
let p1 = prompt('Enter first person')
let p2 = prompt('Enter second person')
if(true){
    if(translators(p1, p2).includes(true)){
        alert("No translator required.")
    }else{
        alert("Translator required.")
    }
}
