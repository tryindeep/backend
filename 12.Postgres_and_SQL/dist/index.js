import { Client } from "pg";
// const pgClient = new Client("postgresql://neondb_owner:npg_5xY1tzMTBcwq@ep-super-union-aqp0knxr-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
const pgClient2 = new Client("postgresql://neondb_owner:npg_5xY1tzMTBcwq@ep-super-union-aqp0knxr-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
async function main() {
    await pgClient2.connect();
    const response = await pgClient2.query("SELECT * FROM users");
    console.log(response.rows);
}
main();
//# sourceMappingURL=index.js.map