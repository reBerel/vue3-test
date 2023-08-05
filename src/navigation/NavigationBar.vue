<template lang="">
  <nav class="navbar fixed-top app-container navbar-expand-md" style="background-color: white; color: white; opacity:0.9;">

      <a class="navbar-brand" href="/">We-Meet</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link class="nav-link active"  to="board-list">게시판</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              체크
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">          
          </li>
        </ul>      
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success rounded-5" type="submit">Search</button>
        </form>
        <router-link class="nav-link" to="/sign-in" style="color: #000000">로그인</router-link>
        <Button class="btn btn-praimary">123</Button>
      </div>

</nav>
</template>
<script lang="ts">
export default {
    
}
</script>
<style>

</style>