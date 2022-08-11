import AutoKana from '../src/autokana';

test('init', () => {
  document.body.innerHTML = `
    <input name="name" id="name" value="">
    <input name="furigana" id="furigana" value="">
  `;
  const autokana = new AutoKana('#name');
  expect(typeof autokana).toBe('object');
});

test('keydown event', () => {
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

  const keyEvents = keyItems.map(item => item = new KeyboardEvent('keydown', item));

  keyEvents.forEach(e => {
    autokana.setKeydownEvent(e)
  });

  target.value = '山田太郎';

  expect(autokana.getKanaValue()).toBe('ヤマダタロウ');
});

test('input event', () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'navigator', {
    value: {
      userAgent: 'iPhone'
    }
  });

  document.body.innerHTML = `
    <input name="name" id="name" value="">
    <input name="furigana" id="furigana" value="">
  `;
  const autokana = new AutoKana('#name');
  const target = document.getElementById('name');

  const inputItems = [
    { inputType: 'insertCompositionText', data: 'や' },
    { inputType: 'insertCompositionText', data: 'ま' },
    { inputType: 'insertCompositionText', data: 'た' },
    { inputType: 'insertCompositionText', data: 'だ' },
    { inputType: 'insertCompositionText', data: 'た' },
    { inputType: 'insertCompositionText', data: 'ろ' },
    { inputType: 'insertCompositionText', data: 'う' }
  ];

  const inputEvents = inputItems.map(item => item = new InputEvent('input', item));

  inputEvents.forEach(e => {
    autokana.setInputEvent(e)
  });

  console.log(autokana.inputNode);

  target.value = '山田太郎';

  expect(autokana.getKanaValue()).toBe('ヤマダタロウ');
});