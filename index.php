<?php
require_once('root.php')
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Marvel Api Characters</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        .modal-header {
            box-shadow: 1px 1px 12px #555;
        }

        p {
            font: 1rem 'Fira Sans', sans-serif;
            margin-top: 20px;
        }

        .container {
            padding-left: 35px;
            margin-bottom: 12px;
            font-size: 17px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .heroeName {
            width: 40%;
            margin: auto;
            display: inline-block;
            padding: 0.5em 1em;
            text-decoration: none;
            background: #668ad8; /*ButtonColor*/
            color: #FFF;
            border-bottom: solid 4px #627295;
            border-radius: 3px;
        }

        .heroeName:active { /*OnClick*/
            -ms-transform: translateY(5px);
            -webkit-transform: translateY(4px);
            transform: translateY(4px); /*Move down*/
            box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*Reduce Shadow*/
            border-bottom: none;
        }

        .image {
            margin: auto;
        }

        li {
            list-style: none;
        }

        .loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid #3498db;
            width: 120px;
            height: 120px;
            -webkit-animation: spin 2s linear infinite; /* Safari */
            animation: spin 2s linear infinite;
        }

        /* Safari */
        @-webkit-keyframes spin {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>

<header class="modal-header">
    <h1 style="margin:auto">Marvel Api</h1>
</header>
<div class="loader" style="margin:auto"></div>
<div class="quizz container-fluid" id="quizz">
    <div id="formQuizz">
        <div id="app" class="container text-center">
        </div>
    </div>


</div>

<script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        jQuery(".loader").fadeOut(200);
    })
</script>

<script src="script.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>