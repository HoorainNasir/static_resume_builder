const skillButton = document.getElementById("skillsButton") as HTMLButtonElement;
const list= document.getElementById('skillsList') as HTMLElement;

let isListAvailable= true;

skillButton.addEventListener('click', () => {
    if (isListAvailable) {
        list.classList.add('hidden');
    } else {
        list.classList.remove('hidden');
    }
    isListAvailable = !isListAvailable;
});
