import { AssessmentQuestion } from '../../types';

export const backendFundamentalsQuestions: AssessmentQuestion[] = [
  {
    id: 'backend-1',
    question: 'What is the primary purpose of a backend server?',
    options: [
      'To display web pages to users',
      'To process business logic, handle data, and provide APIs',
      'To style web pages',
      'To create animations'
    ],
    correctAnswer: 'To process business logic, handle data, and provide APIs',
    explanation: 'Backend servers process business logic, handle data operations, and provide APIs for frontend applications to consume.',
    category: 'Backend Basics',
    difficulty: 'Easy'
  },
  {
    id: 'backend-2',
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Programming Integration',
      'Automated Program Interface',
      'Application Process Integration'
    ],
    correctAnswer: 'Application Programming Interface',
    explanation: 'API stands for Application Programming Interface, which defines how software components should interact.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-3',
    question: 'Which HTTP method is typically used to retrieve data from a server?',
    options: [
      'POST',
      'GET',
      'PUT',
      'DELETE'
    ],
    correctAnswer: 'GET',
    explanation: 'The GET method is used to retrieve data from a server. It should be idempotent and safe.',
    category: 'HTTP',
    difficulty: 'Easy'
  },
  {
    id: 'backend-4',
    question: 'What is the purpose of middleware in web applications?',
    options: [
      'To store data permanently',
      'To process requests and responses between the client and server',
      'To create user interfaces',
      'To handle database connections only'
    ],
    correctAnswer: 'To process requests and responses between the client and server',
    explanation: 'Middleware functions process requests and responses between the client and server, often handling authentication, logging, and data parsing.',
    category: 'Backend Architecture',
    difficulty: 'Medium'
  },
  {
    id: 'backend-5',
    question: 'What is a RESTful API?',
    options: [
      'An API that only uses GET requests',
      'An API that follows REST architectural principles',
      'An API that only works with databases',
      'An API that uses only JSON data'
    ],
    correctAnswer: 'An API that follows REST architectural principles',
    explanation: 'RESTful APIs follow REST (Representational State Transfer) architectural principles, using standard HTTP methods and stateless operations.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-6',
    question: 'Which HTTP status code indicates a successful request?',
    options: [
      '200',
      '404',
      '500',
      '300'
    ],
    correctAnswer: '200',
    explanation: 'HTTP status code 200 indicates a successful request.',
    category: 'HTTP',
    difficulty: 'Easy'
  },
  {
    id: 'backend-7',
    question: 'What is the purpose of environment variables in backend applications?',
    options: [
      'To store user data',
      'To configure application settings without hardcoding them',
      'To create database tables',
      'To handle user authentication'
    ],
    correctAnswer: 'To configure application settings without hardcoding them',
    explanation: 'Environment variables allow you to configure application settings (like database URLs, API keys) without hardcoding them in the source code.',
    category: 'Backend Configuration',
    difficulty: 'Easy'
  },
  {
    id: 'backend-8',
    question: 'What is the difference between authentication and authorization?',
    options: [
      'There is no difference between them',
      'Authentication verifies identity, authorization determines permissions',
      'Authorization verifies identity, authentication determines permissions',
      'They are the same thing with different names'
    ],
    correctAnswer: 'Authentication verifies identity, authorization determines permissions',
    explanation: 'Authentication verifies who a user is (login), while authorization determines what a user can access (permissions).',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-9',
    question: 'What is the purpose of a database index?',
    options: [
      'To store user passwords',
      'To improve query performance by creating a data structure for faster lookups',
      'To backup data',
      'To create new tables'
    ],
    correctAnswer: 'To improve query performance by creating a data structure for faster lookups',
    explanation: 'Database indexes improve query performance by creating a data structure that allows faster lookups, similar to an index in a book.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-10',
    question: 'Which HTTP method is typically used to create new resources?',
    options: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
    correctAnswer: 'POST',
    explanation: 'The POST method is typically used to create new resources on the server.',
    category: 'HTTP',
    difficulty: 'Easy'
  },
  {
    id: 'backend-11',
    question: 'What is the purpose of CORS in web applications?',
    options: [
      'To encrypt data',
      'To allow web pages to make requests to a different domain than the one serving the page',
      'To compress data',
      'To cache responses'
    ],
    correctAnswer: 'To allow web pages to make requests to a different domain than the one serving the page',
    explanation: 'CORS (Cross-Origin Resource Sharing) allows web pages to make requests to a different domain than the one serving the page.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-12',
    question: 'What is the purpose of rate limiting in APIs?',
    options: [
      'To slow down all requests',
      'To prevent abuse by limiting the number of requests a client can make',
      'To increase server performance',
      'To cache responses'
    ],
    correctAnswer: 'To prevent abuse by limiting the number of requests a client can make',
    explanation: 'Rate limiting prevents API abuse by limiting the number of requests a client can make within a specified time period.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-13',
    question: 'What is the difference between SQL and NoSQL databases?',
    options: [
      'SQL is newer than NoSQL',
      'SQL uses structured query language, NoSQL uses various data models',
      'NoSQL is always faster than SQL',
      'SQL can only store text data'
    ],
    correctAnswer: 'SQL uses structured query language, NoSQL uses various data models',
    explanation: 'SQL databases use structured query language and relational data models, while NoSQL databases use various data models (document, key-value, graph, etc.).',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-14',
    question: 'What is the purpose of JWT (JSON Web Tokens)?',
    options: [
      'To encrypt data',
      'To securely transmit information between parties as a JSON object',
      'To compress data',
      'To cache responses'
    ],
    correctAnswer: 'To securely transmit information between parties as a JSON object',
    explanation: 'JWT is a standard for securely transmitting information between parties as a JSON object, commonly used for authentication.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-15',
    question: 'What is the purpose of database transactions?',
    options: [
      'To backup data',
      'To ensure data consistency by grouping multiple operations together',
      'To create new databases',
      'To delete old data'
    ],
    correctAnswer: 'To ensure data consistency by grouping multiple operations together',
    explanation: 'Database transactions ensure data consistency by grouping multiple operations together, ensuring they all succeed or all fail.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-16',
    question: 'What is the purpose of API versioning?',
    options: [
      'To make APIs slower',
      'To maintain backward compatibility while introducing new features',
      'To increase security',
      'To reduce costs'
    ],
    correctAnswer: 'To maintain backward compatibility while introducing new features',
    explanation: 'API versioning allows you to maintain backward compatibility while introducing new features or breaking changes.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-17',
    question: 'What is the purpose of connection pooling?',
    options: [
      'To create new databases',
      'To reuse database connections instead of creating new ones for each request',
      'To backup data',
      'To encrypt data'
    ],
    correctAnswer: 'To reuse database connections instead of creating new ones for each request',
    explanation: 'Connection pooling reuses database connections instead of creating new ones for each request, improving performance.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-18',
    question: 'What is the purpose of input validation in backend applications?',
    options: [
      'To make applications slower',
      'To ensure data integrity and prevent security vulnerabilities',
      'To increase database size',
      'To create backups'
    ],
    correctAnswer: 'To ensure data integrity and prevent security vulnerabilities',
    explanation: 'Input validation ensures data integrity and prevents security vulnerabilities like SQL injection and XSS attacks.',
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 'backend-19',
    question: 'What is the purpose of caching in backend applications?',
    options: [
      'To store data permanently',
      'To improve performance by storing frequently accessed data in memory',
      'To backup data',
      'To encrypt data'
    ],
    correctAnswer: 'To improve performance by storing frequently accessed data in memory',
    explanation: 'Caching improves performance by storing frequently accessed data in memory, reducing the need to fetch it from slower sources.',
    category: 'Performance',
    difficulty: 'Easy'
  },
  {
    id: 'backend-20',
    question: 'What is the purpose of logging in backend applications?',
    options: [
      'To store user data',
      'To track application behavior and debug issues',
      'To create backups',
      'To encrypt data'
    ],
    correctAnswer: 'To track application behavior and debug issues',
    explanation: 'Logging tracks application behavior and helps debug issues by recording important events and errors.',
    category: 'Backend Operations',
    difficulty: 'Easy'
  },
  {
    id: 'backend-21',
    question: 'What is the purpose of database migrations?',
    options: [
      'To backup data',
      'To version control database schema changes',
      'To create new databases',
      'To delete old data'
    ],
    correctAnswer: 'To version control database schema changes',
    explanation: 'Database migrations version control database schema changes, allowing you to track and apply database modifications systematically.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-22',
    question: 'What is the purpose of API documentation?',
    options: [
      'To make APIs slower',
      'To help developers understand how to use the API',
      'To increase security',
      'To reduce costs'
    ],
    correctAnswer: 'To help developers understand how to use the API',
    explanation: 'API documentation helps developers understand how to use the API, including endpoints, parameters, and response formats.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-23',
    question: 'What is the purpose of load balancing?',
    options: [
      'To make servers slower',
      'To distribute incoming requests across multiple servers',
      'To backup data',
      'To encrypt data'
    ],
    correctAnswer: 'To distribute incoming requests across multiple servers',
    explanation: 'Load balancing distributes incoming requests across multiple servers to improve performance and reliability.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-24',
    question: 'What is the purpose of database normalization?',
    options: [
      'To make databases slower',
      'To organize data to reduce redundancy and improve data integrity',
      'To backup data',
      'To encrypt data'
    ],
    correctAnswer: 'To organize data to reduce redundancy and improve data integrity',
    explanation: 'Database normalization organizes data to reduce redundancy and improve data integrity by eliminating duplicate data.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-25',
    question: 'What is the purpose of API authentication?',
    options: [
      'To make APIs slower',
      'To verify the identity of API users',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To verify the identity of API users',
    explanation: 'API authentication verifies the identity of API users, ensuring only authorized users can access the API.',
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 'backend-26',
    question: 'What is the purpose of database backup?',
    options: [
      'To make databases slower',
      'To protect against data loss by creating copies of data',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect against data loss by creating copies of data',
    explanation: 'Database backup protects against data loss by creating copies of data that can be restored if needed.',
    category: 'Databases',
    difficulty: 'Easy'
  },
  {
    id: 'backend-27',
    question: 'What is the purpose of API rate limiting?',
    options: [
      'To make APIs slower',
      'To prevent abuse by limiting request frequency',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To prevent abuse by limiting request frequency',
    explanation: 'API rate limiting prevents abuse by limiting how frequently clients can make requests to the API.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-28',
    question: 'What is the purpose of database indexing?',
    options: [
      'To make databases slower',
      'To improve query performance by creating lookup structures',
      'To increase storage costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve query performance by creating lookup structures',
    explanation: 'Database indexing improves query performance by creating lookup structures that allow faster data retrieval.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-29',
    question: 'What is the purpose of API versioning?',
    options: [
      'To make APIs slower',
      'To maintain compatibility while evolving the API',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To maintain compatibility while evolving the API',
    explanation: 'API versioning maintains compatibility while evolving the API, allowing clients to use different versions.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-30',
    question: 'What is the purpose of database transactions?',
    options: [
      'To make databases slower',
      'To ensure data consistency across multiple operations',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure data consistency across multiple operations',
    explanation: 'Database transactions ensure data consistency across multiple operations, ensuring all operations succeed or all fail.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-31',
    question: 'What is the purpose of API pagination?',
    options: [
      'To make APIs slower',
      'To limit the amount of data returned in a single request',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To limit the amount of data returned in a single request',
    explanation: 'API pagination limits the amount of data returned in a single request, improving performance and user experience.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-32',
    question: 'What is the purpose of database connection pooling?',
    options: [
      'To make databases slower',
      'To reuse database connections for better performance',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To reuse database connections for better performance',
    explanation: 'Database connection pooling reuses database connections for better performance instead of creating new connections for each request.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-33',
    question: 'What is the purpose of API authentication tokens?',
    options: [
      'To make APIs slower',
      'To securely identify and authenticate API users',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To securely identify and authenticate API users',
    explanation: 'API authentication tokens securely identify and authenticate API users without requiring them to send credentials with each request.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-34',
    question: 'What is the purpose of database replication?',
    options: [
      'To make databases slower',
      'To create copies of data for redundancy and performance',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To create copies of data for redundancy and performance',
    explanation: 'Database replication creates copies of data for redundancy and performance, allowing read operations to be distributed across multiple servers.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-35',
    question: 'What is the purpose of API response caching?',
    options: [
      'To make APIs slower',
      'To store responses to avoid recalculating them',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To store responses to avoid recalculating them',
    explanation: 'API response caching stores responses to avoid recalculating them, improving performance for frequently requested data.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-36',
    question: 'What is the purpose of database sharding?',
    options: [
      'To make databases slower',
      'To distribute data across multiple databases for scalability',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To distribute data across multiple databases for scalability',
    explanation: 'Database sharding distributes data across multiple databases for scalability, allowing horizontal scaling of database systems.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-37',
    question: 'What is the purpose of API monitoring?',
    options: [
      'To make APIs slower',
      'To track API performance and usage',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To track API performance and usage',
    explanation: 'API monitoring tracks API performance and usage, helping identify issues and optimize performance.',
    category: 'Backend Operations',
    difficulty: 'Medium'
  },
  {
    id: 'backend-38',
    question: 'What is the purpose of database backup strategies?',
    options: [
      'To make databases slower',
      'To ensure data can be recovered in case of failure',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure data can be recovered in case of failure',
    explanation: 'Database backup strategies ensure data can be recovered in case of failure, protecting against data loss.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-39',
    question: 'What is the purpose of API throttling?',
    options: [
      'To make APIs slower',
      'To limit the rate of requests to prevent overload',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To limit the rate of requests to prevent overload',
    explanation: 'API throttling limits the rate of requests to prevent server overload and ensure fair usage.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-40',
    question: 'What is the purpose of database optimization?',
    options: [
      'To make databases slower',
      'To improve database performance and efficiency',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve database performance and efficiency',
    explanation: 'Database optimization improves database performance and efficiency through query optimization, indexing, and schema design.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-41',
    question: 'What is the purpose of API security headers?',
    options: [
      'To make APIs slower',
      'To protect against common web vulnerabilities',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect against common web vulnerabilities',
    explanation: 'API security headers protect against common web vulnerabilities like XSS, CSRF, and clickjacking attacks.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-42',
    question: 'What is the purpose of database clustering?',
    options: [
      'To make databases slower',
      'To group multiple database servers for high availability',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To group multiple database servers for high availability',
    explanation: 'Database clustering groups multiple database servers for high availability and fault tolerance.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-43',
    question: 'What is the purpose of API error handling?',
    options: [
      'To make APIs slower',
      'To provide meaningful error responses to clients',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To provide meaningful error responses to clients',
    explanation: 'API error handling provides meaningful error responses to clients, helping them understand and resolve issues.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-44',
    question: 'What is the purpose of database partitioning?',
    options: [
      'To make databases slower',
      'To split large tables into smaller, more manageable pieces',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To split large tables into smaller, more manageable pieces',
    explanation: 'Database partitioning splits large tables into smaller, more manageable pieces for better performance and maintenance.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-45',
    question: 'What is the purpose of API testing?',
    options: [
      'To make APIs slower',
      'To ensure APIs work correctly and reliably',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure APIs work correctly and reliably',
    explanation: 'API testing ensures APIs work correctly and reliably by validating functionality, performance, and security.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-46',
    question: 'What is the purpose of database deadlock prevention?',
    options: [
      'To make databases slower',
      'To prevent situations where transactions wait indefinitely',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To prevent situations where transactions wait indefinitely',
    explanation: 'Database deadlock prevention prevents situations where transactions wait indefinitely for resources held by other transactions.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-47',
    question: 'What is the purpose of API documentation tools?',
    options: [
      'To make APIs slower',
      'To automatically generate API documentation',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To automatically generate API documentation',
    explanation: 'API documentation tools automatically generate API documentation from code, ensuring it stays up-to-date.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-48',
    question: 'What is the purpose of database query optimization?',
    options: [
      'To make databases slower',
      'To improve query performance and reduce resource usage',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve query performance and reduce resource usage',
    explanation: 'Database query optimization improves query performance and reduces resource usage through better query plans and indexing.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-49',
    question: 'What is the purpose of API versioning strategies?',
    options: [
      'To make APIs slower',
      'To manage API evolution while maintaining compatibility',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To manage API evolution while maintaining compatibility',
    explanation: 'API versioning strategies manage API evolution while maintaining compatibility with existing clients.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-50',
    question: 'What is the purpose of database maintenance?',
    options: [
      'To make databases slower',
      'To ensure database health and optimal performance',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure database health and optimal performance',
    explanation: 'Database maintenance ensures database health and optimal performance through regular tasks like index rebuilding and statistics updates.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-51',
    question: 'What is the purpose of a reverse proxy in backend architecture?',
    options: [
      'To make requests slower',
      'To act as an intermediary between clients and servers, providing load balancing and caching',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To act as an intermediary between clients and servers, providing load balancing and caching',
    explanation: 'A reverse proxy acts as an intermediary between clients and servers, providing load balancing, caching, SSL termination, and security features.',
    category: 'Backend Architecture',
    difficulty: 'Medium'
  },
  {
    id: 'backend-52',
    question: 'What is the purpose of message queues in backend systems?',
    options: [
      'To make systems slower',
      'To decouple components and handle asynchronous processing',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To decouple components and handle asynchronous processing',
    explanation: 'Message queues decouple components and handle asynchronous processing, allowing systems to handle high loads and provide reliability.',
    category: 'Backend Architecture',
    difficulty: 'Medium'
  },
  {
    id: 'backend-53',
    question: 'What is the purpose of circuit breakers in distributed systems?',
    options: [
      'To make systems slower',
      'To prevent cascading failures by stopping requests to failing services',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To prevent cascading failures by stopping requests to failing services',
    explanation: 'Circuit breakers prevent cascading failures by stopping requests to failing services, allowing them to recover and preventing system overload.',
    category: 'Backend Architecture',
    difficulty: 'Hard'
  },
  {
    id: 'backend-54',
    question: 'What is the purpose of health checks in backend services?',
    options: [
      'To make services slower',
      'To monitor service availability and detect failures',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To monitor service availability and detect failures',
    explanation: 'Health checks monitor service availability and detect failures, allowing load balancers and monitoring systems to route traffic appropriately.',
    category: 'Backend Operations',
    difficulty: 'Medium'
  },
  {
    id: 'backend-55',
    question: 'What is the purpose of API gateways?',
    options: [
      'To make APIs slower',
      'To provide a single entry point for multiple APIs with routing, authentication, and monitoring',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To provide a single entry point for multiple APIs with routing, authentication, and monitoring',
    explanation: 'API gateways provide a single entry point for multiple APIs, handling routing, authentication, rate limiting, and monitoring.',
    category: 'Backend Architecture',
    difficulty: 'Medium'
  },
  {
    id: 'backend-56',
    question: 'What is the purpose of distributed tracing in microservices?',
    options: [
      'To make services slower',
      'To track requests across multiple services for debugging and monitoring',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To track requests across multiple services for debugging and monitoring',
    explanation: 'Distributed tracing tracks requests across multiple services, helping developers debug issues and monitor performance in microservice architectures.',
    category: 'Backend Operations',
    difficulty: 'Hard'
  },
  {
    id: 'backend-57',
    question: 'What is the purpose of service discovery in microservices?',
    options: [
      'To make services slower',
      'To automatically locate and connect to available services',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To automatically locate and connect to available services',
    explanation: 'Service discovery automatically locates and connects to available services, allowing dynamic scaling and load balancing in microservice architectures.',
    category: 'Backend Architecture',
    difficulty: 'Hard'
  },
  {
    id: 'backend-58',
    question: 'What is the purpose of configuration management in backend systems?',
    options: [
      'To make systems slower',
      'To manage application settings across different environments',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To manage application settings across different environments',
    explanation: 'Configuration management manages application settings across different environments, ensuring consistency and enabling environment-specific configurations.',
    category: 'Backend Configuration',
    difficulty: 'Medium'
  },
  {
    id: 'backend-59',
    question: 'What is the purpose of blue-green deployments?',
    options: [
      'To make deployments slower',
      'To enable zero-downtime deployments by switching between identical environments',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To enable zero-downtime deployments by switching between identical environments',
    explanation: 'Blue-green deployments enable zero-downtime deployments by switching between identical environments, allowing quick rollbacks if issues arise.',
    category: 'Backend Operations',
    difficulty: 'Hard'
  },
  {
    id: 'backend-60',
    question: 'What is the purpose of canary deployments?',
    options: [
      'To make deployments slower',
      'To gradually roll out changes to a small subset of users before full deployment',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To gradually roll out changes to a small subset of users before full deployment',
    explanation: 'Canary deployments gradually roll out changes to a small subset of users before full deployment, allowing early detection of issues.',
    category: 'Backend Operations',
    difficulty: 'Hard'
  },
  {
    id: 'backend-61',
    question: 'What is the purpose of containerization in backend development?',
    options: [
      'To make applications slower',
      'To package applications with their dependencies for consistent deployment',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To package applications with their dependencies for consistent deployment',
    explanation: 'Containerization packages applications with their dependencies, ensuring consistent deployment across different environments and platforms.',
    category: 'Backend Architecture',
    difficulty: 'Medium'
  },
  {
    id: 'backend-62',
    question: 'What is the purpose of orchestration in containerized systems?',
    options: [
      'To make systems slower',
      'To manage and coordinate multiple containers across multiple hosts',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To manage and coordinate multiple containers across multiple hosts',
    explanation: 'Orchestration manages and coordinates multiple containers across multiple hosts, handling deployment, scaling, and service discovery.',
    category: 'Backend Architecture',
    difficulty: 'Hard'
  },
  {
    id: 'backend-63',
    question: 'What is the purpose of secrets management in backend systems?',
    options: [
      'To make systems slower',
      'To securely store and manage sensitive information like passwords and API keys',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To securely store and manage sensitive information like passwords and API keys',
    explanation: 'Secrets management securely stores and manages sensitive information like passwords, API keys, and certificates, preventing exposure in code.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-64',
    question: 'What is the purpose of observability in backend systems?',
    options: [
      'To make systems slower',
      'To provide visibility into system behavior through logging, metrics, and tracing',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To provide visibility into system behavior through logging, metrics, and tracing',
    explanation: 'Observability provides visibility into system behavior through logging, metrics, and tracing, enabling effective monitoring and debugging.',
    category: 'Backend Operations',
    difficulty: 'Medium'
  },
  {
    id: 'backend-65',
    question: 'What is the purpose of API mocking in development?',
    options: [
      'To make development slower',
      'To simulate API responses for testing and development without real dependencies',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To simulate API responses for testing and development without real dependencies',
    explanation: 'API mocking simulates API responses for testing and development, allowing developers to work without real dependencies and test various scenarios.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-66',
    question: 'What is the purpose of database connection string security?',
    options: [
      'To make databases slower',
      'To protect database credentials and connection information',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect database credentials and connection information',
    explanation: 'Database connection string security protects database credentials and connection information, preventing unauthorized access to databases.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-67',
    question: 'What is the purpose of API response compression?',
    options: [
      'To make APIs slower',
      'To reduce bandwidth usage and improve response times',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To reduce bandwidth usage and improve response times',
    explanation: 'API response compression reduces bandwidth usage and improves response times by compressing data before sending it to clients.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-68',
    question: 'What is the purpose of database connection encryption?',
    options: [
      'To make databases slower',
      'To protect data in transit between applications and databases',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect data in transit between applications and databases',
    explanation: 'Database connection encryption protects data in transit between applications and databases, preventing interception and unauthorized access.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-69',
    question: 'What is the purpose of API request validation?',
    options: [
      'To make APIs slower',
      'To ensure incoming requests contain valid data and prevent security vulnerabilities',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To ensure incoming requests contain valid data and prevent security vulnerabilities',
    explanation: 'API request validation ensures incoming requests contain valid data and prevents security vulnerabilities like injection attacks.',
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 'backend-70',
    question: 'What is the purpose of database query parameterization?',
    options: [
      'To make databases slower',
      'To prevent SQL injection attacks by separating data from SQL commands',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To prevent SQL injection attacks by separating data from SQL commands',
    explanation: 'Database query parameterization prevents SQL injection attacks by separating data from SQL commands, ensuring data is treated as parameters.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-71',
    question: 'What is the purpose of API response caching headers?',
    options: [
      'To make APIs slower',
      'To control how responses are cached by clients and intermediaries',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To control how responses are cached by clients and intermediaries',
    explanation: 'API response caching headers control how responses are cached by clients and intermediaries, improving performance and reducing server load.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-72',
    question: 'What is the purpose of database connection pooling configuration?',
    options: [
      'To make databases slower',
      'To optimize connection pool settings for application performance',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To optimize connection pool settings for application performance',
    explanation: 'Database connection pooling configuration optimizes connection pool settings for application performance, balancing resource usage and responsiveness.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-73',
    question: 'What is the purpose of API rate limiting algorithms?',
    options: [
      'To make APIs slower',
      'To implement different strategies for limiting request rates',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To implement different strategies for limiting request rates',
    explanation: 'API rate limiting algorithms implement different strategies for limiting request rates, such as token bucket, leaky bucket, or sliding window approaches.',
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 'backend-74',
    question: 'What is the purpose of database transaction isolation levels?',
    options: [
      'To make databases slower',
      'To control how transactions interact with each other and maintain data consistency',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To control how transactions interact with each other and maintain data consistency',
    explanation: 'Database transaction isolation levels control how transactions interact with each other and maintain data consistency, preventing concurrency issues.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-75',
    question: 'What is the purpose of API authentication methods?',
    options: [
      'To make APIs slower',
      'To provide different ways to verify user identity and authorize access',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To provide different ways to verify user identity and authorize access',
    explanation: 'API authentication methods provide different ways to verify user identity and authorize access, such as API keys, OAuth, JWT, or session-based authentication.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-76',
    question: 'What is the purpose of database backup strategies?',
    options: [
      'To make databases slower',
      'To ensure data can be recovered in case of failure or corruption',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure data can be recovered in case of failure or corruption',
    explanation: 'Database backup strategies ensure data can be recovered in case of failure or corruption, protecting against data loss and enabling disaster recovery.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-77',
    question: 'What is the purpose of API monitoring and alerting?',
    options: [
      'To make APIs slower',
      'To track API performance and notify when issues occur',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To track API performance and notify when issues occur',
    explanation: 'API monitoring and alerting tracks API performance and notifies when issues occur, enabling proactive problem resolution and SLA compliance.',
    category: 'Backend Operations',
    difficulty: 'Medium'
  },
  {
    id: 'backend-78',
    question: 'What is the purpose of database performance tuning?',
    options: [
      'To make databases slower',
      'To optimize database performance through configuration and query optimization',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To optimize database performance through configuration and query optimization',
    explanation: 'Database performance tuning optimizes database performance through configuration, query optimization, indexing, and resource allocation.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-79',
    question: 'What is the purpose of API security testing?',
    options: [
      'To make APIs slower',
      'To identify security vulnerabilities and ensure API security',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To identify security vulnerabilities and ensure API security',
    explanation: 'API security testing identifies security vulnerabilities and ensures API security through penetration testing, vulnerability scanning, and security audits.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-80',
    question: 'What is the purpose of database scaling strategies?',
    options: [
      'To make databases slower',
      'To handle increased load through vertical or horizontal scaling',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To handle increased load through vertical or horizontal scaling',
    explanation: 'Database scaling strategies handle increased load through vertical scaling (more resources) or horizontal scaling (more servers).',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-81',
    question: 'What is the purpose of API documentation standards?',
    options: [
      'To make APIs slower',
      'To ensure consistent and comprehensive API documentation',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure consistent and comprehensive API documentation',
    explanation: 'API documentation standards ensure consistent and comprehensive API documentation, making APIs easier to understand and use.',
    category: 'APIs',
    difficulty: 'Easy'
  },
  {
    id: 'backend-82',
    question: 'What is the purpose of database migration strategies?',
    options: [
      'To make databases slower',
      'To safely update database schemas without data loss',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To safely update database schemas without data loss',
    explanation: 'Database migration strategies safely update database schemas without data loss, ensuring smooth application updates and rollbacks.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-83',
    question: 'What is the purpose of API versioning approaches?',
    options: [
      'To make APIs slower',
      'To manage API changes while maintaining backward compatibility',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To manage API changes while maintaining backward compatibility',
    explanation: 'API versioning approaches manage API changes while maintaining backward compatibility, allowing gradual API evolution.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-84',
    question: 'What is the purpose of database replication strategies?',
    options: [
      'To make databases slower',
      'To ensure data availability and improve read performance',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure data availability and improve read performance',
    explanation: 'Database replication strategies ensure data availability and improve read performance by maintaining copies of data across multiple servers.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-85',
    question: 'What is the purpose of API testing strategies?',
    options: [
      'To make APIs slower',
      'To ensure API reliability and functionality through comprehensive testing',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure API reliability and functionality through comprehensive testing',
    explanation: 'API testing strategies ensure API reliability and functionality through unit testing, integration testing, and end-to-end testing.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-86',
    question: 'What is the purpose of database security best practices?',
    options: [
      'To make databases slower',
      'To protect database systems from unauthorized access and attacks',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect database systems from unauthorized access and attacks',
    explanation: 'Database security best practices protect database systems from unauthorized access and attacks through proper authentication, authorization, and encryption.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-87',
    question: 'What is the purpose of API performance optimization?',
    options: [
      'To make APIs slower',
      'To improve API response times and throughput',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve API response times and throughput',
    explanation: 'API performance optimization improves API response times and throughput through caching, database optimization, and efficient algorithms.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-88',
    question: 'What is the purpose of database monitoring and alerting?',
    options: [
      'To make databases slower',
      'To track database performance and notify when issues occur',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To track database performance and notify when issues occur',
    explanation: 'Database monitoring and alerting tracks database performance and notifies when issues occur, enabling proactive maintenance and problem resolution.',
    category: 'Backend Operations',
    difficulty: 'Medium'
  },
  {
    id: 'backend-89',
    question: 'What is the purpose of API error handling strategies?',
    options: [
      'To make APIs slower',
      'To provide meaningful error responses and handle failures gracefully',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To provide meaningful error responses and handle failures gracefully',
    explanation: 'API error handling strategies provide meaningful error responses and handle failures gracefully, improving user experience and debugging.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-90',
    question: 'What is the purpose of database backup and recovery procedures?',
    options: [
      'To make databases slower',
      'To ensure data can be restored in case of failure or disaster',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure data can be restored in case of failure or disaster',
    explanation: 'Database backup and recovery procedures ensure data can be restored in case of failure or disaster, protecting against data loss.',
    category: 'Databases',
    difficulty: 'Medium'
  },
  {
    id: 'backend-91',
    question: 'What is the purpose of API load testing?',
    options: [
      'To make APIs slower',
      'To verify API performance under expected and peak loads',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To verify API performance under expected and peak loads',
    explanation: 'API load testing verifies API performance under expected and peak loads, ensuring the API can handle production traffic.',
    category: 'APIs',
    difficulty: 'Medium'
  },
  {
    id: 'backend-92',
    question: 'What is the purpose of database connection security?',
    options: [
      'To make databases slower',
      'To protect database connections from unauthorized access and attacks',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect database connections from unauthorized access and attacks',
    explanation: 'Database connection security protects database connections from unauthorized access and attacks through encryption, authentication, and network security.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-93',
    question: 'What is the purpose of API caching strategies?',
    options: [
      'To make APIs slower',
      'To improve performance by storing frequently accessed data',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve performance by storing frequently accessed data',
    explanation: 'API caching strategies improve performance by storing frequently accessed data, reducing database load and improving response times.',
    category: 'Performance',
    difficulty: 'Medium'
  },
  {
    id: 'backend-94',
    question: 'What is the purpose of database query optimization techniques?',
    options: [
      'To make databases slower',
      'To improve query performance through indexing, query rewriting, and execution plan optimization',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To improve query performance through indexing, query rewriting, and execution plan optimization',
    explanation: 'Database query optimization techniques improve query performance through indexing, query rewriting, and execution plan optimization.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-95',
    question: 'What is the purpose of API security headers implementation?',
    options: [
      'To make APIs slower',
      'To protect against common web vulnerabilities through HTTP headers',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To protect against common web vulnerabilities through HTTP headers',
    explanation: 'API security headers implementation protects against common web vulnerabilities through HTTP headers like Content-Security-Policy, X-Frame-Options, etc.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-96',
    question: 'What is the purpose of database high availability strategies?',
    options: [
      'To make databases slower',
      'To ensure database availability through redundancy and failover mechanisms',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure database availability through redundancy and failover mechanisms',
    explanation: 'Database high availability strategies ensure database availability through redundancy and failover mechanisms, minimizing downtime.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-97',
    question: 'What is the purpose of API rate limiting implementation?',
    options: [
      'To make APIs slower',
      'To prevent abuse and ensure fair usage through request rate control',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To prevent abuse and ensure fair usage through request rate control',
    explanation: 'API rate limiting implementation prevents abuse and ensures fair usage through request rate control, protecting server resources.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-98',
    question: 'What is the purpose of database disaster recovery planning?',
    options: [
      'To make databases slower',
      'To ensure business continuity in case of major failures or disasters',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To ensure business continuity in case of major failures or disasters',
    explanation: 'Database disaster recovery planning ensures business continuity in case of major failures or disasters through backup, replication, and recovery procedures.',
    category: 'Databases',
    difficulty: 'Hard'
  },
  {
    id: 'backend-99',
    question: 'What is the purpose of API authentication and authorization implementation?',
    options: [
      'To make APIs slower',
      'To secure API access through proper user verification and permission management',
      'To increase costs',
      'To reduce performance'
    ],
    correctAnswer: 'To secure API access through proper user verification and permission management',
    explanation: 'API authentication and authorization implementation secures API access through proper user verification and permission management.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'backend-100',
    question: 'What is the purpose of database performance monitoring and optimization?',
    options: [
      'To make databases slower',
      'To continuously monitor and improve database performance and efficiency',
      'To increase costs',
      'To reduce security'
    ],
    correctAnswer: 'To continuously monitor and improve database performance and efficiency',
    explanation: 'Database performance monitoring and optimization continuously monitors and improves database performance and efficiency through ongoing analysis and tuning.',
    category: 'Databases',
    difficulty: 'Hard'
  }
]; 