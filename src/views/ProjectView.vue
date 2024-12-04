<template>
  <header class="header">
    <h1 class="header__title">projects</h1>
    <p class="header__description">some of my projects.</p>
  </header>

  <article class="container">
    <section class="project">
      <h2 class="project__title">findrecipe</h2>

      <section class="project__description">
        <p>
          findrecipe is a recipe discovery website that allows users to explore and search for
          various cuisines from around the world. it retrieves detailed recipe information,
          including ingredients, instructions, etc. using the mealdb api.
        </p>
      </section>

      <section class="project__stack">
        <div class="flex">
          <p>tech stack:</p>
          <div class="project__stacks">
            <img
              v-for="tech in techs"
              :key="tech.title"
              :title="tech.title"
              :src="tech.src"
              :alt="tech.alt"
              class="project__img"
              v-tooltip="tech.title"
            />
          </div>
        </div>
      </section>

      <section class="project__links">
        <div class="project__code">
          <Github :color="textclr1" class="project__icon-github" />
          <a
            href="https://github.com/jfmartinz/FindRecipe"
            target="_blank"
            aria-label="Source Code"
            title="Source Code"
            >source code</a
          >
        </div>
        <div class="project__live">
          <Eye :color="textclr1" class="project__icon-eye" />
          <a
            target="_blank"
            href="https://find-recipe-web.vercel.app/"
            aria-label="Live Preview"
            title="Live Preview"
            >live preview</a
          >
        </div>
      </section>
    </section>
  </article>
</template>

<script>
import { Eye } from 'lucide-vue-next'
import { Github } from 'lucide-vue-next'

export default {
  name: 'ProjectView',
  data() {
    return {
      textclr1: 'var(--textclr1)',
      size: 20,
      techs: [
        { alt: 'HTML', title: 'HTML', src: '/html.svg' },
        { alt: 'CSS', title: 'CSS', src: '/css3.svg' },
        { alt: 'JAVASCRIPT', title: 'JAVASCRIPT', src: '/js.svg' },
        { alt: 'SWIPER JS', title: 'SWIPER JS', src: '/swiper-logo.svg' },
        { alt: 'MEALDB API', title: 'MEALDB API', src: '/mealdbapi.svg' }
      ]
    }
  },
  components: {
    Eye,
    Github
  }
}
</script>

<style scoped>
.container {
  margin-top: 2rem;
}

.project__links {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  min-height: 50px;
  margin-top: 30px;
}
.project__links .project__code,
.project__links .project__live {
  display: flex;
  align-items: center;
}
.project__links a {
  color: var(--textclr1);
  margin-left: 8px;
  margin-right: 20px;
  font-style: italic;
  font-weight: 200;
  font-family: var(--fonts2);
}

/* Hover styles */
.project__live:hover a,
.project__live:hover svg,
.project__code:hover a,
.project__code:hover svg {
  color: var(--texthvr1);
  stroke: var(--texthvr1);
  font-weight: 200;
}

.project__title {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-size: 1.25rem;
  margin: 0;
  font-weight: 400;
  margin-top: 40px;
}

.project__description p {
  color: var(--textclr3);
  font-size: 1rem;
  font-family: var(--fonts2);
  font-weight: 200;
  font-style: italic;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.project__stack .flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
}
.project__stack {
  margin-top: 2rem;
}
.project__stack p {
  color: var(--textclr3);
  font-family: var(--fonts2);
  font-style: italic;
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
}

.project__stacks .project__img {
  min-width: 50px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
}

/* header styles */
.header .header__title {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
}
.header .header__description {
  color: var(--textclr2);
  font-size: 1rem;
  font-family: var(--fonts2);
  font-weight: 200;
  font-style: italic;
  line-height: 1.5rem;
  margin-top: 0.5rem;
}
</style>
