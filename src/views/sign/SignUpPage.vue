<template lang="">
    <div class="sign-in-container">
      <form @submit.prevent="onSubmit">
        <h4> 회원가입 </h4>
        <div class="card">
          <div class="card-body">
            <div class="col-auto">
              <label for="nickName">닉네임: </label>
              <input v-model="nickName" type="text" class="form-control" id="nickName">
              <button class="btn btn-primary">중복확인</button>
            </div>
            <div class="col-auto">
              <label for="name">이름 </label>
              <input v-model="name" type="name" class="form-control" id="name">
            </div>
            <div class="col-auto">
              <label for="email">이메일</label>
              <input v-model="email" type="email" class="form-control" id="email">
            </div>
            <div class="col-auto">
              <label for="password">비밀번호</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="col-auto">
              <label for="passwordCheck">비밀번호 확인</label>
              <input v-model="passwordCheck" type="password" class="form-control" id="passwordCheck">
            </div>
            <button class="btn btn-primary"></button>
          </div>
        </div>
      </form>
    </div>
</template>
<script lang="ts">
import router from "@/router";
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      nickName: '',    
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    };
  },
  computed: {
    isPassword() {
      return this.password !== this.passwordCheck;
    }
  }
})
export default class SignUpPage extends Vue {
  password = "";
  passwordCheck = "";
  isPassword = this.password !== this.passwordCheck;
  onSubmit() {
    if (this.isPassword) {
      alert("비밀번호가 다릅니다.")
    }else{
      router.push("sign-in")
    }
    console.log()
  }
}
</script>
<style lang="">
</style>