$(document).ready(function() {
    // Ініціалізація акордеона
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    
    // Ініціалізація вибору дати
    $("#datepicker").datepicker({
        dateFormat: "dd.mm.yy",
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2025",
        showButtonPanel: true
    });
    
    // Ініціалізація повзунка
    $("#slider").slider({
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        slide: function(event, ui) {
            $("#slider-value").text(ui.value);
        }
    });
    
    // Ініціалізація Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Зміна розміру шрифту
    $("#font-size").change(function() {
        var fontSize = $(this).val();
        $("body").css("font-size", fontSize);
    });
    
    // Зміна теми кольорів
    $("#theme").change(function() {
        var theme = $(this).val();
        
        // Видаляємо попередні класи тем
        $("body").removeClass("dark-theme blue-theme");
        
        // Додаємо новий клас теми
        if (theme !== "default") {
            $("body").addClass(theme + "-theme");
        }
        
        // Змінюємо тему для jQuery UI елементів
        updateUITheme(theme);
    });
    
    // Функція для оновлення теми jQuery UI елементів
    function updateUITheme(theme) {
        var colors = getThemeColors(theme);
        
        // Оновлення кольорів для акордеона
        $("#accordion .ui-accordion-header").css({
            "background": colors.headerBg,
            "color": colors.headerColor,
            "border-color": colors.borderColor
        });
        
        $("#accordion .ui-accordion-content").css({
            "background": colors.contentBg,
            "color": colors.contentColor,
            "border-color": colors.borderColor
        });
        
        // Оновлення кольорів для повзунка
        $("#slider .ui-slider-handle").css({
            "background": colors.headerBg,
            "border-color": colors.borderColor
        });
        
        $("#slider .ui-slider-range").css({
            "background": colors.headerBg
        });
        
        // Оновлення кольорів для datepicker
        $(".ui-datepicker").css({
            "background": colors.contentBg,
            "color": colors.contentColor,
            "border-color": colors.borderColor
        });
    }
    
    // Функція для отримання кольорів теми
    function getThemeColors(theme) {
        switch(theme) {
            case "dark":
                return {
                    headerBg: "#3498db",
                    headerColor: "#fff",
                    contentBg: "#3d566e",
                    contentColor: "#ecf0f1",
                    borderColor: "#4a6278"
                };
            case "blue":
                return {
                    headerBg: "#0277bd",
                    headerColor: "#fff",
                    contentBg: "#f3f9ff",
                    contentColor: "#01579b",
                    borderColor: "#bbdefb"
                };
            default:
                return {
                    headerBg: "#f6f6f6",
                    headerColor: "#333",
                    contentBg: "#fff",
                    contentColor: "#333",
                    borderColor: "#ddd"
                };
        }
    }
});