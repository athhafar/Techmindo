<script>
  import { Page, Navbar, Block, Button, f7 } from "framework7-svelte";
  import "../../css/newjob/new-job.css";

  let customDialog;
  let newjob = [
    {
      nomor: "SLMFDFIG5605460",
      id: "76576967",
    },
  ];

  function openCustomDialog() {
    const tableContent = generateTableContent(newjob);

    customDialog = f7.dialog
      .create({
        content: `
        <div class="card-newjob card-outline">
          <div class="card-headnewjob">
            <div class="grup-newjob">
              <img src="../../assets/foltime3.png" alt="list" />
              <div class="textnewjob">
                <div class="title">List New Incoming Job</div>
                <div class="subtitle">Tickets & New Job</div>
              </div>
            </div>
            <img src="../../assets/del2.png" alt="list" />
          </div>
          <div class="card-content">
            <div class="card-jobnew">
              ${tableContent}
            </div>
          </div>
          <div class="card-footer">
            <div class="button"  id="closeButton">CLOSE</div>
          </div>
        </div>
      `,
        cssClass: "custom-dialog",
      })
      .open();

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
      customDialog.close(); // Tutup dialog saat tombol ditekan
    });
  }

  function generateTableContent(data) {
    let tableHtml = `
      <table class="tablenewjob">
        <tr>
          <td>No. TICKET</td>
          <td>ID ATM</td>
          <td>DETAIL</td>
        </tr>
        <tr>
          <td>${data[0].nomor}</td>
          <td>${data[0].id}</td>
          <td><a href="" style="color: red;">DETAIL</a></d>
        </tr>
      </table>
    `;

    return tableHtml;
  }
</script>

<Page>
  <Navbar title="Dialog with Card" />
  <Block strong>
    <p>Dialog with Card and a "Start" button</p>
    <Button fill on:click={openCustomDialog}>Open Dialog</Button>
  </Block>
</Page>

