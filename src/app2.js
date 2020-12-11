import $ from "jquery"
import "./app2.css"
const $tabBar = $("#app2 .tab-bar")
console.log($tabBar.children(0))
const $tabContent = $("#app2 .tab-content")

$tabBar.on("click","li",(e)=>{
    let $li = $(e.currentTarget)
    //选中时添加样式
    $li.addClass("selected")
        .siblings().removeClass("selected")
    let index = $li.index()
    //console.log(index)
    //选中时显示对应content
    $tabContent.children()
        .eq(index).addClass("active")
        .siblings().removeClass("active")
})

//刷新时自动触发点击事件
$tabBar.children().eq(0).trigger("click")