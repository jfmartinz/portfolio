<template>
  <!-- Navbar when screen size is >= 768px -->
  <header class="header">
    <div class="header__top">
      <a href="/">jfmartinz</a>
    </div>
    <nav class="header__links">
      <!-- Use for loop to optimzie, same thing with mobile below -->
      <routerLink
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        :exact-active-class="route.styleActive"
        >{{ route.name }}</routerLink
      >
    </nav>
  </header>

  <!-- Mobile Navbar: Responsive -->
  <div class="mobile">
    <header class="mobile__header">
      <a href="/">jfmartinz</a>
      <button @click="toggleMenu()" aria-label="menuButton" class="mobile__header--menu">
        <AlignJustify :size="size" :color="textclr3" />
      </button>
    </header>
    <Transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
    >
      <div class="wrapper" v-if="isActive" :class="{ active: isActive }">
        <section class="container">
          <!-- Links -->
          <button class="mobile__close-button">
            <X
              :size="size"
              :color="textclr3"
              title="Close menu"
              @click="closeMenu()"
              :class="{ active: isActive }"
            />
          </button>
          <nav class="mobile__links">
            <routerLink
              v-for="route in routes"
              :key="route.name"
              :to="route.path"
              :exact-active-class="route.styleActive"
              @click="closeMenu()"
              >{{ route.name }}</routerLink
            >
          </nav>

          <!-- Socials -->
          <section class="mobile__aside">
            <section class="mobile__socials">
              <a
                href="https://www.linkedin.com/in/jfmartinz/"
                target="_blank"
                title="LinkedIn"
                rel="noopener noreferrer"
                ><Linkedin :color="textclr3" class="mobile__socials--linkedin"
              /></a>
              <a
                href="https://github.com/jfmartinz"
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
                ><Github :color="textclr3" class="mobile__socials--github"
              /></a>
              <a
                href="https://twitter.com/jfmartinz"
                target="_blank"
                title="X/Twitter"
                rel="noopener noreferrer"
                ><Twitter :color="textclr3" class="mobile__socials--twitter"
              /></a>
            </section>

            <section class="mobile__email">
              <p>
                <span>email me:</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=se.josephmartin@gmail.com"
                  target="_blank"
                  title="Email me!"
                  >se.josephmartin@gmail.com</a
                >
              </p>
            </section>
          </section>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import { Linkedin, Twitter, Github, AlignJustify, X } from 'lucide-vue-next'
import 'animate.css'

export default {
  name: 'HeaderPage',
  components: {
    AlignJustify, // hamburger icon
    Linkedin,
    Twitter,
    Github,
    X
  },
  data() {
    return {
      textclr3: 'var(--textclr3)',
      size: 24,
      isActive: false, // menu state
      routes: [
        { name: 'home', path: '/', styleActive: 'active' },
        { name: 'projects', path: '/projects', styleActive: 'active' },
        { name: 'dev.to blog', path: '/blog', styleActive: 'active' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },
    closeMenu() {
      this.isActive = false
    },
    handleClickOutside(event) {
      const mobileMenu = document.querySelector('.mobile')
      if (this.isActive && !mobileMenu.contains(event.target)) {
        this.closeMenu()
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.animate__animated.animate__slideInRight,
.animate__animated.animate__slideOutRight {
  --animate-duration: 0.5s;
}

.mobile__header--menu {
  background-color: transparent;
  border: none;
}
.mobile__close-button {
  text-align: right;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.router-link-active {
  font-weight: bold;
}
.mobile__links a {
  font-size: 1rem;
  color: var(--textclr1);
  font-style: italic;
  font-family: var(--fonts2);
  user-select: none;
}
.mobile__aside {
  width: 100%;
}
.mobile__socials {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.mobile__email {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  font-size: 1rem;
}
.mobile__email span {
  font-family: var(--fonts2);
  color: var(--textclr3);
  display: flex;
  justify-content: flex-start;
  font-style: italic;
}
.mobile__email a {
  font-size: 1rem;
  color: var(--textclr1);
  font-style: italic;
  font-family: var(--fonts2);
  user-select: none;
  word-break: break-all;
}
.mobile__socials .mobile__socials--github:hover,
.mobile__socials .mobile__socials--linkedin:hover,
.mobile__socials .mobile__socials--twitter:hover {
  transform: scale(1.1, 1.1);
  transition: all ease-in cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.mobile__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.mobile__header a {
  font-family: var(--fonts2);
  color: var(--textclr2);
  text-decoration: none;
  font-size: 1rem;
  font-style: italic;
  font-weight: 200;
  text-decoration: none;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.wrapper {
  display: none;
}
.wrapper.active {
  display: block;
  border: 2px solid var(--textclr3);
  border-right: none;
  background-color: #383b40;
  /* width: 100%; */
  padding: 1rem;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
}
.mobile__socials a {
  font-size: 1rem;
  color: var(--textclr1);
  margin-right: 2.5rem;
  font-style: italic;
  font-family: var(--fonts2);
  user-select: none;
}
.mobile {
  margin-top: 3rem;
  width: 100%;
}
.mobile__links {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 0.8;
  max-width: 100%;
  gap: 3rem;
  margin-top: 2rem;
}

.header {
  display: none;
  margin-top: 4rem;
}

@media (min-width: 400px) {
  .wrapper.active {
    left: 40%;
  }
}

@media (min-width: 768px) {
  .mobile {
    display: none;
  }

  .header {
    display: flex;
    flex-direction: column;
  }
  .header__top a {
    font-family: var(--fonts2);
    color: var(--textclr2);
    text-decoration: none;
    font-size: 1rem;
    font-style: italic;
    font-weight: 200;
    text-decoration: none;
  }
  .header__links {
    margin-top: 2rem;
  }
  .header__links a {
    font-family: var(--fonts2);
    color: var(--textclr1);
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    margin-right: 3rem;
  }
  .header__links .router-link-active {
    font-weight: bold;
  }
}
</style>
