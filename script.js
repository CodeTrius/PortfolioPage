    const typingElement = document.getElementById('typing');
    const words = ["Desenvolvedor Web.","Frontend","Backend", "Engenheiro de Automação.","Projetista de Automação", "Análise de Dados"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
    const currentWord = words[wordIndex];
    const currentText = isDeleting
    ? currentWord.substring(0, charIndex - 1)
    : currentWord.substring(0, charIndex + 1);

    typingElement.textContent = currentText;
    typingElement.style.width = typingElement.offsetWidth + '100 px'; // Fix width for stability

    if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
} else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 100);
} else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
    wordIndex = (wordIndex + 1) % words.length;
}
    setTimeout(type, isDeleting ? 1500 : 500);
}
}

    document.addEventListener('DOMContentLoaded', type);