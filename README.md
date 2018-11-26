## HTML Tags Calculator

This is a simple demo to calculate the count of tags or element in a HTML content.

# Simplest and light weight tool to calculate the elements.


<html lang="en" xmlns="http://www.w3.org/1999/xhtml" manifest="calculateHTMLTags1.appcache">
<head>
    <!--meta content-->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--meta content-->

    <title>Calculate HTML tags</title>

    <!--css content-->
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="myStyles.css">
    <!--css content-->
    <!--js content-->
    <script src="jquery.min.js"></script>
    <script defer src="bootstrap.min.js"></script>
    <!--js content-->
</head>
<body>
    <div class="container">
        <div class="page-header text-center">
            <h1>Calculate HTML tags</h1>
        </div>
        <div class="col-md-12 col-sm-12">
            <h4 class="text-info"><strong>Input HTML</strong></h4>
        </div>
        <div class="col-md-8 col-sm-8">
            <textarea id="txtHtmlRawData" class="form-control" style="height:400px;"></textarea>
            <div class="pull-right">
                <br />
                <!--<button type="submit" id="btnShowPage" class="btn btn-primary">
                    Preview Page
                </button>-->
                <button type="submit" id="btnStartCal" class="btn btn-success">
                    Calculate HTML Tags
                </button>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <label class="text-underline"> Before using tool </label>
            <ul class="text-primary info-tool">
                <li class="m-b-8">
                    Only html tags supported by HTML5 are been calculated.
                    <a class="text-danger" href="https://www.w3schools.com/tags/" target="_blank">
                        <strong>Check HTML5 supported tags</strong>
                    </a>
                </li>
                <li class="m-b-8">
                    Other then HTML tags no other type of tag or data will be calculated.
                </li>
                <li class="m-b-8">
                    You can include <strong class="text-warning">&lt;script&gt;</strong> tag also but it should not contains any other redirection or specfically it should not be a <strong class="text-warning">Ads script</strong>.
                </li>
                <li class="m-b-8">
                    If all the above given conditions are satisfied then and then only the every tags calulation will take care & result will be generated.
                </li>
            </ul>
        </div>

        <div id="result" class="col-md-12 col-sm-12">

        </div>
        <div class="col-md-12 col-sm-12 text-center m-t-15 p-20 border-top-white">
            <h4><strong>Calculate HTML tags footer</strong></h4>
        </div>
    </div>

    <!--js Content-->
    <script defer src="calhtmltags.js"></script>
    <!--js Content-->
</body>
</html>
