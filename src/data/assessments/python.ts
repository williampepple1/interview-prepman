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
  },
  {
    id: 'python-101',
    question: 'What is the output of: print("hello".zfill(10))?',
    options: [
      '00000hello',
      'hello00000',
      '     hello',
      'Error'
    ],
    correctAnswer: '00000hello',
    explanation: 'zfill() pads the string on the left with zeros to fill the specified width.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-102',
    question: 'What is the correct way to create a context manager?',
    options: [
      'class MyContextManager: def __enter__(self): ... def __exit__(self, ...): ...',
      'def context_manager(): ...',
      'with context_manager(): ...',
      'import contextlib; @contextlib.contextmanager'
    ],
    correctAnswer: 'class MyContextManager: def __enter__(self): ... def __exit__(self, ...): ...',
    explanation: 'Context managers are created by implementing __enter__ and __exit__ methods in a class.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-103',
    question: 'What is the output of: print("hello".swapcase())?',
    options: [
      'HELLO',
      'hello',
      'hELLO',
      'Error'
    ],
    correctAnswer: 'HELLO',
    explanation: 'swapcase() converts uppercase characters to lowercase and vice versa.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-104',
    question: 'What is the correct way to create a decorator?',
    options: [
      'def decorator(func): def wrapper(*args, **kwargs): ... return wrapper',
      'def decorator(func): return func',
      '@decorator def func(): ...',
      'import decorator; @decorator'
    ],
    correctAnswer: 'def decorator(func): def wrapper(*args, **kwargs): ... return wrapper',
    explanation: 'Decorators are functions that take another function and extend its behavior.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-105',
    question: 'What is the output of: print("hello".encode())?',
    options: [
      "b'hello'",
      'hello',
      'h e l l o',
      'Error'
    ],
    correctAnswer: "b'hello'",
    explanation: 'encode() converts a string to bytes using the default encoding (UTF-8).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-106',
    question: 'What is the correct way to create a metaclass?',
    options: [
      'class Meta(type): ... class MyClass(metaclass=Meta): ...',
      'class Meta: ... class MyClass(Meta): ...',
      'metaclass Meta: ...',
      'import metaclass; @metaclass'
    ],
    correctAnswer: 'class Meta(type): ... class MyClass(metaclass=Meta): ...',
    explanation: 'Metaclasses are classes for classes. They are created by inheriting from type.',
    category: 'Python Advanced',
    difficulty: 'Hard'
  },
  {
    id: 'python-107',
    question: 'What is the output of: print(b"hello".decode())?',
    options: [
      'hello',
      "b'hello'",
      'h e l l o',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'decode() converts bytes to a string using the default encoding (UTF-8).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-108',
    question: 'What is the correct way to create a property?',
    options: [
      '@property def my_property(self): ...',
      'def property(self): ...',
      'property = property()',
      'import property; @property'
    ],
    correctAnswer: '@property def my_property(self): ...',
    explanation: 'The @property decorator converts a method into a read-only property.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-109',
    question: 'What is the output of: print("hello".format())?',
    options: [
      'hello',
      '{}',
      'Error',
      'None'
    ],
    correctAnswer: 'hello',
    explanation: 'format() with no arguments returns the original string unchanged.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-110',
    question: 'What is the correct way to create a static method?',
    options: [
      '@staticmethod def my_method(): ...',
      'def static_method(): ...',
      'static def my_method(): ...',
      'import static; @static'
    ],
    correctAnswer: '@staticmethod def my_method(): ...',
    explanation: 'The @staticmethod decorator creates a static method that doesn\'t receive self or cls.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-111',
    question: 'What is the output of: print("hello".format_map({}))?',
    options: [
      'hello',
      '{}',
      'Error',
      'None'
    ],
    correctAnswer: 'hello',
    explanation: 'format_map() with an empty dictionary returns the original string unchanged.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-112',
    question: 'What is the correct way to create a class method?',
    options: [
      '@classmethod def my_method(cls): ...',
      'def class_method(cls): ...',
      'class def my_method(): ...',
      'import classmethod; @classmethod'
    ],
    correctAnswer: '@classmethod def my_method(cls): ...',
    explanation: 'The @classmethod decorator creates a method that receives the class as the first argument.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-113',
    question: 'What is the output of: print("hello".casefold())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'casefold() converts the string to lowercase, similar to lower() but more aggressive.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-114',
    question: 'What is the correct way to create an abstract method?',
    options: [
      'from abc import ABC, abstractmethod; @abstractmethod def my_method(self): ...',
      'def abstract_method(self): ...',
      'abstract def my_method(): ...',
      'import abstract; @abstract'
    ],
    correctAnswer: 'from abc import ABC, abstractmethod; @abstractmethod def my_method(self): ...',
    explanation: 'Abstract methods are created using the @abstractmethod decorator from the abc module.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-115',
    question: 'What is the output of: print("hello".maketrans("h", "H"))?',
    options: [
      '{104: 72}',
      'Hello',
      'hello',
      'Error'
    ],
    correctAnswer: '{104: 72}',
    explanation: 'maketrans() creates a translation table mapping characters. 104 is the ASCII code for "h", 72 for "H".',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-116',
    question: 'What is the correct way to create a singleton class?',
    options: [
      'class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance',
      'class Singleton: def __init__(self): self.instance = None',
      'singleton class MyClass: ...',
      'import singleton; @singleton'
    ],
    correctAnswer: 'class Singleton: _instance = None; def __new__(cls): if cls._instance is None: cls._instance = super().__new__(cls); return cls._instance',
    explanation: 'Singleton pattern ensures only one instance of a class exists by overriding __new__.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-117',
    question: 'What is the output of: print("hello".translate({104: 72}))?',
    options: [
      'Hello',
      'hello',
      'hELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'translate() applies the translation table, replacing "h" (ASCII 104) with "H" (ASCII 72).',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-118',
    question: 'What is the correct way to create a factory pattern?',
    options: [
      'class Factory: @staticmethod def create_object(type): if type == "A": return ClassA(); elif type == "B": return ClassB()',
      'class Factory: def create(self): return object()',
      'factory class MyClass: ...',
      'import factory; @factory'
    ],
    correctAnswer: 'class Factory: @staticmethod def create_object(type): if type == "A": return ClassA(); elif type == "B": return ClassB()',
    explanation: 'Factory pattern creates objects without specifying their exact class.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-119',
    question: 'What is the output of: print("hello".isprintable())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isprintable() returns True if all characters in the string are printable.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-120',
    question: 'What is the correct way to create an observer pattern?',
    options: [
      'class Subject: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer)',
      'class Observer: def observe(self): pass',
      'observer class MyClass: ...',
      'import observer; @observer'
    ],
    correctAnswer: 'class Subject: def __init__(self): self._observers = []; def attach(self, observer): self._observers.append(observer)',
    explanation: 'Observer pattern allows objects to subscribe to events and be notified when they occur.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-121',
    question: 'What is the output of: print("hello".isidentifier())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isidentifier() returns True if the string is a valid Python identifier.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-122',
    question: 'What is the correct way to create a strategy pattern?',
    options: [
      'class Context: def __init__(self, strategy): self._strategy = strategy; def execute_strategy(self): return self._strategy.execute()',
      'class Strategy: def execute(self): pass',
      'strategy class MyClass: ...',
      'import strategy; @strategy'
    ],
    correctAnswer: 'class Context: def __init__(self, strategy): self._strategy = strategy; def execute_strategy(self): return self._strategy.execute()',
    explanation: 'Strategy pattern allows selecting an algorithm\'s implementation at runtime.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-123',
    question: 'What is the output of: print("hello".isascii())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isascii() returns True if all characters in the string are ASCII.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-124',
    question: 'What is the correct way to create a command pattern?',
    options: [
      'class Command: def execute(self): pass; class Invoker: def __init__(self): self._commands = []; def add_command(self, command): self._commands.append(command)',
      'class Command: def run(self): pass',
      'command class MyClass: ...',
      'import command; @command'
    ],
    correctAnswer: 'class Command: def execute(self): pass; class Invoker: def __init__(self): self._commands = []; def add_command(self, command): self._commands.append(command)',
    explanation: 'Command pattern encapsulates a request as an object, allowing parameterization of clients.',
    category: 'Python Design Patterns',
    difficulty: 'Hard'
  },
  {
    id: 'python-125',
    question: 'What is the output of: print("hello".isdecimal())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isdecimal() returns True if all characters in the string are decimal characters. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-126',
    question: 'What is the output of: print("hello".isnumeric())?',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'isnumeric() returns True if all characters in the string are numeric. "hello" contains letters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-127',
    question: 'What is the correct way to create a custom exception?',
    options: [
      'class CustomException(Exception): pass',
      'def CustomException(): pass',
      'exception CustomException: pass',
      'import exception; @exception'
    ],
    correctAnswer: 'class CustomException(Exception): pass',
    explanation: 'Custom exceptions are created by inheriting from the Exception class or its subclasses.',
    category: 'Python Exception Handling',
    difficulty: 'Medium'
  },
  {
    id: 'python-128',
    question: 'What is the output of: print("hello".capitalize())?',
    options: [
      'Hello',
      'hello',
      'HELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'capitalize() returns a copy of the string with its first character capitalized.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-129',
    question: 'What is the correct way to create a thread in Python?',
    options: [
      'import threading; thread = threading.Thread(target=function)',
      'import thread; thread.start(function)',
      'import multiprocessing; thread = multiprocessing.Thread(function)',
      'import concurrent; thread = concurrent.Thread(function)'
    ],
    correctAnswer: 'import threading; thread = threading.Thread(target=function)',
    explanation: 'The threading module provides a high-level interface for working with threads.',
    category: 'Python Concurrency',
    difficulty: 'Medium'
  },
  {
    id: 'python-130',
    question: 'What is the output of: print("hello".title())?',
    options: [
      'Hello',
      'hello',
      'HELLO',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'title() returns a titlecased version of the string where words start with uppercase characters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-131',
    question: 'What is the correct way to create a process in Python?',
    options: [
      'import multiprocessing; process = multiprocessing.Process(target=function)',
      'import threading; process = threading.Process(function)',
      'import os; process = os.fork()',
      'import subprocess; process = subprocess.Process(function)'
    ],
    correctAnswer: 'import multiprocessing; process = multiprocessing.Process(target=function)',
    explanation: 'The multiprocessing module provides a high-level interface for working with processes.',
    category: 'Python Concurrency',
    difficulty: 'Medium'
  },
  {
    id: 'python-132',
    question: 'What is the output of: print("hello".splitlines())?',
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      'hello',
      'Error'
    ],
    correctAnswer: "['hello']",
    explanation: 'splitlines() splits the string at line boundaries and returns a list of lines.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-133',
    question: 'What is the correct way to create a pool of workers?',
    options: [
      'import multiprocessing; pool = multiprocessing.Pool()',
      'import threading; pool = threading.Pool()',
      'import concurrent; pool = concurrent.Pool()',
      'import asyncio; pool = asyncio.Pool()'
    ],
    correctAnswer: 'import multiprocessing; pool = multiprocessing.Pool()',
    explanation: 'multiprocessing.Pool provides a pool of worker processes for parallel execution.',
    category: 'Python Concurrency',
    difficulty: 'Hard'
  },
  {
    id: 'python-134',
    question: 'What is the output of: print("hello".rsplit())?',
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      'hello',
      'Error'
    ],
    correctAnswer: "['hello']",
    explanation: 'rsplit() splits the string from the right side, similar to split() but from the end.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-135',
    question: 'What is the correct way to create an async function?',
    options: [
      'async def my_function(): ...',
      'def async my_function(): ...',
      'async function my_function(): ...',
      'import asyncio; @asyncio.async def my_function(): ...'
    ],
    correctAnswer: 'async def my_function(): ...',
    explanation: 'async def defines an asynchronous function that can use await.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-136',
    question: 'What is the output of: print("hello".rpartition("l"))?',
    options: [
      "('he', 'l', 'lo')",
      "('hel', 'l', 'o')",
      "['he', 'l', 'lo']",
      'Error'
    ],
    correctAnswer: "('hel', 'l', 'o')",
    explanation: 'rpartition() splits the string at the last occurrence of the separator.',
    category: 'Python Strings',
    difficulty: 'Hard'
  },
  {
    id: 'python-137',
    question: 'What is the correct way to run an async function?',
    options: [
      'import asyncio; asyncio.run(my_function())',
      'my_function()',
      'await my_function()',
      'import async; async.run(my_function())'
    ],
    correctAnswer: 'import asyncio; asyncio.run(my_function())',
    explanation: 'asyncio.run() runs the coroutine and returns the result.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-138',
    question: 'What is the output of: print("hello".lstrip())?',
    options: [
      'hello',
      'hello ',
      ' hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'lstrip() removes leading whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-139',
    question: 'What is the correct way to create a task in asyncio?',
    options: [
      'import asyncio; task = asyncio.create_task(coroutine)',
      'import asyncio; task = asyncio.Task(coroutine)',
      'import asyncio; task = asyncio.run(coroutine)',
      'import asyncio; task = asyncio.start(coroutine)'
    ],
    correctAnswer: 'import asyncio; task = asyncio.create_task(coroutine)',
    explanation: 'asyncio.create_task() schedules the coroutine to run and returns a Task object.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-140',
    question: 'What is the output of: print("hello".rstrip())?',
    options: [
      'hello',
      'hello ',
      ' hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'rstrip() removes trailing whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-141',
    question: 'What is the correct way to wait for multiple coroutines?',
    options: [
      'import asyncio; await asyncio.gather(coro1(), coro2())',
      'import asyncio; asyncio.wait([coro1(), coro2()])',
      'await coro1(); await coro2()',
      'import asyncio; asyncio.run_all([coro1(), coro2()])'
    ],
    correctAnswer: 'import asyncio; await asyncio.gather(coro1(), coro2())',
    explanation: 'asyncio.gather() runs multiple coroutines concurrently and waits for all to complete.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-142',
    question: 'What is the output of: print("hello".removeprefix("he"))?',
    options: [
      'llo',
      'hello',
      'he',
      'Error'
    ],
    correctAnswer: 'llo',
    explanation: 'removeprefix() removes the specified prefix if the string starts with it.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-143',
    question: 'What is the correct way to create a semaphore in asyncio?',
    options: [
      'import asyncio; semaphore = asyncio.Semaphore(5)',
      'import asyncio; semaphore = asyncio.Lock()',
      'import asyncio; semaphore = asyncio.Event()',
      'import asyncio; semaphore = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; semaphore = asyncio.Semaphore(5)',
    explanation: 'asyncio.Semaphore limits the number of coroutines that can access a resource simultaneously.',
    category: 'Python Async',
    difficulty: 'Hard'
  },
  {
    id: 'python-144',
    question: 'What is the output of: print("hello".removesuffix("lo"))?',
    options: [
      'hel',
      'hello',
      'lo',
      'Error'
    ],
    correctAnswer: 'hel',
    explanation: 'removesuffix() removes the specified suffix if the string ends with it.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-145',
    question: 'What is the correct way to create a lock in asyncio?',
    options: [
      'import asyncio; lock = asyncio.Lock()',
      'import asyncio; lock = asyncio.Semaphore(1)',
      'import asyncio; lock = asyncio.Event()',
      'import asyncio; lock = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; lock = asyncio.Lock()',
    explanation: 'asyncio.Lock provides mutual exclusion for coroutines.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-146',
    question: 'What is the output of: print("hello".isascii())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isascii() returns True if all characters in the string are ASCII.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-147',
    question: 'What is the correct way to create an event in asyncio?',
    options: [
      'import asyncio; event = asyncio.Event()',
      'import asyncio; event = asyncio.Lock()',
      'import asyncio; event = asyncio.Semaphore(1)',
      'import asyncio; event = asyncio.Condition()'
    ],
    correctAnswer: 'import asyncio; event = asyncio.Event()',
    explanation: 'asyncio.Event allows coroutines to wait for a signal from another coroutine.',
    category: 'Python Async',
    difficulty: 'Medium'
  },
  {
    id: 'python-148',
    question: 'What is the output of: print("hello".isprintable())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isprintable() returns True if all characters in the string are printable.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-149',
    question: 'What is the correct way to create a condition in asyncio?',
    options: [
      'import asyncio; condition = asyncio.Condition()',
      'import asyncio; condition = asyncio.Lock()',
      'import asyncio; condition = asyncio.Event()',
      'import asyncio; condition = asyncio.Semaphore(1)'
    ],
    correctAnswer: 'import asyncio; condition = asyncio.Condition()',
    explanation: 'asyncio.Condition allows coroutines to wait for a condition to become true.',
    category: 'Python Async',
    difficulty: 'Hard'
  },
  {
    id: 'python-150',
    question: 'What is the output of: print("hello".isidentifier())?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'isidentifier() returns True if the string is a valid Python identifier.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-151',
    question: 'What is a decorator in Python?',
    options: [
      'A function that takes another function and extends its behavior without modifying it',
      'A design pattern for creating objects',
      'A type of comment used to document code',
      'A way to define class attributes'
    ],
    correctAnswer: 'A function that takes another function and extends its behavior without modifying it',
    explanation: 'Decorators are a powerful feature in Python that allow you to modify or enhance functions or methods without changing their code.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-152',
    question: 'What is the output of: print(list(filter(lambda x: x > 5, [2, 5, 8, 1, 9])))?',
    options: [
      '[8, 9]',
      '[2, 5, 1]',
      '[8, 1, 9]',
      '[2, 5, 8, 9]'
    ],
    correctAnswer: '[8, 9]',
    explanation: 'The filter function returns an iterator yielding elements that satisfy the provided function. Here, it returns elements greater than 5.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-153',
    question: 'What is a generator in Python?',
    options: [
      'A function that returns an iterator using yield statements',
      'A built-in function that generates random numbers',
      'A class that creates new instances of objects',
      'A tool for generating Python code automatically'
    ],
    correctAnswer: 'A function that returns an iterator using yield statements',
    explanation: 'Generators are functions that can be paused and resumed, yielding values one at a time instead of computing them all at once.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-154',
    question: 'What is the purpose of the __init__ method in Python classes?',
    options: [
      'To initialize object attributes when an instance is created',
      'To define class methods',
      'To import required modules',
      'To finalize an object before destruction'
    ],
    correctAnswer: 'To initialize object attributes when an instance is created',
    explanation: 'The __init__ method is a special method (constructor) that is automatically called when a new instance of a class is created.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-155',
    question: 'What is the output of: print("{:.2f}".format(3.14159))?',
    options: [
      '3.14',
      '3.142',
      '3.1416',
      '3.14159'
    ],
    correctAnswer: '3.14',
    explanation: 'The format specifier {:.2f} formats a floating-point number with 2 decimal places.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-156',
    question: 'What is the purpose of the with statement in Python?',
    options: [
      'To ensure proper acquisition and release of resources',
      'To create conditional loops',
      'To handle multiple exceptions simultaneously',
      'To define new functions within a limited scope'
    ],
    correctAnswer: 'To ensure proper acquisition and release of resources',
    explanation: 'The with statement is used for context management, ensuring resources like files are properly closed after use, even if exceptions occur.',
    category: 'Python Advanced',
    difficulty: 'Medium'
  },
  {
    id: 'python-157',
    question: 'What is the output of: print([x*x for x in range(5)])?',
    options: [
      '[0, 1, 4, 9, 16]',
      '[1, 4, 9, 16, 25]',
      '[0, 2, 4, 6, 8]',
      '[1, 2, 3, 4, 5]'
    ],
    correctAnswer: '[0, 1, 4, 9, 16]',
    explanation: 'This is a list comprehension that squares each number in range(5), which includes numbers 0 through 4.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-158',
    question: 'What is the difference between append() and extend() methods in lists?',
    options: [
      'append() adds a single element to the end, extend() adds elements from an iterable',
      'append() adds multiple elements, extend() adds only one element',
      'append() modifies the original list, extend() creates a new list',
      'append() can only add numbers, extend() can add any data type'
    ],
    correctAnswer: 'append() adds a single element to the end, extend() adds elements from an iterable',
    explanation: 'append() adds its argument as a single item to the end of a list, while extend() adds each element of its iterable argument to the list.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-159',
    question: 'What is the purpose of the *args parameter in a function definition?',
    options: [
      'To accept a variable number of positional arguments',
      'To make all parameters optional',
      'To restrict the function to only accept string arguments',
      'To indicate that the function takes no arguments'
    ],
    correctAnswer: 'To accept a variable number of positional arguments',
    explanation: 'The *args syntax allows a function to accept any number of positional arguments, which are collected into a tuple.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-160',
    question: 'What is the output of: print(dict(zip(["a", "b", "c"], [1, 2, 3])))?',
    options: [
      "{'a': 1, 'b': 2, 'c': 3}",
      "[('a', 1), ('b', 2), ('c', 3)]",
      "{'a': 1}",
      "Error"
    ],
    correctAnswer: "{'a': 1, 'b': 2, 'c': 3}",
    explanation: 'zip() pairs elements from two iterables, and dict() converts these pairs into a dictionary with keys from the first iterable and values from the second.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-161',
    question: 'What is the output of: print(sum([1, 2, 3], 5))?',
    options: [
      '11',
      '6',
      '[1, 2, 3, 5]',
      'Error'
    ],
    correctAnswer: '11',
    explanation: 'The sum() function adds all elements of the iterable, starting with the second argument as the initial value. 1+2+3+5 = 11.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-162',
    question: 'What is the purpose of the __enter__ and __exit__ methods in a class?',
    options: [
      'To define behavior for context managers (with statement)',
      'To initialize and destroy objects',
      'To implement object serialization',
      'To handle attribute access'
    ],
    correctAnswer: 'To define behavior for context managers (with statement)',
    explanation: 'Classes that implement __enter__ and __exit__ can be used with the with statement, managing setup and cleanup automatically.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-163',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      "<class 'function'>",
      "<class 'lambda'>",
      'function',
      'Error'
    ],
    correctAnswer: "<class 'function'>",
    explanation: 'Lambdas in Python are just syntactic sugar for function objects, so they have type <class \'function\'>.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-164',
    question: 'What is the purpose of the sys.getsizeof function?',
    options: [
      'To get the size of an object in bytes',
      'To count elements in an object',
      'To estimate memory usage for a program',
      'To check the type of an object'
    ],
    correctAnswer: 'To get the size of an object in bytes',
    explanation: 'sys.getsizeof returns the size of an object in bytes, including the overhead of the object itself, which is useful for memory analysis.',
    category: 'Python Memory Management',
    difficulty: 'Medium'
  },
  {
    id: 'python-165',
    question: 'What is the output of: print({}.setdefault("a", 1))?',
    options: [
      '1',
      'None',
      'Error',
      '{}'
    ],
    correctAnswer: '1',
    explanation: 'The setdefault() method returns the value for the key if it exists, otherwise inserts the key with the provided default and returns that default.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-166',
    question: 'What is the purpose of the inspect module in Python?',
    options: [
      'To retrieve information about live objects like functions, classes, and frames',
      'To debug Python code',
      'To generate documentation automatically',
      'To analyze memory usage'
    ],
    correctAnswer: 'To retrieve information about live objects like functions, classes, and frames',
    explanation: 'The inspect module provides introspection capabilities, allowing you to analyze functions, methods, classes, and stack frames at runtime.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-167',
    question: 'What is the output of: print(any([]))?',
    options: [
      'False',
      'True',
      '[]',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if any element in the iterable is True. For an empty iterable, it returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-168',
    question: 'What is the purpose of the functools.lru_cache decorator?',
    options: [
      'To cache the results of function calls for faster repeated access',
      'To make a function run in parallel',
      'To reduce memory usage of recursive functions',
      'To convert a function into a generator'
    ],
    correctAnswer: 'To cache the results of function calls for faster repeated access',
    explanation: 'functools.lru_cache stores the results of expensive function calls, so repeated calls with the same arguments can return cached results, improving performance.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-169',
    question: 'What is the difference between is and == in Python?',
    options: [
      'is compares object identity, == compares object values',
      'is compares object values, == compares object identity',
      'Both are the same',
      'is can only be used with numbers'
    ],
    correctAnswer: 'is compares object identity, == compares object values',
    explanation: 'The is operator checks if two variables point to the same object in memory, while == checks if their values are equal.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-170',
    question: 'What does the enumerate() function do in Python?',
    options: [
      'It returns an iterator with index and value pairs for each element',
      'It sorts a list in ascending order',
      'It filters elements from a sequence',
      'It generates a sequence of numbers'
    ],
    correctAnswer: 'It returns an iterator with index and value pairs for each element',
    explanation: 'enumerate() is often used in loops to get both the index and the value while iterating over a sequence.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-171',
    question: 'What is a Python package?',
    options: [
      'A directory containing an __init__.py file and modules',
      'A single Python file',
      'A compressed zip file containing code',
      'A built-in Python library'
    ],
    correctAnswer: 'A directory containing an __init__.py file and modules',
    explanation: 'A package allows for hierarchical structuring of the module namespace using dot notation.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-172',
    question: 'What is the purpose of the global keyword in Python?',
    options: [
      'To declare that a variable refers to a global variable',
      'To make a variable immutable',
      'To create a variable accessible across multiple files',
      'To define constants'
    ],
    correctAnswer: 'To declare that a variable refers to a global variable',
    explanation: 'The global keyword tells Python that a variable inside a function refers to the one at the module level.',
    category: 'Python Variables',
    difficulty: 'Medium'
  },
  {
    id: 'python-173',
    question: 'What is the output of: print(set([1, 2, 2, 3, 3, 3]))?',
    options: [
      '{1, 2, 3}',
      '[1, 2, 3]',
      '(1, 2, 3)',
      'Error'
    ],
    correctAnswer: '{1, 2, 3}',
    explanation: 'Sets automatically remove duplicates, so the resulting set only contains unique elements.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-174',
    question: 'What is the purpose of the zip() function?',
    options: [
      'To combine multiple iterables into tuples element-wise',
      'To compress files',
      'To repeat a sequence multiple times',
      'To convert lists into dictionaries automatically'
    ],
    correctAnswer: 'To combine multiple iterables into tuples element-wise',
    explanation: 'zip() pairs elements from iterables based on their positions, producing tuples.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-175',
    question: 'What does the any() function return in Python?',
    options: [
      'True if at least one element in the iterable is true',
      'True only if all elements in the iterable are true',
      'False if any element is true',
      'The first element in the iterable'
    ],
    correctAnswer: 'True if at least one element in the iterable is true',
    explanation: 'any() returns True if any element evaluates to True, otherwise False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-176',
    question: 'What is a shallow copy in Python?',
    options: [
      'A copy where only the outer object is duplicated, but nested objects are shared',
      'A copy where all nested objects are also duplicated',
      'A copy that removes duplicates',
      'A copy made using deep learning techniques'
    ],
    correctAnswer: 'A copy where only the outer object is duplicated, but nested objects are shared',
    explanation: 'Shallow copies copy the structure but not nested elements, leading to shared references.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-177',
    question: 'What is the purpose of the __slots__ attribute in Python classes?',
    options: [
      'To limit the attributes a class can have and save memory',
      'To define default values for attributes',
      'To enable private variables',
      'To specify static variables only'
    ],
    correctAnswer: 'To limit the attributes a class can have and save memory',
    explanation: '__slots__ prevents the creation of __dict__ for instances, reducing memory usage by restricting attributes.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-178',
    question: 'What is the output of: print(bool(""))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'An empty string is considered False in a boolean context.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-179',
    question: 'What is a lambda function in Python?',
    options: [
      'An anonymous, single-expression function',
      'A type of loop',
      'A module for creating functions',
      'A built-in constant'
    ],
    correctAnswer: 'An anonymous, single-expression function',
    explanation: 'Lambda functions are small, anonymous functions created with the lambda keyword.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-180',
    question: 'What is the difference between a tuple and a list?',
    options: [
      'Tuples are immutable, lists are mutable',
      'Tuples can only hold numbers, lists can hold any type',
      'Lists are faster to access than tuples',
      'Tuples automatically remove duplicates'
    ],
    correctAnswer: 'Tuples are immutable, lists are mutable',
    explanation: 'Tuples cannot be changed after creation, while lists can be modified.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-181',
    question: 'What is the purpose of the zip() function in Python?',
    options: [
      'To combine multiple iterables element-wise into tuples',
      'To compress data into a zip file',
      'To iterate through elements in reverse order',
      'To merge dictionaries together'
    ],
    correctAnswer: 'To combine multiple iterables element-wise into tuples',
    explanation: 'The zip() function pairs elements from multiple iterables into tuples. It stops at the shortest iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-182',
    question: 'What is the output of: print(list(range(1, 10, 3)))?',
    options: [
      '[1, 4, 7]',
      '[1, 3, 5, 7, 9]',
      '[1, 4, 7, 10]',
      '[1, 3, 6, 9]'
    ],
    correctAnswer: '[1, 4, 7]',
    explanation: 'The range() function generates numbers starting at 1, stopping before 10, with a step of 3, resulting in 1, 4, 7.',
    category: 'Python Loops',
    difficulty: 'Easy'
  },
  {
    id: 'python-183',
    question: 'What does the hasattr() function do?',
    options: [
      'Checks if an object has a specified attribute',
      'Returns the value of an attribute',
      'Deletes an attribute from an object',
      'Lists all attributes of an object'
    ],
    correctAnswer: 'Checks if an object has a specified attribute',
    explanation: 'hasattr() checks whether an object has a given attribute and returns True or False.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-184',
    question: 'What is the output of: print(sorted([3, 1, 4], reverse=True))?',
    options: [
      '[4, 3, 1]',
      '[1, 3, 4]',
      '[3, 1, 4]',
      'Error'
    ],
    correctAnswer: '[4, 3, 1]',
    explanation: 'The sorted() function sorts the list in descending order when reverse=True is specified.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-185',
    question: 'What is the difference between copy.copy() and copy.deepcopy()?',
    options: [
      'copy.copy() performs a shallow copy, deepcopy() performs a full recursive copy',
      'copy.copy() creates a deep copy, deepcopy() creates a shallow copy',
      'Both perform the same type of copy',
      'copy.deepcopy() only works on lists'
    ],
    correctAnswer: 'copy.copy() performs a shallow copy, deepcopy() performs a full recursive copy',
    explanation: 'copy.copy() copies only the top-level structure, while copy.deepcopy() recursively copies all nested objects.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-186',
    question: 'What is the output of: print(any([0, "", None, False]))?',
    options: [
      'False',
      'True',
      '0',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if any element is truthy. All given elements are falsy, so it returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-187',
    question: 'What is the purpose of enumerate() in Python?',
    options: [
      'To iterate over an iterable and get both index and value',
      'To list all variables in the current scope',
      'To create a dictionary from two lists',
      'To convert iterables into strings'
    ],
    correctAnswer: 'To iterate over an iterable and get both index and value',
    explanation: 'enumerate() allows looping over an iterable while retrieving both the index and the element.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-188',
    question: 'What is the output of: print(5 // 2)?',
    options: [
      '2',
      '2.5',
      '3',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'The // operator performs floor division, returning the integer part of the division result.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-189',
    question: 'What does the with statement do in Python?',
    options: [
      'Simplifies resource management by automatically closing resources',
      'Defines a context manager explicitly',
      'Declares a variable as immutable',
      'Executes code only once'
    ],
    correctAnswer: 'Simplifies resource management by automatically closing resources',
    explanation: 'The with statement is used with context managers to ensure resources like files are properly closed after use, even if an error occurs.',
    category: 'Python Context Managers',
    difficulty: 'Medium'
  },
  {
    id: 'python-190',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      "<class 'function'>",
      "<class 'lambda'>",
      "<class 'generator'>",
      'Error'
    ],
    correctAnswer: "<class 'function'>",
    explanation: 'Lambda functions are anonymous functions, but they are still of type function.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-191',
    question: 'What is a frozenset in Python?',
    options: [
      'An immutable version of a set',
      'A set that only stores integers',
      'A set that can be sorted',
      'A set that removes duplicates automatically'
    ],
    correctAnswer: 'An immutable version of a set',
    explanation: 'frozenset is like a set but immutable, meaning its elements cannot be modified after creation.',
    category: 'Python Data Types',
    difficulty: 'Hard'
  },
  {
    id: 'python-192',
    question: 'What is the output of: print(2 ** 3 ** 2)?',
    options: [
      '512',
      '64',
      '16',
      'Error'
    ],
    correctAnswer: '512',
    explanation: 'Exponentiation is right-associative: 3 ** 2 = 9, then 2 ** 9 = 512.',
    category: 'Python Operators',
    difficulty: 'Hard'
  },
  {
    id: 'python-193',
    question: 'What does sys.exit() do?',
    options: [
      'Terminates the program by raising SystemExit',
      'Shuts down the operating system',
      'Pauses the program indefinitely',
      'Closes all file descriptors'
    ],
    correctAnswer: 'Terminates the program by raising SystemExit',
    explanation: 'sys.exit() stops the program by raising a SystemExit exception, which can be caught if needed.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-194',
    question: 'What is the output of: print("".join(["a", "b", "c"]))?',
    options: [
      '"abc"',
      '"a b c"',
      '"[a, b, c]"',
      'Error'
    ],
    correctAnswer: '"abc"',
    explanation: 'The join() method concatenates all elements of the iterable into a single string without separators.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-195',
    question: 'What is the difference between is and == in Python?',
    options: [
      'is checks identity (same object), == checks equality (same value)',
      'is checks equality, == checks identity',
      'Both do the same thing',
      'is is only for integers'
    ],
    correctAnswer: 'is checks identity (same object), == checks equality (same value)',
    explanation: 'is checks if two variables point to the same object in memory, while == compares their values.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-196',
    question: 'What is the output of: print(type( (x for x in range(5)) ))?',
    options: [
      "<class 'generator'>",
      "<class 'list'>",
      "<class 'tuple'>",
      'Error'
    ],
    correctAnswer: "<class 'generator'>",
    explanation: 'A generator expression creates a generator object, not a list or tuple, until it is iterated over.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-197',
    question: 'What does the @staticmethod decorator do in Python?',
    options: [
      'Defines a method that doesn\'t receive an implicit self argument',
      'Creates a class method that can access class attributes',
      'Automatically makes a method private',
      'Defines a method as read-only'
    ],
    correctAnswer: 'Defines a method that doesn\'t receive an implicit self argument',
    explanation: '@staticmethod is used to define a method that behaves like a normal function but belongs to a class\'s namespace.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-198',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Non-empty strings are always truthy in Python, even if they represent the word "False".',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-199',
    question: 'What is the __enter__ method used for in a context manager?',
    options: [
      'To set up resources when entering a with block',
      'To handle exceptions within the block',
      'To release resources after the block',
      'To skip the with block entirely'
    ],
    correctAnswer: 'To set up resources when entering a with block',
    explanation: '__enter__ is called when execution enters the context managed block, often to allocate or prepare resources.',
    category: 'Python Context Managers',
    difficulty: 'Hard'
  },
  {
    id: 'python-200',
    question: 'What is the output of: print(~5)?',
    options: [
      '-6',
      '6',
      '-5',
      'Error'
    ],
    correctAnswer: '-6',
    explanation: 'The ~ operator performs a bitwise NOT. For 5, ~5 equals -(5+1) = -6 due to two\'s complement representation.',
    category: 'Python Operators',
    difficulty: 'Hard'
  },
  {
    id: 'python-201',
    question: 'What is the output of: print("Python".replace("Py", "My"))?',
    options: [
      'Mython',
      'Python',
      'MyPython',
      'Error'
    ],
    correctAnswer: 'Mython',
    explanation: 'The replace method substitutes all occurrences of the first substring ("Py") with the second ("My"), producing "Mython".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-202',
    question: 'What does the __slots__ attribute in a Python class do?',
    options: [
      'Prevents dynamic attribute creation and saves memory by using a fixed attribute set',
      'Locks class attributes from modification',
      'Automatically generates getters and setters',
      'Enables multi-threaded attribute access'
    ],
    correctAnswer: 'Prevents dynamic attribute creation and saves memory by using a fixed attribute set',
    explanation: '__slots__ defines a fixed set of attributes for a class, reducing memory usage by avoiding a per-instance __dict__.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-203',
    question: 'What is the output of: print(list(map(str.upper, "go")))?',
    options: [
      "['G', 'O']",
      "['g', 'o']",
      'GO',
      'Error'
    ],
    correctAnswer: "['G', 'O']",
    explanation: 'map applies the str.upper function to each character in the string, resulting in a list of uppercase characters.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-204',
    question: 'What is the difference between repr() and str() in Python?',
    options: [
      'repr() is for unambiguous representations, str() is for readable representations',
      'repr() converts numbers, str() converts strings',
      'repr() is slower, str() is faster',
      'They are identical in all cases'
    ],
    correctAnswer: 'repr() is for unambiguous representations, str() is for readable representations',
    explanation: 'repr() aims to be unambiguous (often suitable for debugging), while str() is designed for human readability.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-205',
    question: 'What is the output of: print(sorted([3, 1, 2], reverse=True))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      '[2, 3, 1]',
      'Error'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'The sorted function returns a new list, sorted in descending order when reverse=True is specified.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-206',
    question: 'What is the purpose of the @staticmethod decorator?',
    options: [
      'Defines a method that does not receive the instance or class as its first argument',
      'Converts a function to a class method',
      'Creates a read-only property',
      'Automatically calls the method at import time'
    ],
    correctAnswer: 'Defines a method that does not receive the instance or class as its first argument',
    explanation: 'Static methods are bound to a class but don\'t receive self or cls; they behave like normal functions inside the class namespace.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-207',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Non-empty strings are always truthy, regardless of their content.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-208',
    question: 'What is the difference between deep copy and shallow copy?',
    options: [
      'Shallow copy copies only references to nested objects, deep copy recursively copies all objects',
      'Deep copy is faster, shallow copy is slower',
      'They are the same in Python',
      'Shallow copy is immutable, deep copy is mutable'
    ],
    correctAnswer: 'Shallow copy copies only references to nested objects, deep copy recursively copies all objects',
    explanation: 'shallow copies share nested object references, while deep copies duplicate every level, avoiding shared state.',
    category: 'Python Copying',
    difficulty: 'Medium'
  },
  {
    id: 'python-209',
    question: 'What is the output of: print([i for i in range(3) if i % 2])?',
    options: [
      '[1]',
      '[0, 2]',
      '[1, 2]',
      '[]'
    ],
    correctAnswer: '[1]',
    explanation: 'The list comprehension includes only numbers where i % 2 is True (i.e., odd numbers). From 0–2, only 1 qualifies.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-210',
    question: 'What is the purpose of the zip function in Python?',
    options: [
      'Combines multiple iterables into tuples, stopping at the shortest iterable',
      'Compresses data into a zip file',
      'Creates a dictionary from two lists',
      'Shuffles lists randomly'
    ],
    correctAnswer: 'Combines multiple iterables into tuples, stopping at the shortest iterable',
    explanation: 'zip aggregates elements from multiple iterables into tuples; it stops when the shortest iterable is exhausted.',
    category: 'Python Itertools',
    difficulty: 'Easy'
  },
  {
    id: 'python-211',
    question: 'What is the output of: print(type(type))?',
    options: [
      "<class 'type'>",
      "<class 'object'>",
      "<class 'class'>",
      'Error'
    ],
    correctAnswer: "<class 'type'>",
    explanation: 'type is itself an instance of type; classes are created by type in Python\'s metaclass system.',
    category: 'Python Types',
    difficulty: 'Hard'
  },
  {
    id: 'python-212',
    question: 'What is the effect of calling dict.fromkeys(["a", "b"], 0)?',
    options: [
      "{'a': 0, 'b': 0}",
      "{'a': None, 'b': None}",
      '["a", "b"]',
      'Error'
    ],
    correctAnswer: "{'a': 0, 'b': 0}",
    explanation: 'dict.fromkeys creates a dictionary with the given keys and assigns the specified default value (0 here).',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-213',
    question: 'What is the output of: print(any([0, [], False, ""]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'All elements are falsy, so any() returns False.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-214',
    question: 'What is the effect of the itertools.cycle function?',
    options: [
      'Repeats the elements of an iterable indefinitely',
      'Shuffles elements randomly',
      'Returns every second element from an iterable',
      'Generates a range of numbers'
    ],
    correctAnswer: 'Repeats the elements of an iterable indefinitely',
    explanation: 'cycle endlessly loops over the provided iterable, yielding elements repeatedly.',
    category: 'Python Itertools',
    difficulty: 'Medium'
  },
  {
    id: 'python-215',
    question: 'What is the output of: print(divmod(7, 3))?',
    options: [
      '(2, 1)',
      '(3, 2)',
      '(7, 3)',
      'Error'
    ],
    correctAnswer: '(2, 1)',
    explanation: 'divmod returns a tuple of quotient and remainder (7 divided by 3 is 2 remainder 1).',
    category: 'Python Arithmetic',
    difficulty: 'Easy'
  },
  {
    id: 'python-216',
    question: 'What is the effect of the del statement on a list element?',
    options: [
      'Removes the specified element by index',
      'Sets the element to None',
      'Clears the list',
      'Permanently deletes the list variable'
    ],
    correctAnswer: 'Removes the specified element by index',
    explanation: 'del list[index] removes the element entirely, shifting remaining elements.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-217',
    question: 'What is the output of: print(all([1, True, ""]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'all() returns True only if all elements are truthy. An empty string is falsy.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-218',
    question: 'What is the difference between enumerate and range?',
    options: [
      'enumerate pairs elements with an index, range generates a sequence of numbers',
      'enumerate generates numbers, range generates iterables',
      'They are identical in all cases',
      'range is slower than enumerate'
    ],
    correctAnswer: 'enumerate pairs elements with an index, range generates a sequence of numbers',
    explanation: 'enumerate provides (index, value) pairs for an iterable, while range only produces a sequence of integers.',
    category: 'Python Iteration',
    difficulty: 'Medium'
  },
  {
    id: 'python-219',
    question: 'What is the output of: print(list(reversed([1, 2, 3])))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      '[1, 3, 2]',
      'Error'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'reversed() returns an iterator over the sequence in reverse order, which can be converted to a list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-220',
    question: 'What is the purpose of the contextlib.suppress function?',
    options: [
      'Suppresses specified exceptions in a with block',
      'Silences all print statements',
      'Delays exception raising',
      'Suppresses logging output'
    ],
    correctAnswer: 'Suppresses specified exceptions in a with block',
    explanation: 'contextlib.suppress allows you to ignore specific exceptions gracefully during a block of code.',
    category: 'Python Modules',
    difficulty: 'Hard'
  },
  {
    id: 'python-221',
    question: 'What is the output of: print(isinstance(True, int))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'In Python, bool is a subclass of int, so isinstance(True, int) returns True.',
    category: 'Python Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-222',
    question: 'What is the effect of using collections.Counter?',
    options: [
      'Counts the frequency of elements in an iterable',
      'Sorts elements by frequency',
      'Removes duplicates',
      'Caches elements for fast lookup'
    ],
    correctAnswer: 'Counts the frequency of elements in an iterable',
    explanation: 'Counter creates a dictionary-like object mapping elements to their counts.',
    category: 'Python Collections',
    difficulty: 'Medium'
  },
  {
    id: 'python-223',
    question: 'What is the output of: print(5 < float("5.0") <= 5)?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: '5 < 5.0 is False, so the whole chained comparison evaluates to False.',
    category: 'Python Comparisons',
    difficulty: 'Hard'
  },
  {
    id: 'python-224',
    question: 'What is the effect of the itertools.islice function?',
    options: [
      'Slices an iterator without converting it to a list',
      'Shuffles elements in an iterator',
      'Reverses the order of elements',
      'Combines multiple iterators into one'
    ],
    correctAnswer: 'Slices an iterator without converting it to a list',
    explanation: 'islice allows efficient slicing of iterators and generators without materializing the entire sequence.',
    category: 'Python Itertools',
    difficulty: 'Medium'
  },
  {
    id: 'python-225',
    question: 'What is the output of: print(hash("test") == hash("test"))?',
    options: [
      'True',
      'False',
      'Depends on the interpreter',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The same string in the same session will produce the same hash value, so the comparison is True.',
    category: 'Python Hashing',
    difficulty: 'Easy'
  },
  {
    id: 'python-226',
    question: 'What does setattr(object, name, value) do in Python?',
    options: [
      'Deletes an attribute from an object',
      'Retrieves an attribute value',
      'Dynamically sets or creates an attribute',
      'Checks if an attribute exists'
    ],
    correctAnswer: 'Dynamically sets or creates an attribute',
    explanation: 'setattr() dynamically assigns a value to an attribute of an object, creating it if it does not exist.',
    category: 'Python Built-ins',
    difficulty: 'Medium'
  },
  {
    id: 'python-227',
    question: 'What is the difference between copy.copy() and copy.deepcopy()?',
    options: [
      'copy() is faster but loses data types',
      'copy() creates a shallow copy, deepcopy() recursively copies all nested objects',
      'deepcopy() only works with lists',
      'They are identical'
    ],
    correctAnswer: 'copy() creates a shallow copy, deepcopy() recursively copies all nested objects',
    explanation: 'copy.copy() only duplicates the outer object, while deepcopy() recursively copies all nested structures.',
    category: 'Python Copying',
    difficulty: 'Medium'
  },
  {
    id: 'python-228',
    question: 'How does Python implement negative indexing for lists?',
    options: [
      'It uses modulo operations',
      'It subtracts from zero internally',
      'It adds the negative index to the list length',
      'It reverses the list temporarily'
    ],
    correctAnswer: 'It adds the negative index to the list length',
    explanation: 'Negative indexes are resolved by adding them to len(list) to get the correct positive index.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-229',
    question: 'What is the output of: print(flatten([1, [2, [3, 4]], 5])) if flatten recursively flattens nested lists?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, [2, [3, 4]], 5]',
      '[1, 2, [3, 4], 5]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: 'A recursive flatten function traverses all levels of nesting, returning a single flat list.',
    category: 'Python Recursion',
    difficulty: 'Medium'
  },
  {
    id: 'python-230',
    question: 'Which method is used to remove all items from a Python list?',
    options: [
      'clear()',
      'delete()',
      'removeAll()',
      'purge()'
    ],
    correctAnswer: 'clear()',
    explanation: 'The clear() method removes all elements from a list without deleting the list itself.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-231',
    question: 'What does the globals() function return?',
    options: [
      'A list of all global variables',
      'A dictionary of the current global symbol table',
      'A list of imported modules',
      'The Python interpreter settings'
    ],
    correctAnswer: 'A dictionary of the current global symbol table',
    explanation: 'globals() returns a dictionary mapping all global variable names to their values.',
    category: 'Python Namespaces',
    difficulty: 'Medium'
  },
  {
    id: 'python-232',
    question: 'Which of these is NOT a valid way to create a dictionary?',
    options: [
      'dict(a=1, b=2)',
      '{"a": 1, "b": 2}',
      'dict([("a", 1), ("b", 2)])',
      'dict(("a", 1), ("b", 2))'
    ],
    correctAnswer: 'dict(("a", 1), ("b", 2))',
    explanation: 'The dict constructor needs a list of key-value tuples or keyword arguments, not separate tuple arguments.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-233',
    question: 'What is the output of: print(type(lambda x: x))?',
    options: [
      '<class "function">',
      '<class "lambda">',
      '<class "method">',
      '<class "generator">'
    ],
    correctAnswer: '<class "function">',
    explanation: 'Lambda expressions create anonymous functions, which are of type function in Python.',
    category: 'Python Lambdas',
    difficulty: 'Easy'
  },
  {
    id: 'python-234',
    question: 'Which of these can be used to safely serialize Python objects?',
    options: [
      'pickle',
      'marshal',
      'json',
      'All of the above'
    ],
    correctAnswer: 'json',
    explanation: 'json is safe for interoperability. pickle and marshal are Python-specific and can be unsafe with untrusted input.',
    category: 'Python Serialization',
    difficulty: 'Medium'
  },
  {
    id: 'python-235',
    question: 'What does the zip() function return in Python 3?',
    options: [
      'A list of tuples',
      'A generator-like zip object',
      'A tuple of lists',
      'A dictionary'
    ],
    correctAnswer: 'A generator-like zip object',
    explanation: 'In Python 3, zip() returns an iterator that yields tuples lazily, not a list.',
    category: 'Python Iterators',
    difficulty: 'Medium'
  },
  {
    id: 'python-236',
    question: 'What is the difference between is and == in Python?',
    options: [
      'No difference',
      'is compares values, == compares identities',
      'is compares object identity, == compares values',
      'is is only for numbers'
    ],
    correctAnswer: 'is compares object identity, == compares values',
    explanation: 'is checks if two references point to the same object, == checks if values are equal.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-237',
    question: 'Which of these will NOT raise an error?',
    options: [
      'int("10")',
      'int("10.5")',
      'int(10.5)',
      'int(True)'
    ],
    correctAnswer: 'int(10.5)',
    explanation: 'int("10.5") will raise a ValueError, while int(10.5) truncates to 10.',
    category: 'Python Type Conversion',
    difficulty: 'Medium'
  },
  {
    id: 'python-238',
    question: 'What is the output of: print(bool(""))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'Empty strings are falsy values in Python, so bool("") evaluates to False.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-239',
    question: 'Which method is called when using the with statement on a file object?',
    options: [
      '__init__ and __exit__',
      '__enter__ and __exit__',
      '__open__ and __close__',
      '__start__ and __stop__'
    ],
    correctAnswer: '__enter__ and __exit__',
    explanation: 'Context managers implement __enter__ and __exit__ to handle resource setup and cleanup.',
    category: 'Python Context Managers',
    difficulty: 'Medium'
  },
  {
    id: 'python-240',
    question: 'What is the output of: print(type(iter([])))?',
    options: [
      '<class "list">',
      '<class "iterator">',
      '<class "list_iterator">',
      '<class "iterable">'
    ],
    correctAnswer: '<class "list_iterator">',
    explanation: 'iter([]) returns a list_iterator object, which is an iterator type specifically for lists.',
    category: 'Python Iterators',
    difficulty: 'Medium'
  },
  {
    id: 'python-241',
    question: 'Which function can be used to dynamically compile and execute Python code?',
    options: [
      'compile()',
      'exec()',
      'eval()',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'compile() compiles, while exec() and eval() execute. Together, they can dynamically execute Python code.',
    category: 'Python Execution',
    difficulty: 'Hard'
  },
  {
    id: 'python-242',
    question: 'What is the default encoding for open() in Python 3?',
    options: [
      'UTF-8',
      'ASCII',
      'Latin-1',
      'System dependent'
    ],
    correctAnswer: 'System dependent',
    explanation: 'By default, open() uses the platform\'s default encoding, which is often UTF-8 but not guaranteed.',
    category: 'Python I/O',
    difficulty: 'Medium'
  },
  {
    id: 'python-243',
    question: 'Which of these is NOT a Python built-in constant?',
    options: [
      'None',
      'Ellipsis',
      'NotImplemented',
      'Undefined'
    ],
    correctAnswer: 'Undefined',
    explanation: 'Python has None, Ellipsis, and NotImplemented as built-in constants, but not Undefined.',
    category: 'Python Constants',
    difficulty: 'Easy'
  },
  {
    id: 'python-244',
    question: 'What does str.join() expect as its argument?',
    options: [
      'A list or iterable of strings',
      'A string',
      'A list of any objects',
      'An integer'
    ],
    correctAnswer: 'A list or iterable of strings',
    explanation: 'str.join() concatenates elements from an iterable of strings, inserting the separator string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-245',
    question: 'What is the output of: print(list(range(3, 3)))?',
    options: [
      '[3]',
      '[0]',
      '[]',
      'Error'
    ],
    correctAnswer: '[]',
    explanation: 'range(3, 3) is empty because the start equals the stop, producing no numbers.',
    category: 'Python Ranges',
    difficulty: 'Easy'
  },
  {
    id: 'python-246',
    question: 'What is the purpose of sys.getsizeof(object)?',
    options: [
      'Returns the size of the object in kilobytes',
      'Returns the memory address',
      'Returns the size of the object in bytes',
      'Returns the type of the object'
    ],
    correctAnswer: 'Returns the size of the object in bytes',
    explanation: 'sys.getsizeof() gives the size of an object in bytes, including overhead.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-247',
    question: 'Which built-in function can be used to reverse any iterable?',
    options: [
      'reversed()',
      'reverse()',
      'invert()',
      'iterreverse()'
    ],
    correctAnswer: 'reversed()',
    explanation: 'reversed() returns an iterator that yields elements in reverse order for any sequence.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-248',
    question: 'What happens when a Python function has no return statement?',
    options: [
      'It raises an error',
      'It returns None',
      'It returns 0',
      'It returns an empty string'
    ],
    correctAnswer: 'It returns None',
    explanation: 'By default, Python functions without an explicit return statement return None.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-249',
    question: 'Which of the following is used to release unused memory in Python?',
    options: [
      'del',
      'gc.collect()',
      'Both',
      'Neither'
    ],
    correctAnswer: 'Both',
    explanation: 'del removes references, while gc.collect() explicitly triggers garbage collection to free memory.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-250',
    question: 'What is the result of: print(any([]))?',
    options: [
      'True',
      'False',
      'None',
      'Error'
    ],
    correctAnswer: 'False',
    explanation: 'any() returns False for an empty iterable because there are no True elements.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-251',
    question: 'What will be the result of: print(any([0, "", None]))?',
    options: [
      'True',
      'False',
      '0',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'The any() function returns True if at least one element is truthy. All elements (0, "", None) are falsy, so it returns False.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-252',
    question: 'What is the result of: print({1, 2, 3} - {2, 4})?',
    options: [
      '{1, 3}',
      '{4}',
      '{2, 4}',
      '{1, 2, 3, 4}'
    ],
    correctAnswer: '{1, 3}',
    explanation: 'The minus operator on sets returns elements present in the first set but not in the second, so {1, 3}.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-253',
    question: 'What will the following code print?\n\nx = [1, 2, 3]\ny = x\nx += [4]\nprint(y)',
    options: [
      '[1, 2, 3]',
      '[1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: '[1, 2, 3, 4]',
    explanation: 'x and y refer to the same list object. Using += modifies the list in place, so y also reflects the change.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-254',
    question: 'What is the output of: print(divmod(9, 4))?',
    options: [
      '(2, 1)',
      '(2.25, 1)',
      '(1, 2)',
      'Error'
    ],
    correctAnswer: '(2, 1)',
    explanation: 'divmod(a, b) returns a tuple (quotient, remainder). For 9 divided by 4, quotient is 2, remainder is 1.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-255',
    question: 'What happens when you call bool(object()) in Python?',
    options: [
      'True',
      'False',
      'Error',
      'Depends on the object'
    ],
    correctAnswer: 'True',
    explanation: 'Instances of user-defined classes (like object()) are always considered True unless __bool__ or __len__ returns False.',
    category: 'Python Objects',
    difficulty: 'Easy'
  },
  {
    id: 'python-256',
    question: 'What is the result of: print(list(zip("abc", [1, 2])))?',
    options: [
      '[("a", 1), ("b", 2), ("c", None)]',
      '[("a", 1), ("b", 2)]',
      '[("a", 1), ("b", 2), ("c", 0)]',
      'Error'
    ],
    correctAnswer: '[("a", 1), ("b", 2)]',
    explanation: 'zip pairs elements until the shortest iterable is exhausted, so "c" is ignored.',
    category: 'Python Itertools',
    difficulty: 'Easy'
  },
  {
    id: 'python-257',
    question: 'What is the result of: print(sum([0.1] * 10) == 1.0)?',
    options: [
      'True',
      'False',
      'Error',
      'Depends on the platform'
    ],
    correctAnswer: 'False',
    explanation: 'Due to floating-point precision errors, the sum of 0.1 * 10 is slightly off from 1.0, making the comparison False.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-258',
    question: 'What will the following code print?\n\nprint([x for x in range(5) if x % 2])',
    options: [
      '[1, 3, 5]',
      '[1, 3]',
      '[0, 2, 4]',
      'Error'
    ],
    correctAnswer: '[1, 3]',
    explanation: 'The comprehension filters numbers where x % 2 is True (odd numbers). 5 is not included because range(5) stops at 4.',
    category: 'Python Comprehensions',
    difficulty: 'Easy'
  },
  {
    id: 'python-259',
    question: 'What is the output of: print(all([]))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'By definition, all() on an empty iterable returns True because there are no False elements.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-260',
    question: 'What is the type of the value returned by the map() function in Python 3?',
    options: [
      'list',
      'iterator',
      'tuple',
      'generator'
    ],
    correctAnswer: 'iterator',
    explanation: 'In Python 3, map() returns a lazy iterator, not a list. It must be converted to a list explicitly.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-261',
    question: 'What will be the result of: print("".join(reversed("abc")))?',
    options: [
      'abc',
      'cba',
      'Error',
      '["c", "b", "a"]'
    ],
    correctAnswer: 'cba',
    explanation: 'reversed("abc") creates a reverse iterator, and join concatenates the characters into "cba".',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-262',
    question: 'Which statement about Python\'s GIL (Global Interpreter Lock) is true?',
    options: [
      'It prevents multi-threading entirely in Python.',
      'It allows only one thread to execute Python bytecode at a time.',
      'It only exists in Jython, not CPython.',
      'It speeds up CPU-bound threads.'
    ],
    correctAnswer: 'It allows only one thread to execute Python bytecode at a time.',
    explanation: 'The GIL does not prevent threads, but it does restrict concurrent execution of Python bytecode in CPython.',
    category: 'Python Internals',
    difficulty: 'Medium'
  },
  {
    id: 'python-263',
    question: 'What is the output of: print(2 ** 3 ** 2)?',
    options: [
      '64',
      '512',
      '256',
      'Error'
    ],
    correctAnswer: '512',
    explanation: 'Exponentiation is right-associative, so it evaluates as 2 ** (3 ** 2) = 2 ** 9 = 512.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-264',
    question: 'What is the result of: print([i for i in range(3)].pop())?',
    options: [
      '0',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '2',
    explanation: 'The list comprehension creates [0, 1, 2], and pop() removes and returns the last element, 2.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-265',
    question: 'What will be printed?\n\nx = (1, 2, 3)\nx[0] = 10\nprint(x)',
    options: [
      '(10, 2, 3)',
      'Error',
      '(1, 2, 3)',
      'None'
    ],
    correctAnswer: 'Error',
    explanation: 'Tuples are immutable, so attempting to modify an element raises a TypeError.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-266',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Any non-empty string is considered True in a boolean context, regardless of content.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-267',
    question: 'What will this code print?\n\nprint(list(filter(None, [0, "", None, "a", 5])))',
    options: [
      '[0, "", None, "a", 5]',
      '["a", 5]',
      '["a"]',
      '[5]',
    ],
    correctAnswer: '["a", 5]',
    explanation: 'filter(None, iterable) removes all falsy elements, leaving only truthy ones.',
    category: 'Python Built-ins',
    difficulty: 'Medium'
  },
  {
    id: 'python-268',
    question: 'What will be printed?\n\nprint(3 < 4 < 5)',
    options: [
      'True',
      'False',
      'Error',
      'Depends'
    ],
    correctAnswer: 'True',
    explanation: 'Python supports chained comparisons, which are evaluated left to right as (3 < 4) and (4 < 5).',
    category: 'Python Comparisons',
    difficulty: 'Easy'
  },
  {
    id: 'python-269',
    question: 'Which of the following is immutable?',
    options: [
      'list',
      'dict',
      'set',
      'frozenset'
    ],
    correctAnswer: 'frozenset',
    explanation: 'frozenset is the immutable version of a set. Lists, dicts, and sets are mutable.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-270',
    question: 'What is the output of: print(5 // -2)?',
    options: [
      '-2',
      '-3',
      '2',
      '-1'
    ],
    correctAnswer: '-3',
    explanation: 'Integer division (//) rounds toward negative infinity, so 5 divided by -2 is -3.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-271',
    question: 'What will this print?\n\nprint(bool([]) and bool(1))',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'The and operator returns False immediately because bool([]) is False, so the second operand is not evaluated.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-272',
    question: 'What is the output of: print(chr(65))?',
    options: [
      '"65"',
      '"A"',
      '"a"',
      'Error'
    ],
    correctAnswer: '"A"',
    explanation: 'chr(65) converts the Unicode code point 65 into the character "A".',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-273',
    question: 'What does sys.getsizeof(1000) return?',
    options: [
      'The size of 1000 in bytes, including overhead',
      'Always 4 bytes',
      'The bit length of the number',
      'The size of its string representation'
    ],
    correctAnswer: 'The size of 1000 in bytes, including overhead',
    explanation: 'sys.getsizeof() returns the memory size of an object in bytes, including Python\'s internal overhead.',
    category: 'Python Memory',
    difficulty: 'Medium'
  },
  {
    id: 'python-274',
    question: 'What will this code print?\n\nprint([i for i in range(3)] * 2)',
    options: [
      '[0, 1, 2, 0, 1, 2]',
      '[0, 1, 2, 2]',
      '[0, 1, 2]',
      'Error'
    ],
    correctAnswer: '[0, 1, 2, 0, 1, 2]',
    explanation: 'Multiplying a list duplicates its contents, so the comprehension is repeated twice.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-275',
    question: 'What will be the output of: print(hex(255))?',
    options: [
      '"255"',
      '"0x255"',
      '"0xff"',
      '"ff"'
    ],
    correctAnswer: '"0xff"',
    explanation: 'hex(255) returns the string representation of 255 in hexadecimal, prefixed with "0x".',
    category: 'Python Numbers',
    difficulty: 'Easy'
  },
  {
    id: 'python-276',
    question: 'What will be the result of: print(list(reversed(range(3))))?',
    options: [
      '[2, 1, 0]',
      '[0, 1, 2]',
      'range(2, -1, -1)',
      'Error'
    ],
    correctAnswer: '[2, 1, 0]',
    explanation: 'reversed(range(3)) produces an iterator over 2, 1, 0, which is converted to a list.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-277',
    question: 'What is the result of: print(type((1,)))?',
    options: [
      '<class \'tuple\'>',
      '<class \'int\'>',
      '<class \'list\'>',
      '<class \'set\'>'
    ],
    correctAnswer: '<class \'tuple\'>',
    explanation: 'A trailing comma is required to create a single-element tuple. Without it, it\'s just an int.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-278',
    question: 'What will be printed?\n\nx = "abc"; print(x * 0)',
    options: [
      '""',
      '"abc"',
      'Error',
      '"0"'
    ],
    correctAnswer: '""',
    explanation: 'Multiplying a string by 0 produces an empty string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-279',
    question: 'What is the output of: print(round(2.675, 2))?',
    options: [
      '2.68',
      '2.67',
      'Error',
      'Depends on system'
    ],
    correctAnswer: '2.67',
    explanation: 'Due to floating-point representation, 2.675 is stored slightly less than 2.675, causing rounding down.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-280',
    question: 'What will be printed?\n\nprint(isinstance(True, int))',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'In Python, bool is a subclass of int, so isinstance(True, int) returns True.',
    category: 'Python Data Types',
    difficulty: 'Medium'
  },
  {
    id: 'python-281',
    question: 'What does dict.fromkeys([1, 2, 3], 0) produce?',
    options: [
      '{1: 0, 2: 0, 3: 0}',
      '{1: None, 2: None, 3: None}',
      '{0: 1, 0: 2, 0: 3}',
      'Error'
    ],
    correctAnswer: '{1: 0, 2: 0, 3: 0}',
    explanation: 'dict.fromkeys(iterable, value) creates a dictionary with the given keys, all mapped to the same value.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-282',
    question: 'What is the output of: print(10 % -3)?',
    options: [
      '-1',
      '1',
      '-2',
      '2'
    ],
    correctAnswer: '-2',
    explanation: 'The modulus result has the same sign as the divisor. 10 % -3 equals -2 because -3 * -4 + -2 = 10.',
    category: 'Python Numbers',
    difficulty: 'Medium'
  },
  {
    id: 'python-283',
    question: 'What is the output of: print(hash("hello") == hash("hello"))?',
    options: [
      'True',
      'False',
      'Depends on run',
      'Error'
    ],
    correctAnswer: 'True',
    explanation: 'The same string in the same run will produce the same hash value, even though Python randomizes hash seeds between runs.',
    category: 'Python Hashing',
    difficulty: 'Medium'
  },
  {
    id: 'python-284',
    question: 'What does enumerate(["a", "b"]) return?',
    options: [
      '[(0, "a"), (1, "b")]',
      '["a", "b"]',
      '<enumerate object>',
      'Error'
    ],
    correctAnswer: '<enumerate object>',
    explanation: 'enumerate returns an iterator. To see pairs, convert it to a list explicitly.',
    category: 'Python Iterators',
    difficulty: 'Easy'
  },
  {
    id: 'python-285',
    question: 'What will be printed?\n\nprint("hello".capitalize())',
    options: [
      '"hello"',
      '"Hello"',
      '"HELLO"',
      'Error'
    ],
    correctAnswer: '"Hello"',
    explanation: 'capitalize() returns a copy with the first character uppercase and the rest lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-286',
    question: 'What will be the output of: print(list(range(0, 10, 3)))?',
    options: [
      '[0, 3, 6, 9]',
      '[0, 3, 6]',
      '[3, 6, 9]',
      'Error'
    ],
    correctAnswer: '[0, 3, 6, 9]',
    explanation: 'range(start, stop, step) includes numbers starting from 0 up to 9 (step 3).',
    category: 'Python Ranges',
    difficulty: 'Easy'
  },
  {
    id: 'python-287',
    question: 'What is the result of: print(list("abc").remove("d"))?',
    options: [
      '["a", "b", "c"]',
      'None',
      'Error',
      '[]'
    ],
    correctAnswer: 'Error',
    explanation: 'remove("d") raises a ValueError because "d" is not in the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-288',
    question: 'What does bool(object) return when object is an empty set?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'Empty containers like [], {}, set(), and "" are all falsy in Python.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-289',
    question: 'What is the output of: print([None] * 3)',
    options: [
      '[None, None, None]',
      '[None]',
      'Error',
      '[]'
    ],
    correctAnswer: '[None, None, None]',
    explanation: 'Multiplying a list replicates its elements, so [None] * 3 creates three None elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-290',
    question: 'What is the output of: print(list({1, 2, 3} & {2, 3, 4}))?',
    options: [
      '[2, 3]',
      '[1, 4]',
      '[1, 2, 3, 4]',
      'Error'
    ],
    correctAnswer: '[2, 3]',
    explanation: 'The & operator computes the intersection of two sets, producing {2, 3}.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-291',
    question: 'What will be printed?\n\nprint(type(lambda x: x))',
    options: [
      '<class \'lambda\'>',
      '<class \'function\'>',
      '<class \'callable\'>',
      'Error'
    ],
    correctAnswer: '<class \'function\'>',
    explanation: 'Lambdas are just anonymous functions, so their type is function.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-292',
    question: 'What is the output of: print(5 in {1: "a", 5: "b"})?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'The `in` operator checks dictionary keys by default, so 5 is found.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-293',
    question: 'What will the following print?\n\nprint(list(map(str.upper, ["a", "b"])))',
    options: [
      '["a", "b"]',
      '["A", "B"]',
      'Error',
      'None'
    ],
    correctAnswer: '["A", "B"]',
    explanation: 'map applies str.upper to each element, producing uppercase strings.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-294',
    question: 'What is the output of: print("hello".find("x"))?',
    options: [
      '-1',
      '0',
      'Error',
      'None'
    ],
    correctAnswer: '-1',
    explanation: 'str.find returns -1 when the substring is not found.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-295',
    question: 'What does "".join(["a", "b", "c"]) return?',
    options: [
      '"a b c"',
      '"abc"',
      '["a", "b", "c"]',
      'Error'
    ],
    correctAnswer: '"abc"',
    explanation: 'join concatenates all strings in the iterable without any separator.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-296',
    question: 'What will be printed?\n\nx = [1, 2, 3]\nprint(x.clear())',
    options: [
      '[]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'list.clear() empties the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-297',
    question: 'What is the output of: print(ord("A"))?',
    options: [
      '65',
      '"A"',
      '1',
      'Error'
    ],
    correctAnswer: '65',
    explanation: 'ord() converts a single character to its Unicode code point, so "A" is 65.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-298',
    question: 'What is the result of: print([i for i in range(3) if i])?',
    options: [
      '[0, 1, 2]',
      '[1, 2]',
      '[0]',
      '[]'
    ],
    correctAnswer: '[1, 2]',
    explanation: 'The comprehension filters out 0 because it is falsy, leaving 1 and 2.',
    category: 'Python Comprehensions',
    difficulty: 'Easy'
  },
  {
    id: 'python-299',
    question: 'What will be the output of: print(bool(0) or bool([]))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'Both 0 and [] are falsy, so the or expression evaluates to False.',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-300',
    question: 'What is the output of: print(list(zip("ab", "123")))?',
    options: [
      '[("a", "1"), ("b", "2")]',
      '[("a", "1"), ("b", "2"), ("", "3")]',
      '[("a", "1"), ("b", "2"), ("c", "3")]',
      'Error'
    ],
    correctAnswer: '[("a", "1"), ("b", "2")]',
    explanation: 'zip pairs elements until the shortest iterable is exhausted, ignoring the extra "3".',
    category: 'Python Itertools',
    difficulty: 'Easy'
  },
  {
    id: 'python-301',
    question: 'Which of the following is used to handle exceptions in Python?',
    options: [
      'try-except',
      'catch-throw',
      'do-catch',
      'error-catch'
    ],
    correctAnswer: 'try-except',
    explanation: 'Python uses try-except blocks to handle exceptions.',
    category: 'Python Exceptions',
    difficulty: 'Easy'
  },
  {
    id: 'python-302',
    question: 'What is the output of: print(type([]))?',
    options: [
      "<class 'list'>",
      "<class 'tuple'>",
      "<class 'dict'>",
      "<class 'set'>"
    ],
    correctAnswer: "<class 'list'>",
    explanation: '[] creates a list in Python.',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-303',
    question: 'Which keyword is used to define a class in Python?',
    options: [
      'class',
      'def',
      'struct',
      'object'
    ],
    correctAnswer: 'class',
    explanation: 'The class keyword is used to define a class in Python.',
    category: 'Python OOP',
    difficulty: 'Easy'
  },
  {
    id: 'python-304',
    question: 'What is the output of: print(2 ** 3 ** 2)?',
    options: [
      '512',
      '64',
      '36',
      '256'
    ],
    correctAnswer: '512',
    explanation: 'Exponentiation is right-associative: 3 ** 2 = 9, then 2 ** 9 = 512.',
    category: 'Python Operators',
    difficulty: 'Medium'
  },
  {
    id: 'python-305',
    question: 'Which of the following is NOT a valid Python data type?',
    options: [
      'array',
      'list',
      'tuple',
      'set'
    ],
    correctAnswer: 'array',
    explanation: 'Python does not have a built-in array type; it uses lists instead.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-306',
    question: 'What is the output of: print(bool("False"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Any non-empty string is truthy in Python, even "False".',
    category: 'Python Booleans',
    difficulty: 'Easy'
  },
  {
    id: 'python-307',
    question: 'Which method is used to add an item to the end of a list?',
    options: [
      'append()',
      'add()',
      'insert()',
      'push()'
    ],
    correctAnswer: 'append()',
    explanation: 'The append() method adds an item to the end of a list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-308',
    question: 'What is the output of: print({1, 2, 3} == {3, 2, 1})?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'Sets are unordered collections, so their equality depends on elements, not order.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-309',
    question: 'Which of the following is used to import a module in Python?',
    options: [
      'import',
      'include',
      'require',
      'using'
    ],
    correctAnswer: 'import',
    explanation: 'The import keyword is used to import modules in Python.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-310',
    question: 'What is the output of: print("Hello"[1])?',
    options: [
      'e',
      'H',
      'l',
      'o'
    ],
    correctAnswer: 'e',
    explanation: 'String indexing starts at 0, so [1] is the second character.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-311',
    question: 'Which function returns the length of a list?',
    options: [
      'len()',
      'length()',
      'count()',
      'size()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of a list or other collection.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-312',
    question: 'What is the output of: print(list(range(2, 10, 2)))?',
    options: [
      '[2, 4, 6, 8]',
      '[2, 3, 4, 5, 6, 7, 8, 9]',
      '[2, 4, 6, 8, 10]',
      '[2, 6, 10]'
    ],
    correctAnswer: '[2, 4, 6, 8]',
    explanation: 'range(2, 10, 2) produces even numbers from 2 up to 8.',
    category: 'Python Ranges',
    difficulty: 'Easy'
  },
  {
    id: 'python-313',
    question: 'Which of the following is a mutable data type?',
    options: [
      'list',
      'tuple',
      'str',
      'int'
    ],
    correctAnswer: 'list',
    explanation: 'Lists are mutable, while tuples, strings, and integers are immutable.',
    category: 'Python Data Types',
    difficulty: 'Easy'
  },
  {
    id: 'python-314',
    question: 'What is the output of: print("abc".upper())?',
    options: [
      'ABC',
      'abc',
      'Abc',
      'Error'
    ],
    correctAnswer: 'ABC',
    explanation: 'The upper() method returns the string in uppercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-315',
    question: 'Which of the following is used to define a function in Python?',
    options: [
      'def',
      'function',
      'fun',
      'define'
    ],
    correctAnswer: 'def',
    explanation: 'The def keyword is used to define functions in Python.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-316',
    question: 'What is the output of: print(10 // 3)?',
    options: [
      '3',
      '3.33',
      '3.0',
      '4'
    ],
    correctAnswer: '3',
    explanation: '// is integer division, so 10 // 3 is 3.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-317',
    question: 'Which of the following is a valid variable name in Python?',
    options: [
      'my_var',
      '2var',
      'my-var',
      'var!'
    ],
    correctAnswer: 'my_var',
    explanation: 'Variable names cannot start with a digit or contain special characters except underscore.',
    category: 'Python Syntax',
    difficulty: 'Easy'
  },
  {
    id: 'python-318',
    question: 'What is the output of: print({"a": 1}.get("b", 2))?',
    options: [
      '2',
      '1',
      'None',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'dict.get(key, default) returns the default if the key is not found.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-319',
    question: 'Which of the following is used to create an anonymous function?',
    options: [
      'lambda',
      'def',
      'func',
      'anon'
    ],
    correctAnswer: 'lambda',
    explanation: 'lambda is used to create anonymous functions in Python.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-320',
    question: 'What is the output of: print(" ".isspace())?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isspace() returns True if the string contains only whitespace.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-321',
    question: 'Which of the following is used to read a file in Python?',
    options: [
      'open()',
      'readfile()',
      'file()',
      'getfile()'
    ],
    correctAnswer: 'open()',
    explanation: 'open() is used to open files for reading or writing.',
    category: 'Python File I/O',
    difficulty: 'Easy'
  },
  {
    id: 'python-322',
    question: 'What is the output of: print(list(reversed([1, 2, 3])))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      '[1, 3, 2]',
      '[2, 1, 3]'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'reversed() returns an iterator that yields the elements in reverse order.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-323',
    question: 'Which of the following is used to install external packages in Python?',
    options: [
      'pip',
      'npm',
      'apt',
      'brew'
    ],
    correctAnswer: 'pip',
    explanation: 'pip is the package installer for Python.',
    category: 'Python Packages',
    difficulty: 'Easy'
  },
  {
    id: 'python-324',
    question: 'What is the output of: print("abc".replace("b", "d"))?',
    options: [
      'adc',
      'abc',
      'abd',
      'Error'
    ],
    correctAnswer: 'adc',
    explanation: 'replace() replaces all occurrences of the substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-325',
    question: 'Which of the following is used to check if a key exists in a dictionary?',
    options: [
      'in',
      'has',
      'exists',
      'contains'
    ],
    correctAnswer: 'in',
    explanation: 'The in operator checks for key existence in a dictionary.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-326',
    question: 'What is the output of: print([i*i for i in range(3)])?',
    options: [
      '[0, 1, 4]',
      '[1, 4, 9]',
      '[0, 1, 2]',
      '[1, 2, 3]'
    ],
    correctAnswer: '[0, 1, 4]',
    explanation: 'List comprehension squares each number in range(3): 0, 1, 2.',
    category: 'Python Comprehensions',
    difficulty: 'Easy'
  },
  {
    id: 'python-327',
    question: 'Which of the following is used to create a tuple?',
    options: [
      '(1, 2, 3)',
      '[1, 2, 3]',
      '{1, 2, 3}',
      '<1, 2, 3>'
    ],
    correctAnswer: '(1, 2, 3)',
    explanation: 'Tuples are created using parentheses ().',
    category: 'Python Data Structures',
    difficulty: 'Easy'
  },
  {
    id: 'python-328',
    question: 'What is the output of: print("abc"[::-1])?',
    options: [
      'cba',
      'abc',
      'bac',
      'Error'
    ],
    correctAnswer: 'cba',
    explanation: 'Slicing with [::-1] reverses the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-329',
    question: 'Which of the following is used to remove an item from a set?',
    options: [
      'remove()',
      'delete()',
      'pop()',
      'discard()'
    ],
    correctAnswer: 'remove()',
    explanation: 'remove() removes a specific item from a set; discard() can also be used.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-330',
    question: 'What is the output of: print(5 > 3 and 2 < 1)?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: '5 > 3 is True, 2 < 1 is False, so True and False is False.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-331',
    question: 'Which of the following is used to get the ASCII value of a character?',
    options: [
      'ord()',
      'chr()',
      'ascii()',
      'code()'
    ],
    correctAnswer: 'ord()',
    explanation: 'ord() returns the Unicode code point of a character.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-332',
    question: 'What is the output of: print("Hello".lower())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'lower() returns the string in lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-333',
    question: 'Which of the following is used to iterate over a sequence of numbers?',
    options: [
      'for',
      'while',
      'do-while',
      'loop'
    ],
    correctAnswer: 'for',
    explanation: 'for loops are commonly used to iterate over sequences in Python.',
    category: 'Python Loops',
    difficulty: 'Easy'
  },
  {
    id: 'python-334',
    question: 'What is the output of: print(3 * "ab")?',
    options: [
      'ababab',
      'ab',
      'Error',
      '3ab'
    ],
    correctAnswer: 'ababab',
    explanation: 'Multiplying a string by an integer repeats the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-335',
    question: 'Which of the following is used to check if a value is None?',
    options: [
      'is',
      '==',
      'equals',
      '===' 
    ],
    correctAnswer: 'is',
    explanation: 'The is operator checks for object identity, commonly used for None.',
    category: 'Python Operators',
    difficulty: 'Easy'
  },
  {
    id: 'python-336',
    question: 'What is the output of: print(type((1,)))?',
    options: [
      "<class 'tuple'>",
      "<class 'int'>",
      "<class 'list'>",
      "<class 'set'>"
    ],
    correctAnswer: "<class 'tuple'>",
    explanation: 'A single-element tuple must have a trailing comma: (1,).',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-337',
    question: 'Which of the following is used to get the unique elements from a list?',
    options: [
      'set()',
      'list()',
      'dict()',
      'tuple()'
    ],
    correctAnswer: 'set()',
    explanation: 'set() removes duplicates from a list.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-338',
    question: 'What is the output of: print("abc".find("b"))?',
    options: [
      '1',
      '0',
      '-1',
      '2'
    ],
    correctAnswer: '1',
    explanation: 'find() returns the index of the first occurrence of the substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-339',
    question: 'Which of the following is used to remove whitespace from the beginning and end of a string?',
    options: [
      'strip()',
      'trim()',
      'remove()',
      'cut()'
    ],
    correctAnswer: 'strip()',
    explanation: 'strip() removes leading and trailing whitespace.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-340',
    question: 'What is the output of: print([1, 2, 3] + [4, 5])?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[5, 4, 3, 2, 1]',
      '[1, 2, 3, [4, 5]]',
      '[4, 5, 1, 2, 3]'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: 'The + operator concatenates lists.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-341',
    question: 'Which of the following is used to get the maximum value from a list?',
    options: [
      'max()',
      'maximum()',
      'top()',
      'highest()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-342',
    question: 'What is the output of: print("abc".count("a"))?',
    options: [
      '1',
      '0',
      '2',
      'Error'
    ],
    correctAnswer: '1',
    explanation: 'count() returns the number of occurrences of the substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-343',
    question: 'Which of the following is used to check if a string starts with a specific substring?',
    options: [
      'startswith()',
      'startwith()',
      'beginswith()',
      'isstart()'
    ],
    correctAnswer: 'startswith()',
    explanation: 'startswith() checks if a string starts with the specified substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-344',
    question: 'What is the output of: print([1, 2, 3].pop())?',
    options: [
      '3',
      '[1, 2]',
      'Error',
      'None'
    ],
    correctAnswer: '3',
    explanation: 'pop() removes and returns the last item of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-345',
    question: 'Which of the following is used to get the type of an object?',
    options: [
      'type()',
      'typeof()',
      'gettype()',
      'objecttype()'
    ],
    correctAnswer: 'type()',
    explanation: 'type() returns the type of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-346',
    question: 'What is the output of: print("abc".isalpha())?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isalpha() returns True if all characters in the string are alphabetic.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-347',
    question: 'Which of the following is used to convert a string to an integer?',
    options: [
      'int()',
      'str()',
      'float()',
      'toInt()'
    ],
    correctAnswer: 'int()',
    explanation: 'int() converts a string or number to an integer.',
    category: 'Python Built-ins',
    difficulty: 'Easy'
  },
  {
    id: 'python-348',
    question: 'What is the output of: print("abc123".isalnum())?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isalnum() returns True if all characters are alphanumeric.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-349',
    question: 'Which of the following is used to get the sum of all items in a list?',
    options: [
      'sum()',
      'add()',
      'total()',
      'plus()'
    ],
    correctAnswer: 'sum()',
    explanation: 'sum() returns the sum of all items in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-350',
    question: 'What is the output of: print("Hello, World!".split(", "))?',
    options: [
      "['Hello', 'World!']",
      "['Hello, World!']",
      "['Hello', ' World!']",
      'Error'
    ],
    correctAnswer: "['Hello', 'World!']",
    explanation: 'split(", ") splits the string at the comma and space.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-351',
    question: 'What is the output of: print("hello".title())?',
    options: [
      'Hello',
      'HELLO',
      'hello',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'title() capitalizes the first letter of each word in the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-352',
    question: 'Which of the following is used to check if a string ends with a specific substring?',
    options: [
      'endswith()',
      'endwith()',
      'finishwith()',
      'end()'
    ],
    correctAnswer: 'endswith()',
    explanation: 'endswith() checks if a string ends with the specified substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-353',
    question: 'What is the output of: print([1, 2, 3].extend([4, 5]))?',
    options: [
      '[1, 2, 3, 4, 5]',
      'None',
      '[4, 5]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'extend() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-354',
    question: 'Which of the following is used to get the minimum value from a list?',
    options: [
      'min()',
      'minimum()',
      'lowest()',
      'smallest()'
    ],
    correctAnswer: 'min()',
    explanation: 'min() returns the smallest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-355',
    question: 'What is the output of: print("abc".center(7, "*"))?',
    options: [
      '**abc**',
      'abc****',
      '****abc',
      'Error'
    ],
    correctAnswer: '**abc**',
    explanation: 'center() centers the string and fills with the specified character.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-356',
    question: 'Which of the following is used to remove an item from a list by index?',
    options: [
      'pop()',
      'remove()',
      'delete()',
      'del'
    ],
    correctAnswer: 'pop()',
    explanation: 'pop() removes and returns an item at the specified index.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-357',
    question: 'What is the output of: print("hello".replace("l", "x", 1))?',
    options: [
      'hexlo',
      'hexxo',
      'hello',
      'Error'
    ],
    correctAnswer: 'hexlo',
    explanation: 'replace() with count parameter replaces only the first occurrence.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-358',
    question: 'Which of the following is used to check if a string contains only digits?',
    options: [
      'isdigit()',
      'isnumeric()',
      'isnumber()',
      'isdigits()'
    ],
    correctAnswer: 'isdigit()',
    explanation: 'isdigit() returns True if all characters in the string are digits.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-359',
    question: 'What is the output of: print([1, 2, 3].insert(1, 5))?',
    options: [
      '[1, 5, 2, 3]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'insert() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-360',
    question: 'Which of the following is used to get the absolute value of a number?',
    options: [
      'abs()',
      'absolute()',
      'positive()',
      'magnitude()'
    ],
    correctAnswer: 'abs()',
    explanation: 'abs() returns the absolute value of a number.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-361',
    question: 'What is the output of: print("hello".ljust(10, "*"))?',
    options: [
      'hello*****',
      '*****hello',
      'hello',
      'Error'
    ],
    correctAnswer: 'hello*****',
    explanation: 'ljust() left-aligns the string and fills with the specified character.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-362',
    question: 'Which of the following is used to check if a string contains only whitespace?',
    options: [
      'isspace()',
      'iswhitespace()',
      'isblank()',
      'isempty()'
    ],
    correctAnswer: 'isspace()',
    explanation: 'isspace() returns True if all characters in the string are whitespace.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-363',
    question: 'What is the output of: print([1, 2, 3].index(2))?',
    options: [
      '1',
      '2',
      '0',
      'Error'
    ],
    correctAnswer: '1',
    explanation: 'index() returns the index of the first occurrence of the value.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-364',
    question: 'Which of the following is used to round a number to a specified number of decimal places?',
    options: [
      'round()',
      'rounding()',
      'decimal()',
      'precision()'
    ],
    correctAnswer: 'round()',
    explanation: 'round() rounds a number to the specified number of decimal places.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-365',
    question: 'What is the output of: print("hello".rjust(10, "*"))?',
    options: [
      '*****hello',
      'hello*****',
      'hello',
      'Error'
    ],
    correctAnswer: '*****hello',
    explanation: 'rjust() right-aligns the string and fills with the specified character.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-366',
    question: 'Which of the following is used to check if a string starts with a specific substring?',
    options: [
      'startswith()',
      'startwith()',
      'beginwith()',
      'start()'
    ],
    correctAnswer: 'startswith()',
    explanation: 'startswith() checks if a string starts with the specified substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-367',
    question: 'What is the output of: print([1, 2, 3].count(2))?',
    options: [
      '1',
      '2',
      '0',
      'Error'
    ],
    correctAnswer: '1',
    explanation: 'count() returns the number of occurrences of the value in the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-368',
    question: 'Which of the following is used to get the power of a number?',
    options: [
      'pow()',
      'power()',
      'exponent()',
      'raise()'
    ],
    correctAnswer: 'pow()',
    explanation: 'pow() returns the value of x raised to the power of y.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-369',
    question: 'What is the output of: print("hello".zfill(10))?',
    options: [
      '00000hello',
      'hello00000',
      'hello',
      'Error'
    ],
    correctAnswer: '00000hello',
    explanation: 'zfill() pads the string with zeros on the left.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-370',
    question: 'Which of the following is used to check if a string contains only lowercase letters?',
    options: [
      'islower()',
      'islowercase()',
      'isdowncase()',
      'issmall()'
    ],
    correctAnswer: 'islower()',
    explanation: 'islower() returns True if all characters in the string are lowercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-371',
    question: 'What is the output of: print([1, 2, 3].reverse())?',
    options: [
      '[3, 2, 1]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'reverse() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-372',
    question: 'Which of the following is used to get the quotient and remainder of division?',
    options: [
      'divmod()',
      'quotient()',
      'remainder()',
      'divide()'
    ],
    correctAnswer: 'divmod()',
    explanation: 'divmod() returns a tuple containing the quotient and remainder.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-373',
    question: 'What is the output of: print("hello".swapcase())?',
    options: [
      'HELLO',
      'hello',
      'hELLO',
      'Error'
    ],
    correctAnswer: 'HELLO',
    explanation: 'swapcase() swaps the case of all characters in the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-374',
    question: 'Which of the following is used to check if a string contains only uppercase letters?',
    options: [
      'isupper()',
      'isuppercase()',
      'isupcase()',
      'isbig()'
    ],
    correctAnswer: 'isupper()',
    explanation: 'isupper() returns True if all characters in the string are uppercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-375',
    question: 'What is the output of: print([1, 2, 3].sort())?',
    options: [
      '[1, 2, 3]',
      'None',
      '[3, 2, 1]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'sort() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-376',
    question: 'Which of the following is used to get the hexadecimal representation of a number?',
    options: [
      'hex()',
      'hexadecimal()',
      'tohex()',
      'base16()'
    ],
    correctAnswer: 'hex()',
    explanation: 'hex() converts an integer to a hexadecimal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-377',
    question: 'What is the output of: print("hello".capitalize())?',
    options: [
      'Hello',
      'HELLO',
      'hello',
      'Error'
    ],
    correctAnswer: 'Hello',
    explanation: 'capitalize() returns a copy with the first character uppercase.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-378',
    question: 'Which of the following is used to check if a string is a valid identifier?',
    options: [
      'isidentifier()',
      'isident()',
      'isvalid()',
      'isname()'
    ],
    correctAnswer: 'isidentifier()',
    explanation: 'isidentifier() returns True if the string is a valid identifier.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-379',
    question: 'What is the output of: print([1, 2, 3].copy())?',
    options: [
      '[1, 2, 3]',
      'None',
      '[3, 2, 1]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3]',
    explanation: 'copy() returns a shallow copy of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-380',
    question: 'Which of the following is used to get the octal representation of a number?',
    options: [
      'oct()',
      'octal()',
      'tooct()',
      'base8()'
    ],
    correctAnswer: 'oct()',
    explanation: 'oct() converts an integer to an octal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-381',
    question: 'What is the output of: print("hello".casefold())?',
    options: [
      'hello',
      'HELLO',
      'Hello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'casefold() returns a casefolded copy of the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-382',
    question: 'Which of the following is used to check if a string is printable?',
    options: [
      'isprintable()',
      'isprint()',
      'isdisplayable()',
      'isshowable()'
    ],
    correctAnswer: 'isprintable()',
    explanation: 'isprintable() returns True if all characters are printable.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-383',
    question: 'What is the output of: print([1, 2, 3].clear())?',
    options: [
      '[]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'clear() removes all items from the list and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-384',
    question: 'Which of the following is used to get the binary representation of a number?',
    options: [
      'bin()',
      'binary()',
      'tobin()',
      'base2()'
    ],
    correctAnswer: 'bin()',
    explanation: 'bin() converts an integer to a binary string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-385',
    question: 'What is the output of: print("hello".encode())?',
    options: [
      "b'hello'",
      "'hello'",
      'hello',
      'Error'
    ],
    correctAnswer: "b'hello'",
    explanation: 'encode() returns an encoded version of the string as bytes.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-386',
    question: 'Which of the following is used to check if a string is a title case?',
    options: [
      'istitle()',
      'istitlecase()',
      'iscapitalized()',
      'isheading()'
    ],
    correctAnswer: 'istitle()',
    explanation: 'istitle() returns True if the string is titlecased.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-387',
    question: 'What is the output of: print([1, 2, 3].remove(2))?',
    options: [
      '[1, 3]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'remove() removes the first occurrence of the value and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-388',
    question: 'Which of the following is used to get the ASCII value of a character?',
    options: [
      'ord()',
      'ascii()',
      'char()',
      'code()'
    ],
    correctAnswer: 'ord()',
    explanation: 'ord() returns the Unicode code point of a character.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-389',
    question: 'What is the output of: print("hello".expandtabs())?',
    options: [
      'hello',
      'h    ello',
      'h\tello',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'expandtabs() expands tab characters to spaces.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-390',
    question: 'Which of the following is used to check if a string is a decimal?',
    options: [
      'isdecimal()',
      'isdec()',
      'isnumber()',
      'isdigit()'
    ],
    correctAnswer: 'isdecimal()',
    explanation: 'isdecimal() returns True if all characters are decimal characters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-391',
    question: 'What is the output of: print([1, 2, 3].pop(1))?',
    options: [
      '2',
      '[1, 3]',
      'None',
      'Error'
    ],
    correctAnswer: '2',
    explanation: 'pop(1) removes and returns the item at index 1.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-392',
    question: 'Which of the following is used to get the character from an ASCII value?',
    options: [
      'chr()',
      'char()',
      'ascii()',
      'code()'
    ],
    correctAnswer: 'chr()',
    explanation: 'chr() returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-393',
    question: 'What is the output of: print("hello".lstrip())?',
    options: [
      'hello',
      'ello',
      'h',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'lstrip() removes leading whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-394',
    question: 'Which of the following is used to check if a string is numeric?',
    options: [
      'isnumeric()',
      'isnum()',
      'isnumber()',
      'isdigit()'
    ],
    correctAnswer: 'isnumeric()',
    explanation: 'isnumeric() returns True if all characters are numeric characters.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-395',
    question: 'What is the output of: print([1, 2, 3].insert(0, 0))?',
    options: [
      '[0, 1, 2, 3]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'insert(0, 0) inserts 0 at index 0 and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-396',
    question: 'Which of the following is used to get the length of an object?',
    options: [
      'len()',
      'length()',
      'size()',
      'count()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-397',
    question: 'What is the output of: print("hello".rstrip())?',
    options: [
      'hello',
      'hell',
      'o',
      'Error'
    ],
    correctAnswer: 'hello',
    explanation: 'rstrip() removes trailing whitespace from the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-398',
    question: 'Which of the following is used to check if a string is a valid title?',
    options: [
      'istitle()',
      'istitlecase()',
      'iscapitalized()',
      'isheading()'
    ],
    correctAnswer: 'istitle()',
    explanation: 'istitle() returns True if the string is titlecased.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-399',
    question: 'What is the output of: print([1, 2, 3].extend([4, 5]))?',
    options: [
      '[1, 2, 3, 4, 5]',
      'None',
      '[4, 5]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'extend() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-400',
    question: 'Which of the following is used to get the maximum value from an iterable?',
    options: [
      'max()',
      'maximum()',
      'highest()',
      'top()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-401',
    question: 'What is the output of: print("hello".partition("l"))?',
    options: [
      "('he', 'l', 'lo')",
      "('h', 'l', 'ello')",
      "('he', 'll', 'o')",
      'Error'
    ],
    correctAnswer: "('he', 'l', 'lo')",
    explanation: 'partition() splits the string at the first occurrence of the separator.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-402',
    question: 'Which of the following is used to check if all elements in an iterable are True?',
    options: [
      'all()',
      'every()',
      'checkall()',
      'verify()'
    ],
    correctAnswer: 'all()',
    explanation: 'all() returns True if all elements in the iterable are True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-403',
    question: 'What is the output of: print([1, 2, 3].copy())?',
    options: [
      '[1, 2, 3]',
      'None',
      '[3, 2, 1]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3]',
    explanation: 'copy() returns a shallow copy of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-404',
    question: 'Which of the following is used to get the sorted version of an iterable?',
    options: [
      'sorted()',
      'sort()',
      'order()',
      'arrange()'
    ],
    correctAnswer: 'sorted()',
    explanation: 'sorted() returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-405',
    question: 'What is the output of: print("hello".rpartition("l"))?',
    options: [
      "('he', 'l', 'lo')",
      "('hel', 'l', 'o')",
      "('he', 'll', 'o')",
      'Error'
    ],
    correctAnswer: "('hel', 'l', 'o')",
    explanation: 'rpartition() splits the string at the last occurrence of the separator.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-406',
    question: 'Which of the following is used to check if any element in an iterable is True?',
    options: [
      'any()',
      'some()',
      'checkany()',
      'verify()'
    ],
    correctAnswer: 'any()',
    explanation: 'any() returns True if any element in the iterable is True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-407',
    question: 'What is the output of: print([1, 2, 3] * 2)?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: 'Multiplying a list by an integer repeats the list elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-408',
    question: 'Which of the following is used to get the reversed version of an iterable?',
    options: [
      'reversed()',
      'reverse()',
      'flip()',
      'invert()'
    ],
    correctAnswer: 'reversed()',
    explanation: 'reversed() returns a reverse iterator over the values of the given sequence.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-409',
    question: 'What is the output of: print("hello".splitlines())?',
    options: [
      "['hello']",
      "['h', 'e', 'l', 'l', 'o']",
      "['hello']",
      'Error'
    ],
    correctAnswer: "['hello']",
    explanation: 'splitlines() splits the string at line boundaries.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-410',
    question: 'Which of the following is used to get the length of an object?',
    options: [
      'len()',
      'length()',
      'size()',
      'count()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-411',
    question: 'What is the output of: print([1, 2, 3] + [4, 5])?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[5, 4, 3, 2, 1]',
      '[1, 2, 3, [4, 5]]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: 'The + operator concatenates lists.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-412',
    question: 'Which of the following is used to get the sum of all items in an iterable?',
    options: [
      'sum()',
      'add()',
      'total()',
      'plus()'
    ],
    correctAnswer: 'sum()',
    explanation: 'sum() returns the sum of all items in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-413',
    question: 'What is the output of: print("hello".maketrans("l", "x"))?',
    options: [
      '{108: 120}',
      "'hexlo'",
      "'hello'",
      'Error'
    ],
    correctAnswer: '{108: 120}',
    explanation: 'maketrans() returns a translation table usable for str.translate().',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-414',
    question: 'Which of the following is used to get the maximum value from an iterable?',
    options: [
      'max()',
      'maximum()',
      'highest()',
      'top()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-415',
    question: 'What is the output of: print([1, 2, 3].index(1))?',
    options: [
      '0',
      '1',
      '2',
      'Error'
    ],
    correctAnswer: '0',
    explanation: 'index() returns the index of the first occurrence of the value.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-416',
    question: 'Which of the following is used to get the minimum value from an iterable?',
    options: [
      'min()',
      'minimum()',
      'lowest()',
      'smallest()'
    ],
    correctAnswer: 'min()',
    explanation: 'min() returns the smallest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-417',
    question: 'What is the output of: print("hello".translate({108: 120}))?',
    options: [
      "'hexlo'",
      "'hello'",
      "'hxllo'",
      'Error'
    ],
    correctAnswer: "'hexlo'",
    explanation: 'translate() applies the translation table to the string.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-418',
    question: 'Which of the following is used to get the type of an object?',
    options: [
      'type()',
      'typeof()',
      'gettype()',
      'objecttype()'
    ],
    correctAnswer: 'type()',
    explanation: 'type() returns the type of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-419',
    question: 'What is the output of: print([1, 2, 3].count(1))?',
    options: [
      '1',
      '2',
      '0',
      'Error'
    ],
    correctAnswer: '1',
    explanation: 'count() returns the number of occurrences of the value in the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-420',
    question: 'Which of the following is used to get the absolute value of a number?',
    options: [
      'abs()',
      'absolute()',
      'positive()',
      'magnitude()'
    ],
    correctAnswer: 'abs()',
    explanation: 'abs() returns the absolute value of a number.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-421',
    question: 'What is the output of: print("hello".format())?',
    options: [
      "'hello'",
      "'Hello'",
      "'HELLO'",
      'Error'
    ],
    correctAnswer: "'hello'",
    explanation: 'format() with no arguments returns the string unchanged.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-422',
    question: 'Which of the following is used to get the power of a number?',
    options: [
      'pow()',
      'power()',
      'exponent()',
      'raise()'
    ],
    correctAnswer: 'pow()',
    explanation: 'pow() returns the value of x raised to the power of y.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-423',
    question: 'What is the output of: print([1, 2, 3].pop())?',
    options: [
      '3',
      '[1, 2]',
      'None',
      'Error'
    ],
    correctAnswer: '3',
    explanation: 'pop() removes and returns the last item of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-424',
    question: 'Which of the following is used to round a number to a specified number of decimal places?',
    options: [
      'round()',
      'rounding()',
      'decimal()',
      'precision()'
    ],
    correctAnswer: 'round()',
    explanation: 'round() rounds a number to the specified number of decimal places.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-425',
    question: 'What is the output of: print("hello".format_map({}))?',
    options: [
      "'hello'",
      "'Hello'",
      "'HELLO'",
      'Error'
    ],
    correctAnswer: "'hello'",
    explanation: 'format_map() with an empty dictionary returns the string unchanged.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-426',
    question: 'Which of the following is used to get the quotient and remainder of division?',
    options: [
      'divmod()',
      'quotient()',
      'remainder()',
      'divide()'
    ],
    correctAnswer: 'divmod()',
    explanation: 'divmod() returns a tuple containing the quotient and remainder.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-427',
    question: 'What is the output of: print([1, 2, 3].remove(2))?',
    options: [
      '[1, 3]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'remove() removes the first occurrence of the value and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-428',
    question: 'Which of the following is used to get the hexadecimal representation of a number?',
    options: [
      'hex()',
      'hexadecimal()',
      'tohex()',
      'base16()'
    ],
    correctAnswer: 'hex()',
    explanation: 'hex() converts an integer to a hexadecimal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-429',
    question: 'What is the output of: print("hello".__contains__("l"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__contains__() checks if the string contains the substring.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-430',
    question: 'Which of the following is used to get the octal representation of a number?',
    options: [
      'oct()',
      'octal()',
      'tooct()',
      'base8()'
    ],
    correctAnswer: 'oct()',
    explanation: 'oct() converts an integer to an octal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-431',
    question: 'What is the output of: print([1, 2, 3].insert(1, 5))?',
    options: [
      '[1, 5, 2, 3]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'insert() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-432',
    question: 'Which of the following is used to get the binary representation of a number?',
    options: [
      'bin()',
      'binary()',
      'tobin()',
      'base2()'
    ],
    correctAnswer: 'bin()',
    explanation: 'bin() converts an integer to a binary string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-433',
    question: 'What is the output of: print("hello".__len__())?',
    options: [
      '5',
      '4',
      '6',
      'Error'
    ],
    correctAnswer: '5',
    explanation: '__len__() returns the length of the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-434',
    question: 'Which of the following is used to get the ASCII value of a character?',
    options: [
      'ord()',
      'ascii()',
      'char()',
      'code()'
    ],
    correctAnswer: 'ord()',
    explanation: 'ord() returns the Unicode code point of a character.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-435',
    question: 'What is the output of: print([1, 2, 3].extend([4, 5]))?',
    options: [
      '[1, 2, 3, 4, 5]',
      'None',
      '[4, 5]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'extend() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-436',
    question: 'Which of the following is used to get the character from an ASCII value?',
    options: [
      'chr()',
      'char()',
      'ascii()',
      'code()'
    ],
    correctAnswer: 'chr()',
    explanation: 'chr() returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-437',
    question: 'What is the output of: print("hello".__getitem__(1))?',
    options: [
      "'e'",
      "'h'",
      "'l'",
      'Error'
    ],
    correctAnswer: "'e'",
    explanation: '__getitem__() returns the character at the specified index.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-438',
    question: 'Which of the following is used to get the length of an object?',
    options: [
      'len()',
      'length()',
      'size()',
      'count()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-439',
    question: 'What is the output of: print([1, 2, 3].reverse())?',
    options: [
      '[3, 2, 1]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'reverse() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-440',
    question: 'Which of the following is used to get the sorted version of an iterable?',
    options: [
      'sorted()',
      'sort()',
      'order()',
      'arrange()'
    ],
    correctAnswer: 'sorted()',
    explanation: 'sorted() returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-441',
    question: 'What is the output of: print("hello".__str__())?',
    options: [
      "'hello'",
      "'Hello'",
      "'HELLO'",
      'Error'
    ],
    correctAnswer: "'hello'",
    explanation: '__str__() returns the string representation of the object.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-442',
    question: 'Which of the following is used to get the maximum value from an iterable?',
    options: [
      'max()',
      'maximum()',
      'highest()',
      'top()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-443',
    question: 'What is the output of: print([1, 2, 3].sort())?',
    options: [
      '[1, 2, 3]',
      'None',
      '[3, 2, 1]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'sort() modifies the list in place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-444',
    question: 'Which of the following is used to get the minimum value from an iterable?',
    options: [
      'min()',
      'minimum()',
      'lowest()',
      'smallest()'
    ],
    correctAnswer: 'min()',
    explanation: 'min() returns the smallest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-445',
    question: 'What is the output of: print("hello".__repr__())?',
    options: [
      "'hello'",
      "'Hello'",
      "'HELLO'",
      'Error'
    ],
    correctAnswer: "'hello'",
    explanation: '__repr__() returns the canonical string representation of the object.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-446',
    question: 'Which of the following is used to get the sum of all items in an iterable?',
    options: [
      'sum()',
      'add()',
      'total()',
      'plus()'
    ],
    correctAnswer: 'sum()',
    explanation: 'sum() returns the sum of all items in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-447',
    question: 'What is the output of: print([1, 2, 3].clear())?',
    options: [
      '[]',
      'None',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: 'None',
    explanation: 'clear() removes all items from the list and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-448',
    question: 'Which of the following is used to get the type of an object?',
    options: [
      'type()',
      'typeof()',
      'gettype()',
      'objecttype()'
    ],
    correctAnswer: 'type()',
    explanation: 'type() returns the type of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-449',
    question: 'What is the output of: print("hello".__hash__())?',
    options: [
      'A number',
      "'hello'",
      'None',
      'Error'
    ],
    correctAnswer: 'A number',
    explanation: '__hash__() returns the hash value of the string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-450',
    question: 'Which of the following is used to check if all elements in an iterable are True?',
    options: [
      'all()',
      'every()',
      'checkall()',
      'verify()'
    ],
    correctAnswer: 'all()',
    explanation: 'all() returns True if all elements in the iterable are True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-451',
    question: 'What is the output of: print("hello".__eq__("hello"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__eq__() checks if two strings are equal.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-452',
    question: 'Which of the following is used to check if any element in an iterable is True?',
    options: [
      'any()',
      'some()',
      'checkany()',
      'verify()'
    ],
    correctAnswer: 'any()',
    explanation: 'any() returns True if any element in the iterable is True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-453',
    question: 'What is the output of: print([1, 2, 3].__contains__(2))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__contains__() checks if the list contains the specified value.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-454',
    question: 'Which of the following is used to get the reversed version of an iterable?',
    options: [
      'reversed()',
      'reverse()',
      'flip()',
      'invert()'
    ],
    correctAnswer: 'reversed()',
    explanation: 'reversed() returns a reverse iterator over the values of the given sequence.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-455',
    question: 'What is the output of: print("hello".__ne__("world"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__ne__() checks if two strings are not equal.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-456',
    question: 'Which of the following is used to get the sorted version of an iterable?',
    options: [
      'sorted()',
      'sort()',
      'order()',
      'arrange()'
    ],
    correctAnswer: 'sorted()',
    explanation: 'sorted() returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-457',
    question: 'What is the output of: print([1, 2, 3].__len__())?',
    options: [
      '3',
      '2',
      '4',
      'Error'
    ],
    correctAnswer: '3',
    explanation: '__len__() returns the length of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-458',
    question: 'Which of the following is used to get the length of an object?',
    options: [
      'len()',
      'length()',
      'size()',
      'count()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-459',
    question: 'What is the output of: print("hello".__lt__("world"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__lt__() checks if the first string is less than the second string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-460',
    question: 'Which of the following is used to get the sum of all items in an iterable?',
    options: [
      'sum()',
      'add()',
      'total()',
      'plus()'
    ],
    correctAnswer: 'sum()',
    explanation: 'sum() returns the sum of all items in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-461',
    question: 'What is the output of: print([1, 2, 3].__getitem__(1))?',
    options: [
      '2',
      '1',
      '3',
      'Error'
    ],
    correctAnswer: '2',
    explanation: '__getitem__() returns the item at the specified index.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-462',
    question: 'Which of the following is used to get the maximum value from an iterable?',
    options: [
      'max()',
      'maximum()',
      'highest()',
      'top()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-463',
    question: 'What is the output of: print("hello".__gt__("world"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: '__gt__() checks if the first string is greater than the second string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-464',
    question: 'Which of the following is used to get the minimum value from an iterable?',
    options: [
      'min()',
      'minimum()',
      'lowest()',
      'smallest()'
    ],
    correctAnswer: 'min()',
    explanation: 'min() returns the smallest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-465',
    question: 'What is the output of: print([1, 2, 3].__str__())?',
    options: [
      '[1, 2, 3]',
      "'[1, 2, 3]'",
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3]',
    explanation: '__str__() returns the string representation of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-466',
    question: 'Which of the following is used to get the absolute value of a number?',
    options: [
      'abs()',
      'absolute()',
      'positive()',
      'magnitude()'
    ],
    correctAnswer: 'abs()',
    explanation: 'abs() returns the absolute value of a number.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-467',
    question: 'What is the output of: print("hello".__le__("world"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__le__() checks if the first string is less than or equal to the second string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-468',
    question: 'Which of the following is used to get the power of a number?',
    options: [
      'pow()',
      'power()',
      'exponent()',
      'raise()'
    ],
    correctAnswer: 'pow()',
    explanation: 'pow() returns the value of x raised to the power of y.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-469',
    question: 'What is the output of: print([1, 2, 3].__repr__())?',
    options: [
      '[1, 2, 3]',
      "'[1, 2, 3]'",
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3]',
    explanation: '__repr__() returns the canonical string representation of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-470',
    question: 'Which of the following is used to round a number to a specified number of decimal places?',
    options: [
      'round()',
      'rounding()',
      'decimal()',
      'precision()'
    ],
    correctAnswer: 'round()',
    explanation: 'round() rounds a number to the specified number of decimal places.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-471',
    question: 'What is the output of: print("hello".__ge__("world"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: '__ge__() checks if the first string is greater than or equal to the second string.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-472',
    question: 'Which of the following is used to get the quotient and remainder of division?',
    options: [
      'divmod()',
      'quotient()',
      'remainder()',
      'divide()'
    ],
    correctAnswer: 'divmod()',
    explanation: 'divmod() returns a tuple containing the quotient and remainder.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-473',
    question: 'What is the output of: print([1, 2, 3].__hash__())?',
    options: [
      'Error',
      'A number',
      'None',
      '[1, 2, 3]'
    ],
    correctAnswer: 'Error',
    explanation: 'Lists are not hashable, so __hash__() raises a TypeError.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-474',
    question: 'Which of the following is used to get the hexadecimal representation of a number?',
    options: [
      'hex()',
      'hexadecimal()',
      'tohex()',
      'base16()'
    ],
    correctAnswer: 'hex()',
    explanation: 'hex() converts an integer to a hexadecimal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-475',
    question: 'What is the output of: print("hello".__add__("world"))?',
    options: [
      "'helloworld'",
      "'hello world'",
      "'hello+world'",
      'Error'
    ],
    correctAnswer: "'helloworld'",
    explanation: '__add__() concatenates two strings.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-476',
    question: 'Which of the following is used to get the octal representation of a number?',
    options: [
      'oct()',
      'octal()',
      'tooct()',
      'base8()'
    ],
    correctAnswer: 'oct()',
    explanation: 'oct() converts an integer to an octal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-477',
    question: 'What is the output of: print([1, 2, 3].__add__([4, 5]))?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[5, 4, 3, 2, 1]',
      '[1, 2, 3, [4, 5]]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: '__add__() concatenates two lists.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-478',
    question: 'Which of the following is used to get the binary representation of a number?',
    options: [
      'bin()',
      'binary()',
      'tobin()',
      'base2()'
    ],
    correctAnswer: 'bin()',
    explanation: 'bin() converts an integer to a binary string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-479',
    question: 'What is the output of: print("hello".__mul__(3))?',
    options: [
      "'hellohellohello'",
      "'hello3'",
      "'hello*3'",
      'Error'
    ],
    correctAnswer: "'hellohellohello'",
    explanation: '__mul__() repeats the string by the specified number.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-480',
    question: 'Which of the following is used to get the ASCII value of a character?',
    options: [
      'ord()',
      'ascii()',
      'char()',
      'code()'
    ],
    correctAnswer: 'ord()',
    explanation: 'ord() returns the Unicode code point of a character.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-481',
    question: 'What is the output of: print([1, 2, 3].__mul__(2))?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      '[1, 2, 3, 2]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: '__mul__() repeats the list by the specified number.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-482',
    question: 'Which of the following is used to get the character from an ASCII value?',
    options: [
      'chr()',
      'char()',
      'ascii()',
      'code()'
    ],
    correctAnswer: 'chr()',
    explanation: 'chr() returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-483',
    question: 'What is the output of: print("hello".__rmul__(2))?',
    options: [
      "'hellohello'",
      "'2hello'",
      "'hello2'",
      'Error'
    ],
    correctAnswer: "'hellohello'",
    explanation: '__rmul__() is called when the string is on the right side of multiplication.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-484',
    question: 'Which of the following is used to get the type of an object?',
    options: [
      'type()',
      'typeof()',
      'gettype()',
      'objecttype()'
    ],
    correctAnswer: 'type()',
    explanation: 'type() returns the type of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-485',
    question: 'What is the output of: print([1, 2, 3].__rmul__(2))?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[2, 4, 6]',
      '[2, 1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: '__rmul__() is called when the list is on the right side of multiplication.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-486',
    question: 'Which of the following is used to check if all elements in an iterable are True?',
    options: [
      'all()',
      'every()',
      'checkall()',
      'verify()'
    ],
    correctAnswer: 'all()',
    explanation: 'all() returns True if all elements in the iterable are True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-487',
    question: 'What is the output of: print("hello".__radd__("world"))?',
    options: [
      "'worldhello'",
      "'helloworld'",
      "'world+hello'",
      'Error'
    ],
    correctAnswer: "'worldhello'",
    explanation: '__radd__() is called when the string is on the right side of addition.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-488',
    question: 'Which of the following is used to check if any element in an iterable is True?',
    options: [
      'any()',
      'some()',
      'checkany()',
      'verify()'
    ],
    correctAnswer: 'any()',
    explanation: 'any() returns True if any element in the iterable is True.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-489',
    question: 'What is the output of: print([1, 2, 3].__radd__([4, 5]))?',
    options: [
      '[4, 5, 1, 2, 3]',
      '[1, 2, 3, 4, 5]',
      '[4, 5, [1, 2, 3]]',
      'Error'
    ],
    correctAnswer: '[4, 5, 1, 2, 3]',
    explanation: '__radd__() is called when the list is on the right side of addition.',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-490',
    question: 'Which of the following is used to get the length of an object?',
    options: [
      'len()',
      'length()',
      'size()',
      'count()'
    ],
    correctAnswer: 'len()',
    explanation: 'len() returns the length of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-491',
    question: 'What is the output of: print("hello".__iadd__("world"))?',
    options: [
      "'helloworld'",
      "'hello'",
      "'world'",
      'Error'
    ],
    correctAnswer: "'helloworld'",
    explanation: '__iadd__() performs in-place addition (string concatenation).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-492',
    question: 'Which of the following is used to get the sum of all items in an iterable?',
    options: [
      'sum()',
      'add()',
      'total()',
      'plus()'
    ],
    correctAnswer: 'sum()',
    explanation: 'sum() returns the sum of all items in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-493',
    question: 'What is the output of: print([1, 2, 3].__iadd__([4, 5]))?',
    options: [
      '[1, 2, 3, 4, 5]',
      '[4, 5, 1, 2, 3]',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 4, 5]',
    explanation: '__iadd__() performs in-place addition (list concatenation).',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-494',
    question: 'Which of the following is used to get the maximum value from an iterable?',
    options: [
      'max()',
      'maximum()',
      'highest()',
      'top()'
    ],
    correctAnswer: 'max()',
    explanation: 'max() returns the largest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-495',
    question: 'What is the output of: print("hello".__imul__(2))?',
    options: [
      "'hellohello'",
      "'hello'",
      "'hello2'",
      'Error'
    ],
    correctAnswer: "'hellohello'",
    explanation: '__imul__() performs in-place multiplication (string repetition).',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-496',
    question: 'Which of the following is used to get the minimum value from an iterable?',
    options: [
      'min()',
      'minimum()',
      'lowest()',
      'smallest()'
    ],
    correctAnswer: 'min()',
    explanation: 'min() returns the smallest item in an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-497',
    question: 'What is the output of: print([1, 2, 3].__imul__(2))?',
    options: [
      '[1, 2, 3, 1, 2, 3]',
      '[1, 2, 3]',
      '[2, 4, 6]',
      'Error'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3]',
    explanation: '__imul__() performs in-place multiplication (list repetition).',
    category: 'Python Lists',
    difficulty: 'Medium'
  },
  {
    id: 'python-498',
    question: 'Which of the following is used to get the sorted version of an iterable?',
    options: [
      'sorted()',
      'sort()',
      'order()',
      'arrange()'
    ],
    correctAnswer: 'sorted()',
    explanation: 'sorted() returns a new sorted list from the elements of any iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-499',
    question: 'What is the output of: print("hello".__bool__())?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '__bool__() returns True for non-empty strings.',
    category: 'Python Strings',
    difficulty: 'Easy'
  },
  {
    id: 'python-500',
    question: 'Which of the following is used to get the reversed version of an iterable?',
    options: [
      'reversed()',
      'reverse()',
      'flip()',
      'invert()'
    ],
    correctAnswer: 'reversed()',
    explanation: 'reversed() returns a reverse iterator over the values of the given sequence.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-501',
    question: 'What is the output of: print(any([False, 0, "", None]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'any() returns True if any element in the iterable is truthy. All elements in [False, 0, "", None] are falsy.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-502',
    question: 'What is the output of: print(all([True, 1, "hello", []]))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'all() returns True only if all elements are truthy. The empty list [] is falsy.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-503',
    question: 'What is the output of: print(sum([1, 2, 3, 4, 5]))?',
    options: [
      '15',
      '10',
      '20',
      'Error'
    ],
    correctAnswer: '15',
    explanation: 'sum() adds all numbers in the iterable: 1 + 2 + 3 + 4 + 5 = 15.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-504',
    question: 'What is the output of: print(list(zip([1, 2], [3, 4, 5])))?',
    options: [
      '[(1, 3), (2, 4)]',
      '[(1, 3), (2, 4), (None, 5)]',
      '[(1, 3), (2, 4), (0, 5)]',
      'Error'
    ],
    correctAnswer: '[(1, 3), (2, 4)]',
    explanation: 'zip() stops when the shortest iterable is exhausted. It pairs elements from both lists until the shorter one ends.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-505',
    question: 'What is the output of: print(list(enumerate(["a", "b", "c"])))?',
    options: [
      '[(0, "a"), (1, "b"), (2, "c")]',
      '[(1, "a"), (2, "b"), (3, "c")]',
      '["a", "b", "c"]',
      'Error'
    ],
    correctAnswer: '[(0, "a"), (1, "b"), (2, "c")]',
    explanation: 'enumerate() returns pairs of (index, value) starting from 0 by default.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-506',
    question: 'What is the output of: print(filter(lambda x: x > 0, [-1, 0, 1, 2]))?',
    options: [
      '<filter object at ...>',
      '[1, 2]',
      '[-1, 0]',
      'Error'
    ],
    correctAnswer: '<filter object at ...>',
    explanation: 'filter() returns a filter object, not a list. To get the list, you need to convert it: list(filter(...)).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-507',
    question: 'What is the output of: print(list(map(lambda x: x**2, [1, 2, 3])))?',
    options: [
      '[1, 4, 9]',
      '[2, 4, 6]',
      '[1, 2, 3]',
      'Error'
    ],
    correctAnswer: '[1, 4, 9]',
    explanation: 'map() applies the lambda function (x**2) to each element: 1²=1, 2²=4, 3²=9.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-508',
    question: 'What is the output of: print(reduce(lambda x, y: x + y, [1, 2, 3, 4]))?',
    options: [
      '10',
      'Error',
      '[1, 2, 3, 4]',
      '24'
    ],
    correctAnswer: 'Error',
    explanation: 'reduce() is not a built-in function in Python 3. It needs to be imported from functools.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-509',
    question: 'What is the output of: print(divmod(10, 3))?',
    options: [
      '(3, 1)',
      '(3.33, 1)',
      '(3, 0)',
      'Error'
    ],
    correctAnswer: '(3, 1)',
    explanation: 'divmod() returns a tuple of (quotient, remainder): 10 ÷ 3 = 3 remainder 1.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-510',
    question: 'What is the output of: print(pow(2, 3, 5))?',
    options: [
      '3',
      '8',
      '6',
      'Error'
    ],
    correctAnswer: '3',
    explanation: 'pow(2, 3, 5) calculates (2³) % 5 = 8 % 5 = 3.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-511',
    question: 'What is the output of: print(round(3.14159, 2))?',
    options: [
      '3.14',
      '3.15',
      '3.1',
      'Error'
    ],
    correctAnswer: '3.14',
    explanation: 'round() rounds to the specified number of decimal places. 3.14159 rounded to 2 decimal places is 3.14.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-512',
    question: 'What is the output of: print(abs(-5.5))?',
    options: [
      '5.5',
      '-5.5',
      '5',
      'Error'
    ],
    correctAnswer: '5.5',
    explanation: 'abs() returns the absolute value (magnitude) of a number, removing the negative sign.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-513',
    question: 'What is the output of: print(complex(3, 4))?',
    options: [
      '(3+4j)',
      '3+4i',
      '(3, 4)',
      'Error'
    ],
    correctAnswer: '(3+4j)',
    explanation: 'complex() creates a complex number. In Python, the imaginary unit is represented by j, not i.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-514',
    question: 'What is the output of: print(hex(255))?',
    options: [
      "'0xff'",
      "'0xFF'",
      "'ff'",
      'Error'
    ],
    correctAnswer: "'0xff'",
    explanation: 'hex() converts an integer to a hexadecimal string prefixed with "0x".',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-515',
    question: 'What is the output of: print(oct(64))?',
    options: [
      "'0o100'",
      "'0O100'",
      "'100'",
      'Error'
    ],
    correctAnswer: "'0o100'",
    explanation: 'oct() converts an integer to an octal string prefixed with "0o".',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-516',
    question: 'What is the output of: print(bin(10))?',
    options: [
      "'0b1010'",
      "'0B1010'",
      "'1010'",
      'Error'
    ],
    correctAnswer: "'0b1010'",
    explanation: 'bin() converts an integer to a binary string prefixed with "0b".',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-517',
    question: 'What is the output of: print(int("1010", 2))?',
    options: [
      '10',
      '2',
      '1010',
      'Error'
    ],
    correctAnswer: '10',
    explanation: 'int("1010", 2) converts the binary string "1010" to decimal: 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-518',
    question: 'What is the output of: print(float("3.14"))?',
    options: [
      '3.14',
      '3',
      '3.0',
      'Error'
    ],
    correctAnswer: '3.14',
    explanation: 'float() converts a string representation of a number to a float.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-519',
    question: 'What is the output of: print(str(123))?',
    options: [
      "'123'",
      '123',
      'Error',
      'None'
    ],
    correctAnswer: "'123'",
    explanation: 'str() converts any object to its string representation.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-520',
    question: 'What is the output of: print(list("hello"))?',
    options: [
      "['h', 'e', 'l', 'l', 'o']",
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: "['h', 'e', 'l', 'l', 'o']",
    explanation: 'list() converts an iterable (like a string) into a list of its elements.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-521',
    question: 'What is the output of: print(tuple([1, 2, 3]))?',
    options: [
      '(1, 2, 3)',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '(1, 2, 3)',
    explanation: 'tuple() converts an iterable into a tuple.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-522',
    question: 'What is the output of: print(set([1, 2, 2, 3, 3, 3]))?',
    options: [
      '{1, 2, 3}',
      '[1, 2, 2, 3, 3, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '{1, 2, 3}',
    explanation: 'set() creates a set from an iterable, removing duplicates.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-523',
    question: 'What is the output of: print(dict([("a", 1), ("b", 2)]))?',
    options: [
      "{'a': 1, 'b': 2}",
      "[('a', 1), ('b', 2)]",
      'Error',
      'None'
    ],
    correctAnswer: "{'a': 1, 'b': 2}",
    explanation: 'dict() creates a dictionary from an iterable of key-value pairs.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-524',
    question: 'What is the output of: print(frozenset([1, 2, 3]))?',
    options: [
      'frozenset({1, 2, 3})',
      '{1, 2, 3}',
      'Error',
      'None'
    ],
    correctAnswer: 'frozenset({1, 2, 3})',
    explanation: 'frozenset() creates an immutable set from an iterable.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-525',
    question: 'What is the output of: print(bytes([65, 66, 67]))?',
    options: [
      "b'ABC'",
      "'ABC'",
      '[65, 66, 67]',
      'Error'
    ],
    correctAnswer: "b'ABC'",
    explanation: 'bytes() creates a bytes object from an iterable of integers (ASCII values).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-526',
    question: 'What is the output of: print(bytearray([65, 66, 67]))?',
    options: [
      "bytearray(b'ABC')",
      "b'ABC'",
      '[65, 66, 67]',
      'Error'
    ],
    correctAnswer: "bytearray(b'ABC')",
    explanation: 'bytearray() creates a mutable bytes object from an iterable of integers.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-527',
    question: 'What is the output of: print(memoryview(bytes([65, 66, 67])))?',
    options: [
      '<memory at ...>',
      "b'ABC'",
      '[65, 66, 67]',
      'Error'
    ],
    correctAnswer: '<memory at ...>',
    explanation: 'memoryview() creates a memory view object that references the memory of another object.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-528',
    question: 'What is the output of: print(slice(1, 5, 2))?',
    options: [
      'slice(1, 5, 2)',
      '[1, 3, 5]',
      'Error',
      'None'
    ],
    correctAnswer: 'slice(1, 5, 2)',
    explanation: 'slice() creates a slice object representing the set of indices specified by range(start, stop, step).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-529',
    question: 'What is the output of: print(super())?',
    options: [
      'Error',
      '<super: <class ...>, <...>>',
      'None',
      'Error'
    ],
    correctAnswer: 'Error',
    explanation: 'super() must be called within a method of a class, not at module level.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-530',
    question: 'What is the output of: print(property())?',
    options: [
      '<property object at ...>',
      'None',
      'Error',
      '0'
    ],
    correctAnswer: '<property object at ...>',
    explanation: 'property() creates a property object, which is a descriptor.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-531',
    question: 'What is the output of: print(classmethod(lambda: None))?',
    options: [
      '<classmethod object at ...>',
      'None',
      'Error',
      '<function ...>'
    ],
    correctAnswer: '<classmethod object at ...>',
    explanation: 'classmethod() transforms a method into a class method.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-532',
    question: 'What is the output of: print(staticmethod(lambda: None))?',
    options: [
      '<staticmethod object at ...>',
      'None',
      'Error',
      '<function ...>'
    ],
    correctAnswer: '<staticmethod object at ...>',
    explanation: 'staticmethod() transforms a method into a static method.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-533',
    question: 'What is the output of: print(eval("2 + 2"))?',
    options: [
      '4',
      "'2 + 2'",
      'Error',
      'None'
    ],
    correctAnswer: '4',
    explanation: 'eval() evaluates a string as a Python expression.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-534',
    question: 'What is the output of: print(exec("x = 5"))?',
    options: [
      'None',
      '5',
      'Error',
      'x'
    ],
    correctAnswer: 'None',
    explanation: 'exec() executes a string as Python code and returns None.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-535',
    question: 'What is the output of: print(compile("2 + 2", "<string>", "eval"))?',
    options: [
      '<code object ...>',
      '4',
      'Error',
      'None'
    ],
    correctAnswer: '<code object ...>',
    explanation: 'compile() compiles source into a code object that can be executed by exec() or eval().',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-536',
    question: 'What is the output of: print(repr("hello"))?',
    options: [
      "'hello'",
      'hello',
      'Error',
      'None'
    ],
    correctAnswer: "'hello'",
    explanation: 'repr() returns a string containing a printable representation of an object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-537',
    question: 'What is the output of: print(ascii("hello"))?',
    options: [
      "'hello'",
      'hello',
      'Error',
      'None'
    ],
    correctAnswer: "'hello'",
    explanation: 'ascii() returns a string containing a printable representation of an object, using only ASCII characters.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-538',
    question: 'What is the output of: print(format(3.14159, ".2f"))?',
    options: [
      "'3.14'",
      '3.14',
      'Error',
      'None'
    ],
    correctAnswer: "'3.14'",
    explanation: 'format() formats a value according to a format specification.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-539',
    question: 'What is the output of: print(vars())?',
    options: [
      '{...}',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: '{...}',
    explanation: 'vars() returns the __dict__ attribute of an object, or the local namespace if no argument is given.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-540',
    question: 'What is the output of: print(dir())?',
    options: [
      '[...]',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: '[...]',
    explanation: 'dir() returns a list of valid attributes and methods of the object, or names in the current local scope.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-541',
    question: 'What is the output of: print(globals())?',
    options: [
      '{...}',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: '{...}',
    explanation: 'globals() returns a dictionary representing the current global symbol table.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-542',
    question: 'What is the output of: print(locals())?',
    options: [
      '{...}',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: '{...}',
    explanation: 'locals() returns a dictionary representing the current local symbol table.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-543',
    question: 'What is the output of: print(hash("hello"))?',
    options: [
      'An integer',
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: 'An integer',
    explanation: 'hash() returns the hash value of an object (if it has one).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-544',
    question: 'What is the output of: print(id("hello"))?',
    options: [
      'An integer',
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: 'An integer',
    explanation: 'id() returns the "identity" of an object, which is guaranteed to be unique and constant for the object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-545',
    question: 'What is the output of: print(type(type))?',
    options: [
      '<class \'type\'>',
      '<class \'object\'>',
      'Error',
      'None'
    ],
    correctAnswer: '<class \'type\'>',
    explanation: 'type is the metaclass of all classes, so type(type) returns the type class itself.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-546',
    question: 'What is the output of: print(isinstance(5, int))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isinstance() returns True if the object argument is an instance of the classinfo argument.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-547',
    question: 'What is the output of: print(issubclass(int, object))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'issubclass() returns True if class is a subclass of classinfo.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-548',
    question: 'What is the output of: print(callable(print))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'callable() returns True if the object argument appears callable.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-549',
    question: 'What is the output of: print(hasattr("hello", "upper"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'hasattr() returns True if the object has an attribute with the given name.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-550',
    question: 'What is the output of: print(getattr("hello", "upper")())?',
    options: [
      "'HELLO'",
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: "'HELLO'",
    explanation: 'getattr() returns the value of the named attribute of object, and we call it with ().',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-551',
    question: 'What is the output of: print(setattr("hello", "new_attr", "value"))?',
    options: [
      'None',
      "'value'",
      'Error',
      'True'
    ],
    correctAnswer: 'None',
    explanation: 'setattr() sets the value of the named attribute of object and returns None.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-552',
    question: 'What is the output of: print(delattr("hello", "upper"))?',
    options: [
      'Error',
      'None',
      'True',
      'False'
    ],
    correctAnswer: 'Error',
    explanation: 'delattr() cannot delete built-in string methods. It would raise an AttributeError.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-553',
    question: 'What is the output of: print(next(iter([1, 2, 3])))?',
    options: [
      '1',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'iter() creates an iterator, and next() returns the first element of the iterator.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-554',
    question: 'What is the output of: print(iter([1, 2, 3]))?',
    options: [
      '<list_iterator object at ...>',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '<list_iterator object at ...>',
    explanation: 'iter() returns an iterator object, not the list itself.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-555',
    question: 'What is the output of: print(reversed([1, 2, 3]))?',
    options: [
      '<list_reverseiterator object at ...>',
      '[3, 2, 1]',
      'Error',
      'None'
    ],
    correctAnswer: '<list_reverseiterator object at ...>',
    explanation: 'reversed() returns a reverse iterator object, not a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-556',
    question: 'What is the output of: print(list(reversed([1, 2, 3])))?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'list(reversed([1, 2, 3])) converts the reverse iterator to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-557',
    question: 'What is the output of: print(sorted([3, 1, 4, 1, 5], reverse=True))?',
    options: [
      '[5, 4, 3, 1, 1]',
      '[1, 1, 3, 4, 5]',
      'Error',
      'None'
    ],
    correctAnswer: '[5, 4, 3, 1, 1]',
    explanation: 'sorted() with reverse=True sorts in descending order.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-558',
    question: 'What is the output of: print(sorted(["banana", "apple", "cherry"], key=len))?',
    options: [
      "['apple', 'banana', 'cherry']",
      "['cherry', 'banana', 'apple']",
      'Error',
      'None'
    ],
    correctAnswer: "['apple', 'banana', 'cherry']",
    explanation: 'sorted() with key=len sorts by string length in ascending order.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-559',
    question: 'What is the output of: print(chr(65))?',
    options: [
      "'A'",
      "'65'",
      'Error',
      'None'
    ],
    correctAnswer: "'A'",
    explanation: 'chr() returns the string representing a character whose Unicode code point is the integer.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-560',
    question: 'What is the output of: print(ord("A"))?',
    options: [
      '65',
      "'A'",
      'Error',
      'None'
    ],
    correctAnswer: '65',
    explanation: 'ord() returns the Unicode code point of a given character.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-561',
    question: 'What is the output of: print(ascii("café"))?',
    options: [
      "'caf\\xe9'",
      "'café'",
      'Error',
      'None'
    ],
    correctAnswer: "'caf\\xe9'",
    explanation: 'ascii() escapes non-ASCII characters using \\x, \\u, or \\U escapes.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-562',
    question: 'What is the output of: print(repr("café"))?',
    options: [
      "'café'",
      "'caf\\xe9'",
      'Error',
      'None'
    ],
    correctAnswer: "'café'",
    explanation: 'repr() returns a string containing a printable representation, preserving Unicode characters.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-563',
    question: 'What is the output of: print(format(123, "05"))?',
    options: [
      "'00123'",
      "'123'",
      'Error',
      'None'
    ],
    correctAnswer: "'00123'",
    explanation: 'format() with "05" pads the number to 5 digits with leading zeros.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-564',
    question: 'What is the output of: print(format(3.14159, "0.2f"))?',
    options: [
      "'3.14'",
      '3.14',
      'Error',
      'None'
    ],
    correctAnswer: "'3.14'",
    explanation: 'format() with "0.2f" formats as a float with 2 decimal places.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-565',
    question: 'What is the output of: print(format(1234567, ","))?',
    options: [
      "'1,234,567'",
      "'1234567'",
      'Error',
      'None'
    ],
    correctAnswer: "'1,234,567'",
    explanation: 'format() with "," adds thousand separators.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-566',
    question: 'What is the output of: print(format(0.123, ".1%"))?',
    options: [
      "'12.3%'",
      "'0.1%'",
      'Error',
      'None'
    ],
    correctAnswer: "'12.3%'",
    explanation: 'format() with ".1%" formats as a percentage with 1 decimal place.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-567',
    question: 'What is the output of: print(format(123, "x"))?',
    options: [
      "'7b'",
      "'123'",
      'Error',
      'None'
    ],
    correctAnswer: "'7b'",
    explanation: 'format() with "x" converts to lowercase hexadecimal.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-568',
    question: 'What is the output of: print(format(123, "X"))?',
    options: [
      "'7B'",
      "'7b'",
      'Error',
      'None'
    ],
    correctAnswer: "'7B'",
    explanation: 'format() with "X" converts to uppercase hexadecimal.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-569',
    question: 'What is the output of: print(format(123, "b"))?',
    options: [
      "'1111011'",
      "'123'",
      'Error',
      'None'
    ],
    correctAnswer: "'1111011'",
    explanation: 'format() with "b" converts to binary representation.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-570',
    question: 'What is the output of: print(format(123, "o"))?',
    options: [
      "'173'",
      "'123'",
      'Error',
      'None'
    ],
    correctAnswer: "'173'",
    explanation: 'format() with "o" converts to octal representation.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-571',
    question: 'What is the output of: print(len(range(5)))?',
    options: [
      '5',
      '4',
      'Error',
      'None'
    ],
    correctAnswer: '5',
    explanation: 'range(5) creates a range object with 5 elements (0, 1, 2, 3, 4).',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-572',
    question: 'What is the output of: print(list(range(2, 8, 2)))?',
    options: [
      '[2, 4, 6]',
      '[2, 4, 6, 8]',
      'Error',
      'None'
    ],
    correctAnswer: '[2, 4, 6]',
    explanation: 'range(2, 8, 2) creates a range from 2 to 8 (exclusive) with step 2.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-573',
    question: 'What is the output of: print(range(3) == range(0, 3, 1))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'range(3) is equivalent to range(0, 3, 1), so they are equal.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-574',
    question: 'What is the output of: print(2 in range(5))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: '2 is in the range(5) which contains 0, 1, 2, 3, 4.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-575',
    question: 'What is the output of: print(range(5)[2])?',
    options: [
      '2',
      'Error',
      'None',
      '3'
    ],
    correctAnswer: '2',
    explanation: 'range objects support indexing. range(5)[2] returns the element at index 2.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-576',
    question: 'What is the output of: print(range(5)[-1])?',
    options: [
      '4',
      'Error',
      'None',
      '5'
    ],
    correctAnswer: '4',
    explanation: 'range(5)[-1] returns the last element of the range, which is 4.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-577',
    question: 'What is the output of: print(range(5)[1:3])?',
    options: [
      'range(1, 3)',
      '[1, 2]',
      'Error',
      'None'
    ],
    correctAnswer: 'range(1, 3)',
    explanation: 'Slicing a range object returns another range object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-578',
    question: 'What is the output of: print(list(range(5)[1:3]))?',
    options: [
      '[1, 2]',
      'range(1, 3)',
      'Error',
      'None'
    ],
    correctAnswer: '[1, 2]',
    explanation: 'Converting the sliced range to a list gives the actual elements.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-579',
    question: 'What is the output of: print(range(0))?',
    options: [
      'range(0, 0)',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: 'range(0, 0)',
    explanation: 'range(0) creates an empty range object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-580',
    question: 'What is the output of: print(len(range(0)))?',
    options: [
      '0',
      '1',
      'Error',
      'None'
    ],
    correctAnswer: '0',
    explanation: 'range(0) has length 0 as it contains no elements.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-581',
    question: 'What is the output of: print(range(1, 10, -1))?',
    options: [
      'range(1, 10, -1)',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: 'range(1, 10, -1)',
    explanation: 'range(1, 10, -1) creates a range object, but it will be empty when iterated.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-582',
    question: 'What is the output of: print(list(range(1, 10, -1)))?',
    options: [
      '[]',
      '[1, 2, 3, 4, 5, 6, 7, 8, 9]',
      'Error',
      'None'
    ],
    correctAnswer: '[]',
    explanation: 'range(1, 10, -1) with negative step creates an empty range when start < stop.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-583',
    question: 'What is the output of: print(list(range(10, 1, -1)))?',
    options: [
      '[10, 9, 8, 7, 6, 5, 4, 3, 2]',
      '[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
      'Error',
      'None'
    ],
    correctAnswer: '[10, 9, 8, 7, 6, 5, 4, 3, 2]',
    explanation: 'range(10, 1, -1) creates a range from 10 down to 2 (exclusive of 1).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-584',
    question: 'What is the output of: print(range(5).start)?',
    options: [
      '0',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '0',
    explanation: 'range(5).start returns the start value of the range, which is 0.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-585',
    question: 'What is the output of: print(range(5).stop)?',
    options: [
      '5',
      '4',
      'Error',
      'None'
    ],
    correctAnswer: '5',
    explanation: 'range(5).stop returns the stop value of the range, which is 5.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-586',
    question: 'What is the output of: print(range(5).step)?',
    options: [
      '1',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'range(5).step returns the step value of the range, which is 1 (default).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-587',
    question: 'What is the output of: print(range(2, 10, 3).step)?',
    options: [
      '3',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '3',
    explanation: 'range(2, 10, 3).step returns the step value, which is 3.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-588',
    question: 'What is the output of: print(range(5).index(3))?',
    options: [
      '3',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '3',
    explanation: 'range(5).index(3) returns the index of 3 in the range, which is 3.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-589',
    question: 'What is the output of: print(range(5).count(3))?',
    options: [
      '1',
      '0',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'range(5).count(3) returns the number of occurrences of 3 in the range, which is 1.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-590',
    question: 'What is the output of: print(range(5).count(10))?',
    options: [
      '0',
      '1',
      'Error',
      'None'
    ],
    correctAnswer: '0',
    explanation: 'range(5).count(10) returns 0 because 10 is not in range(5).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-591',
    question: 'What is the output of: print(range(5).index(10))?',
    options: [
      'Error',
      '0',
      'None',
      '-1'
    ],
    correctAnswer: 'Error',
    explanation: 'range(5).index(10) raises a ValueError because 10 is not in range(5).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-592',
    question: 'What is the output of: print(range(5) + range(3))?',
    options: [
      'Error',
      'range(0, 8)',
      '[0, 1, 2, 3, 4, 0, 1, 2]',
      'None'
    ],
    correctAnswer: 'Error',
    explanation: 'range objects cannot be concatenated with the + operator.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-593',
    question: 'What is the output of: print(range(5) * 2)?',
    options: [
      'Error',
      'range(0, 10)',
      '[0, 1, 2, 3, 4, 0, 1, 2, 3, 4]',
      'None'
    ],
    correctAnswer: 'Error',
    explanation: 'range objects cannot be multiplied with the * operator.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-594',
    question: 'What is the output of: print(min(range(5)))?',
    options: [
      '0',
      '4',
      'Error',
      'None'
    ],
    correctAnswer: '0',
    explanation: 'min(range(5)) returns the minimum value in the range, which is 0.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-595',
    question: 'What is the output of: print(max(range(5)))?',
    options: [
      '4',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '4',
    explanation: 'max(range(5)) returns the maximum value in the range, which is 4.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-596',
    question: 'What is the output of: print(sum(range(5)))?',
    options: [
      '10',
      '15',
      'Error',
      'None'
    ],
    correctAnswer: '10',
    explanation: 'sum(range(5)) returns the sum of all values in the range: 0 + 1 + 2 + 3 + 4 = 10.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-597',
    question: 'What is the output of: print(all(range(5)))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'all(range(5)) returns False because 0 is falsy, and all() requires all elements to be truthy.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-598',
    question: 'What is the output of: print(any(range(5)))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'any(range(5)) returns True because 1, 2, 3, 4 are truthy, and any() requires at least one truthy element.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-599',
    question: 'What is the output of: print(sorted(range(5), reverse=True))?',
    options: [
      '[4, 3, 2, 1, 0]',
      '[0, 1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: '[4, 3, 2, 1, 0]',
    explanation: 'sorted(range(5), reverse=True) sorts the range in descending order.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-600',
    question: 'What is the output of: print(list(reversed(range(5))))?',
    options: [
      '[4, 3, 2, 1, 0]',
      '[0, 1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: '[4, 3, 2, 1, 0]',
    explanation: 'reversed(range(5)) creates a reverse iterator, and list() converts it to a list.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-601',
    question: 'What is the output of: print(open("nonexistent.txt"))?',
    options: [
      'Error',
      '<_io.TextIOWrapper object>',
      'None',
      'FileNotFoundError'
    ],
    correctAnswer: 'Error',
    explanation: 'open() raises a FileNotFoundError when trying to open a non-existent file.',
    category: 'Python File Operations',
    difficulty: 'Easy'
  },
  {
    id: 'python-602',
    question: 'What is the output of: print(input("Enter: "))?',
    options: [
      'Waits for user input',
      'Error',
      'None',
      'Enter: '
    ],
    correctAnswer: 'Waits for user input',
    explanation: 'input() waits for user input and returns the entered string.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-603',
    question: 'What is the output of: print(print("hello"))?',
    options: [
      'hello\nNone',
      'hello',
      'None',
      'Error'
    ],
    correctAnswer: 'hello\nNone',
    explanation: 'print("hello") prints "hello" and returns None, which is then printed.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-604',
    question: 'What is the output of: print(help(print))?',
    options: [
      'Prints help documentation',
      'Error',
      'None',
      'Help on built-in function print'
    ],
    correctAnswer: 'Prints help documentation',
    explanation: 'help() displays the help documentation for the given object.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-605',
    question: 'What is the output of: print(quit())?',
    options: [
      'Exits the program',
      'Error',
      'None',
      'Quit'
    ],
    correctAnswer: 'Exits the program',
    explanation: 'quit() exits the Python interpreter.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-606',
    question: 'What is the output of: print(exit())?',
    options: [
      'Exits the program',
      'Error',
      'None',
      'Exit'
    ],
    correctAnswer: 'Exits the program',
    explanation: 'exit() exits the Python interpreter.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-607',
    question: 'What is the output of: print(license())?',
    options: [
      'Prints license information',
      'Error',
      'None',
      'License'
    ],
    correctAnswer: 'Prints license information',
    explanation: 'license() displays the Python license information.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-608',
    question: 'What is the output of: print(copyright())?',
    options: [
      'Prints copyright information',
      'Error',
      'None',
      'Copyright'
    ],
    correctAnswer: 'Prints copyright information',
    explanation: 'copyright() displays the Python copyright information.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-609',
    question: 'What is the output of: print(credits())?',
    options: [
      'Prints credits information',
      'Error',
      'None',
      'Credits'
    ],
    correctAnswer: 'Prints credits information',
    explanation: 'credits() displays the Python credits information.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-610',
    question: 'What is the output of: print(breakpoint())?',
    options: [
      'Enters debugger',
      'Error',
      'None',
      'Breakpoint'
    ],
    correctAnswer: 'Enters debugger',
    explanation: 'breakpoint() enters the Python debugger.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-611',
    question: 'What is the output of: print(memoryview(b"hello"))?',
    options: [
      '<memory at ...>',
      "b'hello'",
      'Error',
      'None'
    ],
    correctAnswer: '<memory at ...>',
    explanation: 'memoryview() creates a memory view object that references the memory of another object.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-612',
    question: 'What is the output of: print(memoryview(b"hello")[0])?',
    options: [
      '104',
      "'h'",
      'Error',
      'None'
    ],
    correctAnswer: '104',
    explanation: 'memoryview indexing returns the byte value at that position.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-613',
    question: 'What is the output of: print(memoryview(b"hello").nbytes)?',
    options: [
      '5',
      '6',
      'Error',
      'None'
    ],
    correctAnswer: '5',
    explanation: 'nbytes returns the number of bytes in the memory view.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-614',
    question: 'What is the output of: print(memoryview(b"hello").readonly)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'readonly indicates whether the memory view is read-only.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-615',
    question: 'What is the output of: print(memoryview(b"hello").format)?',
    options: [
      "'B'",
      "'b'",
      'Error',
      'None'
    ],
    correctAnswer: "'B'",
    explanation: 'format returns the format of the memory view elements.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-616',
    question: 'What is the output of: print(memoryview(b"hello").itemsize)?',
    options: [
      '1',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'itemsize returns the size in bytes of each element.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-617',
    question: 'What is the output of: print(memoryview(b"hello").ndim)?',
    options: [
      '1',
      '0',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'ndim returns the number of dimensions of the memory view.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-618',
    question: 'What is the output of: print(memoryview(b"hello").shape)?',
    options: [
      '(5,)',
      '(1, 5)',
      'Error',
      'None'
    ],
    correctAnswer: '(5,)',
    explanation: 'shape returns the shape of the memory view as a tuple.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-619',
    question: 'What is the output of: print(memoryview(b"hello").strides)?',
    options: [
      '(1,)',
      '(5,)',
      'Error',
      'None'
    ],
    correctAnswer: '(1,)',
    explanation: 'strides returns the strides of the memory view as a tuple.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-620',
    question: 'What is the output of: print(memoryview(b"hello").contiguous)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'contiguous indicates whether the memory view is contiguous.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-621',
    question: 'What is the output of: print(memoryview(b"hello").c_contiguous)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'c_contiguous indicates whether the memory view is C-contiguous.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-622',
    question: 'What is the output of: print(memoryview(b"hello").f_contiguous)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'f_contiguous indicates whether the memory view is Fortran-contiguous.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-623',
    question: 'What is the output of: print(memoryview(b"hello").suboffset)?',
    options: [
      '0',
      '1',
      'Error',
      'None'
    ],
    correctAnswer: '0',
    explanation: 'suboffset returns the offset in bytes to the first element.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-624',
    question: 'What is the output of: print(memoryview(b"hello").obj)?',
    options: [
      "b'hello'",
      '<memory at ...>',
      'Error',
      'None'
    ],
    correctAnswer: "b'hello'",
    explanation: 'obj returns the underlying object of the memory view.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-625',
    question: 'What is the output of: print(memoryview(b"hello").release())?',
    options: [
      'None',
      'True',
      'Error',
      'False'
    ],
    correctAnswer: 'None',
    explanation: 'release() releases the underlying buffer and returns None.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-626',
    question: 'What is the output of: print(memoryview(b"hello").cast("B"))?',
    options: [
      '<memory at ...>',
      "b'hello'",
      'Error',
      'None'
    ],
    correctAnswer: '<memory at ...>',
    explanation: 'cast() returns a new memory view with the specified format.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-627',
    question: 'What is the output of: print(memoryview(b"hello").tobytes())?',
    options: [
      "b'hello'",
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: "b'hello'",
    explanation: 'tobytes() returns the data in the memory view as a bytes object.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-628',
    question: 'What is the output of: print(memoryview(b"hello").tolist())?',
    options: [
      '[104, 101, 108, 108, 111]',
      "['h', 'e', 'l', 'l', 'o']",
      'Error',
      'None'
    ],
    correctAnswer: '[104, 101, 108, 108, 111]',
    explanation: 'tolist() returns the data in the memory view as a list of integers.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-629',
    question: 'What is the output of: print(memoryview(b"hello").hex())?',
    options: [
      "'68656c6c6f'",
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: "'68656c6c6f'",
    explanation: 'hex() returns the data in the memory view as a hexadecimal string.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-630',
    question: 'What is the output of: print(memoryview(b"hello").toreadonly())?',
    options: [
      '<memory at ...>',
      "b'hello'",
      'Error',
      'None'
    ],
    correctAnswer: '<memory at ...>',
    explanation: 'toreadonly() returns a read-only memory view.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-631',
    question: 'What is the output of: print(memoryview(b"hello").toreadonly().readonly)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'toreadonly() creates a read-only memory view.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-632',
    question: 'What is the output of: print(__import__("math"))?',
    options: [
      '<module \'math\' ...>',
      'Error',
      'None',
      'math'
    ],
    correctAnswer: '<module \'math\' ...>',
    explanation: '__import__() dynamically imports a module and returns the module object.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-633',
    question: 'What is the output of: print(__import__("math").pi)?',
    options: [
      '3.141592653589793',
      'Error',
      'None',
      'math.pi'
    ],
    correctAnswer: '3.141592653589793',
    explanation: '__import__("math").pi accesses the pi constant from the math module.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-634',
    question: 'What is the output of: print(__import__("os").name)?',
    options: [
      "'nt' or 'posix'",
      'Error',
      'None',
      'os'
    ],
    correctAnswer: "'nt' or 'posix'",
    explanation: '__import__("os").name returns the name of the operating system.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-635',
    question: 'What is the output of: print(__import__("sys").version)?',
    options: [
      'Python version string',
      'Error',
      'None',
      'sys'
    ],
    correctAnswer: 'Python version string',
    explanation: '__import__("sys").version returns the Python version string.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-636',
    question: 'What is the output of: print(__import__("datetime").datetime.now())?',
    options: [
      'Current datetime object',
      'Error',
      'None',
      'datetime'
    ],
    correctAnswer: 'Current datetime object',
    explanation: '__import__("datetime").datetime.now() returns the current datetime.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-637',
    question: 'What is the output of: print(__import__("random").random())?',
    options: [
      'Random float between 0 and 1',
      'Error',
      'None',
      'random'
    ],
    correctAnswer: 'Random float between 0 and 1',
    explanation: '__import__("random").random() returns a random float between 0 and 1.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-638',
    question: 'What is the output of: print(__import__("json").dumps({"a": 1}))?',
    options: [
      "'{\"a\": 1}'",
      'Error',
      'None',
      'json'
    ],
    correctAnswer: "'{\"a\": 1}'",
    explanation: '__import__("json").dumps() serializes a Python object to JSON string.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-639',
    question: 'What is the output of: print(__import__("re").match("a", "abc"))?',
    options: [
      '<re.Match object>',
      'Error',
      'None',
      're'
    ],
    correctAnswer: '<re.Match object>',
    explanation: '__import__("re").match() returns a match object if the pattern matches.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-640',
    question: 'What is the output of: print(__import__("collections").Counter([1, 2, 2, 3]))?',
    options: [
      'Counter({2: 2, 1: 1, 3: 1})',
      'Error',
      'None',
      'collections'
    ],
    correctAnswer: 'Counter({2: 2, 1: 1, 3: 1})',
    explanation: '__import__("collections").Counter() counts occurrences of elements.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-641',
    question: 'What is the output of: print(__import__("itertools").count(1))?',
    options: [
      '<itertools.count object>',
      'Error',
      'None',
      'itertools'
    ],
    correctAnswer: '<itertools.count object>',
    explanation: '__import__("itertools").count() returns an infinite counter iterator.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-642',
    question: 'What is the output of: print(__import__("functools").reduce(lambda x, y: x + y, [1, 2, 3]))?',
    options: [
      '6',
      'Error',
      'None',
      'functools'
    ],
    correctAnswer: '6',
    explanation: '__import__("functools").reduce() applies a function cumulatively to items.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-643',
    question: 'What is the output of: print(__import__("operator").add(3, 4))?',
    options: [
      '7',
      'Error',
      'None',
      'operator'
    ],
    correctAnswer: '7',
    explanation: '__import__("operator").add() performs addition operation.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-644',
    question: 'What is the output of: print(__import__("time").time())?',
    options: [
      'Current timestamp',
      'Error',
      'None',
      'time'
    ],
    correctAnswer: 'Current timestamp',
    explanation: '__import__("time").time() returns the current time as a timestamp.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-645',
    question: 'What is the output of: print(__import__("calendar").month_name[1])?',
    options: [
      "'January'",
      'Error',
      'None',
      'calendar'
    ],
    correctAnswer: "'January'",
    explanation: '__import__("calendar").month_name[1] returns the name of January.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-646',
    question: 'What is the output of: print(__import__("urllib").request)?',
    options: [
      '<module \'urllib.request\' ...>',
      'Error',
      'None',
      'urllib'
    ],
    correctAnswer: '<module \'urllib.request\' ...>',
    explanation: '__import__("urllib").request returns the request module from urllib.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-647',
    question: 'What is the output of: print(__import__("pathlib").Path("test.txt"))?',
    options: [
      'WindowsPath(\'test.txt\') or PosixPath(\'test.txt\')',
      'Error',
      'None',
      'pathlib'
    ],
    correctAnswer: 'WindowsPath(\'test.txt\') or PosixPath(\'test.txt\')',
    explanation: '__import__("pathlib").Path() creates a Path object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-648',
    question: 'What is the output of: print(__import__("typing").List[int])?',
    options: [
      'typing.List[int]',
      'Error',
      'None',
      'typing'
    ],
    correctAnswer: 'typing.List[int]',
    explanation: '__import__("typing").List[int] creates a type hint for a list of integers.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-649',
    question: 'What is the output of: print(__import__("dataclasses").dataclass)?',
    options: [
      '<function dataclass>',
      'Error',
      'None',
      'dataclasses'
    ],
    correctAnswer: '<function dataclass>',
    explanation: '__import__("dataclasses").dataclass returns the dataclass decorator function.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-650',
    question: 'What is the output of: print(__import__("enum").Enum)?',
    options: [
      '<class \'enum.Enum\'>',
      'Error',
      'None',
      'enum'
    ],
    correctAnswer: '<class \'enum.Enum\'>',
    explanation: '__import__("enum").Enum returns the Enum class for creating enumerations.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-651',
    question: 'What is the output of: print(compile("x = 5", "<string>", "exec"))?',
    options: [
      '<code object ...>',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '<code object ...>',
    explanation: 'compile() with "exec" mode returns a code object that can be executed.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-652',
    question: 'What is the output of: print(compile("2 + 2", "<string>", "eval"))?',
    options: [
      '<code object ...>',
      '4',
      'Error',
      'None'
    ],
    correctAnswer: '<code object ...>',
    explanation: 'compile() with "eval" mode returns a code object that can be evaluated.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-653',
    question: 'What is the output of: print(compile("print(\'hello\')", "<string>", "single"))?',
    options: [
      '<code object ...>',
      'hello',
      'Error',
      'None'
    ],
    correctAnswer: '<code object ...>',
    explanation: 'compile() with "single" mode returns a code object for single statements.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-654',
    question: 'What is the output of: print(eval(compile("2 + 2", "<string>", "eval")))?',
    options: [
      '4',
      '<code object ...>',
      'Error',
      'None'
    ],
    correctAnswer: '4',
    explanation: 'eval() executes the compiled code object and returns the result.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-655',
    question: 'What is the output of: print(exec(compile("x = 5", "<string>", "exec")))?',
    options: [
      'None',
      '5',
      'Error',
      '<code object ...>'
    ],
    correctAnswer: 'None',
    explanation: 'exec() executes the compiled code object and returns None.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-656',
    question: 'What is the output of: print(globals()["__name__"])?',
    options: [
      "'__main__'",
      'Error',
      'None',
      'globals'
    ],
    correctAnswer: "'__main__'",
    explanation: 'globals()["__name__"] returns the name of the current module.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-657',
    question: 'What is the output of: print(locals() == globals())?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'At module level, locals() and globals() refer to the same dictionary.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-658',
    question: 'What is the output of: print(dir([]))?',
    options: [
      'List of list methods',
      '[]',
      'Error',
      'None'
    ],
    correctAnswer: 'List of list methods',
    explanation: 'dir([]) returns a list of valid attributes and methods for list objects.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-659',
    question: 'What is the output of: print(dir("hello"))?',
    options: [
      'List of string methods',
      "'hello'",
      'Error',
      'None'
    ],
    correctAnswer: 'List of string methods',
    explanation: 'dir("hello") returns a list of valid attributes and methods for string objects.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-660',
    question: 'What is the output of: print(dir({}))?',
    options: [
      'List of dict methods',
      '{}',
      'Error',
      'None'
    ],
    correctAnswer: 'List of dict methods',
    explanation: 'dir({}) returns a list of valid attributes and methods for dict objects.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-661',
    question: 'What is the output of: print(vars([]))?',
    options: [
      'Error',
      '{}',
      'None',
      '[]'
    ],
    correctAnswer: 'Error',
    explanation: 'vars() requires an object with a __dict__ attribute. Lists don\'t have one.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-662',
    question: 'What is the output of: print(vars(str))?',
    options: [
      'Dictionary of string attributes',
      'Error',
      'None',
      '{}'
    ],
    correctAnswer: 'Dictionary of string attributes',
    explanation: 'vars(str) returns the __dict__ attribute of the str class.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-663',
    question: 'What is the output of: print(getattr(str, "upper"))?',
    options: [
      '<method \'upper\' of \'str\' objects>',
      'Error',
      'None',
      'upper'
    ],
    correctAnswer: '<method \'upper\' of \'str\' objects>',
    explanation: 'getattr(str, "upper") returns the upper method of the str class.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-664',
    question: 'What is the output of: print(getattr(str, "nonexistent", "default"))?',
    options: [
      "'default'",
      'Error',
      'None',
      'AttributeError'
    ],
    correctAnswer: "'default'",
    explanation: 'getattr() with a default value returns the default when attribute doesn\'t exist.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-665',
    question: 'What is the output of: print(hasattr(str, "upper"))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'hasattr(str, "upper") returns True because str has an upper method.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-666',
    question: 'What is the output of: print(hasattr(str, "nonexistent"))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'hasattr(str, "nonexistent") returns False because str doesn\'t have this attribute.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-667',
    question: 'What is the output of: print(callable(str))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'callable(str) returns True because str is a callable class.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-668',
    question: 'What is the output of: print(callable("hello"))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'callable("hello") returns False because strings are not callable.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-669',
    question: 'What is the output of: print(callable(len))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'callable(len) returns True because len is a callable function.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-670',
    question: 'What is the output of: print(isinstance(5, (int, float)))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isinstance(5, (int, float)) returns True because 5 is an instance of int.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-671',
    question: 'What is the output of: print(isinstance(5.0, (int, float)))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'isinstance(5.0, (int, float)) returns True because 5.0 is an instance of float.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-672',
    question: 'What is the output of: print(isinstance("hello", (int, float)))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'isinstance("hello", (int, float)) returns False because "hello" is not an instance of int or float.',
    category: 'Python Built-in Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-673',
    question: 'What is the output of: print(issubclass(int, object))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'issubclass(int, object) returns True because int is a subclass of object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-674',
    question: 'What is the output of: print(issubclass(str, int))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'issubclass(str, int) returns False because str is not a subclass of int.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-675',
    question: 'What is the output of: print(issubclass(list, (tuple, dict)))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'issubclass(list, (tuple, dict)) returns False because list is not a subclass of tuple or dict.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-676',
    question: 'What is the output of: print(type(5) is int)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'type(5) is int returns True because type(5) returns the int class.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-677',
    question: 'What is the output of: print(type(5) == int)?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'type(5) == int returns True because type(5) returns the int class.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-678',
    question: 'What is the output of: print(type(5) is type(10))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'type(5) is type(10) returns True because both return the same int class.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-679',
    question: 'What is the output of: print(type(5) is type("hello"))?',
    options: [
      'False',
      'True',
      'Error',
      'None'
    ],
    correctAnswer: 'False',
    explanation: 'type(5) is type("hello") returns False because they return different classes (int vs str).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-680',
    question: 'What is the output of: print(super())?',
    options: [
      'Error',
      '<super: <class ...>, <...>>',
      'None',
      'super'
    ],
    correctAnswer: 'Error',
    explanation: 'super() must be called within a method of a class, not at module level.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-681',
    question: 'What is the output of: print(property())?',
    options: [
      '<property object at ...>',
      'None',
      'Error',
      'property'
    ],
    correctAnswer: '<property object at ...>',
    explanation: 'property() creates a property object, which is a descriptor.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-682',
    question: 'What is the output of: print(classmethod(lambda: None))?',
    options: [
      '<classmethod object at ...>',
      'None',
      'Error',
      'classmethod'
    ],
    correctAnswer: '<classmethod object at ...>',
    explanation: 'classmethod() transforms a method into a class method.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-683',
    question: 'What is the output of: print(staticmethod(lambda: None))?',
    options: [
      '<staticmethod object at ...>',
      'None',
      'Error',
      'staticmethod'
    ],
    correctAnswer: '<staticmethod object at ...>',
    explanation: 'staticmethod() transforms a method into a static method.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-684',
    question: 'What is the output of: print(slice(1, 5, 2))?',
    options: [
      'slice(1, 5, 2)',
      '[1, 3, 5]',
      'Error',
      'None'
    ],
    correctAnswer: 'slice(1, 5, 2)',
    explanation: 'slice() creates a slice object representing the set of indices specified by range(start, stop, step).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-685',
    question: 'What is the output of: print(slice(1, 5))?',
    options: [
      'slice(1, 5, None)',
      '[1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: 'slice(1, 5, None)',
    explanation: 'slice(1, 5) creates a slice object with default step of None.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-686',
    question: 'What is the output of: print(slice(5))?',
    options: [
      'slice(None, 5, None)',
      '[0, 1, 2, 3, 4]',
      'Error',
      'None'
    ],
    correctAnswer: 'slice(None, 5, None)',
    explanation: 'slice(5) creates a slice object with start=None, stop=5, step=None.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-687',
    question: 'What is the output of: print([1, 2, 3, 4, 5][slice(1, 4)])?',
    options: [
      '[2, 3, 4]',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '[2, 3, 4]',
    explanation: 'slice(1, 4) applied to a list returns elements from index 1 to 3 (exclusive of 4).',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-688',
    question: 'What is the output of: print([1, 2, 3, 4, 5][slice(1, 4, 2)])?',
    options: [
      '[2, 4]',
      '[1, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '[2, 4]',
    explanation: 'slice(1, 4, 2) applied to a list returns elements at indices 1 and 3.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-689',
    question: 'What is the output of: print(slice(1, 5, 2).start)?',
    options: [
      '1',
      '5',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'slice(1, 5, 2).start returns the start value of the slice object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-690',
    question: 'What is the output of: print(slice(1, 5, 2).stop)?',
    options: [
      '5',
      '1',
      'Error',
      'None'
    ],
    correctAnswer: '5',
    explanation: 'slice(1, 5, 2).stop returns the stop value of the slice object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-691',
    question: 'What is the output of: print(slice(1, 5, 2).step)?',
    options: [
      '2',
      '1',
      'Error',
      'None'
    ],
    correctAnswer: '2',
    explanation: 'slice(1, 5, 2).step returns the step value of the slice object.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-692',
    question: 'What is the output of: print(slice(1, 5).step)?',
    options: [
      'None',
      '1',
      'Error',
      '0'
    ],
    correctAnswer: 'None',
    explanation: 'slice(1, 5).step returns None because no step was specified.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-693',
    question: 'What is the output of: print(slice(5).start)?',
    options: [
      'None',
      '0',
      'Error',
      '5'
    ],
    correctAnswer: 'None',
    explanation: 'slice(5).start returns None because no start was specified.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-694',
    question: 'What is the output of: print(slice(5).stop)?',
    options: [
      '5',
      'None',
      'Error',
      '0'
    ],
    correctAnswer: '5',
    explanation: 'slice(5).stop returns 5 because that was the specified stop value.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-695',
    question: 'What is the output of: print(slice(5).step)?',
    options: [
      'None',
      '1',
      'Error',
      '0'
    ],
    correctAnswer: 'None',
    explanation: 'slice(5).step returns None because no step was specified.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-696',
    question: 'What is the output of: print(slice(1, 5, 2).indices(10))?',
    options: [
      '(1, 5, 2)',
      '(1, 4, 2)',
      'Error',
      'None'
    ],
    correctAnswer: '(1, 5, 2)',
    explanation: 'slice(1, 5, 2).indices(10) returns the start, stop, and step values.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-697',
    question: 'What is the output of: print(slice(-3, None).indices(10))?',
    options: [
      '(7, 10, 1)',
      '(-3, 10, 1)',
      'Error',
      'None'
    ],
    correctAnswer: '(7, 10, 1)',
    explanation: 'slice(-3, None).indices(10) normalizes negative indices relative to length 10.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-698',
    question: 'What is the output of: print(slice(None, -1).indices(10))?',
    options: [
      '(0, 9, 1)',
      '(0, -1, 1)',
      'Error',
      'None'
    ],
    correctAnswer: '(0, 9, 1)',
    explanation: 'slice(None, -1).indices(10) normalizes None to 0 and -1 to 9.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-699',
    question: 'What is the output of: print(slice(1, 10, -1).indices(5))?',
    options: [
      '(1, 0, -1)',
      '(1, 10, -1)',
      'Error',
      'None'
    ],
    correctAnswer: '(1, 0, -1)',
    explanation: 'slice(1, 10, -1).indices(5) normalizes stop to 0 when it exceeds the length.',
    category: 'Python Built-in Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-700',
    question: 'What is the output of: print(slice(1, 5, 2) == slice(1, 5, 2))?',
    options: [
      'True',
      'False',
      'Error',
      'None'
    ],
    correctAnswer: 'True',
    explanation: 'slice objects with the same start, stop, and step values are equal.',
    category: 'Python Built-in Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-701',
    question: 'What is the output of: print([1, 2, 3] + [4, 5, 6])?',
    options: [
      '[1, 2, 3, 4, 5, 6]',
      '[5, 7, 9]',
      'Error',
      'None'
    ],
    correctAnswer: '[1, 2, 3, 4, 5, 6]',
    explanation: 'The + operator concatenates lists, not adds their elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-702',
    question: 'What is the output of: print([1, 2, 3] * 3)?',
    options: [
      '[1, 2, 3, 1, 2, 3, 1, 2, 3]',
      '[3, 6, 9]',
      'Error',
      'None'
    ],
    correctAnswer: '[1, 2, 3, 1, 2, 3, 1, 2, 3]',
    explanation: 'The * operator repeats the list, not multiplies its elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-703',
    question: 'What is the output of: print([1, 2, 3][1:3])?',
    options: [
      '[2, 3]',
      '[1, 2]',
      'Error',
      'None'
    ],
    correctAnswer: '[2, 3]',
    explanation: 'Slicing [1:3] returns elements from index 1 to 2 (exclusive of 3).',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-704',
    question: 'What is the output of: print([1, 2, 3][-2:])?',
    options: [
      '[2, 3]',
      '[1, 2]',
      'Error',
      'None'
    ],
    correctAnswer: '[2, 3]',
    explanation: 'Negative slicing [-2:] returns the last 2 elements.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-705',
    question: 'What is the output of: print([1, 2, 3][::-1])?',
    options: [
      '[3, 2, 1]',
      '[1, 2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '[3, 2, 1]',
    explanation: 'Step -1 reverses the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-706',
    question: 'What is the output of: print([1, 2, 3].append(4))?',
    options: [
      'None',
      '[1, 2, 3, 4]',
      'Error',
      '4'
    ],
    correctAnswer: 'None',
    explanation: 'append() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-707',
    question: 'What is the output of: print([1, 2, 3].extend([4, 5]))?',
    options: [
      'None',
      '[1, 2, 3, 4, 5]',
      'Error',
      '[4, 5]'
    ],
    correctAnswer: 'None',
    explanation: 'extend() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-708',
    question: 'What is the output of: print([1, 2, 3].insert(1, 5))?',
    options: [
      'None',
      '[1, 5, 2, 3]',
      'Error',
      '5'
    ],
    correctAnswer: 'None',
    explanation: 'insert() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-709',
    question: 'What is the output of: print([1, 2, 3].remove(2))?',
    options: [
      'None',
      '[1, 3]',
      'Error',
      '2'
    ],
    correctAnswer: 'None',
    explanation: 'remove() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-710',
    question: 'What is the output of: print([1, 2, 3].pop())?',
    options: [
      '3',
      '[1, 2]',
      'Error',
      'None'
    ],
    correctAnswer: '3',
    explanation: 'pop() removes and returns the last element.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-711',
    question: 'What is the output of: print([1, 2, 3].pop(0))?',
    options: [
      '1',
      '[2, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'pop(0) removes and returns the element at index 0.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-712',
    question: 'What is the output of: print([1, 2, 3].clear())?',
    options: [
      'None',
      '[]',
      'Error',
      '[1, 2, 3]'
    ],
    correctAnswer: 'None',
    explanation: 'clear() removes all elements and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-713',
    question: 'What is the output of: print([1, 2, 3].index(2))?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'index() returns the first occurrence of the element.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-714',
    question: 'What is the output of: print([1, 2, 3].count(2))?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'count() returns the number of occurrences of the element.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-715',
    question: 'What is the output of: print([3, 1, 2].sort())?',
    options: [
      'None',
      '[1, 2, 3]',
      'Error',
      '[3, 1, 2]'
    ],
    correctAnswer: 'None',
    explanation: 'sort() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-716',
    question: 'What is the output of: print([3, 1, 2].reverse())?',
    options: [
      'None',
      '[2, 1, 3]',
      'Error',
      '[3, 1, 2]'
    ],
    correctAnswer: 'None',
    explanation: 'reverse() modifies the list in-place and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-717',
    question: 'What is the output of: print([1, 2, 3].copy())?',
    options: [
      '[1, 2, 3]',
      'None',
      'Error',
      '[1, 2, 3]'
    ],
    correctAnswer: '[1, 2, 3]',
    explanation: 'copy() returns a shallow copy of the list.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-718',
    question: 'What is the output of: print({"a": 1, "b": 2}["a"])?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'Dictionary key access returns the corresponding value.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-719',
    question: 'What is the output of: print({"a": 1, "b": 2}.get("a"))?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'get() returns the value for the key if it exists.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-720',
    question: 'What is the output of: print({"a": 1, "b": 2}.get("c", "default"))?',
    options: [
      "'default'",
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: "'default'",
    explanation: 'get() returns the default value when the key doesn\'t exist.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-721',
    question: 'What is the output of: print({"a": 1, "b": 2}.setdefault("c", 3))?',
    options: [
      '3',
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: '3',
    explanation: 'setdefault() returns the value and adds the key-value pair if it doesn\'t exist.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-722',
    question: 'What is the output of: print({"a": 1, "b": 2}.update({"c": 3}))?',
    options: [
      'None',
      "{'a': 1, 'b': 2, 'c': 3}",
      'Error',
      '3'
    ],
    correctAnswer: 'None',
    explanation: 'update() modifies the dictionary in-place and returns None.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-723',
    question: 'What is the output of: print({"a": 1, "b": 2}.pop("a"))?',
    options: [
      '1',
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: '1',
    explanation: 'pop() removes and returns the value for the specified key.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-724',
    question: 'What is the output of: print({"a": 1, "b": 2}.popitem())?',
    options: [
      'A key-value tuple',
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: 'A key-value tuple',
    explanation: 'popitem() removes and returns an arbitrary key-value pair as a tuple.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-725',
    question: 'What is the output of: print({"a": 1, "b": 2}.clear())?',
    options: [
      'None',
      '{}',
      'Error',
      'KeyError'
    ],
    correctAnswer: 'None',
    explanation: 'clear() removes all items and returns None.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-726',
    question: 'What is the output of: print({"a": 1, "b": 2}.keys())?',
    options: [
      "dict_keys(['a', 'b'])",
      "['a', 'b']",
      'Error',
      'None'
    ],
    correctAnswer: "dict_keys(['a', 'b'])",
    explanation: 'keys() returns a view object of dictionary keys.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-727',
    question: 'What is the output of: print({"a": 1, "b": 2}.values())?',
    options: [
      "dict_values([1, 2])",
      "[1, 2]",
      'Error',
      'None'
    ],
    correctAnswer: "dict_values([1, 2])",
    explanation: 'values() returns a view object of dictionary values.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-728',
    question: 'What is the output of: print({"a": 1, "b": 2}.items())?',
    options: [
      "dict_items([('a', 1), ('b', 2)])",
      "[('a', 1), ('b', 2)]",
      'Error',
      'None'
    ],
    correctAnswer: "dict_items([('a', 1), ('b', 2)])",
    explanation: 'items() returns a view object of dictionary key-value pairs.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-729',
    question: 'What is the output of: print({1, 2, 3} | {3, 4, 5})?',
    options: [
      '{1, 2, 3, 4, 5}',
      '{3}',
      'Error',
      'None'
    ],
    correctAnswer: '{1, 2, 3, 4, 5}',
    explanation: 'The | operator performs set union.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-730',
    question: 'What is the output of: print({1, 2, 3} & {3, 4, 5})?',
    options: [
      '{3}',
      '{1, 2, 3, 4, 5}',
      'Error',
      'None'
    ],
    correctAnswer: '{3}',
    explanation: 'The & operator performs set intersection.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-731',
    question: 'What is the output of: print({1, 2, 3} - {3, 4, 5})?',
    options: [
      '{1, 2}',
      '{4, 5}',
      'Error',
      'None'
    ],
    correctAnswer: '{1, 2}',
    explanation: 'The - operator performs set difference.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-732',
    question: 'What is the output of: print({1, 2, 3} ^ {3, 4, 5})?',
    options: [
      '{1, 2, 4, 5}',
      '{3}',
      'Error',
      'None'
    ],
    correctAnswer: '{1, 2, 4, 5}',
    explanation: 'The ^ operator performs set symmetric difference.',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-733',
    question: 'What is the output of: print({1, 2, 3}.add(4))?',
    options: [
      'None',
      '{1, 2, 3, 4}',
      'Error',
      '4'
    ],
    correctAnswer: 'None',
    explanation: 'add() modifies the set in-place and returns None.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-734',
    question: 'What is the output of: print({1, 2, 3}.remove(2))?',
    options: [
      'None',
      '{1, 3}',
      'Error',
      '2'
    ],
    correctAnswer: 'None',
    explanation: 'remove() modifies the set in-place and returns None.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-735',
    question: 'What is the output of: print({1, 2, 3}.discard(4))?',
    options: [
      'None',
      '{1, 2, 3}',
      'Error',
      'KeyError'
    ],
    correctAnswer: 'None',
    explanation: 'discard() removes an element if present and returns None (no error if not found).',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-736',
    question: 'What is the output of: print({1, 2, 3}.pop())?',
    options: [
      'An arbitrary element',
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: 'An arbitrary element',
    explanation: 'pop() removes and returns an arbitrary element from the set.',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-737',
    question: 'What is the output of: print({1, 2, 3}.clear())?',
    options: [
      'None',
      'set()',
      'Error',
      'KeyError'
    ],
    correctAnswer: 'None',
    explanation: 'clear() removes all elements and returns None.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-738',
    question: 'What is the output of: print({1, 2, 3}.copy())?',
    options: [
      '{1, 2, 3}',
      'None',
      'Error',
      'KeyError'
    ],
    correctAnswer: '{1, 2, 3}',
    explanation: 'copy() returns a shallow copy of the set.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-739',
    question: 'What is the output of: print((1, 2, 3) + (4, 5, 6))?',
    options: [
      '(1, 2, 3, 4, 5, 6)',
      '(5, 7, 9)',
      'Error',
      'None'
    ],
    correctAnswer: '(1, 2, 3, 4, 5, 6)',
    explanation: 'The + operator concatenates tuples.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-740',
    question: 'What is the output of: print((1, 2, 3) * 2)?',
    options: [
      '(1, 2, 3, 1, 2, 3)',
      '(2, 4, 6)',
      'Error',
      'None'
    ],
    correctAnswer: '(1, 2, 3, 1, 2, 3)',
    explanation: 'The * operator repeats the tuple.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-741',
    question: 'What is the output of: print((1, 2, 3).count(2))?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'count() returns the number of occurrences of the element.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-742',
    question: 'What is the output of: print((1, 2, 3).index(2))?',
    options: [
      '1',
      '2',
      'Error',
      'None'
    ],
    correctAnswer: '1',
    explanation: 'index() returns the first occurrence of the element.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-743',
    question: 'What is the output of: print([1, 2, 3][1] = 5)?',
    options: [
      'None',
      '[1, 5, 3]',
      'Error',
      '5'
    ],
    correctAnswer: 'None',
    explanation: 'Assignment modifies the list and returns None.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-744',
    question: 'What is the output of: print((1, 2, 3)[1] = 5)?',
    options: [
      'Error',
      'None',
      '(1, 5, 3)',
      '5'
    ],
    correctAnswer: 'Error',
    explanation: 'Tuples are immutable and cannot be modified.',
    category: 'Python Tuples',
    difficulty: 'Easy'
  },
  {
    id: 'python-745',
    question: 'What is the output of: print({"a": 1}["b"])?',
    options: [
      'Error',
      'None',
      'KeyError',
      '1'
    ],
    correctAnswer: 'Error',
    explanation: 'Accessing a non-existent key raises a KeyError.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-746',
    question: 'What is the output of: print({1, 2, 3}.remove(4))?',
    options: [
      'Error',
      'None',
      'KeyError',
      '4'
    ],
    correctAnswer: 'Error',
    explanation: 'remove() raises a KeyError if the element is not found.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-747',
    question: 'What is the output of: print([1, 2, 3].index(4))?',
    options: [
      'Error',
      'None',
      'ValueError',
      '4'
    ],
    correctAnswer: 'Error',
    explanation: 'index() raises a ValueError if the element is not found.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-748',
    question: 'What is the output of: print([1, 2, 3].pop(10))?',
    options: [
      'Error',
      'None',
      'IndexError',
      '10'
    ],
    correctAnswer: 'Error',
    explanation: 'pop() raises an IndexError if the index is out of range.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-749',
    question: 'What is the output of: print({"a": 1}.pop("b"))?',
    options: [
      'Error',
      'None',
      'KeyError',
      '1'
    ],
    correctAnswer: 'Error',
    explanation: 'pop() raises a KeyError if the key is not found.',
    category: 'Python Dictionaries',
    difficulty: 'Easy'
  },
  {
    id: 'python-750',
    question: 'What is the output of: print(set([1, 2, 2, 3, 3, 3]))?',
    options: [
      '{1, 2, 3}',
      '[1, 2, 2, 3, 3, 3]',
      'Error',
      'None'
    ],
    correctAnswer: '{1, 2, 3}',
    explanation: 'set() removes duplicates from the iterable.',
    category: 'Python Sets',
    difficulty: 'Easy'
  },
  {
    id: 'python-751',
    question: 'Which data structure would be most efficient for checking if an element exists in a collection of 1 million items?',
    options: [
      'Set',
      'List',
      'Tuple',
      'Dictionary'
    ],
    correctAnswer: 'Set',
    explanation: 'Sets use hash tables for O(1) average time complexity for membership testing, while lists require O(n) linear search.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-752',
    question: 'What is the time complexity of inserting an element at the beginning of a list with n elements?',
    options: [
      'O(n)',
      'O(1)',
      'O(log n)',
      'O(n²)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'Inserting at the beginning requires shifting all existing elements, making it O(n) operation.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-753',
    question: 'Which method should you use to remove an element from a list when you know its value but not its index?',
    options: [
      'remove()',
      'pop()',
      'del',
      'clear()'
    ],
    correctAnswer: 'remove()',
    explanation: 'remove() finds and removes the first occurrence of a value, while pop() requires an index.',
    category: 'Python Lists',
    difficulty: 'Easy'
  },
  {
    id: 'python-754',
    question: 'What is the difference between a shallow copy and a deep copy of a nested list?',
    options: [
      'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
      'Shallow copy creates new objects for all levels, deep copy creates new references for nested objects',
      'There is no difference between shallow and deep copy',
      'Shallow copy only works for simple lists, deep copy works for all lists'
    ],
    correctAnswer: 'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
    explanation: 'Shallow copy creates a new list but references the same nested objects, while deep copy recursively creates new objects for all nested levels.',
    category: 'Python Data Structures',
    difficulty: 'Hard'
  },
  {
    id: 'python-755',
    question: 'When would you prefer using a tuple over a list?',
    options: [
      'When you need an immutable sequence',
      'When you need to frequently modify the collection',
      'When you need better performance for iteration',
      'When you need to store heterogeneous data types'
    ],
    correctAnswer: 'When you need an immutable sequence',
    explanation: 'Tuples are immutable, making them suitable for data that shouldn\'t change, like coordinates, database records, or function return values.',
    category: 'Python Tuples',
    difficulty: 'Medium'
  },
  {
    id: 'python-756',
    question: 'What is the main advantage of using a dictionary over a list for storing key-value pairs?',
    options: [
      'O(1) average time complexity for lookups',
      'Better memory efficiency',
      'Automatic sorting of keys',
      'Built-in indexing'
    ],
    correctAnswer: 'O(1) average time complexity for lookups',
    explanation: 'Dictionaries use hash tables, providing O(1) average time complexity for key-based lookups, compared to O(n) for lists.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-757',
    question: 'Which data structure would be most appropriate for implementing a queue?',
    options: [
      'collections.deque',
      'list',
      'tuple',
      'set'
    ],
    correctAnswer: 'collections.deque',
    explanation: 'collections.deque provides O(1) operations for both ends, making it ideal for queue implementations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-758',
    question: 'What is the purpose of the __hash__ method in Python?',
    options: [
      'To generate a unique integer for an object',
      'To convert an object to a string',
      'To compare two objects for equality',
      'To serialize an object'
    ],
    correctAnswer: 'To generate a unique integer for an object',
    explanation: 'The __hash__ method returns a hash value (integer) that is used for dictionary keys, set membership, and object comparison.',
    category: 'Python Objects',
    difficulty: 'Hard'
  },
  {
    id: 'python-759',
    question: 'Why are lists not allowed as dictionary keys?',
    options: [
      'Lists are mutable and not hashable',
      'Lists are too large to be keys',
      'Lists don\'t support comparison',
      'Lists are not basic data types'
    ],
    correctAnswer: 'Lists are mutable and not hashable',
    explanation: 'Dictionary keys must be hashable (immutable), and since lists are mutable, they cannot be hashed and therefore cannot be used as keys.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-760',
    question: 'What is the difference between a set and a frozenset?',
    options: [
      'Sets are mutable, frozensets are immutable',
      'Sets can only contain numbers, frozensets can contain any type',
      'Sets are faster for lookups',
      'Frozensets are deprecated in modern Python'
    ],
    correctAnswer: 'Sets are mutable, frozensets are immutable',
    explanation: 'Sets can be modified after creation, while frozensets are immutable and can be used as dictionary keys or set elements.',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-761',
    question: 'When would you use a defaultdict instead of a regular dictionary?',
    options: [
      'When you want automatic default values for missing keys',
      'When you need better performance',
      'When you want keys to be automatically sorted',
      'When you need to store only unique values'
    ],
    correctAnswer: 'When you want automatic default values for missing keys',
    explanation: 'defaultdict automatically creates default values for missing keys, eliminating the need to check if a key exists before using it.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-762',
    question: 'What is the purpose of the __slots__ attribute in Python classes?',
    options: [
      'To restrict the attributes that can be assigned to instances',
      'To improve memory usage and attribute access speed',
      'To make the class immutable',
      'To define class methods'
    ],
    correctAnswer: 'To improve memory usage and attribute access speed',
    explanation: '__slots__ reduces memory usage by storing attributes in a fixed-size array instead of a dictionary, and can improve attribute access speed.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-763',
    question: 'What is the difference between a generator and a list comprehension?',
    options: [
      'Generators are lazy and memory-efficient, list comprehensions create the entire list at once',
      'Generators are faster for small datasets',
      'List comprehensions can only be used once',
      'Generators cannot be iterated over'
    ],
    correctAnswer: 'Generators are lazy and memory-efficient, list comprehensions create the entire list at once',
    explanation: 'Generators yield values one at a time and are memory-efficient for large datasets, while list comprehensions create the entire list in memory.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-764',
    question: 'When would you use a namedtuple instead of a regular tuple?',
    options: [
      'When you want to access elements by name instead of index',
      'When you need better performance',
      'When you want the tuple to be mutable',
      'When you need to store only numbers'
    ],
    correctAnswer: 'When you want to access elements by name instead of index',
    explanation: 'namedtuple provides named fields, making code more readable and self-documenting compared to accessing tuple elements by index.',
    category: 'Python Tuples',
    difficulty: 'Medium'
  },
  {
    id: 'python-765',
    question: 'What is the purpose of the __enter__ and __exit__ methods in Python?',
    options: [
      'To implement context managers for use with the with statement',
      'To define class constructors and destructors',
      'To implement iterator protocols',
      'To define property getters and setters'
    ],
    correctAnswer: 'To implement context managers for use with the with statement',
    explanation: 'These methods define the context manager protocol, allowing objects to be used with the with statement for resource management.',
    category: 'Python Context Managers',
    difficulty: 'Hard'
  },
  {
    id: 'python-766',
    question: 'What is the difference between a method and a function in Python?',
    options: [
      'Methods are defined within a class and automatically receive self as the first parameter',
      'Methods are faster than functions',
      'Functions can only be called from within a class',
      'Methods cannot return values'
    ],
    correctAnswer: 'Methods are defined within a class and automatically receive self as the first parameter',
    explanation: 'Methods are functions that belong to a class and automatically receive the instance (self) as the first parameter.',
    category: 'Python Classes',
    difficulty: 'Easy'
  },
  {
    id: 'python-767',
    question: 'What is the purpose of the __call__ method?',
    options: [
      'To make instances callable like functions',
      'To define class constructors',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To make instances callable like functions',
    explanation: 'The __call__ method allows instances of a class to be called like functions, enabling function-like behavior for objects.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-768',
    question: 'What is the difference between a class method and a static method?',
    options: [
      'Class methods receive the class as the first parameter, static methods don\'t receive any special first parameter',
      'Class methods are faster than static methods',
      'Static methods can only be called from within the class',
      'Class methods cannot access class attributes'
    ],
    correctAnswer: 'Class methods receive the class as the first parameter, static methods don\'t receive any special first parameter',
    explanation: 'Class methods receive the class (cls) as the first parameter, while static methods receive no special first parameter.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-769',
    question: 'What is the purpose of the @property decorator?',
    options: [
      'To define getter methods that can be accessed like attributes',
      'To make methods private',
      'To define class methods',
      'To create abstract methods'
    ],
    correctAnswer: 'To define getter methods that can be accessed like attributes',
    explanation: 'The @property decorator allows methods to be accessed like attributes, providing a clean interface for computed values.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-770',
    question: 'What is the difference between __str__ and __repr__ methods?',
    options: [
      '__str__ is for user-friendly output, __repr__ is for developer-friendly output',
      '__str__ is faster than __repr__',
      '__repr__ can only be used for debugging',
      '__str__ is deprecated in Python 3'
    ],
    correctAnswer: '__str__ is for user-friendly output, __repr__ is for developer-friendly output',
    explanation: '__str__ provides a readable string representation for users, while __repr__ provides a detailed representation for developers and debugging.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-771',
    question: 'What is the purpose of the __new__ method?',
    options: [
      'To control the creation of new instances',
      'To initialize instance attributes',
      'To define class methods',
      'To implement comparison operations'
    ],
    correctAnswer: 'To control the creation of new instances',
    explanation: '__new__ is called before __init__ and controls the actual creation of the instance, allowing for custom instance creation logic.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-772',
    question: 'What is the difference between a shallow copy and a deep copy?',
    options: [
      'Shallow copy creates a new object but references the same nested objects, deep copy creates new objects for all levels',
      'Shallow copy is faster but uses more memory',
      'Deep copy only works for simple objects',
      'Shallow copy creates immutable objects'
    ],
    correctAnswer: 'Shallow copy creates a new object but references the same nested objects, deep copy creates new objects for all levels',
    explanation: 'Shallow copy creates a new object but shares references to nested objects, while deep copy recursively creates new objects for all nested levels.',
    category: 'Python Objects',
    difficulty: 'Medium'
  },
  {
    id: 'python-773',
    question: 'What is the purpose of the __del__ method?',
    options: [
      'To define cleanup actions when an object is garbage collected',
      'To delete instance attributes',
      'To define class destructors',
      'To implement comparison operations'
    ],
    correctAnswer: 'To define cleanup actions when an object is garbage collected',
    explanation: '__del__ is called when an object is about to be garbage collected, allowing for cleanup actions like closing files or network connections.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-774',
    question: 'What is the difference between a module and a package in Python?',
    options: [
      'A module is a single Python file, a package is a directory containing modules',
      'A package is faster than a module',
      'Modules can only contain functions, packages can contain classes',
      'Packages are deprecated in modern Python'
    ],
    correctAnswer: 'A module is a single Python file, a package is a directory containing modules',
    explanation: 'A module is a single .py file, while a package is a directory containing an __init__.py file and other modules.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-775',
    question: 'What is the purpose of the __init__.py file in a package?',
    options: [
      'To mark a directory as a Python package',
      'To define package initialization code',
      'To specify package dependencies',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'The __init__.py file marks a directory as a Python package, can contain initialization code, and can specify package metadata.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-776',
    question: 'What is the difference between import and from ... import?',
    options: [
      'import imports the entire module, from ... import imports specific items',
      'from ... import is faster than import',
      'import can only be used for packages',
      'from ... import is deprecated in Python 3'
    ],
    correctAnswer: 'import imports the entire module, from ... import imports specific items',
    explanation: 'import imports the entire module, while from ... import imports specific functions, classes, or variables from a module.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-777',
    question: 'What is the purpose of the __all__ variable in a module?',
    options: [
      'To specify which names should be exported when using from module import *',
      'To define module constants',
      'To specify module dependencies',
      'To define module version'
    ],
    correctAnswer: 'To specify which names should be exported when using from module import *',
    explanation: '__all__ is a list of strings that specifies which names should be exported when using from module import *.',
    category: 'Python Modules',
    difficulty: 'Medium'
  },
  {
    id: 'python-778',
    question: 'What is the difference between a function and a lambda expression?',
    options: [
      'Lambda expressions are limited to a single expression, functions can contain multiple statements',
      'Lambda expressions are faster than functions',
      'Functions can only be used once',
      'Lambda expressions cannot return values'
    ],
    correctAnswer: 'Lambda expressions are limited to a single expression, functions can contain multiple statements',
    explanation: 'Lambda expressions are limited to a single expression and are typically used for simple operations, while functions can contain multiple statements.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-779',
    question: 'What is the purpose of the *args parameter in a function?',
    options: [
      'To accept a variable number of positional arguments',
      'To accept keyword arguments',
      'To specify default arguments',
      'To define function return type'
    ],
    correctAnswer: 'To accept a variable number of positional arguments',
    explanation: '*args allows a function to accept a variable number of positional arguments, which are collected into a tuple.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-780',
    question: 'What is the purpose of the **kwargs parameter in a function?',
    options: [
      'To accept a variable number of keyword arguments',
      'To accept positional arguments',
      'To specify default arguments',
      'To define function return type'
    ],
    correctAnswer: 'To accept a variable number of keyword arguments',
    explanation: '**kwargs allows a function to accept a variable number of keyword arguments, which are collected into a dictionary.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-781',
    question: 'What is the difference between a local variable and a global variable?',
    options: [
      'Local variables are defined within a function, global variables are defined at module level',
      'Global variables are faster than local variables',
      'Local variables can only be used once',
      'Global variables cannot be modified'
    ],
    correctAnswer: 'Local variables are defined within a function, global variables are defined at module level',
    explanation: 'Local variables are defined within a function and are only accessible within that function, while global variables are defined at module level.',
    category: 'Python Variables',
    difficulty: 'Easy'
  },
  {
    id: 'python-782',
    question: 'What is the purpose of the nonlocal keyword?',
    options: [
      'To modify a variable from an outer (but not global) scope',
      'To declare a global variable',
      'To create a new local variable',
      'To define a constant'
    ],
    correctAnswer: 'To modify a variable from an outer (but not global) scope',
    explanation: 'The nonlocal keyword allows you to modify a variable from an outer (enclosing) scope, but not from the global scope.',
    category: 'Python Variables',
    difficulty: 'Medium'
  },
  {
    id: 'python-783',
    question: 'What is the difference between a list comprehension and a generator expression?',
    options: [
      'List comprehensions create a list in memory, generator expressions create an iterator',
      'Generator expressions are faster than list comprehensions',
      'List comprehensions can only be used once',
      'Generator expressions cannot be iterated over'
    ],
    correctAnswer: 'List comprehensions create a list in memory, generator expressions create an iterator',
    explanation: 'List comprehensions create the entire list in memory, while generator expressions create an iterator that yields values on demand.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-784',
    question: 'What is the purpose of the yield keyword?',
    options: [
      'To create a generator function',
      'To return a value from a function',
      'To raise an exception',
      'To define a class method'
    ],
    correctAnswer: 'To create a generator function',
    explanation: 'The yield keyword is used to create generator functions that can yield values one at a time instead of returning all values at once.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-785',
    question: 'What is the difference between a try-except block and a try-finally block?',
    options: [
      'try-except handles exceptions, try-finally ensures cleanup code runs',
      'try-finally is faster than try-except',
      'try-except can only handle one exception type',
      'try-finally cannot be used with except'
    ],
    correctAnswer: 'try-except handles exceptions, try-finally ensures cleanup code runs',
    explanation: 'try-except catches and handles exceptions, while try-finally ensures that cleanup code runs regardless of whether an exception occurs.',
    category: 'Python Exceptions',
    difficulty: 'Medium'
  },
  {
    id: 'python-786',
    question: 'What is the purpose of the with statement?',
    options: [
      'To ensure proper resource management',
      'To create context managers',
      'To handle exceptions automatically',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    explanation: 'The with statement ensures proper resource management, can create context managers, and handles exceptions automatically.',
    category: 'Python Context Managers',
    difficulty: 'Medium'
  },
  {
    id: 'python-787',
    question: 'What is the difference between a shallow copy and a deep copy of a dictionary?',
    options: [
      'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
      'Deep copy is faster than shallow copy',
      'Shallow copy only works for simple dictionaries',
      'Deep copy cannot handle nested dictionaries'
    ],
    correctAnswer: 'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
    explanation: 'Shallow copy creates a new dictionary but references the same nested objects, while deep copy recursively creates new objects for all nested levels.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-788',
    question: 'What is the purpose of the __iter__ method?',
    options: [
      'To make an object iterable',
      'To define class constructors',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To make an object iterable',
    explanation: 'The __iter__ method returns an iterator object, making the class iterable and allowing it to be used in for loops.',
    category: 'Python Iterators',
    difficulty: 'Hard'
  },
  {
    id: 'python-789',
    question: 'What is the purpose of the __next__ method?',
    options: [
      'To return the next value in an iterator',
      'To define class constructors',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To return the next value in an iterator',
    explanation: 'The __next__ method returns the next value in an iterator and raises StopIteration when there are no more values.',
    category: 'Python Iterators',
    difficulty: 'Hard'
  },
  {
    id: 'python-790',
    question: 'What is the difference between a class variable and an instance variable?',
    options: [
      'Class variables are shared by all instances, instance variables are unique to each instance',
      'Instance variables are faster than class variables',
      'Class variables can only be accessed from within the class',
      'Instance variables cannot be modified'
    ],
    correctAnswer: 'Class variables are shared by all instances, instance variables are unique to each instance',
    explanation: 'Class variables are shared by all instances of a class, while instance variables are unique to each individual instance.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-791',
    question: 'What is the purpose of the @classmethod decorator?',
    options: [
      'To define methods that receive the class as the first parameter',
      'To make methods private',
      'To define static methods',
      'To create abstract methods'
    ],
    correctAnswer: 'To define methods that receive the class as the first parameter',
    explanation: 'The @classmethod decorator defines methods that receive the class (cls) as the first parameter instead of the instance (self).',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-792',
    question: 'What is the purpose of the @staticmethod decorator?',
    options: [
      'To define methods that don\'t receive any special first parameter',
      'To make methods private',
      'To define class methods',
      'To create abstract methods'
    ],
    correctAnswer: 'To define methods that don\'t receive any special first parameter',
    explanation: 'The @staticmethod decorator defines methods that don\'t receive any special first parameter (neither self nor cls).',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-793',
    question: 'What is the difference between a public and a private attribute in Python?',
    options: [
      'Private attributes use name mangling with double underscores, public attributes don\'t',
      'Private attributes cannot be accessed from outside the class',
      'Public attributes are faster than private attributes',
      'Private attributes are deprecated in Python 3'
    ],
    correctAnswer: 'Private attributes use name mangling with double underscores, public attributes don\'t',
    explanation: 'Private attributes use name mangling (__attribute becomes _ClassName__attribute), but they can still be accessed from outside the class.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-794',
    question: 'What is the purpose of the __getattr__ method?',
    options: [
      'To handle attribute access when the attribute doesn\'t exist',
      'To define attribute getters',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To handle attribute access when the attribute doesn\'t exist',
    explanation: '__getattr__ is called when an attribute is not found through normal lookup, allowing for custom attribute access behavior.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-795',
    question: 'What is the purpose of the __setattr__ method?',
    options: [
      'To control how attributes are set',
      'To define attribute setters',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To control how attributes are set',
    explanation: '__setattr__ is called whenever an attribute is set, allowing for custom behavior when attributes are assigned.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-796',
    question: 'What is the difference between a descriptor and a property?',
    options: [
      'Descriptors are more general and can be reused, properties are specific to a class',
      'Properties are faster than descriptors',
      'Descriptors can only be used for getters',
      'Properties are deprecated in Python 3'
    ],
    correctAnswer: 'Descriptors are more general and can be reused, properties are specific to a class',
    explanation: 'Descriptors are more general and can be reused across multiple classes, while properties are specific to the class they\'re defined in.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-797',
    question: 'What is the purpose of the __metaclass__ attribute?',
    options: [
      'To specify the metaclass for a class',
      'To define class methods',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To specify the metaclass for a class',
    explanation: '__metaclass__ specifies the metaclass that will be used to create the class, allowing for custom class creation behavior.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-798',
    question: 'What is the difference between a weak reference and a strong reference?',
    options: [
      'Weak references don\'t prevent garbage collection, strong references do',
      'Strong references are faster than weak references',
      'Weak references can only be used for immutable objects',
      'Strong references are deprecated in Python 3'
    ],
    correctAnswer: 'Weak references don\'t prevent garbage collection, strong references do',
    explanation: 'Weak references don\'t prevent the referenced object from being garbage collected, while strong references keep the object alive.',
    category: 'Python Memory Management',
    difficulty: 'Hard'
  },
  {
    id: 'python-799',
    question: 'What is the purpose of the __slots__ attribute in a class?',
    options: [
      'To restrict the attributes that can be assigned to instances',
      'To improve memory usage and attribute access speed',
      'To make the class immutable',
      'To define class methods'
    ],
    correctAnswer: 'To improve memory usage and attribute access speed',
    explanation: '__slots__ reduces memory usage by storing attributes in a fixed-size array instead of a dictionary, and can improve attribute access speed.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-800',
    question: 'What is the difference between a coroutine and a generator?',
    options: [
      'Coroutines can receive values via send(), generators can only yield values',
      'Generators are faster than coroutines',
      'Coroutines can only be used for async programming',
      'Generators are deprecated in Python 3'
    ],
    correctAnswer: 'Coroutines can receive values via send(), generators can only yield values',
    explanation: 'Coroutines can both yield values and receive values via the send() method, while generators can only yield values.',
    category: 'Python Generators',
    difficulty: 'Hard'
  },
  {
    id: 'python-801',
    question: 'What is the purpose of the asyncio library in Python?',
    options: [
      'To write asynchronous code using async/await syntax',
      'To create multi-threaded applications',
      'To handle file I/O operations',
      'To manage database connections'
    ],
    correctAnswer: 'To write asynchronous code using async/await syntax',
    explanation: 'asyncio provides the infrastructure for writing single-threaded concurrent code using coroutines, multiplexing I/O access over sockets and other resources.',
    category: 'Python Asyncio',
    difficulty: 'Medium'
  },
  {
    id: 'python-802',
    question: 'What is the difference between threading and multiprocessing in Python?',
    options: [
      'Threading shares memory space, multiprocessing uses separate memory spaces',
      'Multiprocessing is always faster than threading',
      'Threading can only be used for I/O-bound tasks',
      'Multiprocessing is deprecated in Python 3'
    ],
    correctAnswer: 'Threading shares memory space, multiprocessing uses separate memory spaces',
    explanation: 'Threading shares the same memory space and is limited by the GIL, while multiprocessing uses separate memory spaces and can utilize multiple CPU cores.',
    category: 'Python Concurrency',
    difficulty: 'Medium'
  },
  {
    id: 'python-803',
    question: 'What is the Global Interpreter Lock (GIL) in Python?',
    options: [
      'A mutex that protects access to Python objects',
      'A mechanism for garbage collection',
      'A tool for memory management',
      'A feature for exception handling'
    ],
    correctAnswer: 'A mutex that protects access to Python objects',
    explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously.',
    category: 'Python Internals',
    difficulty: 'Hard'
  },
  {
    id: 'python-804',
    question: 'What is the purpose of the @dataclass decorator?',
    options: [
      'To automatically generate boilerplate code for classes',
      'To make classes immutable',
      'To improve performance of class instantiation',
      'To create abstract base classes'
    ],
    correctAnswer: 'To automatically generate boilerplate code for classes',
    explanation: '@dataclass automatically generates __init__, __repr__, __eq__, and other special methods, reducing boilerplate code for simple data-holding classes.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-805',
    question: 'What is the difference between a list and a deque from collections?',
    options: [
      'deque provides O(1) operations for both ends, list is O(n) for beginning operations',
      'deque can only store numbers, list can store any type',
      'list is faster than deque for all operations',
      'deque is deprecated in modern Python'
    ],
    correctAnswer: 'deque provides O(1) operations for both ends, list is O(n) for beginning operations',
    explanation: 'deque (double-ended queue) provides O(1) operations for both ends, while list operations at the beginning are O(n) due to shifting elements.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-806',
    question: 'What is the purpose of the @lru_cache decorator?',
    options: [
      'To cache function results and avoid redundant computations',
      'To improve function performance',
      'To make functions thread-safe',
      'To create lazy evaluation'
    ],
    correctAnswer: 'To cache function results and avoid redundant computations',
    explanation: '@lru_cache decorates a function with a memoizing callable that saves up to the maxsize most recent calls, avoiding redundant computations.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-807',
    question: 'What is the difference between a shallow copy and a deep copy of a set?',
    options: [
      'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
      'Deep copy is faster than shallow copy',
      'Shallow copy only works for simple sets',
      'Deep copy cannot handle nested sets'
    ],
    correctAnswer: 'Shallow copy creates new references for nested objects, deep copy creates new objects for all levels',
    explanation: 'Shallow copy creates a new set but references the same nested objects, while deep copy recursively creates new objects for all nested levels.',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-808',
    question: 'What is the purpose of the __getitem__ method?',
    options: [
      'To enable indexing and slicing operations on objects',
      'To define attribute getters',
      'To implement comparison operations',
      'To define string representation'
    ],
    correctAnswer: 'To enable indexing and slicing operations on objects',
    explanation: '__getitem__ allows objects to support indexing and slicing operations, making them behave like sequences or mappings.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-809',
    question: 'What is the difference between a regular function and a generator function?',
    options: [
      'Generator functions use yield to return values one at a time',
      'Regular functions are faster than generator functions',
      'Generator functions can only be used once',
      'Regular functions cannot return values'
    ],
    correctAnswer: 'Generator functions use yield to return values one at a time',
    explanation: 'Generator functions use the yield keyword to return values one at a time, creating an iterator, while regular functions return all values at once.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-810',
    question: 'What is the purpose of the @abstractmethod decorator?',
    options: [
      'To define methods that must be implemented by subclasses',
      'To make methods private',
      'To improve method performance',
      'To create static methods'
    ],
    correctAnswer: 'To define methods that must be implemented by subclasses',
    explanation: '@abstractmethod marks a method as abstract, requiring subclasses to implement it, enforcing a contract in the class hierarchy.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-811',
    question: 'What is the difference between a module and a script in Python?',
    options: [
      'A module is designed to be imported, a script is designed to be run directly',
      'A script is faster than a module',
      'Modules can only contain functions, scripts can contain classes',
      'Scripts are deprecated in modern Python'
    ],
    correctAnswer: 'A module is designed to be imported, a script is designed to be run directly',
    explanation: 'A module is designed to be imported and reused, while a script is designed to be executed directly as the main program.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-812',
    question: 'What is the purpose of the __name__ variable?',
    options: [
      'To identify whether a module is being run directly or imported',
      'To specify the module version',
      'To define module constants',
      'To specify module dependencies'
    ],
    correctAnswer: 'To identify whether a module is being run directly or imported',
    explanation: '__name__ is "__main__" when a module is run directly, and the module name when imported, allowing conditional execution of code.',
    category: 'Python Modules',
    difficulty: 'Easy'
  },
  {
    id: 'python-813',
    question: 'What is the difference between a tuple and a namedtuple?',
    options: [
      'namedtuple provides named fields for better readability',
      'namedtuple is faster than regular tuple',
      'Regular tuple can only store numbers',
      'namedtuple is deprecated in Python 3'
    ],
    correctAnswer: 'namedtuple provides named fields for better readability',
    explanation: 'namedtuple creates tuple subclasses with named fields, making code more readable and self-documenting compared to accessing tuple elements by index.',
    category: 'Python Tuples',
    difficulty: 'Medium'
  },
  {
    id: 'python-814',
    question: 'What is the purpose of the @singledispatch decorator?',
    options: [
      'To create function overloads based on argument types',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract methods'
    ],
    correctAnswer: 'To create function overloads based on argument types',
    explanation: '@singledispatch allows you to create function overloads, where different implementations are called based on the type of the first argument.',
    category: 'Python Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-815',
    question: 'What is the difference between a list comprehension and a map function?',
    options: [
      'List comprehensions are more readable and can include conditions',
      'map is faster than list comprehensions',
      'List comprehensions can only be used once',
      'map cannot be used with lambda functions'
    ],
    correctAnswer: 'List comprehensions are more readable and can include conditions',
    explanation: 'List comprehensions are generally more readable, can include conditions, and are more Pythonic, while map is more functional programming style.',
    category: 'Python Comprehensions',
    difficulty: 'Medium'
  },
  {
    id: 'python-816',
    question: 'What is the purpose of the @total_ordering decorator?',
    options: [
      'To automatically generate comparison methods from a subset',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To automatically generate comparison methods from a subset',
    explanation: '@total_ordering automatically generates missing comparison methods (__lt__, __le__, __gt__, __ge__) from __eq__ and one other method.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-817',
    question: 'What is the difference between a regular dictionary and an OrderedDict?',
    options: [
      'OrderedDict remembers the insertion order of keys',
      'OrderedDict is faster than regular dict',
      'Regular dict can only store strings as keys',
      'OrderedDict is deprecated in Python 3'
    ],
    correctAnswer: 'OrderedDict remembers the insertion order of keys',
    explanation: 'OrderedDict remembers the order in which keys were inserted, while regular dictionaries (since Python 3.7) also maintain insertion order.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-818',
    question: 'What is the purpose of the @cached_property decorator?',
    options: [
      'To cache property values after first access',
      'To make properties read-only',
      'To improve property performance',
      'To create abstract properties'
    ],
    correctAnswer: 'To cache property values after first access',
    explanation: '@cached_property caches the result of a property after the first access, avoiding redundant computation on subsequent accesses.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-819',
    question: 'What is the difference between a regular function and a method?',
    options: [
      'Methods are bound to objects and receive self as first parameter',
      'Methods are faster than functions',
      'Functions can only be called from within a class',
      'Methods cannot return values'
    ],
    correctAnswer: 'Methods are bound to objects and receive self as first parameter',
    explanation: 'Methods are functions that are bound to objects and automatically receive the instance (self) as the first parameter.',
    category: 'Python Classes',
    difficulty: 'Easy'
  },
  {
    id: 'python-820',
    question: 'What is the purpose of the @functools.wraps decorator?',
    options: [
      'To preserve function metadata when creating decorators',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract functions'
    ],
    correctAnswer: 'To preserve function metadata when creating decorators',
    explanation: '@functools.wraps preserves the metadata (name, docstring, etc.) of the original function when creating decorators.',
    category: 'Python Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-821',
    question: 'What is the difference between a regular exception and a custom exception?',
    options: [
      'Custom exceptions can carry additional context and meaning',
      'Regular exceptions are faster than custom exceptions',
      'Custom exceptions can only be used once',
      'Regular exceptions are deprecated in Python 3'
    ],
    correctAnswer: 'Custom exceptions can carry additional context and meaning',
    explanation: 'Custom exceptions can carry additional context, provide more meaningful error messages, and help organize error handling in your code.',
    category: 'Python Exceptions',
    difficulty: 'Medium'
  },
  {
    id: 'python-822',
    question: 'What is the purpose of the @contextmanager decorator?',
    options: [
      'To create context managers using generator functions',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract methods'
    ],
    correctAnswer: 'To create context managers using generator functions',
    explanation: '@contextmanager allows you to create context managers using generator functions instead of implementing __enter__ and __exit__ methods.',
    category: 'Python Context Managers',
    difficulty: 'Hard'
  },
  {
    id: 'python-823',
    question: 'What is the difference between a regular list and a numpy array?',
    options: [
      'numpy arrays are optimized for numerical operations and have fixed types',
      'numpy arrays are always faster than regular lists',
      'Regular lists can only store numbers',
      'numpy arrays are deprecated in modern Python'
    ],
    correctAnswer: 'numpy arrays are optimized for numerical operations and have fixed types',
    explanation: 'numpy arrays are optimized for numerical operations, have fixed data types, and provide vectorized operations, while lists are more flexible.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-824',
    question: 'What is the purpose of the @property.setter decorator?',
    options: [
      'To define setter methods for properties',
      'To make properties read-only',
      'To improve property performance',
      'To create abstract properties'
    ],
    correctAnswer: 'To define setter methods for properties',
    explanation: '@property.setter allows you to define setter methods for properties, enabling controlled assignment to property values.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-825',
    question: 'What is the difference between a regular string and a bytes object?',
    options: [
      'bytes objects contain raw binary data, strings contain Unicode text',
      'bytes objects are faster than strings',
      'Strings can only contain ASCII characters',
      'bytes objects are deprecated in Python 3'
    ],
    correctAnswer: 'bytes objects contain raw binary data, strings contain Unicode text',
    explanation: 'bytes objects contain raw binary data (0-255), while strings contain Unicode text, requiring encoding/decoding for conversion.',
    category: 'Python Strings',
    difficulty: 'Medium'
  },
  {
    id: 'python-826',
    question: 'What is the purpose of the @functools.lru_cache decorator?',
    options: [
      'To cache function results with least-recently-used eviction',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract functions'
    ],
    correctAnswer: 'To cache function results with least-recently-used eviction',
    explanation: '@functools.lru_cache caches function results and evicts least-recently-used entries when the cache is full.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-827',
    question: 'What is the difference between a regular class and an abstract base class?',
    options: [
      'Abstract base classes cannot be instantiated and define a common interface',
      'Abstract base classes are faster than regular classes',
      'Regular classes can only contain abstract methods',
      'Abstract base classes are deprecated in Python 3'
    ],
    correctAnswer: 'Abstract base classes cannot be instantiated and define a common interface',
    explanation: 'Abstract base classes cannot be instantiated directly and define a common interface that subclasses must implement.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-828',
    question: 'What is the purpose of the @dataclass(frozen=True) decorator?',
    options: [
      'To create immutable data classes',
      'To improve class performance',
      'To make classes thread-safe',
      'To create abstract base classes'
    ],
    correctAnswer: 'To create immutable data classes',
    explanation: '@dataclass(frozen=True) creates immutable data classes where attributes cannot be modified after instantiation.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-829',
    question: 'What is the difference between a regular function and a lambda function?',
    options: [
      'Lambda functions are limited to a single expression',
      'Lambda functions are faster than regular functions',
      'Regular functions can only be used once',
      'Lambda functions cannot return values'
    ],
    correctAnswer: 'Lambda functions are limited to a single expression',
    explanation: 'Lambda functions are limited to a single expression and are typically used for simple operations, while regular functions can contain multiple statements.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-830',
    question: 'What is the purpose of the @staticmethod decorator?',
    options: [
      'To define methods that don\'t receive any special first parameter',
      'To make methods private',
      'To improve method performance',
      'To create abstract methods'
    ],
    correctAnswer: 'To define methods that don\'t receive any special first parameter',
    explanation: '@staticmethod defines methods that don\'t receive any special first parameter (neither self nor cls).',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-831',
    question: 'What is the difference between a regular list and a linked list?',
    options: [
      'Linked lists use nodes with references, lists use contiguous memory',
      'Linked lists are always faster than regular lists',
      'Regular lists can only store numbers',
      'Linked lists are deprecated in modern Python'
    ],
    correctAnswer: 'Linked lists use nodes with references, lists use contiguous memory',
    explanation: 'Linked lists use nodes with references to the next node, while Python lists use contiguous memory allocation for better cache performance.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-832',
    question: 'What is the purpose of the @classmethod decorator?',
    options: [
      'To define methods that receive the class as the first parameter',
      'To make methods private',
      'To improve method performance',
      'To create abstract methods'
    ],
    correctAnswer: 'To define methods that receive the class as the first parameter',
    explanation: '@classmethod defines methods that receive the class (cls) as the first parameter instead of the instance (self).',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-833',
    question: 'What is the difference between a regular dictionary and a defaultdict?',
    options: [
      'defaultdict automatically creates default values for missing keys',
      'defaultdict is faster than regular dict',
      'Regular dict can only store strings as values',
      'defaultdict is deprecated in Python 3'
    ],
    correctAnswer: 'defaultdict automatically creates default values for missing keys',
    explanation: 'defaultdict automatically creates default values for missing keys, eliminating the need to check if a key exists before using it.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-834',
    question: 'What is the purpose of the @property.deleter decorator?',
    options: [
      'To define deleter methods for properties',
      'To make properties read-only',
      'To improve property performance',
      'To create abstract properties'
    ],
    correctAnswer: 'To define deleter methods for properties',
    explanation: '@property.deleter allows you to define deleter methods for properties, enabling controlled deletion of property values.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-835',
    question: 'What is the difference between a regular set and a frozenset?',
    options: [
      'frozenset is immutable and can be used as dictionary keys',
      'frozenset is faster than regular set',
      'Regular set can only store numbers',
      'frozenset is deprecated in Python 3'
    ],
    correctAnswer: 'frozenset is immutable and can be used as dictionary keys',
    explanation: 'frozenset is immutable and can be used as dictionary keys or set elements, while regular sets are mutable.',
    category: 'Python Sets',
    difficulty: 'Medium'
  },
  {
    id: 'python-836',
    question: 'What is the purpose of the @functools.singledispatch decorator?',
    options: [
      'To create function overloads based on argument types',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract functions'
    ],
    correctAnswer: 'To create function overloads based on argument types',
    explanation: '@functools.singledispatch allows you to create function overloads, where different implementations are called based on the type of the first argument.',
    category: 'Python Functions',
    difficulty: 'Hard'
  },
  {
    id: 'python-837',
    question: 'What is the difference between a regular tuple and a namedtuple?',
    options: [
      'namedtuple provides named fields for better readability',
      'namedtuple is faster than regular tuple',
      'Regular tuple can only store numbers',
      'namedtuple is deprecated in Python 3'
    ],
    correctAnswer: 'namedtuple provides named fields for better readability',
    explanation: 'namedtuple creates tuple subclasses with named fields, making code more readable and self-documenting.',
    category: 'Python Tuples',
    difficulty: 'Medium'
  },
  {
    id: 'python-838',
    question: 'What is the purpose of the @dataclass(order=True) decorator?',
    options: [
      'To automatically generate comparison methods for data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically generate comparison methods for data classes',
    explanation: '@dataclass(order=True) automatically generates comparison methods (__lt__, __le__, __gt__, __ge__) for data classes.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-839',
    question: 'What is the difference between a regular function and a coroutine?',
    options: [
      'Coroutines can be paused and resumed, functions run to completion',
      'Coroutines are faster than regular functions',
      'Regular functions can only be called once',
      'Coroutines cannot return values'
    ],
    correctAnswer: 'Coroutines can be paused and resumed, functions run to completion',
    explanation: 'Coroutines can be paused and resumed using await, allowing for cooperative multitasking, while functions run to completion.',
    category: 'Python Coroutines',
    difficulty: 'Medium'
  },
  {
    id: 'python-840',
    question: 'What is the purpose of the @functools.total_ordering decorator?',
    options: [
      'To automatically generate comparison methods from a subset',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To automatically generate comparison methods from a subset',
    explanation: '@functools.total_ordering automatically generates missing comparison methods from __eq__ and one other method.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-841',
    question: 'What is the difference between a regular list and a deque?',
    options: [
      'deque provides O(1) operations for both ends, list is O(n) for beginning operations',
      'deque is faster than list for all operations',
      'Regular list can only store numbers',
      'deque is deprecated in modern Python'
    ],
    correctAnswer: 'deque provides O(1) operations for both ends, list is O(n) for beginning operations',
    explanation: 'deque provides O(1) operations for both ends, while list operations at the beginning are O(n) due to shifting elements.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-842',
    question: 'What is the purpose of the @dataclass(repr=True) decorator?',
    options: [
      'To automatically generate __repr__ method for data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically generate __repr__ method for data classes',
    explanation: '@dataclass(repr=True) automatically generates a __repr__ method that provides a string representation of the data class.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-843',
    question: 'What is the difference between a regular dictionary and a ChainMap?',
    options: [
      'ChainMap provides a view over multiple dictionaries',
      'ChainMap is faster than regular dict',
      'Regular dict can only store strings as keys',
      'ChainMap is deprecated in Python 3'
    ],
    correctAnswer: 'ChainMap provides a view over multiple dictionaries',
    explanation: 'ChainMap provides a view over multiple dictionaries, allowing you to search through multiple mappings as if they were a single mapping.',
    category: 'Python Dictionaries',
    difficulty: 'Hard'
  },
  {
    id: 'python-844',
    question: 'What is the purpose of the @dataclass(eq=True) decorator?',
    options: [
      'To automatically generate __eq__ method for data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically generate __eq__ method for data classes',
    explanation: '@dataclass(eq=True) automatically generates an __eq__ method that compares data class instances for equality.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-845',
    question: 'What is the difference between a regular set and a Counter?',
    options: [
      'Counter counts occurrences of elements, set only stores unique elements',
      'Counter is faster than regular set',
      'Regular set can only store numbers',
      'Counter is deprecated in Python 3'
    ],
    correctAnswer: 'Counter counts occurrences of elements, set only stores unique elements',
    explanation: 'Counter is a dict subclass for counting hashable objects, while set only stores unique elements without counting.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-846',
    question: 'What is the purpose of the @dataclass(init=True) decorator?',
    options: [
      'To automatically generate __init__ method for data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically generate __init__ method for data classes',
    explanation: '@dataclass(init=True) automatically generates an __init__ method that initializes data class instances with the specified fields.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-847',
    question: 'What is the difference between a regular list and a numpy array?',
    options: [
      'numpy arrays are optimized for numerical operations and have fixed types',
      'numpy arrays are always faster than regular lists',
      'Regular lists can only store numbers',
      'numpy arrays are deprecated in modern Python'
    ],
    correctAnswer: 'numpy arrays are optimized for numerical operations and have fixed types',
    explanation: 'numpy arrays are optimized for numerical operations, have fixed data types, and provide vectorized operations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-848',
    question: 'What is the purpose of the @dataclass(hash=True) decorator?',
    options: [
      'To automatically generate __hash__ method for data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically generate __hash__ method for data classes',
    explanation: '@dataclass(hash=True) automatically generates a __hash__ method, making data class instances hashable and usable as dictionary keys.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-849',
    question: 'What is the difference between a regular function and a method?',
    options: [
      'Methods are bound to objects and receive self as first parameter',
      'Methods are faster than functions',
      'Functions can only be called from within a class',
      'Methods cannot return values'
    ],
    correctAnswer: 'Methods are bound to objects and receive self as first parameter',
    explanation: 'Methods are functions that are bound to objects and automatically receive the instance (self) as the first parameter.',
    category: 'Python Classes',
    difficulty: 'Easy'
  },
  {
    id: 'python-850',
    question: 'What is the purpose of the @dataclass(unsafe_hash=True) decorator?',
    options: [
      'To generate hash method even for mutable data classes',
      'To make data classes thread-safe',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To generate hash method even for mutable data classes',
    explanation: '@dataclass(unsafe_hash=True) generates a hash method even for mutable data classes, which can be useful but should be used carefully.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-851',
    question: 'What is the purpose of the @typing.overload decorator?',
    options: [
      'To provide type hints for function overloads',
      'To make functions thread-safe',
      'To improve function performance',
      'To create abstract functions'
    ],
    correctAnswer: 'To provide type hints for function overloads',
    explanation: '@typing.overload provides type hints for function overloads, allowing static type checkers to understand different function signatures.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-852',
    question: 'What is the difference between a regular function and a partial function?',
    options: [
      'Partial functions have some arguments pre-filled',
      'Partial functions are faster than regular functions',
      'Regular functions can only be called once',
      'Partial functions cannot return values'
    ],
    correctAnswer: 'Partial functions have some arguments pre-filled',
    explanation: 'Partial functions from functools.partial have some arguments pre-filled, creating a new function with fewer parameters.',
    category: 'Python Functions',
    difficulty: 'Medium'
  },
  {
    id: 'python-853',
    question: 'What is the purpose of the @dataclass(post_init=True) decorator?',
    options: [
      'To automatically call __post_init__ after __init__',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To automatically call __post_init__ after __init__',
    explanation: '@dataclass(post_init=True) automatically calls the __post_init__ method after __init__, allowing for additional initialization logic.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-854',
    question: 'What is the difference between a regular list and a numpy array for memory usage?',
    options: [
      'numpy arrays use less memory due to fixed data types',
      'Regular lists use less memory than numpy arrays',
      'Memory usage is the same for both',
      'numpy arrays cannot store different data types'
    ],
    correctAnswer: 'numpy arrays use less memory due to fixed data types',
    explanation: 'numpy arrays use less memory because they have fixed data types and store data in contiguous memory, while lists store references to objects.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-855',
    question: 'What is the purpose of the @typing.final decorator?',
    options: [
      'To mark classes or methods that should not be inherited or overridden',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To mark classes or methods that should not be inherited or overridden',
    explanation: '@typing.final marks classes or methods as final, indicating they should not be inherited or overridden, enforced by static type checkers.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-856',
    question: 'What is the difference between a regular dictionary and a UserDict?',
    options: [
      'UserDict is designed for inheritance and customization',
      'UserDict is faster than regular dict',
      'Regular dict can only store strings as keys',
      'UserDict is deprecated in Python 3'
    ],
    correctAnswer: 'UserDict is designed for inheritance and customization',
    explanation: 'UserDict is designed for inheritance and customization, providing a more convenient way to create dictionary-like classes.',
    category: 'Python Dictionaries',
    difficulty: 'Medium'
  },
  {
    id: 'python-857',
    question: 'What is the purpose of the @dataclass(kw_only=True) decorator?',
    options: [
      'To make all fields keyword-only parameters',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To make all fields keyword-only parameters',
    explanation: '@dataclass(kw_only=True) makes all fields keyword-only parameters, requiring explicit parameter names when creating instances.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-858',
    question: 'What is the difference between a regular function and a method descriptor?',
    options: [
      'Method descriptors are bound to objects and handle the binding mechanism',
      'Method descriptors are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Method descriptors cannot return values'
    ],
    correctAnswer: 'Method descriptors are bound to objects and handle the binding mechanism',
    explanation: 'Method descriptors are special objects that handle the binding mechanism when methods are accessed on instances.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-859',
    question: 'What is the purpose of the @typing.Protocol decorator?',
    options: [
      'To define structural subtyping interfaces',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To define structural subtyping interfaces',
    explanation: '@typing.Protocol defines structural subtyping interfaces, allowing classes to be compatible based on their structure rather than inheritance.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-860',
    question: 'What is the difference between a regular list and a numpy array for iteration performance?',
    options: [
      'numpy arrays are optimized for vectorized operations',
      'Regular lists are faster for iteration',
      'Iteration performance is the same for both',
      'numpy arrays cannot be iterated'
    ],
    correctAnswer: 'numpy arrays are optimized for vectorized operations',
    explanation: 'numpy arrays are optimized for vectorized operations and can be much faster for numerical computations, while lists are better for general iteration.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-861',
    question: 'What is the purpose of the @dataclass(match_args=True) decorator?',
    options: [
      'To generate __match_args__ for pattern matching',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To generate __match_args__ for pattern matching',
    explanation: '@dataclass(match_args=True) generates __match_args__ attribute for pattern matching in Python 3.10+ match statements.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-862',
    question: 'What is the difference between a regular function and a bound method?',
    options: [
      'Bound methods are functions bound to specific instances',
      'Bound methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Bound methods cannot return values'
    ],
    correctAnswer: 'Bound methods are functions bound to specific instances',
    explanation: 'Bound methods are functions that are bound to specific instances, automatically providing the instance as the first argument.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-863',
    question: 'What is the purpose of the @typing.runtime_checkable decorator?',
    options: [
      'To enable runtime checking of Protocol compatibility',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To enable runtime checking of Protocol compatibility',
    explanation: '@typing.runtime_checkable enables runtime checking of Protocol compatibility using isinstance() and issubclass().',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-864',
    question: 'What is the difference between a regular set and a numpy array for set operations?',
    options: [
      'Sets are optimized for set operations, numpy arrays for numerical operations',
      'numpy arrays are faster for all operations',
      'Set operations are the same for both',
      'numpy arrays cannot perform set operations'
    ],
    correctAnswer: 'Sets are optimized for set operations, numpy arrays for numerical operations',
    explanation: 'Sets are optimized for set operations (union, intersection, etc.), while numpy arrays are optimized for numerical operations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-865',
    question: 'What is the purpose of the @dataclass(slots=True) decorator?',
    options: [
      'To use __slots__ for memory optimization',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To use __slots__ for memory optimization',
    explanation: '@dataclass(slots=True) uses __slots__ for memory optimization, storing attributes in a fixed-size array instead of a dictionary.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-866',
    question: 'What is the difference between a regular function and a unbound method?',
    options: [
      'Unbound methods are not bound to any instance',
      'Unbound methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Unbound methods cannot return values'
    ],
    correctAnswer: 'Unbound methods are not bound to any instance',
    explanation: 'Unbound methods are methods that are not bound to any instance and require an instance to be passed explicitly.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-867',
    question: 'What is the purpose of the @typing.NewType decorator?',
    options: [
      'To create distinct types that are type-checked separately',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To create distinct types that are type-checked separately',
    explanation: '@typing.NewType creates distinct types that are type-checked separately but have the same runtime behavior as their base type.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-868',
    question: 'What is the difference between a regular list and a numpy array for memory layout?',
    options: [
      'numpy arrays use contiguous memory layout',
      'Regular lists use contiguous memory layout',
      'Memory layout is the same for both',
      'numpy arrays cannot be stored in memory'
    ],
    correctAnswer: 'numpy arrays use contiguous memory layout',
    explanation: 'numpy arrays use contiguous memory layout for better cache performance, while lists store references to objects scattered in memory.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-869',
    question: 'What is the purpose of the @dataclass(weakref_slot=True) decorator?',
    options: [
      'To add weak reference support to data classes',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To add weak reference support to data classes',
    explanation: '@dataclass(weakref_slot=True) adds weak reference support to data classes, allowing them to be used with weakref module.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-870',
    question: 'What is the difference between a regular function and a static method?',
    options: [
      'Static methods don\'t receive any special first parameter',
      'Static methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Static methods cannot return values'
    ],
    correctAnswer: 'Static methods don\'t receive any special first parameter',
    explanation: 'Static methods don\'t receive any special first parameter (neither self nor cls), making them similar to regular functions.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-871',
    question: 'What is the purpose of the @typing.Literal decorator?',
    options: [
      'To specify exact literal values for type checking',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify exact literal values for type checking',
    explanation: '@typing.Literal specifies exact literal values for type checking, allowing precise type annotations for specific values.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-872',
    question: 'What is the difference between a regular dictionary and a numpy array for key-value storage?',
    options: [
      'Dictionaries are optimized for key-value lookups, numpy arrays for numerical operations',
      'numpy arrays are faster for all operations',
      'Key-value storage is the same for both',
      'numpy arrays cannot store key-value pairs'
    ],
    correctAnswer: 'Dictionaries are optimized for key-value lookups, numpy arrays for numerical operations',
    explanation: 'Dictionaries are optimized for key-value lookups with O(1) average time complexity, while numpy arrays are optimized for numerical operations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-873',
    question: 'What is the purpose of the @dataclass(repr_ns=None) decorator?',
    options: [
      'To customize the namespace used in __repr__',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To customize the namespace used in __repr__',
    explanation: '@dataclass(repr_ns=None) customizes the namespace used in the __repr__ method, allowing for custom string representations.',
    category: 'Python Classes',
    difficulty: 'Hard'
  },
  {
    id: 'python-874',
    question: 'What is the difference between a regular function and a class method?',
    options: [
      'Class methods receive the class as the first parameter',
      'Class methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Class methods cannot return values'
    ],
    correctAnswer: 'Class methods receive the class as the first parameter',
    explanation: 'Class methods receive the class (cls) as the first parameter, allowing them to work with the class itself rather than instances.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-875',
    question: 'What is the purpose of the @typing.Annotated decorator?',
    options: [
      'To add metadata to type annotations',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To add metadata to type annotations',
    explanation: '@typing.Annotated adds metadata to type annotations, allowing additional information to be attached to types.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-876',
    question: 'What is the difference between a regular list and a numpy array for broadcasting?',
    options: [
      'numpy arrays support broadcasting for element-wise operations',
      'Regular lists support broadcasting',
      'Broadcasting is the same for both',
      'numpy arrays cannot perform broadcasting'
    ],
    correctAnswer: 'numpy arrays support broadcasting for element-wise operations',
    explanation: 'numpy arrays support broadcasting, allowing element-wise operations between arrays of different shapes, while lists do not.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-877',
    question: 'What is the purpose of the @dataclass(init=True, repr=True, eq=True) decorator?',
    options: [
      'To explicitly enable all default dataclass features',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To explicitly enable all default dataclass features',
    explanation: '@dataclass(init=True, repr=True, eq=True) explicitly enables all default dataclass features, making the configuration clear.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-878',
    question: 'What is the difference between a regular function and a method?',
    options: [
      'Methods are bound to objects and receive self as first parameter',
      'Methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Methods cannot return values'
    ],
    correctAnswer: 'Methods are bound to objects and receive self as first parameter',
    explanation: 'Methods are functions that are bound to objects and automatically receive the instance (self) as the first parameter.',
    category: 'Python Classes',
    difficulty: 'Easy'
  },
  {
    id: 'python-879',
    question: 'What is the purpose of the @typing.TypeVar decorator?',
    options: [
      'To create generic type variables',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To create generic type variables',
    explanation: '@typing.TypeVar creates generic type variables, allowing for type-safe generic programming and function overloading.',
    category: 'Python Type Hints',
    difficulty: 'Hard'
  },
  {
    id: 'python-880',
    question: 'What is the difference between a regular set and a numpy array for unique element storage?',
    options: [
      'Sets are optimized for unique element storage and membership testing',
      'numpy arrays are faster for all operations',
      'Unique element storage is the same for both',
      'numpy arrays cannot store unique elements'
    ],
    correctAnswer: 'Sets are optimized for unique element storage and membership testing',
    explanation: 'Sets are optimized for unique element storage and membership testing with O(1) average time complexity.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-881',
    question: 'What is the purpose of the @dataclass(frozen=True, eq=True) decorator?',
    options: [
      'To create immutable data classes with equality comparison',
      'To make data classes thread-safe',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To create immutable data classes with equality comparison',
    explanation: '@dataclass(frozen=True, eq=True) creates immutable data classes with automatic equality comparison.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-882',
    question: 'What is the difference between a regular function and a lambda function?',
    options: [
      'Lambda functions are limited to a single expression',
      'Lambda functions are faster than regular functions',
      'Regular functions can only be used once',
      'Lambda functions cannot return values'
    ],
    correctAnswer: 'Lambda functions are limited to a single expression',
    explanation: 'Lambda functions are limited to a single expression and are typically used for simple operations.',
    category: 'Python Functions',
    difficulty: 'Easy'
  },
  {
    id: 'python-883',
    question: 'What is the purpose of the @typing.Union decorator?',
    options: [
      'To specify that a value can be one of several types',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify that a value can be one of several types',
    explanation: '@typing.Union specifies that a value can be one of several types, allowing for flexible type annotations.',
    category: 'Python Type Hints',
    difficulty: 'Medium'
  },
  {
    id: 'python-884',
    question: 'What is the difference between a regular tuple and a numpy array for immutable sequences?',
    options: [
      'Tuples are immutable sequences, numpy arrays can be mutable or immutable',
      'numpy arrays are always immutable',
      'Both are always immutable',
      'Tuples can be mutable'
    ],
    correctAnswer: 'Tuples are immutable sequences, numpy arrays can be mutable or immutable',
    explanation: 'Tuples are always immutable sequences, while numpy arrays can be mutable or immutable depending on how they are created.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-885',
    question: 'What is the purpose of the @dataclass(order=True, frozen=True) decorator?',
    options: [
      'To create immutable data classes with ordering support',
      'To make data classes thread-safe',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To create immutable data classes with ordering support',
    explanation: '@dataclass(order=True, frozen=True) creates immutable data classes with automatic ordering support.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-886',
    question: 'What is the difference between a regular function and a generator function?',
    options: [
      'Generator functions use yield to return values one at a time',
      'Generator functions are faster than regular functions',
      'Regular functions can only be called once',
      'Generator functions cannot return values'
    ],
    correctAnswer: 'Generator functions use yield to return values one at a time',
    explanation: 'Generator functions use the yield keyword to return values one at a time, creating an iterator.',
    category: 'Python Generators',
    difficulty: 'Medium'
  },
  {
    id: 'python-887',
    question: 'What is the purpose of the @typing.Optional decorator?',
    options: [
      'To specify that a value can be None or a specific type',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify that a value can be None or a specific type',
    explanation: '@typing.Optional specifies that a value can be None or a specific type, equivalent to Union[T, None].',
    category: 'Python Type Hints',
    difficulty: 'Medium'
  },
  {
    id: 'python-888',
    question: 'What is the difference between a regular list and a numpy array for slicing operations?',
    options: [
      'Both support slicing, but numpy arrays can have multiple dimensions',
      'Only lists support slicing',
      'Only numpy arrays support slicing',
      'Neither supports slicing'
    ],
    correctAnswer: 'Both support slicing, but numpy arrays can have multiple dimensions',
    explanation: 'Both support slicing, but numpy arrays can have multiple dimensions and support advanced indexing.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-889',
    question: 'What is the purpose of the @dataclass(repr=True, eq=True, order=True) decorator?',
    options: [
      'To create data classes with all comparison methods',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To create data classes with all comparison methods',
    explanation: '@dataclass(repr=True, eq=True, order=True) creates data classes with __repr__, __eq__, and ordering methods.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-890',
    question: 'What is the difference between a regular function and a coroutine?',
    options: [
      'Coroutines can be paused and resumed using await',
      'Coroutines are faster than regular functions',
      'Regular functions can only be called once',
      'Coroutines cannot return values'
    ],
    correctAnswer: 'Coroutines can be paused and resumed using await',
    explanation: 'Coroutines can be paused and resumed using await, allowing for cooperative multitasking.',
    category: 'Python Coroutines',
    difficulty: 'Medium'
  },
  {
    id: 'python-891',
    question: 'What is the purpose of the @typing.Callable decorator?',
    options: [
      'To specify that a value is a callable function',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify that a value is a callable function',
    explanation: '@typing.Callable specifies that a value is a callable function, allowing for function type annotations.',
    category: 'Python Type Hints',
    difficulty: 'Medium'
  },
  {
    id: 'python-892',
    question: 'What is the difference between a regular dictionary and a numpy array for structured data?',
    options: [
      'Dictionaries are better for heterogeneous data, numpy arrays for homogeneous data',
      'numpy arrays are better for all data types',
      'Both are equally good for all data types',
      'Dictionaries cannot store structured data'
    ],
    correctAnswer: 'Dictionaries are better for heterogeneous data, numpy arrays for homogeneous data',
    explanation: 'Dictionaries are better for heterogeneous data with different types, while numpy arrays are optimized for homogeneous data.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-893',
    question: 'What is the purpose of the @dataclass(frozen=True, eq=True, order=True) decorator?',
    options: [
      'To create immutable data classes with full comparison support',
      'To make data classes thread-safe',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To create immutable data classes with full comparison support',
    explanation: '@dataclass(frozen=True, eq=True, order=True) creates immutable data classes with equality and ordering support.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-894',
    question: 'What is the difference between a regular function and a method?',
    options: [
      'Methods are bound to objects and receive self as first parameter',
      'Methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Methods cannot return values'
    ],
    correctAnswer: 'Methods are bound to objects and receive self as first parameter',
    explanation: 'Methods are functions that are bound to objects and automatically receive the instance (self) as the first parameter.',
    category: 'Python Classes',
    difficulty: 'Easy'
  },
  {
    id: 'python-895',
    question: 'What is the purpose of the @typing.Iterable decorator?',
    options: [
      'To specify that a value is an iterable object',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify that a value is an iterable object',
    explanation: '@typing.Iterable specifies that a value is an iterable object, allowing for iteration type annotations.',
    category: 'Python Type Hints',
    difficulty: 'Medium'
  },
  {
    id: 'python-896',
    question: 'What is the difference between a regular list and a numpy array for mathematical operations?',
    options: [
      'numpy arrays are optimized for mathematical operations',
      'Regular lists are faster for mathematical operations',
      'Mathematical operations are the same for both',
      'Regular lists cannot perform mathematical operations'
    ],
    correctAnswer: 'numpy arrays are optimized for mathematical operations',
    explanation: 'numpy arrays are optimized for mathematical operations with vectorized operations and optimized C implementations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  },
  {
    id: 'python-897',
    question: 'What is the purpose of the @dataclass(init=True, repr=True, eq=True, order=True) decorator?',
    options: [
      'To create data classes with all standard methods',
      'To make data classes immutable',
      'To improve data class performance',
      'To create abstract data classes'
    ],
    correctAnswer: 'To create data classes with all standard methods',
    explanation: '@dataclass(init=True, repr=True, eq=True, order=True) creates data classes with all standard methods explicitly enabled.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-898',
    question: 'What is the difference between a regular function and a static method?',
    options: [
      'Static methods don\'t receive any special first parameter',
      'Static methods are faster than regular functions',
      'Regular functions can only be called from within a class',
      'Static methods cannot return values'
    ],
    correctAnswer: 'Static methods don\'t receive any special first parameter',
    explanation: 'Static methods don\'t receive any special first parameter (neither self nor cls), making them similar to regular functions.',
    category: 'Python Classes',
    difficulty: 'Medium'
  },
  {
    id: 'python-899',
    question: 'What is the purpose of the @typing.Dict decorator?',
    options: [
      'To specify that a value is a dictionary with specific key and value types',
      'To make classes immutable',
      'To improve class performance',
      'To create abstract base classes'
    ],
    correctAnswer: 'To specify that a value is a dictionary with specific key and value types',
    explanation: '@typing.Dict specifies that a value is a dictionary with specific key and value types for type checking.',
    category: 'Python Type Hints',
    difficulty: 'Medium'
  },
  {
    id: 'python-900',
    question: 'What is the difference between a regular set and a numpy array for mathematical set operations?',
    options: [
      'Sets are optimized for mathematical set operations',
      'numpy arrays are faster for all operations',
      'Mathematical set operations are the same for both',
      'numpy arrays cannot perform set operations'
    ],
    correctAnswer: 'Sets are optimized for mathematical set operations',
    explanation: 'Sets are optimized for mathematical set operations (union, intersection, difference, etc.) with efficient implementations.',
    category: 'Python Data Structures',
    difficulty: 'Medium'
  }

]; 