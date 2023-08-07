
import { MutationTree } from 'vuex';
import {REQUEST_USER_LIST_TO_SPRING,REQUEST_USER_TOKEN_TO_SPRING,REQUEST_USER_TO_SPRING} from './mutation-types'
import { User, UserState } from './states';
export interface Usermutations extends MutationTree<UserState>{
    [REQUEST_USER_LIST_TO_SPRING] (state: UserState, receiveData: User[]): void
    [REQUEST_USER_TO_SPRING] (state: UserState, receiveData: User): void    
}
const mutations: MutationTree<UserState> = {
    [REQUEST_USER_LIST_TO_SPRING] (state: UserState, receiveData: User[]):void{
        state.users = receiveData
    },
    [REQUEST_USER_TO_SPRING] (state: UserState, receiveData: User):void{
        state.user = receiveData
    },
    [REQUEST_USER_TOKEN_TO_SPRING] (state: UserState, receiveData: User): void{
        state.token = receiveData
    }
}
export default mutations as Usermutations