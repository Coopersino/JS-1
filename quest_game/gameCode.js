function quest(event, globalEvent) {

    var ok;
    if (globalEvent === "01" || event === undefined) {
        do {//Выводим первый вопрос
            ok = false;
            event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.a0, event);
            }
        } while (!ok);
    }

    if (globalEvent === "02" || globalEvent === "03" || 
        globalEvent === "04" || globalEvent === "05" || 
        globalEvent === "06" || globalEvent === "07" || event === 1 || event === 2) {
        if (globalEvent === "02" || globalEvent === "04" || 
            globalEvent === "04" || globalEvent === "05" || 
            globalEvent === "06" || globalEvent === "07") {
            event = 1;
        }
        if (globalEvent === "03") {
            event = 2;
        }
        switch (event) {
            
            
            case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            if (globalEvent === "04") {
                event = 1
            }
            if (globalEvent === "05") {
                event = 2
            }
                do {
                    ok = false;
                    event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.b0, event);
                    }
                } while (!ok);

                switch (event) {
                    case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);

                        break;
                    case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);

                        break;
                    case -1: // Второе действие
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
                do {
                    ok = false;
                    event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.c0, event);
                    }
                } while (!ok);
                switch (event) {
                    case 1: // Второе действие
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);

                        break;
                    case 2: // Второе действие
                        do {
                            ok = false;
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, event);
                            }
                        } while (!ok);

                        break;
                    case -1: // Второе действие
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            case -1: // Первое действие
                break;
            default:
                alert('Ошибка');
        }
    }
    alert('Спасибо за игру');
    var globalEvent = prompt('Введите номер окна, или -1 для выхода');

    if (globalEvent === "-1") {
        return location.replace("../index.html");
    }
    quest(event, globalEvent);
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

quest(undefined);