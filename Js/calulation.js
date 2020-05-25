
var totalPrice=0;


function AddItem(name,price) 
{
    totalPrice+=price;
    $('#price').text('$'+totalPrice);
    $('#items').prepend('<li value="'+price+' ">'+name+ ' ( $'+ price+' )</li>');
    TotalPrice();  

}

function TotalPrice() {
    $('.price').text('Total: $'+totalPrice);

}

function RemoveItem(item){
    var itemPrice=$(item).attr('value');
        totalPrice=totalPrice-itemPrice;
        TotalPrice();

}

function DeleteLast(){
    $('#items li').last().remove();
    var price=$('#items li').last().attr('value');
    totalPrice-=price;
    TotalPrice();
}

function ClearItems(){
    $('#items').empty();
    totalPrice=0;
    TotalPrice();
}

function CloseWindow(){
    $('.dialog-box').css('display','none');
}

function CheckOut(){
   
    if(totalPrice<1){
        $('.dialog-box div p:nth-child(1)').text("No Items Selected");
        $('.dialog-box').css('display','block');


    }else{
        $('.dialog-box div p:nth-child(1)').text("Thanks For Shopping");
        $('.dialog-box div p:nth-child(2)').text('Total: $'+totalPrice);


        $('.dialog-box').css('display','block');
        ClearItems();

    }


}