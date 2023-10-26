import { def } from '@vue/shared'
import axios from 'axios'
import { userAuthStore } from '../stores/userAuthStore'

class SiteService{
    constructor(){
        let service = axios.create({baseURL:'http://localhost:3000'})
        this.service = service
        const authStore = userAuthStore()
        if (authStore.isAuthenticated){
            this.service.interceptors.request.use(
                (config) => {
                    const token = authStore.getToken
                    if(token) {
                        config.headers['Authorization'] = `Bearer ${token}`;
                        console.log(config);
                    }
                    return config;
                },
                (error) => Promise.reject(error)
            );
        }
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

    get(id){
        return new Promise((resolve, reject) => {
            this.service.get(`/sites/${id}`).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    delete(id){
        return new Promise((resolve, reject) => {
            this.service.delete(`/sites/${id}`).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    create(payload){
        return new Promise((resolve, reject) => {
            this.service.post('/sites', payload).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    update(id, payload){
        return new Promise((resolve, reject) => {
            this.service.put(`/sites/${id}`, payload).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    }
}
export default new SiteService();