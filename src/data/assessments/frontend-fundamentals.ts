import { AssessmentQuestion } from '../../types';

export const frontendFundamentalsQuestions: AssessmentQuestion[] = [
  {
    id: 'frontend-1',
    question: 'What does HTML stand for?',
    options: [
      'HyperText Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlink and Text Markup Language'
    ],
    correctAnswer: 'HyperText Markup Language',
    explanation: 'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-2',
    question: 'Which HTML tag is used to define the main heading of a webpage?',
    options: [
      '<h1>',
      '<head>',
      '<header>',
      '<title>'
    ],
    correctAnswer: '<h1>',
    explanation: 'The <h1> tag is used to define the main heading of a webpage. There should typically be only one <h1> per page.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-3',
    question: 'What is the purpose of the CSS box model?',
    options: [
      'To create 3D effects on web pages',
      'To define how HTML elements are displayed and how they interact with each other',
      'To organize JavaScript code',
      'To create animations'
    ],
    correctAnswer: 'To define how HTML elements are displayed and how they interact with each other',
    explanation: 'The CSS box model describes how HTML elements are displayed and how they interact with each other, including content, padding, border, and margin.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-4',
    question: 'Which JavaScript method is used to add an element to the end of an array?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()'
    ],
    correctAnswer: 'push()',
    explanation: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-5',
    question: 'What is the purpose of the HTML <meta> tag?',
    options: [
      'To create a new section on the page',
      'To provide metadata about the HTML document',
      'To add images to the page',
      'To create links between pages'
    ],
    correctAnswer: 'To provide metadata about the HTML document',
    explanation: 'The <meta> tag provides metadata about the HTML document, such as character encoding, viewport settings, and SEO information.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-6',
    question: 'Which CSS property is used to change the text color?',
    options: [
      'text-color',
      'color',
      'font-color',
      'text-style'
    ],
    correctAnswer: 'color',
    explanation: 'The color property in CSS is used to set the color of text.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-7',
    question: 'What is the difference between let and var in JavaScript?',
    options: [
      'There is no difference between let and var',
      'let has block scope, var has function scope',
      'var is newer than let',
      'let can only be used for numbers'
    ],
    correctAnswer: 'let has block scope, var has function scope',
    explanation: 'let has block scope (limited to the block it is declared in), while var has function scope (accessible throughout the entire function).',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-8',
    question: 'Which HTML tag is used to create a hyperlink?',
    options: [
      '<link>',
      '<a>',
      '<href>',
      '<url>'
    ],
    correctAnswer: '<a>',
    explanation: 'The <a> tag is used to create hyperlinks in HTML. The href attribute specifies the URL the link goes to.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-9',
    question: 'What is the purpose of CSS flexbox?',
    options: [
      'To create animations',
      'To provide a one-dimensional layout method for arranging items in rows or columns',
      'To add colors to elements',
      'To create 3D effects'
    ],
    correctAnswer: 'To provide a one-dimensional layout method for arranging items in rows or columns',
    explanation: 'CSS flexbox is a one-dimensional layout method for arranging items in rows or columns, making it easier to create responsive layouts.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-10',
    question: 'Which JavaScript method is used to remove the last element from an array?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()'
    ],
    correctAnswer: 'pop()',
    explanation: 'The pop() method removes the last element from an array and returns that element.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-11',
    question: 'What is the purpose of the HTML <div> tag?',
    options: [
      'To create a division or section in an HTML document',
      'To add images',
      'To create tables',
      'To add JavaScript code'
    ],
    correctAnswer: 'To create a division or section in an HTML document',
    explanation: 'The <div> tag is used to create a division or section in an HTML document, often used as a container for other HTML elements.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-12',
    question: 'Which CSS property is used to control the space between elements?',
    options: [
      'spacing',
      'margin',
      'padding',
      'border'
    ],
    correctAnswer: 'margin',
    explanation: 'The margin property is used to control the space outside of an element, between elements.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-13',
    question: 'What is the purpose of JavaScript\'s addEventListener method?',
    options: [
      'To add new elements to the DOM',
      'To attach an event handler to an element',
      'To create new functions',
      'To add CSS styles'
    ],
    correctAnswer: 'To attach an event handler to an element',
    explanation: 'The addEventListener method attaches an event handler to an element, allowing you to respond to user interactions.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-14',
    question: 'Which HTML tag is used to create an ordered list?',
    options: [
      '<ul>',
      '<ol>',
      '<li>',
      '<list>'
    ],
    correctAnswer: '<ol>',
    explanation: 'The <ol> tag is used to create an ordered list, where items are numbered.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-15',
    question: 'What is the purpose of CSS Grid?',
    options: [
      'To create animations',
      'To provide a two-dimensional layout system for arranging items in rows and columns',
      'To add colors to elements',
      'To create 3D effects'
    ],
    correctAnswer: 'To provide a two-dimensional layout system for arranging items in rows and columns',
    explanation: 'CSS Grid is a two-dimensional layout system that allows you to arrange items in rows and columns, providing powerful layout capabilities.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-16',
    question: 'Which JavaScript method is used to find an element by its ID?',
    options: [
      'getElementById()',
      'querySelector()',
      'getElementsByClassName()',
      'findElement()'
    ],
    correctAnswer: 'getElementById()',
    explanation: 'The getElementById() method returns the element with the specified ID.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-17',
    question: 'What is the purpose of the HTML <form> tag?',
    options: [
      'To create a new page',
      'To create a form for user input',
      'To add images',
      'To create tables'
    ],
    correctAnswer: 'To create a form for user input',
    explanation: 'The <form> tag is used to create an HTML form for user input, such as text fields, checkboxes, and submit buttons.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-18',
    question: 'Which CSS property is used to make text bold?',
    options: [
      'text-weight',
      'font-weight',
      'bold',
      'text-style'
    ],
    correctAnswer: 'font-weight',
    explanation: 'The font-weight property is used to set the weight (boldness) of the font.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-19',
    question: 'What is the purpose of JavaScript\'s localStorage?',
    options: [
      'To store data temporarily in the browser',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To store data temporarily in the browser',
    explanation: 'localStorage allows you to store key-value pairs in the browser that persist even after the browser is closed.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-20',
    question: 'Which HTML tag is used to create a table?',
    options: [
      '<table>',
      '<tr>',
      '<td>',
      '<th>'
    ],
    correctAnswer: '<table>',
    explanation: 'The <table> tag is used to create an HTML table.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-21',
    question: 'What is the purpose of CSS media queries?',
    options: [
      'To create animations',
      'To apply different styles for different devices and screen sizes',
      'To add colors to elements',
      'To create 3D effects'
    ],
    correctAnswer: 'To apply different styles for different devices and screen sizes',
    explanation: 'CSS media queries allow you to apply different styles for different devices and screen sizes, making websites responsive.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-22',
    question: 'Which JavaScript method is used to convert a string to an integer?',
    options: [
      'parseInt()',
      'toString()',
      'toInteger()',
      'convert()'
    ],
    correctAnswer: 'parseInt()',
    explanation: 'The parseInt() method parses a string and returns an integer.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-23',
    question: 'What is the purpose of the HTML <img> tag?',
    options: [
      'To create a link',
      'To embed an image in an HTML page',
      'To create a form',
      'To add JavaScript code'
    ],
    correctAnswer: 'To embed an image in an HTML page',
    explanation: 'The <img> tag is used to embed an image in an HTML page.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-24',
    question: 'Which CSS property is used to control the space inside an element?',
    options: [
      'margin',
      'padding',
      'spacing',
      'border'
    ],
    correctAnswer: 'padding',
    explanation: 'The padding property is used to control the space inside an element, between the content and the border.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-25',
    question: 'What is the purpose of JavaScript\'s setTimeout function?',
    options: [
      'To create a timer',
      'To execute a function after a specified delay',
      'To add elements to the DOM',
      'To create animations'
    ],
    correctAnswer: 'To execute a function after a specified delay',
    explanation: 'The setTimeout function executes a function after a specified delay in milliseconds.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-26',
    question: 'Which HTML tag is used to create a paragraph?',
    options: [
      '<p>',
      '<para>',
      '<text>',
      '<paragraph>'
    ],
    correctAnswer: '<p>',
    explanation: 'The <p> tag is used to create a paragraph in HTML.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-27',
    question: 'What is the purpose of CSS pseudo-classes?',
    options: [
      'To create animations',
      'To define a special state of an element',
      'To add colors to elements',
      'To create 3D effects'
    ],
    correctAnswer: 'To define a special state of an element',
    explanation: 'CSS pseudo-classes are used to define a special state of an element, such as :hover, :active, :focus, etc.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-28',
    question: 'Which JavaScript method is used to add an element to the beginning of an array?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()'
    ],
    correctAnswer: 'unshift()',
    explanation: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-29',
    question: 'What is the purpose of the HTML <nav> tag?',
    options: [
      'To create a new page',
      'To define a section of navigation links',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define a section of navigation links',
    explanation: 'The <nav> tag defines a section of navigation links.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-30',
    question: 'Which CSS property is used to change the font family?',
    options: [
      'font-family',
      'text-family',
      'family',
      'font-type'
    ],
    correctAnswer: 'font-family',
    explanation: 'The font-family property is used to specify the font family for text.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-31',
    question: 'What is the purpose of JavaScript\'s fetch API?',
    options: [
      'To create new HTML elements',
      'To make HTTP requests to servers',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To make HTTP requests to servers',
    explanation: 'The fetch API provides a way to make HTTP requests to servers, allowing you to load data from external sources.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-32',
    question: 'Which HTML tag is used to create a button?',
    options: [
      '<button>',
      '<input>',
      '<click>',
      '<action>'
    ],
    correctAnswer: '<button>',
    explanation: 'The <button> tag is used to create a clickable button in HTML.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-33',
    question: 'What is the purpose of CSS animations?',
    options: [
      'To create moving elements on a webpage',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To create moving elements on a webpage',
    explanation: 'CSS animations allow you to create moving elements on a webpage, such as fading, sliding, or rotating effects.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-34',
    question: 'Which JavaScript method is used to remove the first element from an array?',
    options: [
      'push()',
      'pop()',
      'shift()',
      'unshift()'
    ],
    correctAnswer: 'shift()',
    explanation: 'The shift() method removes the first element from an array and returns that element.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-35',
    question: 'What is the purpose of the HTML <section> tag?',
    options: [
      'To create a new page',
      'To define a section in a document',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define a section in a document',
    explanation: 'The <section> tag defines a section in a document, such as chapters, headers, footers, or any other sections of the document.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-36',
    question: 'Which CSS property is used to control the display type of an element?',
    options: [
      'display',
      'show',
      'visible',
      'type'
    ],
    correctAnswer: 'display',
    explanation: 'The display property specifies how an element should be displayed, such as block, inline, flex, grid, etc.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-37',
    question: 'What is the purpose of JavaScript\'s map() method?',
    options: [
      'To create a new array with the results of calling a function for every array element',
      'To find elements in an array',
      'To sort an array',
      'To remove elements from an array'
    ],
    correctAnswer: 'To create a new array with the results of calling a function for every array element',
    explanation: 'The map() method creates a new array with the results of calling a function for every array element.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-38',
    question: 'Which HTML tag is used to create an input field?',
    options: [
      '<input>',
      '<text>',
      '<field>',
      '<form>'
    ],
    correctAnswer: '<input>',
    explanation: 'The <input> tag is used to create an input field where users can enter data.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-39',
    question: 'What is the purpose of CSS transitions?',
    options: [
      'To create smooth changes between property values',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To create smooth changes between property values',
    explanation: 'CSS transitions allow you to create smooth changes between property values over a specified duration.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-40',
    question: 'Which JavaScript method is used to find elements by their class name?',
    options: [
      'getElementById()',
      'getElementsByClassName()',
      'querySelector()',
      'findElements()'
    ],
    correctAnswer: 'getElementsByClassName()',
    explanation: 'The getElementsByClassName() method returns a collection of elements with the specified class name.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-41',
    question: 'What is the purpose of the HTML <header> tag?',
    options: [
      'To create a new page',
      'To define a header for a document or section',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define a header for a document or section',
    explanation: 'The <header> tag defines a header for a document or section.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-42',
    question: 'Which CSS property is used to control the position of an element?',
    options: [
      'position',
      'place',
      'location',
      'top'
    ],
    correctAnswer: 'position',
    explanation: 'The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, sticky).',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-43',
    question: 'What is the purpose of JavaScript\'s filter() method?',
    options: [
      'To create a new array with elements that pass a test',
      'To find elements in an array',
      'To sort an array',
      'To remove elements from an array'
    ],
    correctAnswer: 'To create a new array with elements that pass a test',
    explanation: 'The filter() method creates a new array with elements that pass a test provided by a function.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-44',
    question: 'Which HTML tag is used to create a footer?',
    options: [
      '<footer>',
      '<bottom>',
      '<end>',
      '<foot>'
    ],
    correctAnswer: '<footer>',
    explanation: 'The <footer> tag defines a footer for a document or section.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-45',
    question: 'What is the purpose of CSS z-index?',
    options: [
      'To control the stacking order of elements',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To control the stacking order of elements',
    explanation: 'The z-index property controls the stacking order of elements, determining which elements appear on top of others.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-46',
    question: 'Which JavaScript method is used to sort an array?',
    options: [
      'sort()',
      'order()',
      'arrange()',
      'organize()'
    ],
    correctAnswer: 'sort()',
    explanation: 'The sort() method sorts the elements of an array in place and returns the sorted array.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-47',
    question: 'What is the purpose of the HTML <main> tag?',
    options: [
      'To create a new page',
      'To specify the main content of a document',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To specify the main content of a document',
    explanation: 'The <main> tag specifies the main content of a document.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-48',
    question: 'Which CSS property is used to control the size of text?',
    options: [
      'text-size',
      'font-size',
      'size',
      'text-scale'
    ],
    correctAnswer: 'font-size',
    explanation: 'The font-size property is used to set the size of the font.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-49',
    question: 'What is the purpose of JavaScript\'s reduce() method?',
    options: [
      'To reduce the size of an array',
      'To reduce an array to a single value by executing a function for each element',
      'To find elements in an array',
      'To remove elements from an array'
    ],
    correctAnswer: 'To reduce an array to a single value by executing a function for each element',
    explanation: 'The reduce() method reduces an array to a single value by executing a function for each element.',
    category: 'JavaScript',
    difficulty: 'Hard'
  },
  {
    id: 'frontend-50',
    question: 'Which HTML tag is used to create an unordered list?',
    options: [
      '<ul>',
      '<ol>',
      '<li>',
      '<list>'
    ],
    correctAnswer: '<ul>',
    explanation: 'The <ul> tag is used to create an unordered list, where items are marked with bullets.',
    category: 'HTML',
    difficulty: 'Easy'
  }
]; 