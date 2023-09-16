# @akande/mobile-menu

`@akande/mobile-menu` is a flexible and lightweight JavaScript solution for creating mobile menus in web apps. It provides easy integration and styling options, allowing you to customize menus with your own data, including optional icons, and callbacks for a seamless user experience.

## Features

- **Customizable Menu Items:** Tailor your mobile menu with custom titles and optional icons to suit your application's needs.
- **Optional Callbacks:** Supports optional callback functions for menu item selection, allowing you to add interactivity and functionality.
- **Minimal Styling:** Comes with minimal default styling, providing a clean canvas for you to style the menu according to your project's design.
- **Lightweight:** A lightweight solution that won't bloat your application, ensuring optimal performance.
- **Highly Configurable:** Offers configuration options for custom CSS classes, enabling you to match the menu's appearance to your application's branding.
- **Open Source:** Licensed under the MIT License, giving you the freedom to use and modify it in your projects.

## Installation

You can install the `@akande/mobile-menu` package via npm or yarn:

```bash
npm install @akande/mobile-menu
# OR
yarn add @akande/mobile-menu
```

## Usage

Here's an example of how you can use the `@akande/mobile-menu` component in your JavaScript/TypeScript code:

```javascript
import MobileMenu from '@akande/mobile-menu';

// Create an instance of the MobileMenu component
const menu = MobileMenu(
  [
    {
      title: 'Item 1',
      icon: mySvg, // Optional icon svg element
      callback: () => {
        // Callback for Item 1
      },
    },
    // Add more menu items as needed
  ],
  'custom-class', // Optionally, you can provide a custom CSS class
);

// Append the menu to a DOM element
document.querySelector('#menu-container').appendChild(menu);
```

## API Reference

### `MobileMenu(menuItems, customClass)`

Creates an instance of the MobileMenu component.

- `menuItems` (Array of Objects): An array of menu item objects. Each object should have the following properties:
  - `title` (String): The text to display for the menu item.
  - `icon` (SVG Element, optional): An optional icon to display alongside the menu item.
  - `callback` (Function, optional): An optional callback function to execute when the menu item is clicked.
- `customClass` (String, optional): An optional custom CSS class to apply to the menu container.

**Returns:** A DOM element representing the mobile menu.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Elliot-Akande/mobile-menu/blob/main/LICENSE) file for details.

## Issues

If you encounter any issues or have questions about this package, please [open an issue](https://github.com/Elliot-Akande/mobile-menu/issues) on GitHub.

## Author

- Elliot Akande
- Email: [elbo.lynch@gmail.com](elbo.lynch@gmail.com)
- GitHub: [Elliot Akande](https://github.com/Elliot-Akande)

## Keywords

- mobile
- menu
- web
- javascript
