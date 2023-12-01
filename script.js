
 function countdown() {
    function updateCountdown(number) {
      document.getElementById('countdown').innerText = number;
    }}
(() => {
  const startCountdown = (count, callback) => {
    setTimeout(() => {
      console.log(count);
      if (count > 1) {
        startCountdown(count - 1, callback);
      } else {
        callback();
      }
    }, 1000);
  };

  startCountdown(10, () => {
     document.getElementById('countdown').innerText = "Happy Independence day";
    console.log("Happy Independence Day!");
  });
})();


