//ahmed jamal amir
//7 July 2023
//This program will a person name in lowercase, uppercase and titlecase. 


let personName = "Ahmed Jamal Amir";


console.log("Lowercase:", personName.toLowerCase());


console.log("Uppercase:", personName.toUpperCase());


const titleCaseName = personName
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Titlecase:", titleCaseName);