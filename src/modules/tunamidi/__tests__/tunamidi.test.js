require('../index');

test('adds tunamidi div to given div', () => {
	document.body.innerHTML= '<div id="midi"></div>';
  expect($('#midi').tunamidi()).toContainHtml('<div class="tunamidi"></div>')	
});
