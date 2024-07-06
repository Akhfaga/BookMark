

var submitBtn = document.getElementById('submitBtn')
var nameInput = document.getElementById("bookmarkName")
var urlInput = document.getElementById("bookmarkURL")
function clearForm (){
    nameInput.value=null,
    urlInput.value=null
    
}
var bookMarklist =[];
if(localStorage.getItem('bookMark')!==null){
    bookMarklist = JSON.parse(localStorage.getItem('bookMark'))
displayData()
}
function submit(){

    var bookMark = {
        name: nameInput.value, 
        url : urlInput.value, 
    }

var namecheck = checkValidationName()
var urlcheck = checkValidationUrl()
if(namecheck== true && urlcheck==true){
    
    bookMarklist .push (bookMark);
    displayData()
    localStorage.setItem(  "bookMark"   , JSON.stringify(bookMarklist)  )
    clearForm()
}
}

function displayData(){

    var cartona =""

    for( var i = 0 ; i < bookMarklist.length ;i++  )
        {
            cartona+=`


              <tr>


                    <td> ${i} </td>
                    <td>${bookMarklist[i].name}  </td>
                    <td> ${bookMarklist[i].url} </td>
                    <td>
                        <button class="btn btn-outline-warning mx-auto btn-sm" >  <a href="${bookMarklist[i].url} " target=" _blank ">Visit</a></button>
                    </td>
                    
                    <td>
                        <button  onclick="deleteItem( ${i}  ) "   class=" btn btn-outline-danger mx-auto btn-sm"> Delete</button>
                    </td>

                </tr>
            
            
            
            `
        }

      document .getElementById("tableData").innerHTML=cartona;  

}
function checkValidationName(){
    let text = nameInput.value
    let regex = /^[A-Z][a-z]{3,8}$/
    let msg = document.getElementById('msName')
    if(regex.test(text)){
        nameInput.classList.add('is-valid')
        nameInput.classList.remove('is-invalid')
        msg.classList.add('d-none')
        return true
    }
    else{
        nameInput.classList.add('is-invalid')
        nameInput.classList.remove('is-valid')
        msg.classList.remove('d-none')
        return false
    }
}

function checkValidationUrl(){
    let text = urlInput.value
    let regex = /^(?:https?|ftp):\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/\S*)?$/
    let msgUrl = document.getElementById('msUrl')
    console.log('ay 7aga');
    if(regex.test(text)){
        urlInput.classList.add('is-valid')
        urlInput.classList.remove('is-invalid')
        msgUrl.classList.add('d-none')
        return true
    }
    else{
        urlInput.classList.add('is-invalid')
        urlInput.classList.remove('is-valid')
        msgUrl.classList.remove('d-none')
        return false
    }
}


function deleteItem( deleteIndex  ){
   bookMarklist.splice( deleteIndex ,  1 )
   localStorage.setItem(  "bookMark"   , JSON.stringify(bookMarklist)  )

   displayData()

   console.log(bookMarklist);
}

submitBtn.addEventListener('click',function(){
    submit()
})