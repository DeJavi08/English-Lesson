function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5r94z4lRuzn":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('BG_Music');
audio.src="Ukulele Upbeat Pop by Alex-Productions No Copyright Music Happy Carnival.mp3";
audio.load();
audio.loop = true;
audio.volume=1.0;
audio.play();
}

