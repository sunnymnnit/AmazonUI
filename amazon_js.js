document.addEventListener("DOMContentLoaded", () => {
    // alert();
    console.log("Goti lo");
    const lists=document.querySelectorAll(".crousel_strip_items_element")
    lists.forEach((elem,idx)=>{
        elem.style.left=`${idx*17}%`;
    });


  });
var slideCounter=0;
  const shiftLeft=(event)=>{
    slideCounter++;
    const lists=document.querySelectorAll(".crousel_strip_items_element")
    lists.forEach((elem,idx)=>{
        elem.style.transform=`translateX(-${slideCounter*120}%)`;
    });
  }


  const shiftRight=(event)=>{
    if(slideCounter==0)
        slideCounter=1;
    slideCounter--;
    const lists=document.querySelectorAll(".crousel_strip_items_element")
    lists.forEach((elem,idx)=>{
        elem.style.transform=`translateX(-${slideCounter*120}%)`;
    });
  }