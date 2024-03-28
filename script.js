const words = ["Maskan", "House", "Plot", "Shop"];
const wordElement = document.getElementById("word");
let index = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < words[index].length) {
        wordElement.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(eraseText, 2000); // Wait before erasing text
    }
}

function eraseText() {
    if (charIndex >= 0) {
        const text = words[index].substring(0, charIndex);
        wordElement.textContent = text;
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed here (milliseconds)
    } else {
        index = (index + 1) % words.length;
        setTimeout(typeWriter, 1000); // Wait before typing next word
    }
}

typeWriter(); // Start the typewriter effect

document.addEventListener('DOMContentLoaded', function() {
    // Get the filter button and dropdown content
    const filterButton = document.querySelector('.filter-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Add click event listener to toggle the visibility of the dropdown content
    filterButton.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.filter-button')) {
            dropdownContent.style.display = 'none';
        }
    });
});
