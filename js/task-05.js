const input = document.querySelector('#name-input');

function onInput(evt){
    const query = evt.currentTarget.value;
    if(!query){
        console.log('Hello, Anonymous!');
    }
}