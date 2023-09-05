<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type Message, validateMessage, postMessage } from '@/api/contact.ts'

const formData: Message = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sending = ref<boolean>(false)

const resetForm = (): void => {
  ;(formData.name = ''), (formData.email = ''), (formData.subject = ''), (formData.message = '')
}

const submitForm = async (): Promise<void> => {
  sending.value = true
  const message = await postMessage(formData)
  sending.value = false
  if ('error' in message) return
  resetForm()
}

const autoResize = (event: Event): void => {
    const { parentNode, value } = event.target as HTMLInputElement
    if (parentNode instanceof HTMLElement) {
      parentNode.dataset.replicatedValue = value
    }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-input">
      <label :class="{ complete: formData.name }" for="name">Name <span class="required">*</span></label>
      <input 
        v-model="formData.name"
        id="name"
        type="text"
        placeholder="John Doe"
        maxlength="100"
        autocomplete="name"
      />
      <div class="character-count">{{ formData.name.length }}/100</div>
    </div>
    <div class="form-input">
      <label :class="{ complete: formData.email }" for="email">Email Address <span class="required">*</span></label>
      <input
        v-model="formData.email"
        id="email"
        type="email"
        placeholder="john.doe@example.com"
        maxlength="100"
        autocomplete="email"
        style="background: transparent !important"
      />
      <div class="character-count">{{ formData.email.length }}/100</div>
    </div>
    <div class="form-input">
      <label :class="{ complete: formData.subject }" for="subject">Subject <span class="required">*</span></label>
      <input v-model="formData.subject" id="subject" type="text" placeholder="Subject" maxlength="100" />
      <div class="character-count">{{ formData.subject.length }}/100</div>
    </div>
    <div class="form-input">
      <label :class="{ complete: formData.message }" for="message">Message <span class="required">*</span></label>
      <div class="grow-wrap">
        <textarea
          v-model="formData.message"
          id="message"
          placeholder="Brief description of the services you are looking for..."
          maxlength="2000"
          spellcheck
          rows="1"
          @input="autoResize"
        ></textarea>
      </div>
      <div class="character-count">{{ formData.message.length }}/2000</div>
    </div>
    <div class="button-row">
      <button :disabled="!validateMessage(formData)|| sending" type="submit" class="btn btn-primary">
        <span>Send</span>
        <font-awesome-icon v-if="sending" icon="fa-solid fa-spinner" spin class="spinner" />
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.contact-form {
  flex: 1;
  .form-input {
    display: flex;
    flex-direction: column;
    margin-bottom: $margin;
    position: relative;
    label {
      display: block;
      font-size: $font-size-xs;
      margin-bottom: $margin-xs;
      font-weight: $font-bold;
      color: $primary;
      &.complete,
      .required {
        color: $secondary;
      }
    }
    input,
    textarea {
      background: transparent;
      border: none;
      border-bottom: 1px solid $border-color;
      outline: none;
      color: $primary;
      padding: $padding-xs 0;
      resize: vertical;
      font-size: $font-size-sm;
    }
    textarea {
      min-height: 16px;
      font-family: inherit;
    }
    ::placeholder {
      color: $tertiary;
    }
    input:focus,
    textarea:focus,
    input:hover,
    textarea:hover {
      border-color: $secondary;
    }
    .grow-wrap {
      display: grid;
    }
    .grow-wrap::after {
      content: attr(data-replicated-value) " ";
      white-space: pre-wrap;
      visibility: hidden;
    }
    .grow-wrap > textarea {
      resize: none;
      overflow: hidden;
    }
    .grow-wrap > textarea,
    .grow-wrap::after {
      grid-area: 1 / 1 / 2 / 2;
    }
    .character-count {
      display: none;
      position: absolute;
      bottom: -$margin;
      right: 0;
      font-size: $font-size-xs;
      color: $quaternary;
      text-align: right;
    }
    input:focus + .character-count,
    textarea:focus + .character-count {
      display: block;
    }
  }
  :deep(.btn) {
    margin-left: 0;
  }
  .spinner {
    color: $secondary;
    margin-left: $margin-sm;
  }
}
</style>
