import { Topic } from '../../types';

export const pythonModule4Topics: Topic[] = [
  {
    id: 'string-basics',
    title: 'String Basics (Indexing, Slicing, Methods)',
    description: 'Learn how to work with strings in Python: indexing, slicing, and common string methods.',
    difficulty: 'Beginner',
    estimatedTime: '12 minutes',
    content: `
# String Basics

Strings are sequences of characters. You can index, slice, and use many built-in methods.

~~~python
s = "hello world"
print(s[0])      # 'h'
print(s[1:5])    # 'ello'
print(s.upper()) # 'HELLO WORLD'
~~~
    `,
    subtopics: [
      {
        id: 'indexing-slicing',
        title: 'Indexing & Slicing',
        content: `
Access individual characters and substrings using indexing and slicing.
        `,
        keyPoints: [
          'Indexing starts at 0',
          'Negative indices count from end',
          'Slicing: s[start:end]'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'string-methods',
        title: 'String Methods',
        content: `
Use methods like upper(), lower(), strip(), split(), join(), replace().
        `,
        keyPoints: [
          'upper(), lower() for case',
          'strip() removes whitespace',
          'split() and join() for lists',
          'replace() for substitution'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'string-formatting',
    title: 'String Formatting (f-strings, .format, %)',
    description: 'Format strings using f-strings, .format(), and % formatting.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# String Formatting

Python supports several ways to format strings.

~~~python
name = "Alice"
age = 30
print(f"{name} is {age} years old")
print("{} is {} years old".format(name, age))
print("%s is %d years old" % (name, age))
~~~
    `,
    subtopics: [
      {
        id: 'f-strings',
        title: 'f-strings',
        content: `
Use f-strings for readable, modern string formatting.
        `,
        keyPoints: [
          'Prefix string with f',
          'Embed variables in {}',
          'Supports expressions'
        ],
        estimatedTime: '3 minutes'
      },
      {
        id: 'format-method',
        title: '.format() Method',
        content: `
Use .format() for flexible string formatting.
        `,
        keyPoints: [
          'Insert values with {}',
          'Supports positional and keyword arguments',
          'Works in Python 2 and 3'
        ],
        estimatedTime: '3 minutes'
      },
      {
        id: 'percent-formatting',
        title: '% Formatting',
        content: `
Use % for old-style string formatting.
        `,
        keyPoints: [
          '%s for string, %d for int',
          'Tuple for multiple values',
          'Less preferred in modern code'
        ],
        estimatedTime: '3 minutes'
      }
    ]
  },
  {
    id: 'unicode-encoding',
    title: 'Unicode & Encoding (encode, decode)',
    description: 'Understand Unicode, encoding, and decoding in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Unicode & Encoding

Python 3 strings are Unicode. Use encode() and decode() for bytes conversion.

~~~python
s = "café"
b = s.encode('utf-8')
print(b)           # b'caf\xc3\xa9'
print(b.decode('utf-8')) # 'café'
~~~
    `,
    subtopics: [
      {
        id: 'unicode-basics',
        title: 'Unicode Basics',
        content: `
Unicode supports characters from all languages.
        `,
        keyPoints: [
          'Python 3 strings are Unicode',
          'Bytes are for binary data',
          'Encode to bytes, decode to string'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'regex-basics',
    title: 'Regex Basics (re module)',
    description: 'Learn the basics of regular expressions using the re module.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Regex Basics

The re module provides regular expression support.

~~~python
import re
pattern = r"cat"
text = "The cat sat on the mat."
match = re.search(pattern, text)
if match:
    print("Found!", match.group())
~~~
    `,
    subtopics: [
      {
        id: 're-module',
        title: 're Module',
        content: `
Use the re module for regex operations.
        `,
        keyPoints: [
          'import re',
          're.search(), re.match(), re.findall()',
          'Patterns are raw strings (r"...")'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'regex-patterns',
    title: 'Regex Patterns (Matching, Searching, Groups, Substitution)',
    description: 'Master regex patterns for matching, searching, grouping, and substitution.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Regex Patterns

Use regex for advanced text processing: matching, searching, groups, and substitution.

~~~python
import re
pattern = r"(\d{3})-(\d{3})-(\d{4})"
text = "Call 123-456-7890 now!"
match = re.search(pattern, text)
if match:
    print(match.group(0))  # Full match
    print(match.group(1))  # First group

new_text = re.sub(r"cat", "dog", "The cat sat.")
print(new_text)
~~~
    `,
    subtopics: [
      {
        id: 'matching-groups',
        title: 'Matching & Groups',
        content: `
Use groups to extract parts of a match.
        `,
        keyPoints: [
          'Parentheses create groups',
          'group(0) is the full match',
          'group(1), group(2), ... for subgroups'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'substitution',
        title: 'Substitution',
        content: `
Use re.sub() to replace text using regex.
        `,
        keyPoints: [
          're.sub(pattern, repl, string)',
          'Can use groups in replacement',
          'Useful for cleaning text'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'parsing-cleaning-text',
    title: 'Parsing and Cleaning Text',
    description: 'Learn techniques for parsing and cleaning text data in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Parsing and Cleaning Text

Combine string and regex methods to clean and parse text.

~~~python
import re
text = "  Hello, 123!  "
clean = text.strip().lower()
numbers = re.findall(r"\d+", text)
print(clean)    # 'hello, 123!'
print(numbers)  # ['123']
~~~
    `,
    subtopics: [
      {
        id: 'cleaning-techniques',
        title: 'Cleaning Techniques',
        content: `
Use strip(), lower(), replace(), and regex for cleaning text.
        `,
        keyPoints: [
          'strip() removes whitespace',
          'lower() for case normalization',
          're.sub() for advanced cleaning'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 