/* jQuery SelectBox Styler v1.0.1 | (c) Dimox | http://dimox.name/styling-select-boxes-using-jquery-css/ */
(function($){$.fn.selectbox=function(){$(this).each(function(){var select=$(this);if(select.prev('span.selectbox').length<1){function doSelect(){var option=select.find('option');var optionSelected=option.filter(':selected');var optionText=option.filter(':first').text();if(optionSelected.length)optionText=optionSelected.text();var ddlist='';for(var i=0;i<option.length;i++){var selected='';var disabled=' class="disabled"';if(option.eq(i).is(':selected'))selected=' class="selected sel"';if(option.eq(i).is(':disabled'))selected=disabled;ddlist+='<li'+selected+'>'+option.eq(i).text()+'</li>';}var selectbox=$('<span class="selectbox" style="display:inline-block;position:relative">'+'<div class="select" style="float:left;position:relative;z-index:10000"><div class="text">'+optionText+'</div>'+'<b class="trigger"><i class="arrow"></i></b>'+'</div>'+'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">'+'<ul>'+ddlist+'</ul>'+'</div>'+'</span>');select.before(selectbox).css({position:'absolute',top:-9999});var divSelect=selectbox.find('div.select');var divText=selectbox.find('div.text');var dropdown=selectbox.find('div.dropdown');var li=dropdown.find('li');var selectHeight=selectbox.outerHeight();if(dropdown.css('left')=='auto')dropdown.css({left:0});if(dropdown.css('top')=='auto')dropdown.css({top:selectHeight});var liHeight=li.outerHeight();var position=dropdown.css('top');dropdown.hide();divSelect.click(function(){var topOffset=selectbox.offset().top;var bottomOffset=$(window).height()-selectHeight-(topOffset-$(window).scrollTop());if(bottomOffset<0||bottomOffset<liHeight*6){dropdown.height('auto').css({top:'auto',bottom:position});if(dropdown.outerHeight()>topOffset-$(window).scrollTop()-20){dropdown.height(Math.floor((topOffset-$(window).scrollTop()-20)/liHeight)*liHeight);}}else if(bottomOffset>liHeight*6){dropdown.height('auto').css({bottom:'auto',top:position});if(dropdown.outerHeight()>bottomOffset-20){dropdown.height(Math.floor((bottomOffset-20)/liHeight)*liHeight);}}$('span.selectbox').css({zIndex:1}).removeClass('focused');selectbox.css({zIndex:30000});if(dropdown.is(':hidden')){$('div.dropdown:visible').hide();dropdown.show();}else{dropdown.hide();}return false;});li.hover(function(){$(this).siblings().removeClass('selected');});var selectedText=li.filter('.selected').text();li.filter(':not(.disabled)').click(function(){var liText=$(this).text();var selectedIndex=$(this).index();if(selectedText!=liText){$(this).addClass('selected sel').siblings().removeClass('selected sel');option.prop('selected',false).eq(selectedIndex).prop('selected',true);select.val(option.eq(selectedIndex).val());selectedText=liText;divText.text(liText);select.trigger('change');}dropdown.hide();});dropdown.mouseout(function(){dropdown.find('li.sel').addClass('selected');});select.focus(function(){$('span.selectbox').removeClass('focused');selectbox.addClass('focused');}).keyup(function(){divText.text(option.filter(':selected').text());li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');});$(document).on('click',function(e){if(!$(e.target).parents().hasClass('selectbox')){dropdown.hide().find('li.sel').addClass('selected');selectbox.removeClass('focused');}});}doSelect();select.on('refresh',function(){select.prev().remove();doSelect();})}});}})(jQuery)


// Данные доступных колод МАК
var MAK_PACKS = {
    '1': {folder: '1_time', cards: 96},
    '2': {folder: '2_person', cards: 100},
    '3': {folder: '3_know', cards: 48},
    '4': {folder: '4_chest', cards: 64},
    '5': {folder: '5_saga', cards: 55},
    '6': {folder: '6_neuro', cards: 100},
    '7': {folder: '7_oskolki', cards: 70},
    '8': {folder: '8_abstract', cards: 50},
    '9': {folder: '9_cubism', cards: 60},
    '10': {folder: '10_blue', cards: 60},
    '11': {folder: '11_animals', cards: 145},
    '12': {folder: '12_ecco', cards: 99},
    '13': {folder: '13_habitat', cards: 88}
};

var api = null;
var CURRENT_PACK = '1';
var GLOBAL_FACE_MODE = 'face';
var DECK_VIEW_MODE = 'strip';
var SAVED_TRAY_SCROLL_X = 0;

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
        autoReinitialise: false,
        contentWidth: calculate_tray_width(num_pack)
    };
}

function init_or_update_scroller(num_pack, restore_x) {
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
        if (api && typeof api.scrollToX === 'function') api.scrollToX(restore_x || 0, false);
    }
}

function show_expanded_tray() {
    if (api && typeof api.destroy === 'function') api.destroy();
    api = null;

    $('#pics').addClass('tray-expanded');
    $('.pics-wrapper').css({width: '', minWidth: '', maxWidth: ''});
}

function apply_current_tray_layout(num_pack, restore_x) {
    if (DECK_VIEW_MODE === 'grid') show_expanded_tray();
    else init_or_update_scroller(num_pack, restore_x);
}

function init_scroller_after_images(num_pack) {
    var $cards = $('.pics-wrapper .tray-card-image');
    var remaining = $cards.length;
    var initialized = false;

    function initialize() {
        if (initialized) return;
        initialized = true;
        apply_current_tray_layout(num_pack, 0);
    }

    if (!remaining) {
        initialize();
        return;
    }

    function done() {
        remaining -= 1;
        if (remaining <= 0) initialize();
    }

    $cards.each(function() {
        if (this.complete) done();
        else $(this).one('load error', done);
    });

    // Страховка для первого захода, когда браузер ещё не успел пересчитать DOM.
    window.setTimeout(initialize, 250);
}

function renumber_tray_cards() {
    $('.pics-wrapper .tray-card').each(function(index) {
        var position = index + 1;
        $(this).find('.tray-card-number').text('« ' + position + ' »');
    });
}

function build_tray_card(pack, card_number) {
    var face_src = 'img/mak/' + pack.folder + '/' + card_number + '.webp';
    var flipped = GLOBAL_FACE_MODE === 'cover';
    var visible_src = flipped ? 'img/mak/cover.webp' : face_src;

    return '<div class="tray-card" data-card-number="' + card_number + '" data-flipped="' + flipped + '">' +
        '<img class="tray-card-image" src="' + visible_src + '" data-face-src="' + face_src + '" id="c' + card_number + '" alt=""/>' +
        '<div class="tray-card-controls">' +
            '<button class="card-icon-action tray-card-action tray-card-toggle" type="button" aria-label="Перевернуть карту" title="Перевернуть карту">' +
                '<img src="img/mak/toggle.png" alt="" aria-hidden="true"/>' +
            '</button>' +
            '<span class="tray-card-number" aria-label="Позиция карты"></span>' +
            '<button class="card-icon-action tray-card-action tray-card-expand" type="button" aria-label="Увеличить карту" title="Увеличить карту">' +
                '<img src="img/mak/expand.png" alt="" aria-hidden="true"/>' +
            '</button>' +
        '</div>' +
    '</div>';
}

function change_pack(num_pack) {
    num_pack = get_pack(num_pack);
    CURRENT_PACK = num_pack;
    var pack = MAK_PACKS[num_pack];
    var html = '';

    for (var i = 1; i <= pack.cards; i++) {
        html += build_tray_card(pack, i);
    }

    html += '<span id="this_pack" class="pack_' + num_pack + '"></span>';
    $('.pics-wrapper').html(html);
    renumber_tray_cards();

    $('#pics').removeClass().addClass('pics').addClass('p' + num_pack);
    if (DECK_VIEW_MODE === 'grid') $('#pics').addClass('tray-expanded');
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
    res += '<div class="workspace-card-controls">';
    res += '<button class="card-icon-action workspace-card-action workspace-card-close" type="button" aria-label="Закрыть карту" title="Закрыть карту"><img src="img/mak/close.png" alt="" aria-hidden="true"/></button>';
    res += '<button class="card-icon-action workspace-card-action workspace-card-toggle" type="button" aria-label="Перевернуть карту" title="Перевернуть карту"><img src="img/mak/toggle.png" alt="" aria-hidden="true"/></button>';
    res += '<button class="card-icon-action workspace-card-action workspace-card-expand" type="button" aria-label="Увеличить карту" title="Увеличить карту"><img src="img/mak/expand.png" alt="" aria-hidden="true"/></button>';
    res += '</div>';
    res += '<img src="' + imgWay + '" data-face-src="' + $(imgID).attr('data-face-src') + '" data-flipped="' + $(imgID).closest('.tray-card').attr('data-flipped') + '" alt="" class="new_img" id="pack_' + num_pack + '_img_' + num + '" />';
    res += '</div>';

    $('.table').append(res);

    var widthCard = parseInt($(imgID).css('width'), 10) + 16 + 'px';
    var heightCard = parseInt($(imgID).css('height'), 10) + 16 + 'px';
    var this_div_id = '#pack_' + num_pack + '_card_' + num;

    $(this_div_id).css({width: widthCard, height: heightCard});

    var w = parseInt($(this_div_id).css('width'), 10);
    var h = parseInt($(this_div_id).css('height'), 10);

    var workspace_controls_width = 40;
    var card_aspect_ratio = w / h;

    $(this_div_id).resizable({
        aspectRatio: card_aspect_ratio,
        maxHeight: 500,
        minHeight: 150,
        resize: function(e, ui) {
            var table_width = $('.table').innerWidth();
            var available_width = table_width - ui.position.left - workspace_controls_width;

            if (ui.size.width > available_width) {
                ui.size.width = Math.max(0, available_width);
                ui.size.height = ui.size.width / card_aspect_ratio;
            }
        }
    });

    $(this_div_id).draggable({
        cancel: '.workspace-card-controls, .workspace-card-action',
        drag: function(e, ui) {
            var max_left = $('.table').innerWidth() - $(this).outerWidth() - workspace_controls_width;
            ui.position.left = Math.min(ui.position.left, Math.max(0, max_left));
        }
    });
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
    $('select#packs').selectbox();

    if ($('#pics').length) {
        var tray = $('.pics-wrapper')[0];
        if (tray && window.MutationObserver) {
            new MutationObserver(function(mutations) {
                var order_changed = false;

                for (var i = 0; i < mutations.length; i++) {
                    if (mutations[i].target === tray) {
                        order_changed = true;
                        break;
                    }
                }

                if (order_changed) renumber_tray_cards();
            }).observe(tray, {childList: true});
        }

        var initial_pack = $('select#packs').val() || '1';

        if (location.search.substring(1)) {
            initial_pack = location.search.substring(1).replace('pack=', '');
            $('select#packs').val(initial_pack);
            $('.selectbox li').removeClass('selected sel');
            $('.selectbox li').eq($('select#packs')[0].selectedIndex).addClass('selected sel');
            $('.selectbox .text').text($('select#packs option:selected').text());
        }

        change_pack(initial_pack);
    }

    $('select#packs').change(function() {
        change_pack($(this).val());
    });

    var resizeTimer = null;
    $(window).on('resize orientationchange', function(e) {
        if (e.target !== window) return;
        if (!$('#pics').length) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (DECK_VIEW_MODE === 'grid') return;

            var scroll_x = api && typeof api.getContentPositionX === 'function' ? api.getContentPositionX() || 0 : 0;
            init_or_update_scroller(CURRENT_PACK, scroll_x);
        }, 180);
    });

    var trayDrag = {
        active: false,
        dragged: false,
        suppressClick: false,
        startX: 0,
        startScrollX: 0
    };
    var TRAY_DRAG_THRESHOLD = 7;
    var trayElement = $('#pics')[0];

    function finish_tray_drag() {
        if (!trayDrag.active) return;

        trayDrag.active = false;
        $('#pics').removeClass('tray-drag-active');

        if (trayDrag.dragged) {
            trayDrag.suppressClick = true;
        }
    }

    if (trayElement) {
        trayElement.addEventListener('click', function(e) {
            if (!trayDrag.suppressClick) return;

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            trayDrag.suppressClick = false;
        }, true);
    }

    $('body').on('mousedown', '#pics', function(e) {
        if (e.which !== 1) return;
        if (DECK_VIEW_MODE === 'grid') return;
        if ($(e.target).closest('.tray-card-action, .jspHorizontalBar, button, a, input, select, textarea').length) return;
        if (!api || typeof api.getContentPositionX !== 'function' || typeof api.scrollToX !== 'function') return;

        trayDrag.active = true;
        trayDrag.dragged = false;
        trayDrag.suppressClick = false;
        trayDrag.startX = e.pageX;
        trayDrag.startScrollX = api.getContentPositionX() || 0;
        $('#pics').addClass('tray-drag-active');
        e.preventDefault();
    });

    $(document).on('mousemove', function(e) {
        if (!trayDrag.active) return;
        if (e.buttons === 0) {
            finish_tray_drag();
            return;
        }

        var movement = e.pageX - trayDrag.startX;
        if (!trayDrag.dragged && Math.abs(movement) < TRAY_DRAG_THRESHOLD) return;

        trayDrag.dragged = true;
        e.preventDefault();
        api.scrollToX(trayDrag.startScrollX - movement, false);
    });

    $(document).on('mouseup mouseleave', finish_tray_drag);
    $(window).on('blur', finish_tray_drag);

    $('body').on('dragstart', '#pics .tray-card-image', function(e) {
        e.preventDefault();
    });

    $('body').on('click', '#pics .tray-card-image', function(e) {
        if (trayDrag.suppressClick || trayDrag.dragged) {
            trayDrag.suppressClick = false;
            trayDrag.dragged = false;
            e.preventDefault();
            e.stopImmediatePropagation();
            return;
        }

        var imgID = '#' + e.target.id;

        if ($(imgID).hasClass('chosen') == false) {
            $(imgID).addClass('chosen');
            var pack = $('#this_pack').attr('class');
            var num_pack = pack.replace('pack_', '');
            var num = imgID.replace('#c', '');
            new_img(num, num_pack, imgID);
        }
    });

    $('body').on('click', '#pics .tray-card-toggle', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var card = $(this).closest('.tray-card');
        var image = card.find('.tray-card-image');
        var flipped = card.attr('data-flipped') === 'true';

        image.attr('src', flipped ? image.attr('data-face-src') : 'img/mak/cover.webp');
        card.attr('data-flipped', flipped ? 'false' : 'true');
    });

    $('body').on('click', '#face_mode', function() {
        GLOBAL_FACE_MODE = GLOBAL_FACE_MODE === 'face' ? 'cover' : 'face';
        $(this).text(GLOBAL_FACE_MODE === 'face' ? 'FACE' : 'COVER');

        $('.pics-wrapper .tray-card').each(function() {
            var card = $(this);
            var image = card.find('.tray-card-image');
            var flipped = GLOBAL_FACE_MODE === 'cover';

            card.attr('data-flipped', flipped ? 'true' : 'false');
            image.attr('src', flipped ? 'img/mak/cover.webp' : image.attr('data-face-src'));
        });
    });

    $('body').on('click', '#view_mode', function() {
        if (DECK_VIEW_MODE === 'strip') {
            SAVED_TRAY_SCROLL_X = api && typeof api.getContentPositionX === 'function' ? api.getContentPositionX() || 0 : 0;
            DECK_VIEW_MODE = 'grid';
            $(this).text('MIN');
            show_expanded_tray();
        } else {
            DECK_VIEW_MODE = 'strip';
            $(this).text('MAX');
            $('#pics').removeClass('tray-expanded');
            init_or_update_scroller(CURRENT_PACK, SAVED_TRAY_SCROLL_X);
        }
    });

    $('body').on('click', '#mix_cards', function() {
        var wrapper = $('.pics-wrapper')[0];
        if (!wrapper) return;

        var cards = $('.pics-wrapper .tray-card').get();
        for (var i = cards.length - 1; i > 0; i--) {
            var random_index = Math.floor(Math.random() * (i + 1));
            var card = cards[i];
            cards[i] = cards[random_index];
            cards[random_index] = card;
        }

        var fragment = document.createDocumentFragment();
        for (var j = 0; j < cards.length; j++) fragment.appendChild(cards[j]);
        wrapper.insertBefore(fragment, $('#this_pack')[0] || null);
        renumber_tray_cards();
    });

    function open_card_popup(src) {
        $('#card_popup_image').attr('src', src);
        $('#card_popup').removeAttr('hidden').attr('aria-hidden', 'false');
        $('body').addClass('card-popup-open');
        $('#card_popup_close').focus();
    }

    $('body').on('click', '#pics .tray-card-expand', function(e) {
        e.preventDefault();
        e.stopPropagation();

        open_card_popup($(this).closest('.tray-card').find('.tray-card-image').attr('src'));
    });

    function close_card_popup() {
        $('#card_popup').attr({'hidden': 'hidden', 'aria-hidden': 'true'});
        $('#card_popup_image').attr('src', '');
        $('body').removeClass('card-popup-open');
    }

    $('body').on('click', '#card_popup_close', close_card_popup);

    $('body').on('click', '#card_popup', function(e) {
        if (e.target === this) close_card_popup();
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && !$('#card_popup').is('[hidden]')) close_card_popup();
    });

    $('body').on('click', '.workspace-card-close', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var this_id = '#' + $(this).closest('.new_div').attr('id');
        $(this_id).remove();
        restore_card_to_deck(this_id);
    });

    $('body').on('click', '.workspace-card-toggle', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var image = $(this).closest('.new_div').find('.new_img');
        var flipped = image.attr('data-flipped') === 'true';

        image.attr('src', flipped ? image.attr('data-face-src') : 'img/mak/cover.webp');
        image.attr('data-flipped', flipped ? 'false' : 'true');
    });

    $('body').on('click', '.workspace-card-expand', function(e) {
        e.preventDefault();
        e.stopPropagation();

        open_card_popup($(this).closest('.new_div').find('.new_img').attr('src'));
    });

    $('body').on('dragstart', '.workspace-card-controls img', function(e) {
        e.preventDefault();
    });

    $('body').on('click', '#rnd', function() {
        var not_ch_cards = [];

        $('.pics-wrapper .tray-card-image:not(.chosen)').each(function() {
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

    $('body').on('keydown', '.copy_donate', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).trigger('click');
        }
    });

    $('body').on('click', '.copy_donate', function() {
        var button = $(this);
        var text = button.attr('data-copy');
        var message = button.closest('.donate_block').find('.copy_message');

        function showMessage(value) {
            message.text(value);
            window.setTimeout(function() {
                message.text('');
            }, 2200);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                button.attr('title', 'Скопировано!');
                showMessage('Номер ЮMoney скопирован.');
                window.setTimeout(function() {
                    button.attr('title', 'Нажмите, чтобы скопировать');
                }, 2200);
            }).catch(function() {
                showMessage('Не удалось скопировать автоматически. Выделите номер вручную.');
            });
        } else {
            var temp = $('<textarea>');
            temp.val(text).css({position: 'fixed', left: '-9999px', top: '-9999px'});
            $('body').append(temp);
            temp[0].select();

            try {
                document.execCommand('copy');
                button.attr('title', 'Скопировано!');
                showMessage('Номер ЮMoney скопирован.');
                window.setTimeout(function() {
                    button.attr('title', 'Нажмите, чтобы скопировать');
                }, 2200);
            } catch (e) {
                showMessage('Не удалось скопировать автоматически. Выделите номер вручную.');
            }

            temp.remove();
        }
    });

});
