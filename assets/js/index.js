let _currentDate = new Date().toJSON().slice(0,10),
_cYear = _currentYear = _currentDate.split("-")[0],
_cMonth = _currentMonth = _currentDate.split("-")[1],
_currentMonthDay = _currentDate.split("-")[2],
_currentDay = new Date().getDate();
_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
_weekday = [ "su", "mo", "tu", "we", "th", "fr", "sa"];

let _daysInMonth  = (month, year) => new Date(year, month, 0).getDate();

let clearDays = () => $("#_setDays").html("");

let _setDate = (currentMonth,currentYear,currentDate,cFlag=false,yearHasChanged=false,monthHasChanged=false)=>{
    clearDays();
    let _cMonth = (_month[+currentMonth-1]),
    _firstDayNum = new Date(_cMonth+" 01, "+currentYear+" 00:00:00").getDay(),
    _day_inc = 1;
    yearHasChanged?$('#_year').fadeOut(10,function(){$(this).html(currentYear).fadeIn(400)}):$('#_year').html(currentYear);
    monthHasChanged?$('#_month').fadeOut(10,function(){$(this).html(_cMonth).fadeIn(400)}):$('#_month').html(_cMonth);
    for(let _day=0;_day<(_daysInMonth(currentMonth,currentYear)+_firstDayNum);_day++){
        if(_day<_firstDayNum){
            $("#_setDays").append(` 
                <div class="fl w-14 ">
                    <div class="bg-white silver tc f-14 cursor-pointer">&nbsp;</div>
                </div>
            `);
        }
        else{
            if(cFlag && _day-1==currentDate){
                $("#_setDays").append(` 
                    <div class="fl w-14 ">
                        <div class="bg-light-pink mid-gray tc f-14 br4 cursor-pointer">${_day_inc++}</div>
                    </div>
                `);
            }else{
                $("#_setDays").append(` 
                    <div class="fl w-14 ">
                        <div class="bg-white silver tc f-14 cursor-pointer">${_day_inc++}</div>
                    </div>
                `);
            }
        }
    }
}
$("#next-year").click(()=>_setDate(_currentMonth,++_currentYear,_currentDay,(_cYear == (_currentYear) && _cMonth == _currentMonth),true,false));

$("#prev-year").click(()=>(_currentYear-1 > 0)?_setDate(_currentMonth,--_currentYear,_currentDay,(_cYear == _currentYear && _cMonth == _currentMonth),true,false):false);

$("#prev-month").click(()=>(_currentMonth-1 > 0)?_setDate(--_currentMonth,_currentYear,_currentDay,(_cYear == _currentYear && _cMonth == _currentMonth),false,true):false);

$("#next-month").click(()=>(_currentMonth < 12)?_setDate(++_currentMonth,_currentYear,_currentDay,(_cYear == _currentYear && _cMonth == _currentMonth),false,true):false);

_setDate(_currentMonth,_currentYear,_currentDay,true);