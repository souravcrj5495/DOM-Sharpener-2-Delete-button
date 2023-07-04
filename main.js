var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var listGroupItem = document.getElementsByClassName('list-group-item');
console.log(itemList);

for(let i=0; i<listGroupItem.length; i++){
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';

    editBtn.style.marginRight = '5px';

    //Append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    //Append button to li
    listGroupItem[i].appendChild(editBtn);

}


//Form submit event
form.addEventListener('submit', addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    // console.log(1);

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li Element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');


    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);


    //add Edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right edit';

    editBtn.style.marginRight = '5px';

    //Append text Node
    editBtn.appendChild(document.createTextNode('edit'));

    //Append button to li
    li.appendChild(editBtn);

    
    //Append li to list
    itemList.appendChild(li);

}


//Delete event

let removeItem = (e)=>{
    if(e.target.classList.contains('delete')){
      if(confirm('Are Your Sure ?')){
          var li = e.target.parentElement;
          console.log(li);
          itemList.removeChild(li);
      }
    }
  }

itemList.addEventListener('click',removeItem);