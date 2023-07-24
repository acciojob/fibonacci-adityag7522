function fibonacci(num) {
// your code here
	let prev = 0, curr = 1;
    if( num == 0 || num == 1) return prev;
	if( num == 2) return curr;
	
    for( let i = 3; i <= num; i++){
	    let next = prev + curr;   //next==1
		    prev = curr;          //prev==1
		    curr = next;         //curr==1
	}
    return curr;
}
module.exports = fibonacci;