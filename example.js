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



this._zone.onMicrotaskEmpty.subscribe({
  next: () => { 
    this._zone.run(() => { 
      this.tick();
    }); 
  }}
);




 tick(): void {
    try {
      this._views.forEach((view) => view.detectChanges());
      if (this._enforceNoNewChanges) {
        this._views.forEach((view) => view.checkNoChanges());
      }
    } catch (e) {
      ...
    } finally {
      ...
    }
  }
