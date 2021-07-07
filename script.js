function createDigit(id) {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.setAttribute('class', 'digit');

  const top = document.createElement('div');
  const topLeft = document.createElement('div');
  const topRight = document.createElement('div');
  const middle = document.createElement('div');
  const bottomLeft = document.createElement('div');
  const bottomRight = document.createElement('div');
  const bottom = document.createElement('div');

  top.setAttribute('class', 'top');
  topLeft.setAttribute('class', 'top-left');
  topRight.setAttribute('class', 'top-right');
  middle.setAttribute('class', 'middle');
  bottomLeft.setAttribute('class', 'bottom-left');
  bottomRight.setAttribute('class', 'bottom-right');
  bottom.setAttribute('class', 'bottom');

  element.appendChild(top);
  element.appendChild(topLeft);
  element.appendChild(topRight);
  element.appendChild(middle);
  element.appendChild(bottomLeft);
  element.appendChild(bottomRight);
  element.appendChild(bottom);

  return element;
}

function addDigitsToDOM() {
  const hourFirstDigit = createDigit('hourFirstDigit');
  const hourSecondDigit = createDigit('hourSecondDigit');
  const minuteFirstDigit = createDigit('minuteFirstDigit');
  const minuteSecondDigit = createDigit('minuteSecondDigit');

  const divider = document.createElement('div');
  divider.setAttribute('class', 'divider');
  const clockWrapper = document.getElementById('clockWrapper');

  clockWrapper.appendChild(hourFirstDigit);
  clockWrapper.appendChild(hourSecondDigit);
  clockWrapper.appendChild(divider)
  clockWrapper.appendChild(minuteFirstDigit);
  clockWrapper.appendChild(minuteSecondDigit);
}

function paintDigit(elementName, number) {
  const el =  document.getElementById(elementName);
  switch(number) {
    case 1: {
      el.childNodes[0].setAttribute('class', 'top number-off');
      el.childNodes[1].setAttribute('class', 'top-left number-off');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-off');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-off');
      break;
    }
    case 2: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-off');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-on');
      el.childNodes[5].setAttribute('class', 'bottom-right number-off');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
    case 3: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-off');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
    case 4: {
      el.childNodes[0].setAttribute('class', 'top number-off');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-off');
      break;
    }
    case 5: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-off');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
    case 6: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-off');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-on');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
    case 7: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-off');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-off');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-off');
      break;
    }
    case 8: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-on');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
    case 9: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-on');
      el.childNodes[4].setAttribute('class', 'bottom-left number-off');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-off');
      break;
    }
    default: {
      el.childNodes[0].setAttribute('class', 'top number-on');
      el.childNodes[1].setAttribute('class', 'top-left number-on');
      el.childNodes[2].setAttribute('class', 'top-right number-on');
      el.childNodes[3].setAttribute('class', 'middle number-off');
      el.childNodes[4].setAttribute('class', 'bottom-left number-on');
      el.childNodes[5].setAttribute('class', 'bottom-right number-on');
      el.childNodes[6].setAttribute('class', 'bottom number-on');
      break;
    }
  }  
}

function clockTicking() {
  let seconds = 0;
  let minutes = 0;

  setInterval(() => {
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    const secondsFirstDigit = parseInt(
      seconds.toString().split('')[1] || seconds.toString().split('')[0]
    );

    const secondsSecondDigit = seconds.toString().split('').length === 1 ?
      0 :
      parseInt(seconds.toString().split('')[0])

    const minutesFirstDigit = parseInt(
      minutes.toString().split('')[1] || minutes.toString().split('')[0]
    );

    const minutesSecondDigit = minutes.toString().split('').length === 1 ?
      0 :
      parseInt(minutes.toString().split('')[0])

    paintDigit('minuteSecondDigit', secondsFirstDigit);
    paintDigit('minuteFirstDigit', secondsSecondDigit);
    paintDigit('hourFirstDigit', minutesSecondDigit);
    paintDigit('hourSecondDigit', minutesFirstDigit);
    
    seconds++;
  }, 1000)
}

addDigitsToDOM();
clockTicking();
