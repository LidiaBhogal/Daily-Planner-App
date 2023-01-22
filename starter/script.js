$(document).ready(function () {
  
  var today = moment();
  $("#currentDay").text(today.format("dddd Do MMMM"));

  var time = moment();
  $(".time").hide().text(time.format("h:mm:s"));

  $('.saveBtn').on('click', function () {
    console.log('button clicked');

   
  })

// save what user enters in text area
  let inputedData =$('.description col-8')
  let planner =$('#planner')
  let saveButton = $('.saveBtn col-2')

  function savePlannerInfo(event) {
    event.preventDefault();
    let addedPlannerInfo = $('textarea');
    let textAdded = inputedData.val();
    addedPlannerInfo.text(textAdded)
    planner.append(addedPlannerInfo)
    $(inputedData.val(''))
    saveButton.on('fas fa-save', savePlannerInfo)

    localStorage.setItem(addedPlannerInfo,textAdded);
  }

  // write an if statement so the the block highlights in the correct colour
 

  $('.description col-8').focus(function(){
    if ( beforeTime < time){
      let beforeTime = $('this').css('background-color', '#d3d3d3')
    } else if (presentTime === time){
      let presentTime = $('this').css('background-color', 'ff6961')
  
  } else {( futureTime > time)
    let futureTime = $('this').css('background-color', '#77dd77',)
    }
    }
)})

  // save to localStorage
  
  // localStorage.setItem(addedPlannerInfo,textAdded);

  // make sure things are saved once page is refreshed

  // sort out the hightlight button




  

  


// refreshButtonEl.on('click', function () {
//   location.reload();
// });
