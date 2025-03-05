---
layout: project
title: Kacoon - Kafka Wrapper Library
description: A collection of Kafka wrappers and tools built with Kotlin
thumbnail: /assets/images/projects/kacoon-thumb.jpg
featured_image: /assets/images/projects/kacoon-full.jpg
categories: [library]
technologies: [Kotlin, Kafka, Coroutines, Event-Driven Architecture]
github_url: https://github.com/cfstout/kacoon
demo_url:
year: 2020
disabled: true
---

## Project Overview

Kacoon is a comprehensive Kafka wrapper library I created during my time at ClassPass to simplify the integration of Kafka with Kotlin applications. The name is a play on "Kafka" and "Cocoon," reflecting both its technical purpose and a bit of my personality.

The library was born out of a real need at ClassPass to standardize our approach to event-driven architecture as we expanded our microservices ecosystem. By providing a clean, Kotlin-idiomatic interface to Kafka, Kacoon significantly reduced the boilerplate code needed for Kafka integration and made our systems more reliable and maintainable.

## Key Features

- **Coroutine Integration**: Seamless integration with Kotlin coroutines for asynchronous processing
- **Type-Safe Producers and Consumers**: Strongly typed interfaces that leverage Kotlin's type system
- **Error Handling**: Comprehensive error recovery mechanisms including retry strategies and dead letter queues
- **Metrics and Monitoring**: Built-in instrumentation for performance tracking
- **Testing Utilities**: Mock Kafka components for unit and integration testing
- **Schema Validation**: Runtime schema validation for messages

## Technical Implementation

Kacoon is built on top of the official Kafka client libraries but provides a more Kotlin-friendly API. Here's an example of how it simplifies producer code:

```kotlin
// Without Kacoon
val producerProps = Properties().apply {
    put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers)
    put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer::class.java)
    put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer::class.java)
    // Many more configuration properties...
}
val producer = KafkaProducer<String, OrderEvent>(producerProps)
val record = ProducerRecord("orders", orderId, orderEvent)
try {
    val future = producer.send(record)
    val metadata = future.get()
    // Handle success
} catch (e: Exception) {
    // Handle various exceptions
}

// With Kacoon
val producer = KacoonProducer.create<String, OrderEvent>(
    bootstrapServers = bootstrapServers,
    topic = "orders"
)
producer.send(orderId, orderEvent).onSuccess { metadata ->
    // Handle success
}.onFailure { exception ->
    // Handle failure
}
```

### Coroutines for Async Processing

One of the key innovations in Kacoon is its use of Kotlin coroutines for asynchronous processing. This allows for efficient handling of high-throughput message streams without blocking threads:

```kotlin
val consumer = KacoonConsumer.create<String, OrderEvent>(
    bootstrapServers = bootstrapServers,
    topic = "orders",
    groupId = "order-processor"
)

// Process messages asynchronously with coroutines
consumer.consume { record ->
    coroutineScope {
        launch { 
            processPayment(record.value) 
        }
        launch { 
            updateInventory(record.value) 
        }
    }
}
```

### Error Handling and Resilience

Kacoon includes sophisticated error handling mechanisms:

```kotlin
consumer.consume(
    retryStrategy = RetryStrategy.exponentialBackoff(
        initialDelayMs = 100,
        maxDelayMs = 10000,
        maxRetries = 5
    ),
    deadLetterTopic = "orders-dead-letter",
    errorHandler = { record, exception ->
        logger.error("Failed to process order", exception)
        metrics.increment("order.processing.failure")
    }
) { record ->
    processOrder(record.value)
}
```

## Real-world Impact

At ClassPass, Kacoon was instrumental in our transition to event-driven architecture:

- **Standardization**: Created a consistent approach to Kafka across 20+ microservices
- **Developer Productivity**: Reduced Kafka integration time from days to hours
- **Reliability**: Decreased production issues related to message processing by over 70%
- **Observability**: Improved monitoring and debugging capabilities for event streams

The library powered several critical systems, including:

1. Real-time inventory updates for fitness classes
2. Partner data synchronization across 30,000+ studio partners
3. Analytics event streams processing millions of events daily
4. Cross-service communication for our wellness product expansion

## Lessons Learned

Developing Kacoon provided several valuable insights:

1. **Abstraction Balance**: Finding the right level of abstraction is crucial - too much hides important details, too little defeats the purpose
2. **Testing Matters**: Thorough testing infrastructure for async messaging is essential for reliability
3. **Documentation Drives Adoption**: Clear documentation and examples significantly impact library adoption
4. **Feedback Loops**: Regular feedback from developers using the library led to meaningful improvements

The library evolved significantly based on real-world usage patterns and developer feedback, eventually becoming a cornerstone of our microservices architecture.

## Open Source

I later open-sourced a version of Kacoon to share these patterns with the wider Kotlin community. The public version includes the core functionality while removing company-specific implementations.

The open-source version has been used by other teams and companies to simplify their Kafka integration with Kotlin, demonstrating the broader applicability of the patterns and approaches.

## Future Development

The library continues to evolve with several planned enhancements:

1. **Enhanced Schema Evolution**: Better support for schema versioning and compatibility
2. **Reactive Streams Integration**: Integration with Project Reactor and other reactive programming libraries
3. **Additional Serialization Formats**: Support for Protobuf, Avro, and other serialization formats
4. **Admin API Wrappers**: Simplifying topic management and configuration
5. **Stream Processing DSL**: Domain-specific language for defining stream processing topologies

Kacoon represents my approach to technical problems: creating clean abstractions that make complex systems more manageable while maintaining the flexibility needed for diverse use cases.
