// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(){

    event.preventDefault();
    var image= document.querySelector("#image").value;
    var studentName= document.querySelector("#name").value;
    var batch1= document.querySelector("#batch").value;
    var dsa1= document.querySelector("#dsa").value;
    var skillathon=document.querySelector("#cs").value;
    var coding=document.querySelector("#coding").value;

    var tr1=document.createElement("tr")

    // var td1=document.createElement("td")
    // image.innerText=image.inputUrl;
    var image1 = document.createElement("img")
    image1.src=image;
    var td2= document.createElement("td")
    td2.innerText=studentName;
    var td3= document.createElement("td")
    td3.innerText=batch1;
    var td4= document.createElement("td")
    td4.innerText=dsa1;
    var td5=document.createElement("td")
    td5.innerText=skillathon;
    var td6= document.createElement("td")
    td6.innerText=coding;
    
    var td7= document.createElement("td")
     td7.innerText=Math.ceil(((dsa1/30+skillathon/30+coding/30))*100);
     var td8= document.createElement("td")

   if(td7.innerText>50)
   {
     td8.innerText="Regular";
     td8.style.backgroundColor="green";
   }
   else{
      td8.innerText="Async";
      td8.style.backgroundColor="red";
     }
  //  td8.innerText= "Async".value="50%";
  //  td8.innerText="Regular" 
    tr1.append(image1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr1)
}