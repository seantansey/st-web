<script setup lang="ts">
import PageTemplate from '../components/shared/PageTemplate.vue'
import ContactForm from '../components/ContactForm/ContactForm.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contact | seantansey.com',
  meta: [
    {
      name: 'description',
      content:
        'Interested in working together? Have a question? Contact me through any of the means below!'
    }
  ]
})
</script>

<template>
  <PageTemplate title="Contact">
    <section class="contact">
      <div class="contact-info">
        <h3>
          Interested in working together? Have a question? Contact me through any of the means
          below!
        </h3>
        <h4>Social media</h4>
        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" size="xl" class="social-icon" />
          <span class="social-text">linkedin.com/in/seantansey</span>
        </a>
        <a class="github" href="https://github.com/seantansey" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="lg" class="social-icon" />
          <span class="social-text">github.com/seantansey</span>
        </a>
        <a class="github" href="https://dev.to/seantansey" target="_blank">
          <font-awesome-icon icon="fa-brands fa-dev" size="lg" class="social-icon" />
          <span class="social-text">dev.to/seantansey</span>
        </a>
      </div>
      <div class="contact-form-wrapper">
        <h4>Send a message</h4>
        <ContactForm />
      </div>
    </section>
  </PageTemplate>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: $tablet-sm) {
    flex-direction: column;
  }

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
    margin-top: 0;
    color: $secondary;
    margin-bottom: $margin-sm;
  }
  .contact-info {
    flex: 1;
    margin-right: $margin-lg;
  }
  a {
    display: flex;
    align-items: center;
    margin-bottom: $margin-sm;
    color: $quaternary;
    opacity: 0.6;
    font-size: $font-size;
    &:hover {
      opacity: 1;
    }
    .social-icon {
      margin-right: $margin;
    }
  }
  .contact-form-wrapper {
    flex: 1;
    h4 {
      display: none;
      @media only screen and (max-width: $tablet-sm) {
        display: block;
      }
    }
  }
}
</style>
