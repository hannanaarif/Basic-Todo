const zod=require('zod');

const createTodo =zod.object({
    title:zod.string().min(1),
    description:zod.string().min(1)
})

const updateTodo =zod.object({
    _id:zod.string()
})

module.exports={
    createTodo,
    updateTodo
}