
utools.onPluginEnter(() => {
  const display = utools.getPrimaryDisplay()
  const height = display.size.height;
  utools.setExpendHeight(height * (2 / 3))
})
export {}
