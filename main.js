let a = Number(prompt('enter the 1st number'))
let b = Number(prompt('enter the 2nd number'))
const div = (divideend, divisor) => {
	var sign=((divideend<0)?1:0^(divisor<0)?-1:1)
	divideend=Math.abs(divideend)
	divisor=Math.abs(divisor)

	var quotient=0,tem=0
	while(divideend>=divisor){
		divideend-=divisor
		++quotient
	}
	if(sign==-1){
		quotient=-quotient	
	}
	return quotient
}
document.write("given number a= " + a + "<br><br>")
document.write("given number b= " + b + "<br><br>")
document.write("multiply is= " + div(a, b))