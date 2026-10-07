import prisma from '@/lib/prisma'

//ฟังชั้น api : post () create product
export async function POST(req: Request) {
    //ข้อมูบที่ส่งมาแล้วบันทึกลงฐานข้อมูล ซึ่ง json() จะเป็นการแปลงข้อมูลที่ส่งมาเป็น json
    const body = await req.json();

    //เอาข้อมูลที่ได้จาก body ไปบันทึกลงฐานข้อมูล
    const product = await prisma.products.create({
        data: {
            name: body.name,
            description: body.description,
            price: body.price,
            quantity: body.quantity
        },
    })

    //ส่งข้อมูลที่บันทึกลงฐานข้อมูลกลับไปให้ client
    return new Response(JSON.stringify(product), {
        status: 201,
    })
}

//ฟังชั้น api : get () read product
export async function GET() {
    //ให้ prisma ดึงข้อมูลจากฐานข้อมูลมาเก็บไว้ในตัวแปร products
    const products = await prisma.products.findMany();

    //ส่งข้อมูลที่ดึงมาจากฐานข้อมูลกลับไปให้ client
    return new Response(JSON.stringify(products), {
        status: 200,
    })
}