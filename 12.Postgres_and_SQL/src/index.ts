import {Client} from "pg";


const pgClient2 = new Client("connection string");

async function  main(){
    await pgClient2.connect();

    const response = await pgClient2.query("SELECT * FROM users");
    console.log(response.rows);
}


main();






