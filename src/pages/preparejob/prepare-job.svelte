<script>
  import { Page, List, ListItem } from "framework7-svelte";
  import Navbar from "../navbar/navbar.svelte";
  import { openCustomDialog } from "../../js/finishpreparejs/finish-dialog";

  function dialog() {
    openCustomDialog();
  }

  import "../../css/preparejob/card-prepare.css";

  let atm = [
    {
      nama: "tes123",
      id: "SLM279349549",
      cabang: "",
      idmesin: "325254",
      lokasi: "Gallery Unit Kerja",
      alamat: "",
      tipe: "CM",
      problemtipe: "Card Reader",
    },
  ];
</script>

<Page style="background-color:#e9edf6">
  <Navbar status="offline" iconBack={true} title="ACCEPTED & PREPARE JOB" />

  <div class="card-prepare card-outline">
    <div class="card-headprepare">
      <img src="../../assets/file-manager.png" alt="list" />
      <div class="prepare-text">
        <div class="title">PREPARE JOB EXECUTED</div>
        <div class="subtitle">Ticket & Job Accepted</div>
      </div>
    </div>
    <div class="card-content">
      {#each atm as bank, index}
        <table class="tablebank">
          <tr>
            <td>Nama Bank / Client</td>
            <td>ID TICKET</td>
          </tr>
          <tr>
            <td>{bank.nama}</td>
            <td>{bank.id}</td>
          </tr>
          <tr>
            <td>KANTOR CABANG</td>
            <td>ID MESIN</td>
          </tr>
          <tr>
            <td>{bank.cabang}</td>
            <td>{bank.idmesin}</td>
          </tr>
          <tr>
            <td colspan="2">LOKASI ATM</td>
          </tr>
          <tr>
            <td colspan="2">{bank.lokasi}</td>
          </tr>
          <tr>
            <td colspan="2">ALAMAT</td>
          </tr>
          <tr>
            <td colspan="2">{bank.alamat}</td>
          </tr>
          <tr>
            <td>ACTIVITY TYPE</td>
            <td>PROBLEM TYPE</td>
          </tr>
          <tr>
            <td>{bank.tipe}</td>
            <td>{bank.problemtipe}</td>
          </tr>
        </table>
      {/each}
      <div class="center">
        <div class="button ">HISTORY REPAIR</div>
        <div class="button button-pengajuan">PENGAJUAN AKOMODASI</div>
      </div>
      <div class="outline" />
      <div class="font">CHECKLIST ITEM JOB PREPARATION</div>
      <div class="outline" />
      <List class="check">
        <ListItem checkbox title="Akomodasi & Transportasi" />
        <ListItem checkbox title="Perlatan/Kelengkapan Kerja" />
        <ListItem checkbox title="Sparepart" />
        <ListItem checkbox title="Jobcard" />
      </List>
      <div class="font">FINISH PREPARATION & EXECUTED JOB</div>
      <div class="outline" />
      <div class="button-row">
        <div class="button-row1">SWITCH REQUEST</div>
        <div class="button-row1" on:click={dialog}>FINISH PREPARE</div>
      </div>
    </div>
  </div>
</Page>
