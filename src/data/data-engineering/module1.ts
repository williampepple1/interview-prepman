import { Topic } from '../../types';

export const dataEngineeringModule1Topics: Topic[] = [
  {
    id: 'what-is-data-engineering',
    title: 'What is Data Engineering?',
    description: 'Learn about the fundamentals of data engineering, its role in the data ecosystem, and why it\'s crucial for modern organizations.',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
    content: `
# What is Data Engineering?

Data Engineering is the practice of designing, building, and maintaining the infrastructure and systems that enable organizations to collect, store, process, and analyze data at scale.

## Key Responsibilities
- **Data Pipeline Development**: Building systems to move data from source to destination
- **Data Infrastructure**: Designing and maintaining data storage solutions
- **Data Quality**: Ensuring data accuracy, completeness, and reliability
- **Performance Optimization**: Making data systems fast and efficient
- **Scalability**: Building systems that can handle growing data volumes

## Why Data Engineering Matters
- Enables data-driven decision making
- Powers machine learning and AI systems
- Supports business intelligence and analytics
- Ensures data security and compliance
- Drives operational efficiency

## Data Engineering vs Other Roles
- **Data Engineers**: Build and maintain data infrastructure
- **Data Scientists**: Analyze data and build ML models
- **Data Analysts**: Create reports and dashboards
- **Software Engineers**: Build applications and services
    `,
    subtopics: [
      {
        id: 'data-engineering-definition',
        title: 'Definition and Scope',
        content: `
Data Engineering is the foundation of the modern data stack. It involves creating the infrastructure and pipelines that make data accessible, reliable, and useful for the entire organization.
        `,
        keyPoints: [
          'Designs and builds data infrastructure',
          'Creates data pipelines for data movement',
          'Ensures data quality and reliability',
          'Optimizes data systems for performance',
          'Enables data-driven decision making'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'data-engineering-importance',
        title: 'Importance in Modern Organizations',
        content: `
Data Engineering is crucial for organizations that want to leverage their data effectively. It provides the foundation for analytics, machine learning, and business intelligence.
        `,
        keyPoints: [
          'Enables data-driven decision making',
          'Powers machine learning and AI systems',
          'Supports business intelligence and analytics',
          'Ensures data security and compliance',
          'Drives operational efficiency'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'data-engineering-vs-others',
        title: 'Data Engineering vs Other Data Roles',
        content: `
Understanding the differences between data engineering and other data-related roles helps clarify responsibilities and career paths in the data field.
        `,
        keyPoints: [
          'Data Engineers: Build and maintain data infrastructure',
          'Data Scientists: Analyze data and build ML models',
          'Data Analysts: Create reports and dashboards',
          'Software Engineers: Build applications and services'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'data-roles-comparison',
    title: 'Data Engineer vs Data Scientist vs Data Analyst',
    description: 'Understand the key differences between data engineering, data science, and data analysis roles.',
    difficulty: 'Beginner',
    estimatedTime: '20 minutes',
    content: `
# Data Engineer vs Data Scientist vs Data Analyst

## Data Engineer
**Focus**: Infrastructure and pipelines
**Primary Skills**:
- Programming (Python, Java, Scala)
- Database design and management
- ETL/ELT pipeline development
- Cloud platforms (AWS, GCP, Azure)
- Big data technologies (Spark, Hadoop)

**Responsibilities**:
- Build and maintain data pipelines
- Design data warehouses and data lakes
- Ensure data quality and reliability
- Optimize data processing performance
- Manage data infrastructure

## Data Scientist
**Focus**: Analysis and modeling
**Primary Skills**:
- Statistical analysis and mathematics
- Machine learning algorithms
- Programming (Python, R)
- Data visualization
- Domain expertise

**Responsibilities**:
- Analyze complex data sets
- Build predictive models
- Develop machine learning algorithms
- Communicate insights to stakeholders
- Drive data-driven decisions

## Data Analyst
**Focus**: Reporting and insights
**Primary Skills**:
- SQL and data querying
- Data visualization tools
- Statistical analysis
- Business domain knowledge
- Communication skills

**Responsibilities**:
- Create reports and dashboards
- Analyze business metrics
- Identify trends and patterns
- Support decision-making processes
- Communicate findings to stakeholders
    `,
    subtopics: [
      {
        id: 'data-engineer-role',
        title: 'Data Engineer Role and Responsibilities',
        content: `
Data Engineers are the architects of the data infrastructure. They build the systems that collect, store, and process data at scale.
        `,
        keyPoints: [
          'Build and maintain data pipelines',
          'Design data warehouses and data lakes',
          'Ensure data quality and reliability',
          'Optimize data processing performance',
          'Manage data infrastructure'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'data-scientist-role',
        title: 'Data Scientist Role and Responsibilities',
        content: `
Data Scientists focus on extracting insights from data and building predictive models to solve complex business problems.
        `,
        keyPoints: [
          'Analyze complex data sets',
          'Build predictive models',
          'Develop machine learning algorithms',
          'Communicate insights to stakeholders',
          'Drive data-driven decisions'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'data-analyst-role',
        title: 'Data Analyst Role and Responsibilities',
        content: `
Data Analysts transform raw data into actionable insights through reporting, visualization, and analysis.
        `,
        keyPoints: [
          'Create reports and dashboards',
          'Analyze business metrics',
          'Identify trends and patterns',
          'Support decision-making processes',
          'Communicate findings to stakeholders'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'data-pipelines-overview',
    title: 'Overview of Data Pipelines (Batch vs Streaming)',
    description: 'Learn about different types of data pipelines and when to use batch vs streaming processing.',
    difficulty: 'Beginner',
    estimatedTime: '25 minutes',
    content: `
# Data Pipelines Overview

## What are Data Pipelines?
Data pipelines are automated processes that move data from one system to another, typically involving data transformation, validation, and loading.

## Pipeline Components
1. **Data Sources**: Where data originates (databases, APIs, files)
2. **Data Processing**: Transformation and validation logic
3. **Data Storage**: Where processed data is stored
4. **Data Consumption**: How data is used (analytics, ML, reporting)

## Batch Processing
**Definition**: Processing data in large chunks at scheduled intervals

**Characteristics**:
- Processes data in batches (hourly, daily, weekly)
- Higher latency but more efficient for large volumes
- Better for complex transformations
- More cost-effective for large datasets

**Use Cases**:
- Daily sales reports
- Monthly financial analytics
- Historical data analysis
- Data warehouse loading

## Streaming Processing
**Definition**: Processing data in real-time as it arrives

**Characteristics**:
- Processes data immediately as it's generated
- Low latency for real-time insights
- More complex to implement and maintain
- Higher resource requirements

**Use Cases**:
- Real-time fraud detection
- Live dashboards
- IoT data processing
- Real-time recommendations
    `,
    subtopics: [
      {
        id: 'pipeline-components',
        title: 'Data Pipeline Components',
        content: `
Understanding the core components of data pipelines helps in designing effective data processing systems.
        `,
        keyPoints: [
          'Data Sources: Where data originates',
          'Data Processing: Transformation and validation',
          'Data Storage: Where processed data is stored',
          'Data Consumption: How data is used'
        ],
        estimatedTime: '5 minutes'
      },
      {
        id: 'batch-processing',
        title: 'Batch Processing',
        content: `
Batch processing is ideal for large volumes of data that don\'t require real-time processing.
        `,
        keyPoints: [
          'Processes data in large chunks',
          'Scheduled intervals (hourly, daily, weekly)',
          'Higher latency but more efficient',
          'Better for complex transformations',
          'More cost-effective for large datasets'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'streaming-processing',
        title: 'Streaming Processing',
        content: `
Streaming processing enables real-time data analysis and immediate insights.
        `,
        keyPoints: [
          'Processes data immediately as it arrives',
          'Low latency for real-time insights',
          'More complex to implement and maintain',
          'Higher resource requirements',
          'Ideal for real-time applications'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'database-basics',
    title: 'Basics of Databases (SQL vs NoSQL)',
    description: 'Learn about different types of databases and when to use SQL vs NoSQL solutions.',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    content: `
# Database Basics: SQL vs NoSQL

## SQL Databases (Relational)
**Structure**: Organized in tables with relationships

**Characteristics**:
- ACID compliance (Atomicity, Consistency, Isolation, Durability)
- Structured schema with predefined relationships
- SQL query language
- Strong consistency guarantees
- Vertical scaling (scale up)

**Popular SQL Databases**:
- PostgreSQL
- MySQL
- Oracle
- Microsoft SQL Server
- SQLite

**Use Cases**:
- Transactional applications
- Financial systems
- CRM systems
- Applications requiring complex queries

## NoSQL Databases
**Structure**: Various data models (document, key-value, column-family, graph)

**Characteristics**:
- Flexible schema
- Horizontal scaling (scale out)
- Eventual consistency (in most cases)
- Specialized for specific use cases
- High performance for specific workloads

**Types of NoSQL**:
1. **Document Stores**: MongoDB, CouchDB
2. **Key-Value Stores**: Redis, DynamoDB
3. **Column-Family**: Cassandra, HBase
4. **Graph Databases**: Neo4j, Amazon Neptune

**Use Cases**:
- Big data applications
- Real-time analytics
- Content management systems
- IoT data storage
- Social media platforms
    `,
    subtopics: [
      {
        id: 'sql-databases',
        title: 'SQL Databases (Relational)',
        content: `
SQL databases are the traditional choice for structured data with complex relationships and ACID requirements.
        `,
        keyPoints: [
          'ACID compliance for data integrity',
          'Structured schema with relationships',
          'SQL query language',
          'Strong consistency guarantees',
          'Vertical scaling (scale up)'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'nosql-databases',
        title: 'NoSQL Databases',
        content: `
NoSQL databases provide flexibility and scalability for modern applications with diverse data requirements.
        `,
        keyPoints: [
          'Flexible schema design',
          'Horizontal scaling (scale out)',
          'Eventual consistency model',
          'Specialized for specific use cases',
          'High performance for specific workloads'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'database-selection',
        title: 'Choosing the Right Database',
        content: `
Selecting the appropriate database depends on your data structure, scalability needs, and consistency requirements.
        `,
        keyPoints: [
          'Consider data structure and relationships',
          'Evaluate scalability requirements',
          'Assess consistency needs',
          'Factor in performance requirements',
          'Consider operational complexity'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'cloud-basics',
    title: 'Cloud Basics (AWS, GCP, Azure Overview)',
    description: 'Learn about major cloud platforms and their data engineering services.',
    difficulty: 'Beginner',
    estimatedTime: '25 minutes',
    content: `
# Cloud Platforms for Data Engineering

## Amazon Web Services (AWS)
**Data Services**:
- **Storage**: S3, EBS, Glacier
- **Databases**: RDS, DynamoDB, Redshift, Aurora
- **Processing**: EMR, Lambda, Glue
- **Analytics**: Athena, QuickSight, Kinesis
- **ML/AI**: SageMaker, Comprehend, Rekognition

**Strengths**:
- Largest market share
- Comprehensive service portfolio
- Strong enterprise focus
- Global infrastructure

## Google Cloud Platform (GCP)
**Data Services**:
- **Storage**: Cloud Storage, Persistent Disk
- **Databases**: Cloud SQL, Firestore, BigQuery
- **Processing**: Dataflow, Dataproc, Cloud Functions
- **Analytics**: BigQuery, Data Studio, Pub/Sub
- **ML/AI**: Vertex AI, AutoML, TensorFlow

**Strengths**:
- Strong data analytics capabilities
- Advanced ML/AI services
- BigQuery for data warehousing
- Strong open-source integration

## Microsoft Azure
**Data Services**:
- **Storage**: Blob Storage, Data Lake Storage
- **Databases**: SQL Database, Cosmos DB, Synapse
- **Processing**: HDInsight, Data Factory, Functions
- **Analytics**: Power BI, Stream Analytics
- **ML/AI**: Azure ML, Cognitive Services

**Strengths**:
- Strong enterprise integration
- Hybrid cloud capabilities
- Windows ecosystem integration
- Strong BI tools (Power BI)
    `,
    subtopics: [
      {
        id: 'aws-overview',
        title: 'Amazon Web Services (AWS)',
        content: `
AWS provides the most comprehensive set of data engineering services with global infrastructure and strong enterprise support.
        `,
        keyPoints: [
          'Largest cloud market share',
          'Comprehensive service portfolio',
          'Strong enterprise focus',
          'Global infrastructure',
          'Extensive data services ecosystem'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'gcp-overview',
        title: 'Google Cloud Platform (GCP)',
        content: `
GCP excels in data analytics and machine learning with services like BigQuery and advanced AI capabilities.
        `,
        keyPoints: [
          'Strong data analytics capabilities',
          'Advanced ML/AI services',
          'BigQuery for data warehousing',
          'Strong open-source integration',
          'Innovative data processing services'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'azure-overview',
        title: 'Microsoft Azure',
        content: `
Azure provides strong enterprise integration and hybrid cloud capabilities with excellent Windows ecosystem support.
        `,
        keyPoints: [
          'Strong enterprise integration',
          'Hybrid cloud capabilities',
          'Windows ecosystem integration',
          'Strong BI tools (Power BI)',
          'Comprehensive data services'
        ],
        estimatedTime: '9 minutes'
      }
    ]
  },
  {
    id: 'etl-elt-concept',
    title: 'Intro to ETL/ELT Concept',
    description: 'Learn about ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) data processing patterns.',
    difficulty: 'Beginner',
    estimatedTime: '20 minutes',
    content: `
# ETL vs ELT: Data Processing Patterns

## ETL (Extract, Transform, Load)
**Process Flow**:
1. **Extract**: Pull data from source systems
2. **Transform**: Clean, filter, and transform data
3. **Load**: Load transformed data into target system

**Characteristics**:
- Data transformation happens before loading
- Requires significant processing power
- Traditional approach for data warehousing
- Good for structured, clean data
- Slower for large datasets

**Use Cases**:
- Traditional data warehouses
- Structured data processing
- When transformation logic is complex
- Legacy systems integration

## ELT (Extract, Load, Transform)
**Process Flow**:
1. **Extract**: Pull data from source systems
2. **Load**: Load raw data into target system
3. **Transform**: Transform data within the target system

**Characteristics**:
- Data transformation happens after loading
- Leverages target system's processing power
- Modern approach for data lakes
- Better for large, diverse datasets
- Faster for big data processing

**Use Cases**:
- Modern data lakes
- Big data processing
- When you need flexibility in transformations
- Cloud-based data platforms

## Key Differences
| Aspect | ETL | ELT |
|--------|-----|-----|
| Processing Location | Separate processing engine | Target system |
| Data Volume | Limited by processing engine | Limited by target system |
| Flexibility | Fixed transformation logic | Flexible, on-demand transformations |
| Cost | Higher processing costs | Lower processing costs |
| Speed | Slower for large datasets | Faster for large datasets |
    `,
    subtopics: [
      {
        id: 'etl-process',
        title: 'ETL (Extract, Transform, Load)',
        content: `
ETL is the traditional approach where data is transformed before being loaded into the target system.
        `,
        keyPoints: [
          'Extract data from source systems',
          'Transform data before loading',
          'Load transformed data into target',
          'Requires separate processing engine',
          'Traditional data warehousing approach'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'elt-process',
        title: 'ELT (Extract, Load, Transform)',
        content: `
ELT is the modern approach where raw data is loaded first, then transformed within the target system.
        `,
        keyPoints: [
          'Extract data from source systems',
          'Load raw data into target system',
          'Transform data within target system',
          'Leverages target system processing power',
          'Modern data lake approach'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'etl-elt-comparison',
        title: 'ETL vs ELT Comparison',
        content: `
Understanding the differences between ETL and ELT helps choose the right approach for your data processing needs.
        `,
        keyPoints: [
          'ETL: Transform before load, traditional approach',
          'ELT: Load then transform, modern approach',
          'ETL: Limited by processing engine capacity',
          'ELT: Limited by target system capacity',
          'Choose based on data volume and flexibility needs'
        ],
        estimatedTime: '4 minutes'
      }
    ]
  }
]; 