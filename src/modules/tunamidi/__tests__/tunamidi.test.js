require('../tunamidi');


test('adds tunamidi div to given div', () => {
	document.body.innerHTML= '<div id="midi"></div>';
  var tunamidi =  $('#midi').tunamidi();
  expect(tunamidi.children().length).toEqual(1)	
  expect(tunamidi.children().first().attr('class')).toEqual('tunamidi')	
});
