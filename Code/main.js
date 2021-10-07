// your code goes here
var cube = function(x) {
    return x*x*x;
}

var fullname = function(first,last)
{
    return first +' '+last;
}

var power = function (base,exp)
{
    if (exp === 0){
        return 1;
    }
    return base*power(base, exp - 1);
}


    
var sumCubes = function (numbers) {
    var total = 0;
    for (var i = 0; i< numbers.length, i++)
    {
        total=total+cube(numbers[i]);
    } 
    return total;   
}

function each(array, func) {
    for (var i=0; i<array.length;i++){
        func(array[i]);
    }
    
}