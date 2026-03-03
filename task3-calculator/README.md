# Simple Calculator - Codesoft Level 1 Task 3

A fully functional calculator application built with HTML5, CSS3, and vanilla JavaScript with calculation history and keyboard support.

## 🎯 Project Overview

This is a web-based calculator designed to:
- Perform basic arithmetic operations
- Track calculation history
- Support keyboard input
- Provide intuitive user interface
- Demonstrate JavaScript DOM manipulation
- Showcase professional UI/UX design

## ✨ Key Features

- **Basic Operations**: Addition, subtraction, multiplication, division, modulo
- **Decimal Support**: Full floating-point number support
- **Delete Function**: Remove last digit one at a time
- **Clear Function**: Reset calculator to initial state
- **Calculation History**: Stores last 10 calculations with timestamps
- **Keyboard Support**: Full keyboard operation (numbers, operators, Enter, Backspace, Escape)
- **Error Handling**: Division by zero protection with error messages
- **Modern UI**: Gradient backgrounds, smooth animations, color-coded buttons
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Persistent Storage**: History saved in browser localStorage
- **Professional Design**: Clean interface with hover effects and smooth transitions
- **Accessible**: Tab navigation, clear button labels, focus states

## 🚀 Quick Start

1. **Open the calculator**:
   - Simply open `index.html` in your web browser
   - Start calculating immediately

2. **Basic Usage**:
   - Click number buttons to enter digits
   - Click operator buttons for +, -, ×, ÷, %
   - Click "Equals" or press Enter to see result
   - Use "Delete" to remove last digit
   - Use "Clear" or press Escape to reset

## 📁 File Structure

```
calculator/
├── index.html          # HTML structure with calculator layout
├── style.css           # Complete styling and responsive design
├── script.js           # Calculator logic and functionality
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with form structure
- **CSS3**: Grid layout, gradients, animations, responsive design
- **JavaScript**: 
  - ES6 Classes for calculator logic
  - Event listeners for button clicks
  - Keyboard event handling
  - localStorage API for history persistence
  - DOM manipulation

## 📝 Features Explained

### 1. Calculator Class
The `Calculator` class encapsulates all calculation logic:
```javascript
class Calculator {
    constructor(previousElement, currentElement) { ... }
    clear() { ... }           // Reset calculator
    delete() { ... }          // Remove last digit
    appendNumber(num) { ... } // Add digit
    chooseOperation(op) { ... } // Select operator
    compute() { ... }         // Perform calculation
}
```

### 2. Operations Supported
- **Addition**: `+`
- **Subtraction**: `-`
- **Multiplication**: `×`
- **Division**: `÷` (with zero-division protection)
- **Modulo**: `%` (remainder)
- **Decimal**: `.`

### 3. History Management
- Automatically saves calculations to localStorage
- Displays last 10 calculations
- Shows timestamp for each calculation
- Click any history item to load result
- Clear history button to reset

### 4. Keyboard Support
| Key | Function |
|-----|----------|
| 0-9 | Enter numbers |
| . | Add decimal point |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulo |
| Enter | Calculate result |
| Backspace | Delete last digit |
| Escape | Clear calculator |

## 🎨 UI Components

### Display Area
- **Previous Operand**: Shows current operation (number, operator)
- **Current Operand**: Shows the number you're entering or result
- Green text with glow effect for modern appearance

### Button Types

**Number Buttons** (0-9):
- White background with border
- Hover effect: lighter gray background
- Large clickable area for touch devices

**Operator Buttons** (+, -, ×, ÷, %):
- Gradient background (primary to secondary color)
- White text
- Smooth transitions on hover

**Function Buttons** (Clear, Delete):
- Orange background
- White text
- Distinct styling for easy identification

**Equals Button**:
- Green gradient background
- Spans two columns in grid
- Larger for easy clicking

### History Panel
- Scrollable list of recent calculations
- Hover state shows delete option
- Click to reuse calculation result
- Clear History button to reset

## 📱 Responsive Design

### Desktop (1200px+)
- Full-sized buttons
- Standard layout
- History panel displayed

### Tablet (768px - 1199px)
- Adjusted button sizes
- Compact spacing

### Mobile (480px - 767px)
- Optimized touch target sizes
- Reduced padding for compact view
- Horizontal scrolling history

### Small Mobile (< 480px)
- Smallest button sizes
- Minimal padding
- Full-width calculator
- Collapsed history view

## 💡 How to Use

### Basic Calculation
```
1. Click: 5
2. Click: +
3. Click: 3
4. Click: = (or press Enter)
Result: 8
```

### Using Keyboard
```
Type: 10 * 5 (press Enter)
Result: 50
```

### With Decimals
```
Click: 7.5 - 2.3 = 
Result: 5.2
```

### Error Handling
- Attempting to divide by zero shows "Cannot divide by zero"
- Error message automatically clears after 2 seconds
- Calculator returns to ready state

## 🚢 Deployment Options

### Option 1: GitHub Pages
1. Create GitHub repository
2. Upload these files
3. Enable GitHub Pages in settings
4. Access at `https://username.github.io/calculator`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your repository
4. Deploy automatically

