setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("heloow");
    setTimeout(function f() {
      console.log("hellow there");
    }, 5000);
  }, 3000);
}, 1000);
