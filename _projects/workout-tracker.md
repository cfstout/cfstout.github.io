---
layout: project
title: Workout Tracker App
description: A fitness application built with Kotlin and Ktor for tracking and analyzing workout progress
thumbnail: /assets/images/projects/workout-tracker-thumb.jpg
featured_image: /assets/images/projects/workout-tracker-full.jpg
categories: [app]
technologies: [Kotlin, Ktor, PostgreSQL, Exposed ORM]
github_url: https://github.com/cfstout/workout-tracker
demo_url: https://workout-tracker-demo.com
year: 2023
---

## Project Overview

The Workout Tracker is a comprehensive fitness application that helps users monitor their workout routines, track progress, and achieve their fitness goals. I built this app to solve my own problem of tracking workouts across different gyms and home sessions.

Built with modern JVM technologies, it demonstrates clean architecture principles and efficient data processing, leveraging the strengths of Kotlin for a concise and expressive codebase.

## Key Features

- **User Authentication**: Secure login and account management system
- **Workout Plan Creation**: Create and customize workout routines
- **Exercise Library**: Comprehensive database of exercises with detailed instructions
- **Progress Tracking**: Visual charts and statistics to monitor improvement
- **Personal Records**: Automatic detection and celebration of personal bests
- **Data Export**: Export workout data in various formats

## Technical Implementation

The backend is built with Kotlin and Ktor, providing a lightweight yet powerful foundation for the REST API. Data persistence is handled through PostgreSQL with the Exposed ORM for type-safe database operations.

The application follows a clean architecture approach with clear separation of concerns:

```
src/
├── main/
│   ├── kotlin/
│   │   ├── com/workout/
│   │   │   ├── domain/       # Business logic and entities
│   │   │   ├── data/         # Data access layer
│   │   │   ├── api/          # API endpoints and routing
│   │   │   ├── config/       # Application configuration
│   │   │   └── Application.kt
│   └── resources/
└── test/
    └── kotlin/               # Comprehensive test suite
```

### Backend Architecture

I implemented a domain-driven design approach, with the following components:

1. **API Layer**: RESTful endpoints using Ktor's routing features
2. **Service Layer**: Business logic and orchestration
3. **Repository Layer**: Data access and persistence
4. **Domain Model**: Core entities and business rules

### Database Schema

The database schema was designed to efficiently store workout data while maintaining flexibility:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    notes TEXT
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE workout_exercises (
    id SERIAL PRIMARY KEY,
    workout_id INTEGER REFERENCES workouts(id),
    exercise_id INTEGER REFERENCES exercises(id),
    sets INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight DECIMAL(8,2),
    rpe DECIMAL(3,1),
    notes TEXT
);
```

## Challenges and Solutions

One of the main challenges was implementing efficient data synchronization between the server and client applications to provide a seamless offline experience. This was solved using a conflict resolution strategy that prioritizes server-side data while preserving local changes.

Performance optimization was another key focus, particularly for users with extensive workout history. I implemented a data aggregation service that pre-processes historical data to deliver fast analytics without compromising application responsiveness.

## Lessons Learned

This project reinforced the importance of thorough database design in applications dealing with relational data. It also demonstrated the advantages of Kotlin's concise syntax and powerful features for backend development, particularly coroutines for handling asynchronous operations efficiently.

The most important lesson came from user testing - I found that users prefered simplicity and quick entry over complex features, leading me to redesign the workout entry flow to require fewer taps and less time between sets.

## Future Improvements

I'm planning to enhance the app with the following features:

1. **Social sharing**: Allow users to share workouts and achievements
2. **AI-powered recommendations**: Suggest workout adjustments based on progress
3. **Integration with wearable devices**: Pull in heart rate and other biometric data
4. **Nutrition tracking**: Extend the app to track nutritional intake alongside workouts
