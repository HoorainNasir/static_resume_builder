var skillButton = document.getElementById("skillsButton");
var list = document.getElementById('skillsList');
var isListAvailable = true;
skillButton.addEventListener('click', function () {
    if (isListAvailable) {
        list.classList.add('hidden');
    }
    else {
        list.classList.remove('hidden');
    }
    isListAvailable = !isListAvailable;
});
