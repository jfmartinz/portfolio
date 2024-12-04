<template>
  <main class="hero">
    <section class="hero__headings">
      <h1 class="hero__title">hey! i am joseph martin</h1>
      <h2 class="hero__subtitle">front-end <span class="hero__highlight">VUE.JS</span> dev</h2>
    </section>

    <section class="hero__description">
      <p>
        i'm a third-year computer science student at the university of nueva caceres, philippines 📍
      </p>

      <p>seeking summer internship opportunity to apply my skills in real-world projects.</p>
    </section>

    <section class="hero__stack">
      <div class="stack">
        <p class="stack__title">skills:</p>
        <div class="stack__techs">
          <img
            class="stack__img"
            width="50"
            height="30"
            v-for="tech in techs"
            :key="tech.title"
            :title="tech.title"
            :src="tech.src"
            :alt="tech.alt"
            v-tooltip="tech.title"
          />
        </div>
      </div>
    </section>

    <section class="hero__resume">
      <StickyNote :size="size" :color="textclr1" class="hero__resume-icon" />
      <a href="#" class="hero__resume-link" data-umami-event="Resume Button">RESUME (PDF)</a>
    </section>
  </main>
</template>

<script>
import { StickyNote } from 'lucide-vue-next'

export default {
  name: 'HeroView',
  data() {
    return {
      textclr1: 'var(--textclr1)',
      size: 24,
      techs: [
        { alt: 'HTML', title: 'HTML', src: '/html.svg' },
        { alt: 'CSS', title: 'CSS', src: '/css3.svg' },
        { alt: 'JAVASCRIPT', title: 'JAVASCRIPT', src: '/js.svg' },
        { alt: 'VUE', title: 'VUE', src: '/vue.svg' },
        { alt: 'NODEJS', title: 'NODE', src: '/icons8-nodejs.svg' },
        { alt: 'EXPRESSJS', title: 'EXPRESSJS', src: '/icons8-express-js.svg' },
        { alt: 'MONGODB', title: 'MONGODB', src: '/icons8-mongodb.svg' }
      ]
    }
  },
  components: {
    StickyNote
  }
}
</script>

<style scoped>
/* Hover styles */
.hero__resume:hover .hero__resume-icon,
.hero__resume:hover .hero__resume-link {
  color: var(--texthvr1);
  stroke: var(--texthvr1);
  font-weight: 200;
}
.hero {
  width: 100%;
}
.hero__headings .hero__title {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-style: italic;
  font-weight: 200;
  margin: 0;
  font-size: 1.5rem;
  position: relative;
}
.hero__headings .hero__subtitle {
  color: var(--textclr2);
  font-family: var(--fonts1);
  font-size: 2.5rem;
  margin: 0;
}
.hero__highlight {
  color: var(--textclr1);
}
/* first paragraph */
.hero__description p {
  color: var(--textclr3);
  font-family: var(--fonts2);
  font-style: italic;
  font-weight: 200;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.hero__description :nth-child(2) {
  margin-top: 1rem;
}
.hero__resume .hero__resume-link {
  font-family: var(--fonts2);
  color: var(--textclr1);
  font-size: 1rem;
  font-style: italic;
  margin-left: 8px;
  font-weight: 200;
}
.hero__resume {
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-top: 30px;
}
.hero__stack {
  margin-top: 2rem;
}
.hero__stack .stack {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
}
.stack .stack__title {
  color: var(--textclr3);
  font-family: var(--fonts2);
  font-style: italic;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
}
.stack__techs .stack__img {
  min-width: 50px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
}
</style>
