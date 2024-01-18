import { Router } from "express";
import * as db from "../config/db.js";
const routes = Router();

routes.get("/", async (req, res)=>{

    try {
        const resp = await db.query("select * from blog");
        res.status(200).json({
    
            data : resp.rows
        })
        
    } catch (error) {

        res.status(400).json({
            error
        });
        
    }

});

routes.get('/:id', async (req, res)=>{
    const id = req.params.id;

    try {
        const resp = await db.query("select * from blog where id=$1", [id]);

    if(resp.rows.length === 0){
        res.status(404).json(
            {
                msg : "no such id"
            }
        )
    }else{
        
        res.status(200).json({
    
            data : resp.rows[0],
    
        })
    }
    } catch (error) {

        res.status(400).json({
            error
        })
        
    }

    
    



});


routes.post("/", async (req, res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;

    

    try {
        const resp = await db.query("insert into blog(title, content, author) values($1, $2, $3) returning*", [title, content, author]);
        
        res.status(200).json(
        {
                data : resp.rows,
        })
    } catch (error) {
        res.status(400).json({
            error
        })
        
    }
    

})

routes.patch("/:id", async (req, res)=>{
    const new_title = req.body.title;
    const new_content = req.body.content;
    const new_author = req.body.author;
    const id = req.params.id;

    const resp_ = await db.query("select * from blog where id=$1", [id])

    if(resp_.rows.length === 0){

        try {
            
            res.status(404).json({
                msg : "no such id"
            })

        } catch (error) {
            res.status(400).json({
                error
            })
            
        }
    }else{

        try {
            
            const lst = [new_title || resp_.rows[0].title, new_content || resp_.rows[0].content, new_author || resp_.rows[0].author, id]
        
            console.log(lst)
        
        
            const resp = await db.query("update blog set title = $1, content = $2, author = $3 where id = $4 returning *", lst);
        
            res.status(200).json(resp.rows[0]);

        } catch (error) {

            res.status(400).json({
                error
            })
            
        }

    }


})


routes.delete("/:id", async (req, res)=>{
    const id = req.params.id;

    try {
        const resp_ = await db.query("select * from blog where id=$1", [id]);
        
        if(resp_.rows.length === 0){
            res.status(404).json(
                {
                    msg : 'no such id'
                }
            )
        }else{
    
            try {
                const resp = await db.query("delete from blog where id=$1 returning*", [id]);
                res.json({
                    msg : "entry deleted"
                })
                
            } catch (error) {
                res.json({
                    error : error
                })
                
            }
        }
    } catch (error) {
        res.status(400).json({
            error
        })
    }


})

export default routes;