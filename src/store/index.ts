import { createStore } from 'vuex'
import userModule from './user/UserModule'
export interface RootState {}

export default createStore<RootState>({
  modules: {
    userModule
  }
})

export {userModule}
