import { Topic } from '../../types';

export const pythonModule6Topics: Topic[] = [
  {
    id: 'classes-objects',
    title: 'Classes & Objects (Basics)',
    description: 'Learn the basics of classes and objects in Python.',
    difficulty: 'Beginner',
    estimatedTime: '10 minutes',
    content: `
# Classes & Objects

Classes are blueprints for objects. Objects are instances of classes.

~~~python
class Dog:
    pass

my_dog = Dog()
~~~
    `,
    subtopics: [
      {
        id: 'class-object-basics',
        title: 'Class & Object Basics',
        content: `
Define a class with 'class', create objects by calling the class.
        `,
        keyPoints: [
          "Use 'class' to define a class",
          'Objects are created by calling the class',
          'Each object is an instance of the class'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'attributes-methods',
    title: 'Attributes & Methods (Instance vs Class vs Static)',
    description: 'Understand the difference between instance, class, and static attributes and methods.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Attributes & Methods

Instance attributes belong to objects, class attributes to the class. Methods can be instance, class, or static.

~~~python
class Dog:
    species = 'Canine'  # class attribute
    def __init__(self, name):
        self.name = name  # instance attribute
    def bark(self):
        print(f"{self.name} barks!")
    @classmethod
    def info(cls):
        print(cls.species)
    @staticmethod
    def greet():
        print("Hello!")
~~~
    `,
    subtopics: [
      {
        id: 'instance-class-static',
        title: 'Instance, Class, and Static Methods',
        content: `
Learn the difference between instance, class, and static methods.
        `,
        keyPoints: [
          'Instance: self, operates on object',
          'Class: cls, operates on class',
          'Static: no self/cls, utility method'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'special-methods',
    title: '__init__, __str__, and Special Methods',
    description: 'Use special methods to customize class behavior.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# __init__, __str__, and Special Methods

Special methods start and end with double underscores.

~~~python
class Dog:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"Dog: {self.name}"

my_dog = Dog('Fido')
print(my_dog)
~~~
    `,
    subtopics: [
      {
        id: 'init-str',
        title: '__init__ and __str__',
        content: `
__init__ initializes objects, __str__ defines string representation.
        `,
        keyPoints: [
          '__init__ for initialization',
          '__str__ for print()',
          'Other dunder methods: __repr__, __len__, etc.'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'oop-principles',
    title: 'Encapsulation, Abstraction, Inheritance, and Polymorphism',
    description: 'Master the four pillars of OOP in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# OOP Principles

Encapsulation, abstraction, inheritance, and polymorphism are core OOP concepts.

~~~python
class Animal:
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        print('Woof!')
~~~
    `,
    subtopics: [
      {
        id: 'encapsulation',
        title: 'Encapsulation',
        content: `
Hide internal state and require all interaction through methods.
        `,
        keyPoints: [
          'Use _ or __ for private attributes',
          'Protects data integrity'
        ],
        estimatedTime: '3 minutes'
      },
      {
        id: 'abstraction',
        title: 'Abstraction',
        content: `
Expose only essential features, hide details.
        `,
        keyPoints: [
          'Abstract base classes',
          'Define interface, hide implementation'
        ],
        estimatedTime: '3 minutes'
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        content: `
Derive new classes from existing ones.
        `,
        keyPoints: [
          'Child inherits from parent',
          'Reuse and extend functionality'
        ],
        estimatedTime: '3 minutes'
      },
      {
        id: 'polymorphism',
        title: 'Polymorphism',
        content: `
Use the same interface for different types.
        `,
        keyPoints: [
          'Method overriding',
          'Duck typing in Python'
        ],
        estimatedTime: '3 minutes'
      }
    ]
  },
  {
    id: 'mro-multiple-inheritance',
    title: 'Method Resolution Order (MRO) & Multiple Inheritance',
    description: 'Understand how Python resolves methods in multiple inheritance scenarios.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# MRO & Multiple Inheritance

Python uses MRO to determine which method to call in multiple inheritance.

~~~python
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
print(D.mro())
~~~
    `,
    subtopics: [
      {
        id: 'mro-basics',
        title: 'MRO Basics',
        content: `
MRO determines the order in which base classes are searched.
        `,
        keyPoints: [
          'D.mro() shows the order',
          'C3 linearization',
          'Important for diamond inheritance'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'property-decorators',
    title: 'Property Decorators (@property, Setters, Getters)',
    description: 'Use @property to create managed attributes with getters and setters.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Property Decorators

@property lets you define getters, setters, and deleters for attributes.

~~~python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    @property
    def radius(self):
        return self._radius
    @radius.setter
    def radius(self, value):
        self._radius = value
~~~
    `,
    subtopics: [
      {
        id: 'property-basics',
        title: '@property, Setters, Getters',
        content: `
Use @property for controlled attribute access.
        `,
        keyPoints: [
          '@property for getter',
          '@x.setter for setter',
          'Encapsulate attribute logic'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'class-static-methods',
    title: 'Class Methods vs Static Methods',
    description: 'Compare class methods and static methods in Python.',
    difficulty: 'Advanced',
    estimatedTime: '8 minutes',
    content: `
# Class Methods vs Static Methods

Class methods use @classmethod, static methods use @staticmethod.

~~~python
class MyClass:
    @classmethod
    def from_string(cls, s):
        return cls(s)
    @staticmethod
    def add(x, y):
        return x + y
~~~
    `,
    subtopics: [
      {
        id: 'class-vs-static',
        title: 'Class vs Static Methods',
        content: `
Class methods receive the class, static methods receive nothing.
        `,
        keyPoints: [
          '@classmethod: first arg is cls',
          '@staticmethod: no special first arg',
          'Use for alternative constructors, utilities'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  },
  {
    id: 'abstract-base-classes',
    title: 'Abstract Base Classes (abc module)',
    description: 'Use the abc module to define abstract base classes.',
    difficulty: 'Advanced',
    estimatedTime: '10 minutes',
    content: `
# Abstract Base Classes

abc lets you define abstract classes and methods.

~~~python
from abc import ABC, abstractmethod
class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass
~~~
    `,
    subtopics: [
      {
        id: 'abc-basics',
        title: 'abc Module',
        content: `
Use ABC and @abstractmethod to define abstract base classes.
        `,
        keyPoints: [
          'from abc import ABC, abstractmethod',
          'Cannot instantiate abstract classes',
          'Enforces method implementation'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'dataclasses',
    title: 'Dataclasses (@dataclass)',
    description: 'Use @dataclass to reduce boilerplate in classes.',
    difficulty: 'Advanced',
    estimatedTime: '8 minutes',
    content: `
# Dataclasses

@dataclass automatically adds special methods to classes.

~~~python
from dataclasses import dataclass
@dataclass
class Point:
    x: int
    y: int
p = Point(1, 2)
print(p)
~~~
    `,
    subtopics: [
      {
        id: 'dataclass-basics',
        title: '@dataclass',
        content: `
Use @dataclass to create classes with less code.
        `,
        keyPoints: [
          'from dataclasses import dataclass',
          'Auto-generates __init__, __repr__, etc.',
          'Great for data containers'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  }
]; 