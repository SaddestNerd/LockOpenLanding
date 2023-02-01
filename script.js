const token = '5775001344:AAFvnkJJmYH-8ugZ4aAhs7S6Pl7FIUglxeU';
const chatId = '1316989156';


$(".text-button").keypress(function(event){
  event = event || window.event;
  if (event.charCode && event.charCode !=0 && event.charCode!=43 && (event.charCode < 48 || event.charCode > 57) )
    return false;
});

var added_item_button = document.getElementById('popup');
var displaySetting = added_item_button.style.display;

$(document).ready(function () {



    $("#add_button").on('click', function (event) {
        execute();
    });
    $("#close").on('click', function (event) {
        popup();
    });
    $("#accept").on('click', function (event) {
        popup();
    });


    function popup(){
      added_item_button.style.display = 'none';
    }
    function execute() {
        const fname = document.querySelector('#fname').value;
        const message = `Номер: ${fname}`;
        if(fname.length > 9){
          $.ajax({
            type: 'POST',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            data: {
                chat_id: chatId,
                text: message,
                parse_mode: 'html',
            },
            success: function (res) {
                console.debug(res);
                $('.response').text('');
                added_item_button.style.display = 'flex';
                document.querySelector('#fname').value = "";
            },
            error: function (error) {
                console.error(error);
                $('.response').text('Помилка відправлення!');
            }
          });
        }
        else{
          $('.response').text('❗ Неправильний номер');
        }
        
    }
});