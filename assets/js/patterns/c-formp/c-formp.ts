import $ from "jquery";

const CFormP = () => {
  $(function () {
    $(".c-formp__intro-heading").css({ "color": "hsl(231, 48%, 48%)"});
    $(".c-formp__intro-text").css({ "font-size": "36px", "color": "#c2185b" })
    $("label + input").css({ "display": "block", "clear": "both" })
    $("* + fieldset").css({ "margin": "5em 0" })
    $("label ~ input").css({ "display": "block" })
    $("[type=submit]").css({ "background-color": "seagreen", "border": 0, "border-radius": "1000px", "color": "#fff", "font-size": "18pt", "padding": "10px 20px" })
  });
};

export default CFormP