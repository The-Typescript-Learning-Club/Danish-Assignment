//)first program in type script
//1//console.log("hello world");
//)here function is defined where if we put number the tyepscript is not assigne number 
//function hello(string:String) {
//console.log("sjhka" + string)     
//}
//hello("ali")
// Data Types
//) here you can notice that type is sowing but when we open js file type is remove beacuse type is not imp in js but it can be need in compile type
//but when you compile from js to ts it show an error due to type change so we need to change type any number we can use here
//3//var var_one:number=143;
//console.log(var_one);
//4//var n: number=2;
//console.log("number:"+n)
//here we can write a string  there are three method double sing qoute and back point string can be any statment either name or what you want to write
//5//var var_one:string="i am danish";
//document.write(var_one);
//here boolean is use for true false in tyepscript it is use where we able or enable value
//6//var var_one:Boolean=false;
//console.log(var_one);
//7// var isdone:boolean=false;
//console.log("statment="+isdone)
//here any datatype is used for any type it can manage it byself
//8//var height:any = " height is=5ft";
//console.log("jhone"+height) 
//var var_name: String=(" Ali");
//console.log("Name of sunny leaoni partner is="+var_name)
//string  in array
//10//Array it is used to store more than one value there are two method to define array data type are string or number we are not directly declare array so we declare in for loop
// var myarray: Array<string>=["nodes","ali ","chutia"];
//for(var i:number=0;i<myarray.length; i++){
// document.write(myarray[i]);
// }
//11number in array
//var myarray:Array<number>=[5,4,6];
//for(var i:number=0;i<myarray.length;i++){
//  console.log("number is" +myarray[i]);
//}
// function is used to creat a logic busniess a function with name called name function and a function without name called arrow function or anonymous function
//function ko hum duplication sy bachny k liye liktay ha
//12function fun_one():string{
//return "ali,sk,sql,Abcd!";
//};
// document.write(fun_one());
// var myarray:Array<number>=[15,242,45];
// for(var i:number=0;i<myarray.length;i++){
// console.log("number is"+myarray[i]);
// }
// // here another typeof ts is object tyep of java script this is not say any object types of object b ho sktay wo properties b ho skti
// 13// var person:{
//     name:string;
//     age:number;}={
//     name:"ali",
//     age:26
// };
// console.log(person.name);
// here i am going to do a program of tuple it has fixed length or fixed type here we can identified different type value
//var mytuple:[string,number]=["Ali ik number ka harami",143];
//console.log(mytuple[0]);
//console.log(mytuple[1]);
//here we can identified hetrogenous element in array here we to declare it we use for loop
//14  var myarray: Array <any>=[ 
//      {"p_id":"p_one","p_name":"p_one","p_cost":1000},
//      {"p_id":"p_two","p_name":"p_two","p_cost":32100},
//      {"p_id": "p_three","p_name":"p_three","p_cost":54210},
//      {"p_id":"p_four","p_name":"p_four","p_cost":154210},
// ];
// for(var i:number=0;i<myarray.length;i++){
//     var obj:any=myarray[i];
//     document.write(obj.p_id +obj.p_name+obj.p_cost);
// }
//Global pollouting issue var k through jo variable  declare hota us ko globale variable kahtay yaha pr hum var use krtay or numbers koi b print krty to ist show ho jata 2nd walay ko show krnay k ilye hum program sy bahir show krtay to nai hota us ko avoid krnay k liye hum let use krtay
//15 var data:number=250;
// if(true){
// let data:number=200;
// }  
// console.log(data);
// class me collection of variables hotay or function hotay function k liye public and class k liye private we use constructor using constructor key words
// class Class_one{
//     private sub_one:string;
//     private sub_two:string;
//     private sub_three:string;
//     consttructor(){
//         this.sub_one="johnny sin";
//         this.sub_two="sunny leon";
//         this.sub_three="mia khalia";
//     }
//     public getsubone():string{
// return this.sub_one;
//     }
//     public getsubtwo():string{
//         return this.sub_two;
//             }
//             public getsubthree():string{
//                 return this.sub_three;
//                     }
// }
// var obj:Class_one= new class_one();
// document.write(Obj.getsubone()+"br"+obj.getsubtwo()+"br"+obj.getsubthree()+"br");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.fullName = "ali ";
if (employee.fullName) {
    console.log(employee.fullName);
}
