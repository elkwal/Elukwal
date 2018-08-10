var a =parseInt(prompt("Enter the side A"));
var b =parseInt(prompt("Enter the side B"));
var c =parseInt(prompt("Enter the side C"));
if  (a===b && b===c) {
alert("This is an equilateral triange");
}
else if (a===b || b===c || c==b)
{
  alert("This is an isosceles triange")
  }
  else if( (a+b) > c || (b+c) > a || (a+c) > b);{
