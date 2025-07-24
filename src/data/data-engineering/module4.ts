import { Topic } from '../../types';

export const dataEngineeringModule4Topics: Topic[] = [
  {
    id: 'hadoop-ecosystem',
    title: 'Hadoop Ecosystem',
    description: 'Learn about the Hadoop ecosystem, including HDFS, MapReduce, YARN, and related technologies for distributed data processing.',
    difficulty: 'Intermediate',
    estimatedTime: '40 minutes',
    content: `
# Hadoop Ecosystem

The Hadoop ecosystem is a collection of open-source tools and frameworks for distributed storage and processing of big data.

## Core Components
- **HDFS (Hadoop Distributed File System)**: Distributed storage system
- **MapReduce**: Programming model for distributed processing
- **YARN (Yet Another Resource Negotiator)**: Resource management and job scheduling
- **Hadoop Common**: Shared utilities and libraries

## HDFS Architecture
- **NameNode**: Manages file system metadata and namespace
- **DataNode**: Stores actual data blocks
- **Secondary NameNode**: Helps with metadata management
- **Block Replication**: Default 3x replication for fault tolerance
- **Rack Awareness**: Optimizes data placement across racks

## MapReduce Framework
- **Map Phase**: Processes input data and produces key-value pairs
- **Shuffle Phase**: Groups and sorts data by keys
- **Reduce Phase**: Aggregates and processes grouped data
- **Job Tracker**: Manages job execution and task scheduling
- **Task Tracker**: Executes individual tasks on data nodes

## Hadoop Ecosystem Tools
- **Hive**: SQL-like interface for data warehousing
- **Pig**: High-level scripting language for data analysis
- **HBase**: NoSQL database for random read/write access
- **ZooKeeper**: Distributed coordination service
- **Sqoop**: Data transfer between Hadoop and relational databases
    `,
    subtopics: [
      {
        id: 'hdfs-architecture',
        title: 'HDFS Architecture',
        content: `
HDFS is the primary storage system in Hadoop, designed for storing large files across multiple machines.
        `,
        keyPoints: [
          'NameNode: Manages file system metadata and namespace',
          'DataNode: Stores actual data blocks',
          'Secondary NameNode: Helps with metadata management',
          'Block Replication: Default 3x replication for fault tolerance',
          'Rack Awareness: Optimizes data placement across racks'
        ],
        estimatedTime: '12 minutes'
      },
      {
        id: 'mapreduce-framework',
        title: 'MapReduce Framework',
        content: `
MapReduce is a programming model for processing large datasets in parallel across a distributed cluster.
        `,
        keyPoints: [
          'Map Phase: Processes input data and produces key-value pairs',
          'Shuffle Phase: Groups and sorts data by keys',
          'Reduce Phase: Aggregates and processes grouped data',
          'Job Tracker: Manages job execution and task scheduling',
          'Task Tracker: Executes individual tasks on data nodes'
        ],
        estimatedTime: '15 minutes'
      },
      {
        id: 'hadoop-tools',
        title: 'Hadoop Ecosystem Tools',
        content: `
Various tools built on top of Hadoop provide different capabilities for data processing and analysis.
        `,
        keyPoints: [
          'Hive: SQL-like interface for data warehousing',
          'Pig: High-level scripting language for data analysis',
          'HBase: NoSQL database for random read/write access',
          'ZooKeeper: Distributed coordination service',
          'Sqoop: Data transfer between Hadoop and relational databases'
        ],
        estimatedTime: '13 minutes'
      }
    ]
  },
  {
    id: 'apache-spark',
    title: 'Apache Spark',
    description: 'Master Apache Spark for fast, in-memory data processing, including RDDs, DataFrames, and Spark SQL.',
    difficulty: 'Intermediate',
    estimatedTime: '45 minutes',
    content: `
# Apache Spark

Apache Spark is a unified analytics engine for large-scale data processing, offering speed, ease of use, and sophisticated analytics.

## Spark Architecture
- **Driver Program**: Coordinates the application execution
- **Cluster Manager**: Manages cluster resources (YARN, Mesos, Standalone)
- **Worker Nodes**: Execute tasks and store data
- **Executor**: Runs tasks and stores data in memory
- **RDD (Resilient Distributed Dataset)**: Core data structure

## Spark Components
- **Spark Core**: Basic functionality and RDDs
- **Spark SQL**: SQL and structured data processing
- **Spark Streaming**: Real-time data processing
- **MLlib**: Machine learning library
- **GraphX**: Graph processing and analytics

## RDD Operations
- **Transformations**: Create new RDDs (map, filter, groupBy)
- **Actions**: Return values or write data (count, collect, save)
- **Lazy Evaluation**: Transformations are not executed until actions
- **Lineage**: Track dependencies for fault tolerance
- **Caching**: Store RDDs in memory for reuse

## Spark SQL and DataFrames
- **DataFrame**: Distributed collection of data organized in columns
- **Dataset**: Type-safe DataFrame with object-oriented interface
- **Catalyst Optimizer**: Query optimization engine
- **Tungsten**: Memory management and CPU optimization
- **Structured Streaming**: Real-time processing with SQL
    `,
    subtopics: [
      {
        id: 'spark-architecture',
        title: 'Spark Architecture',
        content: `
Understanding Spark\'s distributed architecture and how it processes data across a cluster.
        `,
        keyPoints: [
          'Driver Program: Coordinates the application execution',
          'Cluster Manager: Manages cluster resources (YARN, Mesos, Standalone)',
          'Worker Nodes: Execute tasks and store data',
          'Executor: Runs tasks and stores data in memory',
          'RDD: Core data structure for distributed computing'
        ],
        estimatedTime: '12 minutes'
      },
      {
        id: 'spark-components',
        title: 'Spark Components',
        content: `
Spark provides multiple components for different types of data processing and analytics.
        `,
        keyPoints: [
          'Spark Core: Basic functionality and RDDs',
          'Spark SQL: SQL and structured data processing',
          'Spark Streaming: Real-time data processing',
          'MLlib: Machine learning library',
          'GraphX: Graph processing and analytics'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'rdd-operations',
        title: 'RDD Operations',
        content: `
RDDs are the fundamental data structure in Spark, supporting both transformations and actions.
        `,
        keyPoints: [
          'Transformations: Create new RDDs (map, filter, groupBy)',
          'Actions: Return values or write data (count, collect, save)',
          'Lazy Evaluation: Transformations are not executed until actions',
          'Lineage: Track dependencies for fault tolerance',
          'Caching: Store RDDs in memory for reuse'
        ],
        estimatedTime: '13 minutes'
      },
      {
        id: 'spark-sql-dataframes',
        title: 'Spark SQL and DataFrames',
        content: `
Spark SQL provides a structured interface for data processing with DataFrames and Datasets.
        `,
        keyPoints: [
          'DataFrame: Distributed collection of data organized in columns',
          'Dataset: Type-safe DataFrame with object-oriented interface',
          'Catalyst Optimizer: Query optimization engine',
          'Tungsten: Memory management and CPU optimization',
          'Structured Streaming: Real-time processing with SQL'
        ],
        estimatedTime: '10 minutes'
      }
    ]
  },
  {
    id: 'distributed-computing',
    title: 'Distributed Computing Concepts',
    description: 'Understand fundamental concepts of distributed computing, including consistency, fault tolerance, and scalability.',
    difficulty: 'Advanced',
    estimatedTime: '35 minutes',
    content: `
# Distributed Computing Concepts

Distributed computing involves coordinating multiple computers to work together on a common task.

## Distributed System Challenges
- **Network Partitions**: Communication failures between nodes
- **Clock Synchronization**: Coordinating time across distributed nodes
- **Consistency**: Ensuring data consistency across replicas
- **Fault Tolerance**: Handling node failures gracefully
- **Scalability**: Adding resources to handle increased load

## Consistency Models
- **Strong Consistency**: All nodes see the same data at the same time
- **Eventual Consistency**: All nodes will eventually see the same data
- **CAP Theorem**: Can only guarantee two of Consistency, Availability, Partition tolerance
- **ACID Properties**: Atomicity, Consistency, Isolation, Durability
- **BASE Properties**: Basically Available, Soft state, Eventual consistency

## Fault Tolerance Strategies
- **Replication**: Storing multiple copies of data
- **Redundancy**: Having backup systems and components
- **Checkpointing**: Saving system state for recovery
- **Heartbeats**: Monitoring node health and status
- **Circuit Breakers**: Preventing cascading failures

## Scalability Patterns
- **Horizontal Scaling**: Adding more machines to the cluster
- **Vertical Scaling**: Adding more resources to existing machines
- **Load Balancing**: Distributing work across multiple nodes
- **Sharding**: Partitioning data across multiple databases
- **Caching**: Storing frequently accessed data in memory
    `,
    subtopics: [
      {
        id: 'distributed-challenges',
        title: 'Distributed System Challenges',
        content: `
Distributed systems face unique challenges that don\'t exist in single-machine systems.
        `,
        keyPoints: [
          'Network Partitions: Communication failures between nodes',
          'Clock Synchronization: Coordinating time across distributed nodes',
          'Consistency: Ensuring data consistency across replicas',
          'Fault Tolerance: Handling node failures gracefully',
          'Scalability: Adding resources to handle increased load'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'consistency-models',
        title: 'Consistency Models',
        content: `
Different consistency models provide various trade-offs between performance and data accuracy.
        `,
        keyPoints: [
          'Strong Consistency: All nodes see the same data at the same time',
          'Eventual Consistency: All nodes will eventually see the same data',
          'CAP Theorem: Can only guarantee two of Consistency, Availability, Partition tolerance',
          'ACID Properties: Atomicity, Consistency, Isolation, Durability',
          'BASE Properties: Basically Available, Soft state, Eventual consistency'
        ],
        estimatedTime: '12 minutes'
      },
      {
        id: 'fault-tolerance',
        title: 'Fault Tolerance Strategies',
        content: `
Fault tolerance ensures that distributed systems continue operating despite component failures.
        `,
        keyPoints: [
          'Replication: Storing multiple copies of data',
          'Redundancy: Having backup systems and components',
          'Checkpointing: Saving system state for recovery',
          'Heartbeats: Monitoring node health and status',
          'Circuit Breakers: Preventing cascading failures'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'scalability-patterns',
        title: 'Scalability Patterns',
        content: `
Scalability patterns help systems handle increased load and data volume effectively.
        `,
        keyPoints: [
          'Horizontal Scaling: Adding more machines to the cluster',
          'Vertical Scaling: Adding more resources to existing machines',
          'Load Balancing: Distributing work across multiple nodes',
          'Sharding: Partitioning data across multiple databases',
          'Caching: Storing frequently accessed data in memory'
        ],
        estimatedTime: '5 minutes'
      }
    ]
  },
  {
    id: 'streaming-technologies',
    title: 'Streaming Data Technologies',
    description: 'Learn about real-time data processing technologies including Apache Kafka, Apache Flink, and streaming architectures.',
    difficulty: 'Advanced',
    estimatedTime: '40 minutes',
    content: `
# Streaming Data Technologies

Streaming technologies enable real-time processing of data as it flows through the system.

## Apache Kafka
- **Distributed Streaming Platform**: Publish-subscribe messaging system
- **Topics and Partitions**: Logical channels for organizing messages
- **Producers and Consumers**: Applications that write and read data
- **Brokers**: Servers that store and serve data
- **ZooKeeper**: Coordination service for Kafka cluster

## Apache Flink
- **Stream Processing Engine**: Unified batch and stream processing
- **Event Time Processing**: Handling out-of-order events
- **Stateful Computations**: Maintaining state across events
- **Checkpointing**: Fault tolerance and exactly-once semantics
- **CEP (Complex Event Processing)**: Pattern detection in streams

## Streaming Architectures
- **Lambda Architecture**: Batch and speed layers
- **Kappa Architecture**: Single stream processing layer
- **Event Sourcing**: Storing all events as the source of truth
- **CQRS**: Command Query Responsibility Segregation
- **Microservices**: Event-driven service communication

## Real-time Analytics
- **Window Functions**: Processing data over time windows
- **Sliding Windows**: Overlapping time windows
- **Tumbling Windows**: Non-overlapping time windows
- **Session Windows**: Activity-based windows
- **Watermarks**: Handling late-arriving data
    `,
    subtopics: [
      {
        id: 'apache-kafka',
        title: 'Apache Kafka',
        content: `
Kafka is a distributed streaming platform that enables building real-time data pipelines and streaming applications.
        `,
        keyPoints: [
          'Distributed Streaming Platform: Publish-subscribe messaging system',
          'Topics and Partitions: Logical channels for organizing messages',
          'Producers and Consumers: Applications that write and read data',
          'Brokers: Servers that store and serve data',
          'ZooKeeper: Coordination service for Kafka cluster'
        ],
        estimatedTime: '12 minutes'
      },
      {
        id: 'apache-flink',
        title: 'Apache Flink',
        content: `
Flink is a stream processing engine that provides unified batch and stream processing capabilities.
        `,
        keyPoints: [
          'Stream Processing Engine: Unified batch and stream processing',
          'Event Time Processing: Handling out-of-order events',
          'Stateful Computations: Maintaining state across events',
          'Checkpointing: Fault tolerance and exactly-once semantics',
          'CEP: Complex Event Processing for pattern detection'
        ],
        estimatedTime: '12 minutes'
      },
      {
        id: 'streaming-architectures',
        title: 'Streaming Architectures',
        content: `
Different architectural patterns for building real-time data processing systems.
        `,
        keyPoints: [
          'Lambda Architecture: Batch and speed layers',
          'Kappa Architecture: Single stream processing layer',
          'Event Sourcing: Storing all events as the source of truth',
          'CQRS: Command Query Responsibility Segregation',
          'Microservices: Event-driven service communication'
        ],
        estimatedTime: '10 minutes'
      },
      {
        id: 'real-time-analytics',
        title: 'Real-time Analytics',
        content: `
Techniques and patterns for performing analytics on streaming data in real-time.
        `,
        keyPoints: [
          'Window Functions: Processing data over time windows',
          'Sliding Windows: Overlapping time windows',
          'Tumbling Windows: Non-overlapping time windows',
          'Session Windows: Activity-based windows',
          'Watermarks: Handling late-arriving data'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  },
  {
    id: 'cloud-big-data',
    title: 'Cloud Big Data Services',
    description: 'Explore cloud-based big data services including AWS EMR, Azure HDInsight, and Google Cloud Dataproc.',
    difficulty: 'Intermediate',
    estimatedTime: '30 minutes',
    content: `
# Cloud Big Data Services

Cloud providers offer managed big data services that simplify deployment and management of distributed computing clusters.

## AWS Big Data Services
- **Amazon EMR**: Managed Hadoop and Spark clusters
- **Amazon Kinesis**: Real-time streaming data platform
- **Amazon Redshift**: Data warehouse service
- **Amazon Athena**: Serverless query service
- **AWS Glue**: ETL service for data preparation

## Azure Big Data Services
- **Azure HDInsight**: Managed Hadoop, Spark, and Kafka clusters
- **Azure Stream Analytics**: Real-time stream processing
- **Azure Synapse Analytics**: Data warehouse and analytics service
- **Azure Data Factory**: Data integration and ETL service
- **Azure Databricks**: Apache Spark-based analytics platform

## Google Cloud Big Data Services
- **Google Cloud Dataproc**: Managed Hadoop and Spark clusters
- **Google Cloud Dataflow**: Stream and batch data processing
- **BigQuery**: Serverless data warehouse
- **Pub/Sub**: Asynchronous messaging service
- **Cloud Composer**: Managed Apache Airflow

## Cloud-Native Considerations
- **Auto-scaling**: Automatic cluster size adjustment
- **Managed Services**: Reduced operational overhead
- **Pay-per-use**: Cost optimization based on usage
- **Integration**: Native integration with other cloud services
- **Security**: Built-in security and compliance features
    `,
    subtopics: [
      {
        id: 'aws-big-data',
        title: 'AWS Big Data Services',
        content: `
Amazon Web Services provides comprehensive big data services for various use cases.
        `,
        keyPoints: [
          'Amazon EMR: Managed Hadoop and Spark clusters',
          'Amazon Kinesis: Real-time streaming data platform',
          'Amazon Redshift: Data warehouse service',
          'Amazon Athena: Serverless query service',
          'AWS Glue: ETL service for data preparation'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'azure-big-data',
        title: 'Azure Big Data Services',
        content: `
Microsoft Azure offers integrated big data services with enterprise features.
        `,
        keyPoints: [
          'Azure HDInsight: Managed Hadoop, Spark, and Kafka clusters',
          'Azure Stream Analytics: Real-time stream processing',
          'Azure Synapse Analytics: Data warehouse and analytics service',
          'Azure Data Factory: Data integration and ETL service',
          'Azure Databricks: Apache Spark-based analytics platform'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'gcp-big-data',
        title: 'Google Cloud Big Data Services',
        content: `
Google Cloud Platform provides innovative big data services with strong analytics capabilities.
        `,
        keyPoints: [
          'Google Cloud Dataproc: Managed Hadoop and Spark clusters',
          'Google Cloud Dataflow: Stream and batch data processing',
          'BigQuery: Serverless data warehouse',
          'Pub/Sub: Asynchronous messaging service',
          'Cloud Composer: Managed Apache Airflow'
        ],
        estimatedTime: '8 minutes'
      },
      {
        id: 'cloud-native-considerations',
        title: 'Cloud-Native Considerations',
        content: `
Understanding the benefits and considerations when using cloud-based big data services.
        `,
        keyPoints: [
          'Auto-scaling: Automatic cluster size adjustment',
          'Managed Services: Reduced operational overhead',
          'Pay-per-use: Cost optimization based on usage',
          'Integration: Native integration with other cloud services',
          'Security: Built-in security and compliance features'
        ],
        estimatedTime: '6 minutes'
      }
    ]
  }
]; 