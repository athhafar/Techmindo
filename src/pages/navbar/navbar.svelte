<script>
  export let status = "";
  export let iconBack = true;
  export let title = "";
</script>

<div class="NavBlack" />
<div
  class="NavBlue">
  {#if iconBack}
  <img src="../../assets/arrow-back.png" alt="profile-picture" width="30px"/>
  {/if}
  <div class="title">{title}</div>
  <div class="status">
    <div class="container-circle" />
    <div class="text">{status}</div>
  </div>
</div>