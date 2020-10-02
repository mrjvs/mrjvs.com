<button on:click>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
</button>

<style>
  button {
    width: 3rem;
    height: 3rem;
    background-color: #1B1B23;
    color: #6975D6;
    border: none;
    cursor: pointer;
    border-radius: 100%;
    margin: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: background-color 50ms ease-in-out, transform 50ms ease-in-out;
    transform-origin: center;
    outline: none;
  }

  button:hover {
    background-color: #22222b;
  }

  button:active {
    transform: scale(1.1);
    background-color: #2c2c36;
  }
</style>
