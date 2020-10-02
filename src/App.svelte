<script>
  import * as animateScroll from "svelte-scrollto"
  import { quadInOut } from "svelte/easing"
  import CardWrapper from "./CardWrapper.svelte"
  import Next from "./Next.svelte"

  import Standard from "./cards/Standard.svelte"
  import ColorPicker from "./cards/ColorPicker.svelte"
  import Profile from "./cards/Profile.svelte"
  import Socials from "./cards/Socials.svelte"
  import Colored from "./cards/Colored.svelte"
  import TicTacToe from "./cards/TicTacToe.svelte"

  function showNext() {
    if (cur + 1 > max)
      return
    cur++;
    animateScroll.scrollToBottom({
      duration: 1000,
      easing: quadInOut
    });
  }

  const extraCards = Array(50).fill("Yes, this was really all there was");

  let selectedColor = "";
  let cur = 0;
  // cards + extras + last card
  const max = 6 + extraCards.length + 1;

</script>

<div class="container">
  <CardWrapper {cur} num={0}>
    <Profile>
      <h1>Hey there! my name is mrjvs.</h1>
      <p>I do professional web development with a passion for UI/UX design. I love to play piano and indie games and my favourite stack is mongo, nodejs & svelte.</p>
    </Profile>
  </CardWrapper>
  <CardWrapper {cur} num={1}>
    <Standard>
      <h2>Want to know more?</h2>
      <p>Oh boi, what to talk about? uhm... I like to skate when its sunny out and tried to get into baking. Emphasis on tried, I have the unfortunate habit of giving up on new hobbies pretty quickly. But hey, if I enjoy for the short time that I tried then its a success in my book.</p>
    </Standard>
  </CardWrapper>
  <CardWrapper {cur} num={2}>
    <Socials>
      <h2>Even more, what the hell?</h2>
      <p>I'll just drop my socials, you can then<br>stalk me all you want I suppose</p>
    </Socials>
  </CardWrapper>
  <CardWrapper {cur} num={3}>
    <ColorPicker on:color={(c)=>{if (cur<=3) selectedColor=c.detail}}>
      <h2>I'm running out of things to say</h2>
      <p>Let's just have some fun then!<br>Choose the color that the next card will be!</p>
    </ColorPicker>
  </CardWrapper>
  <CardWrapper {cur} num={4}>
    <Colored color={selectedColor}/>
  </CardWrapper>
  <CardWrapper {cur} num={5}>
    <TicTacToe>
      <h2>Damn, Are you really that bored?</h2>
      <p>If you really don't have anything better to do with your life then lets play a game of tic tac toe. you begin!</p>
    </TicTacToe>
  </CardWrapper>
  <CardWrapper {cur} num={6}>
    <Standard>
      <h2>Ok, I'm really running out of cards now.</h2>
      <p>If you have a need to contact me, you can send me an email at <a href="mailto:mistrjvs@gmail.com">mistrjvs@gmail.com</a>. Thanks for interacting with my site :)</p>
    </Standard>
  </CardWrapper>

  {#each extraCards as c,i}
    <CardWrapper {cur} num={7+i}>
      <Standard>
        <p>{c}</p>
      </Standard>
    </CardWrapper>
  {/each}

  <CardWrapper {cur} num={max}>
    <Standard>
      <h2>Wow, you really are a persistent fella.</h2>
      <p>You've clicked/spammed the button 50 times now. You must really want to get something out of this.</p>
      <p>Too bad, I have nothing ¯\_(ツ)_/¯</p>
    </Standard>
  </CardWrapper>

  {#if cur < max}
    <div class="button-holder">
      <Next on:click={showNext} />
    </div>
  {/if}
</div>

<style>
  .container {
    width: 600px;
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
  }

  .button-holder {
    text-align: center;
  }

  a, a:visited, a:focus {
    text-decoration: none;
    color: #3C67DC;
  }

  a:hover {
    color: #5775c7;
    text-decoration: none;
  }

  p + p {
    margin-top: 1rem;
  }
</style>
