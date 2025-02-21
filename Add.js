//function to calculate area of rectangle
function area(l,b)
{
return `Area of Rectangle having length ${l} and breadth ${b} is : ${l*b}`;
}
//function to calculate perimeter of rectangle
function perimeter(l,b)
{
return `Perimeter of Rectangle having length ${l} and breadth ${b} is : ${2*(l+b)}`
}
module.exports = {area,perimeter}