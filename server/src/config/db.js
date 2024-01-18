import pg from "pg";

const dbOptions = {
        user : 'postgres',
        password : '123456',
        database : 'blog',
        host : 'localhost',
        port : 5433
    }

    

const db = new pg.Client(dbOptions);
db.connect();

export const query = async (text, params, callback)=>{
    const resp = await db.query(text, params, callback);
    return resp;
    
};


