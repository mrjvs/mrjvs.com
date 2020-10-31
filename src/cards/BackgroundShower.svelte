<script>
  function setBackground() {
    if (!document.body.classList.contains("claimed")) {
      document.body.classList.add("claimed");
      document.body.classList.add("shape-" + backgroundShape);
      document.body.classList.add("color-" + backgroundColor);
    }
  }

  export let backgroundShape = "";
  export let backgroundColor = "";
</script>

<div class="card">
  {#if backgroundShape == "" && backgroundColor == ""}
    <h2>Really mate?</h2>
    <p>Didn't pick anything? You do make it quite boring for yourself this way :/</p>
  {:else if backgroundShape == ""}
    <h2>Aww man!</h2>
    <p>You forgot to pick the shape. How can I make a cool background now?</p>
  {:else if backgroundColor == ""}
    <h2>Aww man!</h2>
    <p>You forgot to pick the color. A background really needs flashy colors to look cool.</p>
  {:else}
    <h2>A cool background for you :)</h2>
    <p>I made a nice looking background for you, press the button to receive it!</p>
    <button on:click={() => setBackground()}>Claim your background</button>
  {/if}
</div>

<style>
  button {
    background-color: #354ACC;
    color: white;
    font-size: 1rem;
    padding: .8rem .7rem;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 50ms ease-in-out, transform 50ms ease-in-out;
  }

  button:hover {
    background-color: #2b3db4;
  }

  button:active {
    transform: scale(1.05);
  }
</style>
