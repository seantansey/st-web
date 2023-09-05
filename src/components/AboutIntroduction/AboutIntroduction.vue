<template>
  <section class="about-introduction">
    <h2>Introduction</h2>
    <div class="flex-row">
      <div class="intro-content">
        <h3>
          I'm Sean, a Software Engineer specializing in frontend development based out of
          Denver, Colorado.
        </h3>
        <p>I enjoy building solutions for complex problems.</p>
        <p>
          While trained in fullstack development I've found myself drawn to building user interfaces from the
          ground up. I particularly enjoy creating rich user experiences using modern JavaScript frameworks such as Vue, Svelte, or React.
        </p>
        <p>
          A firm believer in continuous growth and lifelong learning, I consistently
          challenge my understanding, hone my craft and work to better myself as a developer
          and person. A principle that's as relevant to my career as it is to my overall life.
        </p>
      </div>
      <div class="intro-image">
        <img src="@/assets/images/denver_headshot.jpg" alt="Sean Tansey headshot" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-introduction {
  margin-bottom: $margin-xl;
  h2 {
    font-size: $font-size-xl;
    margin-top: 0;
    margin-bottom: $margin-lg;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: $tablet-sm) {
      flex-direction: column;
    }
  }
  .intro-content {
    margin-right: $margin-xl;
    flex: 1;
    @media only screen and (max-width: $tablet-sm) {
      margin-right: 0;
      margin-bottom: $margin;
    }
    h3 {
      color: $secondary;
      margin: 0;
    }
    p {
      color: $quaternary;
    }
    a {
      color: $secondary;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .intro-image {
    flex: 1;
    text-align: center;
    img {
      width: 100%;
      max-width: 400px;
      border-radius: 5px;
      box-shadow: 2px 5px 10px 0 rgba(black, 0.5);
    }
  }
}
</style>
