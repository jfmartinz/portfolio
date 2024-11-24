<template>
  <header class="header">
    <h1 class="header__title">latest blog posts</h1>
    <p class="header__description">
      writes about open-source, cs, learnings/experiences and anything worth sharing.
      <a href="https://dev.to/jfmartinz" target="_blank" rel="noopener noreferrer" class="devto"
        >dev.to</a
      >
      account.
    </p>
  </header>

  <article class="blog">
    <div v-if="loading" class="loading">Loading...</div>
    <section v-else class="blog-post" v-for="blog in blogPosts" :key="blog.id">
      <h2 class="blog-post__title">
        <a :href="blog.url" target="_blank" rel="noopener noreferrer" class="blog-post__link">
          {{ blog.title }}
        </a>
      </h2>
      <p class="blog-post__description">
        {{ blog.description }}
      </p>

      <section class="blog-post__details">
        <div class="wrapper">
          <p class="blog-post__readable-publish-date">{{ blog.readable_publish_date }}</p>
          <p class="blog-post__reading-time-mins">{{ blog.reading_time_minutes }} mins</p>
        </div>
      </section>
    </section>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogView',
  data() {
    return {
      blogPosts: [], // array to store blog posts
      loading: true // loading state
    }
  },
  mounted() {
    this.getBlogPost()
  },
  methods: {
    // Fetch blog post from the API
    async getBlogPost() {
      try {
        const response = await axios.get('http://localhost/api_jfmartinz/devBlogApi.php')
        this.blogPosts = response.data
        // Limit the number of blog posts to 3
        if (this.blogPosts.length > 3) {
          this.blogPosts = this.blogPosts.slice(0, 3)
        }
      } catch (error) {
        console.error('Error fetching blog post: ', error)
      } finally {
        this.loading = false // set loading to false after fetching
      }
    }
  }
}
</script>

<style scoped>
.blog-post__details .wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3125rem;
}
.wrapper p {
  margin: 0;

  color: var(--textclr2);
  font-size: 0.875rem;
  font-family: var(--fonts2);
  font-weight: 200;
  font-style: italic;
  line-height: 1.5rem;

  text-transform: lowercase;
}
.blog-post .blog-post__link:active {
  text-decoration: none;
}
.blog-post .blog-post__link {
  text-decoration: none;
  text-transform: lowercase;
}
.blog {
  margin-top: 3rem;
  user-select: none;
}
.blog-post {
  margin-top: 3rem;
}
.blog-post .blog-post__description {
  color: var(--textclr2);
  font-size: 0.875rem;
  font-family: var(--fonts2);
  font-weight: 200;
  font-style: italic;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-transform: lowercase;
}
.blog-post .blog-post__link {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-size: 1.25rem;
  font-weight: 400;
  text-decoration: underline;
}
.blog-post .blog-post__title {
  margin-bottom: 0;
}

/* Header styles */
.devto {
  color: var(--textclr1);
}

.header .header__title {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
}

.header .header__description {
  color: var(--textclr2);
  font-family: var(--fonts2);
  font-size: 1rem;
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 0;
  line-height: 1.5rem;
  font-weight: 200;
}

/* Loading animation styles */
.loading {
  font-size: 1.5rem;
  margin-top: 2rem;
  color: var(--textclr2);
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
