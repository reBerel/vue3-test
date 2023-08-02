<template lang="">
    <div class="board-container">
        <span>게시판</span>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

export default {
    
}
</script>
<style>

.board-container {
  max-width: 70%;
  margin-top:  20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 200px;
  padding-right: 200px;
}
</style>