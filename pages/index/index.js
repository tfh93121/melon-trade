let thisPage    = {}
const app       = getApp()

Page({
  data: {
    current_tab: 'sell-tab',
    is_sell_tab: true,
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    thisPage = this
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  },
  handleTabChange({ detail }) {
    this.setData({
      current_tab: detail.key,
      is_sell_tab: detail.key == "sell-tab"
    })
    //TODO: 更改TAB之后的页面处理
  }
})