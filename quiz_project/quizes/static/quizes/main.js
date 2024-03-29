const modalBtns = [...document.getElementsByClassName('modal-button')];
const modalBody = document.getElementById('modal-body-confirm');
const startBtn = document.getElementById('start-button')

url = window.location.href

modalBtns.forEach(modalBtn=> modalBtn.addEventListener('click' , ()=>{
    const pk = modalBtn.getAttribute('data-pk');
    const name = modalBtn.getAttribute('data-quiz');
    const numQuestions = modalBtn.getAttribute('data-questions');
    const difficulty = modalBtn.getAttribute('data-difficulty');
    const scoreToPass = modalBtn.getAttribute('data-pass');
    const time = modalBtn.getAttribute('data-time');
    modalBody.innerHTML = `
    <div style="font-family: Aclonica;" class="h5 m-3">Are you sure you want to begin "<b>${name}</b>"?</div>
        <div class="text-muted">
        <ul style="font-family: Aclonica;">
            <li>Difficulty: <b>${difficulty}</b></li> 
            <li>Number of Questions: <b>${numQuestions}</b></li> 
            <li>Score to Pass: <b>${scoreToPass}%</b></li> 
            <li>Time: <b>${time} min</b></li>
        </ul>
    </div>'
    `
    startBtn.addEventListener('click', ()=>{
        window.location.href = url + pk
    })
}))