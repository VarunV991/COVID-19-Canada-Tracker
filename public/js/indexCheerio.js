var toggle_bool = true;

// Inital Files for faster load
const data = {"canada":[{"state":" British Columbia","cases":65591,"recovered":4978,"deaths":213},{"state":" Alberta","cases":15093,"recovered":13154,"deaths":247},{"state":" Saskatchewan","cases":1669,"recovered":1587,"deaths":24},{"state":" Manitoba","cases":1349,"recovered":940,"deaths":16},{"state":" Ontario","cases":43536,"recovered":39196,"deaths":2813},{"state":" Quebec","cases":63876,"recovered":56162,"deaths":5770},{"state":" New Brunswick","cases":192,"recovered":188,"deaths":2},{"state":" Prince Edward Island","cases":53,"recovered":44,"deaths":0},{"state":" Nova Scotia","cases":1086,"recovered":1018,"deaths":65},{"state":" Newfoundland and Labrador","cases":270,"recovered":265,"deaths":3},{"state":" Yukon","cases":15,"recovered":15,"deaths":0},{"state":" Northwest Territories","cases":5,"recovered":5,"deaths":0},{"state":" Nunavut","cases":0,"recovered":0,"deaths":0},{"state":"canada","cases":133748,"recovered":117565,"deaths":9153}]}

var regions=[
    {
        "region_name": "British Columbia",
        "region_code": "BC",
        "region_link": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/health",
        "cases": data.canada[0].cases,
        "recovered":data.canada[0].recovered,
        "deaths":data.canada[0].deaths
    },
    {
        "region_name": "Alberta",
        "region_code": "ALTA",
        "region_link": "https://www.alberta.ca/health-wellness.aspx",
        "cases": data.canada[1].cases,
        "recovered":data.canada[1].recovered,
        "deaths":data.canada[1].deaths
    },
    {
        "region_name": "Saskatchewan",
        "region_code": "SASK",
        "region_link": "https://www.saskatchewan.ca/residents/health",
        "cases": data.canada[2].cases,
        "recovered":data.canada[2].recovered,
        "deaths":data.canada[2].deaths
    },
    {
        "region_name": "Manitoba",
        "region_code": "MAN",
        "region_link": "https://www.gov.mb.ca/health/",
        "cases": data.canada[3].cases,
        "recovered":data.canada[3].recovered,
        "deaths":data.canada[3].deaths
    },
    {
        "region_name": "Ontario",
        "region_code": "ONT",
        "region_link": "https://www.ontario.ca/page/health-care-ontario",
        "cases": data.canada[4].cases,
        "recovered":data.canada[4].recovered,
        "deaths":data.canada[4].deaths
    },
    {
        "region_name": "Quebec",
        "region_code": "QUE",
        "region_link": "https://www.ramq.gouv.qc.ca/fr/Pages/accueil.aspx",
        "cases": data.canada[5].cases,
        "recovered":data.canada[5].recovered,
        "deaths":data.canada[5].deaths
    },
    {
        "region_name": "New Brunswick",
        "region_code": "NB",
        "region_link": "https://www2.gnb.ca/content/gnb/en/departments/health.html",
        "cases": data.canada[6].cases,
        "recovered":data.canada[6].recovered,
        "deaths":data.canada[6].deaths
    },
    {
        "region_name": "Prince Edward Island",
        "region_code": "PEI",
        "region_link": "https://www.princeedwardisland.ca/en/topic/health",
        "cases": data.canada[7].cases,
        "recovered":data.canada[7].recovered,
        "deaths":data.canada[7].deaths
    },
    {
        "region_name": "Nova Scotia",
        "region_code": "NS",
        "region_link": "http://www.nshealth.ca/primary-health-care",
        "cases": data.canada[8].cases,
        "recovered":data.canada[8].recovered,
        "deaths":data.canada[8].deaths
    },
    {
        "region_name": "Newfoundland and Labrador",
        "region_code": "NFLD",
        "region_link": "https://www.health.gov.nl.ca/health/",
        "cases": data.canada[9].cases,
        "recovered":data.canada[9].recovered,
        "deaths":data.canada[9].deaths
    },
    {
        "region_name": "Yukon",
        "region_code": "YK",
        "region_link": "http://www.hss.gov.yk.ca/healthservices.php",
        "cases": data.canada[10].cases,
        "recovered":data.canada[10].recovered,
        "deaths":data.canada[10].deaths
    },
    {
        "region_name": "Northwest Territories",
        "region_code": "NWT",
        "region_link": "https://www.hss.gov.nt.ca/en",
        "cases": data.canada[11].cases,
        "recovered":data.canada[11].recovered,
        "deaths":data.canada[11].deaths
    },
    {
        "region_name": "Nunavut",
        "region_code": "NU",
        "region_link": "https://www.gov.nu.ca/health",
        "cases": data.canada[12].cases,
        "recovered":data.canada[12].recovered,
        "deaths":data.canada[12].deaths
    },
];

