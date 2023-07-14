function fibonacci(num) {
	if(num == 1) return 0;
	if(num == 2) return 1;
	int prev1 = 0;
	int prev2 = 1;
	for(int i = 3;i<=num;i++)
	{
		int curr = prev1 + prev2;
		prev1 = prev2;
		prev2 = curr;
	}
	return prev2;
}

module.exports = fibonacci;
