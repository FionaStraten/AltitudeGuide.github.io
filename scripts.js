function switchTo(card) {
  var allCards = document.getElementsByClassName("card");
  console.log(allCards);
  console.log(card);
  var ctr=0;
  for(let c of allCards) {
    console.log(c);
    if(c == card) {
      c.style.opacity="1";
      c.style.zIndex="2";
      progressdiv = c.querySelector(".progress");
      if(progressdiv)
        progressdiv.style.width = ctr/allCards.length*100+"%";
    }
    else {
      c.style.opacity="0";
      c.style.zIndex="1";
    }
    ctr++;
  }
}

function showResult() {
  switchTo(document.getElementById("cardResult"));

  var r_list = ["r_h", "r_g", "r_f", "r_d", "r_a", "r_s"];
  var r_cards = ["card1", "card2", "caard3","card4", "card5", "card6 "];

  var sum = 0;
  for(let i=0; i<r_list.length; i++) {
    r_name = r_list[i];
    r_card = r_cards[i];
    radios = document.getElementsByName(r_name);
    var OneIsChecked = false;
    var choice = 0;
    for(radio of radios) {
      if(radio.checked) {
        if(OneIsChecked) {
          console.log("Error: Mehr als ein Punkt gewählt!!")
        }
        choice = parseInt(radio.value);
        OneIsChecked = true;
      }
    }
    if(OneIsChecked==false) {
      switchTo(document.getElementById(r_card));
      alert("Error: Nothing selected for this card!");
      return;
    }
    sum = sum + choice;
  }
  var resDisp = document.getElementById("resultDisplay");
  resDisp.innerHTML = sum;

  var resText = document.getElementById("resultText");
  if(sum < 3) {
    resText.innerHTML = "According to the Lake Louise Score you do not show symptoms of AMS";
  }
  else if (sum < 6) {
    resText.innerHTML = "According to the Lake Louise Score you show symptoms of mild AMS<br/>Do not ascend! <br/>Descend if symptoms are not improving or getting worse! <br/>Descend immediately if you show symptoms of HACE or HAPE!";
  }
  else if (sum < 19) {
    resText.innerHTML = "According to the Lake Louise Score you show symptoms of severe AMS<br/>Do not ascend! <br/>Descend if symptoms are not improving or getting worse! <br/>Descend immediately if you show symptoms of HACE or HAPE!";
  }
}
