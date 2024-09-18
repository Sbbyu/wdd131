// gets the date from the Date object and makes an instance of it stored in the varible today
const today = new Date();


//gets the year from the date instance stored in today and using the get full year function and stores it in the varible currentYear
const currentYear = today.getFullYear();


//prints the year from the varible at the place with the matcing id
document.querySelector("#currentyear").textContent = currentYear;


let lastModified = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = lastModified;

