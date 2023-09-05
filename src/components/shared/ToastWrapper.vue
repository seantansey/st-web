<script setup lang="ts">
import { useUIStore } from '@/stores/ui'
const store = useUIStore()
</script>

<template>
  <ul class="toasts">
    <TransitionGroup name="slide-fade">
      <li v-for="toast in store.toasts" :key="toast.key" class="toast">
        <font-awesome-icon
          v-if="toast.type === 'success'"
          icon="fa-solid fa-circle-check" 
          class="success"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-circle-xmark"
          class="error"
        />
        <span class="toast-text">{{ toast.message }}</span>
        <button class="close-button" @click="store.removeToast(toast)">          
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </li>
    </TransitionGroup>
  </ul>
</template>

<style lang="scss" scoped>
  .toasts {
    position: fixed;
    top: $margin;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    margin: 0;
    .toast {
      display: flex;
      position: relative;
      list-style-type: none;
      background: $bg-secondary;
      margin: $margin-sm 0;
      padding: $padding;
      border-radius: 5px;
      width: 280px;
      box-shadow: 0 1px 2px 0 rgba(black, 0.5);
      .success {
        color: $secondary;
      }
      .error {
        color: $error
      }
      .close-button {
        position:absolute;
        top: $margin-sm;
        right: $margin-sm;
        background: none;
        border: none;
        color: $tertiary;
        :hover {
          cursor: pointer;
          color: $quaternary;
        }
      }
      &-text {
        font-size: $font-size-sm;
        font-weight: $font-medium;
        margin: 0 $margin-sm;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
</style>