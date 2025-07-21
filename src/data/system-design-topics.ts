import { SystemDesignTopic } from '../types';

export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'scalable-apps',
    title: 'Designing Scalable Applications',
    category: 'Architecture',
    description: 'Learn the fundamental principles and patterns for designing applications that can handle millions of users and high traffic loads.',
    estimatedTime: '90 minutes',
    difficulty: 'Advanced',
    prerequisites: ['Basic Software Architecture', 'Database Concepts'],
    subtopics: [
      {
        id: 'microservices-vs-monoliths',
        title: 'Microservices vs Monoliths',
        description: 'Understand when to choose microservices architecture over monolithic applications and the trade-offs involved.',
        estimatedTime: '25 minutes',
        difficulty: 'Advanced',
        content: `
# Microservices vs Monoliths

Choosing between microservices and monolithic architecture is one of the most critical decisions in system design. Each approach has its own advantages and trade-offs.

## Monolithic Architecture

A monolithic application is built as a single, unified unit where all components are tightly coupled and deployed together.

### Characteristics

- **Single codebase**: All functionality in one application
- **Shared database**: Single database for all data
- **Deployed as one unit**: Entire application deployed together
- **Technology stack**: Usually one programming language and framework

### Advantages

\`\`\`text
✅ Simple to develop and deploy
✅ Easy to test and debug
✅ Shared memory and data structures
✅ Lower initial complexity
✅ Easier to implement transactions
✅ Better performance for small applications
\`\`\`

### Disadvantages

\`\`\`text
❌ Difficult to scale individual components
❌ Technology lock-in
❌ Single point of failure
❌ Hard to maintain as application grows
❌ Long deployment cycles
❌ Difficult to adopt new technologies
\`\`\`

## Microservices Architecture

Microservices break down an application into small, independent services that communicate over the network.

### Characteristics

- **Service decomposition**: Each service handles a specific business capability
- **Independent deployment**: Services can be deployed independently
- **Technology diversity**: Different services can use different technologies
- **Data isolation**: Each service can have its own database

### Advantages

\`\`\`text
✅ Independent scaling of services
✅ Technology flexibility
✅ Fault isolation
✅ Faster development cycles
✅ Easier to maintain and update
✅ Better team autonomy
\`\`\`

### Disadvantages

\`\`\`text
❌ Increased complexity
❌ Network latency between services
❌ Data consistency challenges
❌ Operational overhead
❌ Testing complexity
❌ Higher resource usage
\`\`\`

## When to Choose Monoliths

### Start with Monoliths When:

1. **Small team** (1-5 developers)
2. **Simple application** with clear boundaries
3. **Rapid prototyping** and MVP development
4. **Limited resources** for infrastructure management
5. **Clear business domain** without complex integrations

### Example: E-commerce Startup

\`\`\`text
A small e-commerce startup with 3 developers building an MVP:
- User management
- Product catalog
- Order processing
- Payment integration

→ Start with monolith for faster development
→ Refactor to microservices when scaling becomes necessary
\`\`\`

## When to Choose Microservices

### Choose Microservices When:

1. **Large team** (10+ developers)
2. **Complex domain** with clear service boundaries
3. **Different scaling requirements** for different components
4. **Technology diversity** needs
5. **High availability** requirements

### Example: Netflix Architecture

\`\`\`text
Netflix uses microservices for:
- User service (authentication, profiles)
- Content service (video metadata)
- Recommendation service (ML algorithms)
- Streaming service (video delivery)
- Billing service (subscriptions)

Each service can scale independently based on demand.
\`\`\`

## Migration Strategies

### Strangler Fig Pattern

Gradually replace parts of a monolith with microservices:

\`\`\`text
Phase 1: Identify bounded contexts
Phase 2: Extract one service at a time
Phase 3: Use API gateway to route traffic
Phase 4: Gradually increase traffic to new service
Phase 5: Remove old functionality from monolith
\`\`\`

### Example Migration

\`\`\`text
E-commerce Monolith → Microservices:

1. Extract User Service (authentication, profiles)
2. Extract Product Service (catalog, inventory)
3. Extract Order Service (order processing)
4. Extract Payment Service (payment processing)
5. Extract Notification Service (emails, SMS)
\`\`\`

## Decision Framework

### Consider These Factors:

1. **Team Size and Structure**
   - Small team → Monolith
   - Large team → Microservices

2. **Application Complexity**
   - Simple domain → Monolith
   - Complex domain → Microservices

3. **Scaling Requirements**
   - Uniform scaling → Monolith
   - Different scaling needs → Microservices

4. **Technology Requirements**
   - Single technology → Monolith
   - Multiple technologies → Microservices

5. **Operational Maturity**
   - Limited DevOps → Monolith
   - Strong DevOps → Microservices

## Best Practices

### For Monoliths:

\`\`\`text
✅ Keep it modular internally
✅ Use clear separation of concerns
✅ Implement proper layering (Controller → Service → Repository)
✅ Use dependency injection
✅ Write comprehensive tests
✅ Plan for future decomposition
\`\`\`

### For Microservices:

\`\`\`text
✅ Define clear service boundaries
✅ Use API-first design
✅ Implement proper service discovery
✅ Handle distributed transactions carefully
✅ Monitor and observe each service
✅ Use circuit breakers and fallbacks
\`\`\`
        `,
        codeExamples: [
          `// Monolithic Structure
src/
├── controllers/
│   ├── UserController.java
│   ├── ProductController.java
│   └── OrderController.java
├── services/
│   ├── UserService.java
│   ├── ProductService.java
│   └── OrderService.java
├── repositories/
│   ├── UserRepository.java
│   ├── ProductRepository.java
│   └── OrderRepository.java
└── models/
    ├── User.java
    ├── Product.java
    └── Order.java`,

          `// Microservices Structure
services/
├── user-service/
│   ├── src/main/java/com/user/
│   ├── Dockerfile
│   └── pom.xml
├── product-service/
│   ├── src/main/java/com/product/
│   ├── Dockerfile
│   └── pom.xml
├── order-service/
│   ├── src/main/java/com/order/
│   ├── Dockerfile
│   └── pom.xml
└── api-gateway/
    ├── src/main/java/com/gateway/
    ├── Dockerfile
    └── pom.xml`,

          `// Service Communication Example
@RestController
public class OrderController {
    @Autowired
    private UserServiceClient userService;
    
    @PostMapping("/orders")
    public Order createOrder(@RequestBody OrderRequest request) {
        // Call user service to validate user
        User user = userService.getUser(request.getUserId());
        
        // Call product service to check inventory
        Product product = productService.getProduct(request.getProductId());
        
        // Create order
        return orderService.createOrder(user, product, request);
    }
}`
        ],
        keyPoints: [
          'Start with monoliths for simple applications and small teams',
          'Choose microservices when you have complex domains and large teams',
          'Consider operational complexity when choosing architecture',
          'Plan for migration from monolith to microservices',
          'Use clear service boundaries and API-first design for microservices'
        ]
      },
      {
        id: 'api-gateways-message-queues',
        title: 'API Gateways & Message Queues',
        description: 'Learn about API gateways for service communication and message queues for asynchronous processing.',
        estimatedTime: '30 minutes',
        difficulty: 'Advanced',
        content: `
# API Gateways & Message Queues

API gateways and message queues are essential components in modern distributed systems for managing service communication and asynchronous processing.

## API Gateways

An API Gateway acts as a reverse proxy and single entry point for all client requests to your microservices.

### Key Functions

\`\`\`text
🔐 Authentication & Authorization
🛡️ Rate Limiting & Throttling
🔄 Request Routing & Load Balancing
📊 Monitoring & Logging
🔧 Request/Response Transformation
🛠️ Circuit Breaker Implementation
\`\`\`

### Benefits

1. **Centralized Security**: Single point for authentication and authorization
2. **Simplified Client**: Clients only need to know about the gateway
3. **Cross-cutting Concerns**: Handle logging, monitoring, and security centrally
4. **Service Discovery**: Hide internal service structure from clients

### Example: Netflix Zuul

\`\`\`java
@EnableZuulProxy
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

// Route configuration
zuul:
  routes:
    users:
      path: /api/users/**
      serviceId: user-service
    products:
      path: /api/products/**
      serviceId: product-service
    orders:
      path: /api/orders/**
      serviceId: order-service
\`\`\`

### Rate Limiting Example

\`\`\`java
@Component
public class RateLimitFilter extends ZuulFilter {
    private RateLimiter rateLimiter = RateLimiter.create(100.0); // 100 requests per second
    
    @Override
    public Object run() {
        if (!rateLimiter.tryAcquire()) {
            throw new RuntimeException("Rate limit exceeded");
        }
        return null;
    }
}
\`\`\`

## Message Queues

Message queues enable asynchronous communication between services, improving system reliability and scalability.

### Why Use Message Queues?

1. **Decoupling**: Services don't need to know about each other
2. **Reliability**: Messages are persisted and can be retried
3. **Scalability**: Handle traffic spikes by buffering messages
4. **Fault Tolerance**: Services can fail without losing messages

### Popular Message Queues

#### Apache Kafka

\`\`\`java
// Producer
@Autowired
private KafkaTemplate<String, String> kafkaTemplate;

public void sendOrderEvent(Order order) {
    kafkaTemplate.send("orders", order.toJson());
}

// Consumer
@KafkaListener(topics = "orders")
public void handleOrderEvent(String orderJson) {
    Order order = Order.fromJson(orderJson);
    processOrder(order);
}
\`\`\`

#### RabbitMQ

\`\`\`java
// Producer
@Autowired
private RabbitTemplate rabbitTemplate;

public void sendNotification(Notification notification) {
    rabbitTemplate.convertAndSend("notifications", notification);
}

// Consumer
@RabbitListener(queues = "notifications")
public void handleNotification(Notification notification) {
    sendEmail(notification);
}
\`\`\`

### Message Queue Patterns

#### 1. Point-to-Point

\`\`\`text
Producer → Queue → Consumer

Use case: Order processing
- Order service sends order to queue
- Payment service consumes and processes payment
- Only one consumer processes each message
\`\`\`

#### 2. Publish-Subscribe

\`\`\`text
Publisher → Topic → Multiple Subscribers

Use case: Event notifications
- Order service publishes "order.created" event
- Email service subscribes and sends confirmation
- Analytics service subscribes and updates metrics
- Inventory service subscribes and updates stock
\`\`\`

#### 3. Request-Reply

\`\`\`text
Client → Request Queue → Service → Reply Queue → Client

Use case: Synchronous communication over async infrastructure
- Client sends request with correlation ID
- Service processes and sends reply with same correlation ID
- Client matches reply to original request
\`\`\`

### Event-Driven Architecture Example

\`\`\`java
// Order Service - Publisher
@Service
public class OrderService {
    @Autowired
    private EventPublisher eventPublisher;
    
    public Order createOrder(OrderRequest request) {
        Order order = orderRepository.save(new Order(request));
        
        // Publish events
        eventPublisher.publish("order.created", new OrderCreatedEvent(order));
        
        return order;
    }
}

// Email Service - Subscriber
@Component
public class EmailService {
    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        sendOrderConfirmation(event.getOrder());
    }
}

// Inventory Service - Subscriber
@Component
public class InventoryService {
    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        updateInventory(event.getOrder());
    }
}
\`\`\`

### Message Queue Best Practices

#### 1. Message Design

\`\`\`json
{
  "eventId": "uuid",
  "eventType": "order.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0",
  "data": {
    "orderId": "12345",
    "userId": "67890",
    "total": 99.99
  }
}
\`\`\`

#### 2. Error Handling

\`\`\`java
@RabbitListener(queues = "orders")
public void handleOrder(Order order) {
    try {
        processOrder(order);
    } catch (Exception e) {
        // Send to dead letter queue
        throw new AmqpRejectAndDontRequeueException(e);
    }
}
\`\`\`

#### 3. Monitoring

\`\`\`java
@Component
public class QueueMetrics {
    @EventListener
    public void handleMessageProcessed(MessageProcessedEvent event) {
        // Update metrics
        meterRegistry.counter("messages.processed").increment();
        meterRegistry.timer("message.processing.time").record(event.getDuration());
    }
}
\`\`\`

## Integration Patterns

### API Gateway + Message Queue

\`\`\`text
Client → API Gateway → Service A → Message Queue → Service B

Example: E-commerce flow
1. Client creates order via API Gateway
2. API Gateway routes to Order Service
3. Order Service publishes "order.created" event
4. Payment Service consumes event and processes payment
5. Payment Service publishes "payment.processed" event
6. Email Service sends confirmation email
\`\`\`

### Circuit Breaker Pattern

\`\`\`java
@HystrixCommand(fallbackMethod = "fallbackMethod")
public String callExternalService() {
    return restTemplate.getForObject("http://external-service/api", String.class);
}

public String fallbackMethod() {
    return "Service temporarily unavailable";
}
\`\`\`
        `,
        codeExamples: [
          `// API Gateway Configuration (Spring Cloud Gateway)
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - name: CircuitBreaker
              args:
                name: user-service-circuit-breaker
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20`,

          `// Kafka Producer Configuration
@Configuration
public class KafkaConfig {
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        return new DefaultKafkaProducerFactory<>(config);
    }
}`,

          `// RabbitMQ Configuration
@Configuration
public class RabbitMQConfig {
    @Bean
    public Queue orderQueue() {
        return new Queue("orders", true);
    }
    
    @Bean
    public TopicExchange orderExchange() {
        return new TopicExchange("order.events");
    }
    
    @Bean
    public Binding binding(Queue orderQueue, TopicExchange orderExchange) {
        return BindingBuilder.bind(orderQueue)
                .to(orderExchange)
                .with("order.*");
    }
}`
        ],
        keyPoints: [
          'API gateways provide centralized entry point and cross-cutting concerns',
          'Message queues enable asynchronous, reliable communication between services',
          'Choose Kafka for high-throughput event streaming',
          'Choose RabbitMQ for complex routing and message patterns',
          'Implement circuit breakers and rate limiting for resilience'
        ]
      },
      {
        id: 'event-driven-architecture',
        title: 'Event-Driven Architecture',
        description: 'Learn how to build systems that communicate through events rather than direct service calls.',
        estimatedTime: '20 minutes',
        difficulty: 'Advanced',
        content: `
# Event-Driven Architecture

Event-driven architecture (EDA) is a design pattern where system components communicate through events rather than direct service calls.

## What is Event-Driven Architecture?

In event-driven architecture, services produce and consume events. An event represents something that happened in the system.

### Key Concepts

\`\`\`text
📡 Event: A record of something that happened
🎯 Event Producer: Service that creates and publishes events
👂 Event Consumer: Service that processes events
📨 Event Bus: Infrastructure that carries events between services
📋 Event Store: Persistent storage for events
\`\`\`

### Benefits

1. **Loose Coupling**: Services don't need to know about each other
2. **Scalability**: Services can scale independently
3. **Fault Tolerance**: System continues working even if some services fail
4. **Flexibility**: Easy to add new services without changing existing ones

## Event Types

### Domain Events

Events that represent business occurrences:

\`\`\`java
public class OrderCreatedEvent {
    private String orderId;
    private String userId;
    private BigDecimal total;
    private LocalDateTime createdAt;
    
    // Constructor, getters, setters
}

public class PaymentProcessedEvent {
    private String orderId;
    private String paymentId;
    private PaymentStatus status;
    private LocalDateTime processedAt;
    
    // Constructor, getters, setters
}
\`\`\`

### Integration Events

Events for cross-service communication:

\`\`\`java
public class UserRegisteredEvent {
    private String userId;
    private String email;
    private String name;
    private LocalDateTime registeredAt;
    
    // Constructor, getters, setters
}
\`\`\`

## Event Flow Example

### E-commerce Order Processing

\`\`\`text
1. User creates order → OrderCreatedEvent
2. Payment service processes payment → PaymentProcessedEvent
3. Inventory service updates stock → InventoryUpdatedEvent
4. Email service sends confirmation → EmailSentEvent
5. Analytics service updates metrics → MetricsUpdatedEvent
\`\`\`

### Implementation

\`\`\`java
// Order Service - Event Producer
@Service
public class OrderService {
    @Autowired
    private EventPublisher eventPublisher;
    
    public Order createOrder(OrderRequest request) {
        // Create order
        Order order = orderRepository.save(new Order(request));
        
        // Publish event
        OrderCreatedEvent event = new OrderCreatedEvent(
            order.getId(),
            order.getUserId(),
            order.getTotal(),
            LocalDateTime.now()
        );
        
        eventPublisher.publish("order.created", event);
        
        return order;
    }
}

// Payment Service - Event Consumer
@Component
public class PaymentService {
    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        // Process payment
        Payment payment = processPayment(event.getOrderId(), event.getTotal());
        
        // Publish payment event
        PaymentProcessedEvent paymentEvent = new PaymentProcessedEvent(
            event.getOrderId(),
            payment.getId(),
            payment.getStatus(),
            LocalDateTime.now()
        );
        
        eventPublisher.publish("payment.processed", paymentEvent);
    }
}
\`\`\`

## Event Sourcing

Event sourcing stores all events that have occurred in the system, allowing you to reconstruct the current state.

### Traditional vs Event Sourcing

\`\`\`text
Traditional:
Order Table: id, userId, total, status, createdAt

Event Sourcing:
Event Store:
- OrderCreatedEvent: {orderId, userId, total, timestamp}
- PaymentProcessedEvent: {orderId, paymentId, status, timestamp}
- OrderShippedEvent: {orderId, trackingNumber, timestamp}
\`\`\`

### Event Store Implementation

\`\`\`java
@Entity
public class EventStore {
    @Id
    private String eventId;
    private String aggregateId;
    private String eventType;
    private String eventData;
    private LocalDateTime timestamp;
    private long version;
    
    // Constructor, getters, setters
}

@Service
public class EventStoreService {
    @Autowired
    private EventStoreRepository eventStoreRepository;
    
    public void saveEvent(String aggregateId, String eventType, String eventData) {
        EventStore event = new EventStore(
            UUID.randomUUID().toString(),
            aggregateId,
            eventType,
            eventData,
            LocalDateTime.now(),
            getNextVersion(aggregateId)
        );
        
        eventStoreRepository.save(event);
    }
    
    public List<EventStore> getEvents(String aggregateId) {
        return eventStoreRepository.findByAggregateIdOrderByVersion(aggregateId);
    }
}
\`\`\`

### State Reconstruction

\`\`\`java
@Service
public class OrderProjectionService {
    public Order reconstructOrder(String orderId) {
        List<EventStore> events = eventStoreService.getEvents(orderId);
        
        Order order = new Order();
        
        for (EventStore event : events) {
            switch (event.getEventType()) {
                case "OrderCreatedEvent":
                    OrderCreatedEvent createdEvent = deserialize(event.getEventData(), OrderCreatedEvent.class);
                    order.setId(createdEvent.getOrderId());
                    order.setUserId(createdEvent.getUserId());
                    order.setTotal(createdEvent.getTotal());
                    break;
                    
                case "PaymentProcessedEvent":
                    PaymentProcessedEvent paymentEvent = deserialize(event.getEventData(), PaymentProcessedEvent.class);
                    order.setPaymentStatus(paymentEvent.getStatus());
                    break;
                    
                case "OrderShippedEvent":
                    OrderShippedEvent shippedEvent = deserialize(event.getEventData(), OrderShippedEvent.class);
                    order.setTrackingNumber(shippedEvent.getTrackingNumber());
                    order.setStatus(OrderStatus.SHIPPED);
                    break;
            }
        }
        
        return order;
    }
}
\`\`\`

## CQRS (Command Query Responsibility Segregation)

CQRS separates read and write operations for better performance and scalability.

### Command Side (Write)

\`\`\`java
@Service
public class OrderCommandService {
    @Autowired
    private EventPublisher eventPublisher;
    
    public void createOrder(CreateOrderCommand command) {
        // Validate command
        validateCommand(command);
        
        // Create event
        OrderCreatedEvent event = new OrderCreatedEvent(
            UUID.randomUUID().toString(),
            command.getUserId(),
            command.getTotal(),
            LocalDateTime.now()
        );
        
        // Publish event
        eventPublisher.publish("order.created", event);
    }
    
    public void processPayment(ProcessPaymentCommand command) {
        PaymentProcessedEvent event = new PaymentProcessedEvent(
            command.getOrderId(),
            UUID.randomUUID().toString(),
            PaymentStatus.PROCESSED,
            LocalDateTime.now()
        );
        
        eventPublisher.publish("payment.processed", event);
    }
}
\`\`\`

### Query Side (Read)

\`\`\`java
@Service
public class OrderQueryService {
    @Autowired
    private OrderReadRepository orderReadRepository;
    
    public OrderDTO getOrder(String orderId) {
        return orderReadRepository.findById(orderId)
            .map(this::toDTO)
            .orElseThrow(() -> new OrderNotFoundException(orderId));
    }
    
    public List<OrderDTO> getUserOrders(String userId) {
        return orderReadRepository.findByUserId(userId)
            .stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }
}

// Read Model
@Entity
@Table(name = "order_read_model")
public class OrderReadModel {
    @Id
    private String orderId;
    private String userId;
    private BigDecimal total;
    private OrderStatus status;
    private String trackingNumber;
    private LocalDateTime createdAt;
    
    // Constructor, getters, setters
}
\`\`\`

### Event Handlers for Read Model

\`\`\`java
@Component
public class OrderReadModelEventHandler {
    @Autowired
    private OrderReadRepository orderReadRepository;
    
    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        OrderReadModel order = new OrderReadModel();
        order.setOrderId(event.getOrderId());
        order.setUserId(event.getUserId());
        order.setTotal(event.getTotal());
        order.setStatus(OrderStatus.CREATED);
        order.setCreatedAt(event.getCreatedAt());
        
        orderReadRepository.save(order);
    }
    
    @EventListener
    public void handlePaymentProcessed(PaymentProcessedEvent event) {
        OrderReadModel order = orderReadRepository.findById(event.getOrderId())
            .orElseThrow(() -> new OrderNotFoundException(event.getOrderId()));
        
        order.setStatus(OrderStatus.PAID);
        orderReadRepository.save(order);
    }
    
    @EventListener
    public void handleOrderShipped(OrderShippedEvent event) {
        OrderReadModel order = orderReadRepository.findById(event.getOrderId())
            .orElseThrow(() -> new OrderNotFoundException(event.getOrderId()));
        
        order.setStatus(OrderStatus.SHIPPED);
        order.setTrackingNumber(event.getTrackingNumber());
        orderReadRepository.save(order);
    }
}
\`\`\`

## Best Practices

### 1. Event Design

\`\`\`java
public abstract class DomainEvent {
    private String eventId;
    private String aggregateId;
    private LocalDateTime timestamp;
    private long version;
    
    // Constructor, getters, setters
}

public class OrderCreatedEvent extends DomainEvent {
    private String userId;
    private BigDecimal total;
    private List<OrderItem> items;
    
    // Constructor, getters, setters
}
\`\`\`

### 2. Event Versioning

\`\`\`java
public class OrderCreatedEventV1 extends DomainEvent {
    private String userId;
    private BigDecimal total;
}

public class OrderCreatedEventV2 extends DomainEvent {
    private String userId;
    private BigDecimal total;
    private String currency; // New field
    private String customerEmail; // New field
}
\`\`\`

### 3. Event Schema Evolution

\`\`\`java
@Component
public class EventSchemaMigrator {
    public DomainEvent migrateEvent(DomainEvent event) {
        if (event instanceof OrderCreatedEventV1) {
            OrderCreatedEventV1 v1Event = (OrderCreatedEventV1) event;
            return new OrderCreatedEventV2(
                v1Event.getEventId(),
                v1Event.getAggregateId(),
                v1Event.getTimestamp(),
                v1Event.getVersion(),
                v1Event.getUserId(),
                v1Event.getTotal(),
                "USD", // Default currency
                null   // Default email
            );
        }
        return event;
    }
}
\`\`\`

### 4. Idempotency

\`\`\`java
@Component
public class IdempotentEventHandler {
    @Autowired
    private ProcessedEventRepository processedEventRepository;
    
    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        // Check if already processed
        if (processedEventRepository.existsByEventId(event.getEventId())) {
            return; // Already processed
        }
        
        // Process event
        processOrder(event);
        
        // Mark as processed
        processedEventRepository.save(new ProcessedEvent(event.getEventId()));
    }
}
\`\`\`
        `,
        codeExamples: [
          `// Event Publisher Interface
public interface EventPublisher {
    void publish(String topic, DomainEvent event);
}

// Kafka Implementation
@Component
public class KafkaEventPublisher implements EventPublisher {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    
    @Override
    public void publish(String topic, DomainEvent event) {
        String eventJson = objectMapper.writeValueAsString(event);
        kafkaTemplate.send(topic, event.getEventId(), eventJson);
    }
}`,

          `// Event Listener Configuration
@Configuration
@EnableAsync
public class EventConfig {
    @Bean
    public TaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(500);
        executor.setThreadNamePrefix("event-handler-");
        executor.initialize();
        return executor;
    }
}`,

          `// Event Sourcing Repository
@Repository
public interface EventStoreRepository extends JpaRepository<EventStore, String> {
    List<EventStore> findByAggregateIdOrderByVersion(String aggregateId);
    List<EventStore> findByEventTypeAndTimestampBetween(
        String eventType, 
        LocalDateTime start, 
        LocalDateTime end
    );
}`
        ],
        keyPoints: [
          'Event-driven architecture enables loose coupling between services',
          'Events represent something that happened in the system',
          'Event sourcing stores all events to reconstruct state',
          'CQRS separates read and write operations for better performance',
          'Implement idempotency and event versioning for reliability'
        ]
      }
    ]
  },
  {
    id: 'caching-strategies',
    title: 'Caching Strategies',
    category: 'Performance',
    description: 'Learn about different caching strategies and how to implement them using Redis, Memcached, and other caching solutions.',
    estimatedTime: '45 minutes',
    difficulty: 'Advanced',
    prerequisites: ['Database Concepts', 'System Architecture'],
    subtopics: [
      {
        id: 'caching-fundamentals',
        title: 'Caching Fundamentals',
        description: 'Understand the basics of caching and different caching strategies.',
        estimatedTime: '15 minutes',
        difficulty: 'Advanced',
        content: `
# Caching Fundamentals

Caching is a technique used to store frequently accessed data in fast-access storage to improve application performance.

## What is Caching?

Caching stores copies of data in fast-access storage (memory) to reduce the time and resources needed to fetch the original data.

### Benefits

\`\`\`text
⚡ Faster Response Times
💰 Reduced Database Load
🌐 Lower Network Latency
📈 Improved Scalability
🔋 Reduced Resource Usage
\`\`\`

### Types of Caching

#### 1. Application Cache (In-Memory)

\`\`\`java
@Service
public class UserService {
    private Map<String, User> userCache = new ConcurrentHashMap<>();
    
    public User getUser(String userId) {
        // Check cache first
        User cachedUser = userCache.get(userId);
        if (cachedUser != null) {
            return cachedUser;
        }
        
        // Fetch from database
        User user = userRepository.findById(userId);
        if (user != null) {
            userCache.put(userId, user);
        }
        
        return user;
    }
}
\`\`\`

#### 2. Distributed Cache (Redis/Memcached)

\`\`\`java
@Service
public class ProductService {
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    
    public Product getProduct(String productId) {
        // Check Redis cache
        Product cachedProduct = redisTemplate.opsForValue().get("product:" + productId);
        if (cachedProduct != null) {
            return cachedProduct;
        }
        
        // Fetch from database
        Product product = productRepository.findById(productId);
        if (product != null) {
            // Cache for 1 hour
            redisTemplate.opsForValue().set("product:" + productId, product, Duration.ofHours(1));
        }
        
        return product;
    }
}
\`\`\`

#### 3. CDN Cache (Content Delivery Network)

\`\`\`text
Static Content Caching:
- Images, CSS, JavaScript files
- HTML pages
- Video content
- API responses (for public data)
\`\`\`

## Caching Strategies

### 1. Cache-Aside (Lazy Loading)

\`\`\`java
@Service
public class CacheAsideService {
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    @Autowired
    private UserRepository userRepository;
    
    public User getUser(String userId) {
        // Try cache first
        String cacheKey = "user:" + userId;
        User user = redisTemplate.opsForValue().get(cacheKey);
        
        if (user != null) {
            return user;
        }
        
        // Cache miss - load from database
        user = userRepository.findById(userId);
        if (user != null) {
            // Store in cache
            redisTemplate.opsForValue().set(cacheKey, user, Duration.ofMinutes(30));
        }
        
        return user;
    }
    
    public void updateUser(User user) {
        // Update database
        userRepository.save(user);
        
        // Invalidate cache
        String cacheKey = "user:" + user.getId();
        redisTemplate.delete(cacheKey);
    }
}
\`\`\`

### 2. Write-Through Cache

\`\`\`java
@Service
public class WriteThroughService {
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    @Autowired
    private ProductRepository productRepository;
    
    public void createProduct(Product product) {
        // Write to database first
        Product savedProduct = productRepository.save(product);
        
        // Then write to cache
        String cacheKey = "product:" + savedProduct.getId();
        redisTemplate.opsForValue().set(cacheKey, savedProduct, Duration.ofHours(1));
    }
    
    public void updateProduct(Product product) {
        // Update database
        Product updatedProduct = productRepository.save(product);
        
        // Update cache
        String cacheKey = "product:" + updatedProduct.getId();
        redisTemplate.opsForValue().set(cacheKey, updatedProduct, Duration.ofHours(1));
    }
}
\`\`\`

### 3. Write-Behind Cache

\`\`\`java
@Service
public class WriteBehindService {
    @Autowired
    private RedisTemplate<String, Order> redisTemplate;
    @Autowired
    private OrderRepository orderRepository;
    
    private Queue<Order> writeQueue = new ConcurrentLinkedQueue<>();
    
    public void createOrder(Order order) {
        // Write to cache immediately
        String cacheKey = "order:" + order.getId();
        redisTemplate.opsForValue().set(cacheKey, order, Duration.ofHours(1));
        
        // Queue for database write
        writeQueue.offer(order);
    }
    
    @Scheduled(fixedRate = 5000) // Run every 5 seconds
    public void processWriteQueue() {
        List<Order> ordersToSave = new ArrayList<>();
        
        // Collect orders from queue
        Order order;
        while ((order = writeQueue.poll()) != null) {
            ordersToSave.add(order);
        }
        
        // Batch save to database
        if (!ordersToSave.isEmpty()) {
            orderRepository.saveAll(ordersToSave);
        }
    }
}
\`\`\`

### 4. Refresh-Ahead Cache

\`\`\`java
@Service
public class RefreshAheadService {
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    @Autowired
    private ProductRepository productRepository;
    
    public Product getProduct(String productId) {
        String cacheKey = "product:" + productId;
        Product product = redisTemplate.opsForValue().get(cacheKey);
        
        if (product != null) {
            // Check if cache is about to expire
            Long ttl = redisTemplate.getExpire(cacheKey);
            if (ttl != null && ttl < 300) { // Less than 5 minutes
                // Refresh cache in background
                CompletableFuture.runAsync(() -> refreshCache(productId));
            }
            return product;
        }
        
        // Cache miss - load and cache
        product = productRepository.findById(productId);
        if (product != null) {
            redisTemplate.opsForValue().set(cacheKey, product, Duration.ofHours(1));
        }
        
        return product;
    }
    
    private void refreshCache(String productId) {
        try {
            Product product = productRepository.findById(productId);
            if (product != null) {
                String cacheKey = "product:" + productId;
                redisTemplate.opsForValue().set(cacheKey, product, Duration.ofHours(1));
            }
        } catch (Exception e) {
            // Log error but don't fail the request
            log.error("Failed to refresh cache for product: " + productId, e);
        }
    }
}
\`\`\`

## Cache Invalidation Strategies

### 1. Time-Based Expiration (TTL)

\`\`\`java
@Service
public class TTLService {
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    
    public void cacheUser(User user) {
        String cacheKey = "user:" + user.getId();
        
        // Cache for 30 minutes
        redisTemplate.opsForValue().set(cacheKey, user, Duration.ofMinutes(30));
        
        // Cache for 1 hour
        redisTemplate.opsForValue().set(cacheKey, user, Duration.ofHours(1));
        
        // Cache for 1 day
        redisTemplate.opsForValue().set(cacheKey, user, Duration.ofDays(1));
    }
}
\`\`\`

### 2. Explicit Invalidation

\`\`\`java
@Service
public class ExplicitInvalidationService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    
    public void updateUser(User user) {
        // Update database
        userRepository.save(user);
        
        // Invalidate specific cache entry
        String cacheKey = "user:" + user.getId();
        redisTemplate.delete(cacheKey);
        
        // Invalidate related caches
        redisTemplate.delete("user:profile:" + user.getId());
        redisTemplate.delete("user:preferences:" + user.getId());
    }
    
    public void deleteUser(String userId) {
        // Delete from database
        userRepository.deleteById(userId);
        
        // Invalidate all user-related caches
        Set<String> keys = redisTemplate.keys("user:*" + userId + "*");
        if (keys != null && !keys.isEmpty()) {
            redisTemplate.delete(keys);
        }
    }
}
\`\`\`

### 3. Cache Versioning

\`\`\`java
@Service
public class CacheVersioningService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    
    private AtomicLong versionCounter = new AtomicLong(0);
    
    public void invalidateAllUserCaches() {
        // Increment version
        long newVersion = versionCounter.incrementAndGet();
        redisTemplate.opsForValue().set("user:cache:version", newVersion);
    }
    
    public String getCacheKey(String baseKey) {
        Long version = (Long) redisTemplate.opsForValue().get("user:cache:version");
        return baseKey + ":v" + (version != null ? version : 0);
    }
    
    public User getUser(String userId) {
        String cacheKey = getCacheKey("user:" + userId);
        return (User) redisTemplate.opsForValue().get(cacheKey);
    }
}
\`\`\`

## Cache Patterns

### 1. Cache-Aside Pattern

\`\`\`java
@Component
public class CacheAsidePattern {
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    @Autowired
    private UserRepository userRepository;
    
    public User getUser(String userId) {
        // Try cache first
        String cacheKey = "user:" + userId;
        User user = redisTemplate.opsForValue().get(cacheKey);
        
        if (user != null) {
            return user;
        }
        
        // Cache miss - load from database
        user = userRepository.findById(userId);
        if (user != null) {
            // Store in cache
            redisTemplate.opsForValue().set(cacheKey, user, Duration.ofMinutes(30));
        }
        
        return user;
    }
}
\`\`\`

### 2. Write-Through Pattern

\`\`\`java
@Component
public class WriteThroughPattern {
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    @Autowired
    private ProductRepository productRepository;
    
    public void createProduct(Product product) {
        // Write to database first
        Product savedProduct = productRepository.save(product);
        
        // Then write to cache
        String cacheKey = "product:" + savedProduct.getId();
        redisTemplate.opsForValue().set(cacheKey, savedProduct, Duration.ofHours(1));
    }
}
\`\`\`

## Best Practices

### 1. Choose the Right Cache Strategy

\`\`\`java
// For frequently read, rarely written data
@Component
public class ReadHeavyCache {
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    
    public Product getProduct(String productId) {
        String cacheKey = "product:" + productId;
        Product product = redisTemplate.opsForValue().get(cacheKey);
        
        if (product == null) {
            product = productRepository.findById(productId);
            if (product != null) {
                // Cache for longer duration
                redisTemplate.opsForValue().set(cacheKey, product, Duration.ofHours(24));
            }
        }
        
        return product;
    }
}
\`\`\`

### 2. Monitor Cache Performance

\`\`\`java
@Component
public class CacheMetrics {
    private MeterRegistry meterRegistry;
    
    public void recordCacheHit(String cacheName) {
        meterRegistry.counter("cache.hits", "cache", cacheName).increment();
    }
    
    public void recordCacheMiss(String cacheName) {
        meterRegistry.counter("cache.misses", "cache", cacheName).increment();
    }
    
    public void recordCacheSize(String cacheName, long size) {
        meterRegistry.gauge("cache.size", Tags.of("cache", cacheName), size);
    }
}
\`\`\`
        `,
        codeExamples: [
          `// Redis Configuration
spring:
  redis:
    host: localhost
    port: 6379
    timeout: 2000ms
    lettuce:
      pool:
        max-active: 8
        max-idle: 8
        min-idle: 0`,
          
          `// Memcached Configuration
spring:
  cache:
    type: memcached
    memcached:
      servers: localhost:11211
      expiration: 3600`,
          
          `// Cache Configuration
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        RedisCacheManager cacheManager = RedisCacheManager.builder(redisConnectionFactory())
            .cacheDefaults(defaultConfig())
            .build();
        return cacheManager;
    }
}`
        ],
        keyPoints: [
          'Choose caching strategy based on data access patterns',
          'Implement proper cache invalidation to maintain consistency',
          'Use TTL for automatic cache expiration',
          'Monitor cache hit rates and performance metrics',
          'Consider cache size and memory usage'
        ]
      }
    ]
  }
];