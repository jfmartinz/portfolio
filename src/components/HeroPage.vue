<template>
  <div class="content">
    <h1>Joseph Martin | Front-End Vue Js Developer</h1>

    <p>
      An undergraduate Computer Science student at
      <a href="https://unc.edu.ph/" target="_blank">University of Nueva Caceres</a>. My interest
      lies in front-end development.
    </p>

    <div class="currently">
      <h3>Currently:</h3>
      <li>Learning DSA</li>
      <li>Learning Vue, ExpressJs, and MongoDB</li>
      <li>Building my Portfolio (Projects)</li>
    </div>
    <br />

    <div class="connect">
      <h3>Connect With Me:</h3>
      <a href="https://www.linkedin.com/in/jfmartinz/">LinkedIn</a> |
      <a href="https://github.com/jfmartinz">GitHub</a> |
      <a href="https://twitter.com/jfmartinz">X (Twitter)</a>
    </div>
    <br />
    <details>
      <summary>meowwww</summary>
      <img src="/cat.jpg" alt="cat" class="cat" />
    </details>
  </div>

  <div class="date">
    // Last updated on 29/7/24 by <a href="https://github.com/jfmartinz">jfmartinz</a>
    <p>Temporary</p>
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
  margin-top: 10px;
}
.content {
  padding: 0 1rem;
  margin-top: 20px;
  max-width: 800px;
}

.date {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
