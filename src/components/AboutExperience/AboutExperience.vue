<script setup lang="ts">
import { computed, ref } from 'vue'
import MenuSelector from '@/components/shared/MenuSelector.vue'
import {type Experience, experiences } from './config.ts'

const selectedExperienceIndex = ref<number>(0)

const formatDateString = (start: Date, end: Date): string => {
  const options: object = { month: 'short', year: 'numeric' }
  const months: number = end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear()) + 1
  let duration: string
  if (months % 12 === 0) {
    duration = `${months / 12} yr`
  } else if (months > 12) {
    duration = `${Math.floor(months / 12)} yr ${months % 12} mos`
  } else {
    duration = `${months} mos`
  }
  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString(
    'en-US',
    options
  )} (${duration})`
}

const selectExperience = (index: number): void => {
  selectedExperienceIndex.value = index
}

const selectedExperience = computed<Experience>(() => {
  return experiences[selectedExperienceIndex.value]
})

const companies = computed<string[]>(() => {
  return experiences.map((exp) => exp.company)
})

const technologies = computed<string>(() => {
  const technologies = experiences[selectedExperienceIndex.value].technologies || []
  return technologies.join(' · ')
})
</script>

<template>
  <section class="about-experience">
    <h2>Experience</h2>
    <MenuSelector
      :selected-index="selectedExperienceIndex"
      :selectors="companies"
      @select="selectExperience"
    >
      <div class="experience-content">
        <div class="experience-label">{{ selectedExperience.company }}</div>
        <div v-for="position in selectedExperience.positions" :key="position.title">
          <h3>{{ position.title }}</h3>
          <div class="job-dates">
            {{ formatDateString(position.start, position.end) }}
          </div>
        </div>
        <ul>
          <li v-for="(highlight, index) in selectedExperience.highlights" :key="index">
            <span class="bullet-point"
              ><font-awesome-icon icon="fa-solid fa-circle-nodes" size="xs"
            /></span>
            {{ highlight }}
          </li>
        </ul>
        <div v-if="technologies.length" class="experience-label">
          Primary technologies
          <div class="job-technologies">{{ technologies }}</div>
        </div>
      </div>
    </MenuSelector>
  </section>
</template>

<style lang="scss" scoped>
.about-experience {
  margin-bottom: $margin-xl;
  h2 {
    font-size: $font-size-xl;
    margin-top: 0;
    margin-bottom: $margin;
  }
  .experience-content {
    .experience-label {
      color: $secondary;
      font-weight: $font-bold;
    }
    h3 {
      margin: $margin-xs 0;
    }
    .job-dates {
      color: $tertiary;
      font-size: $font-size-sm;
      font-weight: $font-medium;
    }
    ul {
      list-style-type: none;
      margin: 0 0 $margin 0;
      padding: 0;
    }
    li {
      display: flex;
      margin: $margin-sm 0;
      color: $quaternary;
      .bullet-point {
        margin-right: $margin;
        color: $secondary;
      }
    }
    .job-technologies {
      margin-top: $margin-xs;
      font-size: $font-size-sm;
      color: $quaternary;
      font-weight: $font-medium;
    }
  }
}
</style>
