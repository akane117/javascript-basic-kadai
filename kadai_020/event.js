const textElement = document.getElementById('text');
const btn =document.getElementById('btn');

btn.addEventListener ('click', () => {
    textElement.textContent = 'ボタンをクリックしました';
});
