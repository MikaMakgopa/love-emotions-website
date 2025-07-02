document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('followUp').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert("That's okay!");
});

document.getElementById('yesBtn2').addEventListener('click', function() {
    displayMessage("Ncoow Ngwana Lilian, Ke O Swaretse Suprise...");
});

document.getElementById('noBtn2').addEventListener('click', function() {
    alert("That's okay!");
});

function displayMessage(message) {
    const finalMessageDiv = document.getElementById('finalMessage');
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    finalMessageDiv.classList.remove('hidden');
    
    setTimeout(() => {
        messageElement.textContent = "YOU WILL SEE WHEN I AM THERE";
        finalMessageDiv.style.opacity = 0;
    }, 3000);
    
    setTimeout(() => {
        finalMessageDiv.style.opacity = 1;
    }, 5000);
}