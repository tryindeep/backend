# Prisma + TypeScript + Bun Setup

## Prerequisites
- [Bun](https://bun.sh) installed
- A PostgreSQL database (e.g. [Neon](https://neon.tech) for free hosted)

---

## Setup Steps

### 1. Init Bun project
```bash
bun init -y
```

### 2. Install dependencies
```bash
bun add @prisma/client
bun add -d prisma typescript @types/bun
```

### 3. Init Prisma
```bash
bunx prisma init
```
This creates:
- `prisma/schema.prisma`
- `prisma.config.ts`
- `.env`

### 4. Set your Database URL in `.env`
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"
```
> Add `.env` to `.gitignore` — never commit secrets.

### 5. Define your models in `prisma/schema.prisma`
```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 6. Push schema to database
```bash
bunx prisma db push
```

### 7. Generate Prisma Client
```bash
bunx prisma generate
```
> Client is generated at `./generated/prisma`

### 8. Use Prisma in `index.ts`
```ts
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { email: "tridip@example.com", name: "Tridip" },
  });
  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

### 9. Run
```bash
bun run index.ts
```

---

## Useful Scripts (add to `package.json`)
```json
"scripts": {
  "dev": "bun --watch src/index.ts",
  "db:push": "bunx prisma db push",
  "db:migrate": "bunx prisma migrate dev",
  "db:generate": "bunx prisma generate",
  "db:studio": "bunx prisma studio"
}
```

---

## Notes
- Prisma 7 uses `provider = "prisma-client"` (not `prisma-client-js`)
- DB URL is configured via `prisma.config.ts`, not inside `schema.prisma`
- Generated client lives in `./generated/prisma`, import from there