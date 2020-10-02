<script>
export let color;
</script>

<div class="card" class:blue={color == "blue"} class:red={color == "red"} class:white={color == "white"} class:gray={color == "gray"}>
  {#if color == "blue"}
    <h2>Ah, Blue. Very very good choice!</h2>
    <p>I really like the color blue, It has a very cool and professional feel to it.</p>
  {:else if color == "red"}
    <h2>Red, a daring color</h2>
    <p>I like the look of red, sadly I'm not able to see it to its full potentional because of my protanope color blindness</p>
  {:else if color == "white"}
    <h2>Now that's something different</h2>
    <p>Some kind of rebel I take it? White really doesn't fit the theme, but maybe thats why it looks so good?</p>
  {:else if color == "gray"}
    <h2>Nice and cohesive, just the way I like it</h2>
    <p>Sometimes the best looking thing is to keep the busy parts out of it. Just one color, simple and powerful!</p>
  {:else if color == ""}
    <h2>That's quite boring to be honest</h2>
    <p>Are you just spam clicking through these? cmon, at least make a choice!</p>
  {:else}
    <h2>That's very peculiar!</h2>
    <p>I'm not quite sure what to call it, very weird color you choose.</p>
  {/if}
</div>

<style>
.card.blue {
  background-color: #1C2B8B;
  color: #B9BEDC;
}
.card.white {
  background-color: white;
  color: #6A6A6A;
}
.card.red {
  background-color: #AE2D3F;
  color: #E2ACB4;
}
</style>
