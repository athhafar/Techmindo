<script>
  import { Page } from "framework7-svelte";
  import "../../css/newjob/detail-new-job.css";
  import Navbar from "../navbar/navbar.svelte";

  let detailnewjob = [
    {
      nama: "BRI",
      kantor: "ABC",
      id: "123",
      loc: "bekasi",
      alamat: "tes123",
      tipe: "CM",
      problemtipe: "Card Reader",
    },
  ];
</script>

<Page>
  <Navbar status="offline" iconBack={true} title="NEW INCOMING JOB DETAIL" />

  <div class="card-detailnewjob card-outline">
    <div class="card-headDetail">
      <img src="../../assets/new-ticket.png" alt="location" />
      <div class="text">
        <div class="title">No Ticket : SLM123456</div>
        <div class="subtitle">ID ATM : xx2435</div>
        <div class="subtitle">Lokasi : Gallery Unit Kerja</div>
      </div>
    </div>
    <div class="card-content">
      <div class="detailjobnew card-jobnew">
        {#each detailnewjob as job, index}
          <table class="tablenewjob">
            <tr>
              <td colspan="2">NAMA BANK / CLIENT</td>
            </tr>
            <tr>
              <td>{job.nama}</td>
            </tr>
            <tr>
              <td>KANTOR CABANG</td>
              <td>ID MESIN</td>
            </tr>
            <tr>
              <td>{job.kantor}</td>
              <td>{job.id}</td>
            </tr>
            <tr>
              <td colspan="2">LOKASI ATM</td>
            </tr>
            <tr>
              <td>{job.loc}</td>
            </tr>
            <tr>
              <td colspan="2">ALAMAT</td>
            </tr>
            <tr>
              <td>{job.alamat}</td>
            </tr>
            <tr>
              <td>ACTIVITY TYPE</td>
              <td>PROBLEM TYPE</td>
            </tr>
            <tr>
              <td>CM</td>
              <td>ATM</td>
            </tr>
          </table>
        {/each}
        <div class="card-detail">
          <div class="button">ACCEPT JOB TICKET</div>
        </div>
      </div>
    </div>
  </div>
</Page>
