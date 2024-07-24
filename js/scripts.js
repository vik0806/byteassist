document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const accountType = document.getElementById('accountType').value;
    if (accountType === 'helper') {
        window.location.href = 'helper.html';
    } else {
        window.location.href = 'normal.html';
    }
});
