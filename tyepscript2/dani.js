//)first program in type script
1; //console.log("hello world");
//)here function is defined where if we put number the tyepscript is not assigne number 
2; //function hello(string:String) {
//console.log("sjhka" + string)     
//}
// hello("ali")
// Data Types
//) here you can notice that type is sowing but when we open js file type is remove beacuse type is not imp in js but it can be need in compile type
//but when you compile from js to ts it show an error due to type change so we need to change type any number we can use here
3; //var var_one:number=143;
//console.log(var_one);
4; //var n: number=2;
//console.log("number:"+n)
//here we can write a string  there are three method double sing qoute and back point string can be any statment either name or what you want to write
5; //var var_one:string="i am danish";
//document.write(var_one);
//here boolean is use for true false in tyepscript it is use where we able or enable value
6; //var var_one:Boolean=false;
//console.log(var_one);
7; // var isdone:boolean=false;
//console.log("statment="+isdone)
//here any datatype is used for any type it can manage it byself
8; //var height:any = " height is=5ft";
//console.log("jhone"+height) 
9; //var var_name = new String(" Ali");
//console.log("Name of sunny leaoni partner is="+var_name)
//string  in array
10; //Array it is used to store more than one value there are two method to define array data type are string or number we are not directly declare array so we declare in for loop
// var myarray: Array<string>=["nodes","ali ","chutia"];
//for(var i:number=0;i<myarray.length; i++){
//  document.write(myarray[i]);
// }
//number in array
11; //var myarray:Array<number>=[5,4,6];
//for(var i:number=0;i<myarray.length;i++){
//  console.log("number is" +myarray[i]);
//}
// function is used to creat a logic busniess a function with name called name function and a function without name called arrow function or anonymous function
//function ko hum duplication sy bachny k liye liktay ha
function fn_one() {
    return "ali,sk,sql,Abcd!";
}
;
document.write(fn_one());
