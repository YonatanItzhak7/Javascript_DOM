// 1
// console.log(h2_id.innerText);
// 2
// document.write(h3_id.textContent+"my dom app")
// 3
// var headClass = document.getElementsByClassName('allClass')
// console.log(headClass);
// 4
// console.log(headClass[1]);
// 5
// console.log(headClass[2]);
// 6
// var userName = document.getElementsByClassName("sameClass")
// console.log(userName);
// 7
// function printHeadLine(userText){
//     var userTextPrint = prompt("enter username")
//     document.write("<h2>"+userTextPrint+"</h2>");
// }
// printHeadLine()
// 8
// function printUserColor(userNumb,userColor){
//     for(var i=0;i<userNumb;i++){
//         document.write("<span>"+userColor+"</span>"+" ")
//     }
// }
// printUserColor(+prompt("Enter how many color you have?"),prompt("Enter your kind of color?"))
// 9
// function printDomText() {
//   var userTag = prompt();
//   var userText = prompt();
//   document.write("<"+userTag+">"+userText+"</"+userTag+">")
// }
// printDomText()
// 10
// function printInput(){
//     var myText = prompt();
//     document.write("<input type="+myText+">")
// }
// printInput()
// 11
// function printSameClassText(myClass,myText){
//     var className = document.getElementsByClassName(myClass)
//     for(var i=0;i<className.length;i++){
//     className[i].innerText = myText
// }
// }
// printSameClassText("allClass","asdada")
// 12
// function printInnerSpan(){
//    var myP = document.getElementsByTagName("p")
//    for(var i=0;i<myP.length;i++){
//        myP[i].innerHTML = "<span>"+"text"+"</span>"
//    }
// }
// printInnerSpan()
// 13
// function printInput(){
//     var myProfile = {
//         firstName:prompt("Enter your name"),
//         lastName: prompt("Enter your last name"),
//         myAge: prompt("Enter your age")
//     }
//     document.write(myProfile.firstName+" "+myProfile.lastName+" "+myProfile.myAge)
//     if(myProfile.myAge>18){
//         document.write("<br><input>")
//     }
// }
// printInput()
// 14
// function printObjMovie(){
//     var myMovie ={
//         movieName:prompt("Enter your movie name"),
//         review:prompt("How many review the movie have"),
//         movieYear:prompt("What the movie year"),
//         movieImg:prompt("Enter the movie cover")
//     }
//     document.write("<h1>"+myMovie.movieName+"</h1>"+" "+"<h4>"+myMovie.movieYear+"</h4>"+"<br><img src="+myMovie.movieImg+">"+"<br><span>"+myMovie.review+"</span>")
// }
// printObjMovie()
// 15
// function employeeObj(){
//     var worker = {
//         workerName:prompt("Enter the worker name"),
//         workerlastname:prompt("Enter the last name"),
//         email:prompt("Enter the mail"),
//         depertment:prompt("Enter the depertment")
//     }
//     document.write("<h1>"+worker.workerName+"</h1><br>"+" "+"<h3>"+worker.workerlastname+"</h3><br>"+" "+"<h4>"+worker.email+"</h4><br>"+"<h5>"+worker.depertment+"</h5><br>")
// }
// employeeObj()
// 16
// function printManyObj(){
//     var userNumber = +prompt("Enter how many obj you want")
//     for(var i=0;i<userNumber;i++){
//         var myBuilding ={
//         building:prompt("Enter the building name"),
//         contractor:prompt("Enter the contractor of the building"),
//         company:prompt("Enter the company"),
//         floors:prompt("Enter how many floors"),
//         aprt:prompt("Enter how many apartments")
//     }
//     document.body.innerHTML+= ("<h1>"+myBuilding.building+"</h1><br>"+" "+"<h3><br>"+myBuilding.contractor+"</h3>"+" "+"<p>"+myBuilding.company+"</p><br>"+"<p>"+myBuilding.floors+"</p>"+" "+"<p>"+myBuilding.aprt+"</p>")
//     }
// }
// printManyObj()
// 17
// var counter =0;
// function myShop(){
//     var userNumber = +prompt("Enter how many shop")
//     for(var i=0;i<userNumber;i++){
//         var shop ={
//             shopName:prompt("Enter the shop name"),
//             add:prompt("Enter the shop addrass"),
//             Dep:+prompt("Enter how many departments"),
//             workres:+prompt("How many workers?")
//         }
//         if(shop.workres>10){
//             document.write("<div>"+shop.shopName+"<div><br>"+"<div>"+shop.add+"</div><br>"+"<div>"+shop.Dep+"</div><br>"+"<div>"+shop.workres+"</div><br>")
// counter++;
//         }
//     }
// }
// myShop()
// // 18
// function myCounter(){
//     console.log(counter);
// }
// myCounter()
// 19
// function listFunction () {
//     var userNumber= +prompt ("enter your number")
//     for (var i=0; i<userNumber; i++) {
//         var person= {
//             fullName: prompt ("enter your full name"),
//             company: prompt ("enter your company name"),
//             phone: prompt ("enter your phone number"),
//             email: prompt ("enter your email")
//         }
//         document.getElementById("list").innerHTML+= "<li>"+person.fullName+"</li>"
//     }
// }
// listFunction ()


