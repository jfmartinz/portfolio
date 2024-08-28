<template>
  <div class="content">
    <h1>Joseph Martin</h1>

    <p>
      <ul>
        <li>studies computer science at  <a href="https://unc.edu.ph/" target="_blank">University Of Nueva Caceres</a></li>
        <li>my interest lies in front-end but does full stack as well.</li>
        <li>loves open-source. participate in GSSOC, SWOC, and Hacktoberfest.</li>
        <li>occasionally write blogs.</li>
      </ul>
    </p>
<br>
<details>
<summary>More about me :)</summary>
  <ul>
    <li>inquisitive.</li>
    <li>easily bored (embrace boredom).</li>
    <li>loves to read (usually self-help books)</li>
    <li>loves DSA (not really)</li>
    <li>solitude (mainly for instropection)</li>
    <li>loves to try and explore new things.</li>
  </ul>
</details>


 
    <br />

    <div class="connect">
      <h3>Connect With Me:</h3>
      <a href="https://www.linkedin.com/in/jfmartinz/">LinkedIn</a> |
      <a href="https://github.com/jfmartinz">GitHub</a> |
      <a href="https://dev.to/jfmartinz">Blog (Dev.to)</a> |
      <a href="https://twitter.com/jfmartinz">X (Twitter)</a>
    </div>
    <br />
    <details>
      <summary>meowwww</summary>
      <img src="/cat.jpg" alt="cat" class="cat" />
    </details>
  </div>

  <div class="date">
    // Last updated on 28/8/24 by <a href="https://github.com/jfmartinz">jfmartinz</a>
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
