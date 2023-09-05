<script setup lang="ts">
import { computed, ref } from 'vue'
import MenuSelector from '@/components/shared/MenuSelector.vue'
import { skills } from './config.ts'

const selectedCategoryIndex = ref<number>(0)

const selectCategory = (index: number): void => {
  selectedCategoryIndex.value = index
}

const selectedCategorySkills = computed<[string, string][]>(() => {
  return skills[selectedCategoryIndex.value].technologies
})

const categories = computed<string[]>(() => {
  return skills.map((skill) => skill.category)
})
</script>

<template>
  <section class="about-skills">
    <h2>Skills & Technologies</h2>
    <MenuSelector
      :selectors="categories"
      :selected-index="selectedCategoryIndex"
      right-align
      @select="selectCategory"
    >
      <div class="logo-row">
        <div v-for="skill in selectedCategorySkills" :key="skill[0]" class="skill">
          <i :class="skill[1]"></i>
          {{ skill[0] }}
        </div>
      </div>
    </MenuSelector>
  </section>
</template>

<style lang="scss" scoped>
.about-skills {
  margin-bottom: $margin-xl;
  h2 {
    font-size: $font-size-xl;
    margin-bottom: $margin-lg;
  }
  .logo-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    font-weight: $font-medium;
    font-size: $font-size-sm;
    color: $quaternary;
    i {
      display: block;
      font-size: $font-size-giant;
      padding: $padding-sm;
    }
    .skill {
      padding: $padding-sm;
    }
  }
}
</style>
