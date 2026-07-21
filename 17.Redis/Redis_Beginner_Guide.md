# 🚀 Redis Handbook for Beginners

### Learn Redis from Zero to Backend Developer

**Version:** 1.0\
**Created:** 2026-07-21

------------------------------------------------------------------------

# Table of Contents

1.  What is Redis?
2.  Why Do We Need Redis?
3.  When Should You Use Redis?
4.  Installation & 3-Terminal Workflow
5.  Redis CLI Basics
6.  Data Types
7.  String Commands
8.  Hash Commands
9.  List Commands
10. Set Commands
11. Sorted Set Commands
12. Key Management
13. Expiration (TTL)
14. Monitoring & Debugging
15. Express + Redis Cache Flow
16. Postman Testing
17. Common Errors
18. Real-World Use Cases
19. Command Cheat Sheet

------------------------------------------------------------------------

# 1. What is Redis?

Redis (**RE**mote **DI**ctionary **S**erver) is an **in-memory NoSQL
data store**.

Instead of reading from a database every time, Redis stores frequently
accessed data in RAM.

    Client
       │
       ▼
    Express
       │
       ▼
    Redis (Fast)
       │
    Cache Hit?
     ├── Yes → Return immediately
     └── No
            │
            ▼
        Database/API
            │
            ▼
       Store in Redis
            │
            ▼
          Return

Typical speed: - Database: 10--200 ms - Redis: \<1 ms

------------------------------------------------------------------------

# 2. Why Redis?

-   Cache API responses
-   Cache database queries
-   Store sessions
-   OTP storage
-   Rate limiting
-   Leaderboards
-   Queues
-   Pub/Sub

------------------------------------------------------------------------

# 3. Development Workflow

## Terminal 1

``` bash
redis-server
```

Keep it running.

## Terminal 2

``` bash
bun --watch server.ts
```

## Terminal 3

``` bash
redis-cli
```

------------------------------------------------------------------------

# 4. Redis CLI

Open CLI:

``` bash
redis-cli
```

Exit:

``` redis
exit
```

Ping Redis:

``` redis
PING
```

Output:

    PONG

------------------------------------------------------------------------

# 5. Strings

## SET

``` redis
SET name Tridip
```

## GET

``` redis
GET name
```

## SET with expiry

``` redis
SET otp 123456 EX 60
```

## MSET

``` redis
MSET name Tridip city Kolkata age 23
```

## MGET

``` redis
MGET name city age
```

## APPEND

``` redis
APPEND name " Pramanick"
```

## STRLEN

``` redis
STRLEN name
```

## INCR

``` redis
SET views 0
INCR views
```

## DECR

``` redis
DECR views
```

------------------------------------------------------------------------

# 6. Hashes (Objects)

Think of a JavaScript object.

``` js
{
  name: "Tridip",
  age: 23
}
```

## HSET

``` redis
HSET user:1 name Tridip age 23 city Kolkata
```

## HGET

``` redis
HGET user:1 name
```

## HGETALL

``` redis
HGETALL user:1
```

## HKEYS

``` redis
HKEYS user:1
```

## HVALS

``` redis
HVALS user:1
```

## HEXISTS

``` redis
HEXISTS user:1 age
```

## HDEL

``` redis
HDEL user:1 city
```

------------------------------------------------------------------------

# 7. Lists (Queues)

## LPUSH

``` redis
LPUSH tasks Task1 Task2
```

## RPUSH

``` redis
RPUSH tasks Task3
```

## LRANGE

``` redis
LRANGE tasks 0 -1
```

## LPOP

``` redis
LPOP tasks
```

## RPOP

``` redis
RPOP tasks
```

## LLEN

``` redis
LLEN tasks
```

------------------------------------------------------------------------

# 8. Sets (Unique Values)

## SADD

``` redis
SADD skills C++ Redis TypeScript
```

## SMEMBERS

``` redis
SMEMBERS skills
```

## SISMEMBER

