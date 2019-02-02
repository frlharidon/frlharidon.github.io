<template>
  <section class="container">
    <div>
      <h1 class="title">
        Thibaut Davoult
      </h1>
      <h2 class="subtitle">
        Peronal Website
      </h2>
      <h3>
        2017 - Now: Growth Engineer at <a href="https://livestorm.co/">Livestorm</a>
      </h3>
      <p>Test: <span v-show="seen">now you see me</span></p>

      <ul id="v-for-object">
        <li v-for="job in jobs" :key="job.id">
            {{ job }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      seen: false,
      jobs: {
        lastJob: 'Growth Engineer at Livestorm',
        prevJob: 'Growth & Marketing at Wisembly',
      }
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
