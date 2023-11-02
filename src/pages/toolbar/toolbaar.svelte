<script>
  import { Page, Toolbar, Tabs, Tab, Navbar } from "framework7-svelte";
  import Profile from '../profile/profile-page.svelte';
  import Module from '../module/module.svelte';
  import PrepareJob from "../preparejob/prepare-job.svelte";
  import ProfilePage from "../profile/profile-page.svelte";
  import DetailJob from '../newjob/detail-new-job.svelte';
  import StartJob from '../startjob/start-job.svelte'

  let toolbarPosition = "bottom";
  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === "top" ? "bottom" : "top";
  }
</script>

<Page>
  <Toolbar tabbar icons position={toolbarPosition}>
    <div class="toolbar-inner" style="background-color: aqua;">
      <a class="tab-link tab-link-active" href="#tab-1">
        <img src="../../assets/browser.png" alt="Home" width="24" height="24" />
        <span class="tabbar-label">Home</span>
      </a>
      <a class="tab-link" href="#tab-2">
        <img src="../../assets/fileblue.png" alt="JobList" width="24" height="24" />
        <span class="tabbar-label">Job List</span>
      </a>
      <a class="tab-link" href="#tab-3">
        <img src="../../assets/history.png" alt="SyncData" width="24" height="24" />
        <span class="tabbar-label">Sync Data</span>
      </a>
      <a class="tab-link" href="#tab-4">
        <img src="../../assets/folset7.png" alt="JobDone" width="24" height="24" />
        <span class="tabbar-label">Job Done</span>
      </a>
      <a class="tab-link" href="#tab-5">
        <img src="../../assets/userpro.png" alt="Profile" width="24" height="24" />
        <span class="tabbar-label">Profile</span>
      </a>
    </div>
  </Toolbar>

  <Tabs>
    <Tab id="tab-1" tabActive>
      <ProfilePage tabNumber="1"></ProfilePage>
    </Tab>
    <Tab id="tab-2">
      <Module tabNumber="2"></Module>
    </Tab>
    <Tab id="tab-3">
      <PrepareJob tabNumber="3"></PrepareJob>
    </Tab>
    <Tab id="tab-4">
      <DetailJob tabNumber="4"></DetailJob>
    </Tab>
    <Tab id="tab-5">
      <StartJob tabNumber="5"></StartJob>
    </Tab>
  </Tabs>

  <style>
    .toolbar-inner {
      background: linear-gradient(to right, #046689, #06405d);
    }

    .tabbar-label {
      color: white;
    }
  </style>
</Page>
