/*** sitemap ***/
$(function () {
    //전체 메뉴 보기 버튼을 누르면 toggle로 동작
    $("#header div.side-nav").click(function () {
        $("#sitemap_wrap").toggle();
    });

    //close 버튼으로 닫을 시
    $("#sitemap_wrap .area .close").click(function () {
        $("#sitemap_wrap").hide();
    });

    var sitemap_intro_status = 0;
    var sitemap_department_status = 0;
    //사이트맵 인트로
    $("#sitemap_intro").click(function () {
        if (sitemap_intro_status == 0)
        {
            if (sitemap_department_status == 1)
            {
                $("#sitemap_department li").css({ 'display': 'none' });

                sitemap_department_status = 0;  
            }

            $("#sitemap_intro li").css({ 'display': 'block' });

            sitemap_intro_status = 1;
        }
        else
        {
            $("#sitemap_intro li").css({ 'display': 'none' });

            sitemap_intro_status = 0;
        }
        
    });

    $("#sitemap_department").click(function () {
        if (sitemap_department_status == 0) {

            if (sitemap_intro_status == 1)
            {
                $("#sitemap_intro li").css({ 'display': 'none' });

                sitemap_intro_status = 0;
            }

            $("#sitemap_department li").css({ 'display': 'block' });

            sitemap_department_status = 1;
        }
        else {
            $("#sitemap_department li").css({ 'display': 'none' });

            sitemap_department_status = 0;
        }

    });

});