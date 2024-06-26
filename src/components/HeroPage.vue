<template>
  <div class="content">
    <p>
      Hello! 👋🏻<br /><br />
      I am Joseph Martin, currently an undergraduate Computer Science student at the
      <a href="https://unc.edu.ph/" target="_blank">University of Nueva Caceres</a>. My interest
      lies in front-end development.
    </p>
    <br />
    <p>
      I actively participate in and contribute to OPEN-SOURCE and
      <a href="https://mlh.io/" target="_blank">HACKATHONS</a>. This helps me stay updated in the
      field, build my online presence, make friends, and build my skills and knowledge while having
      fun.
    </p>
    <br />
    <p>When not coding, I enjoy spending my time listening to music, reading, and solitude.</p>
    <br />
    🌐 <a href="https://linktr.ee/jfmartinz" target="_blank">Connect with Me</a>
  </div>

  <div class="date">
    // Last updated on 26/6/24 by <a href="https://github.com/jfmartinz">jfmartinz</a>
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
