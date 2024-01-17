function toggleInfo(clickedEvent) {
  var events = document.querySelectorAll('.event');
  
  events.forEach(function(event) {
    var info = event.querySelector('.more-info');
    if (event === clickedEvent) {
      info.style.display = info.style.display === 'none' ? 'block' : 'none';
    } else {
      info.style.display = 'none';
    }
  });
}