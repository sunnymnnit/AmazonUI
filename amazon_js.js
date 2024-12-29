document.addEventListener("DOMContentLoaded", () => {
    // alert();
    console.log("Goti lo");
    const lists=document.querySelectorAll(".crousel_strip_items_element")
    lists.forEach((elem,idx)=>{
        elem.style.left=`${idx*17}%`;
    });

    const lists2=document.querySelectorAll(".crousel_strip_items_element_2")
    var prevWidth=10;
    var preLeft=0;
    lists2.forEach((elem,idx)=>{
      
        elem.style.left=`${preLeft+prevWidth}px`;
        preLeft=preLeft+prevWidth+15;
        prevWidth=elem.offsetWidth;
    });

    const lists3=document.querySelectorAll(".crousel_strip_items_element_3")
    lists3.forEach((elem,idx)=>{
        elem.style.left=`${idx*17}%`;
    });

    const bigSliderlists=document.querySelectorAll(".crousel_items")
    bigSliderlists.forEach((elem,idx)=>{
        elem.style.left=`${idx*100}%`;
    });


  });
  var isShow=false;
var slideCounter=0;
var slideCounter2=0;
var slideCounter3=0;
var bigSliderCounter=0;
  
  const crouselClick=(event,side)=>{
    if(side=='right')
      slideCounter++;
    else
    slideCounter--;
    const classLis=document.querySelectorAll(".crousel_strip_items_element");
    if(!(slideCounter>3 || slideCounter<0))
    classLis.forEach((ele,idx)=>{
      ele.style.transform=`translateX(-${slideCounter*120}%)`;
    })
    else if(slideCounter>3)
      slideCounter=3;
    else
    slideCounter=0;
  }

const crouselClick2 = (event, side) => {

  if (side == 'right')
    slideCounter2++;
  else
    slideCounter2--;
  const sliderBox = document.querySelector(".crousel_strip_items_2");


  if (!(slideCounter2 > 4 || slideCounter2 < 0))
    sliderBox.style.transform = `translateX(-${slideCounter2 * 200}px)`;
  else if (slideCounter2 > 4)
    slideCounter2 = 4;
  else
    slideCounter2 = 0;
}

  const crouselClick3=(event,side)=>{
    if(side=='right')
      slideCounter3++;
    else
    slideCounter3--;
    const classLis=document.querySelectorAll(".crousel_strip_items_element_3");
    if(!(slideCounter3>3 || slideCounter3<0))
    classLis.forEach((ele,idx)=>{
      ele.style.transform=`translateX(-${slideCounter3*120}%)`;
    })
    else if(slideCounter3>3)
      slideCounter3=3;
    else
    slideCounter3=0;
  }

  const amazonBigCrouselClick=(event,side)=>{
    if(side=='right')
      bigSliderCounter++;
    else
    bigSliderCounter--;
    const classLis=document.querySelectorAll(".crousel_items");
    if(!(bigSliderCounter>3 || bigSliderCounter<0))
    classLis.forEach((ele,idx)=>{
      ele.style.transform=`translateX(-${bigSliderCounter*100}%)`;
    })
    else if(bigSliderCounter>3)
      bigSliderCounter=3;
    else
    bigSliderCounter=0;
  }

  const showHideDropdown=(event)=>{
    isShow=!isShow;
    if(isShow)
    {
      let lis=document.querySelectorAll(".search_bar ul");
      lis.item(0).style.display='block';
    }
    else
    {
      let lis=document.querySelectorAll(".search_bar ul");
      lis.item(0).style.display='none';
    }
  }

const displayLeftRightArrows = (stripNumber) => {
  if (stripNumber == 1) {
    let leftArrow = document.querySelector(".crousel_strip_left_1");
    let rightArrow = document.querySelector(".crousel_strip_right_1");
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
  else if (stripNumber == 2) {
    let leftArrow = document.querySelector(".crousel_strip_left_2");
    let rightArrow = document.querySelector(".crousel_strip_right_2");
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
  else if (stripNumber == 3) {
    let leftArrow = document.querySelector(".crousel_strip_left_3");
    let rightArrow = document.querySelector(".crousel_strip_right_3");
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
}

const hideLeftRightArrows = (stripNumber) => {
  if (stripNumber == 1) {
    let leftArrow = document.querySelector(".crousel_strip_left_1");
    let rightArrow = document.querySelector(".crousel_strip_right_1");
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
  else if (stripNumber == 2) {
    let leftArrow = document.querySelector(".crousel_strip_left_2");
    let rightArrow = document.querySelector(".crousel_strip_right_2");
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
  else if (stripNumber == 3) {
    let leftArrow = document.querySelector(".crousel_strip_left_3");
    let rightArrow = document.querySelector(".crousel_strip_right_3");
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
}