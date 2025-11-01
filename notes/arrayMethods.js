const number=prompt("Enter a number to make array upto:");
// Prompting user to enter 'n'

let arrOfNum=[];
//creating empty array 

//Function to push element to array from '1' to 'n'
for(let i=0;i<number;i++)
{
     arrOfNum.push(i+1);
}

//Printing array after pushing 
console.log(arrOfNum);

//Using arr.reduce to return sum of all array elements
const arrSumReduce=arrOfNum.reduce((res,current)=>{
     return res+current;
});

//Printing the sum of array elements
console.log(`The sum is: ${arrSumReduce}`);

//Using arr.reduce to return product of all array elements
const arrMulReduce=arrOfNum.reduce((res,current)=>{
     return res*current;
})

//Printing the product of array elements
console.log(`The product is: ${arrMulReduce}`);