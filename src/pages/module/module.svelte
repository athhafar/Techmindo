<script>
  import { Page, List, Card, ListItem } from "framework7-svelte";
  import Navbar from "../navbar/navbar.svelte";
  import "../../css/module/card-module.css";

  let atm = [
    {
      merk: "DN Series 200v FL",
      id: "76576967",
      tipe: "CM",
      problemtipe: "Card Reader",
    },
  ];
</script>

<Page style="background-color: #e9eef4">
  <Navbar status="offline" iconBack={true} title="MODULE CHECKLIST" />

  <div class="card-module">
    <div class="card-head">
      <img src="../../assets/new-ticket.png" alt="list" />
      <div class="text">
        <div class="title">No Ticket : SLME9954594959</div>
        <div class="subtitle">ID ATM : XFNDFNNG</div>
        <div class="subtitle">Lokasi : Galery Unit Kerja</div>
      </div>
    </div>
    <div class="card-content">
      <div class="card-atm">
        {#each atm as mesin, index}
          <table class="tablebank">
            <tr>
              <td>MERK MESIN</td>
              <td>ID MESIN</td>
            </tr>
            <tr>
              <td>{mesin.merk}</td>
              <td>{mesin.id}</td>
            </tr>
            <tr>
              <td>ACTIVTY TYPE</td>
              <td>PROBLEM TYPE</td>
            </tr>
            <tr>
              <td>{mesin.tipe}</td>
              <td>{mesin.problemtipe}</td>
            </tr>
          </table>
        {/each}
      </div>

      <List outline>
        <ListItem title="CONSUMNABLE" link="#" />
        <div class="outline" />
        <ListItem title="PC MODULE" link="#" />
        <div class="outline" />
        <ListItem title="UPPER COMPARTMENT MODULE" link="#" />
        <div class="outline" />
        <ListItem title="LOWER COMPARTMENT MODULE" link="#" />
        <div class="outline" />
        <ListItem title="CRM MODULE" link="#" />
        <div class="outline" />
        <ListItem title="ENVIRONMENT CHECK" link="#" />
        <div class="outline" />
        <ListItem title="DEVICE FUNCTION CHECK" link="#" />
        <div class="outline" />
        <ListItem title="WORK CARRIED OUT" link="#" />
      </List>
    </div>
  </div>
</Page>
