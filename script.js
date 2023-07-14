function fibonacci(num) {
// your code here
	let a=0;
     let b=1;
	if(num==0) return a
	if(num==1) return b
	for(let i=0;i<num-1;i++){
		let ans= a+b;
		a=b;
		b=ans;
	}
	return ans;
}
module.exports = fibonacci;