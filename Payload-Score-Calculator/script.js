const sliders = document.querySelectorAll(".slider");
const values = document.querySelectorAll("span");

sliders.forEach((slider, index) => {
    slider.addEventListener("input", function() {
        let total = 0;
        sliders.forEach((s, i) => {
            total += parseInt(s.value);
            values[i].textContent = s.value; // Update the corresponding value element
        });

        // Update Kaboom Values
        const kaboomValue_01 = sliders[0].value * 10;
        values[3].textContent = kaboomValue_01;
      
        const kaboomValue_02 = sliders[0].value;
        values[4].textContent = kaboomValue_02;
        if (kaboomValue_02 <= 30) {
          values[4].textContent = "5";
        } else if (kaboomValue_02 > 31 && kaboomValue_02 < 60) {
          values[4].textContent = "10";
        } else if (kaboomValue_02 >= 60) {
          values[4].textContent = "15";
        }
      // Update Thrust Values
      const thrustValue_01 = (sliders[1].value * 100);
      const thrustValue_02 = (sliders[1].value * 10) + 200;
      const thrustValue_03 = (sliders[1].value * 5) + 100;
      values[5].textContent = thrustValue_01;
      values[6].textContent = thrustValue_02;
      values[7].textContent = thrustValue_03;
      // Update Smarts Values
      const smartsValue_01 = (sliders[2].value / 30) * 45;
      const smartsValue_02 = (sliders[2].value / 30) * 60;
      const smartsValue_03 = (sliders[2].value / 30) * (60 * 3);
      const smartsValue_04 = (sliders[2].value / 30);
      values[8].textContent = smartsValue_01;
      values[9].textContent = smartsValue_02;
      values[10].textContent = smartsValue_03;
      values[11].textContent = smartsValue_04.toFixed(2);
      
        const currentSlider = this;

        if (total > 100) {
            let remaining = 100 - parseInt(currentSlider.value);
            currentSlider.value -= (total - 100);
            values[index].textContent = currentSlider.value; // Update the current slider's value element
        }
    });
});