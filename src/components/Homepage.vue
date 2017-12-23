<template>
  <div>
    
    <div id="about">
      <b-img src="https://i.imgur.com/9OlyQPH.jpg" fluid alt="Fluid Image"/>
      <b-jumbotron header="About">
        <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec faucibus massa. Pellentesque vitae imperdiet ex. Quisque posuere porttitor elit nec faucibus. Suspendisse potenti. Nullam odio nisi, suscipit in interdum nec, sodales a est. Nam aliquam sem vel libero scelerisque pulvinar. Ut ac nisl nec leo dapibus venenatis. Donec nunc purus, dictum sed lectus eget, porta pretium erat. Cras accumsan fermentum tortor at luctus. Nulla facilisi. Curabitur pretium aliquet tellus, quis euismod justo sagittis in. Vivamus vel ex auctor, rhoncus sem vitae, convallis nunc. Maecenas vitae odio tincidunt, faucibus tortor eget, maximus lectus. Fusce id ex ante. </p>
      </b-jumbotron>
      <b-img src="https://i.imgur.com/V7utNF9.jpg" fluid alt="Fluid Image"/>
    </div>


    <div id="members">
      <h1>Members</h1>
        <b-container fluid>
          <b-row align-v="center" no-gutters>
            <b-col no-gutters>
              <b-img class="thumb" rounded="circle" thumbnail src="https://i.imgur.com/GFoj0nv.jpg" alt="Thumbnail"/>
              <h3>Pierce Ripanti</h3>
              <a target="_blank" href="http://www.instagram.com/primetimepierce"><img src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png"></a>
              <a target="_blank" href="http://www.facebook.com/pierce.ripanti"><img src="//login.create.net/images/icons/user/facebook_30x30.png"></a>
              <a target="_blank" href="http://www.twitter.com/primetimepierce"><img src="//login.create.net/images/icons/user/twitter_30x30.png"></a>
            </b-col>
            <b-col no-gutters>
              <p id="member-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec faucibus massa. Pellentesque vitae imperdiet ex. Quisque posuere porttitor elit nec faucibus. Suspendisse potenti. Nullam odio nisi, suscipit in interdum nec, sodales a est. Nam aliquam sem vel libero scelerisque pulvinar. Ut ac nisl nec leo dapibus venenatis. Donec nunc purus, dictum sed lectus eget, porta pretium erat. Cras accumsan fermentum tortor at luctus. Nulla facilisi. Curabitur pretium aliquet tellus, quis euismod justo sagittis in. Vivamus vel ex auctor, rhoncus sem vitae, convallis nunc. Maecenas vitae odio tincidunt, faucibus tortor eget, maximus lectus. Fusce id ex ante. </p>
            </b-col>
          </b-row>
        </b-container>

          <b-container fluid>
            <b-row align-v="center" no-gutters>
              <b-col no-gutters>
                <b-img class="thumb" rounded="circle" thumbnail src="https://i.imgur.com/1vBIUNp.png" alt="Thumbnail"/>
                <h3>Troy Glenn</h3>
                  <a target="_blank" href="http://www.instagram.com/t.royal__"><img src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram30x30.png"></a>
                  <a target="_blank" href="http://www.facebook.com/troy.glenn.5"><img src="//login.create.net/images/icons/user/facebook_30x30.png"></a>
                  <a target="_blank" href="http://www.twitter.com/t_royal_"><img src="//login.create.net/images/icons/user/twitter_30x30.png"></a>
              </b-col>
              <b-col no-gutters>
                <p id="member-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec faucibus massa. Pellentesque vitae imperdiet ex. Quisque posuere porttitor elit nec faucibus. Suspendisse potenti. Nullam odio nisi, suscipit in interdum nec, sodales a est. Nam aliquam sem vel libero scelerisque pulvinar. Ut ac nisl nec leo dapibus venenatis. Donec nunc purus, dictum sed lectus eget, porta pretium erat. Cras accumsan fermentum tortor at luctus. Nulla facilisi. Curabitur pretium aliquet tellus, quis euismod justo sagittis in. Vivamus vel ex auctor, rhoncus sem vitae, convallis nunc. Maecenas vitae odio tincidunt, faucibus tortor eget, maximus lectus. Fusce id ex ante. </p>
            </b-col>
          </b-row>
        </b-container>
    </div>

    <div id="youtube">
      <h1>Youtube</h1>
      <youtube video-id="Q4q1gziSmKE" @ready="ready"></youtube>
      <h4>Subscribe!</h4>
      <a target="_blank" href="https://www.youtube.com/channel/UC3U_5rg7ZTtoS1A6gWCIsLA"><img src="https://c866088.ssl.cf3.rackcdn.com/assets/youtube40x40.png"></a>
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
#about-text {
  padding: 0em 1em 1em 1em;
  text-align: justify;
}

#youtube {
  padding-bottom: 5em;
}

.jumbotron {
  background-color: black;
  color: white;
  padding: 2rem 2rem;
  margin-bottom: 0;
}

h1 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  padding-top: 0.5em;
}

#members, #youtube {
  background-color: black;
  color: white;
}

.rounded-circle {
  padding: 0.1rem;
  background-color: black;
}

.thumb {
  height: auto;
  width: auto;
  max-width: 75%;
  max-height: 75%;
}

#member-text {
  margin-right: 1.5em;
  text-align: justify;
}

.container-fluid {
  padding-bottom: 2rem;
}
</style>
