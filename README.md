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

---


## Api Documentation
-Baseurl/api-docs

## **Architectural Explanation **

The **Unolo Search API** is designed for **high-performance search with auto-completion**, optimized for **low latency** and **scalability**. Key design choices and trade-offs include:

1. **Technology Stack**:
   - **Node.js** for non-blocking I/O.
   - **MongoDB** for flexible storage with indexing for fast prefix searches.
   - **Redis** for caching to reduce database load.
   - **Docker** for easy deployment and scaling.

2. **Prefix-Based Search**:
   - Uses MongoDB's regex (`^prefix`) with indexing for efficient queries.
   - **Trade-off**: Regex is flexible but less optimized than full-text search engines like Elasticsearch.

3. **Caching**:
   - Redis caches search results to improve response times.
   - **Trade-off**: Introduces eventual consistency but ensures low latency.

4. **Ranking**:
   - Results are ranked by search frequency (`count` field).
   - **Trade-off**: Frequency-based ranking may not reflect semantic relevance.

5. **Scalability**:
   - Designed for horizontal scaling using Docker.
   - **Trade-off**: Adds infrastructure complexity but ensures the system can handle growing traffic.

6. **Rate Limiting**:
   - Protects the API from abuse but may restrict legitimate users during high traffic.

---

### **Trade-Offs**
- **Performance vs. Complexity**: Redis and MongoDB indexing improve performance but add complexity.
- **Flexibility vs. Optimization**: MongoDB regex is flexible but less optimized than Elasticsearch.
- **Consistency vs. Latency**: Caching improves latency but introduces eventual consistency.
- **Scalability vs. Cost**: Horizontal scaling ensures scalability but may increase costs.

---

### **Conclusion**
The architecture balances **performance**, **scalability**, and **simplicity**, making it suitable for real-time search with auto-completion. While trade-offs exist, the design ensures low-latency responses and efficient handling of concurrent requests.
