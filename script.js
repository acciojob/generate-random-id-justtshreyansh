function makeid(l) {
  // write your code here
	let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	let len = str.length;
	let result = "";
	for(let i=0;i<l;i++){
		result+=str[Math.floor(Math.random()*(len))];
		
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
