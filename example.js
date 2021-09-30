var myZoneSpec = {
  beforeTask: function () {
    console.log('Before task');
  },
  afterTask: function () {
    console.log('After task');
  }
};

var myZone = zone.fork(myZoneSpec);
myZone.run(function() {
   console.log('My task successfully got executed.')
});

// Output:
// Before task
// My task successfully got executed.
// After task
