export default function renderMainElemnents() {
  const BODY = document.querySelector('body');
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  let textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('id', 'vk_text-area');
  textArea.cols = 80;
  textArea.rows = 10;
  wrapper.append(textArea);
  let div = document.createElement('div');
  div.classList.add('keyboard');
  wrapper.append(div);
  BODY.append(wrapper);
  return undefined;
}
