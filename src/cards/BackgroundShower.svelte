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
  let hitCount = 0;
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
    <button on:click={() => { hitCount++; setBackground()}} class:c-gray={hitCount >= 250} class:c-red={hitCount >= 150}>
      {#if hitCount >= 1000}
        (why are you still clicking?)
      {:else if hitCount >= 250}
        Great, You've broken it :/
      {:else if hitCount >= 100}
        Jesus christ, you hit it {hitCount} times!?
      {:else if hitCount >= 50}
        This is pretty ridiculous, 50 times?
      {:else if hitCount >= 10}
        Really! only works once!
      {:else if hitCount >= 2}
        You know, the button only works once.
      {:else}
        Claim your background
      {/if}
    </button>
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

  button:active:not(.c-gray) {
    transform: scale(1.05);
  }

  button.c-red {
    background-color: #b43445;
  }

  button.c-red:hover {
    background-color: #a12c3c;
  }

  button.c-gray {
    background-color: #2f2d36;
    transform: translateY(-0.2rem) rotate(4deg);
    transform-origin: top left;
  }

  button.c-gray:hover {
    background-color: #3b3942;
  }
</style>
