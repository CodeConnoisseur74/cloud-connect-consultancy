// Footer Copyright
// Create a new function called newDate()
function newDate() {
    //return a new Date() -- returns the current calendar year.
    return new Date().getFullYear();
}
// after everything else has loaded on the page, load this command: find the element (like a <span>) with the ID of 'autoupdate' and insert the dash '-' and the result of the newDate() function that returns the current calendar year.  (ie. '-2017' or whatever the current calendar year is)
document.onload = document.getElementById("autodate").innerHTML = '-' + newDate();