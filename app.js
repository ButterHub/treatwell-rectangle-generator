// Form Input
numberRect = document.getElementById('numberRect');
heightRect = document.getElementById('heightRect');
widthRect = document.getElementById('widthRect');
colorRect = document.getElementById('colorRect');

// Create Rectangles Click Listener
createRectBtn = document.getElementById('createRect-btn');
createRectBtn.addEventListener('click', createRectangle);

// Output for new rectangles
outputRectDiv = document.querySelector('.rectangles');

function createRectangle(e) {
	// console.log(numberRect.value, heightRect.value, widthRect.value);
	let i = 0;
	let outputRect = '';
	if (numberRect.value == 1) {
		outputRect += `<h2>Here's your single rectangle.</h2>`;
	} else if (parseInt(numberRect.value) > 50) {
		outputRect += `<h2>Woahhh, ${numberRect.value} rectangles!??!</h2>`;
	} else {
		outputRect += `<h2>Your ${numberRect.value} rectangles have been generated.</h2>`;
	}
	for (i = 0; i < numberRect.value; i++) {
		outputRect += `<div style="margin: 10px; background-color: ${colorRect.value}; width: ${widthRect.value}px; height: ${heightRect.value}px; display: inline-block"></div>`;
	}
	outputRectDiv.innerHTML = `
  ${outputRect}
  `;
	e.preventDefault();
}
