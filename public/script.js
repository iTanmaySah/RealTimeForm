// Page 1
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const textboxes = document.querySelectorAll('input[type="text"]');

function updatePage2() {
  const data = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      data.push({
        textboxNumber: index + 1,
        textboxValue: textboxes[index].value,
      });
    }
  });

  localStorage.setItem('page2Data', JSON.stringify(data));
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updatePage2);
});

textboxes.forEach((textbox) => {
  textbox.addEventListener('input', updatePage2);
});

// Page 2
const list = document.getElementById('list');

function displayData() {
  list.innerHTML = '';

  const storedData = localStorage.getItem('page2Data');

  if (storedData) {
    const data = JSON.parse(storedData);

    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Textbox ${item.textboxNumber}: ${item.textboxValue}`;
      list.appendChild(listItem);
    });
  }
}

displayData();

window.addEventListener('storage', displayData);