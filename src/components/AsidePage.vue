<template>
  <aside :class="{ 'aside--sticky': isSticky }">
    <section class="icons">
      <a
        href="https://www.linkedin.com/in/jfmartinz/"
        target="_blank"
        title="LinkedIn"
        data-umami-event="LinkedIn Icon"
        ><Linkedin :color="textclr3" class="icons-linkedin"
      /></a>
      <a
        href="https://github.com/jfmartinz"
        target="_blank"
        title="GitHub"
        data-umami-event="GitHub Icon"
        ><Github :color="textclr3" class="icons-github"
      /></a>
      <a
        href="https://twitter.com/jfmartinz"
        target="_blank"
        title="X/Twitter"
        data-umami-event="Twitter Icon"
        ><Twitter :color="textclr3" class="icons-twitter"
      /></a>
    </section>

    <section class="email">
      <p>
        <span>email me:</span>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=se.josephmartin@gmail.com"
          target="_blank"
          title="Email me!"
          class="email__link"
          rel="noopener noreferrer"
          data-umami-event="Email Link"
          >se.josephmartin@gmail.com</a
        >
      </p>
    </section>
  </aside>
</template>

<script>
import { Linkedin } from 'lucide-vue-next'
import { Twitter } from 'lucide-vue-next'
import { Github } from 'lucide-vue-next'

export default {
  name: 'AsidePage',
  data() {
    return {
      textclr3: 'var(--textclr3)',
      size: 20,
      isSticky: false
    }
  },
  components: {
    Linkedin,
    Twitter,
    Github
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY >= 100
    }
  }
}
</script>

<style scoped>
.aside--sticky {
  position: fixed;
  top: 20px;
  right: 270px;
}
.icons {
  display: flex;
  justify-content: end;
}
.icons .icons-github {
  margin: 0 1.5rem;
}
.icons .icons-github:hover,
.icons .icons-linkedin:hover,
.icons .icons-twitter:hover {
  transform: scale(1.1, 1.1);
  transition: all ease-in cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.email {
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  font-size: 1rem;
}
.email span {
  font-family: var(--fonts2);
  color: var(--textclr3);
  display: flex;
  justify-content: end;
  font-style: italic;
}
.email .email__link {
  color: var(--textclr1);
  font-family: var(--fonts2);
  font-weight: 200;
  user-select: none;
}
.email .email__link:hover {
  color: var(--texthvr1);
  font-weight: 200;
}

@media (min-width: 768px) {
  .aside--sticky {
    right: 45px;
  }
}
@media (min-width: 1000px) {
  .aside--sticky {
    right: 50px;
  }
}
@media (min-width: 1100px) {
  .aside--sticky {
    right: 120px;
  }
}
@media (min-width: 1287px) {
  .aside--sticky {
    right: 270px;
  }
}
</style>
