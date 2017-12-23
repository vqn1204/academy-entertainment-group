<template>
  <div>
    <div id="about">
      <b-img src="https://i.imgur.com/9OlyQPH.jpg" fluid alt="Fluid Image"/>
      <b-jumbotron header="About">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec faucibus massa. Pellentesque vitae imperdiet ex. Quisque posuere porttitor elit nec faucibus. Suspendisse potenti. Nullam odio nisi, suscipit in interdum nec, sodales a est. Nam aliquam sem vel libero scelerisque pulvinar. Ut ac nisl nec leo dapibus venenatis. Donec nunc purus, dictum sed lectus eget, porta pretium erat. Cras accumsan fermentum tortor at luctus. Nulla facilisi. Curabitur pretium aliquet tellus, quis euismod justo sagittis in. Vivamus vel ex auctor, rhoncus sem vitae, convallis nunc. Maecenas vitae odio tincidunt, faucibus tortor eget, maximus lectus. Fusce id ex ante. </p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    padding: 0em 1em 1em 1em;
    text-align: justify;
  }

  .jumbotron {
    background-color: black;
    color: white;
    padding: 2rem 2rem;
  }
</style>
