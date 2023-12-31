<script setup lang="ts">
import NavBar from './NavBar.vue'
import FooterBar from './FooterBar.vue'
import ToastWrapper from './ToastWrapper.vue'
import { useUIStore } from '../../stores/ui.js'

const store = useUIStore() 

interface Props {
  backButton?: boolean
  title: string
}
withDefaults(defineProps<Props>(), {
  backButton: false
})
</script>

<template>
  <div class="page-template" :class="{ 'no-scroll': store.menuOpen }">
    <header>
      <NavBar />
    </header>
    <div class="content-container">
      <img
        class="background-image"
        src="@/assets/images/circle-nodes-solid.svg"
        alt="Website background image"
      />
      <transition name="fade" appear>
        <div class="page-transition-container">
          <main>
            <div class="page-content">
              <a v-if="backButton" class="back-button" href="#" @click="$router.back()">
                <font-awesome-icon icon="fa-solid fa-chevron-left" size="sm" />
                Back
              </a>
              <h1><span class="fwd-slash">/</span>{{ title }}</h1>
              <slot></slot>
            </div>
          </main>
          <footer>
            <FooterBar />
          </footer>
        </div>
      </transition>
    </div>
    <ToastWrapper/>
  </div>
</template>

<style lang="scss" scoped>
.page-template {
  position: relative;
  header {
    position: sticky;
    top: 0;
    background: $bg;
    z-index: 1;
  }
  .content-container {
    position: relative;
    overflow: hidden;
    .background-image {
      position: absolute;
      height: 1600px;
      top: $navbar-height;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    .page-transition-container {
      .page-content {
        position: relative;
        max-width: $max-width;
        margin: auto;
        padding: $padding-xxl;
        min-height: calc(100vh - ($navbar-height + $footer-height));
        box-sizing: border-box;
        @media only screen and (max-width: $tablet-sm) {
          padding: $padding-xl;
        }
        @media only screen and (max-width: $mobile) {
          padding-left: $padding;
          padding-right: $padding;
        }
        .back-button {
          position: absolute;
          top: rem-calc(40);
          left: $margin-xxl;
          color: $secondary;
          text-decoration: none;
          font-weight: $font-medium;
          @media only screen and (max-width: $tablet-sm) {
            top: $margin;
            left: $margin-xl;
          }
          @media only screen and (max-width: $mobile) {
            left: $margin;
          }
        }
        .back-button:hover {
          cursor: pointer;
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
        .slot-wrapper {
          position: relative;
        }
      }
    }
  }
  &.no-scroll {
    height: 100vh;
    overflow: hidden;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
