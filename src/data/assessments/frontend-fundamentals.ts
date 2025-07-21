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
  },
  {
    id: 'frontend-51',
    question: 'What is the purpose of CSS pseudo-elements?',
    options: [
      'To create virtual elements that are not in the DOM',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To create virtual elements that are not in the DOM',
    explanation: 'CSS pseudo-elements create virtual elements that are not in the DOM, such as ::before, ::after, ::first-line, etc.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-52',
    question: 'Which JavaScript method is used to join array elements into a string?',
    options: [
      'join()',
      'concat()',
      'toString()',
      'stringify()'
    ],
    correctAnswer: 'join()',
    explanation: 'The join() method joins all elements of an array into a string, with an optional separator.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-53',
    question: 'What is the purpose of the HTML <article> tag?',
    options: [
      'To define a self-contained composition',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define a self-contained composition',
    explanation: 'The <article> tag defines a self-contained composition that could be independently distributable or reusable.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-54',
    question: 'Which CSS property is used to control text alignment?',
    options: [
      'text-align',
      'align',
      'text-position',
      'alignment'
    ],
    correctAnswer: 'text-align',
    explanation: 'The text-align property is used to set the horizontal alignment of text.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-55',
    question: 'What is the purpose of JavaScript\'s Promise?',
    options: [
      'To handle asynchronous operations',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To handle asynchronous operations',
    explanation: 'A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
    category: 'JavaScript',
    difficulty: 'Hard'
  },
  {
    id: 'frontend-56',
    question: 'Which HTML tag is used to create a text area?',
    options: [
      '<textarea>',
      '<text>',
      '<input type="text">',
      '<area>'
    ],
    correctAnswer: '<textarea>',
    explanation: 'The <textarea> tag defines a multi-line text input control.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-57',
    question: 'What is the purpose of CSS calc() function?',
    options: [
      'To perform calculations in CSS',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To perform calculations in CSS',
    explanation: 'The calc() function allows you to perform calculations to determine CSS property values.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-58',
    question: 'Which JavaScript method is used to check if an array includes a specific element?',
    options: [
      'includes()',
      'contains()',
      'has()',
      'find()'
    ],
    correctAnswer: 'includes()',
    explanation: 'The includes() method determines whether an array includes a certain value among its entries.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-59',
    question: 'What is the purpose of the HTML <aside> tag?',
    options: [
      'To define content aside from the main content',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define content aside from the main content',
    explanation: 'The <aside> tag defines content aside from the main content, such as sidebars or call-out boxes.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-60',
    question: 'Which CSS property is used to control the visibility of an element?',
    options: [
      'visibility',
      'display',
      'show',
      'hidden'
    ],
    correctAnswer: 'visibility',
    explanation: 'The visibility property specifies whether an element is visible or hidden.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-61',
    question: 'What is the purpose of JavaScript\'s async/await?',
    options: [
      'To write asynchronous code in a synchronous style',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To write asynchronous code in a synchronous style',
    explanation: 'async/await is a way to write asynchronous code that looks and behaves more like synchronous code.',
    category: 'JavaScript',
    difficulty: 'Hard'
  },
  {
    id: 'frontend-62',
    question: 'Which HTML tag is used to create a select dropdown?',
    options: [
      '<select>',
      '<dropdown>',
      '<option>',
      '<list>'
    ],
    correctAnswer: '<select>',
    explanation: 'The <select> tag is used to create a dropdown list.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-63',
    question: 'What is the purpose of CSS transform property?',
    options: [
      'To modify the coordinate space of the CSS visual formatting model',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To modify the coordinate space of the CSS visual formatting model',
    explanation: 'The transform property allows you to modify the coordinate space of the CSS visual formatting model.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-64',
    question: 'Which JavaScript method is used to find the index of an element in an array?',
    options: [
      'indexOf()',
      'findIndex()',
      'search()',
      'locate()'
    ],
    correctAnswer: 'indexOf()',
    explanation: 'The indexOf() method returns the first index at which a given element can be found in the array.',
    category: 'JavaScript',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-65',
    question: 'What is the purpose of the HTML <figure> tag?',
    options: [
      'To specify self-contained content like illustrations, diagrams, photos, etc.',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To specify self-contained content like illustrations, diagrams, photos, etc.',
    explanation: 'The <figure> tag specifies self-contained content like illustrations, diagrams, photos, code listings, etc.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-66',
    question: 'Which CSS property is used to control the overflow of content?',
    options: [
      'overflow',
      'flow',
      'content',
      'spill'
    ],
    correctAnswer: 'overflow',
    explanation: 'The overflow property specifies what should happen if content overflows an element\'s box.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-67',
    question: 'What is the purpose of JavaScript\'s destructuring assignment?',
    options: [
      'To extract values from objects or arrays into distinct variables',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To extract values from objects or arrays into distinct variables',
    explanation: 'Destructuring assignment allows you to extract values from objects or arrays into distinct variables.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-68',
    question: 'Which HTML tag is used to create a checkbox?',
    options: [
      '<input type="checkbox">',
      '<checkbox>',
      '<check>',
      '<input type="check">'
    ],
    correctAnswer: '<input type="checkbox">',
    explanation: 'The <input type="checkbox"> tag creates a checkbox input field.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-69',
    question: 'What is the purpose of CSS box-shadow property?',
    options: [
      'To add shadow effects around an element\'s frame',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To add shadow effects around an element\'s frame',
    explanation: 'The box-shadow property adds shadow effects around an element\'s frame.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-70',
    question: 'Which JavaScript method is used to create a new array from a portion of an existing array?',
    options: [
      'slice()',
      'splice()',
      'cut()',
      'extract()'
    ],
    correctAnswer: 'slice()',
    explanation: 'The slice() method returns a shallow copy of a portion of an array into a new array object.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-71',
    question: 'What is the purpose of the HTML <time> tag?',
    options: [
      'To define a specific time or a datetime',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define a specific time or a datetime',
    explanation: 'The <time> tag defines a specific time or a datetime.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-72',
    question: 'Which CSS property is used to control the cursor appearance?',
    options: [
      'cursor',
      'pointer',
      'mouse',
      'hand'
    ],
    correctAnswer: 'cursor',
    explanation: 'The cursor property specifies the mouse cursor to be displayed when pointing over an element.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-73',
    question: 'What is the purpose of JavaScript\'s template literals?',
    options: [
      'To create strings with embedded expressions',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To create strings with embedded expressions',
    explanation: 'Template literals allow you to create strings with embedded expressions using backticks (`) and ${expression}.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-74',
    question: 'Which HTML tag is used to create a radio button?',
    options: [
      '<input type="radio">',
      '<radio>',
      '<input type="button">',
      '<input type="select">'
    ],
    correctAnswer: '<input type="radio">',
    explanation: 'The <input type="radio"> tag creates a radio button input field.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-75',
    question: 'What is the purpose of CSS border-radius property?',
    options: [
      'To create rounded corners on elements',
      'To add colors to elements',
      'To create 3D effects',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To create rounded corners on elements',
    explanation: 'The border-radius property defines the radius of the element\'s corners, creating rounded corners.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-76',
    question: 'What is the purpose of JavaScript\'s spread operator?',
    options: [
      'To expand elements of an array or object',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To expand elements of an array or object',
    explanation: 'The spread operator (...) allows you to expand elements of an array or object into individual elements.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-77',
    question: 'Which HTML tag is used to create a definition list?',
    options: [
      '<dl>',
      '<ul>',
      '<ol>',
      '<list>'
    ],
    correctAnswer: '<dl>',
    explanation: 'The <dl> tag defines a description list, used with <dt> (term) and <dd> (description) tags.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-78',
    question: 'What is the purpose of CSS @media rule?',
    options: [
      'To apply different styles for different media types and screen sizes',
      'To create animations',
      'To add colors to elements',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To apply different styles for different media types and screen sizes',
    explanation: 'The @media rule is used to apply different styles for different media types and screen sizes.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-79',
    question: 'Which JavaScript method is used to remove elements from an array and add new elements?',
    options: [
      'splice()',
      'slice()',
      'cut()',
      'replace()'
    ],
    correctAnswer: 'splice()',
    explanation: 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-80',
    question: 'What is the purpose of the HTML <details> tag?',
    options: [
      'To create an interactive widget that can be expanded and collapsed',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To create an interactive widget that can be expanded and collapsed',
    explanation: 'The <details> tag creates an interactive widget that can be expanded and collapsed to show or hide additional content.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-81',
    question: 'Which CSS property is used to control the background image of an element?',
    options: [
      'background-image',
      'image',
      'bg-image',
      'background'
    ],
    correctAnswer: 'background-image',
    explanation: 'The background-image property sets one or more background images for an element.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-82',
    question: 'What is the purpose of JavaScript\'s rest parameters?',
    options: [
      'To represent an indefinite number of arguments as an array',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To represent an indefinite number of arguments as an array',
    explanation: 'Rest parameters allow you to represent an indefinite number of arguments as an array.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-83',
    question: 'Which HTML tag is used to create a progress bar?',
    options: [
      '<progress>',
      '<bar>',
      '<meter>',
      '<indicator>'
    ],
    correctAnswer: '<progress>',
    explanation: 'The <progress> tag represents the completion progress of a task.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-84',
    question: 'What is the purpose of CSS @keyframes rule?',
    options: [
      'To define animations with keyframes',
      'To create media queries',
      'To add colors to elements',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To define animations with keyframes',
    explanation: 'The @keyframes rule is used to define animations with keyframes, specifying the animation sequence.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-85',
    question: 'Which JavaScript method is used to check if every element in an array passes a test?',
    options: [
      'every()',
      'all()',
      'check()',
      'test()'
    ],
    correctAnswer: 'every()',
    explanation: 'The every() method tests whether all elements in the array pass the test implemented by the provided function.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-86',
    question: 'What is the purpose of the HTML <mark> tag?',
    options: [
      'To highlight text',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To highlight text',
    explanation: 'The <mark> tag defines text that should be highlighted or marked.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-87',
    question: 'Which CSS property is used to control the opacity of an element?',
    options: [
      'opacity',
      'transparency',
      'alpha',
      'visibility'
    ],
    correctAnswer: 'opacity',
    explanation: 'The opacity property sets the opacity level for an element, from 0 (transparent) to 1 (opaque).',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-88',
    question: 'What is the purpose of JavaScript\'s Map object?',
    options: [
      'To store key-value pairs with any type of key',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To store key-value pairs with any type of key',
    explanation: 'The Map object holds key-value pairs and remembers the original insertion order of the keys.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-89',
    question: 'Which HTML tag is used to create a meter gauge?',
    options: [
      '<meter>',
      '<gauge>',
      '<progress>',
      '<indicator>'
    ],
    correctAnswer: '<meter>',
    explanation: 'The <meter> tag defines a scalar measurement within a known range, or a fractional value.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-90',
    question: 'What is the purpose of CSS @import rule?',
    options: [
      'To import CSS rules from other style sheets',
      'To create animations',
      'To add colors to elements',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To import CSS rules from other style sheets',
    explanation: 'The @import rule allows you to import a style sheet into another style sheet.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-91',
    question: 'Which JavaScript method is used to check if some elements in an array pass a test?',
    options: [
      'some()',
      'any()',
      'check()',
      'test()'
    ],
    correctAnswer: 'some()',
    explanation: 'The some() method tests whether at least one element in the array passes the test implemented by the provided function.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-92',
    question: 'What is the purpose of the HTML <cite> tag?',
    options: [
      'To define the title of a creative work',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define the title of a creative work',
    explanation: 'The <cite> tag defines the title of a creative work (e.g., a book, a poem, a song, a movie, a painting, a sculpture, etc.).',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-93',
    question: 'Which CSS property is used to control the text decoration?',
    options: [
      'text-decoration',
      'decoration',
      'text-style',
      'underline'
    ],
    correctAnswer: 'text-decoration',
    explanation: 'The text-decoration property specifies the decoration added to text, such as underline, overline, line-through.',
    category: 'CSS',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-94',
    question: 'What is the purpose of JavaScript\'s Set object?',
    options: [
      'To store unique values of any type',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To store unique values of any type',
    explanation: 'The Set object lets you store unique values of any type, whether primitive values or object references.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-95',
    question: 'Which HTML tag is used to create a definition term?',
    options: [
      '<dt>',
      '<dd>',
      '<dl>',
      '<term>'
    ],
    correctAnswer: '<dt>',
    explanation: 'The <dt> tag defines a term/name in a description list.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-96',
    question: 'What is the purpose of CSS @font-face rule?',
    options: [
      'To define custom fonts',
      'To create animations',
      'To add colors to elements',
      'To organize JavaScript code'
    ],
    correctAnswer: 'To define custom fonts',
    explanation: 'The @font-face rule allows you to define custom fonts that can be used in your CSS.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-97',
    question: 'Which JavaScript method is used to flatten nested arrays?',
    options: [
      'flat()',
      'flatten()',
      'join()',
      'concat()'
    ],
    correctAnswer: 'flat()',
    explanation: 'The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    category: 'JavaScript',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-98',
    question: 'What is the purpose of the HTML <abbr> tag?',
    options: [
      'To define an abbreviation or an acronym',
      'To create a new page',
      'To add images',
      'To create forms'
    ],
    correctAnswer: 'To define an abbreviation or an acronym',
    explanation: 'The <abbr> tag defines an abbreviation or an acronym.',
    category: 'HTML',
    difficulty: 'Easy'
  },
  {
    id: 'frontend-99',
    question: 'Which CSS property is used to control the white space handling?',
    options: [
      'white-space',
      'space',
      'text-space',
      'whitespace'
    ],
    correctAnswer: 'white-space',
    explanation: 'The white-space property specifies how white-space inside an element is handled.',
    category: 'CSS',
    difficulty: 'Medium'
  },
  {
    id: 'frontend-100',
    question: 'What is the purpose of JavaScript\'s Symbol type?',
    options: [
      'To create unique identifiers',
      'To create new HTML elements',
      'To add CSS styles',
      'To create animations'
    ],
    correctAnswer: 'To create unique identifiers',
    explanation: 'Symbol is a primitive data type that represents a unique identifier, often used as property keys in objects.',
    category: 'JavaScript',
    difficulty: 'Hard'
  }
]; 