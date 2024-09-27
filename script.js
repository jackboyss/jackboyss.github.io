document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah mengirim pesan!');
    this.reset();
});