### Option 3: Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Deploy with one click

### Option 4: Local Hosting
- No server needed for basic use
- Just open `index.html` in browser
- History works with localStorage

### Option 5: 000webhost
1. Sign up for free hosting
2. Upload files via FTP
3. Access through your domain

## 📸 Demo Video Guide

### What to Show
1. **Basic Operations**:
   - Simple addition (5 + 3 = 8)
   - Subtraction (10 - 4 = 6)
   - Multiplication (6 × 7 = 42)
   - Division (20 ÷ 4 = 5)

2. **Advanced Features**:
   - Decimal numbers (3.14 × 2 = 6.28)
   - Modulo operation (10 % 3 = 1)
   - Delete function (showing number deletion)
   - Clear function (reset display)

3. **History Feature**:
   - Show calculations being added to history
   - Click history item to reuse
   - Clear history button

4. **Error Handling**:
   - Attempt division by zero
   - Show error message

5. **Keyboard Support**:
   - Type calculation using keyboard
   - Show keyboard shortcuts info

6. **Responsiveness**:
   - Resize browser to show mobile view
   - Test on actual mobile device if possible

### Recording Tips
- Speak clearly and explain each feature
- Keep it under 3 minutes
- Use screen recording software (OBS, Loom, Camtasia)
- Add background music (optional)
- Use annotations to highlight features

## 📤 LinkedIn Post Template

```
🧮 Built a fully functional calculator as part of my #CodeSoft internship! 
This web app demonstrates core JavaScript concepts and DOM manipulation.

Features:
✨ Complete arithmetic operations (+, -, ×, ÷)
✨ Calculation history with timestamps
✨ Full keyboard support
✨ Error handling (division by zero)
✨ Responsive mobile design
✨ Persistent localStorage history

Tech Stack: HTML5, CSS3, Vanilla JavaScript (No frameworks!)

Live Demo: [Your URL]
GitHub: [Your Repository]

Key learning outcomes:
→ JavaScript classes and methods
→ Event handling and listeners
→ DOM manipulation
→ localStorage API
→ Responsive design

#Coding #JavaScript #WebDevelopment #Internship #Portfolio
```

## 🎓 Learning Outcomes

This project teaches:

1. **JavaScript Fundamentals**:
   - ES6 Classes
   - Methods and constructors
   - Arrow functions
   - Template literals

2. **DOM Manipulation**:
   - Selecting elements
   - Adding event listeners
   - Updating innerHTML
   - classList methods

3. **Event Handling**:
   - Click events
   - Keyboard events
   - Event delegation

4. **Web APIs**:
   - localStorage for persistence
   - Number parsing and formatting
   - Regular expressions

5. **UI/UX**:
   - Responsive design
   - CSS Grid layouts
   - User feedback and animations
   - Accessibility considerations

## 📋 Submission Checklist

- [ ] Calculator performs all basic operations correctly
- [ ] Keyboard shortcuts work (0-9, +, -, *, /, ., Enter, Backspace, Escape)
- [ ] History saves and displays correctly
- [ ] Division by zero handled with error message
- [ ] Responsive design works on mobile
- [ ] All buttons are clickable and responsive
- [ ] Website deployed with live URL
- [ ] Demo video created (< 3 minutes)
- [ ] GitHub repository created
- [ ] LinkedIn post published with #codsoft

## 🐛 Troubleshooting

**Problem**: Buttons not responding
- Solution: Check browser console (F12) for JavaScript errors

**Problem**: History not saving
- Solution: Check browser localStorage is enabled
- Solution: Ensure script.js is loaded properly

**Problem**: Keyboard not working
- Solution: Click on calculator first to give it focus
- Solution: Check browser console for errors

**Problem**: Calculation incorrect
- Solution: Check operator being used
- Solution: Verify decimal placement

**Problem**: Mobile view looks broken
- Solution: Check CSS media queries are correct
- Solution: Test in Chrome DevTools mobile emulator

## 💡 Enhancement Ideas

1. **Scientific Mode**: Add advanced functions (sin, cos, tan, sqrt, etc.)
2. **Theme Switcher**: Light/dark mode toggle
3. **Unit Converter**: Convert between different units
4. **Expression Evaluator**: Enter full expression like "5+3*2"
5. **Calculation Details**: Show step-by-step calculations
6. **Export History**: Download calculation history as CSV
7. **Keyboard Customization**: Customize keyboard shortcuts
8. **Undo/Redo**: Step back through calculations
9. **Custom Themes**: Choose different color schemes
10. **Multiple Calculators**: Switch between calculator modes

## 🔒 Data Privacy

- All calculations are stored locally in your browser
- No data is sent to any server
- History can be cleared anytime
- Data persists even after closing browser (localStorage)
- Clearing browser cache will remove history

## 📚 Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Event Handling](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 📞 Support

If you encounter issues:
1. Check browser console for error messages (F12)
2. Verify all files are in correct locations
3. Clear browser cache and reload
4. Test in different browser
5. Check internet connection (for CDN resources)

## 📄 License

This project is open source under the MIT License.

---

**Start calculating! 🎉** Deploy this calculator and surprise your friends with your coding skills!
