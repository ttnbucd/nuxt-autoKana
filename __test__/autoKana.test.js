import AutoKana from '../src/autokana';

test('init', () => {
  document.body.innerHTML = `
    <input name="name" id="name" value="">
    <input name="furigana" id="furigana" value="">
  `;
  const autokana = new AutoKana('#name');
  expect(typeof autokana).toBe('object');
});

test('input', () => {
  document.body.innerHTML = `
    <input name="name" id="name" value="">
    <input name="furigana" id="furigana" value="">
  `;
  const autokana = new AutoKana('#name');
  const target = document.getElementById('name');

  const keyItems = [
    { keyCode: 229, key: 'y', code: 'KeyY' },
    { keyCode: 229, key: 'a', code: 'KeyA' },
    { keyCode: 229, key: 'm', code: 'KeyM' },
    { keyCode: 229, key: 'a', code: 'KeyA' },
    { keyCode: 229, key: 'd', code: 'KeyD' },
    { keyCode: 229, key: 'a', code: 'KeyA' },
    { keyCode: 229, key: 't', code: 'KeyT' },
    { keyCode: 229, key: 'a', code: 'KeyA' },
    { keyCode: 229, key: 'r', code: 'KeyR' },
    { keyCode: 229, key: 'o', code: 'KeyO' },
    { keyCode: 229, key: 'u', code: 'KeyU' }
  ];

  const keyEvents = keyItems.map(keyItem => keyItem = new KeyboardEvent('keydown', keyItem));

  keyEvents.forEach(keyEvent => {
    autokana.setKeyDownEvent(keyEvent)
  });

  target.value = '山田太郎';

  expect(autokana.getKanaValue()).toBe('ヤマダタロウ');
});