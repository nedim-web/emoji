const button = document.querySelector('input');
const output = document.querySelector('.show-emoji');

const htmlTemp = `
    <img src="emoji.png" alt="">
`;
button.addEventListener('click', () => {
    console.log('op');
    output.innerHTML += htmlTemp;
});
