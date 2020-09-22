<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "emailaddress@here.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Cloak &amp; Dagger</title>
        
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/contact.css" />
        <!-- Font Links -->
        <link
            href="https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap"
            rel="stylesheet"
        />
        <link href="font/font.css" rel="stylesheet">
    </head>
    <body>
        <div id="one">
            <div id="one_img_div">
                <a href="http://cloakanddaggercle.com"><img id="one_img" src="img/CD_Logo_Horizontal.png" /></a>
            </div>
            <div id="one_menu_div">
                <ul id="one_menu">
                    <li id="one_menu_first" class="one_menu">
                        <a class="one_menu_a" target="_blank" href="menu.html"
                            >MENU</a
                        >
                    </li>
                    <li id="one_menu_second" class="one_menu">
                        <a class="one_menu_a" target="_blank" href="videos.html"
                            >VIDEOS</a
                        >
                    </li>
                    <li id="one_menu_third" class="one_menu">
                        <a
                            class="one_menu_a"
                            target="_blank"
                            href="gallery.html"
                            >GALLERY</a
                        >
                    </li>
                    <li id="one_menu_fourth" class="one_menu">
                        <a
                            class="one_menu_a"
                            target="_blank"
                            href="contact.html"
                            >CONTACT</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div id="two">
            <div id="two_contacts_div">
                <h3 id="address" class="two_contacts">
                    2399 W. 11TH ST. CLEVELAND, OH 44113 ·
                </h3>
                <h3 id="phone" class="two_contacts">
                    <a href="tel:216-795-5657">(216) 795-5657</a>
                </h3>
            </div>
        </div>
            <h1 class="side_headers">CONTACT</h1>
        <p class="big_text">
            EMAIL
        </p>
        <p class="small_text">
            info@cloakanddaggercle.com
        </p>

    <form action="contact.php" method="POST">
        <p>Name</p> <input type="text" name="name">
        <p>Email</p> <input type="text" name="email">
        <p>Phone</p> <input type="text" name="phone">

        <br />

        <p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
        <input type="submit" value="Send"><input type="reset" value="Clear">
    </form>
            <div id="seven">
                <div id="seven_socials_div">
                    <a
                        id="seven_facebook_a"
                        target="_blank"
                        href="https://facebook.com/cloakanddaggercle"
                    >
                        <img id="seven_facebook" src="img/CD_Facebook.png" />
                    </a>

                    <a
                        id="seven_instagram_a"
                        target="_blank"
                        href="https://instagram.com/cloakanddaggercle"
                    >
                        <img id="seven_instagram" src="img/CD_Instagram.png" />
                    </a>
                </div>
                <p id="seven_text">
                    Sign up for our newsletter
                </p>
                <div class="klaviyo-form-RBSHP6"></div>
            <script
                async
                type="text/javascript"
                src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TMxbzu"
            ></script>
            </div>

    </body>
</html>

