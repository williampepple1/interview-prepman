import { Topic } from '../../types';

export const dataEngineeringModule3Topics: Topic[] = [
  {
    id: 'data-warehouse-fundamentals',
    title: 'Data Warehouse Fundamentals',
    description: 'Learn the core concepts of data warehousing, including design principles, architecture patterns, and implementation strategies.',
    difficulty: 'Intermediate',
    estimatedTime: '30 minutes',
    content: `
# Data Warehouse Fundamentals

A data warehouse is a centralized repository that stores integrated data from multiple sources, designed for querying and analysis rather than transaction processing.

## Key Characteristics
- **Subject-Oriented**: Organized around business subjects (customers, products, sales)
- **Integrated**: Data from multiple sources is combined and standardized
- **Non-Volatile**: Data is read-only and doesn't change frequently
- **Time-Variant**: Historical data is maintained for trend analysis

## Data Warehouse Architecture
- **Source Systems**: Operational databases, applications, external sources
- **ETL/ELT Process**: Data extraction, transformation, and loading
- **Data Warehouse**: Centralized storage with optimized schema
- **Data Marts**: Subject-specific subsets for specific business units
- **Analytics Layer**: BI tools, reporting, and analysis applications

## Design Principles
- **Dimensional Modeling**: Star and snowflake schemas
- **Normalization vs Denormalization**: Balancing performance and storage
- **Partitioning**: Dividing large tables for better performance
- **Indexing**: Optimizing query performance
- **Data Quality**: Ensuring accuracy and consistency
    `,
    subtopics: [
      {
        id: 'warehouse-characteristics',
        title: 'Data Warehouse Characteristics',
        content: `
Understanding the fundamental characteristics that define a data warehouse and distinguish it from operational databases.
        `,
        keyPoints: [
          'Subject-Oriented: Organized around business subjects',
          'Integrated: Data from multiple sources combined and standardized',
          'Non-Volatile: Read-only data that doesn\'t change frequently',
          'Time-Variant: Historical data maintained for trend analysis',
          'Optimized for querying and analysis, not transactions'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'warehouse-architecture',
        title: 'Data Warehouse Architecture',
        content: `
The architectural components that make up a complete data warehouse solution.
        `,
        keyPoints: [
          'Source Systems: Operational databases, applications, external sources',
          'ETL/ELT Process: Data extraction, transformation, and loading',
          'Data Warehouse: Centralized storage with optimized schema',
          'Data Marts: Subject-specific subsets for business units',
          'Analytics Layer: BI tools, reporting, and analysis applications'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'design-principles',
        title: 'Design Principles',
        content: `
Key design principles and patterns used in data warehouse development.
        `,
        keyPoints: [
          'Dimensional Modeling: Star and snowflake schemas',
          'Normalization vs Denormalization: Balancing performance and storage',
          'Partitioning: Dividing large tables for better performance',
          'Indexing: Optimizing query performance',
          'Data Quality: Ensuring accuracy and consistency'
        ],
        estimatedTime: '12 minutes'
      }
    ]
  },
  {
    id: 'dimensional-modeling',
    title: 'Dimensional Modeling',
    description: 'Master dimensional modeling techniques including star schemas, snowflake schemas, and fact/dimension table design.',
    difficulty: 'Intermediate',
    estimatedTime: '35 minutes',
    content: `
# Dimensional Modeling

Dimensional modeling is a design technique used in data warehousing to organize data into fact and dimension tables for optimal query performance.

## Star Schema
- **Fact Table**: Contains business metrics and foreign keys to dimensions
- **Dimension Tables**: Contains descriptive attributes and primary keys
- **Simple Structure**: Easy to understand and query
- **Denormalized**: Reduces joins for better performance

## Snowflake Schema
- **Normalized Dimensions**: Dimension tables are normalized
- **Reduced Storage**: Less data redundancy
- **More Complex**: Additional joins required
- **Better for Large Dimensions**: When dimensions have many attributes

## Fact Tables
- **Grain**: Level of detail (e.g., daily, transaction-level)
- **Measures**: Numeric values to be aggregated
- **Foreign Keys**: References to dimension tables
- **Types**: Transaction facts, periodic snapshots, accumulating snapshots

## Dimension Tables
- **Surrogate Keys**: System-generated primary keys
- **Natural Keys**: Business keys from source systems
- **Slowly Changing Dimensions**: Handling changes over time
- **Junk Dimensions**: Combining multiple small dimensions
    `,
    subtopics: [
      {
        id: 'star-schema',
        title: 'Star Schema Design',
        content: `
Star schema is the most common dimensional modeling pattern, featuring a central fact table surrounded by dimension tables.
        `,
        keyPoints: [
          'Fact Table: Contains business metrics and foreign keys',
          'Dimension Tables: Contains descriptive attributes',
          'Simple Structure: Easy to understand and query',
          'Denormalized: Reduces joins for better performance',
          'Ideal for most data warehouse scenarios'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'snowflake-schema',
        title: 'Snowflake Schema Design',
        content: `
Snowflake schema normalizes dimension tables to reduce storage and improve data consistency.
        `,
        keyPoints: [
          'Normalized Dimensions: Dimension tables are normalized',
          'Reduced Storage: Less data redundancy',
          'More Complex: Additional joins required',
          'Better for Large Dimensions: When dimensions have many attributes',
          'Trade-off between storage and query complexity'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'fact-dimension-design',
        title: 'Fact and Dimension Table Design',
        content: `
Understanding how to design effective fact and dimension tables for optimal performance and usability.
        `,
        keyPoints: [
          'Fact Tables: Grain, measures, foreign keys',
          'Dimension Tables: Surrogate keys, natural keys, attributes',
          'Slowly Changing Dimensions: Handling changes over time',
          'Junk Dimensions: Combining multiple small dimensions',
          'Design for query performance and business needs'
        ],
        estimatedTime: '15 minutes'
      }
    ]
  },
  {
    id: 'data-lake-fundamentals',
    title: 'Data Lake Fundamentals',
    description: 'Learn about data lakes, their architecture, and how they complement traditional data warehouses.',
    difficulty: 'Intermediate',
    estimatedTime: '25 minutes',
    content: `
# Data Lake Fundamentals

A data lake is a centralized repository that stores all types of data (structured, semi-structured, and unstructured) in their raw format.

## Data Lake vs Data Warehouse
- **Data Lake**: Raw data, schema-on-read, flexible storage
- **Data Warehouse**: Processed data, schema-on-write, structured storage
- **Use Cases**: Data lakes for exploration, warehouses for reporting
- **Cost**: Data lakes are typically cheaper for large volumes

## Data Lake Architecture
- **Storage Layer**: Distributed file systems (HDFS, S3, ADLS)
- **Processing Layer**: Batch and streaming processing engines
- **Catalog Layer**: Metadata management and data discovery
- **Access Layer**: SQL engines, APIs, and analytics tools

## Data Lake Zones
- **Raw Zone**: Untouched data from source systems
- **Staging Zone**: Data being processed and validated
- **Curated Zone**: Clean, processed data ready for analysis
- **Consumption Zone**: Data formatted for specific use cases

## Best Practices
- **Data Governance**: Policies, standards, and quality controls
- **Security**: Access controls, encryption, and compliance
- **Metadata Management**: Data cataloging and lineage tracking
- **Performance Optimization**: Partitioning, compression, and caching
    `,
    subtopics: [
      {
        id: 'lake-vs-warehouse',
        title: 'Data Lake vs Data Warehouse',
        content: `
Understanding the key differences between data lakes and data warehouses helps choose the right solution for your use case.
        `,
        keyPoints: [
          'Data Lake: Raw data, schema-on-read, flexible storage',
          'Data Warehouse: Processed data, schema-on-write, structured storage',
          'Use Cases: Data lakes for exploration, warehouses for reporting',
          'Cost: Data lakes are typically cheaper for large volumes',
          'Often used together in modern data architectures'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'lake-architecture',
        title: 'Data Lake Architecture',
        content: `
The architectural layers that make up a comprehensive data lake solution.
        `,
        keyPoints: [
          'Storage Layer: Distributed file systems (HDFS, S3, ADLS)',
          'Processing Layer: Batch and streaming processing engines',
          'Catalog Layer: Metadata management and data discovery',
          'Access Layer: SQL engines, APIs, and analytics tools',
          'Layered approach for scalability and flexibility'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'lake-zones',
        title: 'Data Lake Zones',
        content: `
Organizing data into zones helps maintain data quality and enables efficient processing workflows.
        `,
        keyPoints: [
          'Raw Zone: Untouched data from source systems',
          'Staging Zone: Data being processed and validated',
          'Curated Zone: Clean, processed data ready for analysis',
          'Consumption Zone: Data formatted for specific use cases',
          'Zone-based approach for data lifecycle management'
        ],
        estimatedTime: '9 minutes'
      }
    ]
  },
  {
    id: 'modern-data-architecture',
    title: 'Modern Data Architecture Patterns',
    description: 'Explore modern data architecture patterns including data mesh, lakehouse, and hybrid approaches.',
    difficulty: 'Advanced',
    estimatedTime: '30 minutes',
    content: `
# Modern Data Architecture Patterns

Modern data architectures combine the best of data warehouses and data lakes to create flexible, scalable solutions.

## Data Lakehouse
- **Combines**: Data lake storage with warehouse capabilities
- **ACID Transactions**: Ensures data consistency and reliability
- **Schema Evolution**: Flexible schema management
- **Performance**: Optimized for both batch and streaming
- **Examples**: Delta Lake, Apache Iceberg, Apache Hudi

## Data Mesh
- **Domain-Oriented**: Data ownership by business domains
- **Self-Serve**: Teams manage their own data products
- **Federated**: Distributed data architecture
- **Standards**: Common data contracts and governance
- **Scalability**: Horizontal scaling across domains

## Hybrid Architectures
- **Multi-Cloud**: Leveraging multiple cloud providers
- **On-Premises + Cloud**: Hybrid deployment models
- **Real-time + Batch**: Combining streaming and batch processing
- **Data Virtualization**: Unified access to distributed data

## Implementation Considerations
- **Data Governance**: Centralized policies with distributed execution
- **Security**: Zero-trust security models
- **Performance**: Optimizing for different workload types
- **Cost Management**: Balancing performance and cost
    `,
    subtopics: [
      {
        id: 'data-lakehouse',
        title: 'Data Lakehouse Architecture',
        content: `
Data lakehouse combines the flexibility of data lakes with the reliability and performance of data warehouses.
        `,
        keyPoints: [
          'Combines: Data lake storage with warehouse capabilities',
          'ACID Transactions: Ensures data consistency and reliability',
          'Schema Evolution: Flexible schema management',
          'Performance: Optimized for both batch and streaming',
          'Examples: Delta Lake, Apache Iceberg, Apache Hudi'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'data-mesh',
        title: 'Data Mesh Architecture',
        content: `
Data mesh is a domain-oriented, self-serve data architecture that scales horizontally across business domains.
        `,
        keyPoints: [
          'Domain-Oriented: Data ownership by business domains',
          'Self-Serve: Teams manage their own data products',
          'Federated: Distributed data architecture',
          'Standards: Common data contracts and governance',
          'Scalability: Horizontal scaling across domains'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'hybrid-architectures',
        title: 'Hybrid Data Architectures',
        content: `
Hybrid architectures combine multiple approaches to meet complex business requirements.
        `,
        keyPoints: [
          'Multi-Cloud: Leveraging multiple cloud providers',
          'On-Premises + Cloud: Hybrid deployment models',
          'Real-time + Batch: Combining streaming and batch processing',
          'Data Virtualization: Unified access to distributed data',
          'Flexibility: Choose the right tool for each use case'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'data-modeling-tools',
    title: 'Data Modeling Tools and Techniques',
    description: 'Learn about data modeling tools, techniques, and best practices for designing effective data structures.',
    difficulty: 'Intermediate',
    estimatedTime: '25 minutes',
    content: `
# Data Modeling Tools and Techniques

Data modeling tools help design, document, and manage data structures for warehouses and data lakes.

## Modeling Tools
- **ERwin**: Enterprise data modeling and design
- **PowerDesigner**: Comprehensive data modeling platform
- **Lucidchart**: Collaborative diagramming and modeling
- **Draw.io**: Free diagramming tool
- **dbdiagram.io**: Database schema design tool

## Modeling Techniques
- **Conceptual Modeling**: High-level business concepts
- **Logical Modeling**: Detailed business rules and relationships
- **Physical Modeling**: Database-specific implementation
- **Reverse Engineering**: Creating models from existing databases
- **Forward Engineering**: Generating DDL from models

## Best Practices
- **Naming Conventions**: Consistent naming across all objects
- **Documentation**: Comprehensive model documentation
- **Version Control**: Managing model versions and changes
- **Collaboration**: Team-based modeling and review
- **Standards**: Following industry and organizational standards

## Model Validation
- **Data Profiling**: Understanding data characteristics
- **Quality Checks**: Validating model against business rules
- **Performance Testing**: Ensuring optimal query performance
- **User Acceptance**: Getting stakeholder approval
- **Iterative Refinement**: Continuous improvement process
    `,
    subtopics: [
      {
        id: 'modeling-tools',
        title: 'Data Modeling Tools',
        content: `
Various tools are available for data modeling, each with different features and capabilities.
        `,
        keyPoints: [
          'ERwin: Enterprise data modeling and design',
          'PowerDesigner: Comprehensive data modeling platform',
          'Lucidchart: Collaborative diagramming and modeling',
          'Draw.io: Free diagramming tool',
          'dbdiagram.io: Database schema design tool'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'modeling-techniques',
        title: 'Modeling Techniques',
        content: `
Different levels of modeling help create comprehensive data architectures.
        `,
        keyPoints: [
          'Conceptual Modeling: High-level business concepts',
          'Logical Modeling: Detailed business rules and relationships',
          'Physical Modeling: Database-specific implementation',
          'Reverse Engineering: Creating models from existing databases',
          'Forward Engineering: Generating DDL from models'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'modeling-best-practices',
        title: 'Modeling Best Practices',
        content: `
Following best practices ensures effective and maintainable data models.
        `,
        keyPoints: [
          'Naming Conventions: Consistent naming across all objects',
          'Documentation: Comprehensive model documentation',
          'Version Control: Managing model versions and changes',
          'Collaboration: Team-based modeling and review',
          'Standards: Following industry and organizational standards'
        ],
        estimatedTime: '9 minutes'
      }
    ]
  }
]; 