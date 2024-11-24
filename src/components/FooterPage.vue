<template>
  <footer class="footer">
    <p>2024©jfmartinz</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  data() {
    return {}
  }
}
</script>

<style scoped>
.footer {
  min-height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
}
.footer p {
  font-family: var(--fonts2);
  color: var(--textclr2);
  font-size: 0.9rem;
  font-style: italic;
  opacity: 0.8;
  margin: 0;
}
</style>
