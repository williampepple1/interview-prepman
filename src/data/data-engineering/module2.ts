import { Topic } from '../../types';

export const dataEngineeringModule2Topics: Topic[] = [
  {
    id: 'python-for-data-engineering',
    title: 'Python for Data Engineering',
    description: 'Master Python programming specifically for data engineering tasks including data manipulation, automation, and pipeline development.',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    content: `
# Python for Data Engineering

Python is the most popular programming language for data engineering due to its rich ecosystem of data libraries and tools.

## Key Python Libraries for Data Engineering
- **pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **requests**: HTTP library for APIs
- **sqlalchemy**: Database ORM
- **pyspark**: Big data processing
- **airflow**: Workflow orchestration

## Essential Python Concepts
- File I/O operations
- Error handling and logging
- Working with APIs
- Database connections
- Data validation and cleaning
- Performance optimization

## Best Practices
- Use virtual environments
- Follow PEP 8 style guide
- Implement proper error handling
- Write unit tests
- Use type hints
- Document your code
    `,
    subtopics: [
      {
        id: 'python-libraries',
        title: 'Essential Python Libraries',
        content: `
Understanding the key Python libraries used in data engineering is crucial for building effective data pipelines and processing systems.
        `,
        keyPoints: [
          'pandas: Data manipulation and analysis',
          'NumPy: Numerical computing',
          'requests: HTTP library for APIs',
          'sqlalchemy: Database ORM',
          'pyspark: Big data processing',
          'airflow: Workflow orchestration'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'python-concepts',
        title: 'Python Concepts for Data Engineering',
        content: `
Mastering core Python concepts is essential for building robust data engineering solutions.
        `,
        keyPoints: [
          'File I/O operations',
          'Error handling and logging',
          'Working with APIs',
          'Database connections',
          'Data validation and cleaning',
          'Performance optimization'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'python-best-practices',
        title: 'Python Best Practices',
        content: `
Following best practices ensures your Python code is maintainable, efficient, and reliable.
        `,
        keyPoints: [
          'Use virtual environments',
          'Follow PEP 8 style guide',
          'Implement proper error handling',
          'Write unit tests',
          'Use type hints',
          'Document your code'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'sql-for-data-engineering',
    title: 'SQL for Data Engineering',
    description: 'Master SQL for data querying, manipulation, and database operations essential for data engineering.',
    difficulty: 'Beginner',
    estimatedTime: '25 minutes',
    content: `
# SQL for Data Engineering

SQL (Structured Query Language) is essential for data engineers to interact with databases and perform data operations.

## Core SQL Concepts
- **SELECT**: Querying data
- **INSERT, UPDATE, DELETE**: Data manipulation
- **JOINs**: Combining data from multiple tables
- **Aggregations**: GROUP BY, HAVING
- **Window Functions**: Advanced analytics
- **Indexes**: Performance optimization

## Advanced SQL Features
- **CTEs (Common Table Expressions)**: Complex queries
- **Subqueries**: Nested queries
- **Stored Procedures**: Database logic
- **Triggers**: Automated actions
- **Views**: Virtual tables
- **Partitioning**: Large table optimization

## Database-Specific Features
- **PostgreSQL**: Advanced features, JSON support
- **MySQL**: Performance, replication
- **SQL Server**: Enterprise features
- **BigQuery**: Cloud data warehouse
- **Snowflake**: Cloud data platform
    `,
    subtopics: [
      {
        id: 'sql-basics',
        title: 'SQL Basics',
        content: `
Understanding fundamental SQL concepts is the foundation for all database operations in data engineering.
        `,
        keyPoints: [
          'SELECT: Querying data',
          'INSERT, UPDATE, DELETE: Data manipulation',
          'JOINs: Combining data from multiple tables',
          'Aggregations: GROUP BY, HAVING',
          'Window Functions: Advanced analytics',
          'Indexes: Performance optimization'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'advanced-sql',
        title: 'Advanced SQL Features',
        content: `
Advanced SQL features enable complex data operations and optimizations for large-scale data processing.
        `,
        keyPoints: [
          'CTEs (Common Table Expressions): Complex queries',
          'Subqueries: Nested queries',
          'Stored Procedures: Database logic',
          'Triggers: Automated actions',
          'Views: Virtual tables',
          'Partitioning: Large table optimization'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'database-specific',
        title: 'Database-Specific Features',
        content: `
Different databases offer unique features and optimizations that data engineers should understand.
        `,
        keyPoints: [
          'PostgreSQL: Advanced features, JSON support',
          'MySQL: Performance, replication',
          'SQL Server: Enterprise features',
          'BigQuery: Cloud data warehouse',
          'Snowflake: Cloud data platform'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'shell-scripting',
    title: 'Shell Scripting for Data Engineering',
    description: 'Learn shell scripting for automation, file processing, and system administration tasks.',
    difficulty: 'Beginner',
    estimatedTime: '20 minutes',
    content: `
# Shell Scripting for Data Engineering

Shell scripting is essential for automation, file processing, and system administration in data engineering.

## Shell Scripting Basics
- **Bash scripting**: Most common shell
- **Variables**: Storing and using data
- **Control structures**: Loops and conditionals
- **Functions**: Reusable code blocks
- **File operations**: Reading and writing files
- **Process management**: Running and monitoring processes

## Common Use Cases
- **Data file processing**: Batch operations
- **System administration**: Server management
- **Automation**: Scheduled tasks
- **Monitoring**: Health checks
- **Deployment**: Application deployment
- **Log processing**: Parsing and analyzing logs

## Best Practices
- Use shebang line
- Add comments and documentation
- Implement error handling
- Use meaningful variable names
- Test scripts thoroughly
- Follow shell scripting conventions
    `,
    subtopics: [
      {
        id: 'shell-basics',
        title: 'Shell Scripting Basics',
        content: `
Understanding shell scripting fundamentals enables automation and system administration tasks.
        `,
        keyPoints: [
          'Bash scripting: Most common shell',
          'Variables: Storing and using data',
          'Control structures: Loops and conditionals',
          'Functions: Reusable code blocks',
          'File operations: Reading and writing files',
          'Process management: Running and monitoring processes'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'shell-use-cases',
        title: 'Common Use Cases',
        content: `
Shell scripting is used for various automation and processing tasks in data engineering.
        `,
        keyPoints: [
          'Data file processing: Batch operations',
          'System administration: Server management',
          'Automation: Scheduled tasks',
          'Monitoring: Health checks',
          'Deployment: Application deployment',
          'Log processing: Parsing and analyzing logs'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'shell-best-practices',
        title: 'Shell Scripting Best Practices',
        content: `
Following best practices ensures your shell scripts are reliable and maintainable.
        `,
        keyPoints: [
          'Use shebang line',
          'Add comments and documentation',
          'Implement error handling',
          'Use meaningful variable names',
          'Test scripts thoroughly',
          'Follow shell scripting conventions'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'data-manipulation',
    title: 'Data Manipulation Techniques',
    description: 'Learn advanced data manipulation techniques using Python and SQL for data engineering tasks.',
    difficulty: 'Intermediate',
    estimatedTime: '30 minutes',
    content: `
# Data Manipulation Techniques

Data manipulation is a core skill for data engineers, involving cleaning, transforming, and preparing data for analysis.

## Data Cleaning
- **Handling missing values**: Imputation strategies
- **Data validation**: Ensuring data quality
- **Outlier detection**: Identifying anomalies
- **Data type conversion**: Proper data types
- **String manipulation**: Text processing
- **Date/time processing**: Temporal data handling

## Data Transformation
- **Aggregations**: Summarizing data
- **Pivoting**: Reshaping data structures
- **Merging**: Combining datasets
- **Filtering**: Selecting relevant data
- **Sorting**: Organizing data
- **Sampling**: Working with subsets

## Performance Optimization
- **Vectorization**: Using NumPy operations
- **Chunking**: Processing large datasets
- **Parallel processing**: Multi-core operations
- **Memory management**: Efficient data storage
- **Indexing**: Fast data access
- **Caching**: Storing intermediate results
    `,
    subtopics: [
      {
        id: 'data-cleaning',
        title: 'Data Cleaning',
        content: `
Data cleaning ensures data quality and prepares data for analysis and processing.
        `,
        keyPoints: [
          'Handling missing values: Imputation strategies',
          'Data validation: Ensuring data quality',
          'Outlier detection: Identifying anomalies',
          'Data type conversion: Proper data types',
          'String manipulation: Text processing',
          'Date/time processing: Temporal data handling'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'data-transformation',
        title: 'Data Transformation',
        content: `
Data transformation involves reshaping and restructuring data for analysis and processing.
        `,
        keyPoints: [
          'Aggregations: Summarizing data',
          'Pivoting: Reshaping data structures',
          'Merging: Combining datasets',
          'Filtering: Selecting relevant data',
          'Sorting: Organizing data',
          'Sampling: Working with subsets'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        content: `
Optimizing data manipulation operations is crucial for handling large datasets efficiently.
        `,
        keyPoints: [
          'Vectorization: Using NumPy operations',
          'Chunking: Processing large datasets',
          'Parallel processing: Multi-core operations',
          'Memory management: Efficient data storage',
          'Indexing: Fast data access',
          'Caching: Storing intermediate results'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  }
]; 