
const Mypost =require('../models/Db')

module.exports={
    Query:{
        async post(_,{ID}){
            return await Mypost.findById(ID)
        },
        async posts({amount}){
            return await Mypost.find().sort({createAt:-1}).limit(amount)
        }
    },
    Mutation:{
        async createPost(_,{title,body,author}){
            return await Mypost.create({title,body,author})
        },
        async deletePost(_,{ID}){
            return await Mypost.findByIdAndDelete(ID)
        },
        async updatePost(_,{ID,title,body,author}){
            return await Mypost.findByIdAndUpdate(ID,{title,body,author},{new:true})
        }
    }
}