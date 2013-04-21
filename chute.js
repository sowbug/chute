if (Math.random() < 0.01) {
  var timeout = Math.random() * 30000 + 30000;

  setTimeout(function() {
    var div = document.createElement('div');
    div.id = "chute42-container";
    document.body.appendChild(div);
    div.style.marginLeft = ((window.innerWidth - 560) / 2) + "px";
    div.style.marginTop = ((window.innerHeight - 315) / 2) + "px";

    var iframe = document.createElement('iframe');
    iframe.id = 'chute42-iframe';
    iframe.width = 560;
    iframe.height = 315;
    iframe.src = "http://www.youtube.com/embed/D7TB8b2t3QE?autoplay=1";
    div.appendChild(iframe);

    div.addEventListener('click', function(e) {
      console.log("Ending demo.");
      div.parentNode.removeChild(div);
    });

  }, timeout);
  console.log("Do you want to see a demo of Google Glass? Get ready in " +
   Math.ceil(timeout / 1000) + " seconds!");
}