``` redis
SISMEMBER skills Redis
```

## SREM

``` redis
SREM skills C++
```

------------------------------------------------------------------------

# 9. Sorted Sets (Leaderboards)

## ZADD

``` redis
ZADD leaderboard 100 Alice
ZADD leaderboard 90 Bob
```

## ZRANGE

``` redis
ZRANGE leaderboard 0 -1 WITHSCORES
```

------------------------------------------------------------------------

# 10. Key Management

``` redis
KEYS *
TYPE user:1
EXISTS user:1
DEL user:1
RENAME oldKey newKey
FLUSHDB
FLUSHALL
```

------------------------------------------------------------------------

# 11. Expiration

Set expiry:

``` redis
SET session abc EX 3600
```

Check:

``` redis
TTL session
```

Remove expiry:

``` redis
PERSIST session
```

------------------------------------------------------------------------

# 12. Monitoring

Watch every command:

``` redis
MONITOR
```

Database info:

``` redis
INFO
```

Memory usage:

``` redis
INFO memory
```

Stop monitor:

    Ctrl + C

------------------------------------------------------------------------

# 13. Express Cache Pattern

``` ts
const key = `todos:${userId}`;

const cached = await redis.get(key);

if (cached) {
    return JSON.parse(cached);
}

const data = await fetchData();

await redis.set(key, JSON.stringify(data), {
    EX: 3600,
});

return data;
```

Flow:

    GET Request
        │
    Redis GET
        │
     ├── Cache Hit
     │      │
     │   Return Data
     │
     └── Cache Miss
            │
          Database/API
            │
        Redis SET
            │
        Return Data

------------------------------------------------------------------------

# 14. Testing

Request:

    GET http://localhost:3000/todos?userId=1

Expected:

First request

    ❌ Cache Miss

Second request

    ✅ Cache Hit

Verify:

``` redis
KEYS *
GET todos:1
TTL todos:1
```

------------------------------------------------------------------------

# 15. Common Errors

## Connection refused

Redis is not running.

Start:

``` bash
redis-server
```

------------------------------------------------------------------------

## Port already in use

Redis is already running.

Test:

``` bash
redis-cli ping
```

Output:

    PONG

------------------------------------------------------------------------

## WRONGTYPE

You're using the wrong command.

Example:

    GET user:1

when `user:1` is a hash.

Check:

``` redis
TYPE user:1
```

------------------------------------------------------------------------

# 16. Use Cases

  Problem         Redis Solution
  --------------- ----------------
  API Cache       Strings
  User Profile    Hash
  Chat Queue      List
  Unique Tags     Set
  Leaderboard     Sorted Set
  OTP             String + EX
  Sessions        String/Hash
  Rate Limiting   INCR + EX

------------------------------------------------------------------------

# 17. Quick Cheat Sheet

  Command    Description
  ---------- ------------------
  PING       Test Redis
  SET        Store string
  GET        Read string
  MSET       Store many
  MGET       Read many
  HSET       Store object
  HGETALL    Read object
  LPUSH      Push left
  RPUSH      Push right
  LRANGE     Read list
  SADD       Add set
  SMEMBERS   Read set
  ZADD       Add leaderboard
  ZRANGE     Read leaderboard
  TTL        Remaining expiry
  DEL        Delete key
  KEYS \*    Show keys
  TYPE       Data type
  MONITOR    Watch commands
  INFO       Server info
  FLUSHDB    Clear DB

------------------------------------------------------------------------

# Final Learning Roadmap

✅ Strings\
⬜ Hashes\
⬜ Lists\
⬜ Sets\
⬜ Sorted Sets\
⬜ Expiration\
⬜ Pub/Sub\
⬜ Transactions\
⬜ Streams\
⬜ Redis + Express\
⬜ Redis + Prisma\
⬜ Redis + PostgreSQL\
⬜ Rate Limiting\
⬜ Session Store\
⬜ BullMQ

Happy Learning! 🚀
