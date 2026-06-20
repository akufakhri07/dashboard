// apex chart
import ApexCharts from "apexcharts";
const ethChartOptions = {
  chart: {
    type: "line",
    height: 200,
    toolbar: { show: false },
    foreColor: "#94a3b8",
  },

  series: [
    {
      name: "ETH",
      data: [
        40000, 32000, 48000, 30000, 45000, 28000, 38000, 25000, 35000, 22000,
        30000, 20000,
      ],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#3b82f6"],
  dataLabels: { enabled: false },
};

const ethChart = new ApexCharts(
  document.querySelector("#ethChart"),
  ethChartOptions,
);
ethChart.render();

// artsoldout
// art sold chart
const artSoldOptions = {
  chart: {
    type: "bar",
    height: 80,
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  series: [{ data: [30, 50, 40, 80, 60, 90, 70, 100, 80, 120, 100, 145] }],
  colors: ["#94a3b8"],
  dataLabels: { enabled: false },
};
const artSoldChart = new ApexCharts(
  document.querySelector("#artSoldChart"),
  artSoldOptions,
);
artSoldChart.render();

// earnings chart
const earningsOptions = {
  chart: {
    type: "area",
    height: 80,
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  series: [
    { data: [100, 200, 150, 300, 250, 400, 350, 500, 450, 600, 700, 750] },
  ],
  colors: ["#f59e0b"],
  stroke: { curve: "smooth", width: 2 },
  fill: { opacity: 0.3 },
  dataLabels: { enabled: false },
};
const earningsChart = new ApexCharts(
  document.querySelector("#earningsChart"),
  earningsOptions,
);
earningsChart.render();
// apex chart end

// mobile version hamburgermenu+overlay+sidebar+closebtn
const mobileHamburger = document.querySelector(".mobileHamburger");
const sidebar = document.querySelector(".sidebar");
const closeMobile = document.querySelector(".closeMobile");
const overlay = document.querySelector(".overlay");

mobileHamburger.onclick = function () {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
};

closeMobile.onclick = function () {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
};

// ambil dashboar btn
const dashboardRow = document.querySelector(".dashboardRow");

// ambil submenu dashboard
const subMenuDashboard = document.querySelector(".subMenuDashboard");

const icon = document.querySelector(".ri-arrow-right-s-line");

dashboardRow.onclick = function () {
  // cek class submenu
  if (subMenuDashboard.classList.contains("max-h-0")) {
    // hapus max-h
    subMenuDashboard.classList.remove("max-h-0");
    // tambahkan max-h
    subMenuDashboard.classList.add("max-h-[500px]");
    // rotate icon
    icon.classList.add("rotate-90");
    // tambahkan warna dan rounded di dashboardbtn
    dashboardRow.classList.add("bg-blue-500", "rounded-lg", "!text-white");
  } else {
    // hapus tinggi
    subMenuDashboard.classList.remove("max-h-[500px]");
    // kembalikan tinggi ke 0
    subMenuDashboard.classList.add("max-h-0");
    // hapus rotate
    icon.classList.remove("rotate-90");
    // hapus bg-warna dan rounded
    dashboardRow.classList.remove("bg-blue-500", "rounded-lg", "!text-white");
  }
};

// forech dropdownbtn+dropdownmenu
const dropdownBtn = document.querySelectorAll(".dropdownBtn");

dropdownBtn.forEach(function (dropdownBtns) {
  dropdownBtns.onclick = function () {
    const DropdownMenu = dropdownBtns.nextElementSibling;
    const icon = dropdownBtns.querySelector(".ri-arrow-right-s-line");
    if (DropdownMenu.classList.contains("max-h-0")) {
      DropdownMenu.classList.add("max-h-[600px]");
      DropdownMenu.classList.remove("max-h-0");
      icon.classList.add("rotate-90");
      dropdownBtns.classList.add("bg-blue-500", "rounded-lg", "text-white");
      dropdownBtns.classList.remove("hover:text-blue-500");
    } else {
      DropdownMenu.classList.add("max-h-0");
      DropdownMenu.classList.remove("max-h-[600px]");
      icon.classList.remove("rotate-90");
      dropdownBtns.classList.remove("bg-blue-500", "text-white", "rounded-lg");
      dropdownBtns.classList.add("hover:text-blue-500");
    }
  };
});
// forech dropdownbtn+dropdownmenu end

// darkmode
const darkModeToggle = document.querySelector("#darkModeToggle");
darkModeToggle.onclick = function () {
  document.documentElement.classList.toggle("dark");
};

// language
const changeLangBtn = document.querySelector(".changeLangBtn");
const changeLangMenu = document.querySelector(".changeLangMenu");

// email
const emailBtn = document.querySelector(".emailBtn");
const emailMenu = document.querySelector(".emailMenu");

// notif
const notifBtn = document.querySelector(".notifBtn");
const notifMenu = document.querySelector(".notifMenu");

// user
const userBtn = document.querySelector(".userBtn");
const userMenu = document.querySelector(".userMenu");

// tutup semua menu
function closeMenus() {
  changeLangMenu.classList.add("hidden");
  emailMenu.classList.add("hidden");
  notifMenu.classList.add("hidden");
  userMenu.classList.add("hidden");
}

// change lang
changeLangBtn.onclick = function (e) {
  e.stopPropagation();
  if (changeLangMenu.classList.contains("hidden")) {
    closeMenus();
    changeLangMenu.classList.remove("hidden");
  } else {
    changeLangMenu.classList.add("hidden");
  }
};

// email
emailBtn.onclick = function (e) {
  e.stopPropagation();
  if (emailMenu.classList.contains("hidden")) {
    closeMenus();
    emailMenu.classList.remove("hidden");
  } else {
    emailMenu.classList.add("hidden");
  }
};

// notif
notifBtn.onclick = function (e) {
  e.stopPropagation();
  if (notifMenu.classList.contains("hidden")) {
    closeMenus();
    notifMenu.classList.remove("hidden");
  } else {
    notifMenu.classList.add("hidden");
  }
};

// user
userBtn.onclick = function (e) {
  e.stopPropagation();
  if (userMenu.classList.contains("hidden")) {
    closeMenus();
    userMenu.classList.remove("hidden");
  } else {
    userMenu.classList.add("hidden");
  }
};

// klik diluar
document.onclick = function () {
  closeMenus();
};
