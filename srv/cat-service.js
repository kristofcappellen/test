module.exports = (srv) => {

    srv.on ('CREATE','Book', async (req) => {
        return {"id":"created","title":"created"};
    })

    srv.on ('READ', 'Book', async (req) => {
        return {"id":"get","title":"get"};
    })

}