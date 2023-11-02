<script>
  import { Page, Card, Badge } from "framework7-svelte";
  import Navbar from "../navbar/navbar.svelte";
  import "../../css/startjob/start-job.css";
</script>

<Page style="background-color:#e9eef4">
  <Navbar status="offline" iconBack={true} title="START EXECUTED JOB" />

  <div class="card-startJob">
    <div class="card-headerJob">
      <img src="../../assets/whiteloc.png" alt="location" />
      <div class="text">
        <div class="title">Arrived On Location</div>
        <div class="subtitle">Lokasi ATM : Galley Unit KErja</div>
        <div class="subtitle">Alamat :</div>
      </div>
    </div>
    <div class="card-content">
      <div class="container-content">
        <div class="button">ARRIVED & CHECK-IN LOCATION</div>
      </div>
    </div>
  </div>

  <div class="card-startJob">
    <div class="card-headerJob">
      <img src="../../assets/new-ticket.png" alt="list" />
      <div class="text">
        <div class="title">Start Executed Job</div>
        <div class="subtitle">No Ticket : SLM123456</div>
        <div class="subtitle">ID ATM : 356535</div>
      </div>
    </div>
    <div class="card-content">
      <div class="card infobank">
        <div class="" />
        <div class="">Bank/CLient : Bank Test Development</div>
        <div class="">Ticket No : SLM1231456</div>
        <div class="">ID ATM : 54454354</div>
        <div class="line" />
        <div class="">Kantor Cabang :</div>
        <div class="">Lokasi ATM : Gallery Unit Kerja</div>
        <div class="">ALamat :</div>
      </div>
      <div class="card">
        <div class="grid grid-cols-2 medium-grid-cols-4 grid-executed">
          <div class="card-executed">
            <img src="../../assets/camera.png" alt="scan" />
            <div class="text">SCAN QR CODE</div>
          </div>
          <div class="card-executed">
            <img src="../../assets/camera.png" alt="camera" />
            <div class="text">TAKE PCITURE</div>
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="button-start">
        <div class="button">START JOB</div>
      </div>
    </div>
  </div>
</Page>
