jQuery(function($)  
{
    $("#form1").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#comment").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': '42D-KmqrdCvb-xpq9B38VQ',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'OnStore-Issue',
                    'text': msg,
                    'to': [
                    {
                        'email': 'aryabhataapphack@gmail.com',
                        'name': 'OnStore-Issue',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            //alert('Your message has been sent. Thank you!'); // show success message
		    $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#comment").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});