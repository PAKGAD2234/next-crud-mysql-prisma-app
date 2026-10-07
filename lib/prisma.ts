import {PrismaClient} from '@/generated/prisma/client'
import {PrismaMariaDb} from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

const prisma = new PrismaClient({
    adapter,
     
})

export default prisma