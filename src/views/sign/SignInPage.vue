<template>
  <div class="sign-in-container">
    <form @submit.prevent="onSubmit">
      <div
        class="card"
        style="width: 45rem; margin-left: auto; margin-right: auto">
        <div class="card-body">
          <h5 class="card-title" style="margin-top: 1rem">로그인</h5>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              style="margin-top: 2rem"
              >이메일</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="inputPassword"
              style="width: 100%"
            />
          </div>
          <button
            style="width: 100%; margin-top: 1rem"
            type="submit"
            class="btn btn-primary"
          >
            작성완료
          </button>
          <router-link to="sign-up">회원가입</router-link>
          <p class="card-text">{{ user }}</p>
          <button @click="setUser" class="btn btn-primary">Change User</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
interface User {
  user: string;
  email: string;
  password: string;
}
import router from "@/router";
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      user: "장현민",
      email: "",
      password: "",
    };
  },
})
export default class SignInPage extends Vue implements User {
  user = "장현민";
  email = '';
  password = '';
  setUser() {
    this.user = "아만다";
  }
  onSubmit() {
    console.log("이메일:", this.email);
    console.log("비밀번호:", this.password);
    router.push("/");
  }
}
</script>
<style>
.sign-in-container {
  max-width: 50%;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>