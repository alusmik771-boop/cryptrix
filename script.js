function showForm() {
    document.querySelector('.card-body').classList.add('d-none');
    document.getElementById('form-section').classList.remove('d-none');
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const cardExp = document.getElementById('cardExp').value;
    const cardCVC = document.getElementById('cardCVC').value;

    // Zapisz dane do localStorage
    localStorage.setItem('cardData', JSON.stringify({
        cardNumber: cardNumber,
        cardExp: cardExp,
        cardCVC: cardCVC
    }));

    // Wyświetl dane po zarejestrowaniu się
    alert('Dane z karty zapisane:\n' +
          'Numer karty: ' + cardNumber + '\n' +
          'Data ważności: ' + cardExp + '\n' +
          'CVC: ' + cardCVC
    );
});
