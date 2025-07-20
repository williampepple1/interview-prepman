import { AssessmentQuestion } from '../../types';

export const databaseAssessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'database-1',
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Language',
      'Standard Query Language',
      'System Query Language'
    ],
    correctAnswer: 'Structured Query Language',
    explanation: 'SQL (Structured Query Language) is a standard language for storing, manipulating, and retrieving data in relational database systems.',
    category: 'SQL Basics',
    difficulty: 'Easy'
  },
  {
    id: 'database-2',
    question: 'What is the primary purpose of a database index?',
    options: [
      'To speed up data retrieval operations',
      'To reduce storage space',
      'To ensure data integrity',
      'To backup data automatically'
    ],
    correctAnswer: 'To speed up data retrieval operations',
    explanation: 'Indexes improve query performance by providing fast access to data without having to scan the entire table.',
    category: 'Database Performance',
    difficulty: 'Easy'
  },
  {
    id: 'database-3',
    question: 'What does ACID stand for in database transactions?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Accuracy, Consistency, Integrity, Durability',
      'Atomicity, Consistency, Integrity, Data',
      'Accuracy, Consistency, Isolation, Data'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    explanation: 'ACID properties ensure reliable processing of database transactions.',
    category: 'ACID Properties',
    difficulty: 'Easy'
  },
  {
    id: 'database-4',
    question: 'What is the purpose of the SELECT statement in SQL?',
    options: [
      'To retrieve data from one or more tables',
      'To insert new records into a table',
      'To update existing records in a table',
      'To delete records from a table'
    ],
    correctAnswer: 'To retrieve data from one or more tables',
    explanation: 'The SELECT statement is used to query and retrieve data from database tables.',
    category: 'SQL Queries',
    difficulty: 'Easy'
  },
  {
    id: 'database-5',
    question: 'What is normalization in database design?',
    options: [
      'A process of organizing data to reduce redundancy and improve data integrity',
      'A process of making data consistent across all tables',
      'A process of backing up database data',
      'A process of optimizing database performance'
    ],
    correctAnswer: 'A process of organizing data to reduce redundancy and improve data integrity',
    explanation: 'Normalization is a systematic approach to decomposing tables to eliminate data redundancy and undesirable characteristics.',
    category: 'Database Design',
    difficulty: 'Medium'
  },
  {
    id: 'database-6',
    question: 'What is a primary key in a database table?',
    options: [
      'A column or set of columns that uniquely identifies each row',
      'A column that contains the most important data',
      'A column that is used for sorting data',
      'A column that links to another table'
    ],
    correctAnswer: 'A column or set of columns that uniquely identifies each row',
    explanation: 'A primary key ensures that each record in a table can be uniquely identified.',
    category: 'Database Design',
    difficulty: 'Easy'
  },
  {
    id: 'database-7',
    question: 'What is the purpose of a foreign key?',
    options: [
      'To establish relationships between tables',
      'To ensure data uniqueness',
      'To improve query performance',
      'To backup related data'
    ],
    correctAnswer: 'To establish relationships between tables',
    explanation: 'A foreign key creates a link between two tables by referencing the primary key of another table.',
    category: 'Database Design',
    difficulty: 'Easy'
  },
  {
    id: 'database-8',
    question: 'What is a JOIN in SQL?',
    options: [
      'A clause used to combine rows from two or more tables based on a related column',
      'A clause used to sort data in ascending or descending order',
      'A clause used to filter data based on conditions',
      'A clause used to group data together'
    ],
    correctAnswer: 'A clause used to combine rows from two or more tables based on a related column',
    explanation: 'JOINs allow you to retrieve data from multiple tables in a single query.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-9',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    options: [
      'INNER JOIN returns only matching rows, LEFT JOIN returns all rows from left table',
      'INNER JOIN returns all rows, LEFT JOIN returns only matching rows',
      'INNER JOIN is faster than LEFT JOIN',
      'LEFT JOIN is more commonly used than INNER JOIN'
    ],
    correctAnswer: 'INNER JOIN returns only matching rows, LEFT JOIN returns all rows from left table',
    explanation: 'INNER JOIN only returns rows where there is a match in both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-10',
    question: 'What is a subquery in SQL?',
    options: [
      'A query nested inside another query',
      'A query that runs in the background',
      'A query that is stored for later use',
      'A query that is executed automatically'
    ],
    correctAnswer: 'A query nested inside another query',
    explanation: 'A subquery is a SELECT statement that is embedded within another SQL statement.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-11',
    question: 'What is the purpose of GROUP BY in SQL?',
    options: [
      'To group rows that have the same values in specified columns',
      'To sort data in ascending order',
      'To filter data based on conditions',
      'To join multiple tables together'
    ],
    correctAnswer: 'To group rows that have the same values in specified columns',
    explanation: 'GROUP BY is used with aggregate functions to group the result set by one or more columns.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-12',
    question: 'What is denormalization in database design?',
    options: [
      'The process of adding redundant data to improve read performance',
      'The process of removing all redundant data',
      'The process of splitting tables into smaller ones',
      'The process of merging all tables into one'
    ],
    correctAnswer: 'The process of adding redundant data to improve read performance',
    explanation: 'Denormalization is the process of adding redundant data to improve query performance, often at the cost of data integrity.',
    category: 'Database Design',
    difficulty: 'Medium'
  },
  {
    id: 'database-13',
    question: 'What is a composite key?',
    options: [
      'A primary key that consists of multiple columns',
      'A key that is made up of different data types',
      'A key that is shared between multiple tables',
      'A key that is automatically generated'
    ],
    correctAnswer: 'A primary key that consists of multiple columns',
    explanation: 'A composite key is a primary key that uses multiple columns to uniquely identify a row.',
    category: 'Database Design',
    difficulty: 'Medium'
  },
  {
    id: 'database-14',
    question: 'What is the purpose of the HAVING clause in SQL?',
    options: [
      'To filter groups after GROUP BY has been applied',
      'To filter rows before GROUP BY is applied',
      'To sort the final result set',
      'To join multiple tables'
    ],
    correctAnswer: 'To filter groups after GROUP BY has been applied',
    explanation: 'HAVING is used to filter groups based on aggregate function results, while WHERE filters individual rows.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-15',
    question: 'What is a database transaction?',
    options: [
      'A logical unit of work that contains one or more SQL statements',
      'A backup of the database',
      'A connection to the database',
      'A type of database index'
    ],
    correctAnswer: 'A logical unit of work that contains one or more SQL statements',
    explanation: 'A transaction is a sequence of operations that are treated as a single unit of work.',
    category: 'ACID Properties',
    difficulty: 'Easy'
  },
  {
    id: 'database-16',
    question: 'What is the Atomicity property in ACID?',
    options: [
      'All operations in a transaction must succeed or all must fail',
      'Data must be consistent before and after a transaction',
      'Transactions must be isolated from each other',
      'Completed transactions must be permanent'
    ],
    correctAnswer: 'All operations in a transaction must succeed or all must fail',
    explanation: 'Atomicity ensures that a transaction is treated as a single unit - either all operations succeed or none do.',
    category: 'ACID Properties',
    difficulty: 'Medium'
  },
  {
    id: 'database-17',
    question: 'What is a database index?',
    options: [
      'A data structure that improves the speed of data retrieval operations',
      'A backup copy of the database',
      'A list of all tables in the database',
      'A summary of database statistics'
    ],
    correctAnswer: 'A data structure that improves the speed of data retrieval operations',
    explanation: 'An index is a data structure that allows the database to find data more quickly without scanning the entire table.',
    category: 'Database Performance',
    difficulty: 'Easy'
  },
  {
    id: 'database-18',
    question: 'What is the difference between SQL and NoSQL databases?',
    options: [
      'SQL is relational and structured, NoSQL is non-relational and flexible',
      'SQL is faster than NoSQL',
      'NoSQL is more secure than SQL',
      'SQL is newer than NoSQL'
    ],
    correctAnswer: 'SQL is relational and structured, NoSQL is non-relational and flexible',
    explanation: 'SQL databases use structured query language and have predefined schemas, while NoSQL databases are more flexible and can handle unstructured data.',
    category: 'NoSQL Basics',
    difficulty: 'Easy'
  },
  {
    id: 'database-19',
    question: 'What is MongoDB?',
    options: [
      'A document-oriented NoSQL database',
      'A relational database management system',
      'A key-value store database',
      'A graph database'
    ],
    correctAnswer: 'A document-oriented NoSQL database',
    explanation: 'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents.',
    category: 'NoSQL Basics',
    difficulty: 'Easy'
  },
  {
    id: 'database-20',
    question: 'What is Redis?',
    options: [
      'An in-memory key-value store database',
      'A document-oriented database',
      'A relational database',
      'A graph database'
    ],
    correctAnswer: 'An in-memory key-value store database',
    explanation: 'Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.',
    category: 'NoSQL Basics',
    difficulty: 'Easy'
  },
  {
    id: 'database-21',
    question: 'What is the Consistency property in ACID?',
    options: [
      'Data must be in a valid state before and after a transaction',
      'All operations in a transaction must succeed or fail together',
      'Transactions must be isolated from each other',
      'Completed transactions must be permanent'
    ],
    correctAnswer: 'Data must be in a valid state before and after a transaction',
    explanation: 'Consistency ensures that a transaction can only bring the database from one valid state to another.',
    category: 'ACID Properties',
    difficulty: 'Medium'
  },
  {
    id: 'database-22',
    question: 'What is the Isolation property in ACID?',
    options: [
      'Concurrent transactions must not interfere with each other',
      'Data must be consistent before and after a transaction',
      'All operations must succeed or fail together',
      'Completed transactions must be permanent'
    ],
    correctAnswer: 'Concurrent transactions must not interfere with each other',
    explanation: 'Isolation ensures that concurrent transactions are executed as if they were running sequentially.',
    category: 'ACID Properties',
    difficulty: 'Medium'
  },
  {
    id: 'database-23',
    question: 'What is the Durability property in ACID?',
    options: [
      'Completed transactions must be permanent and survive system failures',
      'Data must be consistent before and after a transaction',
      'All operations must succeed or fail together',
      'Transactions must be isolated from each other'
    ],
    correctAnswer: 'Completed transactions must be permanent and survive system failures',
    explanation: 'Durability ensures that once a transaction has been committed, it will remain committed even in the event of a system failure.',
    category: 'ACID Properties',
    difficulty: 'Medium'
  },
  {
    id: 'database-24',
    question: 'When should you use NoSQL over SQL?',
    options: [
      'When you need flexibility in data structure and high scalability',
      'When you need complex transactions and relationships',
      'When you need strict data consistency',
      'When you need to store financial data'
    ],
    correctAnswer: 'When you need flexibility in data structure and high scalability',
    explanation: 'NoSQL is better suited for applications that need flexible schemas, high scalability, and can tolerate eventual consistency.',
    category: 'NoSQL Basics',
    difficulty: 'Medium'
  },
  {
    id: 'database-25',
    question: 'What is a database view?',
    options: [
      'A virtual table based on the result set of a SQL statement',
      'A physical copy of a table',
      'A backup of the database',
      'A type of database index'
    ],
    correctAnswer: 'A virtual table based on the result set of a SQL statement',
    explanation: 'A view is a virtual table that contains data from one or more tables and is defined by a SQL query.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-26',
    question: 'What is a stored procedure?',
    options: [
      'A prepared SQL code that you can save and reuse',
      'A type of database index',
      'A backup procedure for the database',
      'A way to connect to the database'
    ],
    correctAnswer: 'A prepared SQL code that you can save and reuse',
    explanation: 'A stored procedure is a prepared SQL code that you can save and reuse, often used for complex operations.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-27',
    question: 'What is a database trigger?',
    options: [
      'A procedure that automatically executes when certain events occur',
      'A type of database backup',
      'A way to start the database server',
      'A type of database index'
    ],
    correctAnswer: 'A procedure that automatically executes when certain events occur',
    explanation: 'A trigger is a procedure that automatically executes when certain events occur in a database table.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-28',
    question: 'What is the difference between DELETE and TRUNCATE?',
    options: [
      'DELETE removes specific rows, TRUNCATE removes all rows and resets auto-increment',
      'DELETE is faster than TRUNCATE',
      'TRUNCATE can be rolled back, DELETE cannot',
      'DELETE is used for tables, TRUNCATE for databases'
    ],
    correctAnswer: 'DELETE removes specific rows, TRUNCATE removes all rows and resets auto-increment',
    explanation: 'DELETE removes specific rows based on a WHERE clause, while TRUNCATE removes all rows and resets auto-increment counters.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-29',
    question: 'What is a database constraint?',
    options: [
      'A rule that restricts the data that can be stored in a table',
      'A type of database index',
      'A backup rule for the database',
      'A connection limit to the database'
    ],
    correctAnswer: 'A rule that restricts the data that can be stored in a table',
    explanation: 'Constraints are rules that restrict the data that can be stored in a table to maintain data integrity.',
    category: 'Database Design',
    difficulty: 'Easy'
  },
  {
    id: 'database-30',
    question: 'What is the purpose of the ORDER BY clause in SQL?',
    options: [
      'To sort the result set in ascending or descending order',
      'To group rows together',
      'To filter data based on conditions',
      'To join multiple tables'
    ],
    correctAnswer: 'To sort the result set in ascending or descending order',
    explanation: 'ORDER BY is used to sort the result set by one or more columns in ascending or descending order.',
    category: 'SQL Queries',
    difficulty: 'Easy'
  },
  {
    id: 'database-31',
    question: 'What is a database deadlock?',
    options: [
      'A situation where two or more transactions are waiting for each other to release locks',
      'A type of database backup',
      'A connection timeout to the database',
      'A database crash'
    ],
    correctAnswer: 'A situation where two or more transactions are waiting for each other to release locks',
    explanation: 'A deadlock occurs when two or more transactions are waiting for each other to release locks on resources.',
    category: 'ACID Properties',
    difficulty: 'Hard'
  },
  {
    id: 'database-32',
    question: 'What is the difference between a clustered and non-clustered index?',
    options: [
      'Clustered index determines the physical order of data, non-clustered does not',
      'Clustered index is faster than non-clustered index',
      'Non-clustered index can have multiple columns, clustered cannot',
      'Clustered index is only for primary keys'
    ],
    correctAnswer: 'Clustered index determines the physical order of data, non-clustered does not',
    explanation: 'A clustered index determines the physical order of data in a table, while a non-clustered index is a separate structure.',
    category: 'Database Performance',
    difficulty: 'Hard'
  },
  {
    id: 'database-33',
    question: 'What is a database connection pool?',
    options: [
      'A cache of database connections that can be reused',
      'A backup of database connections',
      'A way to connect multiple databases together',
      'A type of database index'
    ],
    correctAnswer: 'A cache of database connections that can be reused',
    explanation: 'A connection pool is a cache of database connections that can be reused to improve performance.',
    category: 'Database Performance',
    difficulty: 'Medium'
  },
  {
    id: 'database-34',
    question: 'What is the purpose of the LIMIT clause in SQL?',
    options: [
      'To restrict the number of rows returned by a query',
      'To limit the size of the database',
      'To limit the number of connections to the database',
      'To limit the execution time of a query'
    ],
    correctAnswer: 'To restrict the number of rows returned by a query',
    explanation: 'LIMIT is used to restrict the number of rows returned by a SELECT statement.',
    category: 'SQL Queries',
    difficulty: 'Easy'
  },
  {
    id: 'database-35',
    question: 'What is a database schema?',
    options: [
      'The structure of the database including tables, relationships, and constraints',
      'A backup of the database',
      'A type of database index',
      'A connection to the database'
    ],
    correctAnswer: 'The structure of the database including tables, relationships, and constraints',
    explanation: 'A database schema defines the structure of the database, including tables, relationships, and constraints.',
    category: 'Database Design',
    difficulty: 'Easy'
  },
  {
    id: 'database-36',
    question: 'What is the difference between a database and a data warehouse?',
    options: [
      'A database is for transactional processing, a data warehouse is for analytical processing',
      'A database is larger than a data warehouse',
      'A data warehouse is faster than a database',
      'A database is for backup, a data warehouse is for active data'
    ],
    correctAnswer: 'A database is for transactional processing, a data warehouse is for analytical processing',
    explanation: 'Databases are optimized for transactional processing (OLTP), while data warehouses are optimized for analytical processing (OLAP).',
    category: 'Database Design',
    difficulty: 'Medium'
  },
  {
    id: 'database-37',
    question: 'What is the purpose of the DISTINCT clause in SQL?',
    options: [
      'To return only unique values from a column',
      'To sort data in ascending order',
      'To filter data based on conditions',
      'To join multiple tables'
    ],
    correctAnswer: 'To return only unique values from a column',
    explanation: 'DISTINCT is used to return only unique values from a column, eliminating duplicate values.',
    category: 'SQL Queries',
    difficulty: 'Easy'
  },
  {
    id: 'database-38',
    question: 'What is a database backup?',
    options: [
      'A copy of the database that can be used to restore data',
      'A type of database index',
      'A way to connect to the database',
      'A type of database constraint'
    ],
    correctAnswer: 'A copy of the database that can be used to restore data',
    explanation: 'A database backup is a copy of the database that can be used to restore data in case of data loss.',
    category: 'Database Administration',
    difficulty: 'Easy'
  },
  {
    id: 'database-39',
    question: 'What is the difference between a database and a data lake?',
    options: [
      'A database stores structured data, a data lake stores raw data in any format',
      'A database is larger than a data lake',
      'A data lake is faster than a database',
      'A database is for backup, a data lake is for active data'
    ],
    correctAnswer: 'A database stores structured data, a data lake stores raw data in any format',
    explanation: 'Databases store structured, processed data, while data lakes store raw data in its native format.',
    category: 'Database Design',
    difficulty: 'Medium'
  },
  {
    id: 'database-40',
    question: 'What is the purpose of the UNION clause in SQL?',
    options: [
      'To combine the result sets of two or more SELECT statements',
      'To join multiple tables together',
      'To group data together',
      'To sort data in ascending order'
    ],
    correctAnswer: 'To combine the result sets of two or more SELECT statements',
    explanation: 'UNION is used to combine the result sets of two or more SELECT statements, removing duplicates.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-41',
    question: 'What is a database migration?',
    options: [
      'A process of moving data from one database to another',
      'A type of database backup',
      'A way to connect to the database',
      'A type of database index'
    ],
    correctAnswer: 'A process of moving data from one database to another',
    explanation: 'Database migration is the process of moving data from one database system to another.',
    category: 'Database Administration',
    difficulty: 'Medium'
  },
  {
    id: 'database-42',
    question: 'What is the purpose of the CASE statement in SQL?',
    options: [
      'To perform conditional logic in SQL queries',
      'To create a new table',
      'To join multiple tables',
      'To sort data in ascending order'
    ],
    correctAnswer: 'To perform conditional logic in SQL queries',
    explanation: 'The CASE statement allows you to perform conditional logic in SQL queries, similar to if-else statements.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-43',
    question: 'What is a database shard?',
    options: [
      'A horizontal partition of data across multiple databases',
      'A type of database backup',
      'A way to connect to the database',
      'A type of database index'
    ],
    correctAnswer: 'A horizontal partition of data across multiple databases',
    explanation: 'Database sharding is a technique to horizontally partition data across multiple databases to improve performance.',
    category: 'Database Performance',
    difficulty: 'Hard'
  },
  {
    id: 'database-44',
    question: 'What is the purpose of the EXISTS clause in SQL?',
    options: [
      'To test for the existence of any record in a subquery',
      'To check if a table exists',
      'To verify data integrity',
      'To create a new table'
    ],
    correctAnswer: 'To test for the existence of any record in a subquery',
    explanation: 'EXISTS is used to test for the existence of any record in a subquery, returning true if the subquery returns any rows.',
    category: 'SQL Queries',
    difficulty: 'Medium'
  },
  {
    id: 'database-45',
    question: 'What is a database replication?',
    options: [
      'The process of copying data from one database to another',
      'A type of database backup',
      'A way to connect to the database',
      'A type of database index'
    ],
    correctAnswer: 'The process of copying data from one database to another',
    explanation: 'Database replication is the process of copying data from one database to another to improve availability and performance.',
    category: 'Database Administration',
    difficulty: 'Medium'
  },
  {
    id: 'database-46',
    question: 'What is the purpose of the WITH clause in SQL?',
    options: [
      'To create a temporary named result set that can be referenced in a query',
      'To join multiple tables together',
      'To group data together',
      'To sort data in ascending order'
    ],
    correctAnswer: 'To create a temporary named result set that can be referenced in a query',
    explanation: 'The WITH clause (Common Table Expression) creates a temporary named result set that can be referenced in a query.',
    category: 'SQL Queries',
    difficulty: 'Hard'
  },
  {
    id: 'database-47',
    question: 'What is a database partition?',
    options: [
      'A division of a database table into smaller, more manageable pieces',
      'A type of database backup',
      'A way to connect to the database',
      'A type of database index'
    ],
    correctAnswer: 'A division of a database table into smaller, more manageable pieces',
    explanation: 'Database partitioning divides a table into smaller, more manageable pieces to improve performance and maintenance.',
    category: 'Database Performance',
    difficulty: 'Hard'
  },
  {
    id: 'database-48',
    question: 'What is the purpose of the ROW_NUMBER() function in SQL?',
    options: [
      'To assign a unique sequential integer to rows within a partition',
      'To count the number of rows in a table',
      'To sum values in a column',
      'To find the average of values in a column'
    ],
    correctAnswer: 'To assign a unique sequential integer to rows within a partition',
    explanation: 'ROW_NUMBER() assigns a unique sequential integer to rows within a partition of a result set.',
    category: 'SQL Queries',
    difficulty: 'Hard'
  },
  {
    id: 'database-49',
    question: 'What is a database cursor?',
    options: [
      'A control structure that enables traversal over the records in a database',
      'A type of database backup',
      'A way to connect to the database',
      'A type of database index'
    ],
    correctAnswer: 'A control structure that enables traversal over the records in a database',
    explanation: 'A cursor is a control structure that enables traversal over the records in a database, allowing row-by-row processing.',
    category: 'SQL Queries',
    difficulty: 'Hard'
  },
  {
    id: 'database-50',
    question: 'What is the purpose of the LAG() and LEAD() functions in SQL?',
    options: [
      'To access data from previous or subsequent rows in the same result set',
      'To calculate the average of values in a column',
      'To find the maximum value in a column',
      'To count the number of rows in a table'
    ],
    correctAnswer: 'To access data from previous or subsequent rows in the same result set',
    explanation: 'LAG() and LEAD() are window functions that access data from previous or subsequent rows in the same result set.',
    category: 'SQL Queries',
    difficulty: 'Hard'
  }
]; 