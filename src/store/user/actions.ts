import { ActionContext } from "vuex"
import { User, UserState } from "./states"
import { AxiosResponse } from 'axios'
import {REQUEST_USER_LIST_TO_SPRING, REQUEST_USER_TO_SPRING} from './mutation-types'
import axiosInst from '../../utility/axiosInstance'


export type UserActions = {
    requestUserToSpring(context: ActionContext<UserState,any>, userId: number): Promise<void>;
    requestUserSignUpToSpring(context: ActionContext<UserState,unknown>,payload: {
    email: string, password: string, name: string, nickname: string}):Promise<AxiosResponse>;
    requestUserEmailCheckToSpring(context: ActionContext<UserState,any>, email: string): Promise<void>;
    // requestUserSignInToSpring(context: ActionContext<UserState,any>, payload:{email:string, password:string}): Promise<string | void>;
}
const actions: UserActions = {
    async requestUserToSpring(context: ActionContext<UserState,any>, userId: number): Promise<void> {
        try {
            const res: AxiosResponse<User> = await axiosInst.springAxiosInst.get("/user/userId")
        } catch (error) {
            console.error
        }
    },
    async requestUserSignUpToSpring(context: ActionContext<UserState, unknown>, payload: {
            email: string, password: string, name: string, nickname: string
        }): Promise<AxiosResponse> {
            const {email,password,name,nickname} = payload
        try {
            const res: AxiosResponse = await axiosInst.springAxiosInst.post('/user/sign-up', {email, password, name, nickname})
            return res.data
        } catch (error) {
            console.error
            throw error
        }    
    },
    async requestUserEmailCheckToSpring(context: ActionContext<UserState,any>, email: string): Promise<void>{
        try {
            const res: AxiosResponse = await axiosInst.springAxiosInst.post('/user/email-check',email)
        } catch (error) {
            console.error
        }
    },
    // async requestUserSignInToSpring(context: ActionContext<UserState,any>, payload:{email:string, password:string}): Promise<string | void> {
    //     try {
    //         const res: AxiosResponse<User> = await axiosInst.springAxiosInst.post('/user/sign-in', {email: payload.email, password: payload.password})
    //         const token: string = 
    //     } catch (error) {
    //         console.error
    //     }
    // },
}

export default actions