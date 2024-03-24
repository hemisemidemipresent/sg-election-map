let box = document.getElementById("box");

for (let i = 0; i < results.length; i++) {
  const result = results[i];
  const name = result.name;
  const element = document.getElementById(name);
  const sortedVotes = result.votes.sort((a, b) => {
    return b.percent - a.percent;
  });
  const winner = sortedVotes[0].name;

  let color = colors[winner][3]; // walkover

  if (sortedVotes.length > 1) {
    const diff = sortedVotes[0].percent - sortedVotes[1].percent;
    // 0 - lean (under 10)
    // 1 - likely (10 - 20)
    // 2 - safe (above 20)
    let margin = 0;
    if (diff > 10) margin = 1;
    if (diff > 20) margin = 2;
    color = colors[winner][margin];
  }

  element.style.fill = color;
  if (!!needStroke) {
    // element.style.stroke = color;
    // element.style.strokeWidth = strokeWidth;
  }

  element.onmouseenter = function () {
    mouseEnter(result);
  };
  element.onmouseleave = function () {
    mouseLeave();
  };
}

const onMouseMove = (e) => {
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
};
document
  .getElementById("singapore-whole")
  .addEventListener("mousemove", onMouseMove);

function mouseEnter(result) {
  box.style.display = "block";

  const constituent = document.getElementById("constituent");
  const seats = document.getElementById("seats");
  const data = document.getElementById("data");
  const voteshare = document.getElementById("voteshare");

  constituent.innerText = result.name;

  const sortedVotes = result.votes.sort((a, b) => {
    a.percent - b.percent;
  });
  const winner = sortedVotes[0].name;
  if (sortedVotes.length > 1) {
    const diff = sortedVotes[0].percent - sortedVotes[1].percent;
    data.innerText = `${winner} +${Math.abs(diff).toFixed(1)}`;
  } else data.innerText = `${winner} walkover`;

  data.style.color = colors[winner][1];

  if (result.seats == 1) {
    seats.innerText = result.seats + " seat";
  } else {
    seats.innerText = result.seats + " seats";
  }

  let html = "";
  for (let i = 0; i < sortedVotes.length; i++) {
    let info = sortedVotes[i];
    let party = info.name;
    html += `<div class='voteshare' style="background-color:${
      colors[party][0]
    }"><div class="votesharebar" style="background-color:${
      colors[party][1]
    }; width:${info.percent / 10}rem"><p class="votesharepercent">${
      info.percent
    }%</p></div></div>`;
  }

  voteshare.innerHTML = html;
}
function mouseLeave() {
  box.style.display = "none";
}
