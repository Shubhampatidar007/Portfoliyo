function toggleTheme() {
  const themeIcon = document.getElementById("themeIcon");
  const navbar = document.querySelector("nav");
  const allElements = document.querySelectorAll("a, h3, i");
  const navigationUl = document.getElementById('navigationUl');

  themeIcon.addEventListener("click", () => {
    const isSun = themeIcon.classList.contains('fa-sun');

    document.body.classList.toggle('body-light', !isSun);
    document.body.classList.toggle('body-dark', isSun);

    themeIcon.classList.toggle('fa-sun', !isSun);
    themeIcon.classList.toggle('fa-moon', isSun);

    navbar.style.background = isSun ? "black" : "white";
    navigationUl.style.backgroundColor = isSun ? "black" : "white";

    allElements.forEach(elm => {
      elm.style.color = isSun ? "white" : "black";
    });
  });
}

toggleTheme();

function toggleNavigationBar() {
  const navigationUl = document.getElementById("navigationUl");
  const mainPadding = document.getElementById('main');
  const bar = document.getElementById("bar");

  navigationUl.style.top = "-550px";

  bar.addEventListener("click", () => {
    if (navigationUl.style.top === "-550px") {
      navigationUl.style.top = "50px";
      mainPadding.style.paddingTop = "200px";
    } else {
      mainPadding.style.paddingTop = "0px";
      navigationUl.style.top = "-550px";
    }
  });
}

toggleNavigationBar();

async function showName() {
  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let shower = document.getElementById("shower");
  let value = ["I", "'", "m" + "  " + "S", "h", "u", "b", "h", "a", "m" + "  " + "P", "a", "t", "i", "d", "a", "r"];
  let value1 = ["I", "'", "m" + " " + "A" + " "+ "F", "r", "o", "e", "n", "t", "e", "n", "d" + " " + "D", "e", "v", "e", "l", "o", "p", "e", "r"];
  for (let i = 0; i < value.length; i++) {
    shower.innerText += value[i];
    await sleep(120);
  }

  shower.innerText = "";
  await sleep(1000);
  await sleep(220);

  for (let j = 0; j < value1.length; j++) {
    shower.innerText += value1[j];
    await sleep(120);
  }
}

showName();

//skill show section starts here

async function group(number, color) {
  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  let range = document.getElementsByClassName("Outer-circle")[0];
  let count = 1;
  let percantages = document.getElementsByClassName("percantages")[0]
  setTimeout( async() => {
    while (count < number) {
      range.style.background = `conic-gradient(	 ${color} ${count}deg, rgb(255, 255, 255) 0deg)`;
      await sleep(1);
      count += 1;
      percantages.innerText = Math.floor(count / 360 * 100) + "%"
    }
   }, 1000);
}


async function communication(number, color) {
  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  let range = document.getElementsByClassName("Outer-circle")[1];
  let count = 1;
  let percantages = document.getElementsByClassName("percantages")[1]
  setTimeout( async() => {
    while (count < number) {
      range.style.background = `conic-gradient(	 ${color} ${count}deg, rgb(255, 255, 255) 0deg)`;
      await sleep(1);
      count += 1;
      percantages.innerText = Math.floor(count / 360 * 100) + "%"
    }
   }, 1000);
}


async function exprerience(number, color) {
  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  let range = document.getElementsByClassName("Outer-circle")[2];
  let count = 1;
  let percantages = document.getElementsByClassName("percantages")[2]
 setTimeout( async() => {
  while (count < number) {
    range.style.background = `conic-gradient(	 ${color} ${count}deg, rgb(255, 255, 255) 0deg)`;
    await sleep(1);
    count += 1;
    percantages.innerText = Math.floor(count / 360 * 100) + "%"
  }
 }, 1000);
}
exprerience(100, 'rgb(253, 0, 173)')
group(200, 'rgb(253, 0, 173) ')
communication(270, 'rgb(255, 0, 173)')








// https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg