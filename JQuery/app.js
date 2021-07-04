
// create btn (Submit Text Box)


// Body <<< container
const body = $(document.body); //define body
const container = $('#containerID'); //define container
$(body).append(container); //apppend container to body


// create div for clickMe button --------------
const clickMeDiv = $('#clickMeDiv'); //create div

//$(container).append(clickMeDiv); // append div

const btn = $('<button class="btn  btn-outline-success m-2"> Click Me!:) </button>'); // make button

$(clickMeDiv).append(btn); //append button inside div ??

$(body).append(clickMeDiv);//

// btn click event:
btn.click(function(event){  
    
    event.preventDefault();
    console.log(event.target);  // log click target

    alert('Have a great day you sexy jQuery beast! :)');
    testing();
});


// 2 

// Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.

/// Submit Text Button {

const textInput = $('#textInput'); // text input
const btnSubmitText = $('#btnSubmit');


//Submit Button - click event
//fire button click event function 
btnSubmitText.click(function(event){  
    
    event.preventDefault();
    
    const textValueFromSubmitButton = $(textInput).val(); // calls jquery value from text box
    
    console.log(event.target);  // log click target
    console.log(textValueFromSubmitButton);  // log textValueFromSubmitButton

    // add Alert notifcation
    alert('Thanks for sharing, you entered: ' + textValueFromSubmitButton);

    //  }
    
});


// #4 Color Change - Click Event - text paragraph { DONE}


const textPara=$('#textPara');
$(body).append(textPara);

textPara.click(function(event){
    
    // Random color math
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
 
    $(textPara).css('color','rgb(' + r + ', ' + g + ', ' + b + ')');
});


////  HOVER - Color change div {
    // Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.

    const hoverDiv = $('#hoverDiv');

        $(hoverDiv).mouseover(function() {
          
            $(hoverDiv).removeClass('bg-light');
            $(hoverDiv).addClass('bg-danger');
            $(hoverDiv).addClass('rounded-pill');
           
           $(hoverDiv).mouseout(function() {
              
               $(hoverDiv).addClass('bg-light');
               $(hoverDiv).removeClass('rounded-pill');

        })
           
        });
 

///     }


// 5

// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.

// Button Content: 
const nameBtn = $('#nameBtn');
const myNameText = $('Simon jQuery Cheam');  

//nameDiv Content
const myNameDiv =$('#myNameDiv');
const myName = 'Simon jQuery';

//append nameBtn
$(myNameDiv).append(nameBtn); 
$(container).append(myNameDiv); //append namediv to body

// create span  
const newSpan = $('<span>' + myName +'</span>');

$(newSpan).append(myNameText); //append namediv to body

// click event - Show name

nameBtn.click(function(event){   
    
    //$('<p>' + myName + '</p>').appendTo(myNameDiv);
    console.log('clicked nameBtn!')

    //add span to myNameDiv
    $(myNameDiv).append(newSpan); 

});




// 6


const friendUl = $('#friendUl');

// const friend btn
const friendBtn = $('#friendBtn');

// add friendbtn click event {--------------------------{
    
    let liCounter = 0; 
    friendBtn.click(function(event){  
        
        // create an array containing the names of your friends 
        const friends = ['Vishal', 'Luke', 'Daniel', 'Drew', 'Matt', 'Bob', 'John', 'Moe', 'Bill', 'Spiderman' ];

        const fLength = friends.length; //ok

        if (liCounter < fLength) {
            
            
            ///
            const friend = friends[liCounter];
            const li = $('<li>'+friend +'</li> ');
            li.innerText = friend;
            console.log("li.innerText = "+ li.innerText);
            ///    
            
            liCounter += 1;
            let list = $('#friendUl');
            
            $(list).append(li); 
            
        } else {

            alert("You don't have time for more friends :(");

        }

    });
        







// }-----------------------------}











function testing(url) {
    var win = window.open('https://www.youtube.com/watch?v=YddwkMJG1Jo', '_blank');
    win.focus();
  }