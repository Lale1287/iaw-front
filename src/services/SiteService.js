import { def } from '@vue/shared'
import axios from 'axios'

class SiteService{
    constructor(){
        let service = axios.create({baseURL:'http://localhost:3000'})
        this.service = service
    }

    getSites(){
        return new Promise((resolve, reject)=>{
            this.service.get('/sites').then(res =>{
                resolve(res.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}
export default new SiteService();