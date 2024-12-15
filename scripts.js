//fce na obrazky
function imgSlider(anything){
    document.querySelector('.starBucks').src = anything
}


//fce na snih
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.initial-snow');
    const toggleButton = document.querySelector('.toggle-snow-button');

    let snowEnabled = true;

    toggleButton.addEventListener('click', () => {
        if (snowEnabled) {
            snowContainer.style.display = 'none';
            toggleButton.textContent = 'Zapnout sníh';
        } else {
            snowContainer.style.display = 'block';
            toggleButton.textContent = 'Vypnout sníh';
        }
        snowEnabled = !snowEnabled;
    });
});

