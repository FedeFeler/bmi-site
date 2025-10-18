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
  th.innerHTML = `${120 + i * 10} <br> ${((120 + i * 10) * 0.453).toFixed(1)}`
  thOriginal[0].insertAdjacentElement("beforeend", th);
}

