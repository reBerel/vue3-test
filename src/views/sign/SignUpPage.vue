<template lang="">
      <form @submit.prevent="onSubmit">
        <h4> 회원가입 - 개인정보 </h4>
        <div class="card">
          <div class="card-body">
            <div class="col-auto">
              <label for="nickname">닉네임: </label>
              <div class="col-auto">
              <input v-model="nickname" type="name" class=" form-control m-2 col-6" id="nickname">
            </div>
              <button class="btn btn-primary">중복확인</button>
            </div>
            <div class="col-auto">
              <label for="name">이름 </label>
              <div class="col-auto">
              <input v-model="name" type="name" class="form-control" id="name">
            </div>
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
            <button class="btn btn-primary mt-2">확인</button>
            <div>
          <button class="btn btn-primary ">dddd</button>
            </div>
          </div>
        </div>
      </form>
</template>

<script lang="ts">
import { defineComponent } from "vue"


export default defineComponent({
  setup() {
    const nickname = ""
    return{nickname}

  }
})
</script>
<style lang="">
</style>