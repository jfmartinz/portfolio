<template>
  <div>
    <img src="/pepe.jpeg" alt="Pepe Frog" width="100%" />
    <h1 style="text-align: center">jfmartinz</h1>
    <br />
    <div class="connect">
      <h3>connect with me:</h3>
      <a href="https://www.linkedin.com/in/jfmartinz/">linkedin</a> |
      <a href="https://github.com/jfmartinz">gitHub</a> |
      <a href="https://dev.to/jfmartinz">blog (dev.to)</a> |
      <a href="https://twitter.com/jfmartinz">x (twitter)</a>
    </div>
  </div>

  <div class="date">
    // last updated on 31/8/24 by <a href="https://github.com/jfmartinz">jfmartinz</a>
    <p>temporary</p>
  </div>
</template>

<script>
export default {
  name: 'HeroPage',
  data() {
    return {}
  }
}
</script>

<style scoped>
.cat {
  margin-top: 15px;
  max-width: 100%;
  width: 400px;
}
.currently {
  margin-top: 10px;
}
.connect {
  margin: 10px 0;
  text-align: center;
}

.date {
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
