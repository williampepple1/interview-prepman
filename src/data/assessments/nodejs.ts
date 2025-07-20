import { AssessmentQuestion } from '../../types';

export const nodejsAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'nodejs-1',
    question: 'What is Node.js?',
    options: [
      'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      'A web browser',
      'A database management system',
      'A programming language'
    ],
    correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine that allows you to run JavaScript on the server side.',
    category: 'Node.js Basics',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-2',
    question: 'What is the purpose of the global object in Node.js?',
    options: [
      'To provide global variables and functions that are available throughout the application',
      'To store local variables',
      'To handle HTTP requests',
      'To manage database connections'
    ],
    correctAnswer: 'To provide global variables and functions that are available throughout the application',
    explanation: 'The global object in Node.js provides global variables and functions that are available throughout the application.',
    category: 'Node.js Basics',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-3',
    question: 'What is the purpose of the process object in Node.js?',
    options: [
      'To provide information about the current Node.js process',
      'To handle HTTP requests',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To provide information about the current Node.js process',
    explanation: 'The process object provides information about the current Node.js process and allows you to control it.',
    category: 'Node.js Basics',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-4',
    question: 'What is the purpose of the Buffer class in Node.js?',
    options: [
      'To handle binary data',
      'To handle HTTP requests',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To handle binary data',
    explanation: 'The Buffer class is used to handle binary data in Node.js.',
    category: 'Node.js Basics',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-5',
    question: 'What is the purpose of the __dirname variable in Node.js?',
    options: [
      'To get the directory name of the current module',
      'To get the filename of the current module',
      'To get the current working directory',
      'To get the home directory'
    ],
    correctAnswer: 'To get the directory name of the current module',
    explanation: '__dirname is a variable that contains the directory name of the current module.',
    category: 'Node.js Basics',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-6',
    question: 'What is the purpose of the __filename variable in Node.js?',
    options: [
      'To get the filename of the current module',
      'To get the directory name of the current module',
      'To get the current working directory',
      'To get the home directory'
    ],
    correctAnswer: 'To get the filename of the current module',
    explanation: '__filename is a variable that contains the filename of the current module.',
    category: 'Node.js Basics',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-7',
    question: 'What is the purpose of the require function in Node.js?',
    options: [
      'To import modules',
      'To export modules',
      'To handle HTTP requests',
      'To manage database connections'
    ],
    correctAnswer: 'To import modules',
    explanation: 'The require function is used to import modules in Node.js.',
    category: 'Node.js Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-8',
    question: 'What is the purpose of the module.exports object in Node.js?',
    options: [
      'To export modules',
      'To import modules',
      'To handle HTTP requests',
      'To manage database connections'
    ],
    correctAnswer: 'To export modules',
    explanation: 'The module.exports object is used to export modules in Node.js.',
    category: 'Node.js Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-9',
    question: 'What is the purpose of the exports object in Node.js?',
    options: [
      'To export modules (shorthand for module.exports)',
      'To import modules',
      'To handle HTTP requests',
      'To manage database connections'
    ],
    correctAnswer: 'To export modules (shorthand for module.exports)',
    explanation: 'The exports object is a shorthand for module.exports and is used to export modules in Node.js.',
    category: 'Node.js Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-10',
    question: 'What is the purpose of the fs module in Node.js?',
    options: [
      'To handle file system operations',
      'To handle HTTP requests',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To handle file system operations',
    explanation: 'The fs module provides an API for interacting with the file system.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-11',
    question: 'What is the purpose of the path module in Node.js?',
    options: [
      'To handle file and directory paths',
      'To handle HTTP requests',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To handle file and directory paths',
    explanation: 'The path module provides utilities for working with file and directory paths.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-12',
    question: 'What is the purpose of the http module in Node.js?',
    options: [
      'To create HTTP servers and make HTTP requests',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To create HTTP servers and make HTTP requests',
    explanation: 'The http module provides functionality to create HTTP servers and make HTTP requests.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-13',
    question: 'What is the purpose of the https module in Node.js?',
    options: [
      'To create HTTPS servers and make HTTPS requests',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To create HTTPS servers and make HTTPS requests',
    explanation: 'The https module provides functionality to create HTTPS servers and make HTTPS requests.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-14',
    question: 'What is the purpose of the url module in Node.js?',
    options: [
      'To parse and format URLs',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To parse and format URLs',
    explanation: 'The url module provides utilities for parsing and formatting URLs.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-15',
    question: 'What is the purpose of the querystring module in Node.js?',
    options: [
      'To parse and format query strings',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To parse and format query strings',
    explanation: 'The querystring module provides utilities for parsing and formatting query strings.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-16',
    question: 'What is the purpose of the crypto module in Node.js?',
    options: [
      'To provide cryptographic functionality',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To provide cryptographic functionality',
    explanation: 'The crypto module provides cryptographic functionality including hashing, encryption, and decryption.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-17',
    question: 'What is the purpose of the stream module in Node.js?',
    options: [
      'To handle streaming data',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To handle streaming data',
    explanation: 'The stream module provides an API for implementing streaming data.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-18',
    question: 'What is the purpose of the events module in Node.js?',
    options: [
      'To handle events and event emitters',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To handle events and event emitters',
    explanation: 'The events module provides the EventEmitter class which is used to handle events.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-19',
    question: 'What is the purpose of the util module in Node.js?',
    options: [
      'To provide utility functions',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To provide utility functions',
    explanation: 'The util module provides utility functions that are useful for application and module developers.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-20',
    question: 'What is the purpose of the os module in Node.js?',
    options: [
      'To provide operating system-related utility methods',
      'To handle file system operations',
      'To manage database connections',
      'To create new processes'
    ],
    correctAnswer: 'To provide operating system-related utility methods',
    explanation: 'The os module provides operating system-related utility methods.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-21',
    question: 'What is the purpose of the child_process module in Node.js?',
    options: [
      'To spawn child processes',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To spawn child processes',
    explanation: 'The child_process module provides the ability to spawn child processes.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-22',
    question: 'What is the purpose of the cluster module in Node.js?',
    options: [
      'To create child processes that share server ports',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To create child processes that share server ports',
    explanation: 'The cluster module allows you to create child processes that share server ports.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-23',
    question: 'What is the purpose of the worker_threads module in Node.js?',
    options: [
      'To run JavaScript in parallel using threads',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To run JavaScript in parallel using threads',
    explanation: 'The worker_threads module allows you to run JavaScript in parallel using threads.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-24',
    question: 'What is the purpose of the vm module in Node.js?',
    options: [
      'To compile and run code within V8 Virtual Machine contexts',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To compile and run code within V8 Virtual Machine contexts',
    explanation: 'The vm module provides APIs for compiling and running code within V8 Virtual Machine contexts.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-25',
    question: 'What is the purpose of the perf_hooks module in Node.js?',
    options: [
      'To measure performance',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To measure performance',
    explanation: 'The perf_hooks module provides a way to measure performance.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-26',
    question: 'What is the purpose of the assert module in Node.js?',
    options: [
      'To write tests',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To write tests',
    explanation: 'The assert module provides a way to write tests.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-27',
    question: 'What is the purpose of the readline module in Node.js?',
    options: [
      'To read data one line at a time',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To read data one line at a time',
    explanation: 'The readline module provides an interface for reading data one line at a time.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-28',
    question: 'What is the purpose of the repl module in Node.js?',
    options: [
      'To create a Read-Eval-Print Loop',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To create a Read-Eval-Print Loop',
    explanation: 'The repl module provides a Read-Eval-Print Loop implementation.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-29',
    question: 'What is the purpose of the tty module in Node.js?',
    options: [
      'To handle terminal functionality',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To handle terminal functionality',
    explanation: 'The tty module provides terminal functionality.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-30',
    question: 'What is the purpose of the zlib module in Node.js?',
    options: [
      'To provide compression and decompression functionality',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide compression and decompression functionality',
    explanation: 'The zlib module provides compression and decompression functionality.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-31',
    question: 'What is the purpose of the net module in Node.js?',
    options: [
      'To create TCP servers and clients',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To create TCP servers and clients',
    explanation: 'The net module provides an asynchronous network API for creating stream-based TCP servers and clients.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-32',
    question: 'What is the purpose of the dgram module in Node.js?',
    options: [
      'To create UDP datagram sockets',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To create UDP datagram sockets',
    explanation: 'The dgram module provides an implementation of UDP datagram sockets.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-33',
    question: 'What is the purpose of the dns module in Node.js?',
    options: [
      'To perform DNS lookups',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To perform DNS lookups',
    explanation: 'The dns module provides functionality to perform DNS lookups.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-34',
    question: 'What is the purpose of the punycode module in Node.js?',
    options: [
      'To encode/decode punycode',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To encode/decode punycode',
    explanation: 'The punycode module provides functionality to encode/decode punycode.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-35',
    question: 'What is the purpose of the string_decoder module in Node.js?',
    options: [
      'To decode Buffer objects into strings',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To decode Buffer objects into strings',
    explanation: 'The string_decoder module provides an API for decoding Buffer objects into strings.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-36',
    question: 'What is the purpose of the timers module in Node.js?',
    options: [
      'To schedule functions to be called at some future time',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To schedule functions to be called at some future time',
    explanation: 'The timers module provides a way to schedule functions to be called at some future time.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-37',
    question: 'What is the purpose of the tls module in Node.js?',
    options: [
      'To implement TLS and SSL protocols',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To implement TLS and SSL protocols',
    explanation: 'The tls module provides an implementation of the TLS and SSL protocols.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-38',
    question: 'What is the purpose of the v8 module in Node.js?',
    options: [
      'To expose APIs that are specific to the version of V8',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To expose APIs that are specific to the version of V8',
    explanation: 'The v8 module exposes APIs that are specific to the version of V8.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-39',
    question: 'What is the purpose of the inspector module in Node.js?',
    options: [
      'To provide an API for debugging',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide an API for debugging',
    explanation: 'The inspector module provides an API for debugging.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-40',
    question: 'What is the purpose of the async_hooks module in Node.js?',
    options: [
      'To track async operations',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To track async operations',
    explanation: 'The async_hooks module provides an API to track async operations.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-41',
    question: 'What is the purpose of the trace_events module in Node.js?',
    options: [
      'To trace events',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To trace events',
    explanation: 'The trace_events module provides a way to trace events.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-42',
    question: 'What is the purpose of the diagnostics_channel module in Node.js?',
    options: [
      'To provide diagnostics channels',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide diagnostics channels',
    explanation: 'The diagnostics_channel module provides diagnostics channels.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-43',
    question: 'What is the purpose of the test module in Node.js?',
    options: [
      'To provide testing utilities',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide testing utilities',
    explanation: 'The test module provides testing utilities.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-44',
    question: 'What is the purpose of the wasi module in Node.js?',
    options: [
      'To provide WebAssembly System Interface',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide WebAssembly System Interface',
    explanation: 'The wasi module provides WebAssembly System Interface.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-45',
    question: 'What is the purpose of the webstreams module in Node.js?',
    options: [
      'To provide Web Streams API',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To provide Web Streams API',
    explanation: 'The webstreams module provides Web Streams API.',
    category: 'Node.js Built-in Modules',
    difficulty: 'Hard'
  },
  {
    id: 'nodejs-46',
    question: 'What is the purpose of the node: prefix in Node.js?',
    options: [
      'To explicitly import built-in modules',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To explicitly import built-in modules',
    explanation: 'The node: prefix is used to explicitly import built-in modules.',
    category: 'Node.js Modules',
    difficulty: 'Medium'
  },
  {
    id: 'nodejs-47',
    question: 'What is the purpose of the package.json file in Node.js?',
    options: [
      'To define project metadata and dependencies',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To define project metadata and dependencies',
    explanation: 'The package.json file is used to define project metadata and dependencies.',
    category: 'Node.js Project Management',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-48',
    question: 'What is the purpose of npm in Node.js?',
    options: [
      'To manage packages and dependencies',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To manage packages and dependencies',
    explanation: 'npm is a package manager for Node.js that is used to manage packages and dependencies.',
    category: 'Node.js Project Management',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-49',
    question: 'What is the purpose of the node_modules directory in Node.js?',
    options: [
      'To store installed packages and dependencies',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To store installed packages and dependencies',
    explanation: 'The node_modules directory is used to store installed packages and dependencies.',
    category: 'Node.js Project Management',
    difficulty: 'Easy'
  },
  {
    id: 'nodejs-50',
    question: 'What is the purpose of the .gitignore file in Node.js projects?',
    options: [
      'To specify files and directories that should be ignored by Git',
      'To handle file system operations',
      'To manage database connections',
      'To create HTTP servers'
    ],
    correctAnswer: 'To specify files and directories that should be ignored by Git',
    explanation: 'The .gitignore file is used to specify files and directories that should be ignored by Git.',
    category: 'Node.js Project Management',
    difficulty: 'Easy'
  }
]; 