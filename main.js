const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");

const firstBtnDetail = document.querySelector(".first-btn-detail")
const secondBtnDetail = document.querySelector(".second-btn-detail")
const thirdBtnDetail = document.querySelector(".third-btn-detail")

function firstBtnShow(){
   firstBtnDetail.style.opacity = 1;
   firstBtnDetail.style.visibility = "visible";
}

function secondBtnShow(){
   secondBtnDetail.style.opacity = 1;
   secondBtnDetail.style.visibility = "visible";
}

function thirdBtnShow(){
   thirdBtnDetail.style.opacity = 1;
   thirdBtnDetail.style.visibility = "visible";
}

function firstBtnHide(){
   firstBtnDetail.style.opacity = 0;
   firstBtnDetail.style.visibility = "hidden";
}

function secondBtnHide(){
   secondBtnDetail.style.opacity = 0;
   secondBtnDetail.style.visibility = "hidden";
}

function thirdBtnHide(){
   thirdBtnDetail.style.opacity = 0;
   thirdBtnDetail.style.visibility = "hidden";
}

btnOne.addEventListener("click",function(){
   firstBtnShow();
   secondBtnHide();
   thirdBtnHide();
})

btnTwo.addEventListener("click",function(){
   secondBtnShow();
   firstBtnHide();
   
})

btnThree.addEventListener("click",function(){
   thirdBtnShow()
   firstBtnHide()
   secondBtnHide()
})