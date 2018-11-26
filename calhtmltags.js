var alltags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
];


const ShowModal = '<div id="ShowOriginalPage" class="modal fade" role="dialog"><div class="modal-dialog modal-lg">' +
                '<!--Modal content-->'+
                    '<div class="modal-content">' +
                        '<div class="modal-header" id="PageHeader">' +
                            '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                            '<h4 class="modal-title">Original page looks like this</h4>' +
                        '</div>' +
                        '<div class="modal-body" id="PageContent">' +
                            '<div id="ShowModelContent" class="full-width">AppendPageContent</div>' +
                        '</div > ' +
                        '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
              '</div>';

$(document).ready(function () {
   
});

$("#btnStartCal").click(function () {
    if ($("#txtHtmlRawData").val() !== "") {
        $("#ShowOriginalPage").remove();

        var newModelData = ShowModal;
        newModelData = newModelData.replace("AppendPageContent", $("#txtHtmlRawData").val());
        $(".container").append(newModelData);

        $("#result").empty();
        $("#result").append("<br><h4><strong>Here below is the list of all tags with there count.</strong></h4>");
        $(alltags).each(function (j, x) {
            var tag = $("#ShowOriginalPage #ShowModelContent").find(this.toString());
            if (tag.length > 0) {
                var tagName = this.toString();

                var accordion = '<button class="collapsed accordion" data-toggle="collapse" data-target="#' + tagName + '_' + j + '"><strong>' + tagName + '</strong> [' + tag.length + ']</button><div id="' + tagName + '_' + j +'" class="collapse">';

                $(tag).each(function (i, obj) {
                    let innerText = obj.outerHTML.replaceAll("<", "&lt;");
                    innerText = innerText.replaceAll(">", "&gt;");
                    accordion += "<p class='bg-dark text-white m-p-5'>" + innerText + "</p>";
                });
                accordion += '</div>';
                $("#result").append(accordion);
            }
        });
        
        $("body, html").animate({
            scrollTop: $("#result").offset().top
        }, 600);
    }
    else {
        window.alert("No content found! Try Again.");
    }
});

$("#btnShowPage").click(function () {
    $("#ShowOriginalPage").remove();

    if ($("#txtHtmlRawData").val() !== "") {
        let newModelData = ShowModal;
        newModelData = newModelData.replace("AppendPageContent", $("#txtHtmlRawData").val());
        $(".container").append(newModelData);
        $("#ShowOriginalPage").modal('show');
        $("#ShowModelContent .container").addClass("full-width");
    }
    else {
        window.alert("No content found! Try Again.");
    }
});

// string replacement function
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
