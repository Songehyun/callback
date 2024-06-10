function a() {
  b();
  console.log("5");

  function b() {
    c();
    console.log("4");

    function c() {
      d();
      console.log("3");

      function d() {
        // e();
        // console.log("2");

        function e() {
          // f();
          // console.log("1");

          function f() {
            console.log("f");
          }
          f();
          console.log("1");
        }
        e();
        console.log("2");
      }
      // d();
      // console.log("3");
    }
    // c();
    // console.log("4");
  }
}

a();
