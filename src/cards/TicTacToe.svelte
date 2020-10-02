<script>
  let cells = Array(9).fill({
    state: 0,
    win: false
  }).map(v=>({...v}));
  let yourTurn = true;
  let finishedState = "no";
  let winningCells = [0,0,0];

  const timeout = 1000;

  function selectCell(i, type) {
    if (cells[i].state != 0)
      return;
    cells[i].state = type;

    //update state
    cells = cells;
    hasFinishedWrapper();
  }

  function botMove() {
    let i = 4;
    while (cells[i].state != 0)
      i = Math.floor(Math.random() * 9);
    return i;
  }

  function hasFinished() {
    console.log(cells);
    for (let i = 0; i < 3; i++) {
      if (cells[0 + i].state == cells[3 + i].state && cells[3 + i].state == cells[6 + i].state) {
        if (cells[0 + i].state == 0)
          continue;
        winningCells = [0 + i, 3 + i, 6 + i];
        return cells[0 + i].state == 1 ? "cross" : "circle";
      }
    }
    for (let i = 0; i < 3; i++) {
      if (cells[0 + (i*3)].state == cells[1 + (i*3)].state && cells[1 + (i*3)].state == cells[2 + (i*3)].state) {
        if (cells[0 + (i*3)].state == 0)
          continue;
        winningCells = [0 + (i*3), 1 + (i*3), 2 + (i*3)];
        return cells[0 + (i*3)].state == 1 ? "cross" : "circle";
      }
    }
    if (cells[0].state == cells[4].state && cells[4].state == cells[8].state) {
      console.log("in diagonal 1");
      if (cells[0].state != 0) {
        winningCells = [0, 4, 8];
        return cells[0].state == 1 ? "cross" : "circle";
      }
    }
    if (cells[2].state == cells[4].state && cells[4].state == cells[6].state) {
      console.log("in diagonal 2");
      if (cells[2].state != 0) {
        winningCells = [2, 4, 6];
        return cells[2].state == 1 ? "cross" : "circle";
      }
    }
    if (cells.find(v=>v.state == 0))
      return "no";
    return "tie";
  }

  function hasFinishedWrapper() {
    finishedState = hasFinished();
    if (finishedState == "no")
      return
    cells[winningCells[0]].win = true;
    cells[winningCells[1]].win = true;
    cells[winningCells[2]].win = true;
    cells = cells;
  }

  function makeMove(i) {
    if (!yourTurn) return;
    if (cells[i].state != 0) return;
    yourTurn = false;
    selectCell(i, 1);
    if (finishedState == "no") {
      setTimeout(() => {
        selectCell(botMove(), 2);
        if (finishedState == "no")
          yourTurn = true;
      }, timeout);
    }
  }
</script>

<div class="card">
  <slot/>
  {#if finishedState != "no"}
    {#if finishedState == "tie"}
      <p>Aww too bad, nice game tho :D</p>
    {/if}
    {#if finishedState == "circle"}
      <p>GG, well played. Was fun playing with you!</p>
    {/if}
    {#if finishedState == "cross"}
      <p>Ah damn, you win. GG, Twas a lovely game.</p>
    {/if}
  {/if}
  <div class="grid">
    {#each cells as cell, i}
      <div
        class="cell"
        class:selectable={yourTurn && cell.state == 0}
        class:cross={cell.state == 1}
        class:circle={cell.state == 2}
        class:win={cell.win}
        on:click={()=>makeMove(i)}
      >
        <div class="cross-icon"></div>
        <div class="circle-icon"></div>
      </div>
    {/each}
  </div>
</div>

<style>
.grid {
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
  display: grid;
  margin-top: 1rem;
}

p {
  margin: .5rem 0 1rem 0;
  color: white;
}

.cell {
  background-color: #282830;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell::before {
  content: "";
  padding-bottom: 100%;
  display: block;
}

.cell.selectable:hover {
  background-color: #31313a;
}

.cell .cross-icon, .cell .circle-icon {
  display: none;
}
.cell.cross .cross-icon {
  display: block;
  transform: scale(2.5) rotate(45deg);
}

.cell.circle .circle-icon {
  display: block;
  transform: scale(2.5);
}

.cell.win {
  background-color: #348a31;
}

.circle-icon {
  height: 1.5rem;
  width: 1.5rem;
  border: 3px solid white;
  border-radius: 100%;
}

.cross-icon {
  width:1.5rem;
  height:1.5rem;

  background:
    linear-gradient(#fff,#fff),
    linear-gradient(#fff,#fff);
  background-position:center;
  background-size: 100% 2px, 2px 100%; /*thickness = 2px, length = 50% (25px)*/
  background-repeat:no-repeat;
  transform: rotate(45deg);
}

</style>
