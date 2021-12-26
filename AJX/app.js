console.log("Ajx tutorial")


let fetchBtn=document.getElementById("fetchBtn")
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
   // console.log("Clicked Fetch button");

    //initiating xhr object
    const xhr=new XMLHttpRequest();
  //  xhr.open('GET','https://fakestoreapi.com/products/1',true);

  //post request
  xhr.open('POST','	http://dummy.restapiexample.com/api/v1/create',true)
  xhr.getResponseHeader('Content-type','application/json')

    //what to do in progress
    xhr.onprogress=function(){
        //can be used for waiting
        //console.log('on progress')
    }
    // ready state values in xhr :  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    xhr.onreadystatechange= function(){
        //console.log('ready state is: ',xhr.readyState);
    }
    //print the responsr text

    //status code ->https://httpstatuses.com/
    //ready to searve
    xhr.onload=function(){
        if(this.status===200){
            //console.log(this.responseText)
        }else{
            //console.log("some error occured");
        }
    }
    //send request
    params=`{"name":"test1","salary":"123","age":"23"}`
    //final send the data
    xhr.send();

    console.log("we are done")
}


let popBtn=document.getElementById("popBtn")
popBtn.addEventListener('click',popClickkHandler)
function popClickkHandler(){
    console.log("Clicked Populate button");

    //initiating xhr object
    const xhr=new XMLHttpRequest();
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    //ready to searve
    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText)
            console.log(obj)
            let list=document.getElementById('list');
            str="";
            for(key in obj){
                console.log(key)
                str+=`<li>${obj[key].employee_age}</li>`
            }
            list.innerHTML=str;
        }else{
            console.log("Some error occured");
        }
    }
    xhr.send();
    console.log("Fetching employees")

}