interviewList = [];
rejectedList = [];

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



// Call filter buttons
const allBtn = getElementById('btn-all-cards')
const interviewBtn = getElementById('btn-interview-cards')
const rejectedBtn = getElementById('btn-rejected-cards')


const btnContainer = document.getAnimations('btn-container')
console.log(btnContainer)