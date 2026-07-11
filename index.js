{

  function showPassword () {
    const slider = document.getElementById("slider");
    const passwordBtn = document.getElementById('password-button');
    const checkedNumbers = document.getElementById('checked-number');
    const passwordResult = document.getElementById('password-result');
    const checkedSymbol = document.getElementById('checked-symbol');

    
    const letters = 'abcdefghijklmnopqrstuvwxyz'; //　小文字
    const capitalLetters = letters.toUpperCase(); //　大文字
    const numbers = '0123456789'; //　数字
    const symbols = '!#$%&()';
    let seeds = letters + capitalLetters; //　再代入しているのでletにすること

    if (checkedNumbers.checked) {  //　数字がcheckedの場合
      seeds += numbers;
    }

    if (checkedSymbol.checked) {  //　記号がcheckedの場合
      seeds += symbols;
    }

    let password = '';
    
    for(let i = 0; i < slider.value; i++) {
      password += seeds[Math.floor(Math.random() * seeds.length)]
    }
    passwordResult.textContent = password;


    slider.addEventListener('input', () => {
      const passwordLength = document.getElementById("password-length");
      passwordLength.textContent = slider.value; // sliderのvalue属性を指定
    })
  
    passwordBtn.addEventListener('click', () => {
      showPassword ()
    })
  }

  showPassword ()

}