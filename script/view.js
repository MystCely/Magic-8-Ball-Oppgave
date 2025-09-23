updateView();
function updateView() {
  let html = /* html */ `
    <h1>Magic 8 Ball</h1>
    <div class="center">
      <div class="circle" onclick="showAdvice()"></div>
      <div id="result"></div>
    </div>
    `;
  app.innerHTML = html;
}
