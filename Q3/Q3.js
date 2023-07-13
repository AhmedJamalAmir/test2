let personName = "Ahmed Jamal Amir";


console.log("Lowercase:", personName.toLowerCase());


console.log("Uppercase:", personName.toUpperCase());


const titleCaseName = personName
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Titlecase:", titleCaseName);