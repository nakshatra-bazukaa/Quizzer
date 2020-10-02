const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    // The default action is to refresh the page and we dont want that
    e.preventDefault();

    // check answers
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    })

    // Show result
    scrollTo(0, 0);
    const scorePercentage = (score/correctAnswers.length)*100;
    
    result.classList.remove('d-none');

    let outputPercentage = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${outputPercentage}%`;
        if(outputPercentage === scorePercentage)
            clearInterval(timer);
        else
            outputPercentage++;
    }, 10);
})
