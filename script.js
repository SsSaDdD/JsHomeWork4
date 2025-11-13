document.addEventListener('DOMContentLoaded', () => {
    const randBtn = document.getElementById('randBtn');
    const randOutput = document.getElementById('randOutput');

    randBtn.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 101);

        randOutput.textContent = randomNumber;
    });

    const mouseBox = document.getElementById('mouseBox');
    const mouseOutput = document.getElementById('mouseOutput');

    mouseBox.addEventListener('mousemove', (event) => {
        mouseOutput.textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
    });

    mouseBox.addEventListener('mousedown', (event) => {
        let buttonPressed = '';

        switch (event.button) {
            case 0:
                buttonPressed = 'Ліва';
                break;
            case 1:
                buttonPressed = 'Середня (коліщатко)';
                break;
            case 2:
                buttonPressed = 'Права';
                break;
            default:
                buttonPressed = 'Невідома';
        }

        mouseOutput.textContent = `Натиснуто: ${buttonPressed} кнопка`;
    });

    mouseBox.addEventListener('mouseleave', () => {
        mouseOutput.textContent = 'Наведіть мишу на блок';
    });

    const toggleBtn = document.getElementById('toggleBtn');
    const toggleText = document.getElementById('toggleText');

    toggleBtn.addEventListener('click', () => {
        toggleText.classList.toggle('hidden');
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');

            const targetPanelId = button.getAttribute('data-target');
            const targetPanel = document.querySelector(targetPanelId);
            targetPanel.classList.add('active');
        });
    });
});