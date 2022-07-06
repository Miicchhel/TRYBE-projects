window.onload = function() {
  let select = document.querySelector('select');
  select.addEventListener('change', function() {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem('body_background-color', select.value);
  })

  let inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener('change', function() {
    // console.log(fontSize.value);
    let p = document.querySelector('p')
    let valorP = `${inputFontSize.value}px`
    p.style.fontSize = valorP;

    localStorage.setItem('input_font-size', valorP);
  })

  let inputFontColor = document.querySelector('input[name="text-color"]');
  inputFontColor.addEventListener('change', function() {
    let p = document.querySelector('p');
    let colorP = inputFontColor.value;
    p.style.color = colorP;

    localStorage.setItem('input_text-color', colorP);
  })

  let savedBodyBackgroundColor = localStorage.getItem('body_background-color');
  let savedInputFontSize = localStorage.getItem('input_font-size');
  let savedInputFontColor = localStorage.getItem('input_text-color');
  // console.log(savedBodyBackgroundColor);
  document.body.style.backgroundColor = savedBodyBackgroundColor;
  document.querySelector('p').style.fontSize = savedInputFontSize;
  document.querySelector('p').style.color = savedInputFontColor;

  console.log(savedBodyBackgroundColor);
  console.log(savedInputFontSize);
  console.log(savedInputFontColor);
}