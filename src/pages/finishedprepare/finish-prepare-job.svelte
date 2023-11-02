<script>
  import { Page, Navbar, Block, Button, f7 } from "framework7-svelte";
  import "../../css/finishprepare/card-finishprepare.css";

  let customDialog;

  export function openCustomDialog() {
    customDialog = f7.dialog
      .create({
        content: `
      <div class="card-finishprepare card-outline">
        <div class="card-headfinish">
          <img src="../../assets/file-manager.png" alt="list" />
          <div class="textfinish">
            <div class="title">Finished Prepare</div>
            <div class="subtitle">Confirmation</div>
          </div>
        </div>
        <div class="card-content">
        <div class="card">
            <div class="card-text">
              Pastikan Anda telah mengisi Checklist Item Job Prepare dengan benar dan
              sesaui.
            </div>
            <div>Apakah Anda yakin akan memulai Job ini ?</div>
          </div>
        </div>
        <div class="card-footer">
          <div class="button" id="startButton">START EXECUTED JOB</div>
        </div>
      </div>
          `,
        cssClass: "custom-dialog",
      })
      .open();

    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
      customDialog.close(); // Tutup dialog saat tombol ditekan
    });
}
</script>

<Page>
  <style>
  </style>
  <Navbar title="Dialog with Card" />
  <Block strong>
    <p>Dialog with Card and a "Start" button</p>
    <Button fill onClick={openCustomDialog}>Open Dialog</Button>
  </Block>
</Page>