var Canada = {
    "region_name": "Canada",
    "cases": data.canada[13].cases,
        "recovered":data.canada[13].recovered,
        "deaths":data.canada[13].deaths
}
function load_map(regions,toggle_bool){
    for(i = 0; i < regions.length; i++) {
        let styleCSS = {};
        if(toggle_bool){
            if(regions[i].cases>20000){
                styleCSS = {'fill':  '#550000'}
            }
            else if(regions[i].cases>10000){
                styleCSS = {'fill':  '#aa0000'}
            }
            else if(regions[i].cases>2000){
                styleCSS = {'fill':  '#d40000'}
            }
            else if(regions[i].cases==0){
                styleCSS = {'fill':  '#C0C0C0'}
            }
            else{
                styleCSS = {'fill':  '#ff5555'}
            }
        }
        else{
            if(regions[i].deaths>1000){
                styleCSS = {'fill':  '#16234D'}
            }
            else if(regions[i].deaths>100){
                styleCSS = {'fill':  '#3657B6'}
            }
            else if(regions[i].deaths>10){
                styleCSS = {'fill':  '#639DF1'}
            }
            else if(regions[i].deaths==0){
                styleCSS = {'fill':  '#FFFFFF'}
            }
            else{
                styleCSS = {'fill':  '#AEE8FE'}
            }
        }

        $('.'+ regions[i].region_code).css(styleCSS).data(regions[i]);
    }

    if(toggle_bool){
        $('#one').css({'background': '#C0C0C0'})
        $('#two').css({'background': '#ff5555'})
        $('#three').css({'background': '#d40000'})
        $('#four').css({'background': '#aa0000'})
        $('#five').css({'background': '#550000'})
        
        $('#title').text('Cases');
        $('.one').text(' 0 ');
        $('.two').text('1-2000');
        $('.three').text('2000-10000');
        $('.four').text('10000-20000');
        $('.five').text('>20000');
    }

    else{
        $('#one').css({'background': '#FFFFFF'})
        $('#two').css({'background': '#AEE8FE'})
        $('#three').css({'background': '#639DF1'})
        $('#four').css({'background': '#3657B6'})
        $('#five').css({'background': '#16234D'})
        
        $('#title').text('Deaths');
        $('.one').text(' 0 ');
        $('.two').text('1-10');
        $('.three').text('10-100');
        $('.four').text('100-1000');
        $('.five').text('>1000');
    }

    $('<div class="info_panel">'+
                '<table>' + 
                '<thead>'+ 
                    '<tr>'+
                        '<th class="head_col" scope="col"></th>'+
                        '<th class="head_col_cases" scope="col">Cases</th>'+
                        '<th class="head_col_recovered" scope="col">Recovered</th>'+
                        '<th class="head_col_deaths" scope="col">Deaths</th>'+
                    '</tr>'+ 
                '</thead>' +
                '<tbody>'+
                    '<th id="title">' + Canada.region_name + '</th>'+
                    '<td class="col_cases">'+ Canada.cases.toLocaleString("en-UK") + '</td>'+
                    '<td class="col_recovered">'+ Canada.recovered.toLocaleString("en-UK") + '</td>'+
                    '<td class="col_deaths">'+ Canada.deaths.toLocaleString("en-UK") + '</td>'+
                '</tbody>'+
            
            '</table>'+
          	'</div>'
         )
        .appendTo('.info');

    $('.map .reg').mouseover(function (e) {
        $('.info_panel').remove();
        var region_data=$(this).data();
        $(this).css({'opacity': '0.8'})
        $('<div class="info_panel">'+
                '<table>' + 
                '<thead>'+ 
                    '<tr>'+
                        '<th class="head_col" scope="col"></th>'+
                        '<th class="head_col_cases" scope="col">Cases</th>'+
                        '<th class="head_col_recovered" scope="col">Recovered</th>'+
                        '<th class="head_col_deaths" scope="col">Deaths</th>'+
                    '</tr>'+ 
                '</thead>' +
                '<tbody>'+
                    '<tr class="main-reg">'+
                        '<th id="title">' + region_data.region_name + '</th>'+
                        '<td class="col_cases">'+ region_data.cases.toLocaleString("en-UK") + '</td>'+
                        '<td class="col_recovered">'+ region_data.recovered.toLocaleString("en-UK") + '</td>'+
                        '<td class="col_deaths">'+ region_data.deaths.toLocaleString("en-UK") + '</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<th id="title">' + Canada.region_name + '</th>'+
                        '<td class="col_cases">'+ Canada.cases.toLocaleString("en-UK") + '</td>'+
                        '<td class="col_recovered">'+ Canada.recovered.toLocaleString("en-UK") + '</td>'+
                        '<td class="col_deaths">'+ Canada.deaths.toLocaleString("en-UK") + '</td>'+
                    '</tr>'+
                '</tbody>'+
            
            '</table>'+
          	'</div>'
         )
        .appendTo('.info');
    })

    .mouseleave(function () {
        $(this).css({'opacity': '1'})
    })

    .click(function(){
        var region_data=$(this).data();
        window.open(region_data.region_link,'_blank');
    })
}

