import { Topic } from '../../types';

export const pythonModule10Topics: Topic[] = [
  {
    id: 'sqlite-sqlite3',
    title: 'SQLite with sqlite3',
    description: 'Use the built-in sqlite3 module to work with SQLite databases in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# SQLite with sqlite3

sqlite3 is a built-in module for working with SQLite databases.

~~~python
import sqlite3
conn = sqlite3.connect('example.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)')
conn.commit()
conn.close()
~~~
    `,
    subtopics: [
      {
        id: 'sqlite3-basics',
        title: 'sqlite3 Basics',
        content: `
Connect, create tables, and execute SQL with sqlite3.
        `,
        keyPoints: [
          'sqlite3.connect()',
          'cursor(), execute(), commit(), close()',
          'Lightweight, file-based DB'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'basic-sql',
    title: 'Basic SQL (SELECT, INSERT, UPDATE, DELETE)',
    description: 'Learn basic SQL commands for interacting with databases.',
    difficulty: 'Intermediate',
    estimatedTime: '12 minutes',
    content: `
# Basic SQL

Use SQL to query and modify data.

~~~sql
SELECT * FROM users;
INSERT INTO users (id, name) VALUES (1, 'Alice');
UPDATE users SET name = 'Bob' WHERE id = 1;
DELETE FROM users WHERE id = 1;
~~~
    `,
    subtopics: [
      {
        id: 'sql-commands',
        title: 'SQL Commands',
        content: `
SELECT, INSERT, UPDATE, DELETE are the core SQL commands.
        `,
        keyPoints: [
          'SELECT: retrieve data',
          'INSERT: add data',
          'UPDATE: modify data',
          'DELETE: remove data'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'sqlalchemy-orm',
    title: 'SQLAlchemy ORM Basics',
    description: 'Use SQLAlchemy for object-relational mapping (ORM) in Python.',
    difficulty: 'Intermediate',
    estimatedTime: '14 minutes',
    content: `
# SQLAlchemy ORM Basics

SQLAlchemy lets you map Python classes to database tables.

~~~python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)
engine = create_engine('sqlite:///example.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
~~~
    `,
    subtopics: [
      {
        id: 'orm-basics',
        title: 'ORM Basics',
        content: `
Map classes to tables, use sessions to interact with the DB.
        `,
        keyPoints: [
          'declarative_base()',
          'Column, Integer, String',
          'sessionmaker, add, commit, query'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'transactions-migrations',
    title: 'Transactions & Migrations',
    description: 'Manage database transactions and schema migrations.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Transactions & Migrations

Transactions ensure data integrity. Migrations update DB schema.

- Use conn.commit() or session.commit() to save changes
- Use tools like Alembic for migrations
    `,
    subtopics: [
      {
        id: 'transactions',
        title: 'Transactions',
        content: `
Use transactions to group DB operations atomically.
        `,
        keyPoints: [
          'commit() to save',
          'rollback() to undo',
          'Ensures consistency'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'migrations',
        title: 'Migrations',
        content: `
Use Alembic or similar tools to manage schema changes.
        `,
        keyPoints: [
          'Migrations update schema',
          'Version control for DB',
          'Automate with Alembic'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'postgres-mysql',
    title: 'Connecting to PostgreSQL/MySQL',
    description: 'Connect to PostgreSQL and MySQL databases from Python.',
    difficulty: 'Intermediate',
    estimatedTime: '10 minutes',
    content: `
# Connecting to PostgreSQL/MySQL

Use psycopg2 for PostgreSQL, mysql-connector-python for MySQL.

~~~python
# PostgreSQL
import psycopg2
conn = psycopg2.connect(dbname='test', user='user', password='pass')
# MySQL
import mysql.connector
conn = mysql.connector.connect(user='user', password='pass', database='test')
~~~
    `,
    subtopics: [
      {
        id: 'postgres-mysql-basics',
        title: 'PostgreSQL & MySQL Basics',
        content: `
Use psycopg2 for PostgreSQL, mysql-connector-python for MySQL.
        `,
        keyPoints: [
          'psycopg2.connect()',
          'mysql.connector.connect()',
          'Use cursors to execute SQL'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  }
]; 