var order = ['green','red','yellow','blue'];

Page({
    data: {
        toView:'red',
        scrollTop:150
    },
    upper: function(e) {
    console.log(e)
    },
    lower: function(e) {
      console.log(e)
    },
    scroll: function(e) {
      console.log(e)
    },
    onLoad: function () {
    
    },
    tap:function(){
        for(var i = 0; i < order.length;++i){
            if(this.data.toView == undefined){

                this.setData({
                    toView:'green'
                })
            }
            else if(order[i] === this.data.toView){
                this.setData({
                    toView:order[i+1]
                })
                break
            }
        }
    },
    tapMove:function(){
        this.setData({

            scrollTop:this.data.scrollTop + 10
        })
    }

})