# Password Generator

This project is a simple yet powerful **Password Generator** built in React inspired by Hitesh Choudhary's Chai and Code, using various React hooks for state management, function memoization, and DOM manipulation. It generates secure, customizable passwords with options to include numbers and special characters, adjust password length, and easily copy the password to your clipboard.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Hooks and Concepts](#hooks-and-concepts)
- [Usage](#usage)

## Features

- **Adjustable Password Length**: Choose password lengths between 6 and 100 characters.
- **Customizable Character Types**: Option to include numbers and special characters.
- **Instant Copy to Clipboard**: One-click password copying.
- **Auto-Regenerate on Option Change**: Password automatically regenerates whenever settings change.

## Project Structure

```plaintext
.
├── src
│   ├── App.js        # Main component
│   └── index.js      # App entry point
└── README.md         # Documentation
```

## Hooks and Concepts

This project leverages several React hooks and concepts:

**useState**
- Manages the state of variables such as password length, whether numbers and characters are allowed, and the generated password itself.
- Example: **const [length, setLength] = useState(8)**

**useCallback**
- Memoizes functions to prevent recreation on every render unless dependencies change.
- Here, it’s used for both the password generation function and the copy-to-clipboard function.
- Example: **const passwordGenerator = useCallback(() => { /* logic */ }, [dependencies])**
Dependencies: The values the function relies on, and if any of them change, the function will be recreated.

**useRef**
- References the password input field so that it can be programmatically selected for copying to the clipboard.
- Example: **const passwordRef = useRef(null)**

**useEffect**
- Triggers side effects in the functional component. Here, it automatically regenerates the password whenever relevant dependencies (like length, numberAllowed, or charAllowed) change.
- Example: **useEffect(() => { passwordGenerator() }, [dependencies])**










