document.body.classList.add('bg-light'); // create light bg for contrast

const btn = document.createElement('button');
const btnText = document.createTextNode('Click Me (not in html)'); 

// click event + alert

btn.addEventListener('click', function(){
    console.log('clicked!')
    alert('Have a great day you sexy beast! :)');
    // testing
    testing();
});
btn.appendChild(btnText);

//  create main container element and add class name

const container = document.createElement('div');
container.className = 'main-container';

// create div for button

const buttonDiv = document.createElement('div');


// body < container < buttonDiv < btn
buttonDiv.appendChild(btn);
container.appendChild(buttonDiv);
document.body.appendChild(container);


// 2

// Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.

let btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', function(){  // launch function via click event on button ID
        
        const textValueFromDOM = document.getElementById("textInput").value;
        console.log( textValueFromDOM);  // log if function worked

        alert("you entered: "+ textValueFromDOM);

    });



// 3  - Source: (DOMDOMDOM lab)

// Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.


//const hoverDiv = document.createElement('div');

const hoverDiv = document.getElementById('hoverDiv');

// hover over logic
hoverDiv.addEventListener('mouseover', function(){         
    console.log('mouseover:' +hoverDiv.id);
    
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    hoverDiv.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'; 

});

// hover out logic
hoverDiv.addEventListener('mouseout', function(){         
    console.log('mouseout:' +hoverDiv.id);
    hoverDiv.style.backgroundColor = 'white'; 
});

// 4 

// Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click 

const textPara = document.getElementById('textPara');


// Click event 
textPara.addEventListener('click', function(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    textPara.style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')'; 
});  


// 5

// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.

// Button Content
const nameBtn = document.getElementById('nameBtn');
const nameBtnText = document.createTextNode('What is my name? Click to find out (not in html)'); // button text
nameBtn.appendChild(nameBtnText);

//nameDiv Content
const myNameDiv = document.getElementById('myNameDiv');
const myNameText = document.createTextNode('Simon DOM Cheam');

// create span
var newSpan = document.createElement('span');
newSpan.appendChild(myNameText);


// click event - Show name
nameBtn.addEventListener('click', function(){
    
    console.log('clicked nameBtn!')
    myNameDiv.appendChild(newSpan);
   
});



// 6

const friendBtn = document.getElementById('friendBtn');


//When the button is clicked, add each friend's name as an li to the ul on the page.

// create an array containing the names of your friends 
const friends = ['Vishal', 'Luke', 'Daniel', 'Drew', 'Matt', 'Bob', 'John', 'Moe', 'Bill', 'Spiderman' ];

let liCounter = 0; 

friendBtn.addEventListener('click', function() {
    
   
        
    if(liCounter< friends.length) {

        const item = document.createElement('li');
        
        const friend = friends[liCounter];
        let list = document.getElementById('friendUl');  
        
        item.innerText = friend;
        list.appendChild(item);
        
        
        console.log(friend);
        
        liCounter += 1;

    } else {

        alert("You don't have time for more friends :(");

    }



        //  };
    });

    

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  // Test  
    
    
    
    function testing(url) {
        var win = window.open('https://www.youtube.com/watch?v=YddwkMJG1Jo', '_blank');
        win.focus();
      }