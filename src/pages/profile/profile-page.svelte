<script>
  import { Page, Card, Badge } from "framework7-svelte";
  import "../../css/navbar/navbar.css";
  import "../../css/profile/card-profile.css";
  import "../../css/profile/card-job.css";
  import "../../css/profile/card-list.css";

  import { openCustomDialog } from "../../js/newjob/newjob-dialog";

  function dialog() {
    openCustomDialog();
  }

  import Navbar from "../navbar/navbar.svelte";
  import CardList from "./card/card-list.svelte";
</script>

<Page style="background-color: #e5edf0">
  <Navbar status="online" iconBack={false} />
  <div class="NavBlack">
    <div class="card-profile">
      <img src="../../assets/userpro.png" alt="profile-picture" />
      <div class="card-column">
        <div class="name">FAREL</div>
        <div class="">ID Pegawai : 12345</div>
        <div class="">Username : 12345</div>
      </div>
    </div>

    <div class="grid grid-cols-2 medium-grid-cols-4 grid-gap grid-job">
      <div class="card-job">
        <div class="card-job-container">
          <Badge class="badge">0</Badge>
          <img src="../../assets/foltime3.png" alt="job" />
        </div>
        <div class="text">NEW JOB</div>
      </div>
      <div class="card-job">
        <div class="card-job-container">
          <Badge class="badge">1</Badge>
          <img src="../../assets/history.png" alt="prepare-job" />
        </div>
        <div class="text">PREPARE JOB</div>
      </div>
      <div class="card-job">
        <img src="../../assets/filerack.png" alt="gallery-photo" />
        <div class="text">GALLERY PHOTO</div>
      </div>
      <div class="card-job" on:click={dialog}>
        <img src="../../assets/calendar2.png" alt="attendance" />
        <div class="text">ATTENDANCE</div>
      </div>
    </div>

    <CardList
      totalTickets={5}
      titleCard="List Pending Job"
      subtitleCard="Tickets/Job Pending"
      data="tes123"
    />

    <div class="card-list">
      <div class="card-header">
        <img src="../../assets/new-ticket.png" alt="list" />
        <div class="text">
          <div class="title">List Pending Jobcard</div>
          <div class="subtitle">Jobcard Pending</div>
        </div>
      </div>
      <div class="card-content">
        <div class="card">NO DATA</div>
      </div>
      <div class="card-footer">Total Tickets : 0</div>
    </div>
  </div>
</Page>
