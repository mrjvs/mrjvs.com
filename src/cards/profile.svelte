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
    background-image: url('https://images-ext-1.discordapp.net/external/3RddR2cU-I063xwZHu9uanPo_omSrOTkkLPUfV2BF60/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/135081860790222848/07d1f0db079c77a151ab665bbc7aab21.png');
    background-size: cover;
    background-position: center;
  }

</style>
