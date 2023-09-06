<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue'
import PageTemplate from '../components/shared/PageTemplate.vue'
import { type Article, getArticle } from '../api/blog.ts'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const router = useRouter()

const article = reactive<Article>({
  body_html: '',
  cover_image: '',
  description: '',
  title: '',
  url: ''
})

onMounted(async () => {
  const id = route.params?.id as string | undefined
  if (!id) return 
  const data = await getArticle(id)
  if ('error' in data) {
    router.push({ name: 'not-found' })
    return
  }
  article.body_html = data.body_html
  article.cover_image = data.cover_image
  article.description = data.description
  article.title = data.title
  article.url = data.url
})

useHead({
  title: computed(() => `${article.title} | seantansey.com`),
  meta: [
    {
      name: 'description',
      content: computed(() => article.description)
    }
  ]
})
</script>

<template>
  <PageTemplate back-button :title="article.title">
    <article class="blog-post">
      <img :src="article.cover_image" alt="Blog post image" />
      <p>
        Article sourced from dev.to via the dev.to API. View the original article @:
        <a :href="article.url" target="_blank">{{ article.url }}</a>
      </p>
      <div v-html="article.body_html"></div>
    </article>
  </PageTemplate>
</template>

<style lang="scss" scoped>
.blog-post {
  h1 {
    font-size: $font-size-header;
    border-bottom: 1px solid $tertiary;
    padding-bottom: $padding-xs;
    margin-bottom: $margin;
    .fwd-slash {
      color: $secondary;
      margin-right: $margin-xs;
    }
  }
  p {
    color: $quaternary;
    margin: 0;
    font-size: $font-size-sm;
    margin-bottom: $margin-lg;
  }
  a {
    color: $secondary;
  }
}
</style>
