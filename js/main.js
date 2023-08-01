let fullName =document.getElementById('fullName')
let email =document.getElementById('email')
let password =document.getElementById('password')
let btnSing=document.getElementById('btnSing')
let dataArr=[]
let logInEmail=document.getElementById('logInEmail')
let logInPass=document.getElementById('logInPass')
let btnLogIN=document.getElementById('btnLogIN')
let welcome=document.getElementById('show')
let success= document.getElementById('success')

if( btnSing!=null){ 
btnSing.addEventListener('click',setData)
     
}
//  email validation+=========
function check(){
const Regex = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return Regex.test(email.value)  
}
 // ==sign up btn==
function setData(){
let dataObj = {
    name:fullName.value,
    userEmail:email.value,
    userPass:password.value,
}

if(check() ==false) {
    success.style.display="block"
    success.innerHTML=" input valid email"; 
}else if(password.value.length<4) {
 
        success.style.display="block"
        success.innerHTML=" your password should be more than 4 digits";
    } 
else {
   success.style.display="block"
   dataArr.push(dataObj);
   localStorage.setItem("data",JSON.stringify(dataArr));
//    location.href="http://127.0.0.1:5500/ht/index2.html";
btnSing.href="ht/index2.html"
}

    }
   


    
if (btnLogIN !=null ){ 
btnLogIN.addEventListener('click',getData)
}
function getData(){
 dataArr=JSON.parse(localStorage.getItem("data"))
  for(let i=0; i<dataArr.length ;i++){
if(logInEmail.value!=dataArr[i].userEmail ){
    alert('it is incorrect email')
    break;
}else if(logInPass.value !=dataArr[i].userPass) {
    alert('Do you forget your password')
    break;

}else if (logInEmail.value==dataArr[i].userEmail&& logInPass.value ==dataArr[i].userPass) {
    localStorage.setItem("i",i)
    btnLogIN.href="../ht/index3.html"

}


}  
    }

  
     if (welcome !=null){
function getName(){
    dataArr=JSON.parse(localStorage.getItem("data"))

   let xName= +localStorage.getItem("i") 
    document.getElementById('show').innerHTML =`welcome  ${dataArr[xName].name}`
}
getName()

     }