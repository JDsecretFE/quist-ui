module.exports = class TimeFixPlugin {
  constructor(watchOffset = 11000) {
    this.watchOffset = watchOffset
  }

  apply(compiler) {
    const watch = compiler.watch
    let watching
    let offsetApplied

    compiler.watch = function () {
      watching = watch.apply(this, arguments)
      return watching
    }

    compiler.hooks.watchRun.tap('time-fix-plugin', () => {
      if (watching) {
        watching.startTime += this.watchOffset
        offsetApplied = true
      }
    })

    compiler.hooks.done.tap('time-fix-plugin', stats => {
      if (offsetApplied) {
        stats.startTime -= this.watchOffset
      }
    })
  }
}
