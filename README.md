# SEARCH API

A high-performance search API with auto-completion, built with Node.js, MongoDB, and Redis. This project is designed to provide real-time search suggestions, optimize for low-latency response times, and handle concurrent requests efficiently.

---

## Features

- Real-time search suggestions: Provides auto-completion as users type.
- Prefix-based search: Supports prefix-based matching for search terms.
- Performance optimization: Uses Redis for caching and MongoDB indexing for low-latency responses.
- Scalability: Designed to handle concurrent requests efficiently.
- Ranking: Sorts results by search frequency for relevance.

---

## Requirements

- Node.js >= 14.x
- MongoDB (Database)
- Redis (for caache & rate limiting)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd search-api
   npm install

## Create .env file
-PORT
-MONGO_URI

## Api Documentation
-Baseurl/api-docs