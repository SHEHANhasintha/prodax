const reloadScripts = () => {
  console.log('reload scripts');
  let scripts = document.getElementsByClassName('scripts-out');
  scripts.forEach(async (element) => {
    await element.remove();
  });

  scripts.forEach(async (element) => {
    await element.remove();
  });
  scripts.forEach(async (element) => {
    await element.remove();
  });

  scripts.forEach(async (element) => {
    await element.remove();
  });


  loadScript('assets/vendor/jquery/jquery.min.js');
  loadScript('assets/vendor/feather-icons/feather.min.js');
  loadScript('assets/vendor/simplebar/simplebar.min.js');
  loadScript('assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
  loadScript('assets/vendor/highlight.js/highlight.pack.js');
  loadScript('assets/vendor/quill/quill.min.js');
  loadScript('assets/vendor/air-datepicker/js/datepicker.min.js');
  loadScript('assets/vendor/air-datepicker/js/i18n/datepicker.en.js');
  loadScript('assets/vendor/select2/js/select2.min.js');
  loadScript('assets/vendor/fontawesome/js/all.min.js');
  loadScript('assets/vendor/chart.js/chart.min.js');
  loadScript('assets/vendor/datatables/js/jquery.dataTables.min.js');
  loadScript('assets/vendor/nouislider/nouislider.min.js');
  loadScript('assets/vendor/datatables/js/dataTables.bootstrap5.min.js');
  loadScript('assets/vendor/fullcalendar/main.min.js');
  loadScript('assets/js/stroyka.js');
  loadScript('assets/js/custom.js');
  loadScript('assets/js/calendar.js');
  loadScript('assets/js/demo.js');
  loadScript('assets/js/demo-chart-js.js');

  // console.log(sc)
};

const loadScript = async (urlapplication) => {
  const body = document.body;
  const script = document.createElement('script');
  script.innerHTML = '';
  script.src = urlapplication;
  script.className = 'scripts-out'
  script.async = true;
  script.defer = true;
  await body.appendChild(script);
};

export { reloadScripts };
