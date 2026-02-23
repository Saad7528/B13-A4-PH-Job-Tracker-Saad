let interviewList = [{name: 'saad'},{name: 'saad'}];
let rejectedList = [{name: 'saad'},{name: 'saad'},{name: 'saad'}];
 
// call counter id
const totalCount = document.getElementById('total-result')
const interviewCount = document.getElementById('interview-result')
const rejectedCount = document.getElementById('rejected-result')

// call card container id
const cardContainer = document.getElementById('cards-container')

// call side note id
const sideNote = document.getElementById('side-note')

// set value for total count and side note
totalCount.innerText = cardContainer.children.length
sideNote.innerText = cardContainer.children.length
// value set interview and rejected
interviewCount.innerText = interviewList.length
rejectedCount.innerText = rejectedList.length

// function calculateCount(){
//     totalCount.innerText = cardContainer.children.length
//     sideNote.innerText = cardContainer.children.length

//     interviewCount.innerText = interviewList.length
//     rejectedCount.innerText = rejectedList.length
// }
// calculateCount()

// Call filter buttons
const allBtn = document.getElementById('btn-all-cards')
const interviewBtn = document.getElementById('btn-interview-cards')
const rejectedBtn = document.getElementById('btn-rejected-cards')


function toggleBtnStyle(id){

    // remove style from btns
    allBtn.classList.remove('btn-info','text-[#FFFFFF]')
    interviewBtn.classList.remove('btn-info','text-[#FFFFFF]')
    rejectedBtn.classList.remove('btn-info','text-[#FFFFFF]')

    // catch element id and set a variable
    let select = document.getElementById(id);

    // add selected btn style
    select.classList.add('btn-info','text-[#FFFFFF]')


}

// const btnContainer = document.getAnimations('btn-container')
// console.log(btnContainer)