import actions, { UserActions } from "./actions"
import mutations, { Usermutations } from "./mutations"
import state, { UserState } from "./states"

export interface UserModule {
    namespaced: true
    state: UserState
    actions: UserActions
    mutations: Usermutations
}
const userModule: UserModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}
export default userModule