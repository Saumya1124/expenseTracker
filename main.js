const price = document.querySelector('.price');
const category = document.querySelector('.category');
const btn = document.querySelector('.btn');
const description = document.querySelector('.description');

const myForm = document.querySelector('#my-form');

const itemList = document.querySelector('#item')

myForm.addEventListener('submit',addData);

itemList.addEventListener('click',removeItem);

itemList.addEventListener('click',editData);





// data from form to console and local storage
let i = 0;
function addData(e){
    e.preventDefault();

    i++

    if (price.value === ''||description.value === '' || category.value ===''){
        console.log('error')

    }
    else{
        console.log('success')
        console.log(description.value)
    }


    // addding form to li

    const li = document.createElement('li');
    li.className= 'list'
    li.appendChild(document.createTextNode(category.value+' ' +description.value + ' '+price.value +' '));
    itemList.appendChild(li);

    // creating delete button

    const del = document.createElement('button');
    del.className = 'del_btn btn btn-danger';
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(del);

    // creating edit button 

    const edit = document.createElement('edit');
    edit.className = 'edit_btn btn btn-info';
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit)

    // storing data in local storage
    let expense = {
        'price' : price.value,
        'description' : description.value,
        'category': category.value
    }

    let expenseString = JSON.stringify(expense)

    localStorage.setItem(i,expenseString)

}

// removing data in dom and local storage

function removeItem(event){
    if(event.target.classList.contains('del_btn')){
        let li = event.target.parentElement;
        itemList.removeChild(li)

        // removing data from local storage 
        let expenseData = {
            'price':price.value,
            'description':description.value,
            'category': category.value
        }
        expenseDataString = JSON.stringify(expenseData)
        localStorage.removeItem(i,expenseDataString)

    }
    
}


// updating data in dom and local storage

function editData(event){
    if (event.target.classList.contains('edit_btn')){
        let li = event.target.parentElement;
        let data = li.textContent
        data = data.split(' ') 
        console.log(data[0])
        price.value = data[0]
        description.value = data[1]
        category.value = data[2]
        

        // removing from dom
        itemList.removeChild(li)

        // removing data from local storage 
        let expenseData = {
            'price':price.value,
            'description':description.value,
            'category': category.value
        }
        expenseDataString = JSON.stringify(expenseData)
        localStorage.removeItem(i,expenseDataString)



    }
}