$(load_map(regions,toggle_bool));

// Data from the API
let requestURL = "https://covid-dataapi.herokuapp.com/canada";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    const data = request.response;
    var regions=[
        {
            "region_name": "British Columbia",
            "region_code": "BC",
            "region_link": "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/health",
            "cases": data.canada[0].cases,
            "recovered":data.canada[0].recovered,
            "deaths":data.canada[0].deaths
        },
        {
            "region_name": "Alberta",
            "region_code": "ALTA",
            "region_link": "https://www.alberta.ca/health-wellness.aspx",
            "cases": data.canada[1].cases,
            "recovered":data.canada[1].recovered,
            "deaths":data.canada[1].deaths
        },
        {
            "region_name": "Saskatchewan",
            "region_code": "SASK",
            "region_link": "https://www.saskatchewan.ca/residents/health",
            "cases": data.canada[2].cases,
            "recovered":data.canada[2].recovered,
            "deaths":data.canada[2].deaths
        },
        {
            "region_name": "Manitoba",
            "region_code": "MAN",
            "region_link": "https://www.gov.mb.ca/health/",
            "cases": data.canada[3].cases,
            "recovered":data.canada[3].recovered,
            "deaths":data.canada[3].deaths
        },
        {
            "region_name": "Ontario",
            "region_code": "ONT",
            "region_link": "https://www.ontario.ca/page/health-care-ontario",
            "cases": data.canada[4].cases,
            "recovered":data.canada[4].recovered,
            "deaths":data.canada[4].deaths
        },
        {
            "region_name": "Quebec",
            "region_code": "QUE",
            "region_link": "https://www.ramq.gouv.qc.ca/fr/Pages/accueil.aspx",
            "cases": data.canada[5].cases,
            "recovered":data.canada[5].recovered,
            "deaths":data.canada[5].deaths
        },
        {
            "region_name": "New Brunswick",
            "region_code": "NB",
            "region_link": "https://www2.gnb.ca/content/gnb/en/departments/health.html",
            "cases": data.canada[6].cases,
            "recovered":data.canada[6].recovered,
            "deaths":data.canada[6].deaths
        },
        {
            "region_name": "Prince Edward Island",
            "region_code": "PEI",
            "region_link": "https://www.princeedwardisland.ca/en/topic/health",
            "cases": data.canada[7].cases,
            "recovered":data.canada[7].recovered,
            "deaths":data.canada[7].deaths
        },
        {
            "region_name": "Nova Scotia",
            "region_code": "NS",
            "region_link": "http://www.nshealth.ca/primary-health-care",
            "cases": data.canada[8].cases,
            "recovered":data.canada[8].recovered,
            "deaths":data.canada[8].deaths
        },
        {
            "region_name": "Newfoundland and Labrador",
            "region_code": "NFLD",
            "region_link": "https://www.health.gov.nl.ca/health/",
            "cases": data.canada[9].cases,
            "recovered":data.canada[9].recovered,
            "deaths":data.canada[9].deaths
        },
        {
            "region_name": "Yukon",
            "region_code": "YK",
            "region_link": "http://www.hss.gov.yk.ca/healthservices.php",
            "cases": data.canada[10].cases,
            "recovered":data.canada[10].recovered,
            "deaths":data.canada[10].deaths
        },
        {
            "region_name": "Northwest Territories",
            "region_code": "NWT",
            "region_link": "https://www.hss.gov.nt.ca/en",
            "cases": data.canada[11].cases,
            "recovered":data.canada[11].recovered,
            "deaths":data.canada[11].deaths
        },
        {
            "region_name": "Nunavut",
            "region_code": "NU",
            "region_link": "https://www.gov.nu.ca/health",
            "cases": data.canada[12].cases,
            "recovered":data.canada[12].recovered,
            "deaths":data.canada[12].deaths
        },
    ];

    var Canada = {
        "region_name": "Canada",
        "cases": data.canada[13].cases,
            "recovered":data.canada[13].recovered,
            "deaths":data.canada[13].deaths
    }

    var toggle_bool = true;
    load_map(regions,toggle_bool);
    $('#toggle').click(function(){
        toggle_bool = !toggle_bool;
        load_map(regions,toggle_bool);
    })
}
