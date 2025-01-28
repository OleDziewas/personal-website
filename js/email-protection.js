document.getElementById('email-link').addEventListener('click', function(e) {
    e.preventDefault();
    const user = 'ole.dziewas';
    const domain = 't-online.de';
    window.location.href = `mailto:${user}@${domain}`;
});