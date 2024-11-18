import $ from "jquery"

const CLoginFormP = () => {
    $(".helptext").before($(".helptext").css({ "content": "(Required)", "color": "#c00", "font-size": ".8em" }))
}

export default CLoginFormP