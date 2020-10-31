<div class="card">
  <div class="image"></div>
  <div class="card-container">
    <slot/>
  </div>
</div>

<style>
  .card {
    display: flex;
  }

  .card-container {
    flex: 1;
  }

  .image {
    width: 4rem;
    height: 4rem;
    background-color: #34343D;
    border-radius: 100%;
    margin-right: 1rem;
    background-image: url('https://cdn.discordapp.com/avatars/135081860790222848/b9505ebbad28092d1393cb5d516068d8.webp?size=1024');
    background-size: cover;
    background-position: center;
  }

</style>
