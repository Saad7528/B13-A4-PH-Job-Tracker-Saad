let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';
 
// call counter id
const totalCount = document.getElementById('total-result')
const interviewCount = document.getElementById('interview-result')
const rejectedCount = document.getElementById('rejected-result')

// call card container id
const cardContainer = document.getElementById('cards-container')

// call side note id
const sideNote = document.getElementById('side-note')

// function for calculate job div-----------------------------------------------------
function calculateCount(){

    // set value for total count and side note
    totalCount.innerText = cardContainer.children.length
    sideNote.innerText = cardContainer.children.length

    // value set interview and rejected
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

// Call filter buttons
const allBtn = document.getElementById('btn-all-cards')
const interviewBtn = document.getElementById('btn-interview-cards')
const rejectedBtn = document.getElementById('btn-rejected-cards')


function toggleBtnStyle(id){
    
    currentStatus = id

    // remove style from btns
    allBtn.classList.remove('btn-info','text-[#FFFFFF]')
    interviewBtn.classList.remove('btn-info','text-[#FFFFFF]')
    rejectedBtn.classList.remove('btn-info','text-[#FFFFFF]')

    // catch element id and set a variable
    let select = document.getElementById(id);

    // add selected btn style
    select.classList.add('btn-info','text-[#FFFFFF]')


    // condition for show or hide filter section
    if (id == 'btn-interview-cards'){
        filterSection.classList.remove('hidden')
        cardContainer.classList.add('hidden')
        renderInterview()
        sideNote.innerText = filterSection.children.length
    }else if (id == 'btn-all-cards'){
        filterSection.classList.add('hidden')
        cardContainer.classList.remove('hidden')
        calculateCount()
    }else if (id == 'btn-rejected-cards') {
        filterSection.classList.remove('hidden')
        cardContainer.classList.add('hidden')
        renderReject()
        sideNote.innerText = filterSection.children.length
    }

}

// filter section
const filterSection = document.getElementById('filtered-section')

// interview btn function
const cardsContainer = document.getElementById('cards-container')
.addEventListener('click', function(event){

    // send object to interview array
    if (event.target.classList.contains('btn-inter')){
        const divParentNode = event.target.parentNode.parentNode;
        const jobName = divParentNode.querySelector('.job-name').innerText
        const jobSkill = divParentNode.querySelector('.job-skill').innerText
        const jobTime = divParentNode.querySelector('.job-time').innerText
        const jobStatus = divParentNode.querySelector('.job-status').innerText
        const jobNote = divParentNode.querySelector('.job-note').innerText 

        divParentNode.querySelector('.job-status').innerText = 'INTERVIEW'


        const cardInfo = {
            jobName, 
            jobSkill,
            jobTime,
            jobStatus,
            jobNote }

        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName)
        
        // send object to interview array if already not push
        if (!jobExist){
            interviewList.push(cardInfo)
        }

        // removing the Interview item from rejected list
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)

        // after remove rerender the html
        if (currentStatus == 'btn-rejected-cards') {
            renderReject()
        }

        calculateCount()


    }else if (event.target.classList.contains('btn-rej')){
        console.log(event.target)

        const divParentNode = event.target.parentNode.parentNode;
        const jobName = divParentNode.querySelector('.job-name').innerText
        const jobSkill = divParentNode.querySelector('.job-skill').innerText
        const jobTime = divParentNode.querySelector('.job-time').innerText
        const jobStatus = divParentNode.querySelector('.job-status').innerText
        const jobNote = divParentNode.querySelector('.job-note').innerText 

        divParentNode.querySelector('.job-status').innerText = 'REJECTED'


        const cardInfo = {
            jobName, 
            jobSkill,
            jobTime,
            jobStatus,
            jobNote }

        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName)
        
        // send object to interview array if already not push
        if (!jobExist){
            rejectedList.push(cardInfo)
            console.log('push Rej done')
        }

        // removing the reject item from interview list
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)

        // rerender the html
        if (currentStatus == "btn-interview-cards") {
            renderInterview();
        }

        // call a function
        calculateCount()
        
    }
})


