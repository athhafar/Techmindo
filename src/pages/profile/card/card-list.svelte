<script>
    export let totalTickets = 0;
    export let titleCard = "";
    export let subtitleCard = "";
    export let data = "";

</script>
  
  <div class="card-list">
    <div class="card-header">
      <img src="../../assets/new-ticket.png" alt="list" />
      <div class="text">
        <div class="title">{titleCard}</div>
        <div class="subtitle">{subtitleCard}</div>
      </div>
    </div>
    <div class="card-content">
      <div class="card">{data}</div>
    </div>
    <div class="card-footer">Total Tickets: {totalTickets}</div>
  </div>
  