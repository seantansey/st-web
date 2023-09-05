<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import BlogCard from '../components/BlogCard/BlogCard.vue'
import PageTemplate from '../components/shared/PageTemplate.vue'
import { type ArticleSummary, getArticles } from '../api/blog.ts'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Blog | seantansey.com',
  meta: [
    {
      name: 'description',
      content: "A collection of articles I've written on various web development concepts."
    }
  ]
})

const articles = reactive<ArticleSummary[]>([])

onMounted(async () => {
  const data = await getArticles()
  if ('error' in data) return
  articles.push(...data)
})
</script>

<template>
  <PageTemplate title="Blog">
    <section class="article">
      <h3>
        A collection of articles I've written on various web development concepts. Primarily created
        as notes for me to come back to, but you may find them useful as well.
      </h3>
      <div v-if="articles.length">
        <p>
          All blog posts are pulled from the dev.to API. To interact with any of these posts see my
          account @
          <a href="https://dev.to/seantansey" target="_blank">dev.to/seantansey</a>
        </p>
        <BlogCard
          v-for="article in articles"
          :key="article.id"
          :created-at="article.created_at"
          :description="article.description"
          :img="article.social_image"
          :slug="article.slug"
          :tag-list="article.tag_list"
          :title="article.title"
          :url="article.url"
        ></BlogCard>
      </div>
      <div v-else class="no-articles">
        Whoops, nothing to see here....
      </div>
    </section>
  </PageTemplate>
</template>

<style lang="scss" scoped>
.article {
  h1 {
    font-size: $font-size-header;
    border-bottom: 1px solid $border-color;
    padding-bottom: $padding-xs;
    .fwd-slash {
      color: $secondary;
      margin-right: $margin-xs;
    }
  }
  h3 {
    color: $secondary;
  }
  .no-articles {
    padding: $padding-xl 0;
    text-align: center;
    color: $quaternary;
  }
  p {
    color: $quaternary;
    a {
      color: $secondary;
    }
  }
}
</style>
