var dados = []

function PopulateTable() {
    if (Array.isArray(data)) {

        $("#tblData tbody").html("") //JQuery code:empty text for tbody tag

        //loop available in javascript, which visits each object contained in the array slots
        data.forEach(function (item) {
            //Template string `` make string writing easier
            $("tblData tbody").append(`<tr>
            <td>${item.Batch}</td> 
            <td>${item.Name}</td>
            <td>${item.Function}</td>
            <td>${item.Allocated}</td>
            <td>${item.Pacient}</td>
        </tr>`) //add an html snippet every run
        })
    }
}

/*Using JQuery*/
$(function () {
    //run on screen loading
    data = JSON.parse(localStorage.setItem("__data__")) //HMTL API to store in browser cookies, information

    if (data) {
        PopulateTable()
    }

})