import express from "express";

const routes = express.Router();

routes.get("/", (req,res)=>{
    const theSpecials = [`Anchovy Lover's`, `Paleo Pizza`, `Dessert Pizza`]

    res.render("homepage",{theSpecials})
})
routes.get("/specialty", (req,res)=>{
    const name = req.query.name as string;
    const price:number = Number(req.query.price);

    res.render("specialty",{name,price})
})
routes.get("/review", (req,res)=>{
    res.render("review")
})
routes.get("/custom", (req,res)=>{
    const toppings = ["Pepperoni", "Sausage", "Chicken", "Mushroom", "Olive", "Green Pepper","Onion","Banana Pepper","Anchovies","Pineapple"]
    res.render("custom", {toppings})
})
routes.post("/thanks",(req,res)=>{
    const customer:string = req.body.customer as string;
    const comment:string = req.body.comment as string;
    const rating:number = req.body.rating as number;

    res.render("thanks",{customer,comment,rating})
})

routes.post("/yourpizza",(req,res)=>{

    const sizes:string = req.body.sizes as string;
    const toppingCount:number = req.body.toppingCount as number;
    const instructions:string = req.body.instructions as string;
    const glutenFree:boolean = req.body.glutenFree as boolean;

    res.render("yourpizza", {sizes, toppingCount, instructions, glutenFree})
})

export default routes;