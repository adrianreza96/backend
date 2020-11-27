import { Request, Response } from 'express';
import axios from 'axios';
import { stringify } from "querystring-ts";

export class NeweggApiController{

    public searchAllProducts (req: Request, res: Response) {      
        
        const NeweggProductList = 'https://raw.githubusercontent.com/stockchecker/products/master/newegg.json';
        var data = stringify({
            ItemNumber: '14-126-472',
            RecommendItem: '',
            BestSellerItemList: '',
            IsVATPrice: true
        });
        
        console.log("searching!!");

        var options = {
            host: 'www.newegg.com',
            path: '/product/api/ProductRealtime?'+data,
            method: 'GET',
        };
        let holder =null;
        axios.get(NeweggProductList).then(resp => {
            if(resp){
                
                holder = resp;
            console.log(resp);
            }
        });

        // let newContact = new Contact(req.body);

        // newContact.save((err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }    
        //     res.json(contact);
        // });
    }
}