export default class DropDown {
  constructor(nameOfDropdown) {
    const dropDown = document.querySelector(
      `div.dropdown[data-name="${nameOfDropdown}"]`
    );
    this.dropDownDiv = dropDown;
  }

  static init() {
    const selectedDiv = document.querySelector('.selected-text-menu');
    const optionButtons = document.querySelectorAll('.option');

    const selectValue = (e) => {
      const datasetValue = e.currentTarget.dataset.value;
      const newTextContent = e.currentTarget.textContent;

      selectedDiv.dataset.value = datasetValue;
      selectedDiv.textContent = newTextContent;
    };

    optionButtons.forEach((option) =>
      option.addEventListener('click', selectValue)
    );
  }

  getValues() {
    const dropDown = this.dropDownDiv.querySelector('.selected-text-menu');
    const { textContent, dataset: { value: dataValue } } = dropDown;

    return { textContent, dataValue };
  }
}

DropDown.init();
