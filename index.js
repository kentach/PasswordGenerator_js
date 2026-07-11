{
  const passwordLength = document.getElementById("password-length");
  const slider = document.getElementById("slider");

  slider.addEventListener('input', () => {
    passwordLength.textContent = slider.value; // sliderのvalue属性を指定
  })

}