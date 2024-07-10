export const connection: Connection = {
    CONNECTION_STRING: 'saliou',
    DB: 'MYSQL',
    DBNAME: 'test'
}

export interface Connection {
    CONNECTION_STRING: string
    DB: string,
    DBNAME: string
}