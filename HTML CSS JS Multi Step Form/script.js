const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
let formStepsNum = 0;

function updateFormSteps() {
  formSteps.forEach((formSteps) => {
    formSteps.classList.contains('form-step-active') &&
      formSteps.classList.remove('form-step-active');
  });
  formSteps[formStepsNum].classList.add('form-step-active');
}
function updateProgressSteps() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add('progress-step-active');
    } else {
      progressStep.classList.remove('progress-step-active');
    }
  });
}
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressSteps();
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressSteps();
  });
});
