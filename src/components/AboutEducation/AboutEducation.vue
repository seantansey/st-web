<script setup lang="ts">
import { computed, ref } from 'vue'
import MenuSelector from '../shared/MenuSelector.vue'
import { type School, schools } from './config.ts'

const selectedIndex = ref<number>(0)

const select = (index: number): void => {
  selectedIndex.value = index
}

const selectedEducation = computed<School>(() => {
  return schools[selectedIndex.value]
})

const titles = computed<string[]>(() => {
  return schools.map((school) => school.title)
})
</script>

<template>
  <section class="about-education">
    <h2>Education</h2>
    <MenuSelector :selectors="titles" :selected-index="selectedIndex" @select="select">
      <div>
        <h3>
          {{ selectedEducation.program }}<span class="at-symbol"> @ </span
          ><span class="education-title">{{ selectedEducation.title }}</span>
        </h3>
        <div class="education-data">
          <font-awesome-icon icon="fa-solid fa-calendar" />
          <span class="education-data-text">{{ selectedEducation.dates }}</span>
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <span class="education-data-text">{{ selectedEducation.location }}</span>
        </div>
      </div>
    </MenuSelector>
  </section>
</template>

<style lang="scss" scoped>
.about-education {
  margin-bottom: $margin-xl;
  h2 {
    font-size: $font-size-xl;
  }
  h3 {
    margin-top: 0;
    margin-bottom: $margin-sm;
    .at-symbol {
      color: $tertiary;
    }
    .education-title {
      color: $secondary;
    }
  }
  .education-data {
    font-size: $font-size-sm;
    color: $tertiary;
    font-weight: $font-medium;
    .education-data-text {
      margin: 0 $margin-sm;
    }
  }
}
</style>
