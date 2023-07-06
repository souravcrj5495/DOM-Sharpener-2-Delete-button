var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var listGroupItem = document.getElementsByClassName('list-group-item');
var submit = document.getElementById('addSubmit');
var desCription = document.createElement('input');
desCription.id = 'd';
console.log(desCription);
// var des = desCription.setAttribute('id', 'description');
console.log(document.getElementById('d'));
form.insertBefore(desCription, submit);

// console.log(itemList);
var filter = document.getElementById('filter');

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
    var newItem2 = document.getElementById('d').value;
    

    //Create new li Element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    
    //Add text node with input value
    
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));

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



//Filter Items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName('li');
  //Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1||description.toLowerCase().indexOf(text)!= -1){
      item.style.display = 'block';

    }
    else {
      item.style.display = 'none';
    }
  })
}
//Filter Event
filter.addEventListener('keyup', filterItems);

