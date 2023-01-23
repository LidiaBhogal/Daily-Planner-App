$(document).ready(function () {
  
  var today = moment();
  $("#currentDay").text(today.format("dddd Do MMMM"));

  var time = moment();
  $(".time").hide().text(time.format("h:mm:s"));

  $('.saveBtn').on('click', function () {
    console.log('button clicked');

   
  })

console.log($(".description"))

// save what user enters in text area
  let inputedData =$('.description')
  let planner =$('#planner')
  let saveButton = $('.saveBtn')

  for (let i = 0; i < inputedData.length; i++) {
    inputedData[i].value = localStorage.getItem(`hour${i}`);
     if (time.format("h") <= (i+9) ) {
      inputedData[i].classList.add('past')
     } else if (time.format('h') === (i+9)){
      inputedData[i].classList.add('present')
     } else (time.format('h') >= (i+9)){
      inputedData[i].classList.add('future')
     }
  }
}

  function savePlannerInfo(event) {
    event.preventDefault();
    console.log(event)
    let addedPlannerInfo = $('textarea');
    let textAdded = inputedData.val();
    // addedPlannerInfo.text(textAdded)
    // planner.append(addedPlannerInfo)
    // $(inputedData.val(''))
    for (let i = 0; i < inputedData.length; i++) {
      console.log(`this loop has run ${i} times`);
      console.log("this loop has run " + i + " times" );
      localStorage.setItem(`hour${i}`, inputedData[i].value);
    
    }

   
  }
  saveButton.on('click', savePlannerInfo)
  // write an if statement so the the block highlights in the correct colour
 

  $('.description').focus(function(){
    if ( beforeTime < time){
      let beforeTime = $('this').css('background-color', '#d3d3d3')
    } else if (presentTime === time){
      let presentTime = $('this').css('background-color', 'ff6961')
  
  } else {( futureTime > time)
    let futureTime = $('this').css('background-color', '#77dd77',)
    }
    }
)
})

  // save to localStorage
  
  // localStorage.setItem(addedPlannerInfo,textAdded);

  // make sure things are saved once page is refreshed

  // sort out the hightlight button




  

  


// refreshButtonEl.on('click', function () {
//   location.reload();
// });