// collect info from *interview* list and create div and set innerHtml
function renderInterview() {
    filterSection.innerHTML = '';

    for (let inter of interviewList){
        
    let div = document.createElement('div')
    div.className = 'flex justify-between rounded-lg bg-white p-6'
    div.innerHTML = `
    <div class="space-y-4">
           <div>
                <h2 class="job-name mobile text-[18px]/[26px] font-semibold text-[#002C5C]">${inter.jobName}</h2>
                <p class=" job-skill text-base/5 text-[#64748B]">${inter.jobSkill}</p>
           </div>
            
           
            <p class=" job-time text-[14px] text-[#64748B]">${inter.jobTime}</p>
            
            
            <div>
                <button class="job-status btn bg-blue-100 text-[#002C5C]">INTERVIEW</button>
                <p class="job-note text-base/5 text-[#323B49] mt-2">Build cross-platform mobile applications using React Native. Work   on products used by millions of users worldwide.</p>
            </div>
                <div class="flex gap-2">
                    <button id="interview-btn" class="btn-inter btn btn-outline btn-success">INTERVIEW</button>
                    <button id="rejected-btn" class="btn-rej btn btn-outline btn-error ">REJECTED</button>
                </div>
        </div>
        
        <div class="  btn border-0 bg-white rounded-full  "
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#F1F2F4"/>
                <path d="M21.5 11H19V10.5C19 10.1022 18.842 9.72064 18.5607 9.43934C18.2794 9.15804 17.8978 9 17.5 9H14.5C14.1022 9 13.7206 9.15804 13.4393 9.43934C13.158 9.72064 13 10.1022 13 10.5V11H10.5C10.3674 11 10.2402 11.0527 10.1464 11.1464C10.0527 11.2402 10 11.3674 10 11.5C10 11.6326 10.0527 11.7598 10.1464 11.8536C10.2402 11.9473 10.3674 12 10.5 12H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V12H21.5C21.6326 12 21.7598 11.9473 21.8536 11.8536C21.9473 11.7598 22 11.6326 22 11.5C22 11.3674 21.9473 11.2402 21.8536 11.1464C21.7598 11.0527 21.6326 11 21.5 11ZM14 10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5V11H14V10.5ZM20 21H12V12H20V21ZM15 14.5V18.5C15 18.6326 14.9473 18.7598 14.8536 18.8536C14.7598 18.9473 14.6326 19 14.5 19C14.3674 19 14.2402 18.9473 14.1464 18.8536C14.0527 18.7598 14 18.6326 14 18.5V14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14C14.6326 14 14.7598 14.0527 14.8536 14.1464C14.9473 14.2402 15 14.3674 15 14.5ZM18 14.5V18.5C18 18.6326 17.9473 18.7598 17.8536 18.8536C17.7598 18.9473 17.6326 19 17.5 19C17.3674 19 17.2402 18.9473 17.1464 18.8536C17.0527 18.7598 17 18.6326 17 18.5V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5Z" fill="#64748B"/>
                </svg>
        </div>
    </div> `

    // throw to filter section
    filterSection.appendChild(div)
    calculateCount() 

    }
    
}

// collect info from *REJECTED* list and create div and set innerHtml
function renderReject() {
    filterSection.innerHTML = '';

    for (let reject of rejectedList){
        console.log(reject);
        
    let div = document.createElement('div')
    div.className = 'flex justify-between rounded-lg bg-white p-6'
    div.innerHTML = `
    <div class="space-y-4">
           <div>
                <h2 class="job-name mobile text-[18px]/[26px] font-semibold text-[#002C5C]">${reject.jobName}</h2>
                <p class=" job-skill text-base/5 text-[#64748B]">${reject.jobSkill}</p>
           </div>
            
           
            <p class=" job-time text-[14px] text-[#64748B]">${reject.jobTime}</p>
            
            
            <div>
                <button class="job-status btn bg-blue-100 text-[#002C5C]">REJECTED</button>
                <p class="job-note text-base/5 text-[#323B49] mt-2">Build cross-platform mobile applications using React Native. Work   on products used by millions of users worldwide.</p>
            </div>
                <div class="flex gap-2">
                    <button id="interview-btn" class="btn-inter btn btn-outline btn-success">INTERVIEW</button>
                    <button id="rejected-btn" class="btn-rej btn btn-outline btn-error ">REJECTED</button>
                </div>
        </div>
        
        <div class="  btn border-0 bg-white rounded-full  "
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#F1F2F4"/>
                <path d="M21.5 11H19V10.5C19 10.1022 18.842 9.72064 18.5607 9.43934C18.2794 9.15804 17.8978 9 17.5 9H14.5C14.1022 9 13.7206 9.15804 13.4393 9.43934C13.158 9.72064 13 10.1022 13 10.5V11H10.5C10.3674 11 10.2402 11.0527 10.1464 11.1464C10.0527 11.2402 10 11.3674 10 11.5C10 11.6326 10.0527 11.7598 10.1464 11.8536C10.2402 11.9473 10.3674 12 10.5 12H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22H20C20.2652 22 20.5196 21.8946 20.7071 21.7071C20.8946 21.5196 21 21.2652 21 21V12H21.5C21.6326 12 21.7598 11.9473 21.8536 11.8536C21.9473 11.7598 22 11.6326 22 11.5C22 11.3674 21.9473 11.2402 21.8536 11.1464C21.7598 11.0527 21.6326 11 21.5 11ZM14 10.5C14 10.3674 14.0527 10.2402 14.1464 10.1464C14.2402 10.0527 14.3674 10 14.5 10H17.5C17.6326 10 17.7598 10.0527 17.8536 10.1464C17.9473 10.2402 18 10.3674 18 10.5V11H14V10.5ZM20 21H12V12H20V21ZM15 14.5V18.5C15 18.6326 14.9473 18.7598 14.8536 18.8536C14.7598 18.9473 14.6326 19 14.5 19C14.3674 19 14.2402 18.9473 14.1464 18.8536C14.0527 18.7598 14 18.6326 14 18.5V14.5C14 14.3674 14.0527 14.2402 14.1464 14.1464C14.2402 14.0527 14.3674 14 14.5 14C14.6326 14 14.7598 14.0527 14.8536 14.1464C14.9473 14.2402 15 14.3674 15 14.5ZM18 14.5V18.5C18 18.6326 17.9473 18.7598 17.8536 18.8536C17.7598 18.9473 17.6326 19 17.5 19C17.3674 19 17.2402 18.9473 17.1464 18.8536C17.0527 18.7598 17 18.6326 17 18.5V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5Z" fill="#64748B"/>
                </svg>
        </div>
    </div> `

    // throw to filter section
    filterSection.appendChild(div)
    calculateCount()

    }
    
}