
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import FormPage from '../pages/form.svelte';
import CatalogPage from '../pages/catalog.svelte';
import ProductPage from '../pages/product.svelte';
import SettingsPage from '../pages/settings.svelte';
import ProfilePage from '../pages/profile/profile-page.svelte';
import ModulePage from '../pages/module/module.svelte'
import StartJob from '../pages/startjob/start-job.svelte'
import prepareJob from '../pages/preparejob/prepare-job.svelte'
import finishPrepare from '../pages/finishedprepare/finish-prepare-job.svelte'
import newJob from '../pages/newjob/new-job.svelte'
import detailNewJob from '../pages/newjob/detail-new-job.svelte'
import toolbar from '../pages/toolbar/toolbaar.svelte'

import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/f',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/b',
    component: ProfilePage,
  },
  {
    path: '/v',
    component: ModulePage,
  },
  {
    path: '/m',
    component: StartJob,
  },
  {
    path: '/v',
    component: prepareJob,
  },
  {
    path: '/b',
    component: finishPrepare,
  },
  {
    path: '/v',
    component: newJob,
  },
  {
    path: '/b',
    component: detailNewJob,
  },  
  {
    path: '/',
    component: toolbar,
  }, 
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
