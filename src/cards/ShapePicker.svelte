<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function setShape(shape) {
    if (isDisabled)
      return
    selected = shape;
    dispatch('shape', shape);
  }

  let selected = "";
  export let isDisabled = false;
</script>

<div class="card">
  <slot/>
  <div class="option-container">
    <div class="option shape-square" class:selected={selected=="square"} class:disabled={isDisabled} on:click={()=>setShape("square")}></div>
    <div class="option shape-circle" class:selected={selected=="circle"} class:disabled={isDisabled} on:click={()=>setShape("circle")}></div>
    <div class="option shape-triangle" class:selected={selected=="triangle"} class:disabled={isDisabled} on:click={()=>setShape("triangle")}></div>
  </div>
</div>

<style>
.option {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin-right: .5rem;
  position: relative;
  z-index: 50;
  cursor: pointer;
  transition: transform 50ms ease-in-out;
  background-color: white;
  opacity: 0.6;
}

.option:hover:not(.disabled) {
  opacity: 1;
}

.disabled {
  cursor: auto;
}

.option-container {
  margin-top: 1rem;
}

.option.selected {
  transform: scale(1.3);
  background-color: #8a96e9;
  opacity: 1;
}

.option.option.selected::after {
  height: .6rem;
  width: .6rem;
}

.option.shape-square {
  border-radius: 1px;
}

.option.shape-circle {
  border-radius: 100%;
}

.option.shape-triangle {
	width: 0;
	height: 0;
	border-left: 1rem solid transparent;
	border-right: 1rem solid transparent;
	border-bottom: 1.5rem solid white;
	background-color: transparent;
	border-radius: 0;
	margin-bottom: .2rem;
}
.option.shape-triangle.selected {
  border-bottom-color: #8a96e9;
}
</style>
