document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    alert("Dane zostały zapisane:\n\nImię: " + name + "\nE-mail: " + email + "\nNumer karty: " + cardNumber + "\nData wygaśnięcia: " + expiry + "\nCVV: " + cvv);
});