document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const updateTextButton = document.getElementById('updateTextButton');
    const text = document.getElementById('text');
    const inputText = document.getElementById('inputText');

    changeTextButton.addEventListener('click', () => {
        text.textContent = 'O texto foi alterado!';
    });

    updateTextButton.addEventListener('click', () => {
        const userInput = inputText.value.trim();
        if (userInput) {
            text.textContent = userInput;
            inputText.value = ''; // Limpa o campo de entrada
        } else {
            alert('Por favor, digite um texto.');
        }
    });
});
