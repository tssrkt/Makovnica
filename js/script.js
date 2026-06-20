/* jQuery SelectBox Styler v1.0.1 | (c) Dimox | http://dimox.name/styling-select-boxes-using-jquery-css/ */
(function($){$.fn.selectbox=function(){$(this).each(function(){var select=$(this);if(select.prev('span.selectbox').length<1){function doSelect(){var option=select.find('option');var optionSelected=option.filter(':selected');var optionText=option.filter(':first').text();if(optionSelected.length)optionText=optionSelected.text();var ddlist='';for(i=0;i<option.length;i++){var selected='';var disabled=' class="disabled"';if(option.eq(i).is(':selected'))selected=' class="selected sel"';if(option.eq(i).is(':disabled'))selected=disabled;ddlist+='<li'+selected+'>'+option.eq(i).text()+'</li>';}var selectbox=$('<span class="selectbox" style="display:inline-block;position:relative">'+'<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">'+optionText+'</div>'+'<b class="trigger"><i class="arrow"></i></b>'+'</div>'+'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">'+'<ul>'+ddlist+'</ul>'+'</div>'+'</span>');select.before(selectbox).css({position:'absolute',top:-9999});var divSelect=selectbox.find('div.select');var divText=selectbox.find('div.text');var dropdown=selectbox.find('div.dropdown');var li=dropdown.find('li');var selectHeight=selectbox.outerHeight();if(dropdown.css('left')=='auto')dropdown.css({left:0});if(dropdown.css('top')=='auto')dropdown.css({top:selectHeight});var liHeight=li.outerHeight();var position=dropdown.css('top');dropdown.hide();divSelect.click(function(){var topOffset=selectbox.offset().top;var bottomOffset=$(window).height()-selectHeight-(topOffset-$(window).scrollTop());if(bottomOffset<0||bottomOffset<liHeight*6){dropdown.height('auto').css({top:'auto',bottom:position});if(dropdown.outerHeight()>topOffset-$(window).scrollTop()-20){dropdown.height(Math.floor((topOffset-$(window).scrollTop()-20)/liHeight)*liHeight);}}else if(bottomOffset>liHeight*6){dropdown.height('auto').css({bottom:'auto',top:position});if(dropdown.outerHeight()>bottomOffset-20){dropdown.height(Math.floor((bottomOffset-20)/liHeight)*liHeight);}}$('span.selectbox').css({zIndex:1}).removeClass('focused');selectbox.css({zIndex:2});if(dropdown.is(':hidden')){$('div.dropdown:visible').hide();dropdown.show();}else{dropdown.hide();}return false;});li.hover(function(){$(this).siblings().removeClass('selected');});var selectedText=li.filter('.selected').text();li.filter(':not(.disabled)').click(function(){var liText=$(this).text();var selectedIndex=$(this).index();if(selectedText!=liText){$(this).addClass('selected sel').siblings().removeClass('selected sel');option.prop('selected',false).eq(selectedIndex).prop('selected',true);select.val(option.eq(selectedIndex).val());selectedText=liText;divText.text(liText);select.trigger('change');}dropdown.hide();});dropdown.mouseout(function(){dropdown.find('li.sel').addClass('selected');});select.focus(function(){$('span.selectbox').removeClass('focused');selectbox.addClass('focused');}).keyup(function(){divText.text(option.filter(':selected').text());li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');});$(document).on('click',function(e){if(!$(e.target).parents().hasClass('selectbox')){dropdown.hide().find('li.sel').addClass('selected');selectbox.removeClass('focused');}});}doSelect();select.on('refresh',function(){select.prev().remove();doSelect();})}});}})(jQuery)


// Данные доступных колод МАК
var MAK_PACKS = {
    '1': {folder: '1_time', cards: 96},
    '2': {folder: '2_person', cards: 100}
};

var api = null;

function get_pack(num_pack) {
    num_pack = String(num_pack || '1');
    return MAK_PACKS[num_pack] ? num_pack : '1';
}

// Точный индивидуальный расчёт длины ложа для текущей колоды.
// Считаем не по общей константе для всех колод, а по количеству карт
// выбранной колоды и фактической ширине карточек после вставки в DOM.
function calculate_tray_width(num_pack) {
    num_pack = get_pack(num_pack);

    var pack = MAK_PACKS[num_pack];
    var CARD_STEP = 160; // 150px width + 5px left margin + 5px right margin

    return pack.cards * CARD_STEP;
}

function apply_tray_width(num_pack) {
    num_pack = get_pack(num_pack);

    var widthCards = calculate_tray_width(num_pack);

    $('#pics').removeClass().addClass('pics').addClass('p' + num_pack);

    $('.pics-wrapper').css({
        width: widthCards + 'px',
        minWidth: widthCards + 'px',
        maxWidth: widthCards + 'px'
    });
}

function get_scroller_options(num_pack) {
    return {
        showArrows: true,
        contentWidth: calculate_tray_width(num_pack)
    };
}

function init_or_update_scroller(num_pack) {
    num_pack = get_pack(num_pack);
    apply_tray_width(num_pack);

    var options = get_scroller_options(num_pack);

    if (api && typeof api.destroy === 'function') {
        api.destroy();
        api = null;
    }

    apply_tray_width(num_pack);

    if ($('#pics').length && typeof $('#pics').jScrollPane === 'function') {
        $('#pics').jScrollPane(options);
        api = $('#pics').data('jsp');
        apply_tray_width(num_pack);
        if (api && typeof api.scrollToX === 'function') api.scrollToX(0, false);
    }
}

function init_scroller_after_images(num_pack) {
    var $cards = $('.pics-wrapper img');
    var remaining = $cards.length;

    if (!remaining) {
        init_or_update_scroller(num_pack);
        return;
    }

    function done() {
        remaining -= 1;
        if (remaining <= 0) init_or_update_scroller(num_pack);
    }

    $cards.each(function() {
        if (this.complete) done();
        else $(this).one('load error', done);
    });

    // Страховка для первого захода, когда браузер ещё не успел пересчитать DOM.
    window.setTimeout(function() { init_or_update_scroller(num_pack); }, 250);
}

function change_pack(num_pack) {
    num_pack = get_pack(num_pack);
    var pack = MAK_PACKS[num_pack];
    var html = '';

    for (var i = 1; i <= pack.cards; i++) {
        html += '<img src="img/mak/' + pack.folder + '/' + i + '.webp" id="c' + i + '" alt=""/>';
    }

    html += '<span id="this_pack" class="pack_' + num_pack + '"></span>';
    $('.pics-wrapper').html(html);

    $('#pics').removeClass().addClass('pics').addClass('p' + num_pack);
    init_scroller_after_images(num_pack);
}

function include(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == obj) return true;
    }
    return false;
}

function new_img(num, num_pack, imgID) {
    var imgs_on_table = [];

    $('.new_div').each(function() {
        imgs_on_table.push($(this).attr('id'));
    });

    var next_card_id = 'pack_' + num_pack + '_card_' + num;

    if (include(imgs_on_table, next_card_id)) {
        $(imgID).addClass('chosen');
        alert('Нельзя выбирать одну и ту же карту несколько раз.');
        return;
    }

    var imgWay = $(imgID).attr('src');
    var res = '';

    res += '<div class="new_div" id="pack_' + num_pack + '_card_' + num + '">';
    res += '<div class="btn close" id="close_img">x</div>';
    res += '<img src="' + imgWay + '" alt="" class="new_img" id="pack_' + num_pack + '_img_' + num + '" />';
    res += '</div>';

    $('.table').append(res);

    var widthCard = parseInt($(imgID).css('width'), 10) + 16 + 'px';
    var heightCard = parseInt($(imgID).css('height'), 10) + 16 + 'px';
    var this_div_id = '#pack_' + num_pack + '_card_' + num;

    $(this_div_id).css({width: widthCard, height: heightCard});

    var w = parseInt($(this_div_id).css('width'), 10);
    var h = parseInt($(this_div_id).css('height'), 10);

    $(this_div_id).resizable({
        aspectRatio: w / h,
        maxHeight: 500,
        minHeight: 150
    });

    $(this_div_id).draggable();
}

function restore_card_to_deck(this_id) {
    var this_pack_str = $('#this_pack').attr('class');
    if (!this_pack_str) return;

    var this_pack = this_pack_str.replace('pack_', '');
    var pack_of_card_str = this_id.replace('#pack_', '');
    var pack_of_card = '';

    if (isNaN(parseInt(pack_of_card_str[1], 10)) == false) {
        pack_of_card = pack_of_card_str.substr(0, 2);
    } else {
        pack_of_card = pack_of_card_str[0];
    }

    if (this_pack != pack_of_card) return;

    var match = this_id.match(/_card_(\d+)$/);
    if (!match) return;

    $('#c' + match[1]).removeClass('chosen');
}

$(document).ready(function() {
    $('select').selectbox();

    if ($('#pics').length) {
        var initial_pack = $('select#packs').val() || '1';

        if (location.search.substring(1)) {
            initial_pack = location.search.substring(1).replace('pack=', '');
            $('select#packs').val(initial_pack);
            $('.selectbox li').removeClass('selected sel');
            $('.selectbox li:nth-child(' + initial_pack + ')').addClass('selected sel');
            $('.selectbox .text').text($('select#packs option:selected').text());
        }

        change_pack(initial_pack);
    }

    $('select#packs').change(function() {
        change_pack($(this).val());
    });

    $('body').on('click', '#pics .pics-wrapper img', function(e) {
        var imgID = '#' + e.target.id;

        if ($(imgID).hasClass('chosen') == false) {
            $(imgID).addClass('chosen');
            var pack = $('#this_pack').attr('class');
            var num_pack = pack.replace('pack_', '');
            var num = imgID.replace('#c', '');
            new_img(num, num_pack, imgID);
        }
    });

    $('body').on('click', '#close_img', function() {
        var this_div = this.parentNode;
        var this_id = '#' + $(this_div).attr('id');
        $(this_id).remove();
        restore_card_to_deck(this_id);
    });

    $('body').on('click', '#rnd', function() {
        var not_ch_cards = [];

        $('.pics-wrapper img:not(.chosen)').each(function() {
            not_ch_cards.push($(this).attr('id'));
        });

        if (!not_ch_cards.length) {
            alert('Вы выбрали все карты, верните несколько в колоду чтобы функция "Случайная карта" была снова доступной.');
            return;
        }

        var rand = Math.floor(Math.random() * not_ch_cards.length);
        var imgID = '#' + not_ch_cards[rand];
        var num = imgID.replace('#c', '');
        var pack = $('#this_pack').attr('class');
        var num_pack = pack.replace('pack_', '');

        $(imgID).addClass('chosen');
        new_img(num, num_pack, imgID);
    });
});
