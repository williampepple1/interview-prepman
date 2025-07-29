import { AssessmentQuestion } from '../../types';

export const cleanCodeAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'clean-code-1',
    question: 'What is the primary goal of clean code?',
    options: [
      'To write code that is readable, maintainable, and easy to understand',
      'To write code that runs as fast as possible',
      'To write code that uses the least amount of memory',
      'To write code that compiles without errors'
    ],
    correctAnswer: 'To write code that is readable, maintainable, and easy to understand',
    explanation: 'Clean code prioritizes readability and maintainability over performance optimization or minimal resource usage.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-2',
    question: 'What does DRY stand for in software development?',
    options: [
      'Don\'t Repeat Yourself',
      'Do Remember Yesterday',
      'Design Right Yesterday',
      'Document Requirements Yesterday'
    ],
    correctAnswer: 'Don\'t Repeat Yourself',
    explanation: 'DRY principle states that every piece of knowledge or logic must have a single, unambiguous representation within a system.',
    category: 'DRY Principle',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-3',
    question: 'What is the Single Responsibility Principle (SRP)?',
    options: [
      'A class should have only one reason to change',
      'A function should only do one thing',
      'A variable should only store one value',
      'A file should only contain one class'
    ],
    correctAnswer: 'A class should have only one reason to change',
    explanation: 'SRP states that a class should have only one responsibility and one reason to change.',
    category: 'SOLID Principles',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-4',
    question: 'What is the Open/Closed Principle?',
    options: [
      'Software entities should be open for extension but closed for modification',
      'Software should be open source and closed to proprietary use',
      'Code should be open to all developers but closed to users',
      'Functions should be open to new parameters but closed to removal'
    ],
    correctAnswer: 'Software entities should be open for extension but closed for modification',
    explanation: 'The Open/Closed Principle allows adding new functionality without modifying existing code.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-5',
    question: 'What is the Liskov Substitution Principle (LSP)?',
    options: [
      'Objects of a superclass should be replaceable with objects of a subclass without breaking the application',
      'All subclasses must have the same number of methods as their parent class',
      'Inheritance should always be used instead of composition',
      'A subclass must implement all methods from its parent class'
    ],
    correctAnswer: 'Objects of a superclass should be replaceable with objects of a subclass without breaking the application',
    explanation: 'LSP ensures that inheritance is used correctly and that subclasses can be used in place of their parent classes.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-6',
    question: 'What is the Interface Segregation Principle (ISP)?',
    options: [
      'Clients should not be forced to depend on interfaces they do not use',
      'All interfaces should be segregated into separate files',
      'Interfaces should only contain one method each',
      'Clients should implement all methods in an interface'
    ],
    correctAnswer: 'Clients should not be forced to depend on interfaces they do not use',
    explanation: 'ISP states that it\'s better to have many specific interfaces than one general-purpose interface.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-7',
    question: 'What is the Dependency Inversion Principle (DIP)?',
    options: [
      'High-level modules should not depend on low-level modules; both should depend on abstractions',
      'Dependencies should always be inverted in the code',
      'All dependencies should be removed from the code',
      'Low-level modules should control high-level modules'
    ],
    correctAnswer: 'High-level modules should not depend on low-level modules; both should depend on abstractions',
    explanation: 'DIP promotes loose coupling by depending on abstractions rather than concrete implementations.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-8',
    question: 'What is a meaningful variable name?',
    options: [
      'A name that clearly describes what the variable represents or contains',
      'A name that is as short as possible',
      'A name that uses abbreviations to save space',
      'A name that matches the data type'
    ],
    correctAnswer: 'A name that clearly describes what the variable represents or contains',
    explanation: 'Meaningful names make code self-documenting and easier to understand.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-9',
    question: 'What is the ideal length for a function according to clean code principles?',
    options: [
      'Small enough to do one thing well, typically 20 lines or less',
      'As long as needed to complete the task',
      'Exactly 10 lines',
      'No more than 50 lines'
    ],
    correctAnswer: 'Small enough to do one thing well, typically 20 lines or less',
    explanation: 'Small functions are easier to understand, test, and maintain.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-10',
    question: 'What is the purpose of the Singleton design pattern?',
    options: [
      'To ensure a class has only one instance and provide global access to it',
      'To create multiple instances of a class',
      'To prevent inheritance',
      'To make a class abstract'
    ],
    correctAnswer: 'To ensure a class has only one instance and provide global access to it',
    explanation: 'Singleton pattern is used when exactly one instance of a class is needed throughout the application.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-11',
    question: 'What is the Factory pattern used for?',
    options: [
      'To create objects without specifying their exact class',
      'To create factories in the code',
      'To produce multiple copies of the same object',
      'To generate random objects'
    ],
    correctAnswer: 'To create objects without specifying their exact class',
    explanation: 'Factory pattern provides an interface for creating objects but lets subclasses decide which class to instantiate.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-12',
    question: 'What is the Observer pattern?',
    options: [
      'A pattern where objects notify other objects about state changes',
      'A pattern for observing code execution',
      'A pattern for monitoring system resources',
      'A pattern for watching file changes'
    ],
    correctAnswer: 'A pattern where objects notify other objects about state changes',
    explanation: 'Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-13',
    question: 'What is Test-Driven Development (TDD)?',
    options: [
      'A development process where tests are written before the actual code',
      'A process where tests are written after the code is complete',
      'A process where only unit tests are used',
      'A process where tests are optional'
    ],
    correctAnswer: 'A development process where tests are written before the actual code',
    explanation: 'TDD follows the Red-Green-Refactor cycle: write failing tests first, then write code to make them pass, then refactor.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-14',
    question: 'What is the purpose of mocking in unit testing?',
    options: [
      'To create fake objects that simulate the behavior of real objects',
      'To make fun of bad code',
      'To create multiple copies of objects',
      'To speed up test execution'
    ],
    correctAnswer: 'To create fake objects that simulate the behavior of real objects',
    explanation: 'Mocking allows testing code in isolation by replacing dependencies with controlled test doubles.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-15',
    question: 'What is "spaghetti code"?',
    options: [
      'Code that is difficult to follow due to complex control flow and lack of structure',
      'Code that contains many comments',
      'Code that uses Italian variable names',
      'Code that is written in a spiral pattern'
    ],
    correctAnswer: 'Code that is difficult to follow due to complex control flow and lack of structure',
    explanation: 'Spaghetti code refers to unstructured and difficult-to-maintain source code with complex control flow.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-16',
    question: 'What is refactoring?',
    options: [
      'Restructuring existing code without changing its external behavior',
      'Rewriting code from scratch',
      'Adding new features to existing code',
      'Fixing bugs in code'
    ],
    correctAnswer: 'Restructuring existing code without changing its external behavior',
    explanation: 'Refactoring improves code structure, readability, and maintainability without altering functionality.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-17',
    question: 'What is an edge case?',
    options: [
      'A problem or situation that occurs only at extreme operating parameters',
      'A case that is written at the edge of the screen',
      'A test case that is optional',
      'A case that only happens in production'
    ],
    correctAnswer: 'A problem or situation that occurs only at extreme operating parameters',
    explanation: 'Edge cases test the boundaries of what the code is expected to handle.',
    category: 'Error Handling',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-18',
    question: 'What is the purpose of logging in software?',
    options: [
      'To record events and information for debugging and monitoring',
      'To create log files for storage',
      'To track user activity only',
      'To measure performance'
    ],
    correctAnswer: 'To record events and information for debugging and monitoring',
    explanation: 'Logging helps developers understand what happened in the application and diagnose issues.',
    category: 'Error Handling',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-19',
    question: 'What is graceful error handling?',
    options: [
      'Handling errors in a way that doesn\'t crash the application and provides meaningful feedback',
      'Ignoring all errors',
      'Showing error messages to users',
      'Logging all errors'
    ],
    correctAnswer: 'Handling errors in a way that doesn\'t crash the application and provides meaningful feedback',
    explanation: 'Graceful error handling ensures the application continues to function even when errors occur.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-20',
    question: 'What is the purpose of code review?',
    options: [
      'To have other developers examine code for quality, bugs, and best practices',
      'To review code before it compiles',
      'To check if code follows company standards only',
      'To approve code for deployment'
    ],
    correctAnswer: 'To have other developers examine code for quality, bugs, and best practices',
    explanation: 'Code review helps catch issues early and ensures code quality and consistency.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-21',
    question: 'What is the Boy Scout Rule in clean code?',
    options: [
      'Always leave the code cleaner than you found it',
      'Always write new code instead of modifying existing code',
      'Always use the same coding style as the original author',
      'Always add comments to explain the code'
    ],
    correctAnswer: 'Always leave the code cleaner than you found it',
    explanation: 'The Boy Scout Rule encourages continuous improvement of code quality with every change.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-22',
    question: 'What is the Law of Demeter (Principle of Least Knowledge)?',
    options: [
      'An object should have limited knowledge of other objects and only interact with immediate friends',
      'Objects should not know about each other at all',
      'All objects should be friends with each other',
      'Objects should only communicate through a central mediator'
    ],
    correctAnswer: 'An object should have limited knowledge of other objects and only interact with immediate friends',
    explanation: 'This principle reduces coupling between objects and promotes loose coupling.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-23',
    question: 'What is the Command pattern?',
    options: [
      'A pattern that encapsulates a request as an object, allowing parameterization of clients',
      'A pattern for executing system commands',
      'A pattern for command-line interfaces',
      'A pattern for database commands'
    ],
    correctAnswer: 'A pattern that encapsulates a request as an object, allowing parameterization of clients',
    explanation: 'Command pattern turns a request into a stand-alone object containing all information about the request.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-24',
    question: 'What is the Strategy pattern?',
    options: [
      'A pattern that defines a family of algorithms and makes them interchangeable',
      'A pattern for business strategy implementation',
      'A pattern for strategic planning in code',
      'A pattern for algorithm optimization'
    ],
    correctAnswer: 'A pattern that defines a family of algorithms and makes them interchangeable',
    explanation: 'Strategy pattern allows selecting an algorithm\'s implementation at runtime.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-25',
    question: 'What is the Template Method pattern?',
    options: [
      'A pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses',
      'A pattern for creating templates',
      'A pattern for method templates',
      'A pattern for code generation'
    ],
    correctAnswer: 'A pattern that defines the skeleton of an algorithm in a method, deferring some steps to subclasses',
    explanation: 'Template Method lets subclasses override specific steps of an algorithm without changing its structure.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-26',
    question: 'What is the Decorator pattern?',
    options: [
      'A pattern that attaches additional responsibilities to an object dynamically',
      'A pattern for decorating UI elements',
      'A pattern for adding comments to code',
      'A pattern for code formatting'
    ],
    correctAnswer: 'A pattern that attaches additional responsibilities to an object dynamically',
    explanation: 'Decorator pattern provides a flexible alternative to subclassing for extending functionality.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-27',
    question: 'What is the Adapter pattern?',
    options: [
      'A pattern that allows incompatible interfaces to work together',
      'A pattern for adapting code to different platforms',
      'A pattern for interface adaptation',
      'A pattern for data conversion'
    ],
    correctAnswer: 'A pattern that allows incompatible interfaces to work together',
    explanation: 'Adapter pattern acts as a bridge between two incompatible interfaces.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-28',
    question: 'What is the Facade pattern?',
    options: [
      'A pattern that provides a simplified interface to a complex subsystem',
      'A pattern for building facades in architecture',
      'A pattern for UI design',
      'A pattern for system integration'
    ],
    correctAnswer: 'A pattern that provides a simplified interface to a complex subsystem',
    explanation: 'Facade pattern hides the complexity of a system and provides a simple interface to the client.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-29',
    question: 'What is the Bridge pattern?',
    options: [
      'A pattern that decouples an abstraction from its implementation',
      'A pattern for connecting different systems',
      'A pattern for network bridges',
      'A pattern for data bridges'
    ],
    correctAnswer: 'A pattern that decouples an abstraction from its implementation',
    explanation: 'Bridge pattern allows both the abstraction and implementation to vary independently.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-30',
    question: 'What is the Composite pattern?',
    options: [
      'A pattern that composes objects into tree structures to represent part-whole hierarchies',
      'A pattern for composite data types',
      'A pattern for combining multiple patterns',
      'A pattern for complex objects'
    ],
    correctAnswer: 'A pattern that composes objects into tree structures to represent part-whole hierarchies',
    explanation: 'Composite pattern lets clients treat individual objects and compositions uniformly.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-31',
    question: 'What is the Flyweight pattern?',
    options: [
      'A pattern that reduces memory usage by sharing common parts of state between multiple objects',
      'A pattern for lightweight objects',
      'A pattern for memory optimization',
      'A pattern for object sharing'
    ],
    correctAnswer: 'A pattern that reduces memory usage by sharing common parts of state between multiple objects',
    explanation: 'Flyweight pattern is used when a large number of objects need to be created and memory is a concern.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-32',
    question: 'What is the Proxy pattern?',
    options: [
      'A pattern that provides a surrogate or placeholder for another object',
      'A pattern for proxy servers',
      'A pattern for network proxies',
      'A pattern for data proxies'
    ],
    correctAnswer: 'A pattern that provides a surrogate or placeholder for another object',
    explanation: 'Proxy pattern controls access to another object, allowing you to perform something either before or after the request gets through to the original object.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-33',
    question: 'What is the Chain of Responsibility pattern?',
    options: [
      'A pattern that passes requests along a chain of handlers until one handles it',
      'A pattern for responsibility management',
      'A pattern for chain operations',
      'A pattern for request handling'
    ],
    correctAnswer: 'A pattern that passes requests along a chain of handlers until one handles it',
    explanation: 'Chain of Responsibility pattern allows you to pass requests along a chain of handlers.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-34',
    question: 'What is the Iterator pattern?',
    options: [
      'A pattern that provides a way to access elements of a collection without exposing its underlying representation',
      'A pattern for iterating over arrays',
      'A pattern for loop optimization',
      'A pattern for collection access'
    ],
    correctAnswer: 'A pattern that provides a way to access elements of a collection without exposing its underlying representation',
    explanation: 'Iterator pattern provides a standard way to traverse a collection without knowing its internal structure.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-35',
    question: 'What is the Mediator pattern?',
    options: [
      'A pattern that reduces coupling between components by making them communicate indirectly through a mediator',
      'A pattern for mediation between teams',
      'A pattern for conflict resolution',
      'A pattern for communication protocols'
    ],
    correctAnswer: 'A pattern that reduces coupling between components by making them communicate indirectly through a mediator',
    explanation: 'Mediator pattern centralizes complex communications and control logic between related objects.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-36',
    question: 'What is the Memento pattern?',
    options: [
      'A pattern that saves and restores the previous state of an object without revealing the details of implementation',
      'A pattern for memory management',
      'A pattern for state saving',
      'A pattern for backup systems'
    ],
    correctAnswer: 'A pattern that saves and restores the previous state of an object without revealing the details of implementation',
    explanation: 'Memento pattern is used to implement undo functionality or to restore an object to a previous state.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-37',
    question: 'What is the State pattern?',
    options: [
      'A pattern that allows an object to alter its behavior when its internal state changes',
      'A pattern for state management',
      'A pattern for application state',
      'A pattern for state machines'
    ],
    correctAnswer: 'A pattern that allows an object to alter its behavior when its internal state changes',
    explanation: 'State pattern lets an object behave differently depending on its internal state.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-38',
    question: 'What is the Visitor pattern?',
    options: [
      'A pattern that separates an algorithm from the object structure on which it operates',
      'A pattern for visitor management',
      'A pattern for algorithm separation',
      'A pattern for object traversal'
    ],
    correctAnswer: 'A pattern that separates an algorithm from the object structure on which it operates',
    explanation: 'Visitor pattern allows you to add new operations to existing object structures without modifying them.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-39',
    question: 'What is the Builder pattern?',
    options: [
      'A pattern that constructs complex objects step by step',
      'A pattern for building applications',
      'A pattern for construction management',
      'A pattern for object creation'
    ],
    correctAnswer: 'A pattern that constructs complex objects step by step',
    explanation: 'Builder pattern allows you to construct complex objects step by step, using the same construction code.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-40',
    question: 'What is the Prototype pattern?',
    options: [
      'A pattern that creates new objects by cloning an existing object',
      'A pattern for prototyping applications',
      'A pattern for object copying',
      'A pattern for version control'
    ],
    correctAnswer: 'A pattern that creates new objects by cloning an existing object',
    explanation: 'Prototype pattern lets you copy existing objects without making your code dependent on their classes.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-41',
    question: 'What is the Abstract Factory pattern?',
    options: [
      'A pattern that creates families of related objects without specifying their concrete classes',
      'A pattern for abstract classes',
      'A pattern for factory creation',
      'A pattern for object families'
    ],
    correctAnswer: 'A pattern that creates families of related objects without specifying their concrete classes',
    explanation: 'Abstract Factory pattern provides an interface for creating families of related objects.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-42',
    question: 'What is the Object Pool pattern?',
    options: [
      'A pattern that reuses expensive objects instead of creating and destroying them',
      'A pattern for object storage',
      'A pattern for memory pools',
      'A pattern for resource management'
    ],
    correctAnswer: 'A pattern that reuses expensive objects instead of creating and destroying them',
    explanation: 'Object Pool pattern is used when the cost of initializing a class instance is high.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-43',
    question: 'What is the Null Object pattern?',
    options: [
      'A pattern that provides a do-nothing implementation of an interface',
      'A pattern for null handling',
      'A pattern for empty objects',
      'A pattern for null safety'
    ],
    correctAnswer: 'A pattern that provides a do-nothing implementation of an interface',
    explanation: 'Null Object pattern eliminates the need to check for null references.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-44',
    question: 'What is the Specification pattern?',
    options: [
      'A pattern that encapsulates business rules and allows you to combine them using boolean logic',
      'A pattern for code specifications',
      'A pattern for business logic',
      'A pattern for rule engines'
    ],
    correctAnswer: 'A pattern that encapsulates business rules and allows you to combine them using boolean logic',
    explanation: 'Specification pattern allows you to combine business rules using boolean logic.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-45',
    question: 'What is the Unit of Work pattern?',
    options: [
      'A pattern that maintains a list of objects affected by a business transaction',
      'A pattern for work management',
      'A pattern for transaction handling',
      'A pattern for business transactions'
    ],
    correctAnswer: 'A pattern that maintains a list of objects affected by a business transaction',
    explanation: 'Unit of Work pattern coordinates the writing out of changes and the resolution of concurrency problems.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-46',
    question: 'What is the Repository pattern?',
    options: [
      'A pattern that mediates between the domain and data mapping layers',
      'A pattern for data storage',
      'A pattern for database access',
      'A pattern for data mapping'
    ],
    correctAnswer: 'A pattern that mediates between the domain and data mapping layers',
    explanation: 'Repository pattern encapsulates the logic required to access data sources.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-47',
    question: 'What is the Data Access Object (DAO) pattern?',
    options: [
      'A pattern that provides an abstract interface to some type of database or other persistence mechanism',
      'A pattern for data access',
      'A pattern for database objects',
      'A pattern for persistence'
    ],
    correctAnswer: 'A pattern that provides an abstract interface to some type of database or other persistence mechanism',
    explanation: 'DAO pattern separates low-level data accessing API or operations from high-level business services.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-48',
    question: 'What is the Service Layer pattern?',
    options: [
      'A pattern that defines an application\'s boundary and its set of available operations',
      'A pattern for service management',
      'A pattern for application boundaries',
      'A pattern for operation definitions'
    ],
    correctAnswer: 'A pattern that defines an application\'s boundary and its set of available operations',
    explanation: 'Service Layer pattern encapsulates the application\'s business logic and coordinates transactions.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-49',
    question: 'What is the Model-View-Controller (MVC) pattern?',
    options: [
      'A pattern that separates an application into three interconnected components',
      'A pattern for UI design',
      'A pattern for application architecture',
      'A pattern for component separation'
    ],
    correctAnswer: 'A pattern that separates an application into three interconnected components',
    explanation: 'MVC pattern separates concerns into Model (data), View (presentation), and Controller (logic).',
    category: 'Design Patterns',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-50',
    question: 'What is the Model-View-ViewModel (MVVM) pattern?',
    options: [
      'A pattern that facilitates the separation of development of the graphical user interface',
      'A pattern for view models',
      'A pattern for UI development',
      'A pattern for data binding'
    ],
    correctAnswer: 'A pattern that facilitates the separation of development of the graphical user interface',
    explanation: 'MVVM pattern is a variation of MVC that\'s particularly popular in modern UI frameworks.',
    category: 'Design Patterns',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-51',
    question: 'What is the Presentation-Abstraction-Control (PAC) pattern?',
    options: [
      'A pattern that defines a structure for interactive software systems',
      'A pattern for presentation layers',
      'A pattern for abstraction control',
      'A pattern for interactive systems'
    ],
    correctAnswer: 'A pattern that defines a structure for interactive software systems',
    explanation: 'PAC pattern is an architectural pattern for interactive software systems.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-52',
    question: 'What is the Blackboard pattern?',
    options: [
      'A pattern that allows multiple specialized subsystems to collaborate on solving a problem',
      'A pattern for collaboration',
      'A pattern for problem solving',
      'A pattern for subsystem communication'
    ],
    correctAnswer: 'A pattern that allows multiple specialized subsystems to collaborate on solving a problem',
    explanation: 'Blackboard pattern is useful for problems that have no deterministic solution strategies.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-53',
    question: 'What is the Interpreter pattern?',
    options: [
      'A pattern that defines a grammatical representation for a language and an interpreter to interpret the grammar',
      'A pattern for language interpretation',
      'A pattern for grammar definition',
      'A pattern for language processing'
    ],
    correctAnswer: 'A pattern that defines a grammatical representation for a language and an interpreter to interpret the grammar',
    explanation: 'Interpreter pattern is used to define a grammar for a language and provide an interpreter.',
    category: 'Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-54',
    question: 'What is the Red-Green-Refactor cycle in TDD?',
    options: [
      'Write a failing test (Red), make it pass (Green), then improve the code (Refactor)',
      'Write code first, then tests, then refactor',
      'Write tests, write code, then test again',
      'Write failing code, fix it, then test'
    ],
    correctAnswer: 'Write a failing test (Red), make it pass (Green), then improve the code (Refactor)',
    explanation: 'This is the fundamental cycle of Test-Driven Development.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-55',
    question: 'What is a unit test?',
    options: [
      'A test that verifies a small, isolated piece of functionality',
      'A test that covers the entire application',
      'A test that checks multiple components together',
      'A test that runs in isolation'
    ],
    correctAnswer: 'A test that verifies a small, isolated piece of functionality',
    explanation: 'Unit tests focus on testing individual units of code in isolation.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-56',
    question: 'What is integration testing?',
    options: [
      'Testing that verifies how different parts of the system work together',
      'Testing that integrates all features',
      'Testing that checks system integration',
      'Testing that verifies component integration'
    ],
    correctAnswer: 'Testing that verifies how different parts of the system work together',
    explanation: 'Integration testing focuses on the interaction between different components or modules.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-57',
    question: 'What is system testing?',
    options: [
      'Testing that verifies the entire system works as expected',
      'Testing that covers all systems',
      'Testing that checks system requirements',
      'Testing that verifies system functionality'
    ],
    correctAnswer: 'Testing that verifies the entire system works as expected',
    explanation: 'System testing evaluates the complete and integrated software system.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-58',
    question: 'What is acceptance testing?',
    options: [
      'Testing that verifies the system meets business requirements',
      'Testing that accepts user input',
      'Testing that checks user acceptance',
      'Testing that verifies acceptance criteria'
    ],
    correctAnswer: 'Testing that verifies the system meets business requirements',
    explanation: 'Acceptance testing ensures the software meets the business requirements and is acceptable to users.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-59',
    question: 'What is regression testing?',
    options: [
      'Testing that ensures new changes don\'t break existing functionality',
      'Testing that regresses to previous versions',
      'Testing that checks for regressions',
      'Testing that verifies old functionality'
    ],
    correctAnswer: 'Testing that ensures new changes don\'t break existing functionality',
    explanation: 'Regression testing verifies that previously developed and tested software still performs correctly.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-60',
    question: 'What is a test stub?',
    options: [
      'A simplified implementation that provides canned answers to calls',
      'A test that stubs out functionality',
      'A simplified test case',
      'A basic test implementation'
    ],
    correctAnswer: 'A simplified implementation that provides canned answers to calls',
    explanation: 'Test stubs provide predefined responses to calls made during the test.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-61',
    question: 'What is a test spy?',
    options: [
      'A test double that records information about how it was called',
      'A test that spies on other tests',
      'A test that monitors execution',
      'A test that tracks calls'
    ],
    correctAnswer: 'A test double that records information about how it was called',
    explanation: 'Test spies record information about how they were called for later verification.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-62',
    question: 'What is a test mock?',
    options: [
      'A test double that verifies interactions between the system under test and its dependencies',
      'A test that mocks other tests',
      'A test that simulates behavior',
      'A test that imitates functionality'
    ],
    correctAnswer: 'A test double that verifies interactions between the system under test and its dependencies',
    explanation: 'Test mocks verify that the system under test interacts correctly with its dependencies.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-63',
    question: 'What is a test fake?',
    options: [
      'A working implementation that takes shortcuts and is not suitable for production',
      'A test that fakes results',
      'A test that provides fake data',
      'A test that simulates production'
    ],
    correctAnswer: 'A working implementation that takes shortcuts and is not suitable for production',
    explanation: 'Test fakes provide a working implementation but with shortcuts that make them unsuitable for production.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-64',
    question: 'What is test coverage?',
    options: [
      'A measure of how much of the code is executed by tests',
      'A measure of test quality',
      'A measure of test completeness',
      'A measure of code quality'
    ],
    correctAnswer: 'A measure of how much of the code is executed by tests',
    explanation: 'Test coverage measures the degree to which the source code is executed by tests.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-65',
    question: 'What is the Arrange-Act-Assert pattern in testing?',
    options: [
      'A pattern that structures tests into three sections: setup, execution, and verification',
      'A pattern for test organization',
      'A pattern for test structure',
      'A pattern for test execution'
    ],
    correctAnswer: 'A pattern that structures tests into three sections: setup, execution, and verification',
    explanation: 'AAA pattern provides a clear structure for writing readable and maintainable tests.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-66',
    question: 'What is the Given-When-Then pattern in testing?',
    options: [
      'A pattern that describes behavior in terms of scenarios with preconditions, actions, and outcomes',
      'A pattern for behavior description',
      'A pattern for scenario testing',
      'A pattern for test scenarios'
    ],
    correctAnswer: 'A pattern that describes behavior in terms of scenarios with preconditions, actions, and outcomes',
    explanation: 'Given-When-Then pattern is commonly used in behavior-driven development (BDD).',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-67',
    question: 'What is the FIRST principle in testing?',
    options: [
      'Fast, Independent, Repeatable, Self-validating, and Timely',
      'Functional, Independent, Reliable, Simple, and Testable',
      'Fast, Isolated, Reliable, Simple, and Thorough',
      'Functional, Isolated, Repeatable, Self-contained, and Timely'
    ],
    correctAnswer: 'Fast, Independent, Repeatable, Self-validating, and Timely',
    explanation: 'FIRST principles help create high-quality unit tests.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-68',
    question: 'What is the purpose of assertions in tests?',
    options: [
      'To verify that the actual result matches the expected result',
      'To assert dominance over the code',
      'To declare test intentions',
      'To validate test data'
    ],
    correctAnswer: 'To verify that the actual result matches the expected result',
    explanation: 'Assertions are the core of test verification, checking that the code behaves as expected.',
    category: 'Testing',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-69',
    question: 'What is a test fixture?',
    options: [
      'A fixed state used as a baseline for running tests',
      'A test setup tool',
      'A test configuration',
      'A test environment'
    ],
    correctAnswer: 'A fixed state used as a baseline for running tests',
    explanation: 'Test fixtures provide a known, fixed state that tests can rely on.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-70',
    question: 'What is the purpose of test isolation?',
    options: [
      'To ensure tests don\'t affect each other and can run in any order',
      'To isolate bugs in the code',
      'To separate test concerns',
      'To isolate test environments'
    ],
    correctAnswer: 'To ensure tests don\'t affect each other and can run in any order',
    explanation: 'Test isolation ensures that tests are independent and don\'t have side effects on each other.',
    category: 'Testing',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-71',
    question: 'What is the purpose of meaningful variable names?',
    options: [
      'To make code self-documenting and easier to understand',
      'To satisfy naming conventions',
      'To make code longer',
      'To follow company standards'
    ],
    correctAnswer: 'To make code self-documenting and easier to understand',
    explanation: 'Meaningful names reduce the need for comments and make code more readable.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-72',
    question: 'What is the purpose of small functions?',
    options: [
      'To make code easier to understand, test, and maintain',
      'To reduce file size',
      'To improve performance',
      'To follow best practices'
    ],
    correctAnswer: 'To make code easier to understand, test, and maintain',
    explanation: 'Small functions have a single responsibility and are easier to comprehend and modify.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-73',
    question: 'What is the purpose of avoiding magic numbers?',
    options: [
      'To make code more readable and maintainable by using named constants',
      'To avoid using numbers in code',
      'To prevent mathematical errors',
      'To follow coding standards'
    ],
    correctAnswer: 'To make code more readable and maintainable by using named constants',
    explanation: 'Magic numbers make code harder to understand and maintain.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-74',
    question: 'What is the purpose of consistent formatting?',
    options: [
      'To make code easier to read and maintain',
      'To satisfy linters',
      'To follow style guides',
      'To make code look professional'
    ],
    correctAnswer: 'To make code easier to read and maintain',
    explanation: 'Consistent formatting improves readability and reduces cognitive load.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-75',
    question: 'What is the purpose of avoiding deep nesting?',
    options: [
      'To make code more readable and reduce complexity',
      'To avoid performance issues',
      'To follow coding standards',
      'To reduce indentation'
    ],
    correctAnswer: 'To make code more readable and reduce complexity',
    explanation: 'Deep nesting makes code harder to follow and understand.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-76',
    question: 'What is the purpose of early returns?',
    options: [
      'To reduce nesting and make code more readable',
      'To improve performance',
      'To avoid else statements',
      'To follow best practices'
    ],
    correctAnswer: 'To reduce nesting and make code more readable',
    explanation: 'Early returns help avoid deep nesting and make the happy path more obvious.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-77',
    question: 'What is the purpose of guard clauses?',
    options: [
      'To handle edge cases early and reduce nesting',
      'To protect against errors',
      'To validate input parameters',
      'To follow defensive programming'
    ],
    correctAnswer: 'To handle edge cases early and reduce nesting',
    explanation: 'Guard clauses validate conditions early and return early if conditions aren\'t met.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-78',
    question: 'What is the purpose of avoiding long parameter lists?',
    options: [
      'To make functions easier to understand and use',
      'To reduce function complexity',
      'To follow best practices',
      'To improve performance'
    ],
    correctAnswer: 'To make functions easier to understand and use',
    explanation: 'Long parameter lists make functions harder to understand and more error-prone.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-79',
    question: 'What is the purpose of using enums or constants instead of strings?',
    options: [
      'To prevent typos and make code more maintainable',
      'To improve performance',
      'To follow best practices',
      'To reduce memory usage'
    ],
    correctAnswer: 'To prevent typos and make code more maintainable',
    explanation: 'Using enums or constants provides compile-time safety and makes refactoring easier.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-80',
    question: 'What is the purpose of avoiding global variables?',
    options: [
      'To prevent unintended side effects and make code more predictable',
      'To reduce memory usage',
      'To follow best practices',
      'To improve performance'
    ],
    correctAnswer: 'To prevent unintended side effects and make code more predictable',
    explanation: 'Global variables can be modified from anywhere, making code harder to understand and debug.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-81',
    question: 'What is the purpose of using meaningful comments?',
    options: [
      'To explain why code exists, not what it does',
      'To document every line of code',
      'To explain what the code does',
      'To satisfy documentation requirements'
    ],
    correctAnswer: 'To explain why code exists, not what it does',
    explanation: 'Good comments explain the reasoning behind code decisions, not the obvious functionality.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-82',
    question: 'What is the purpose of avoiding code duplication?',
    options: [
      'To reduce maintenance burden and improve consistency',
      'To reduce file size',
      'To improve performance',
      'To follow DRY principle'
    ],
    correctAnswer: 'To reduce maintenance burden and improve consistency',
    explanation: 'Duplicated code means bugs and changes need to be fixed in multiple places.',
    category: 'DRY Principle',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-83',
    question: 'What is the purpose of using descriptive function names?',
    options: [
      'To make code self-documenting and express intent clearly',
      'To satisfy naming conventions',
      'To make function names longer',
      'To follow company standards'
    ],
    correctAnswer: 'To make code self-documenting and express intent clearly',
    explanation: 'Function names should clearly describe what the function does.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-84',
    question: 'What is the purpose of avoiding side effects?',
    options: [
      'To make functions more predictable and easier to test',
      'To improve performance',
      'To follow functional programming principles',
      'To reduce complexity'
    ],
    correctAnswer: 'To make functions more predictable and easier to test',
    explanation: 'Functions with side effects are harder to reason about and test.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-85',
    question: 'What is the purpose of using immutable data structures?',
    options: [
      'To prevent bugs and make code more predictable',
      'To improve performance',
      'To follow functional programming',
      'To reduce memory usage'
    ],
    correctAnswer: 'To prevent bugs and make code more predictable',
    explanation: 'Immutable data structures cannot be changed after creation, preventing unexpected modifications.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-86',
    question: 'What is the purpose of error boundaries in React?',
    options: [
      'To catch JavaScript errors anywhere in the component tree and display a fallback UI',
      'To prevent all errors from occurring',
      'To handle network errors only',
      'To improve error logging'
    ],
    correctAnswer: 'To catch JavaScript errors anywhere in the component tree and display a fallback UI',
    explanation: 'Error boundaries prevent the entire app from crashing when errors occur in components.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-87',
    question: 'What is the purpose of defensive programming?',
    options: [
      'To handle unexpected inputs and edge cases gracefully',
      'To prevent all bugs',
      'To add extra validation',
      'To make code more secure'
    ],
    correctAnswer: 'To handle unexpected inputs and edge cases gracefully',
    explanation: 'Defensive programming assumes that things can and will go wrong.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-88',
    question: 'What is the purpose of using structured logging?',
    options: [
      'To make logs easier to parse and analyze programmatically',
      'To make logs more readable',
      'To reduce log size',
      'To improve log performance'
    ],
    correctAnswer: 'To make logs easier to parse and analyze programmatically',
    explanation: 'Structured logging uses consistent formats like JSON for better log processing.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-89',
    question: 'What is the purpose of using different log levels?',
    options: [
      'To categorize log messages by importance and filter them appropriately',
      'To make logs more colorful',
      'To organize logs by type',
      'To improve log readability'
    ],
    correctAnswer: 'To categorize log messages by importance and filter them appropriately',
    explanation: 'Log levels (DEBUG, INFO, WARN, ERROR) help control what gets logged in different environments.',
    category: 'Error Handling',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-90',
    question: 'What is the purpose of using try-catch blocks?',
    options: [
      'To handle exceptions gracefully and prevent application crashes',
      'To catch all errors',
      'To improve error reporting',
      'To follow best practices'
    ],
    correctAnswer: 'To handle exceptions gracefully and prevent application crashes',
    explanation: 'Try-catch blocks allow you to handle exceptions and continue execution.',
    category: 'Error Handling',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-91',
    question: 'What is the purpose of using custom exceptions?',
    options: [
      'To provide more specific error information and better error handling',
      'To create unique error types',
      'To improve error messages',
      'To follow exception handling patterns'
    ],
    correctAnswer: 'To provide more specific error information and better error handling',
    explanation: 'Custom exceptions can carry additional context and help with specific error handling.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-92',
    question: 'What is the purpose of using circuit breakers?',
    options: [
      'To prevent cascading failures by stopping calls to failing services',
      'To break electrical circuits',
      'To stop all network calls',
      'To improve system reliability'
    ],
    correctAnswer: 'To prevent cascading failures by stopping calls to failing services',
    explanation: 'Circuit breakers help maintain system stability when dependencies are failing.',
    category: 'Error Handling',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-93',
    question: 'What is the purpose of using retry mechanisms?',
    options: [
      'To handle transient failures by automatically retrying failed operations',
      'To retry all failed operations',
      'To improve success rates',
      'To handle network issues'
    ],
    correctAnswer: 'To handle transient failures by automatically retrying failed operations',
    explanation: 'Retry mechanisms help handle temporary failures like network timeouts.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-94',
    question: 'What is the purpose of using health checks?',
    options: [
      'To monitor the health and availability of services and dependencies',
      'To check system health',
      'To monitor performance',
      'To detect failures'
    ],
    correctAnswer: 'To monitor the health and availability of services and dependencies',
    explanation: 'Health checks help detect when services are not functioning properly.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-95',
    question: 'What is the purpose of using feature flags?',
    options: [
      'To enable or disable features without deploying new code',
      'To control feature access',
      'To manage feature releases',
      'To test new features'
    ],
    correctAnswer: 'To enable or disable features without deploying new code',
    explanation: 'Feature flags allow for safer deployments and gradual feature rollouts.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-96',
    question: 'What is the purpose of using dependency injection?',
    options: [
      'To reduce coupling between classes and make code more testable',
      'To inject dependencies',
      'To improve performance',
      'To follow design patterns'
    ],
    correctAnswer: 'To reduce coupling between classes and make code more testable',
    explanation: 'Dependency injection makes code more modular and easier to test.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-97',
    question: 'What is the purpose of using composition over inheritance?',
    options: [
      'To achieve code reuse while avoiding the problems of inheritance',
      'To use composition patterns',
      'To improve performance',
      'To follow best practices'
    ],
    correctAnswer: 'To achieve code reuse while avoiding the problems of inheritance',
    explanation: 'Composition is often more flexible and less prone to issues than inheritance.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-98',
    question: 'What is the purpose of using interfaces?',
    options: [
      'To define contracts and enable loose coupling between components',
      'To create abstract classes',
      'To define method signatures',
      'To follow object-oriented principles'
    ],
    correctAnswer: 'To define contracts and enable loose coupling between components',
    explanation: 'Interfaces define what methods a class must implement without specifying how.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-99',
    question: 'What is the purpose of using abstract classes?',
    options: [
      'To provide a base class with some implementation and force subclasses to implement others',
      'To create abstract methods',
      'To define base functionality',
      'To follow inheritance patterns'
    ],
    correctAnswer: 'To provide a base class with some implementation and force subclasses to implement others',
    explanation: 'Abstract classes can provide default implementations while requiring subclasses to implement abstract methods.',
    category: 'SOLID Principles',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-100',
    question: 'What is the purpose of code reviews?',
    options: [
      'To improve code quality, catch bugs early, and share knowledge among team members',
      'To approve code changes',
      'To check code standards',
      'To validate functionality'
    ],
    correctAnswer: 'To improve code quality, catch bugs early, and share knowledge among team members',
    explanation: 'Code reviews are a collaborative process that improves both code and team knowledge.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-101',
    question: 'What is a code smell?',
    options: [
      'A symptom in the code that may indicate a deeper problem',
      'A bug in the code',
      'A feature request',
      'A performance optimization'
    ],
    correctAnswer: 'A symptom in the code that may indicate a deeper problem',
    explanation: 'A code smell is a surface indication that usually corresponds to a deeper problem in the system.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-102',
    question: 'What is the purpose of the YAGNI principle?',
    options: [
      'To avoid implementing features until they are actually needed',
      'To always implement all possible features',
      'To optimize code for performance',
      'To write code as quickly as possible'
    ],
    correctAnswer: 'To avoid implementing features until they are actually needed',
    explanation: 'YAGNI stands for "You Aren’t Gonna Need It" and helps prevent overengineering.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-103',
    question: 'What is the purpose of the KISS principle?',
    options: [
      'To keep code as simple as possible',
      'To write code quickly',
      'To use as few lines as possible',
      'To avoid using comments'
    ],
    correctAnswer: 'To keep code as simple as possible',
    explanation: 'KISS stands for "Keep It Simple, Stupid" and encourages simplicity in design and implementation.',
    category: 'Clean Code Basics',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-104',
    question: 'What is the purpose of the principle of least astonishment?',
    options: [
      'To ensure code behaves in a way users expect',
      'To surprise users with new features',
      'To make code unpredictable',
      'To avoid documentation'
    ],
    correctAnswer: 'To ensure code behaves in a way users expect',
    explanation: 'The principle of least astonishment means code should behave in a way that least surprises users and developers.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-105',
    question: 'What is a long method code smell?',
    options: [
      'A method that is too long and does too much',
      'A method that is too short',
      'A method with too many parameters',
      'A method that is never called'
    ],
    correctAnswer: 'A method that is too long and does too much',
    explanation: 'Long methods are hard to read, test, and maintain. They should be broken into smaller methods.',
    category: 'Code Smells',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-106',
    question: 'What is a god object code smell?',
    options: [
      'An object that knows too much or does too much',
      'An object that is never used',
      'An object with a short name',
      'An object that is immutable'
    ],
    correctAnswer: 'An object that knows too much or does too much',
    explanation: 'God objects violate the single responsibility principle and make code harder to maintain.',
    category: 'Code Smells',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-107',
    question: 'What is a feature envy code smell?',
    options: [
      'A method that seems more interested in another class than the one it is in',
      'A method that is too long',
      'A method that is never called',
      'A method that has too many parameters'
    ],
    correctAnswer: 'A method that seems more interested in another class than the one it is in',
    explanation: 'Feature envy occurs when a method accesses the data of another object more than its own.',
    category: 'Code Smells',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-108',
    question: 'What is a data clump code smell?',
    options: [
      'A group of variables that are always used together',
      'A variable that is never used',
      'A class with too many methods',
      'A function with no parameters'
    ],
    correctAnswer: 'A group of variables that are always used together',
    explanation: 'Data clumps should be replaced with objects or data structures.',
    category: 'Code Smells',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-109',
    question: 'What is a primitive obsession code smell?',
    options: [
      'Using primitive types instead of small objects for simple tasks',
      'Using too many objects',
      'Using primitive types for performance',
      'Using objects for everything'
    ],
    correctAnswer: 'Using primitive types instead of small objects for simple tasks',
    explanation: 'Primitive obsession can make code less expressive and harder to maintain.',
    category: 'Code Smells',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-110',
    question: 'What is a switch statement code smell?',
    options: [
      'Using switch statements instead of polymorphism',
      'Using too many switch statements',
      'Using switch statements for performance',
      'Using switch statements in loops'
    ],
    correctAnswer: 'Using switch statements instead of polymorphism',
    explanation: 'Switch statements can often be replaced with polymorphism for better extensibility.',
    category: 'Code Smells',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-111',
    question: 'What is a shotgun surgery code smell?',
    options: [
      'Making many small changes to different classes when a single change is made',
      'Making a single change in one class',
      'Making changes to unrelated classes',
      'Making changes to test code only'
    ],
    correctAnswer: 'Making many small changes to different classes when a single change is made',
    explanation: 'Shotgun surgery makes code harder to maintain and increases the risk of bugs.',
    category: 'Code Smells',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-112',
    question: 'What is a parallel inheritance hierarchy code smell?',
    options: [
      'When every time you create a subclass of one class, you also create a subclass of another',
      'When you have multiple inheritance',
      'When you have deep inheritance',
      'When you have no inheritance'
    ],
    correctAnswer: 'When every time you create a subclass of one class, you also create a subclass of another',
    explanation: 'Parallel inheritance hierarchies make code harder to maintain and extend.',
    category: 'Code Smells',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-113',
    question: 'What is a speculative generality code smell?',
    options: [
      'Adding code for future use that is not currently needed',
      'Generalizing code for reuse',
      'Using generic types',
      'Using general-purpose libraries'
    ],
    correctAnswer: 'Adding code for future use that is not currently needed',
    explanation: 'Speculative generality leads to unnecessary complexity and maintenance burden.',
    category: 'Code Smells',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-114',
    question: 'What is the purpose of code documentation?',
    options: [
      'To explain the intent, usage, and limitations of code',
      'To document every line of code',
      'To satisfy company requirements',
      'To make code longer'
    ],
    correctAnswer: 'To explain the intent, usage, and limitations of code',
    explanation: 'Good documentation helps others understand and use your code correctly.',
    category: 'Documentation',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-115',
    question: 'What is the purpose of API documentation?',
    options: [
      'To describe how to use the public interface of a library or service',
      'To document internal implementation details',
      'To provide code samples only',
      'To satisfy legal requirements'
    ],
    correctAnswer: 'To describe how to use the public interface of a library or service',
    explanation: 'API documentation helps users understand how to interact with your code.',
    category: 'Documentation',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-116',
    question: 'What is the purpose of inline comments?',
    options: [
      'To explain complex or non-obvious code',
      'To document every line',
      'To add jokes to code',
      'To increase code length'
    ],
    correctAnswer: 'To explain complex or non-obvious code',
    explanation: 'Inline comments should clarify code that is not immediately clear.',
    category: 'Documentation',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-117',
    question: 'What is the purpose of docstrings in Python?',
    options: [
      'To provide documentation for modules, classes, methods, and functions',
      'To add comments to code',
      'To document variables',
      'To satisfy linters'
    ],
    correctAnswer: 'To provide documentation for modules, classes, methods, and functions',
    explanation: 'Docstrings are used to document Python code and can be accessed via the help() function.',
    category: 'Documentation',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-118',
    question: 'What is the purpose of external documentation?',
    options: [
      'To provide guides, tutorials, and reference material outside the codebase',
      'To document internal code',
      'To provide code samples',
      'To satisfy legal requirements'
    ],
    correctAnswer: 'To provide guides, tutorials, and reference material outside the codebase',
    explanation: 'External documentation helps users and developers understand and use the software.',
    category: 'Documentation',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-119',
    question: 'What is the purpose of refactoring code smells?',
    options: [
      'To improve code quality and maintainability',
      'To add new features',
      'To fix bugs',
      'To optimize performance'
    ],
    correctAnswer: 'To improve code quality and maintainability',
    explanation: 'Refactoring code smells helps keep the codebase healthy and maintainable.',
    category: 'Refactoring',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-120',
    question: 'What is the purpose of automated code formatting tools?',
    options: [
      'To enforce consistent code style automatically',
      'To write code for you',
      'To optimize code',
      'To add comments'
    ],
    correctAnswer: 'To enforce consistent code style automatically',
    explanation: 'Automated formatting tools like Prettier and Black help maintain a consistent code style.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-121',
    question: 'What is the purpose of static code analysis?',
    options: [
      'To analyze code for potential errors and code smells without executing it',
      'To run code tests',
      'To optimize code',
      'To generate documentation'
    ],
    correctAnswer: 'To analyze code for potential errors and code smells without executing it',
    explanation: 'Static analysis tools help catch bugs and maintain code quality before runtime.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-122',
    question: 'What is the purpose of code linters?',
    options: [
      'To check code for style and programming errors',
      'To run code tests',
      'To optimize code',
      'To generate documentation'
    ],
    correctAnswer: 'To check code for style and programming errors',
    explanation: 'Linters help enforce coding standards and catch common mistakes.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-123',
    question: 'What is the purpose of code metrics?',
    options: [
      'To measure code complexity, maintainability, and quality',
      'To measure code length',
      'To measure code speed',
      'To measure code size'
    ],
    correctAnswer: 'To measure code complexity, maintainability, and quality',
    explanation: 'Code metrics provide quantitative measures to help assess code health.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-124',
    question: 'What is the purpose of code ownership?',
    options: [
      'To ensure someone is responsible for maintaining and improving code',
      'To assign code to a team',
      'To track code changes',
      'To enforce code reviews'
    ],
    correctAnswer: 'To ensure someone is responsible for maintaining and improving code',
    explanation: 'Code ownership helps ensure code is maintained and improved over time.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-125',
    question: 'What is the purpose of pair programming?',
    options: [
      'To improve code quality and share knowledge by having two developers work together',
      'To write code faster',
      'To reduce bugs',
      'To follow agile practices'
    ],
    correctAnswer: 'To improve code quality and share knowledge by having two developers work together',
    explanation: 'Pair programming helps catch mistakes early and facilitates knowledge sharing.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-126',
    question: 'What is the purpose of continuous integration (CI)?',
    options: [
      'To automatically build and test code changes as they are committed',
      'To integrate all code at once',
      'To merge code branches',
      'To deploy code automatically'
    ],
    correctAnswer: 'To automatically build and test code changes as they are committed',
    explanation: 'CI helps catch integration issues early and ensures code quality.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-127',
    question: 'What is the purpose of continuous deployment (CD)?',
    options: [
      'To automatically deploy code changes to production after passing tests',
      'To deploy code manually',
      'To test code in production',
      'To rollback deployments'
    ],
    correctAnswer: 'To automatically deploy code changes to production after passing tests',
    explanation: 'CD automates the deployment process, reducing human error and deployment time.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-128',
    question: 'What is the purpose of blue-green deployment?',
    options: [
      'To deploy new versions with zero downtime by switching between identical environments',
      'To use blue and green colors in the UI',
      'To deploy to two different servers',
      'To test code in production'
    ],
    correctAnswer: 'To deploy new versions with zero downtime by switching between identical environments',
    explanation: 'Blue-green deployment minimizes downtime and allows quick rollbacks.',
    category: 'Code Quality',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-129',
    question: 'What is the purpose of canary deployment?',
    options: [
      'To gradually roll out changes to a small subset of users before full deployment',
      'To deploy to a single server',
      'To test code with real users',
      'To monitor deployment health'
    ],
    correctAnswer: 'To gradually roll out changes to a small subset of users before full deployment',
    explanation: 'Canary deployments help detect issues early and minimize risk.',
    category: 'Code Quality',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-130',
    question: 'What is the purpose of semantic versioning?',
    options: [
      'To communicate the nature of changes in version numbers (MAJOR.MINOR.PATCH)',
      'To make version numbers meaningful',
      'To track code changes',
      'To organize releases'
    ],
    correctAnswer: 'To communicate the nature of changes in version numbers (MAJOR.MINOR.PATCH)',
    explanation: 'Semantic versioning helps users understand the impact of updates.',
    category: 'Code Quality',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-131',
    question: 'What is the purpose of changelogs?',
    options: [
      'To document all notable changes between versions of software',
      'To track all code changes',
      'To list bug fixes only',
      'To document new features only'
    ],
    correctAnswer: 'To document all notable changes between versions of software',
    explanation: 'Changelogs help users understand what has changed in each release.',
    category: 'Documentation',
    difficulty: 'Easy'
  },
  {
    id: 'clean-code-132',
    question: 'What is the purpose of API versioning?',
    options: [
      'To maintain backward compatibility while evolving APIs',
      'To create multiple APIs',
      'To track API changes',
      'To organize API documentation'
    ],
    correctAnswer: 'To maintain backward compatibility while evolving APIs',
    explanation: 'API versioning allows clients to continue using old versions while new features are added.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-133',
    question: 'What is the purpose of backward compatibility?',
    options: [
      'To ensure new versions work with existing clients and data',
      'To support old browsers',
      'To maintain old code',
      'To prevent breaking changes'
    ],
    correctAnswer: 'To ensure new versions work with existing clients and data',
    explanation: 'Backward compatibility reduces the impact of updates on existing users.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-134',
    question: 'What is the purpose of forward compatibility?',
    options: [
      'To ensure current versions can work with future versions',
      'To support future browsers',
      'To prepare for future changes',
      'To maintain future code'
    ],
    correctAnswer: 'To ensure current versions can work with future versions',
    explanation: 'Forward compatibility helps with gradual migrations and updates.',
    category: 'Code Quality',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-135',
    question: 'What is the purpose of graceful degradation?',
    options: [
      'To ensure software continues to function with reduced features when components fail',
      'To reduce software quality',
      'To handle errors gracefully',
      'To maintain performance'
    ],
    correctAnswer: 'To ensure software continues to function with reduced features when components fail',
    explanation: 'Graceful degradation provides a better user experience when problems occur.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-136',
    question: 'What is the purpose of progressive enhancement?',
    options: [
      'To start with basic functionality and add advanced features for capable browsers',
      'To progressively improve code quality',
      'To add features gradually',
      'To enhance performance over time'
    ],
    correctAnswer: 'To start with basic functionality and add advanced features for capable browsers',
    explanation: 'Progressive enhancement ensures accessibility while providing enhanced experiences.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-137',
    question: 'What is the purpose of defensive copying?',
    options: [
      'To create copies of mutable objects to prevent unintended modifications',
      'To copy all objects',
      'To prevent object sharing',
      'To improve performance'
    ],
    correctAnswer: 'To create copies of mutable objects to prevent unintended modifications',
    explanation: 'Defensive copying helps maintain encapsulation and prevent bugs.',
    category: 'Clean Code Basics',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-138',
    question: 'What is the purpose of fail-fast programming?',
    options: [
      'To detect and report errors as early as possible',
      'To make programs fail quickly',
      'To handle errors immediately',
      'To prevent program crashes'
    ],
    correctAnswer: 'To detect and report errors as early as possible',
    explanation: 'Fail-fast programming helps identify problems quickly and makes debugging easier.',
    category: 'Error Handling',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-139',
    question: 'What is the purpose of the Tell-Don\'t-Ask principle?',
    options: [
      'To tell objects what to do rather than asking about their state',
      'To avoid asking questions',
      'To use imperative programming',
      'To follow object-oriented principles'
    ],
    correctAnswer: 'To tell objects what to do rather than asking about their state',
    explanation: 'Tell-Don\'t-Ask promotes better encapsulation and reduces coupling.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-140',
    question: 'What is the purpose of the Law of Demeter (LoD)?',
    options: [
      'To limit the knowledge an object has about other objects',
      'To reduce object coupling',
      'To follow encapsulation principles',
      'To improve object design'
    ],
    correctAnswer: 'To limit the knowledge an object has about other objects',
    explanation: 'LoD helps reduce coupling and improve maintainability.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-141',
    question: 'What is the purpose of the Hollywood Principle?',
    options: [
      'To let the framework call your code rather than calling the framework',
      'To follow Hollywood coding standards',
      'To use callback patterns',
      'To implement dependency injection'
    ],
    correctAnswer: 'To let the framework call your code rather than calling the framework',
    explanation: 'The Hollywood Principle is "Don\'t call us, we\'ll call you" - a form of inversion of control.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-142',
    question: 'What is the purpose of the Principle of Least Privilege?',
    options: [
      'To give code only the permissions it needs to function',
      'To restrict all permissions',
      'To follow security best practices',
      'To minimize access rights'
    ],
    correctAnswer: 'To give code only the permissions it needs to function',
    explanation: 'This principle improves security by limiting potential damage from bugs or attacks.',
    category: 'Code Quality',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-143',
    question: 'What is the purpose of the Principle of Least Surprise?',
    options: [
      'To make code behave in ways that users expect',
      'To avoid surprising users',
      'To follow user expectations',
      'To make code predictable'
    ],
    correctAnswer: 'To make code behave in ways that users expect',
    explanation: 'This principle ensures that code behaves in intuitive and expected ways.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-144',
    question: 'What is the purpose of the Principle of Least Effort?',
    options: [
      'To make common tasks easy and uncommon tasks possible',
      'To minimize work required',
      'To optimize for common use cases',
      'To reduce complexity'
    ],
    correctAnswer: 'To make common tasks easy and uncommon tasks possible',
    explanation: 'This principle guides API design to prioritize common use cases.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-145',
    question: 'What is the purpose of the Principle of Least Knowledge?',
    options: [
      'To minimize dependencies between objects',
      'To reduce object coupling',
      'To follow encapsulation',
      'To limit object interactions'
    ],
    correctAnswer: 'To minimize dependencies between objects',
    explanation: 'This principle is another name for the Law of Demeter.',
    category: 'SOLID Principles',
    difficulty: 'Hard'
  },
  {
    id: 'clean-code-146',
    question: 'What is the purpose of the Principle of Least Astonishment?',
    options: [
      'To make code behave in the most obvious way',
      'To avoid surprising behavior',
      'To follow user expectations',
      'To make code intuitive'
    ],
    correctAnswer: 'To make code behave in the most obvious way',
    explanation: 'This principle ensures that code behaves as users would naturally expect.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-147',
    question: 'What is the purpose of the Principle of Least Action?',
    options: [
      'To minimize the number of steps required to accomplish a task',
      'To reduce code complexity',
      'To optimize performance',
      'To simplify workflows'
    ],
    correctAnswer: 'To minimize the number of steps required to accomplish a task',
    explanation: 'This principle guides UX and API design to reduce friction.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-148',
    question: 'What is the purpose of the Principle of Least Resistance?',
    options: [
      'To make the easiest way to do something the correct way',
      'To avoid difficult solutions',
      'To follow the path of least resistance',
      'To simplify decision making'
    ],
    correctAnswer: 'To make the easiest way to do something the correct way',
    explanation: 'This principle guides design to make the right thing easy to do.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-149',
    question: 'What is the purpose of the Principle of Least Commitment?',
    options: [
      'To avoid making decisions until necessary',
      'To delay implementation',
      'To avoid over-engineering',
      'To follow YAGNI principle'
    ],
    correctAnswer: 'To avoid making decisions until necessary',
    explanation: 'This principle helps avoid premature optimization and over-engineering.',
    category: 'Clean Code Basics',
    difficulty: 'Medium'
  },
  {
    id: 'clean-code-150',
    question: 'What is the purpose of the Principle of Least Cost?',
    options: [
      'To minimize the total cost of ownership of software',
      'To reduce development costs',
      'To optimize for cost efficiency',
      'To minimize resource usage'
    ],
    correctAnswer: 'To minimize the total cost of ownership of software',
    explanation: 'This principle considers development, maintenance, and operational costs.',
    category: 'Code Quality',
    difficulty: 'Hard'
  }
];
  