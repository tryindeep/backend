  # Your Roadmap — DSA + Backend + Frontend

A sequenced plan that connects your DSA practice, backend topics, and frontend topics — built around continuing to ship features on Reservit rather than learning in a vacuum.

## Channels & docs you'll come back to repeatedly

Rather than hunting for a new resource every phase, these cover most of your list — worth subscribing/bookmarking now:

**YouTube channels:**
- [Piyush Garg](https://www.youtube.com/@piyushgargdev) — Node/Express-specific backend content (Redis, RabbitMQ, auth, payments, deployment) — closest match to your actual stack
- [Chai aur Code — Hitesh Choudhary](https://www.youtube.com/@chaiaurcode) — system design, backend fundamentals, structured cohort-style content
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) — short, focused, practical — best for "just show me the pattern" topics
- [Codevolution](https://www.youtube.com/@Codevolution) — best for React/Next.js/Zustand deep-dive series
- [Fireship](https://www.youtube.com/@Fireship) — best for fast conceptual overviews (100 Seconds series) before diving deep elsewhere
- [Theo / t3.gg](https://www.youtube.com/@t3dotgg) — most authoritative for tRPC + Next.js + Prisma combination
- [Traversy Media](https://www.youtube.com/@TraversyMedia) — solid crash courses across the board
- [freeCodeCamp](https://www.youtube.com/@freecodecamp) — full-length free courses when you want deep, structured coverage
- [NeetCode](https://www.youtube.com/@NeetCode) / [Abdul Bari](https://www.youtube.com/@abdul_bari) — DSA specifically

**Documentation you'll reference constantly:**
- [Striver's A2Z Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/) — your DSA backbone
- [Prisma Docs](https://www.prisma.io/docs) — you're already using this
- [Next.js Docs](https://nextjs.org/docs)
- [Redis Docs](https://redis.io/docs/latest/)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials)
- [Razorpay Docs](https://razorpay.com/docs/)

---

## How this is organized

- **DSA runs in parallel, every single day**, alongside everything else — not as a separate phase you finish first. It's a daily habit (30–60 min), not a blocking prerequisite.
- **Backend/frontend topics are sequenced by dependency** — things you need for Reservit's next feature come before generalized topics that don't have an immediate use case yet.
- Each phase ends with **applying it to Reservit** — this is what makes it stick instead of staying abstract.

---

## Track A — DSA (daily, parallel to everything else)

Do a small number of problems every day rather than binging one topic. Suggested order (easiest dependency chain first):

| Order | Topic | Count | Why this order |
|---|---|---|---|
| 1 | Arrays | 24 | Foundation — most other patterns build on array manipulation |
| 2 | Stack & Queues | 17 | Natural next step after arrays; used inside many later topics (BFS uses queues, DFS uses stacks) |
| 3 | Recursion | 12 | Needed before backtracking, trees, and graphs — all recursive by nature |
| 4 | Binary Search | 8 | Short, high-leverage topic; reinforces recursion + array indexing |
| 5 | Linked List | 18 | Pointer manipulation — good to do after recursion since many LL problems are recursive |
| 6 | Backtracking | 6 | Builds directly on recursion |
| 7 | Binary Tree | 48 | Biggest single topic — needs recursion + stacks/queues (for BFS) solid first |
| 8 | Graph | 18 | Builds on trees (a tree is a special graph) + queues/stacks for BFS/DFS |
| 9 | Dynamic Programming | 15 | Hardest conceptually — do last since it often combines recursion + arrays + trees patterns |

**Total: 166 problems.** At ~2-3/day, that's roughly 8-10 weeks running alongside the phases below. Don't stall a backend/frontend phase waiting to "finish DSA first" — they're independent tracks.

### DSA Resources
- **Structured sheet (primary):** [Striver's A2Z DSA Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/) — 450+ problems organized in exactly the topic order above (arrays → recursion → linked list → stacks/queues → trees → graphs → DP), each with a free video explanation. This is the single best free structured resource for your list.
- **Pattern-based alternative:** [NeetCode 150](https://neetcode.io/practice) — smaller, curated set organized by pattern (two pointers, sliding window, etc.) rather than raw topic; great for a second pass after Striver's sheet, or if a topic still feels shaky.
- **Concept/intuition building:** [Abdul Bari's Algorithms playlist (YouTube)](https://www.youtube.com/@abdul_bari) — best for genuinely understanding *why* an algorithm works (recursion, DP, graphs especially), not just memorizing the pattern.
- **Visual/animated explanations:** [NeetCode's YouTube channel](https://www.youtube.com/@NeetCode) — walks through problems with clean visuals, good for graph and tree traversal intuition.
- **Reference textbook (optional, for depth):** *Introduction to Algorithms* (CLRS) — only reach for this if you want formal proofs/complexity analysis beyond interview prep.

---

## Track B — Backend (sequenced phases)

### Phase 1 — Payment integration
*(You already have the concepts down from our last conversation — this is the natural next build.)*
- Order creation → checkout → signature verification flow
- Webhooks + webhook signature verification
- Idempotency handling
- **Apply to Reservit:** wire Razorpay into the booking flow, test with test-mode cards end-to-end

**Resources:**
- 📄 [Razorpay Docs — Payment Gateway integration](https://razorpay.com/docs/payments/) — official, authoritative, has exact code snippets for Node
- 📄 [Razorpay Docs — Webhooks](https://razorpay.com/docs/webhooks/) — signature verification steps exactly as needed
- ▶️ [Payment Gateway Integration — Piyush Garg (YouTube)](https://www.youtube.com/@piyushgargdev) — search his channel for "Razorpay integration Node.js"; practical, matches your MERN-style stack
- ▶️ [Razorpay Integration Tutorial — Chai aur Code / Hitesh Choudhary (YouTube)](https://www.youtube.com/@chaiaurcode) — good if you want the explanation in a teaching-first style

### Phase 2 — Redis (two focused use cases, not the whole tool)
- `SET key value NX EX seconds` — atomic lock pattern
- `INCR` + `EXPIRE` — rate limiting pattern
- Connecting via `ioredis`, singleton client pattern
- **Apply to Reservit:** replace/augment your seat-locking with Redis TTL locks; add rate limiting to `/bookings/hold`

**Resources:**
- 📄 [Redis Docs — Commands reference](https://redis.io/docs/latest/commands/) — official, look up `SET`, `EXPIRE`, `INCR` directly
- 📄 [Redis Docs — Distributed Locks pattern](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/) — explains exactly why `NX EX` must be atomic
- ▶️ [Redis Crash Course — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — short, focused, exactly the "use case" style you need rather than a full Redis course
- ▶️ [Redis with Node.js — Piyush Garg (YouTube)](https://www.youtube.com/@piyushgargdev) — Node-specific with `ioredis`, ties directly into an Express backend like yours

### Phase 3 — Rate limiting (builds directly on Phase 2)
- Fixed window vs sliding window vs token bucket (concept level — you'll implement fixed window first, it's simplest)
- Per-user vs per-IP limiting
- **Apply to Reservit:** rate-limit booking and auth endpoints (login brute-force protection too)

**Resources:**
- 📄 [express-rate-limit docs](https://express-rate-limit.mintlify.app/overview) — the actual npm package you'll likely use; docs double as a mini rate-limiting concepts primer
- 📄 [Cloudflare — What is rate limiting?](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) — clean conceptual explainer of the different algorithms (fixed window, sliding window, token bucket)

### Phase 4 — Auth using cookies (upgrade from your current JWT-in-header setup)
- `httpOnly`, `secure`, `sameSite` cookie flags — why each matters
- CSRF risk and mitigation when using cookies (vs the header-token approach you have now, which is CSRF-immune by nature)
- Refresh token rotation pattern
- **Apply to Reservit:** migrate auth to cookie-based sessions, add refresh tokens

**Resources:**
- 📄 [MDN — Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies) — the definitive reference for `httpOnly`, `secure`, `sameSite`
- ▶️ [JWT Authentication with Cookies + Refresh Tokens — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — exact pattern you need, practical implementation
- ▶️ [Auth series (cookies, refresh tokens) — Piyush Garg (YouTube)](https://www.youtube.com/@piyushgargdev) — Node/Express-specific, matches your stack directly

### Phase 5 — Web security fundamentals
- OWASP Top 10 at a conceptual level: SQL injection (you're safe via Prisma, but understand *why*), XSS, CSRF, broken auth
- Helmet.js, CORS configuration properly (not `origin: "*"`)
- Input sanitization beyond Zod validation (e.g. HTML sanitization if you ever accept rich text)
- **Apply to Reservit:** audit your CORS config, add Helmet, review error messages for info leakage

**Resources:**
- 📄 [OWASP Top 10](https://owasp.org/www-project-top-ten/) — the canonical reference, still the industry standard list
- 📄 [Helmet.js Docs](https://helmetjs.github.io/) — official, shows exactly what each middleware does
- ▶️ [Web Security Fundamentals — Traversy Media (YouTube)](https://www.youtube.com/@TraversyMedia) — practical walkthrough of common vulnerabilities in a Node context

### Phase 6 — Testing in MERN
- Unit tests for services (pure functions, no HTTP — your service layer is already structured perfectly for this)
- Integration tests for routes (supertest + a test database)
- **Apply to Reservit:** write tests for `booking.service.ts` first — it's your highest-risk logic (concurrency)

**Resources:**
- 📄 [Vitest Docs](https://vitest.dev/) — fast, modern, works well with Bun/TS — recommended over Jest for a new project
- 📄 [Supertest GitHub README](https://github.com/ladjs/supertest) — the standard tool for testing Express routes
- ▶️ [Testing Node.js Apps — freeCodeCamp (YouTube)](https://www.youtube.com/@freecodecamp) — full free course covering unit + integration testing patterns

### Phase 7 — Connection pooling
- Why Postgres connections are expensive, what a pool actually does
- Prisma's connection pool config, PgBouncer if you scale further
- **Apply to Reservit:** review/tune your Prisma connection settings for your hosting environment (Neon)

**Resources:**
- 📄 [Prisma Docs — Connection pooling](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pooling) — official, directly relevant since you're already using Prisma
- 📄 [Neon Docs — Connection pooling](https://neon.tech/docs/connect/connection-pooling) — specific to your actual hosting provider

### Phase 8 — Webhooks (generalized, beyond payment)
- You'll already understand this from Phase 1's payment webhook — this is about recognizing the *pattern* generally (any third-party service notifying you async)

### Phase 9 — Pub/Sub
- Publisher/subscriber pattern conceptually (decoupled, many-to-many vs queue's point-to-point)
- Redis Pub/Sub as the simplest implementation (you'll already have Redis running from Phase 2)
- **Apply to Reservit:** e.g., broadcast "seat status changed" events for a future real-time seat map (ties into Track C's WebSocket topic)

**Resources:**
- 📄 [Redis Docs — Pub/Sub](https://redis.io/docs/latest/develop/interact/pubsub/) — official, short, exactly what you need

### Phase 10 — RabbitMQ or Kafka
- Now that you have a real use case (post-booking side effects like email/QR generation from earlier discussion), this won't be abstract
- RabbitMQ if you want simpler/faster to learn; Kafka if you want the more "industry-standard-at-scale" tool — RabbitMQ is the better first choice given your project size
- **Apply to Reservit:** queue booking-confirmation emails instead of sending inline

**Resources:**
- 📄 [RabbitMQ Official Tutorials](https://www.rabbitmq.com/tutorials) — the official step-by-step tutorials are genuinely excellent, start here, do tutorial #1-3 minimum
- 📄 [amqplib GitHub README](https://github.com/amqp-node/amqplib) — the Node client you'll actually use
- ▶️ [RabbitMQ Crash Course — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — quick practical intro
- ▶️ [RabbitMQ vs Kafka + implementation — Piyush Garg (YouTube)](https://www.youtube.com/@piyushgargdev) — good for the "which one and why" decision plus Node implementation

### Phase 11 — Realtime communication + WebSocket scaling
- WebSocket basics, Socket.io vs raw `ws`
- **Apply to Reservit:** live seat-map updates (seat goes LOCKED/BOOKED for everyone viewing that showtime, in real time)
- Scaling WebSocket servers horizontally (sticky sessions, Redis adapter for Socket.io) — learn this once you have the basic version working, not before

**Resources:**
- 📄 [Socket.io Docs](https://socket.io/docs/v4/) — official, includes the Redis adapter docs for horizontal scaling
- ▶️ [Socket.io Crash Course — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — practical, builds a real-time app from scratch
- ▶️ [WebSockets explained — Fireship (YouTube)](https://www.youtube.com/@Fireship) — short, great for the conceptual "why WebSockets vs polling" before implementation

### Phase 12 — Distributed computing concepts + Singleton pattern
- CAP theorem at a conceptual level, why your optimistic-locking approach is a *single-node* solution and what changes at multi-node scale
- Singleton pattern — you're likely already using this informally (one Prisma client instance, one Redis client instance) — just formalize the understanding

**Resources:**
- ▶️ [System Design Cohort — Piyush Garg & Hitesh Choudhary (Chai aur Code)](https://www.youtube.com/@chaiaurcode) — covers CAP theorem, distributed systems fundamentals, singleton and other patterns in a practical, project-tied way
- 📄 [refactoring.guru — Singleton Pattern](https://refactoring.guru/design-patterns/singleton) — clean, language-agnostic explanation with TypeScript examples available

### Phase 13 — Async backend communication + Serverless functions
- Message-based vs request/response communication between services
- When serverless (Vercel functions, AWS Lambda) makes sense vs a long-running server like your current Express app
- **Apply to Reservit:** identify one candidate function (e.g. the expiry sweep) that could be a scheduled serverless function instead of `setInterval`

**Resources:**
- 📄 [Vercel Docs — Functions](https://vercel.com/docs/functions) — official, cleanest intro to serverless functions if you're already in the JS ecosystem
- 📄 [AWS Lambda Docs — Getting Started](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html) — the industry-standard option, worth knowing even if you deploy elsewhere
- ▶️ [Serverless Explained — Fireship (YouTube)](https://www.youtube.com/@Fireship) — short conceptual overview

### Phase 14 — tRPC
- Only after you have a frontend that's TypeScript end-to-end (Next.js) — tRPC's whole value is type-sharing between frontend/backend in the same monorepo
- Compare against your existing REST API — you likely won't rewrite Reservit's API in tRPC, but understand when you'd choose it for a *new* project

**Resources:**
- 📄 [tRPC Official Docs](https://trpc.io/docs) — excellent official docs, has a full quickstart with Next.js
- ▶️ [tRPC in 100 Seconds — Fireship (YouTube)](https://www.youtube.com/@Fireship) — fastest way to get the core idea
- ▶️ [tRPC Full Course — Theo / t3.gg (YouTube)](https://www.youtube.com/@t3dotgg) — Theo created the T3 stack (Next.js + tRPC + Prisma), most authoritative practical source for this specific combination

### Phase 15 — OpenAPI spec + client generation
- Documenting your existing REST API in OpenAPI/Swagger format
- Auto-generating a typed client from that spec
- **Apply to Reservit:** generate an OpenAPI spec from your existing routes, generate a TypeScript client for your frontend to consume instead of hand-writing fetch calls

**Resources:**
- 📄 [Swagger/OpenAPI Docs](https://swagger.io/docs/specification/about/) — official spec documentation
- 📄 [zod-to-openapi GitHub](https://github.com/asteasolutions/zod-to-openapi) — directly useful since you already validate everything with Zod — generates OpenAPI specs from your existing schemas
- 📄 [openapi-typescript-codegen GitHub](https://github.com/ferdikoomen/openapi-typescript-codegen) — auto-generates a typed client from your spec

### Phase 16 — DDoS protection + deployment
- Cloudflare/rate-limiting at the edge vs application-level rate limiting (Phase 3)
- Deployment: get Reservit actually live (Railway/Render/VPS)
- Coolify — self-hosted deployment platform, alternative to Railway/Render if you want more control
- **Apply to Reservit:** deploy it for real, put it behind Cloudflare

**Resources:**
- 📄 [Cloudflare Docs — DDoS Protection](https://developers.cloudflare.com/ddos-protection/) — official
- 📄 [Coolify Docs](https://coolify.io/docs) — official documentation for self-hosted deployment
- 📄 [Railway Docs](https://docs.railway.com/) — official, if you go with Railway instead
- ▶️ [Deploying Node.js apps — Piyush Garg (YouTube)](https://www.youtube.com/@piyushgargdev) — covers Docker + deployment for MERN-style stacks, matches your setup

---

## Track C — Frontend (starts once Track B Phase 1 payment backend is solid)

You need *a* frontend earlier than this for payment testing (a minimal HTML harness, as discussed) — this track is about building the **real** one.

### Phase 1 — React hooks (deep understanding, not just usage)
- `useState`, `useEffect` — what re-render actually means, dependency array pitfalls
- `useMemo`, `useCallback` — when they matter vs premature optimization
- Custom hooks — extract your own (e.g. `useAuth`, `useBookingHold`)

**Resources:**
- 📄 [React Docs — Built-in Hooks](https://react.dev/reference/react/hooks) — official docs, genuinely the best resource now, much improved from the old React docs
- ▶️ [React Hooks Course — Codevolution (YouTube)](https://www.youtube.com/@Codevolution) — thorough, hook-by-hook with clear examples
- ▶️ [useEffect explained — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — specifically good for the dependency-array pitfalls that trip people up

### Phase 2 — Tailwind CSS
- Utility-first mental model, responsive prefixes, dark mode setup

**Resources:**
- 📄 [Tailwind CSS Official Docs](https://tailwindcss.com/docs) — genuinely one of the best-written docs of any tool, use this as your primary reference
- ▶️ [Tailwind CSS Crash Course — Traversy Media (YouTube)](https://www.youtube.com/@TraversyMedia) — quick practical intro

### Phase 3 — Zustand
- Global state without prop-drilling — compare mentally to `useState` (when do you actually need global state?)
- **Apply to Reservit:** auth state (current user, token), booking-in-progress state

**Resources:**
- 📄 [Zustand Official Docs](https://zustand.docs.pmnd.rs/) — short, clear, you can read the whole thing in under an hour
- ▶️ [Zustand in 100 Seconds — Fireship (YouTube)](https://www.youtube.com/@Fireship) — fast conceptual intro
- ▶️ [Zustand Crash Course — Codevolution (YouTube)](https://www.youtube.com/@Codevolution) — practical, builds a small app with it

### Phase 4 — Next.js: CSR vs SSR vs SSG
- Understand *why* each exists — SEO for movie/showtime pages (SSR/SSG) vs interactive booking flow (CSR)
- **Apply to Reservit:** movie listing pages as SSG/ISR (rarely change), seat picker as CSR (needs live interactivity)

**Resources:**
- 📄 [Next.js Official Docs — Rendering](https://nextjs.org/docs/app/building-your-application/rendering) — official, explains CSR/SSR/SSG/ISR clearly with the App Router
- ▶️ [Next.js Full Course — Codevolution (YouTube)](https://www.youtube.com/@Codevolution) — thorough App Router coverage
- ▶️ [Next.js Crash Course — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — faster-paced alternative

### Phase 5 — NextAuth + Next middleware
- Ties directly into Track B Phase 4 (cookie-based auth) — you'll implement the same concepts using NextAuth's abstractions
- Middleware for route protection (redirect unauthenticated users)

**Resources:**
- 📄 [NextAuth.js (Auth.js) Official Docs](https://authjs.dev/) — official, actively maintained (project renamed to Auth.js)
- 📄 [Next.js Docs — Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) — official reference
- ▶️ [NextAuth Full Course — Codevolution (YouTube)](https://www.youtube.com/@Codevolution) — thorough walkthrough including custom credentials provider, which you'll need since you have your own auth backend

### Phase 6 — Motion (animation)
- Framer Motion basics — seat selection feedback, page transitions
- Treat as polish — do this after the core booking UI works, not before

**Resources:**
- 📄 [Motion (Framer Motion) Official Docs](https://motion.dev/docs) — note the project rebranded from "Framer Motion" to "Motion" — official docs are the best reference
- ▶️ [Framer Motion Crash Course — Web Dev Simplified (YouTube)](https://www.youtube.com/@WebDevSimplified) — good practical intro to animation variants and gestures

### Phase 7 — Figma
- Design your screens before building them — even rough wireframes prevent a lot of rebuild-later pain
- Honestly worth doing *before* Phase 1-6 if you want a plan to build against, but listed here since it's a tool/skill not a code dependency

**Resources:**
- 📄 [Figma Official Help Center](https://help.figma.com/) — official docs, has interactive tutorials built in
- ▶️ [Figma UI Design Course for Beginners — freeCodeCamp (YouTube)](https://www.youtube.com/@freecodecamp) — full free course, no prior design background assumed

---

## Suggested overall sequence (combining all 3 tracks)

```
Weeks 1-2   Track A (ongoing) + Track B Phase 1 (Payment)
Weeks 3-4   Track A (ongoing) + Track B Phase 2-3 (Redis + Rate limiting)
Weeks 5-6   Track A (ongoing) + Track B Phase 4-5 (Cookie auth + Web security)
Weeks 7-8   Track A (ongoing) + Track B Phase 6-7 (Testing + Connection pooling)
            + Start Track C Phase 1-3 (React hooks, Tailwind, Zustand) in parallel
Weeks 9-10  Track C Phase 4-5 (Next.js rendering + NextAuth) — build the real frontend
Weeks 11-12 Track B Phase 8-9 (Webhooks generalized, Pub/Sub) + Track C Phase 6-7 (Motion, Figma retrofit)
Weeks 13-14 Track B Phase 10-11 (RabbitMQ + Realtime/WebSockets) — now genuinely useful with a frontend to show it in
Weeks 15+   Track B Phase 12-16 (distributed concepts, tRPC, OpenAPI, DDoS, deployment) — as needed, lower urgency
```

## The one rule to hold onto
**Every backend/frontend topic should have an "Apply to Reservit" step before you move to the next one.** Learning Redis in isolation teaches you Redis; learning Redis and then immediately wiring it into your seat-locking teaches you *when and why* to reach for it next time — that's the difference that actually compounds.
