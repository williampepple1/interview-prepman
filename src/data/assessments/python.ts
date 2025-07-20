import { AssessmentQuestion } from '../../types';

export const pythonAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'python-1',
    question: 'What is Python?',
    options: [
      'A high-level, interpreted programming language known for its simplicity and readability',
      'A low-level programming language for system programming',
      'A markup language for web development',
      'A database management system'
    ],
    correctAnswer: 'A high-level, interpreted programming language known for its simplicity and readability',
    explanation: 'Python is a high-level, interpreted programming language that emphasizes code readability with its notable use of significant whitespace.',
    category: 'Python Basics',
    difficulty: 'Easy'
  },
  {
    id: 'python-2',
    question: 'What is the correct way to create a variable in Python?',
    options: [
      'variable_name = value',
      'var variable_name = value',
      'let variable_name = value',
      'const variable_name = value'
    ],
    correctAnswer: 'variable_name = value',
    explanation: 'Python uses simple assignment with the equals sign. No keywords like var, let, or const are needed.',
    category: 'Python Syntax',
    difficulty: 'Easy'
  },
  {
    id: 'python-3',
    question: 'What is the output of: print(type(3.14))?',
    options: [
      '<class \'float\'>',
      '<class \'int\'>',
      '<class \'number\'>',
      '<class \'decimal\'>'
    ],
    correctAnswer: '<class \'float\'>',
    explanation: '3.14 is a floating-point number, so type() returns the float class.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-4',
    question: 'What is the correct way to create a list in Python?',
    options: [
      'my_list = [1, 2, 3, 4, 5]',
      'my_list = {1, 2, 3, 4, 5}',
      'my_list = (1, 2, 3, 4, 5)',
      'my_list = <1, 2, 3, 4, 5>'
    ],
    correctAnswer: 'my_list = [1, 2, 3, 4, 5]',
    explanation: 'Lists in Python are created using square brackets []. Curly braces {} are for sets/dictionaries, and parentheses () are for tuples.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-5',
    question: 'What is the output of: print("Hello" + " " + "World")?',
    options: [
      'Hello World',
      'HelloWorld',
      'Hello + World',
      'Error'
    ],
    correctAnswer: 'Hello World',
    explanation: 'The + operator concatenates strings, and the space between quotes adds a space between the words.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-6',
    question: 'What is the correct way to define a function in Python?',
    options: [
      'def function_name():',
      'function function_name():',
      'def function_name():',
      'func function_name():'
    ],
    correctAnswer: 'def function_name():',
    explanation: 'Python uses the def keyword to define functions, followed by the function name and parentheses.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-7',
    question: 'What is the output of: print(len("Python"))?',
    options: [
      '6',
      '5',
      '7',
      'Error'
    ],
    correctAnswer: '6',
    explanation: 'The len() function returns the length of a string. "Python" has 6 characters.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-8',
    question: 'What is the correct way to create a tuple in Python?',
    options: [
      'my_tuple = (1, 2, 3)',
      'my_tuple = [1, 2, 3]',
      'my_tuple = {1, 2, 3}',
      'my_tuple = <1, 2, 3>'
    ],
    correctAnswer: 'my_tuple = (1, 2, 3)',
    explanation: 'Tuples are created using parentheses (). They are immutable, unlike lists which use square brackets [].',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-9',
    question: 'What is the output of: print(2 ** 3)?',
    options: [
      '8',
      '6',
      '5',
      'Error'
    ],
    correctAnswer: '8',
    explanation: 'The ** operator is the exponentiation operator. 2 ** 3 means 2 raised to the power of 3, which equals 8.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-10',
    question: 'What is the correct way to create a dictionary in Python?',
    options: [
      'my_dict = {"key": "value"}',
      'my_dict = ["key": "value"]',
      'my_dict = ("key": "value")',
      'my_dict = <"key": "value">'
    ],
    correctAnswer: 'my_dict = {"key": "value"}',
    explanation: 'Dictionaries are created using curly braces {} with key-value pairs separated by colons.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-11',
    question: 'What is the output of: print(10 // 3)?',
    options: [
      '3',
      '3.333...',
      '3.0',
      'Error'
    ],
    correctAnswer: '3',
    explanation: 'The // operator is floor division, which returns the largest integer less than or equal to the division result.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-12',
    question: 'What is the correct way to check if a key exists in a dictionary?',
    options: [
      'if key in my_dict:',
      'if my_dict.has_key(key):',
      'if my_dict.contains(key):',
      'if key exists in my_dict:'
    ],
    correctAnswer: 'if key in my_dict:',
    explanation: 'The in operator is used to check if a key exists in a dictionary. The has_key() method is deprecated in Python 3.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-13',
    question: 'What is the output of: print(range(5))?',
    options: [
      'range(0, 5)',
      '[0, 1, 2, 3, 4]',
      '(0, 1, 2, 3, 4)',
      'Error'
    ],
    correctAnswer: 'range(0, 5)',
    explanation: 'range(5) returns a range object, not a list. To get a list, you would use list(range(5)).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-14',
    question: 'What is the correct way to import a module in Python?',
    options: [
      'import module_name',
      'include module_name',
      'require module_name',
      'using module_name'
    ],
    correctAnswer: 'import module_name',
    explanation: 'Python uses the import keyword to import modules. Other languages use different keywords like include, require, or using.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-15',
    question: 'What is the output of: print("Hello" * 3)?',
    options: [
      'HelloHelloHello',
      'Hello 3',
      'HelloHello',
      'Error'
    ],
    correctAnswer: 'HelloHelloHello',
    explanation: 'The * operator with strings repeats the string the specified number of times.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-16',
    question: 'What is the correct way to create a set in Python?',
    options: [
      'my_set = {1, 2, 3}',
      'my_set = [1, 2, 3]',
      'my_set = (1, 2, 3)',
      'my_set = <1, 2, 3>'
    ],
    correctAnswer: 'my_set = {1, 2, 3}',
    explanation: 'Sets are created using curly braces {} with comma-separated values. They contain unique, unordered elements.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-17',
    question: 'What is the output of: print(True and False)?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The and operator returns True only if both operands are True. Since False is one of the operands, the result is False.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-18',
    question: 'What is the correct way to handle exceptions in Python?',
    options: [
      'try: ... except Exception: ...',
      'try: ... catch Exception: ...',
      'try: ... handle Exception: ...',
      'try: ... rescue Exception: ...'
    ],
    correctAnswer: 'try: ... except Exception: ...',
    explanation: 'Python uses try/except for exception handling. Other languages use try/catch or try/rescue.',
    category: 'Python Exception Handling',
    difficulty: 'Medium'
  },
  {
    id: 'python-19',
    question: 'What is the output of: print([1, 2, 3] + [4, 5, 6])?',
    options: [
      '[1, 2, 3, 4, 5, 6]',
      '[1, 2, 3][4, 5, 6]',
      '[5, 7, 9]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5, 6]',
    explanation: 'The + operator with lists concatenates them, creating a new list with all elements from both lists.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-20',
    question: 'What is the correct way to create a class in Python?',
    options: [
      'class MyClass:',
      'class MyClass():',
      'class MyClass(object):',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'All three syntaxes are valid in Python. In Python 3, all classes inherit from object by default.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-21',
    question: 'What is the output of: print("hello".upper())?',
    options: [
      'HELLO',
      'hello',
      'Hello',
      'Error'
    ],
    correctAnswer: 'HELLO',
    explanation: 'The upper() method converts all characters in a string to uppercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-22',
    question: 'What is the correct way to check if a value is in a list?',
    options: [
      'if value in my_list:',
      'if my_list.contains(value):',
      'if my_list.has(value):',
      'if value exists in my_list:'
    ],
    correctAnswer: 'if value in my_list:',
    explanation: 'The in operator is used to check if a value exists in a list, tuple, or other iterable.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-23',
    question: 'What is the output of: print(round(3.7))?',
    options: [
      '4',
      '3',
      '3.7',
      'Error'
    ],
    correctAnswer: '4',
    explanation: 'The round() function rounds a number to the nearest integer. 3.7 rounds up to 4.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-24',
    question: 'What is the correct way to create a lambda function in Python?',
    options: [
      'lambda x: x * 2',
      'def lambda x: x * 2',
      'function lambda x: x * 2',
      'lambda function x: x * 2'
    ],
    correctAnswer: 'lambda x: x * 2',
    explanation: 'Lambda functions are created using the lambda keyword followed by parameters and an expression.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-25',
    question: 'What is the output of: print(type([]))?',
    options: [
      '<class \'list\'>',
      '<class \'array\'>',
      '<class \'sequence\'>',
      '<class \'collection\'>'
    ],
    correctAnswer: '<class \'list\'>',
    explanation: 'Empty square brackets create an empty list, so type() returns the list class.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-26',
    question: 'What is the correct way to remove an item from a list by value?',
    options: [
      'my_list.remove(value)',
      'my_list.delete(value)',
      'my_list.pop(value)',
      'del my_list[value]'
    ],
    correctAnswer: 'my_list.remove(value)',
    explanation: 'The remove() method removes the first occurrence of a value from a list.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-27',
    question: 'What is the output of: print(abs(-5))?',
    options: [
      '5',
      '-5',
      '0',
      'Error'
    ],
    correctAnswer: '5',
    explanation: 'The abs() function returns the absolute value of a number, which is always positive.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-28',
    question: 'What is the correct way to create a string with quotes inside it?',
    options: [
      'text = "It\'s a string"',
      'text = "It"s a string"',
      'text = "It\'s a string"',
      'All of the above'
    ],
    correctAnswer: 'text = "It\'s a string"',
    explanation: 'You can escape quotes with a backslash or use different quote types to avoid conflicts.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-29',
    question: 'What is the output of: print(max([1, 5, 3, 9, 2]))?',
    options: [
      '9',
      '1',
      '5',
      'Error'
    ],
    correctAnswer: '9',
    explanation: 'The max() function returns the largest value in an iterable. In this case, 9 is the maximum value.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-30',
    question: 'What is the correct way to check if a string starts with a specific prefix?',
    options: [
      'if my_string.startswith(prefix):',
      'if my_string.begins_with(prefix):',
      'if my_string.starts(prefix):',
      'if prefix in my_string[0]:'
    ],
    correctAnswer: 'if my_string.startswith(prefix):',
    explanation: 'The startswith() method checks if a string begins with the specified prefix.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-31',
    question: 'What is the output of: print(sorted([3, 1, 4, 1, 5]))?',
    options: [
      '[1, 1, 3, 4, 5]',
      '[3, 1, 4, 1, 5]',
      '[5, 4, 3, 1, 1]',
      'Error'
    ],
    correctAnswer: '[1, 1, 3, 4, 5]',
    explanation: 'The sorted() function returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-32',
    question: 'What is the correct way to get the length of a dictionary?',
    options: [
      'len(my_dict)',
      'my_dict.length()',
      'my_dict.size()',
      'my_dict.count()'
    ],
    correctAnswer: 'len(my_dict)',
    explanation: 'The len() function returns the number of key-value pairs in a dictionary.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-33',
    question: 'What is the output of: print("Python"[1:4])?',
    options: [
      'yth',
      'Pyt',
      'ytho',
      'Error'
    ],
    correctAnswer: 'yth',
    explanation: 'String slicing [1:4] returns characters from index 1 to 3 (exclusive of 4).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-34',
    question: 'What is the correct way to add an item to a list?',
    options: [
      'my_list.append(item)',
      'my_list.add(item)',
      'my_list.insert(item)',
      'my_list.push(item)'
    ],
    correctAnswer: 'my_list.append(item)',
    explanation: 'The append() method adds an item to the end of a list.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-35',
    question: 'What is the output of: print(bool(0))?',
    options: [
      'False',
      'True',
      '0',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The bool() function converts values to boolean. 0, empty sequences, and None are considered False.',
    category: 'Python Data Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-36',
    question: 'What is the correct way to check if a file exists in Python?',
    options: [
      'import os; os.path.exists(filename)',
      'import file; file.exists(filename)',
      'import path; path.exists(filename)',
      'import system; system.file_exists(filename)'
    ],
    correctAnswer: 'import os; os.path.exists(filename)',
    explanation: 'The os.path.exists() function checks if a file or directory exists.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-37',
    question: 'What is the output of: print(list(range(3, 7)))?',
    options: [
      '[3, 4, 5, 6]',
      '[3, 4, 5, 6, 7]',
      '[3, 5, 7]',
      'Error'
    ],
    correctAnswer: '[3, 4, 5, 6]',
    explanation: 'range(3, 7) generates numbers from 3 to 6 (exclusive of 7), and list() converts it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-38',
    question: 'What is the correct way to get all keys from a dictionary?',
    options: [
      'my_dict.keys()',
      'my_dict.get_keys()',
      'my_dict.all_keys()',
      'my_dict.key_list()'
    ],
    correctAnswer: 'my_dict.keys()',
    explanation: 'The keys() method returns a view object of all keys in the dictionary.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-39',
    question: 'What is the output of: print("hello world".title())?',
    options: [
      'Hello World',
      'hello world',
      'HELLO WORLD',
      'Error'
    ],
    correctAnswer: 'Hello World',
    explanation: 'The title() method capitalizes the first letter of each word in a string.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-40',
    question: 'What is the correct way to create a list comprehension?',
    options: [
      '[x for x in range(5)]',
      'list(x for x in range(5))',
      'for x in range(5): list.append(x)',
      'All of the above'
    ],
    correctAnswer: '[x for x in range(5)]',
    explanation: 'List comprehensions provide a concise way to create lists based on existing sequences.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-41',
    question: 'What is the output of: print(sum([1, 2, 3, 4, 5]))?',
    options: [
      '15',
      '10',
      '20',
      'Error'
    ],
    correctAnswer: '15',
    explanation: 'The sum() function returns the sum of all items in an iterable. 1+2+3+4+5 = 15.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-42',
    question: 'What is the correct way to check if a string contains only digits?',
    options: [
      'my_string.isdigit()',
      'my_string.isnumeric()',
      'my_string.isdecimal()',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'All three methods check if a string contains only digits, but they have slight differences in what they consider valid.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-43',
    question: 'What is the output of: print(any([False, False, True]))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The any() function returns True if at least one element in the iterable is True.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-44',
    question: 'What is the correct way to reverse a list in place?',
    options: [
      'my_list.reverse()',
      'my_list = my_list[::-1]',
      'my_list = reversed(my_list)',
      'All of the above'
    ],
    correctAnswer: 'my_list.reverse()',
    explanation: 'The reverse() method reverses the list in place, while the other options create new lists.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-45',
    question: 'What is the output of: print(chr(65))?',
    options: [
      'A',
      '65',
      'a',
      'Error'
    ],
    correctAnswer: 'A',
    explanation: 'The chr() function returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-46',
    question: 'What is the correct way to get the current working directory?',
    options: [
      'import os; os.getcwd()',
      'import path; path.current()',
      'import system; system.cwd()',
      'import file; file.cwd()'
    ],
    correctAnswer: 'import os; os.getcwd()',
    explanation: 'The os.getcwd() function returns the current working directory as a string.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-47',
    question: 'What is the output of: print(all([True, True, False]))?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The all() function returns True only if all elements in the iterable are True.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-48',
    question: 'What is the correct way to convert a string to an integer?',
    options: [
      'int(my_string)',
      'str_to_int(my_string)',
      'convert_int(my_string)',
      'parse_int(my_string)'
    ],
    correctAnswer: 'int(my_string)',
    explanation: 'The int() function converts a string to an integer, provided the string represents a valid number.',
    category: 'Python Type Conversion',
    difficulty: 'Easy'
  },
  {
    id: 'python-49',
    question: 'What is the output of: print(ord("A"))?',
    options: [
      '65',
      'A',
      '97',
      'Error'
    ],
    correctAnswer: '65',
    explanation: 'The ord() function returns the Unicode code point of a given character. "A" has the code point 65.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-50',
    question: 'What is the correct way to create a generator expression?',
    options: [
      '(x for x in range(5))',
      '[x for x in range(5)]',
      '{x for x in range(5)}',
      '<x for x in range(5)>'
    ],
    correctAnswer: '(x for x in range(5))',
    explanation: 'Generator expressions use parentheses () and create an iterator that yields values on demand.',
    category: 'Python Generators',
    difficulty: 'Hard'
  },
  {
    id: 'python-51',
    question: 'What is the output of: print("hello".replace("l", "x"))?',
    options: [
      'hexxo',
      'hello',
      'hexo',
      'Error'
    ],
    correctAnswer: 'hexxo',
    explanation: 'The replace() method replaces all occurrences of the first argument with the second argument.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-52',
    question: 'What is the correct way to create a virtual environment in Python?',
    options: [
      'python -m venv myenv',
      'python create venv myenv',
      'python virtual myenv',
      'python env myenv'
    ],
    correctAnswer: 'python -m venv myenv',
    explanation: 'The venv module is used to create virtual environments. The -m flag runs the module as a script.',
    category: 'Python Environment',
    difficulty: 'Medium'
  },
  {
    id: 'python-53',
    question: 'What is the output of: print([1, 2, 3] * 2)?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      '[1, 2, 3][1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: 'The * operator with lists repeats the list the specified number of times.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-54',
    question: 'What is the correct way to import a specific function from a module?',
    options: [
      'from module_name import function_name',
      'import function_name from module_name',
      'include function_name from module_name',
      'require function_name from module_name'
    ],
    correctAnswer: 'from module_name import function_name',
    explanation: 'The from...import syntax allows you to import specific functions or classes from a module.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-55',
    question: 'What is the output of: print("Python".find("th"))?',
    options: [
      '2',
      '3',
      '-1',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The find() method returns the index of the first occurrence of the substring. "th" starts at index 2.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-56',
    question: 'What is the correct way to check if a variable is None?',
    options: [
      'if variable is None:',
      'if variable == None:',
      'if variable is null:',
      'if variable == null:'
    ],
    correctAnswer: 'if variable is None:',
    explanation: 'In Python, use "is None" to check for None, as it checks for identity rather than equality.',
    category: 'Python Comparison',
    difficulty: 'Medium'
  },
  {
    id: 'python-57',
    question: 'What is the output of: print(divmod(10, 3))?',
    options: [
      '(3, 1)',
      '(3.333..., 1)',
      '(3, 0)',
      'Error'
    ],
    correctAnswer: '(3, 1)',
    explanation: 'divmod() returns a tuple containing the quotient and remainder of division. 10 ÷ 3 = 3 remainder 1.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-58',
    question: 'What is the correct way to create a dictionary comprehension?',
    options: [
      '{key: value for key, value in items}',
      'dict(key: value for key, value in items)',
      '[key: value for key, value in items]',
      '(key: value for key, value in items)'
    ],
    correctAnswer: '{key: value for key, value in items}',
    explanation: 'Dictionary comprehensions use curly braces {} and create key-value pairs.',
    category: 'Python Comprehensions',
    difficulty: 'Hard'
  },
  {
    id: 'python-59',
    question: 'What is the output of: print("hello".split())?',
    options: [
      '[\'hello\']',
      '[\'h\', \'e\', \'l\', \'l\', \'o\']',
      'hello',
      'Error'
    ],
    correctAnswer: '[\'hello\']',
    explanation: 'split() without arguments splits on whitespace. Since "hello" has no spaces, it returns a list with one element.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-60',
    question: 'What is the correct way to get the current date and time?',
    options: [
      'from datetime import datetime; datetime.now()',
      'import time; time.now()',
      'import date; date.now()',
      'import calendar; calendar.now()'
    ],
    correctAnswer: 'from datetime import datetime; datetime.now()',
    explanation: 'The datetime module provides classes for manipulating dates and times.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-61',
    question: 'What is the output of: print(enumerate(["a", "b", "c"]))?',
    options: [
      '<enumerate object>',
      '[(0, \'a\'), (1, \'b\'), (2, \'c\')]',
      '[0, 1, 2]',
      'Error'
    ],
    correctAnswer: '<enumerate object>',
    explanation: 'enumerate() returns an enumerate object. To see the values, you need to convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-62',
    question: 'What is the correct way to read a file in Python?',
    options: [
      'with open("file.txt", "r") as f: content = f.read()',
      'file.read("file.txt")',
      'read_file("file.txt")',
      'open("file.txt").read()'
    ],
    correctAnswer: 'with open("file.txt", "r") as f: content = f.read()',
    explanation: 'The with statement ensures the file is properly closed after reading.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-63',
    question: 'What is the output of: print(filter(lambda x: x > 0, [-1, 0, 1, 2]))?',
    options: [
      '<filter object>',
      '[1, 2]',
      '[-1, 0, 1, 2]',
      'Error'
    ],
    correctAnswer: '<filter object>',
    explanation: 'filter() returns a filter object. To see the filtered values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-64',
    question: 'What is the correct way to create a set comprehension?',
    options: [
      '{x for x in range(5)}',
      'set(x for x in range(5))',
      '[x for x in range(5)]',
      '(x for x in range(5))'
    ],
    correctAnswer: '{x for x in range(5)}',
    explanation: 'Set comprehensions use curly braces {} and create sets with unique elements.',
    category: 'Python Comprehensions',
    difficulty: 'Hard'
  },
  {
    id: 'python-65',
    question: 'What is the output of: print("hello".count("l"))?',
    options: [
      '2',
      '1',
      '3',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The count() method returns the number of occurrences of a substring. "l" appears twice in "hello".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-66',
    question: 'What is the correct way to check if a string ends with a specific suffix?',
    options: [
      'my_string.endswith(suffix)',
      'my_string.ends_with(suffix)',
      'my_string.ends(suffix)',
      'my_string.has_suffix(suffix)'
    ],
    correctAnswer: 'my_string.endswith(suffix)',
    explanation: 'The endswith() method checks if a string ends with the specified suffix.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-67',
    question: 'What is the output of: print(map(str, [1, 2, 3]))?',
    options: [
      '<map object>',
      '[\'1\', \'2\', \'3\']',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '<map object>',
    explanation: 'map() returns a map object. To see the mapped values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-68',
    question: 'What is the correct way to get a random number in Python?',
    options: [
      'import random; random.randint(1, 10)',
      'import math; math.random()',
      'import random; random.random()',
      'import random; random.number(1, 10)'
    ],
    correctAnswer: 'import random; random.randint(1, 10)',
    explanation: 'random.randint(a, b) returns a random integer N such that a <= N <= b.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-69',
    question: 'What is the output of: print("hello".upper().lower())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'upper() converts to uppercase, then lower() converts back to lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-70',
    question: 'What is the correct way to create a tuple with one element?',
    options: [
      'my_tuple = (1,)',
      'my_tuple = (1)',
      'my_tuple = 1,',
      'my_tuple = tuple(1)'
    ],
    correctAnswer: 'my_tuple = (1,)',
    explanation: 'A single-element tuple needs a trailing comma to distinguish it from a parenthesized expression.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-71',
    question: 'What is the output of: print(zip([1, 2], [\'a\', \'b\']))?',
    options: [
      '<zip object>',
      '[(1, \'a\'), (2, \'b\')]',
      '[1, 2, \'a\', \'b\']',
      'Error'
    ],
    correctAnswer: '<zip object>',
    explanation: 'zip() returns a zip object. To see the zipped values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-72',
    question: 'What is the correct way to write to a file in Python?',
    options: [
      'with open("file.txt", "w") as f: f.write("content")',
      'write_file("file.txt", "content")',
      'file.write("file.txt", "content")',
      'open("file.txt", "w").write("content")'
    ],
    correctAnswer: 'with open("file.txt", "w") as f: f.write("content")',
    explanation: 'The with statement ensures the file is properly closed after writing.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-73',
    question: 'What is the output of: print("hello".strip())?',
    options: [
      'hello',
      ' hello ',
      'h',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'strip() removes leading and trailing whitespace. Since "hello" has no extra spaces, it returns the same string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-74',
    question: 'What is the correct way to get the length of a string?',
    options: [
      'len(my_string)',
      'my_string.length()',
      'my_string.size()',
      'my_string.count()'
    ],
    correctAnswer: 'len(my_string)',
    explanation: 'The len() function returns the number of characters in a string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-75',
    question: 'What is the output of: print(reversed([1, 2, 3]))?',
    options: [
      '<list_reverseiterator object>',
      '[3, 2, 1]',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '<list_reverseiterator object>',
    explanation: 'reversed() returns a reverse iterator. To see the reversed values, convert it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-76',
    question: 'What is the correct way to check if a list is empty?',
    options: [
      'if not my_list:',
      'if my_list.empty():',
      'if my_list.is_empty():',
      'if len(my_list) == 0:'
    ],
    correctAnswer: 'if not my_list:',
    explanation: 'In Python, empty lists are falsy, so "not my_list" is True when the list is empty.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-77',
    question: 'What is the output of: print("hello".join(["a", "b", "c"]))?',
    options: [
      'ahellobhelloc',
      'a b c',
      'abc',
      'Error'
    ],
    correctAnswer: 'ahellobhelloc',
    explanation: 'join() concatenates the elements of the iterable with the string as the separator.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-78',
    question: 'What is the correct way to get the current timestamp?',
    options: [
      'import time; time.time()',
      'import datetime; datetime.now()',
      'import time; time.now()',
      'import timestamp; timestamp.now()'
    ],
    correctAnswer: 'import time; time.time()',
    explanation: 'time.time() returns the current time as a floating point number expressed in seconds since the epoch.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-79',
    question: 'What is the output of: print("hello".partition("l"))?',
    options: [
      '(\'he\', \'l\', \'lo\')',
      '[\'he\', \'l\', \'lo\']',
      'he l lo',
      'Error'
    ],
    correctAnswer: '(\'he\', \'l\', \'lo\')',
    explanation: 'partition() splits the string at the first occurrence of the separator and returns a tuple of three parts.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-80',
    question: 'What is the correct way to create a deep copy of a list?',
    options: [
      'import copy; copy.deepcopy(my_list)',
      'my_list.copy()',
      'my_list[:]',
      'list(my_list)'
    ],
    correctAnswer: 'import copy; copy.deepcopy(my_list)',
    explanation: 'deepcopy() creates a completely independent copy, including nested objects.',
    category: 'Python Data Structures',
    difficulty: 'Hard'
  },
  {
    id: 'python-81',
    question: 'What is the output of: print("hello".center(10))?',
    options: [
      '  hello   ',
      'hello',
      'hello     ',
      'Error'
    ],
    correctAnswer: '  hello   ',
    explanation: 'center() centers the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-82',
    question: 'What is the correct way to get command line arguments?',
    options: [
      'import sys; sys.argv',
      'import os; os.argv',
      'import argparse; argparse.args',
      'import cli; cli.args'
    ],
    correctAnswer: 'import sys; sys.argv',
    explanation: 'sys.argv is a list containing the command line arguments passed to the script.',
    category: 'Python System',
    difficulty: 'Medium'
  },
  {
    id: 'python-83',
    question: 'What is the output of: print("hello".ljust(10))?',
    options: [
      'hello     ',
      '  hello   ',
      '     hello',
      'Error'
    ],
    correctAnswer: 'hello     ',
    explanation: 'ljust() left-justifies the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-84',
    question: 'What is the correct way to check if a file is a directory?',
    options: [
      'import os; os.path.isdir(path)',
      'import path; path.isdir(path)',
      'import file; file.isdir(path)',
      'import system; system.isdir(path)'
    ],
    correctAnswer: 'import os; os.path.isdir(path)',
    explanation: 'os.path.isdir() returns True if the path is an existing directory.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-85',
    question: 'What is the output of: print("hello".rjust(10))?',
    options: [
      '     hello',
      'hello     ',
      '  hello   ',
      'Error'
    ],
    correctAnswer: '     hello',
    explanation: 'rjust() right-justifies the string in a field of the specified width, padding with spaces.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-86',
    question: 'What is the correct way to get environment variables?',
    options: [
      'import os; os.environ.get("VAR_NAME")',
      'import env; env.get("VAR_NAME")',
      'import system; system.env("VAR_NAME")',
      'import environment; environment.get("VAR_NAME")'
    ],
    correctAnswer: 'import os; os.environ.get("VAR_NAME")',
    explanation: 'os.environ is a mapping object representing the environment variables.',
    category: 'Python System',
    difficulty: 'Medium'
  },
  {
    id: 'python-87',
    question: 'What is the output of: print("hello".expandtabs())?',
    options: [
      'hello',
      'hello    ',
      'h e l l o',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'expandtabs() replaces tab characters with spaces. Since "hello" has no tabs, it returns the same string.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-88',
    question: 'What is the correct way to create a JSON string from a Python object?',
    options: [
      'import json; json.dumps(obj)',
      'import json; json.dump(obj)',
      'import json; json.encode(obj)',
      'import json; json.stringify(obj)'
    ],
    correctAnswer: 'import json; json.dumps(obj)',
    explanation: 'json.dumps() serializes an object to a JSON formatted string.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-89',
    question: 'What is the output of: print("hello".isalpha())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isalpha() returns True if all characters in the string are alphabetic.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-90',
    question: 'What is the correct way to parse a JSON string in Python?',
    options: [
      'import json; json.loads(json_string)',
      'import json; json.load(json_string)',
      'import json; json.decode(json_string)',
      'import json; json.parse(json_string)'
    ],
    correctAnswer: 'import json; json.loads(json_string)',
    explanation: 'json.loads() deserializes a JSON formatted string to a Python object.',
    category: 'Python Libraries',
    difficulty: 'Medium'
  },
  {
    id: 'python-91',
    question: 'What is the output of: print("hello".isalnum())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isalnum() returns True if all characters in the string are alphanumeric.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-92',
    question: 'What is the correct way to get the current working directory name?',
    options: [
      'import os; os.path.basename(os.getcwd())',
      'import os; os.getcwd().split("/")[-1]',
      'import path; path.basename(os.getcwd())',
      'import os; os.cwd_name()'
    ],
    correctAnswer: 'import os; os.path.basename(os.getcwd())',
    explanation: 'os.path.basename() returns the base name of the pathname path.',
    category: 'Python File Operations',
    difficulty: 'Hard'
  },
  {
    id: 'python-93',
    question: 'What is the output of: print("hello".islower())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'islower() returns True if all cased characters in the string are lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-94',
    question: 'What is the correct way to get the size of a file?',
    options: [
      'import os; os.path.getsize(filename)',
      'import os; os.size(filename)',
      'import file; file.size(filename)',
      'import path; path.size(filename)'
    ],
    correctAnswer: 'import os; os.path.getsize(filename)',
    explanation: 'os.path.getsize() returns the size, in bytes, of the file.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-95',
    question: 'What is the output of: print("hello".isupper())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isupper() returns True if all cased characters in the string are uppercase. "hello" is lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-96',
    question: 'What is the correct way to check if a path is a file?',
    options: [
      'import os; os.path.isfile(path)',
      'import path; path.isfile(path)',
      'import file; file.isfile(path)',
      'import system; system.isfile(path)'
    ],
    correctAnswer: 'import os; os.path.isfile(path)',
    explanation: 'os.path.isfile() returns True if the path is an existing regular file.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-97',
    question: 'What is the output of: print("hello".istitle())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'istitle() returns True if the string is a titlecased string. "hello" is not titlecased.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-98',
    question: 'What is the correct way to get the absolute path of a file?',
    options: [
      'import os; os.path.abspath(path)',
      'import path; path.abspath(path)',
      'import os; os.abspath(path)',
      'import file; file.abspath(path)'
    ],
    correctAnswer: 'import os; os.path.abspath(path)',
    explanation: 'os.path.abspath() returns a normalized absolutized version of the pathname path.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  },
  {
    id: 'python-99',
    question: 'What is the output of: print("hello".isspace())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isspace() returns True if there are only whitespace characters in the string. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-100',
    question: 'What is the correct way to get the directory name of a path?',
    options: [
      'import os; os.path.dirname(path)',
      'import path; path.dirname(path)',
      'import os; os.dirname(path)',
      'import file; file.dirname(path)'
    ],
    correctAnswer: 'import os; os.path.dirname(path)',
    explanation: 'os.path.dirname() returns the directory name of pathname path.',
    category: 'Python File Operations',
    difficulty: 'Medium'
  }
]; 