function acceptor (num1,num2)
{
    // variables that contains the array in which the numbers between those two inputed numbers will be stored
    let lamah =[];
    // variables which will contain the value of the first number
    let i=num1;
    // Created a while loop whose main function is to check the two numbers if the boolean condition is met then the system proceeds to generate the numbers 
    // between the two numbers 
    while (i<=num2)
    {
        lamah.push(i);
        i++;
    }
    // Talls the computer to return the values generated into the array created known as Ian 
    return lamah ;
}
console.log(acceptor(2,7))