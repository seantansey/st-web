<script setup lang="ts">
import PageTemplate from '../components/shared/PageTemplate.vue'
import AboutIntroduction from '../components/AboutIntroduction/AboutIntroduction.vue'
import AboutSkills from '../components/AboutSkills/AboutSkills.vue'
import AboutBackground from '../components/AboutBackground/AboutBackground.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'About | seantansey.com',
  meta: [
    {
      name: 'description',
      content:
        "I'm Sean Tansey. A Fullstack Software Engineer specializing in Frontend Development based out of Denver, Colorado."
    }
  ]
})
</script>

<template>
  <PageTemplate title="About">
    <section class="about">
      <AboutIntroduction />
      <AboutBackground />
      <AboutSkills />
    </section>
  </PageTemplate>
</template>
