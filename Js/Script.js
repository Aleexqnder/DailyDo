const text1 = 'Organize your day';
const text2 = 'Achieve your goals';
const text3 = 'And maximize your productivity';

let title = document.getElementById('text-title');
let finalIndex = 0;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeTitleText(textToApply) {
    finalIndex = 0;
    while (finalIndex <= textToApply.length) {
        title.innerText = textToApply.substring(0, finalIndex);
        finalIndex++;
        await delay(50);
    }
    await delay(60);
}

async function deleteText(textToApply) {
    while (finalIndex >= 0) {
        title.innerText = textToApply.substring(0, finalIndex);
        finalIndex--;
        await delay(50);
    }
}

async function startSequence() {
    await delay(1000);
    await changeTitleText(text1);
    await deleteText(text1);

    await changeTitleText(text2);
    await deleteText(text2);

    await changeTitleText(text3);
    await deleteText(text3);

    startSequence();
}

startSequence();
