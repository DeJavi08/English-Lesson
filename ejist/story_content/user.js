function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hc9ynhOA0k":
        Script1();
        break;
      case "6eoAInED0cx":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('BG_Music');
audio.src="Kid's Game — Children's Music (Instrumental Music For Kids).mp3";
audio.load();
audio.play();
audio.volume=0.3;

}

function Script2()
{
  window.print();
}

