export default function renderMainElemnents() {
  const BODY = document.querySelector('body');
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  let header = document.createElement('div');
  header.innerHTML = '<h1>Виртуальная клавиатура</h1>';
  wrapper.append(header);

  let textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('id', 'vk_text-area');
  textArea.cols = 70;
  textArea.rows = 5;
  wrapper.append(textArea);

  let div = document.createElement('div');
  div.classList.add('keyboard');
  wrapper.append(div);

  let text = document.createElement('p');
  text.innerText = 'Клавиатура выполнена в Windows стиле, переключение между языками осуществляется с помощью клавиш Control + Shift';
  wrapper.append(text);

  BODY.append(wrapper);
}
