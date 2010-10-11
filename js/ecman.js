$(document).ready(function() {
    $('.edit').editable();
});

var character_array = [];

function add_new_p() {
    var p_array = []
    p_array[0] = $("input#add_new_pName").val();
    p_array[1] = $("input#add_new_pIdentifier").val();
    p_array[2] = $("input#add_new_pInitiative").val();
    p_array[3] = $("input#add_new_pHP").val();
    tablerow = "<tr><td></td>";
    for (item in p_array) {
        tablerow += "<td class=\"edit\">" + p_array[item] + "</td>";
    }
    $("#encounter > tbody:last").append(tablerow + "</td>");
    $('.edit').editable();
t}
