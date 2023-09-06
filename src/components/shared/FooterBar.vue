<template>
  <div class="footer">
    <div class="footer-content">
      <p>This site was built using Vue, TypeScript, NGINX, Node.js, Express and PostgreSQL</p>
      <p>
        <router-link :to="{ name: 'home' }">seantansey.com</router-link> designed & developed by Sean
        Tansey
      </p>
      <div class="social-wrapper">
        <router-link :to="{ name: 'contact' }">
          <font-awesome-icon icon="fa-solid fa-paper-plane" size="lg" />
        </router-link>
        <a href="https://www.linkedin.com/in/seantansey/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" size="lg" />
        </a>
        <a href="https://github.com/seantansey" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="lg" />
        </a>
        <a href="https://dev.to/seantansey" target="_blank">
          <font-awesome-icon icon="fa-brands fa-dev" size="lg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  font-size: $font-size-sm;
  padding: 0 $padding-xxl;
  margin: 0 auto;
  max-width: $max-width;
  box-sizing: border-box;
  @media only screen and (max-width: $tablet-sm) {
    padding-left: $padding-xl;
    padding-right: $padding-xl;
  }
  @media only screen and (max-width: $mobile) {
    padding-left: $padding;
    padding-right: $padding;
  }
  .footer-content {
    padding: $padding 0;
    border-top: 1px solid $border-color;    
  }
  p {
    margin: $margin-xs 0;
    color: $tertiary;
    text-align: center;
    a {
      color: $button-primary-bg;
      opacity: 0.8;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
  .social-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: $margin;
    a {
      color: $tertiary;
      margin: 0 $margin;
      &:hover {
        color: $quaternary;
        cursor: pointer;
      }
    }
  }
}
</style>
