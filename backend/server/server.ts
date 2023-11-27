import fastify from "fastify";
import twilio from "twilio";

const server = fastify();

const accountSid = "AC609baab4ff2a2b79f8dfca630f061f78";
const authToken = "ac6ee8003e53b27e1505b3c69a6623db";
const client = twilio(accountSid, authToken);

interface MensagemBody {
    to: string;
    body: string;
}

server.post('/envio-mensagem', async (request, reply) => {
try{
    const corpoMessagem: MensagemBody = request.body as MensagemBody;

    const message = await client.messages.create({
        to: corpoMessagem.to,
        from: "+15058145004",
        body: corpoMessagem.body
    });
    
    reply.send({status: 'sucess', messageId: message.sid});
}   catch (error) {
        console.error('Erro ao enviar mensagem: ', error)
        reply.status(500).send({ status: 'error', message: 'Erro ao enviar mensagem' });
    }
});
server.listen({port:3001}, async(err,address)=>{
    if(err){
        console.error(err)
        process.exit(1)
    }
    else
        console.log(`Server rodando na porta ${address}`)
})

export default server;