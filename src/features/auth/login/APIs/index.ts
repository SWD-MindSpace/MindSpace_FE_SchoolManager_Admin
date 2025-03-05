import axios from 'axios';
import { LoginSchema } from './../schemas/loginSchema';
import {Base64} from 'js-base64';


const baseUrl = 'https://localhost:7096/api/v1/Identity'

export async function login({email, password}: LoginSchema) {
    const url = `${baseUrl}/login`
    const payload = {
        email,
        password
    }
    try {
        // call API
        const response = await axios.post(url, payload)

        const {id_token, access_token, refresh_token} = response.data

        // verify user's role
        const decodedIdToken = Base64.decode(id_token.split('.')[1])

        const {role, sub} = JSON.parse(decodedIdToken)
    
         // save token to local storage & return status
        if (role === 'Admin' || role === 'Psychologist' || role === 'SchoolManager') {

            const userInfo = {
                role,
                userId: sub
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', refresh_token)

            return {status: 'success', data: role}

        } else return {status: 'error', error: 'Bạn không có quyền truy cập vào hệ thống này'}
            

    } catch (error) {
        console.log(error)

        // Wrong email or password
        if (error.response?.data.statusCode === 400) return {status: 'error', error: 'Sai thông tin đăng nhập'}
        
        // Other errors
        return {status: 'error', error: 'Xảy ra lỗi trong quá trình đăng nhập'}
    }
}
