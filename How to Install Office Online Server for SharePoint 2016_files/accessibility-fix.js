$(document).ready(function () {

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85260/ */
    limitFocusInDialog("#boxes #dialog .textSpan #reason", "#boxes #dialog .buttonSpan #cancelButton");

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85264/ */
    limitFocusInDialog("#categoryFilterSection #categoryFilter #allCategoryPopupContainer #categoryPopupClose a#closeAllCategoryPopup", "#categoryFilterSection #categoryFilter #allCategoryPopupContainer #forumDetailsContainer a#submitAllCategories");

    limitFocusInDialog("#migrateAnnouncementPopup #closeMigratePopup", "#migrateAnnouncementPopup .footer a.QAlink");

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85278/ */
    focusOnFirstElementByXPath("#homePageContentContainer #searchContent #allThreadsContainer #homePageResultsContainer ul#threadList li.threadblock:first .threadsnippet .details .detailscontainer h3 a.threadUrl");

    /*  fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85237 */
    $('body').on("keyup", "#quickLinks", function (e) {
        if (e.which == 27 && $('#quickLinks').children(".popup").is(':visible')) {
            $('#quickLinks').click();
            $('#quickLinks').focus();
        }
    });

    $('body').on("keyup", ".messageContentContainer .messageContent .messageFooter .actions .abusive", function (e) {
        if (e.which == 27) {
            $(this).find("ul").first().hide();
            $(this).find("a").first().attr("aria-expanded", "false");
            $(this).find("a").first().focus();
        }
    });

    $('body').on("keyup", "#boxes #dialog", function (e) {
        if (e.which == 27) {
            $("#cancelButton").click();
        }
    });

    /* fix bug  https://ceapex.visualstudio.com/Engineering/_workitems/edit/85239 */
    $('body').on("keydown", "#quickLinks a:last", function (e) {
        if (e.which == 9) {
            $('#quickLinks').click();
            $('#quickLinks').focus();
        }
    });

    $('body').on("keydown", ".messageContentContainer .messageContent .messageFooter .actions .abusive ul.popup li:last-child a", function (e) {
        if (e.which == 9) {
            $(this).parents("ul.popup").first().hide();
            $(this).parents("ul.popup").first().prev().attr("aria-expanded", "false");
            $(this).parents("ul.popup").first().prev().focus();
        }
    });

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85255 */
    $('body').on("keydown", ".messageContentContainer .messageContent .messageFooter .actions .abusive ul.popup a", function (e) {
        if (e.which == 13) {
            $(this).parents("ul.popup").first().hide();
            $(this).parents("ul.popup").first().prev().attr("aria-expanded", "false");
        }
    });

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85277 */
    $('body').on("keydown", ".threadsnippet .arrowoutercontainer .arrowcontainer a.arrowdown.visible", function (e) {
        if (e.which == 13) {
            $(this).click();
        }
    });

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/85833 */
    $('body').on("keydown", ".messageContentContainer .messageContent .messageFooter .actions .abusive a.popup", function (e) {
        if (e.which == 13) {
            if ($(this).next().is(':visible')) {
                $(this).next().hide();
                $(this).attr("aria-expanded", "false");
                $(this).focus();
                if (e.preventDefault) {
                    e.preventDefault();
                }
            }
        }
    }); 

    /* fix bug https://ceapex.visualstudio.com/Engineering/_workitems/edit/107445/ */
    $('body').on("keydown", "#threadFilter", function (e) {
        if (e.which == 27 && $('#threadFilter').children(".popup").is(':visible')) {
            $('#threadFilter').click();
            $('#threadFilter').focus();
        }
    });

    $('body').on("keydown", "#threadFilter input:last", function (e) {
        if (e.which == 9) {
            $('#threadFilter').click();
            $('#threadFilter').focus();
        }
    });

    $('body').on("keydown", "#sortFilter", function (e) {
        if (e.which == 27 && $('#sortFilter').children(".popup").is(':visible')) {
            $('#sortFilter').click();
            $('#sortFilter').focus();
        }
    });

    $('body').on("keydown", "#sortFilter li:last", function (e) {
        if (e.which == 9) {
            $('#sortFilter').click();
            $('#sortFilter').focus();
        }
    });

    //fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/182704 , 183294
    if ($("#categoryFilterSection #categoryFilter #viewallCategoriesContainer .viewAllLink").length > 0) {
        limitFocusInDialog("#categoryFilterSection #categoryFilter #viewallCategoriesContainer .viewAllLink", "a#toggleSidebar");

        if ($("#homePageStickyThreadsContainer a").length > 0) {
            limitFocusIfNoPop("#homePageStickyThreadsContainer .arrowoutercontainer:first a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter");

            limitFocusInDialog("#homePageStickyThreadsContainer .arrowoutercontainer:first a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter input:last");
        } else if ($("#homePageResultsContainer a").length > 0) {
            limitFocusIfNoPop("#homePageResultsContainer .arrowoutercontainer:first a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter");

            limitFocusInDialog("#homePageResultsContainer .arrowoutercontainer:first a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter input:last");
        } else {
            if ($("div#ux-footer a").length > 0) {
                limitFocusIfNoPop("div#ux-footer a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter");

                limitFocusInDialog("div#ux-footer a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter input:last");
            } else {
                limitFocusIfNoPop("div#Footer a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter");

                limitFocusInDialog("div#Footer a:first", "#searchContent #homePageFilterBarContainer #filterBar #sortFilter input:last");
            }
        }

        if ($("#searchActionsContainer #searchActions a").length > 0) {
            limitFocusInDialog("#searchActionsContainer #searchActions a:first", "#homePageSidebarContainer #sidebar a:last");
        } else {
            limitFocusInDialog("#searchActionsContainer #searchActions .searchboxinnercontainer #searchbox", "#homePageSidebarContainer #sidebar a:last");
        }

        limitFocusInDialog("#homePageContentContainer #searchContent #homePageFilterBarContainer #filterBar #threadFilter", "#searchActionsContainer #searchActions .searchboxinnercontainer #searchimage");
    } else {
        limitFocusInDialog("#threadPageSidebarContainer a:first", "a#toggleSidebar");

        limitFocusInDialog("#topBarImportantInfoContainer #relatedThreadsLinkContainer #relatedThreadsLink", "#threadPageSidebarContainer a:last");

        limitFocusInDialog("#threadPageContainer a#rssFeed", "#searchActionsContainer #searchActions .searchboxinnercontainer #searchimage");
    }
    
    limitFocusInDialog("a#toggleSidebar", "#quickActions #quickLinks a:last");

    limitFocusIfNoPop("a#toggleSidebar", "#quickActions #quickLinks");

    

    //fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/182704
    $('body').on("keydown", ".forumDetailsTip a:last", function (e) {
        if (!e.shiftKey && e.which == 9) {
            $(this).parents('.forumBreadcrumb').first().data('hover', 0);
            $(this).parents('.forumDetailsTip').first().hide();
        }
    });

    //fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/183401
    $('.logoSpan.clip67x13').attr('tabindex', '-1');

    //fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/182518
    addSkipNavigationButton();

    //fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/183907
    $('body').on("keydown", "#HeaderSearchTextBox", function (e) {
        if (e.which == 9 && $("#searchTextContainer").is(':visible')) {
            if (e.shiftKey) {
                $(".toc ul.navL1").children("li").last().children("a").first().focus();
            } else {
                $("#FakeHeaderSearchButton").focus();
            }

            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $('body').on("keydown", "#FakeHeaderSearchButton", function (e) {
        if (e.which == 9 && $("#searchTextContainer").is(':visible')) {
            if (e.shiftKey) {
                $("#HeaderSearchTextBox").focus();
            } else {
                $("#askaquestion .askQuestionLink").focus();
            }

            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $(".toc ul.navL1").children("li").last().children("a").first().keydown(function (e) {
        if (!e.shiftKey && e.which == 9 && $("#searchTextContainer").is(':visible') && $(this).next("ul").is(':hidden')) {
            $("#HeaderSearchTextBox").focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $('body').on("keydown", "#askaquestion .askQuestionLink", function (e) {
        if (e.shiftKey && e.which == 9 && $("#searchTextContainer").is(':visible')) {
            $("#FakeHeaderSearchButton").focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $(window).resize(function () {
        var userCardelement = $("#userCard .unified-baseball-card .baseball-card-header .baseball-card-summary .baseball-card-point-count .textsize");
        if (userCardelement.length > 0) {
            if ($(window).width() < 400) {
                $(userCardelement).css({ "height": "50px", "line-height": "23px", "width": "50%" });
                $("#userCard .unified-baseball-card .baseball-card-header .baseball-card-summary .baseball-card-points-label").width("50%");
                $("#userCard .unified-baseball-card .baseball-card-header .baseball-card-summary .baseball-card-percentile").width("50%");
            } else {
                $(userCardelement).css({ "height": "36px", "width": "96px" });
                $("#userCard .unified-baseball-card .baseball-card-header .baseball-card-summary .baseball-card-points-label").width(96);
                $("#userCard .unified-baseball-card .baseball-card-header .baseball-card-summary .baseball-card-percentile").width(96);
            }
        }
    });
});

function limitFocusInDialog(startElementXPath, endElementXPath) {
    $('body').on("keydown", endElementXPath, function (e) {
        var keyCode = e.keyCode || e.which;
        if (!e.shiftKey && keyCode == 9) {
            $(startElementXPath).focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $('body').on("keydown", startElementXPath, function (e) {
        var keyCode = e.keyCode || e.which;
        if (e.shiftKey && keyCode == 9) {
            $(endElementXPath).focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });
}

//fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/182704 , 183294
function limitFocusIfNoPop(startElementXPath, endElementXPath) {
    $('body').on("keydown", endElementXPath, function (e) {
        var keyCode = e.keyCode || e.which;
        if (!e.shiftKey && keyCode == 9 && !$(endElementXPath).children(".popup").is(':visible')) {
            $(startElementXPath).focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });

    $('body').on("keydown", startElementXPath, function (e) {
        var keyCode = e.keyCode || e.which;
        if (e.shiftKey && keyCode == 9 && !$(endElementXPath).children(".popup").is(':visible')) {
            $(endElementXPath).focus();
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    });
}

function focusOnFirstElementByXPath(elementXPath)
{
    if ($(elementXPath).length > 0) {
        $(elementXPath).first().focus();
    }
}

//fix bug https://dev.azure.com/ceapex/Engineering/_workitems/edit/182518
function addSkipNavigationButton() {
    $("#ux-header header div.top .left").append("<a id='SkipNavigation' aria-label='Skip navigation' role='button' href='javascript:void(0)'>Skip navigation</a>");

    $('body').on("keydown", "#ux-header header div.top .left a.DevCenterFullNameNonMegaBlade", function (e) {
        if (!e.shiftKey && e.which == 9) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            $("a#SkipNavigation").show();
            $("a#SkipNavigation").focus();
        }
    });

    if ($("#ux-header header div.top .right a.createProfileLink").attr("href")) {
        $('body').on("keydown", "#ux-header header div.top .right a.createProfileLink", function (e) {
            if (e.shiftKey && e.which == 9) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                $("a#SkipNavigation").show();
                $("a#SkipNavigation").focus();
            }
        });
    } else {
        $('body').on("keydown", "#ux-header header div.top .right a.scarabLink", function (e) {
            if (e.shiftKey && e.which == 9) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                $("a#SkipNavigation").show();
                $("a#SkipNavigation").focus();
            }
        });
    }

    $('body').on("keydown", "#ux-header header div.top .left a#SkipNavigation", function (e) {
        if (e.which == 9) {
            $("a#SkipNavigation").hide();
        } else if (e.which == 13) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            focusOnFirstElementByXPath("#homePageContentContainer #searchContent #allThreadsContainer #homePageResultsContainer ul#threadList li.threadblock:first .threadsnippet .details .detailscontainer h3 a.threadUrl");
            $("a#SkipNavigation").hide();
        }
    });
}
// SIG // Begin signature block
// SIG // MIInNgYJKoZIhvcNAQcCoIInJzCCJyMCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // INBGASxNI9048n84I7ww0ZnJGo1Lb/3WWG9RC3MVbHSg
// SIG // ghFlMIIIdzCCB1+gAwIBAgITNgAAATl4xjn15Xcn6gAB
// SIG // AAABOTANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjAxMDIxMjAz
// SIG // OTA2WhcNMjEwOTE1MjE0MzAzWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr7X+kRvV9WxV
// SIG // y0Dsy7gNOpOYAYYsy1kN/5upyCjsKDbLvTfrPcrfmRka
// SIG // W2Ww7QZrQHqIt3Nlyvb39Md7Kt9hljz7/qcemu7uebUP
// SIG // ZauHr1+kDcT4ax/vpbZVLbIolZlfd+P/heQf+9bCdTca
// SIG // /PTrBMVdW+RMuy4ipBMMaU0cZTslF3+DokL0w8xtCOwL
// SIG // HieEcTstt7S54fNuvKZLnGNj20ixWKESBtWRjYHIXKay
// SIG // /rokS7gs+L2V34nUKFrrN04WPPpmLpQ/AGkOWbZ7sM0h
// SIG // 7c8WJv4Ojnkg7H+MRXqdA2CwN8zYijuAr5szUYyW3INQ
// SIG // ZuzqQ3vwki0lhuWqKlvl+QIDAQABo4IFgzCCBX8wKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgxKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgxKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgxKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUUGrH1hbhlmeE4x4+
// SIG // xNBviWC5XYMwDgYDVR0PAQH/BAQDAgeAMFAGA1UdEQRJ
// SIG // MEekRTBDMSkwJwYDVQQLEyBNaWNyb3NvZnQgT3BlcmF0
// SIG // aW9ucyBQdWVydG8gUmljbzEWMBQGA1UEBRMNMjM2MTY3
// SIG // KzQ2MjUxNjCCAdQGA1UdHwSCAcswggHHMIIBw6CCAb+g
// SIG // ggG7hjxodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // aW5mcmEvQ1JML0FNRSUyMENTJTIwQ0ElMjAwMS5jcmyG
// SIG // Lmh0dHA6Ly9jcmwxLmFtZS5nYmwvY3JsL0FNRSUyMENT
// SIG // JTIwQ0ElMjAwMS5jcmyGLmh0dHA6Ly9jcmwyLmFtZS5n
// SIG // YmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMS5jcmyGLmh0
// SIG // dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMS5jcmyGLmh0dHA6Ly9jcmw0LmFtZS5nYmwv
// SIG // Y3JsL0FNRSUyMENTJTIwQ0ElMjAwMS5jcmyGgbpsZGFw
// SIG // Oi8vL0NOPUFNRSUyMENTJTIwQ0ElMjAwMSxDTj1CWTJQ
// SIG // S0lDU0NBMDEsQ049Q0RQLENOPVB1YmxpYyUyMEtleSUy
// SIG // MFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZpZ3Vy
// SIG // YXRpb24sREM9QU1FLERDPUdCTD9jZXJ0aWZpY2F0ZVJl
// SIG // dm9jYXRpb25MaXN0P2Jhc2U/b2JqZWN0Q2xhc3M9Y1JM
// SIG // RGlzdHJpYnV0aW9uUG9pbnQwHwYDVR0jBBgwFoAUG2ai
// SIG // Gfyb66XahI8YmOkQpMN7kr0wHwYDVR0lBBgwFgYKKwYB
// SIG // BAGCN1sBAQYIKwYBBQUHAwMwDQYJKoZIhvcNAQELBQAD
// SIG // ggEBAKxTTHwCUra3f91eISJ03YxKPwi2AGPGF/36BgJs
// SIG // pOja4xMd7hTdLCZkd6kdIgYIEt0gYlIuKGfl5PPg41Z5
// SIG // yRZ/RYZrv5AdsE+GSo442XlkTj3E7FJ0YLNfjoSk1m19
// SIG // hJ4PKB9wqtKkfS2jk/xEuRI3ffEtY6ulmfAfCnTR4NHf
// SIG // lRgLcLbPhN7rvDJFDOa1LpJjx1uwQvLbZoCnl2YiIi1e
// SIG // E9Ss8QTDDYNJWO4hW0OX5I+YS2tRNFr7BjHDBjjMEVFc
// SIG // FcJehfDi/GlGOYu7aQLs+eF1UuFtYKz8kyQ2ntagdfR+
// SIG // Sb6k8DzzZt9CaxRqUf1/0hkIUTrKA+FdbbwifLQwggjm
// SIG // MIIGzqADAgECAhMfAAAAFLTFH8bygL5xAAAAAAAUMA0G
// SIG // CSqGSIb3DQEBCwUAMDwxEzARBgoJkiaJk/IsZAEZFgNH
// SIG // QkwxEzARBgoJkiaJk/IsZAEZFgNBTUUxEDAOBgNVBAMT
// SIG // B2FtZXJvb3QwHhcNMTYwOTE1MjEzMzAzWhcNMjEwOTE1
// SIG // MjE0MzAzWjBBMRMwEQYKCZImiZPyLGQBGRYDR0JMMRMw
// SIG // EQYKCZImiZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUg
// SIG // Q1MgQ0EgMDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQDVV4EC1vn60PcbgLndN80k3GZh/OGJcq0p
// SIG // DNIbG5q/rrRtNLVUR4MONKcWGyaeVvoaQ8J5iYInBaBk
// SIG // az7ehYnzJp3f/9Wg/31tcbxrPNMmZPY8UzXIrFRdQmCL
// SIG // sj3LcLiWX8BN8HBsYZFcP7Y92R2VWnEpbN40Q9XBsK3F
// SIG // aNSEevoRzL1Ho7beP7b9FJlKB/Nhy0PMNaE1/Q+8Y9+W
// SIG // bfU9KTj6jNxrffv87O7T6doMqDmL/MUeF9IlmSrl088b
// SIG // oLzAOt2LAeHobkgasx3ZBeea8R+O2k+oT4bwx5ZuzNpb
// SIG // GXESNAlALo8HCf7xC3hWqVzRqbdnd8HDyTNG6c6zwyf/
// SIG // AgMBAAGjggTaMIIE1jAQBgkrBgEEAYI3FQEEAwIBATAj
// SIG // BgkrBgEEAYI3FQIEFgQUkfwzzkKe9pPm4n1U1wgYu7jX
// SIG // cWUwHQYDVR0OBBYEFBtmohn8m+ul2oSPGJjpEKTDe5K9
// SIG // MIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMFBggrBgEFBQcD
// SIG // AQYIKwYBBQUHAwIGCisGAQQBgjcUAgEGCSsGAQQBgjcV
// SIG // BgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUGBggrBgEFBQcD
// SIG // CQYIKwYBBQUIAgIGCisGAQQBgjdAAQEGCysGAQQBgjcK
// SIG // AwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3FQUGCisGAQQB
// SIG // gjcUAgIGCisGAQQBgjcUAgMGCCsGAQUFBwMDBgorBgEE
// SIG // AYI3WwEBBgorBgEEAYI3WwIBBgorBgEEAYI3WwMBBgor
// SIG // BgEEAYI3WwUBBgorBgEEAYI3WwQBBgorBgEEAYI3WwQC
// SIG // MBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIAQwBBMAsGA1Ud
// SIG // DwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/AgEAMB8GA1Ud
// SIG // IwQYMBaAFCleUV5krjS566ycDaeMdQHRCQsoMIIBaAYD
// SIG // VR0fBIIBXzCCAVswggFXoIIBU6CCAU+GI2h0dHA6Ly9j
// SIG // cmwxLmFtZS5nYmwvY3JsL2FtZXJvb3QuY3JshjFodHRw
// SIG // Oi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpaW5mcmEvY3Js
// SIG // L2FtZXJvb3QuY3JshiNodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2NybC9hbWVyb290LmNybIYjaHR0cDovL2NybDMuYW1l
// SIG // LmdibC9jcmwvYW1lcm9vdC5jcmyGgapsZGFwOi8vL0NO
// SIG // PWFtZXJvb3QsQ049QU1FUk9PVCxDTj1DRFAsQ049UHVi
// SIG // bGljJTIwS2V5JTIwU2VydmljZXMsQ049U2VydmljZXMs
// SIG // Q049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JMP2Nl
// SIG // cnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmpl
// SIG // Y3RDbGFzcz1jUkxEaXN0cmlidXRpb25Qb2ludDCCAasG
// SIG // CCsGAQUFBwEBBIIBnTCCAZkwNwYIKwYBBQUHMAKGK2h0
// SIG // dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0FNRVJPT1RfYW1l
// SIG // cm9vdC5jcnQwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // T09UX2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVST09UX2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVST09UX2FtZXJvb3QuY3J0MIGi
// SIG // BggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxD
// SIG // Tj1BSUEsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMs
// SIG // Q049U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1B
// SIG // TUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/YmFzZT9vYmpl
// SIG // Y3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0G
// SIG // CSqGSIb3DQEBCwUAA4ICAQAot0qGmo8fpAFozcIA6pCL
// SIG // ygDhZB5ktbdA5c2ZabtQDTXwNARrXJOoRBu4Pk6VHVa7
// SIG // 8Xbz0OZc1N2xkzgZMoRpl6EiJVoygu8Qm27mHoJPJ9ao
// SIG // 9603I4mpHWwaqh3RfCfn8b/NxNhLGfkrc3wp2VwOtkAj
// SIG // J+rfJoQlgcacD14n9/VGt9smB6j9ECEgJy0443B+mwFd
// SIG // yCJO5OaUP+TQOqiC/MmA+r0Y6QjJf93GTsiQ/Nf+fjzi
// SIG // zTMdHggpTnxTcbWg9JCZnk4cC+AdoQBKR03kTbQfIm/n
// SIG // M3t275BjTx8j5UhyLqlqAt9cdhpNfdkn8xQz1dT6hTnL
// SIG // iowvNOPUkgbQtV+4crzKgHuHaKfJN7tufqHYbw3FnTZo
// SIG // pnTFr6f8mehco2xpU8bVKhO4i0yxdXmlC0hKGwGqdeoW
// SIG // NjdskyUyEih8xyOK47BEJb6mtn4+hi8TY/4wvuCzcvrk
// SIG // Zn0F0oXd9JbdO+ak66M9DbevNKV71YbEUnTZ81toX0Lt
// SIG // sbji4PMyhlTg/669BoHsoTg4yoC9hh8XLW2/V2lUg3+q
// SIG // HHQf/2g2I4mm5lnf1mJsu30NduyrmrDIeZ0ldqKzHAHn
// SIG // fAmyFSNzWLvrGoU9Q0ZvwRlDdoUqXbD0Hju98GL6dTew
// SIG // 3S2mcs+17DgsdargsEPm6I1lUE5iixnoEqFKWTX5j/TL
// SIG // UjGCFSkwghUlAgEBMFgwQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxAhM2AAABOXjGOfXldyfqAAEA
// SIG // AAE5MA0GCWCGSAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJ
// SIG // AzEMBgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAM
// SIG // BgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJBDEiBCDy+klh
// SIG // I4SabHB2x7dEJlFwVApMiBu0wlC8H2r7boYD2zBCBgor
// SIG // BgEEAYI3AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBm
// SIG // AHShGoAYaHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0G
// SIG // CSqGSIb3DQEBAQUABIIBAKZjpRTACQLvgIE+aSWvzkFH
// SIG // xd0kaiRn8MdrNOFvgNudmgGxt6EedguCv7fadnDEbEsw
// SIG // uJIjtncLHfVXuzW1rVF+Sx2a9qqApro5TpXCpKO/vtmJ
// SIG // Eop3L/vYsNEdFMP+5LHQHxXA7JNs2Ofym9BRPdS1cz2e
// SIG // eqX44ZkalLnpanR3JS2KYJeVhwWKLjOaLkg5zr3qvVVA
// SIG // Mwy7mwyfilFc6xojEXkEOgrlAoKmyFn0eYWpE2oBbQqy
// SIG // ua2ZgJTFx5fn3Nquel3DV9x87QaPMhvX4IuoSd2H1i2R
// SIG // tVbNDPiws3TmZ5+BTBYWzBE3Y5KCWSqWD+6UIFSJsj+y
// SIG // mhHBYANc3TShghLxMIIS7QYKKwYBBAGCNwMDATGCEt0w
// SIG // ghLZBgkqhkiG9w0BBwKgghLKMIISxgIBAzEPMA0GCWCG
// SIG // SAFlAwQCAQUAMIIBVQYLKoZIhvcNAQkQAQSgggFEBIIB
// SIG // QDCCATwCAQEGCisGAQQBhFkKAwEwMTANBglghkgBZQME
// SIG // AgEFAAQgUodlDn4wJWGKeWLw7TUxiaWYsJkdQzDYf8/0
// SIG // JQScz5ACBmD7CsAH9hgTMjAyMTA4MTkwNTI1NTQuODEz
// SIG // WjAEgAIB9KCB1KSB0TCBzjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEpMCcGA1UECxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMg
// SIG // UHVlcnRvIFJpY28xJjAkBgNVBAsTHVRoYWxlcyBUU1Mg
// SIG // RVNOOkM0QkQtRTM3Ri01RkZDMSUwIwYDVQQDExxNaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIORDCCBPUw
// SIG // ggPdoAMCAQICEzMAAAFXRAdi3G/ovioAAAAAAVcwDQYJ
// SIG // KoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEm
// SIG // MCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // IDIwMTAwHhcNMjEwMTE0MTkwMjEzWhcNMjIwNDExMTkw
// SIG // MjEzWjCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UE
// SIG // CxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJp
// SIG // Y28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkM0QkQt
// SIG // RTM3Ri01RkZDMSUwIwYDVQQDExxNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEA3m0Dp1Rm+efAv2pC1dzA8A2E
// SIG // Hh7P7kJCt4+n9nxMfg0Gvm8B8YyjSVX+WJ0Fq0pOAcSs
// SIG // 64ofXXFUB8F6Ecm8f1P86E5zzcImz1vMOGuV3Ql3Ld4n
// SIG // ILTIF3FV65xL7ZrZkF3nTAGD/n/ZiNDbKV8PR3Eorq1A
// SIG // vF04NO5p1Axt1rTmU8adYbBneeJKAgpVGCqoJWWEfPA2
// SIG // 1GHUAf5nFt9J7u3zPegQoB1MDLtKw/zKSG3eyuN2HQHK
// SIG // Q8V2loCCrBYIkkmYaTSACtK8cLz69e0ajcwmFZBF7km3
// SIG // N0PmR1oof25z2CdKGxfIMSEZmPHf5vxy6oQ7xse/RY9f
// SIG // 0xER+t/G+QIDAQABo4IBGzCCARcwHQYDVR0OBBYEFF0x
// SIG // e7voOCGdT+Q9Mwp0WRH2gKnZMB8GA1UdIwQYMBaAFNVj
// SIG // OlyKMZDzQ3t8RhvFM2hahW1VMFYGA1UdHwRPME0wS6BJ
// SIG // oEeGRWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kv
// SIG // Y3JsL3Byb2R1Y3RzL01pY1RpbVN0YVBDQV8yMDEwLTA3
// SIG // LTAxLmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUH
// SIG // MAKGPmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kv
// SIG // Y2VydHMvTWljVGltU3RhUENBXzIwMTAtMDctMDEuY3J0
// SIG // MAwGA1UdEwEB/wQCMAAwEwYDVR0lBAwwCgYIKwYBBQUH
// SIG // AwgwDQYJKoZIhvcNAQELBQADggEBACV3eQCAbpdaJnK9
// SIG // 2JstGZavvJvpFLJyNUODy1wKK1LTWxNWnhPwB3ZB5h8l
// SIG // Z8roMwSTtBEF8qB03ugTx1e2ZBUv4lzEuPSlS7Lg0HlF
// SIG // yFy14Pl1GdN8qVGLy+ApRrENygUjM0RTPUQemil5qANv
// SIG // j+4j1SPm0i7CWKT+qu/+wcDDuQziAQss06B16/1n/vGj
// SIG // UkjB97R6hAzfDFwIUu5/xL06dy21oUBYe0QRHwi+BECA
// SIG // sn9aeW4XPrz6GsN9HJf+qpZI8gTS+gTqoXHXPxS8vAqm
// SIG // brlA3I0NEyn9WYKmpFmvEHWjRFjs/6fiNI0a9uTZtHvS
// SIG // Qq392iAUVEEdVW5TF/4wggZxMIIEWaADAgECAgphCYEq
// SIG // AAAAAAACMA0GCSqGSIb3DQEBCwUAMIGIMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMTIwMAYDVQQDEylNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0x
// SIG // MDA3MDEyMTM2NTVaFw0yNTA3MDEyMTQ2NTVaMHwxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29m
// SIG // dCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqR0NvHcRijog7PwT
// SIG // l/X6f2mUa3RUENWlCgCChfvtfGhLLF/Fw+Vhwna3PmYr
// SIG // W/AVUycEMR9BGxqVHc4JE458YTBZsTBED/FgiIRUQwzX
// SIG // Tbg4CLNC3ZOs1nMwVyaCo0UN0Or1R4HNvyRgMlhgRvJY
// SIG // R4YyhB50YWeRX4FUsc+TTJLBxKZd0WETbijGGvmGgLvf
// SIG // YfxGwScdJGcSchohiq9LZIlQYrFd/XcfPfBXday9ikJN
// SIG // QFHRD5wGPmd/9WbAA5ZEfu/QS/1u5ZrKsajyeioKMfDa
// SIG // TgaRtogINeh4HLDpmc085y9Euqf03GS9pAHBIAmTeM38
// SIG // vMDJRF1eFpwBBU8iTQIDAQABo4IB5jCCAeIwEAYJKwYB
// SIG // BAGCNxUBBAMCAQAwHQYDVR0OBBYEFNVjOlyKMZDzQ3t8
// SIG // RhvFM2hahW1VMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMBAf8EBTADAQH/
// SIG // MB8GA1UdIwQYMBaAFNX2VsuP6KJcYmjRPZSQW9fOmhjE
// SIG // MFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Jv
// SIG // b0NlckF1dF8yMDEwLTA2LTIzLmNybDBaBggrBgEFBQcB
// SIG // AQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0
// SIG // XzIwMTAtMDYtMjMuY3J0MIGgBgNVHSABAf8EgZUwgZIw
// SIG // gY8GCSsGAQQBgjcuAzCBgTA9BggrBgEFBQcCARYxaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tL1BLSS9kb2NzL0NQ
// SIG // Uy9kZWZhdWx0Lmh0bTBABggrBgEFBQcCAjA0HjIgHQBM
// SIG // AGUAZwBhAGwAXwBQAG8AbABpAGMAeQBfAFMAdABhAHQA
// SIG // ZQBtAGUAbgB0AC4gHTANBgkqhkiG9w0BAQsFAAOCAgEA
// SIG // B+aIUQ3ixuCYP4FxAz2do6Ehb7Prpsz1Mb7PBeKp/vpX
// SIG // bRkws8LFZslq3/Xn8Hi9x6ieJeP5vO1rVFcIK1GCRBL7
// SIG // uVOMzPRgEop2zEBAQZvcXBf/XPleFzWYJFZLdO9CEMiv
// SIG // v3/Gf/I3fVo/HPKZeUqRUgCvOA8X9S95gWXZqbVr5MfO
// SIG // 9sp6AG9LMEQkIjzP7QOllo9ZKby2/QThcJ8ySif9Va8v
// SIG // /rbljjO7Yl+a21dA6fHOmWaQjP9qYn/dxUoLkSbiOewZ
// SIG // SnFjnXshbcOco6I8+n99lmqQeKZt0uGc+R38ONiU9Mal
// SIG // CpaGpL2eGq4EQoO4tYCbIjggtSXlZOz39L9+Y1klD3ou
// SIG // OVd2onGqBooPiRa6YacRy5rYDkeagMXQzafQ732D8OE7
// SIG // cQnfXXSYIghh2rBQHm+98eEA3+cxB6STOvdlR3jo+KhI
// SIG // q/fecn5ha293qYHLpwmsObvsxsvYgrRyzR30uIUBHoD7
// SIG // G4kqVDmyW9rIDVWZeodzOwjmmC3qjeAzLhIp9cAvVCch
// SIG // 98isTtoouLGp25ayp0Kiyc8ZQU3ghvkqmqMRZjDTu3Qy
// SIG // S99je/WZii8bxyGvWbWu3EQ8l1Bx16HSxVXjad5XwdHe
// SIG // MMD9zOZN+w2/XU/pnR4ZOC+8z1gFLu8NoFA12u8JJxzV
// SIG // s341Hgi62jbb01+P3nSISRKhggLSMIICOwIBATCB/KGB
// SIG // 1KSB0TCBzjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEpMCcGA1UE
// SIG // CxMgTWljcm9zb2Z0IE9wZXJhdGlvbnMgUHVlcnRvIFJp
// SIG // Y28xJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOkM0QkQt
// SIG // RTM3Ri01RkZDMSUwIwYDVQQDExxNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYFKw4DAhoDFQAR
// SIG // LfhJYnsN9tIb+BshDBOvOBnw8qCBgzCBgKR+MHwxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29m
// SIG // dCBUaW1lLVN0YW1wIFBDQSAyMDEwMA0GCSqGSIb3DQEB
// SIG // BQUAAgUA5MfPiTAiGA8yMDIxMDgxODIyMjcyMVoYDzIw
// SIG // MjEwODE5MjIyNzIxWjB3MD0GCisGAQQBhFkKBAExLzAt
// SIG // MAoCBQDkx8+JAgEAMAoCAQACAiVNAgH/MAcCAQACAhHE
// SIG // MAoCBQDkySEJAgEAMDYGCisGAQQBhFkKBAIxKDAmMAwG
// SIG // CisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAIAgEAAgMB
// SIG // hqAwDQYJKoZIhvcNAQEFBQADgYEAA9hxqNvQcg58x36p
// SIG // unpMauEzsUK0Os6Jz5dBMEuYu4WdO2YmprdK3tGGYuLk
// SIG // +rz2hZ9KwD7kfoG01Dq2rCrm59FWyJ96j6KcJBiQ2G4u
// SIG // VZLl+LHGnx4N4otK3qRQSuQIquNl27janNVPhlHZ3W69
// SIG // fBmJlUHVORp8WwBhNKwiGvIxggMNMIIDCQIBATCBkzB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAVdE
// SIG // B2Lcb+i+KgAAAAABVzANBglghkgBZQMEAgEFAKCCAUow
// SIG // GgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8GCSqG
// SIG // SIb3DQEJBDEiBCAboJuxosz8gDwMGpXHrdbKpxYuUYy1
// SIG // lOeVE84W6K6HOjCB+gYLKoZIhvcNAQkQAi8xgeowgecw
// SIG // geQwgb0EICxajQ1Dq/O666lSxkQxInhSxGO1DDZ0XFla
// SIG // Qe2pHKATMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTACEzMAAAFXRAdi3G/ovioAAAAAAVcwIgQg
// SIG // NFIL+3PBizwF1eH8LvC92xJhVYdJNmQCfd1bZyheL7Yw
// SIG // DQYJKoZIhvcNAQELBQAEggEApv2vnSS6+gG07MzN3gLp
// SIG // dC/ap5L0XTRaah6XP1h0XwB5tEKTzUphl5aKcJjjTQvc
// SIG // xGGhoMNPfB3f4gLsJbeQDgpuOt8Xtb1ywhRjl8mwucUL
// SIG // 9DCatBVjSxJkYp3t4CLC11N7sW/1/0W6BO2bJvVPRP5S
// SIG // bGGzh/rzkdLDJ2lN7DPA29sYNekJVrVip4Wvz+8KV3Cm
// SIG // Lm/iNtViP3R8SAjE0sLnRSrux7IrgqR27BXUGz6Q4bba
// SIG // x1SyeSnjU38u+s5XbjpAtmcQ5gEBnN7WYw9RciAmRmoe
// SIG // dz6p4J67Pd+KyZLEQ7J6vw0SYPIqY8tF0kEA+85eGQ12
// SIG // JI5xx5THNDhjbQ==
// SIG // End signature block
