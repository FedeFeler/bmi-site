const heights = document.getElementsByClassName("heights");

for (let i = 0; i <= 19; i++ ) {
  const tr = document.createElement("tr");
  tr.classList.add("height-tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  th2.classList.add("height");
  
  if (i < 6) {
    th1.textContent = `6'${5 - i}"`;
    th2.textContent = `${(((6*12+(5-i))*2.54)).toFixed(1)}`;
  } else if (i >= 6 && i < 18) {
    th1.textContent = `5'${17-i}"`;
    th2.textContent = `${(((5*12+(17-i))*2.54)).toFixed(1)}`;
  } else {
    th1.textContent = `4'${(29-i)}"`;
    th2.textContent = `${(((4*12+(29-i))*2.54)).toFixed(1)}`;
  }
  
  tr.appendChild(th1);
  tr.appendChild(th2);
  heights[0].insertAdjacentElement("afterend", tr);
}

for (let i = 0; i <= 21; i++) {
  const thOriginal = document.getElementsByClassName("heights");
  const th = document.createElement("th");
  th.classList.add("weight");
  th.innerHTML = `${120 + i * 10} <br> <span class="weights-in-kg">${((120 + i * 10) * 0.453).toFixed(1)}</span>`;
  thOriginal[0].insertAdjacentElement("beforeend", th);
}

const heightTr = document.getElementsByClassName("height-tr");
const weightKg = document.getElementsByClassName("weights-in-kg");
const heightInCm = document.getElementsByClassName("height"); 
const weight = document.getElementsByClassName("weight");
const weightArr = Array.from(weightKg);
const heightArr = Array.from(heightInCm);

const empty = document.createElement("td");
empty.classList.add("empty");
empty.textContent = "";
empty.rowSpan = 22;
heightTr[0].appendChild(empty);

weightArr.forEach((w) => {for (let i = 0; i < heightTr.length; i++) {
  const td = document.createElement("td");
  td.classList.add("bmi");
  td.textContent = `${(Number(w.textContent) / ((Number(heightInCm[i].textContent) / 100) ** 2)).toFixed(1)}`;
  heightTr[i].appendChild(td);
}
  });

const bmi = document.getElementsByClassName("bmi");
const bmiArr = Array.from(bmi);

bmiArr.forEach(item => {
  if (Number(item.textContent) < 18.5) {
    item.style.backgroundColor = "rgb(38, 255, 242)";
  }
  else if (Number(item.textContent) >= 18.5 && Number(item.textContent) < 25) {
    item.style.backgroundColor = "rgba(65, 247, 86, 1)";
  } else if (Number(item.textContent) >= 25 && Number(item.textContent < 30)) {
    item.style.backgroundColor = "rgb(244, 255, 38)";
  } else if (Number(item.textContent) >= 30 && Number(item.textContent < 40)) {
    item.style.backgroundColor = "rgb(255, 143, 11)";
  } else {
    item.style.backgroundColor = "rgb(255, 11, 11)";
  }
})