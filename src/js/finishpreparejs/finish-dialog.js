
  import { f7 } from 'framework7-svelte';
  import "../../css/finishprepare/card-finishprepare.css";

  let customDialog;

  export function openCustomDialog() {
    customDialog = f7.dialog.create({
      content: `
      <div class="card-finishprepare card-outline">
        <div class="card-headfinish">
          <img src="../../assets/new-ticket.png" alt="list" />
          <div class="textfinish">
            <div class="title">List Pending Jobcard</div>
            <div class="subtitle">Jobcard Pending</div>
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
    }).open();

    // Event listener untuk tombol "START EXECUTED JOB"
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
      customDialog.close(); // Tutup dialog saat tombol ditekan
    });
  }
