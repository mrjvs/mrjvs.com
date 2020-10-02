<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function setColor(color) {
    selected = color;
		dispatch('color', color);
  }

  let selected = "";
</script>

<div class="card">
  <slot/>
  <div class="option-container">
    <div class="option c-blue" class:selected={selected=="blue"} on:click={()=>setColor("blue")}></div>
    <div class="option c-red" class:selected={selected=="red"} on:click={()=>setColor("red")}></div>
    <div class="option c-gray" class:selected={selected=="gray"} on:click={()=>setColor("gray")}></div>
    <div class="option c-white" class:selected={selected=="white"} on:click={()=>setColor("white")}></div>
  </div>
</div>

<style>
.option {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin-right: .5rem;
  border-radius: 100%;
  position: relative;
  z-index: 50;
  cursor: pointer;
  transition: transform 50ms ease-in-out;
}
.option:hover {
  transform: scale(1.1);
}

.option-container {
  margin-top: 1rem;
}

.option::after {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  background-color: white;
  border-radius: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 51;
  transition: height 100ms ease-in-out, width 100ms ease-in-out;
}

.option::before {
  content: "";
  position: absolute;
  transform-origin: center;
  height: 100%;
  width: 100%;
  opacity: .15;
  z-index: 49;
  border-radius: 100%;
  transition: transform 150ms ease-in-out;
}

.option.selected::before {
  transform: scale(1.8);
}

.option.option.selected::after {
  height: .6rem;
  width: .6rem;
}

.option.c-blue, .option.c-blue::before {
  background-color: #354ACC;
}

.option.c-red, .option.c-red::before {
  background-color: #CC3B59;
}

.option.c-gray, .option.c-gray::before {
  background-color: #34343D;
}

.option.c-white, .option.c-white::before {
  background-color: white;
}

.option.c-white::after {
  background-color: #34343D;
}
</style>
