var dados = []

function PopulateTable() {
    if (Array.isArray(data)) {

        //
        localStorage.setItem("__data__", JSON.stringify(data))

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

    $("#btnSave").click(function(){
        //Event click button Save changes

        let Batch = $("txtBatch").val() //what the user types in the modal will be delivered to val() to store in the Batch variable
        let Name = $("txtName").val()
        let Function = $("txtFunction").val()
        let Allocated = $("txtAllocated").val()
            
        let record = {}

        record.Batch = Batch
        record.Name = Name
        record.Function = Function
        record.Allocated = Allocated

           //lengh vector+1
           record.ID = data.length + 1

           data.push(record)
   
           $("#modalRecod").modal("hide") //close modal
   
           //clear modal: insert empty
           $("txtBatch").val("")
           $("txtName").val("")
           $("txtFunction").val("")
           $("txtAllocated").val("")
   
           PopulateTable()
       })
   
   })