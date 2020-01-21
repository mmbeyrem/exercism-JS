
var numbers = {
	*[Symbol.iterator] (){
		for(let i=0; i<=100; i++){
			yield i;
		}
	}
}
// 1 .. 100
for(n of numbers){
	console.log(n);
}
//6 .. 30
for(n of numbers){
	console.log(n);

}	