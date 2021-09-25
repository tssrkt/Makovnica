/* jQuery SelectBox Styler v1.0.1 | (c) Dimox | http://dimox.name/styling-select-boxes-using-jquery-css/ */
(function($){$.fn.selectbox=function(){$(this).each(function(){var select=$(this);if(select.prev('span.selectbox').length<1){function doSelect(){var option=select.find('option');var optionSelected=option.filter(':selected');var optionText=option.filter(':first').text();if(optionSelected.length)optionText=optionSelected.text();var ddlist='';for(i=0;i<option.length;i++){var selected='';var disabled=' class="disabled"';if(option.eq(i).is(':selected'))selected=' class="selected sel"';if(option.eq(i).is(':disabled'))selected=disabled;ddlist+='<li'+selected+'>'+option.eq(i).text()+'</li>';}var selectbox=$('<span class="selectbox" style="display:inline-block;position:relative">'+'<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">'+optionText+'</div>'+'<b class="trigger"><i class="arrow"></i></b>'+'</div>'+'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">'+'<ul>'+ddlist+'</ul>'+'</div>'+'</span>');select.before(selectbox).css({position:'absolute',top:-9999});var divSelect=selectbox.find('div.select');var divText=selectbox.find('div.text');var dropdown=selectbox.find('div.dropdown');var li=dropdown.find('li');var selectHeight=selectbox.outerHeight();if(dropdown.css('left')=='auto')dropdown.css({left:0});if(dropdown.css('top')=='auto')dropdown.css({top:selectHeight});var liHeight=li.outerHeight();var position=dropdown.css('top');dropdown.hide();divSelect.click(function(){var topOffset=selectbox.offset().top;var bottomOffset=$(window).height()-selectHeight-(topOffset-$(window).scrollTop());if(bottomOffset<0||bottomOffset<liHeight*6){dropdown.height('auto').css({top:'auto',bottom:position});if(dropdown.outerHeight()>topOffset-$(window).scrollTop()-20){dropdown.height(Math.floor((topOffset-$(window).scrollTop()-20)/liHeight)*liHeight);}}else if(bottomOffset>liHeight*6){dropdown.height('auto').css({bottom:'auto',top:position});if(dropdown.outerHeight()>bottomOffset-20){dropdown.height(Math.floor((bottomOffset-20)/liHeight)*liHeight);}}$('span.selectbox').css({zIndex:1}).removeClass('focused');selectbox.css({zIndex:2});if(dropdown.is(':hidden')){$('div.dropdown:visible').hide();dropdown.show();}else{dropdown.hide();}return false;});li.hover(function(){$(this).siblings().removeClass('selected');});var selectedText=li.filter('.selected').text();li.filter(':not(.disabled)').click(function(){var liText=$(this).text();if(selectedText!=liText){$(this).addClass('selected sel').siblings().removeClass('selected sel');option.removeAttr('selected').eq($(this).index()).attr('selected',true);selectedText=liText;divText.text(liText);select.change();}dropdown.hide();});dropdown.mouseout(function(){dropdown.find('li.sel').addClass('selected');});select.focus(function(){$('span.selectbox').removeClass('focused');selectbox.addClass('focused');}).keyup(function(){divText.text(option.filter(':selected').text());li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');});$(document).on('click',function(e){if(!$(e.target).parents().hasClass('selectbox')){dropdown.hide().find('li.sel').addClass('selected');selectbox.removeClass('focused');}});}doSelect();select.on('refresh',function(){select.prev().remove();doSelect();})}});}})(jQuery)

// Функция меняющая колоду
function change_pack(num_pack) {
    // Вносим данные в переменные в зависимости от
    // выбранной колоды
    var num_pack = num_pack; // Номер колоды
    var folder = ''; // Папка из которой достаем карты
    var cards = 0; // Количество карт
    switch (num_pack) {
        case '1':
            folder = '/1_time/';
            cards = 100;
            break;
        case '2':
            folder = '/2_person/';
            cards = 110;
            break;
        case '3':
            folder = '/3_tree/';
            cards = 80;
            break;
        case '4':
            folder = '/4_chest/';
            cards = 64;
            break;
        case '5':
            folder = '/5_nature/';
            cards = 80;
            break;
        case '6':
            folder = '/6_ecco/';
            cards = 99;
            break;
        case '7':
            folder = '/7_oh/';
            cards = 88;
            break;
        case '8':
            folder = '/8_petro/';
            cards = 59;
            break;
        case '9':
            folder = '/9_personita/';
            cards = 100;
            break;
        case '10':
            folder = '/10_habitat/';
            cards = 88;
            break;
        case '11':
            folder = '/11_ways/';
            cards = 78;
            break;
        case '12':
            folder = '/12_life/';
            cards = 100;
            break;
        case '13':
            folder = '/13_know/';
            cards = 48;
            break;
        case '14':
            folder = '/14_shadow/';
            cards = 90;
            break;
        case '15':
            folder = '/15_treating/';
            cards = 100;
            break;
        case '16':
            folder = '/16_partner/';
            cards = 90;
            break;
        case '17':
            folder = '/17_love/';
            cards = 84;
            break;
        case '18':
            folder = '/18_healing/';
            cards = 93;
            break;
        case '19':
            folder = '/19_saga/';
            cards = 55;
            break;
        case '20':
            folder = '/20_dixit/';
            cards = 83;
            break;
        case '21':
            folder = '/21_dixit2/';
            cards = 84;
            break;
        case '22':
            folder = '/22_dixit3/';
            cards = 81;
            break;
        case '23':
            folder = '/23_dixit4/';
            cards = 344;
            break;
        case '24':
            folder = '/24_dixit_odysseya/';
            cards = 83;
            break;
        case '25':
            folder = '/25_cope/';
            cards = 69;
            break;
        case '26':
            folder = '/26_archetype/';
            cards = 74;
            break;
        case '27':
            folder = '/27_intuiti/';
            cards = 78;
            break;
        case '28':
            folder = '/28_jacob/';
            cards = 55;
            break;
        case '29':
            folder = '/29_tales/';
            cards = 40;
            break;
        case '30':
            folder = '/30_sea/';
            cards = 28;
            break;
        case '31':
            folder = '/31_incredible/';
            cards = 28;
            break;
        case '32':
            folder = '/32_christmas/';
            cards = 28;
            break;
        case '33':
            folder = '/33_dream1/';
            cards = 52;
            break;
        case '34':
            folder = '/34_dream2/';
            cards = 66;
            break;
        case '35':
            folder = '/35_predict/';
            cards = 38;
            break;
        case '36':
            folder = '/36_she/';
            cards = 50;
            break;
        case '37':
            folder = '/37_nikoletta_taro/';
            cards = 79;
            break;
        case '38':
            folder = '/38_fantasy/';
            cards = 95;
            break;
        case '39':
            folder = '/39_other/';
            cards = 59;
            break;
        case '40':
            folder = '/40_people/';
            cards = 77;
            break;
        case '41':
            folder = '/41_nielly/';
            cards = 54;
            break;
        case '42':
            folder = '/42_abstract/';
            cards = 107;
            break;
        case '43':
            folder = '/43_people2/';
            cards = 28;
            break;
        case '44':
            folder = '/44_people3/';
            cards = 89;
            break;
        case '45':
            folder = '/45_taro_crazy/';
            cards = 78;
            break;
        case '46':
            folder = '/46_taro_black/';
            cards = 79;
            break;
        case '47':
            folder = '/47_some/';
            cards = 113;
            break;
    } // База данных (а что? Бека-то нет)

    // Генерим новую колоду в соответствии с выбранными данными
    var i = 1;
    var newCards = '';
    while (cards >= i) {
        newCards += '<img src="img/mak' + folder + i + '.jpg" id="c' + i + '"/>';
        ++i;
    }
    var pack = '<span id="this_pack" class="pack_' + num_pack + '"></span>'
    newCards += pack;
    $('.pics-wrapper').html(newCards);

    // Корректируем ширину контейнера под ширину колоды
    $('.pics img:first-child').load(function() {
        var cl = "p" + num_pack;
        $('#pics').removeClass();
        $('#pics').addClass('pics');
        $('#pics').addClass(cl);

        var widthCard = parseInt($('.pics img:first-child').css('width')) + 10;
        var widthCont = (widthCard * cards) + 'px';

        $('.pics-wrapper').css('width', widthCont);
        $('.jspPane').css('left', '0px');

        api.reinitialise();
    });
}

// Проверка наличия элемента в массиве
function include(arr, obj) {
    for(var i=0; i < arr.length; i++) {
        if (arr[i] == obj) return true;
    }
}

// Генерим и бросаем на стол карту
function new_img(num, num_pack, imgID) {
    var num = num;
    var num_pack = num_pack;
    var imgID = imgID;

    // Массив с картами которые уже лежат на столе
    var m = $('.new_div').length + 1;
    var imgs_on_table = [];
    var sel;

    for (var i = 1; i < m; ++i) {
        sel = $('.new_div:nth-child(' + i + ')');
        imgs_on_table.push($(sel).attr('id'));
    }

    //Проверяем есть ли эта карта на столе
    var next_card_id = 'pack_' + num_pack + '_card_' + num;
    if (include(imgs_on_table, next_card_id) == true) {
        $(imgID).addClass('chosen');
        alert('Нельзя выбирать одну и ту же карту несколько раз.');
    } else {
        // Генерим новую карту (раз уж ее еще нет на столе)
        var imgWay = $(imgID).attr('src');;
        var newDiv = '<div class="new_div" id="pack_' + num_pack + '_card_' + num + '">';
        var newClose = '<div class="btn close" id="close_img">x</div>';
        var newCard = '<img src="' + imgWay + '" alt="" class="new_img" id="pack_' + num_pack + '_img_' + num + '" />';
        var newEnd = '</div>';

        var res = newDiv + newClose + newCard + newEnd;
        $('.table').append(res);

        // Размеры картинки
        var widthCard = parseInt($(imgID).css('width')) + 16 + 'px';
        var heightCard = parseInt($(imgID).css('height')) + 16 + 'px';
        var this_div_id = '#pack_' + num_pack + '_card_' + num;
        $(this_div_id).css('width', widthCard);
        $(this_div_id).css('height', heightCard);

        // Прикручиваем масштабирование и передвижение
        var w = parseInt($(this_div_id).css('width'));
        var h = parseInt($(this_div_id).css('height'));
        $(this_div_id).resizable({
            aspectRatio: w/h,
            maxHeight: 500,
            minHeight: 150
        });

        $(this_div_id).draggable();
    }
}

// Обработка событий
$(document).ready(function() {
    $('select').selectbox();

    // Выбор колоды карт
    $('select#packs').change(function() {
        var num_pack = $('select#packs').val();
        change_pack(num_pack);
    });

    // Выбор карты
    $('body').on('click', '#pics .pics-wrapper img', function(e) {
        var imgID = '#' + e.target.id;

        // Если карта не выбрана, то выбираем ее
        if ($(imgID).hasClass("chosen") == false) {
            $(imgID).addClass("chosen");
            var pack = $('#this_pack').attr('class');
            var num_pack = pack.replace('pack_', '');
            var num = imgID.replace('#c', '');
            new_img(num, num_pack, imgID);
        }
    });

    // Удаляем карту со стола (возвращаем в колоду)
    $('body').on('click', '#close_img', function() {
        var this_div = this.parentNode;
        var this_id = '#' + $(this_div).attr('id');
        $(this_id).remove();

        // А дальше еще большее веселье
        // Удаляем класс .chosen из карты, которая была выбрана
        // но только если открыта родная колода этой карты

        // Получаем порядковый номер открытой колоды
        var this_pack_str = $('#this_pack').attr('class');
        var this_pack = this_pack_str.replace('pack_', '');

        // Получаем порядковый новмер родной колоды
        var pack_of_card_str = this_id.replace('#pack_', '');
        var pack_of_card = '';

        if (isNaN(parseInt(pack_of_card_str[1])) == false) {
            pack_of_card = pack_of_card_str.substr(0, 2);
        } else {
            pack_of_card = pack_of_card_str[0];
        }

        // Узнаем открыта родная колода или нет
        if (this_pack == pack_of_card) {
            // Порядковый номер удаляемой карты
            var this_card_num = '';
            if  (isNaN(parseInt(this_id.substr(-2, 1)))) {
                this_card_num = this_id.substr(-1, 1);
            } else {
                if (parseInt(this_id.substr(-3, 1))) {
                    this_card_num = this_id.substr(-3, 3);
                } else {
                    this_card_num = this_id.substr(-2, 2);
                }
            }

            // Удаляем класс chosen из карты которую удалили из стола
            var card_in_shield = '#c' + this_card_num;
            $(card_in_shield).removeClass('chosen');
        }
    });

    // Кнопка "Случайна карта"
    $('body').on('click', '#rnd', function() {
        // Массив с не выбранными картами
        var i = 1;
        var m = parseInt($('.pics-wrapper img:last').attr('id').replace('c', ''));
        var not_ch_cards = [];
        var sel;

        while (i < m) {
            sel = $('.pics-wrapper img:nth-child(' + i + '):not(.chosen)');
            if (sel.attr('id')) {
                not_ch_cards.push($(sel).attr('id'));
            }
            ++i;
        }

        if (not_ch_cards.length == 0) {
            alert('Вы выбрали все карты, верните несколько в колоду чтобы функция "Случайная карта" была снова доступной.');
        } else {
            // Рандомное число
            var min = 0;
            var max = not_ch_cards.length;
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.round(rand) - 1;

            var imgID = '#' + not_ch_cards[rand];
            var num = imgID.replace('#c', '');
            $(imgID).addClass("chosen");

            // Номер колоды
            var pack = $('#this_pack').attr('class');
            var num_pack = pack.replace('pack_', '');

            new_img(num, num_pack, imgID);
        }
    });

    // Фикс глюка с зачеркнутым текстом на главной
    $('body').on('click', '#bad', function() {
        $('.mak_ins_list li').removeClass('active');
        $('.ins .tabs div').removeClass('active');
        $('#list_dot_2').addClass('active');
        $('.tab_2').addClass('active');
    });

    // Принимаем инфу от страницы с который перешел юзверек
    if (location.search.substring(1)) {
        num_pack = location.search.substring(1).replace('pack=', '');
        change_pack(num_pack);

        // Пыталась сделать так, чтобы при переходе на страницу выбранная колода
        // высвечивалась в селекте как выбраная. Безуспешно. Все-равно светится первая.
        $('select#packs').val(num_pack).attr('selected', 'selected');
        $('.selectbox li').removeClass('selected');
        $('.selectbox li').removeClass('sel');
        $('.selectbox li:nth-child(' + num_pack + ')').addClass('selected');
        $('.selectbox li:nth-child(' + num_pack + ')').addClass('sel');
    }

    // TABS for Tests
    $('.radio_list .radio').click(function(e) {
        var img = e.target;
        var imgID = e.target.id;
        var num = imgID.replace('t', '');
        var tab = '.tab' + num;

        if ($(img).hasClass('active')) {
            $(img).removeClass('active');
            $(tab).removeClass('active');
        } else {
            $('.radio_list .radio').removeClass('active');
            $('.tabs .result div').removeClass('active');
            $(img).addClass('active');
            $(tab).addClass('active');
        }
    });

    // TABS for mid_nav
    $('.mak_ins_list li').click(function(e) {
        var li = e.target;
        var liID = e.target.id;
        var num = liID.substr(9, 2);
        var tab = '.tab_' + num;

        if ($(li).hasClass('active') == false) {
            $('.mak_ins_list li').removeClass('active');
            $('.ins .tabs div').removeClass('active');
            $(li).addClass('active');
            $(tab).addClass('active');
        }

        // Фикс глюка с картами таро
        if ($('.radio_list.taro li img').hasClass('active')) {
            $('.radio_list.taro li img').removeClass('active');
        }
    });

    // TARO
    // TABS for taroNav
    $('.taroNav li').click(function(e) {
        var li = e.target;
        var liID = e.target.id;
        var tab = '.' + liID;

        // Переключаем формы
        if (liID == 'p4') {
            $('.forms #f1').removeClass('active');
            $('.forms #f2').addClass('active');
        } else {
            $('.forms #f2').removeClass('active');
            $('.forms #f1').addClass('active');
        }

        if ($(li).hasClass('active') == false) {
            $('.taroNav li').removeClass('active');
            $('.portrets .portret').removeClass('active');
            $(li).addClass('active');
            $(tab).addClass('active');
        }
    });

    var read_more = 1;

    // Slide Toggle READ MORE
    $('.more_text').hide();
    $('.read_more').click(function(){
        $('.more_text').slideToggle("slow");
        if (read_more == 1) {
            $('.read_more').html('Свернуть обратно');
            read_more = 0;
        } else {
            $('.read_more').html('Читать дальше');
            read_more = 1;
        }
    });

    // Обнуляем при каждой загрузке страницы
    $('.content_taro').load(function() {
        $('.content_taro .result div.active').removeClass('active');
    });

    $('body').on('click', '#btn_taro', function() {
        // Обнуляем тексты при каждом нажатии кнопки "посчитать"
        $('.content_taro .result div.active').removeClass('active');
        $('.content_taro .result .pos_H p.active').removeClass('active');

        // Композит (обработка данных юзера и партнера)
        if ($('#comp').hasClass('active')) {
            var u_date = $('#f2 input#date').val();
            var u_day = u_date.substr(0, 2);
            var u_month = u_date.substr(3, 2);
            var u_year = u_date.substr(6, 4);

            var p_date = $('#f2 input#date2').val();
            var p_day = p_date.substr(0, 2);
            var p_month = p_date.substr(3, 2);
            var p_year = p_date.substr(6, 4);

            // Проверяем правильность введеных данных
            if (parseInt(u_day) && parseInt(u_month) && parseInt(u_year) &&
                parseInt(p_day) && parseInt(p_month) && parseInt(p_year)) {

                // Портреты юзверька и партнера
                var args1 = count(u_date);
                var args2 = count(p_date);

                // Бадяжим композит
                var comp = ['zero'];
                for (var i = 1; i < 9; ++i) {
                    comp[i] = args1[i] + args2[i];
                    if (comp[i] > 22) comp[i] -= 22;
                }

                load_cards(comp);

            // Если введены неправильные данные
            } else {
                alert('Вы ввели: ' + u_date + ' и: ' + p_date + ', и как же вам не аяяй? Введите правильные данные!');
            }

        // Не композит (обработка только данных юзера)
        } else {
            var u_date = $('#f1 input#date').val();
            var u_day = u_date.substr(0, 2);
            var u_month = u_date.substr(3, 2);
            var u_year = u_date.substr(6, 4);

            // Проверяем правильность введеных данных
            if (parseInt(u_day) && parseInt(u_month) && parseInt(u_year)) {

                // Кармический портрет
                if ($('#karma').hasClass('active')) {
                    var args = count(u_date);
                    load_cards(args);

                // Теневой портрет
                } else if ($('#shadow').hasClass('active')) {
                    var args = count(u_date);

                    if ((args[1] + args[4]) > 22) {
                        var A = (args[1] + args[4]) - 22;
                    } else {
                        var A = args[1] + args[4];
                    }

                    if ((args[2] + args[4]) > 22) {
                        var B = (args[2] + args[4]) - 22;
                    } else {
                        var B = args[2] + args[4];
                    }

                    if ((args[2] + args[5]) > 22) {
                        var C = (args[2] + args[5]) - 22;
                    } else {
                        var C = args[2] + args[5];
                    }

                    if ((args[3] + args[5]) > 22) {
                        var D = (args[3] + args[5]) - 22;
                    } else {
                        var D = args[3] + args[5];
                    }

                    if ((args[4] + args[5]) > 22) {
                        var E = (args[4] + args[5]) - 22;
                    } else {
                        var E = args[4] + args[5];
                    }

                    if ((args[5] + args[6]) > 22) {
                        var F = (args[5] + args[6]) - 22;
                    } else {
                        var F = args[5] + args[6];
                    }

                    if ((C + D) > 22) {
                        var G1 = (C + D) - 22;
                    } else {
                        var G1 = C + D;
                    }

                    if ((B + F) > 22) {
                        var G2 = (B + F) - 22;
                    } else {
                        var G2 = B + F;
                    }

                    if ((A + E) > 22) {
                        var H = (A + E) - 22;
                    } else {
                        var H = A + E;
                    }

                    var args2 = ['zero', A, B, C, D, E, F, G1, G2, H]
                    var cards = ['zero'];
                    var num;

                    var i = 1;
                    while (i < 10) {
                        num = args2[i];
                        cards[i] = card_counter(num);

                        // Выводим текст
                        if (i == 9) {
                            var div_id = '#pos_H_card_text_' + args2[i];
                            $(div_id).addClass('active');
                        }
                        ++i;
                    }

                    var path = 'img/taro/cards/';
                    var end = '.jpg';
                    var card_id;

                    var n = 1;
                    var card_ids = ['z', '#A', '#B', '#C', '#D', '#E', '#F', '#G1', '#G2', '#H'];
                    while (n < 10) {
                        card_id = card_ids[n];
                        $(card_id).attr('src', path + cards[n] + end);
                        ++n;
                    }

                // Полный портрет
                } else if ($('#entire').hasClass('active')) {
                    var args = count_raw(u_date);

                    // Определяем каких мастей больше
                    var wands = 0;
                    var cups = 0;
                    var swords = 0;
                    var coins = 0;

                    var maj_agni = [22, 4, 7, 8, 13, 15, 19];
                    var maj_vayu = [1, 5, 11, 14, 21];
                    var maj_jal = [2, 6, 12, 17, 18];
                    var maj_bhu = [3, 9, 10, 16, 20];

                    for (var i = 1; i < 19; ++i) {
                        if (args[i] < 23) {
                            if (include(maj_agni, args[i])) ++wands;
                            if (include(maj_jal, args[i])) ++cups;
                            if (maj_vayu, include(args[i])) ++swords;
                            if (maj_bhu, include(args[i])) ++coins;
                        } else {
                            if (args[i] > 22 && args[i] < 37) ++wands;
                            if (args[i] > 36 && args[i] < 51) ++cups;
                            if (args[i] > 50 && args[i] < 65) ++swords;
                            if (args[i] > 64 && args[i] < 78) ++coins;
                        }
                    }

                    var wnd = '<p>Огонь (холерик): ' + wands + '</p>';
                    var cup = '<p>Вода (меланхолик): ' + cups + '</p>';
                    var swd = '<p>Воздух (сангвиник): ' + swords + '</p>';
                    var cns = '<p>Земля (флегматик): ' + coins + '</p>';

                    $('.suits .s').html(wnd + cup + swd + cns);

                    load_cards(args);
                }

            // Если введены неправильные данные
            } else {
                alert('Вы ввели: ' + u_date + ', и как же вам не аяяй? Введите правильные данные!');
            }

        }
    });
});

// Загрузка карты
function load_cards(args) {
    var args = args;
    var cards = ['zero'];
    var num;

    var i = 1;
    var max;

    if (args.length == 9) max = 9;
    if (args.length == 22) max = 22;

    while (i < max) {
        num = args[i];
        cards[i] = card_counter(num);

        // Выводим текст
        if (i == 4 || i == 7 || i == 8 || i == 12 || i == 13 || i == 14 || i == 15) {
            if (args[i] < 23) {
                var div_id = '.portret.active .result #pos' + i + '_card_text_' + args[i];
                $(div_id).addClass('active');
            }
        }
        ++i;
    }

    var path = 'img/taro/cards/';
    var end = '.jpg';
    var card_id;

    var n = 1;
    while (n < 22) {
        card_id = '.portret.active table #card_' + n;
        $(card_id).attr('src', path + cards[n] + end);
        ++n;
    }
}

// Перевод кода карты в название картинкы
function card_counter(num) {
    var num = num;
    var card = '';
    var n;

    while (num > 78) {
        num -= 78;
    }

    if (num == 22) {
        card = 'Major00';
    } else if (num < 10) {
        card = 'Major0' + num;
    } else if (9 < num && num < 22) {
        card = 'Major' + num;
    // Для полного портрета
    } else if (37 > num && num > 22) {
        n = num - 22;
        if (n < 10) card = 'Wands0' + n;
        if (n > 9) card = 'Wands' + n;
    } else if (51 > num && num > 36) {
        n = num - 36;
        if (n < 10) card = 'Cups0' + n;
        if (n > 9) card = 'Cups' + n;
    } else if (65 > num && num > 50) {
        n = num - 50;
        if (n < 10) card = 'Swords0' + n;
        if (n > 9) card = 'Swords' + n;
    } else if (79 > num && num > 64) {
        n = num - 64;
        if (n < 10) card = 'Coins0' + n;
        if (n > 9) card = 'Coins' + n;
    }
    return card;
}

// "Полу-сырые" рассчеты по дате, введенной юзверем (для всех кроме полного)
function count(u_date) {
    var u_date = u_date;
    var u_day = u_date.substr(0, 2);
    var u_month = u_date.substr(3, 2);
    var u_year = u_date.substr(6, 4);

    // Позиция 1
    var pos_1 = parseInt(u_day);
    while (pos_1 > 22) {
        pos_1 -= 22;
    }

    // Позиция 2
    var pos_2 = parseInt(u_month);

    // Позиция 3
    var pos_3 = parseInt(u_year.substr(0, 1)) + parseInt(u_year.substr(1, 1)) + parseInt(u_year.substr(2, 1)) + parseInt(u_year.substr(3, 1));
    while (pos_3 > 22) {
        pos_3 -= 22;
    }

    // Позиция 4
    var pos_4 = pos_1 + pos_2;
    while (pos_4 > 22) {
        pos_4 -= 22;
    }

    // Позиция 5
    var pos_5 = pos_2 + pos_3;
    while (pos_5 > 22) {
        pos_5 -= 22;
    }

    // Позиция 6
    var pos_6 = pos_4 + pos_5;
    while (pos_6 > 22) {
        pos_6 -= 22;
    }

    // Позиция 7
    var pos_7 = pos_1 + pos_5;
    while (pos_7 > 22) {
        pos_7 -= 22;
    }

    // Позиция 8
    var pos_8 = pos_2 + pos_6;
    while (pos_8 > 22) {
        pos_8 -= 22;
    }

    // Позиция 9
    if (pos_1 > pos_2) {
        var pos_9 = pos_1 - pos_2;
    } else {
        var pos_9 = pos_2 - pos_1;
    }

    // Позиция 10
    if (pos_2 > pos_3) {
        var pos_10 = pos_2 - pos_3;
    } else {
        var pos_10 = pos_3 - pos_2;
    }

    // Позиция 11
    if (pos_9 > pos_10) {
        var pos_11 = pos_9 - pos_10;
    } else {
        var pos_11 = pos_10 - pos_9;
    }

    // Позиция 12
    var pos_12 = pos_4 + pos_5 + pos_6;
    while (pos_12 > 22) {
        pos_12 -= 22;
    }

    // Позиция 13
    var pos_13 = pos_1 + pos_4 + pos_6;
    while (pos_13 > 22) {
        pos_13 -= 22;
    }

    // Позиция 14
    var pos_14 = pos_3 + pos_5 + pos_6;
    while (pos_14 > 22) {
        pos_14 -= 22;
    }

    // Позиция 15
    var sum_pos1 = pos_9 + pos_10 + pos_11;
    while (sum_pos1 > 22) {
        sum_pos1 -= 22;
    }

    if (sum_pos1 > pos_7) {
        var pos_15 = sum_pos1 - pos_7;
    } else {
        var pos_15 = pos_7 - sum_pos1;
    }

    // Позиция 16 очень сложная и ее используют редко (нет ее, короче)
    var pos_16 = pos_1 + pos_3 + pos_4 + pos_5;
    while (pos_16 > 22) {
        pos_16 -= 22;
    }

    // Позиция 17
    var pos_17 = pos_11 + pos_6;
    while (pos_17 > 22) {
        pos_17 -= 22;
    }

    // Позиция 18
    var pos_18 = pos_11 + pos_8;
    while (pos_18 > 22) {
        pos_18 -= 22;
    }

    // Позиция 19
    var pos_19 = pos_4 + pos_6;
    while (pos_19 > 22) {
        pos_19 -= 22;
    }

    // Позиция 20
    var pos_20 = pos_5 + pos_6;
    while (pos_20 > 22) {
        pos_20 -= 22;
    }

    // Позиция 21
    var pos_21 = pos_1 + pos_2 + pos_3 + pos_4 + pos_5 + pos_6;
    while (pos_21 > 22) {
        pos_21 -= 22;
    }

    // Сбор данных в массив
    var args = ['zerro', pos_1, pos_2, pos_3, pos_4, pos_5, pos_6, pos_7, pos_8, pos_9, pos_10, pos_11, pos_12, pos_13, pos_14, pos_15, pos_16, pos_17, pos_18, pos_19, pos_20, pos_21];
    return args;
}

// Совсем "сырые" рассчеты по дате, введенной юзверем (для полного портрета)
function count_raw(u_date) {
    var u_date = u_date;
    var u_day = u_date.substr(0, 2);
    var u_month = u_date.substr(3, 2);
    var u_year = u_date.substr(6, 4);


    var pos_1 = parseInt(u_day); // Позиция 1
    var pos_2 = parseInt(u_month); // Позиция 2
    var pos_3 = parseInt(u_year.substr(0, 1)) + parseInt(u_year.substr(1, 1)) + parseInt(u_year.substr(2, 1)) + parseInt(u_year.substr(3, 1)); // Позиция 3
    var pos_4 = pos_1 + pos_2; // Позиция 4
    var pos_5 = pos_2 + pos_3; // Позиция 5
    var pos_6 = pos_4 + pos_5; // Позиция 6
    var pos_7 = pos_1 + pos_5; // Позиция 7
    var pos_8 = pos_2 + pos_6; // Позиция 8

    // Позиция 9
    if (pos_1 > pos_2) {
        var pos_9 = pos_1 - pos_2;
    } else {
        var pos_9 = pos_2 - pos_1;
    }

    // Позиция 10
    if (pos_2 > pos_3) {
        var pos_10 = pos_2 - pos_3;
    } else {
        var pos_10 = pos_3 - pos_2;
    }

    // Позиция 11
    if (pos_9 > pos_10) {
        var pos_11 = pos_9 - pos_10;
    } else {
        var pos_11 = pos_10 - pos_9;
    }

    var pos_12 = pos_4 + pos_5 + pos_6; // Позиция 12
    var pos_13 = pos_1 + pos_4 + pos_6; // Позиция 13
    var pos_14 = pos_3 + pos_5 + pos_6; // Позиция 14


    // Позиция 15
    var sum_pos1 = pos_9 + pos_10 + pos_11;
    if (sum_pos1 > pos_7) {
        var pos_15 = sum_pos1 - pos_7;
    } else {
        var pos_15 = pos_7 - sum_pos1;
    }

    // Позиция 16 очень сложная и ее используют редко (нет ее, короче)
    var pos_16 = pos_1 + pos_3 + pos_4 + pos_5;

    var pos_17 = pos_11 + pos_6; // Позиция 17
    var pos_18 = pos_11 + pos_8; // Позиция 18
    var pos_19 = pos_4 + pos_6;
    var pos_20 = pos_5 + pos_6;
    var pos_21 = pos_1 + pos_2 + pos_3 + pos_4 + pos_5 + pos_6;

    // Сбор данных в массив
    var args = ['zerro', pos_1, pos_2, pos_3, pos_4, pos_5, pos_6, pos_7, pos_8, pos_9, pos_10, pos_11, pos_12, pos_13, pos_14, pos_15, pos_16, pos_17, pos_18, pos_19, pos_20, pos_21];
    return args;
}


