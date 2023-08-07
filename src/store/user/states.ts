export interface User {
    userId: number
    email: string
    password: string
    name: string
    nickname: string
    token: string

}
export interface UserState {
    users: User[]
    user: User | null
    token: {}
}
const state: UserState = {
    users: [],
    user: null,
    token: {}
}
export default state