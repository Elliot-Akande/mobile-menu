import './style.css';

const MobileMenu = function mobileMenuFactory(
  items = [
    {
      title: 'Item 1',
      callback: () => {},
    },
    {
      title: 'Item 2',
      callback: () => {},
    },
    {
      title: 'Item 3',
      callback: () => {},
    },
    {
      title: 'Item 4',
      callback: () => {},
    },
  ],
  customClass = '',
) {
  const itemPressed = function setMenuItemActive(event) {
    const item = event.currentTarget;
    const prevItem = document.querySelector('.men__item.--active');

    if (item === prevItem) return;

    if (prevItem !== null) prevItem.classList.toggle('--active');
    item.classList.toggle('--active');
  };

  const createMenuItem = (data) => {
    // Item Container
    const item = document.createElement('div');
    item.classList.add('men__item');
    if (Object.prototype.hasOwnProperty.call(data, 'callback')) {
      item.addEventListener('click', data.callback);
    }

    // Icon
    const icon = document.createElement('div');
    icon.classList.add('men__icon');
    item.appendChild(icon);

    // Title
    const title = document.createElement('div');
    title.classList.add('men__title');
    title.textContent = data.title;
    item.appendChild(title);

    item.addEventListener('click', itemPressed);

    return item;
  };

  const render = function renderMenuComponents() {
    // Container
    const menu = document.createElement('div');
    menu.classList.add('men');

    // Apply custom CSS class if provided
    if (customClass !== '') {
      menu.classList.add(customClass);
    }

    // Menu Items
    items.forEach((item) => menu.appendChild(createMenuItem(item)));

    return menu;
  };

  return render();
};

export default MobileMenu;
