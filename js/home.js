// Проверка наличия элемента в массиве
function include(arr, obj) {
    var arr = arr;
    var obj = obj;
    for(var i=0; i < arr.length; i++) {
        if (arr[i] == obj) return true;
    }
}

function calendar(id, year, month) {
    var id = id;
    var year = year;
    var month = month;

    var elem = $(id);

    var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12

    var m = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var this_m = m[mon];

    var d = new Date(year, mon);

    var table = '<div class="month"><div class="m_name">' + this_m + '</div><div class="op_dark"></div><div class="op_light"></div><table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // Рассчет полнолуний
    // Я поняла, что это сложнее, чем я думала
    // var n = new Date(2016, 0, 24, 3, 45, 0, 0);

    // for (i = 0; i < mon; ++i) {
    //     n = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 29, n.getHours() + 16, n.getMinutes(), n.getSeconds());
    // }

    // if (mon > 2) {
    //     n = new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours() - 1, n.getMinutes(), n.getSeconds());
    // }

    // var purnima = n.getDate();

    // TEST days
    // var purn = new Date(2016, 0, 24);
    // var ama = new Date(2016, 0 , 11);
    // var shiva = new Date(2016, 2, 7);
    // var eka = new Date(2016, 0, 20);
    // var dark = new Date(2016, 2, 9);
    // var su = new Date(2016, 5, 20);
    // var eq = new Date(2016, 2, 20);

    // // Наваратри
    // var first_nav = new Date(2016, 2, 21);
    // var nav = [first_nav];
    // for (var i = 1; i < 9; ++i) {
    //     nav.push(new Date(2016, 2, nav[i-1].getDate() + 1));
    // }

    // var kran = new Date(2016, 0, 15);
    // var diva = new Date(2016, 9, 30);
    // var ganesha = new Date(2016, 8, 5);
    // var akshaya = new Date(2016, 4, 9);

    // console.log(n);
    // console.log(purnima);

    // ...

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
    table += '<td></td>';
    }

    // Сегодня
    var today = new Date();
    var today_month = today.getMonth();
    if (mon == today_month) {
        var t = today.getDate();
    }

    // // Purnima
    // if (mon == purn.getMonth()) {
    //     var p = purn.getDate();
    // }

    // // Amavasya
    // if (mon == ama.getMonth()) {
    //     var a = ama.getDate();
    // }

    // // Mahashivaratri
    // if (mon == shiva.getMonth()) {
    //     var s = shiva.getDate();
    // }

    // // Ekadashi
    // if (mon == eka.getMonth()) {
    //     var e = eka.getDate();
    // }

    // // Dark
    // if (mon == dark.getMonth()) {
    //     var dk = dark.getDate();
    // }

    // // Sun
    // if (mon == su.getMonth()) {
    //     var ss = su.getDate();
    // }

    // // Равноденствие
    // if (mon == eq.getMonth()) {
    //     var el = eq.getDate();
    // }

    // // Наваратри
    // var n9 = [];
    // if (mon == nav[0].getMonth()) {
    //     for (var i = 0; i < 9; ++i) {
    //         n9[i] = nav[i].getDate();
    //     }
    // }

    // // Sunkranti
    // if (mon == kran.getMonth()) {
    //     var kn = kran.getDate();
    // }

    // // Divali
    // if (mon == diva.getMonth()) {
    //     var dv = diva.getDate();
    // }

    // // Ganesha
    // if (mon == ganesha.getMonth()) {
    //     var g = ganesha.getDate();
    // }

    // // Akshaya
    // if (mon == akshaya.getMonth()) {
    //     var ak = akshaya.getDate();
    // }

    var day;

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        day = d.getDate();
        // if (p!=day && t!=day && a!=day && s!=day && e!=day && dk!=day && ss!=day && el!=day && !include(n9, day) && kn!=day && dv!=day && g!=day && ak!=day) {
        if (t!=day) {
            table += '<td>' + day + '</td>';
        } else {
            table += '<td>';
            // Purnima
            // if (p == day) {
            //     table += '<span class="art purnima" data-art="a1" data-title="пурнима">' + day + '</span>';
            // }
            // Amavasya
            // if (a == day) {
            //     table += '<span class="art amavasya" data-art="a2" data-title="амавасья">' + day + '</span>';
            // }
            // Mahashivaratri
            // if (s == day) {
            //     table += '<span class="art shiva" data-art="a3" data-title="махашиваратри">' + day + '</span>';
            // }
            // Ekadashi
            // if (e == day) {
            //     table += '<span class="art eka" data-art="a4" data-title="экадаши">' + day + '</span>';
            // }
            // Затмение
            // if (dk == day) {
            //     table += '<span class="art dark" data-art="a5" data-title="затмение">' + day + '</span>';
            // }
            // Солнцестояние
            // if (ss == day) {
            //     table += '<span class="art sun" data-art="a6" data-title="солнцестояние">' + day + '</span>';
            // }
            // Равноденствие
            // if (el == day) {
            //     table += '<span class="art eq" data-art="a7" data-title="равноденствие">' + day + '</span>';
            // }

            // Наваратри
            // if (include(n9, day)) {
            //     table += '<span class="art nav" data-art="a8" data-title="наваратри">' + day + '</span>';
            // }

            // Санкранти
            // if (kn == day) {
            //     table += '<span class="art kran" data-art="a9" data-title="санкранти">' + day + '</span>';
            // }

            // Дивали
            // if (dv == day) {
            //     table += '<span class="art diva" data-art="a10" data-title="дипавали">' + day + '</span>';
            // }

            // Ганеш Чатуртхи
            // if (g == day) {
            //     table += '<span class="art ganesh" data-art="a11" data-title="ганеша чатуртхи">' + day + '</span>';
            // }

            // Акшая Тритья
            // if (ak == day) {
            //     table += '<span class="art akshaya" data-art="a12" data-title="акшая тритья">' + day + '</span>';
            // }

            // Today
            if (t == day) {
                table += '<span class="today" data-title="сегодня"></span>' + day;
            }

            table += '</td>';
        }

        var last_day = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate();

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            if (last_day == day) {
                table += '</tr></table></div>';
            } else {
                table += '</tr><tr>';
            }
        }
        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
    for (var i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
    }

    // закрыть таблицу
    table += '</tr></table></div>';

    // только одно присваивание innerHTML
    elem.append(table);
    }

    function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
    }

$(document).ready(function() {
    // Info about days
    $('body').on('click', '.art', function(e) {
        var this_day = e.target;
        var this_cl = $(this_day).attr('data-art');
        var num = this_cl.replace('a', '');

        $('.mak_ins_list li').removeClass('active');
        $('.ins .tabs div').removeClass('active');
        $('#list_dot_9').addClass('active');
        $('.tab_9').addClass('active');

        var li = '#art_' + num;
        var tab = '#t' + num;

        $('.nav_arts li').removeClass('active_2');
        $('.text_arts > div').removeClass('active_2');
        $(li).addClass('active_2');
        $(tab).addClass('active_2');
    });

    // TABS for astrology
    $('.nav_arts li').click(function(e) {
        var li = e.target;
        var liID = e.target.id;
        var num = liID.replace('art_', '');
        var tab = '#t' + num;

        if ($(li).hasClass('active_2') == false) {
            $('.nav_arts li').removeClass('active_2');
            $('.text_arts > div').removeClass('active_2');
            $(li).addClass('active_2');
            $(tab).addClass('active_2');
        }
    });

    var mdate = new Date();
    var year = mdate.getFullYear();
    for (i = 1; i < 13; ++i) {
        calendar("#calendar", year, i);
    }

    $(".year").append(year);

});