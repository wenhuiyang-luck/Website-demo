$(function(){
    $("a[orderStatus]").click(function(){
        var orderStatus = $(this).attr("orderStatus");
        if(orderStatus=='all'){
            $("table[orderStatus]").show(); 
        }
        else{
            $("table[orderStatus]").hide();
            $("table[orderStatus="+orderStatus+"]").show();         
        }
        $("div.orderType div").removeClass("selectedOrderType");
        $(this).parent("div").addClass("selectedOrderType");
    });

    // $("a.deleteOrderLink").click(function(){
    //     deleteOrderid = $(this).attr("oid");
    //     deleteOrder = false;
    //     $("#deleteConfirmModal").modal("show");
    // });
    // $("button.deleteConfirmButton").click(function(){
    //     deleteOrder = true;
    //     $("#deleteConfirmModal").modal('hide');
    // }); 
    // $('#deleteConfirmModal').on('hidden.bs.modal', function (e) {
    //     if(deleteOrder){
    //         var page="foredeleteOrder";
    //         $.post(
    //                 page,
    //                 {"oid":deleteOrderid},
    //                 function(result){
    //                     if("success"==result){
    //                         $("table.orderListItemTable[oid="+deleteOrderid+"]").hide();
    //                     }
    //                     else{
    //                         location.href="login.jsp";
    //                     }
    //                 }
    //             );
    //     }
    // })      
});