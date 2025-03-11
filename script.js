function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultContainer = document.getElementById('result');

    if (!birthdateInput) {
        resultContainer.innerHTML = 'Please select a birth date!';
        resultContainer.classList.add('show');
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    // Calculate age
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust if birthday hasn't occurred this year
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
        if (ageDays < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
            ageDays = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
            ageMonths--;
        }
    }

    // Calculate total days
    const timeDiff = today - birthDate;
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Display result
    resultContainer.innerHTML = `
        You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.<br>
        That's a total of ${totalDays} days!
    `;
    resultContainer.classList.add('show');
}

// Add enter key support
document.getElementById('birthdate').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateAge();
    }
});
