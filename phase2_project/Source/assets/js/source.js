
window.onload = function () {
// data Source OF Tweets
    var data = [
        {y: 504193, indexLabel: "Iphone"},
        {y: 141171, indexLabel: "Android"},
        {y: 23545, indexLabel: "Ipad"},
        {y: 193890, indexLabel: "Web"},
        {y: 57408, indexLabel: "Tweetdeck"},
        {y: 3034, indexLabel: "Tweetbot"},
        {y: 28205, indexLabel: "Sprinklr"},
        {y: 4268, indexLabel: "Facebook"},
        {y: 4276, indexLabel: "Instagram"}
    ];
    var chart = new CanvasJS.Chart("chartContainer",
        {backgroundColor: "",

            legend: {

            },
            data: [
                {
                    type: "column",
                    showInLegend: true,
                    legendText: "{indexLabel}",
                    dataPoints: data
                }
            ]
        });
    chart.render();

    // data Top Hashtags
    var data1 = [
        {y: 303132, indexLabel: "Ihurricanematthew"},
        {y: 113933, indexLabel: "matthew"},
        {y: 39693, indexLabel: "prayforflorida"},
        {y: 17146, indexLabel: "haiti"},
        {y: 15448, indexLabel: "florida"},
        {y: 11048, indexLabel: "hurricane"},
        {y: 4713, indexLabel: "firstalertwx"},
        {y: 4207, indexLabel: "prayforhaiti"},
        {y: 3705, indexLabel: "jacksonville"}
    ];
    var chart1 = new CanvasJS.Chart("c1",
        {backgroundColor: "",

            legend: {

            },
            data: [
                {
                    type: "doughnut",
                    showInLegend: true,
                    legendText: "{indexLabel}",
                    dataPoints: data1
                }
            ]
        });

    chart1.render();



// data Top Hashtags1111111
var data11 = [
    {y: 303132, indexLabel: "Ihurricanematthew"},
    {y: 113933, indexLabel: "matthew"},
    {y: 39693, indexLabel: "prayforflorida"},
    {y: 17146, indexLabel: "haiti"},
    {y: 15448, indexLabel: "florida"},
    {y: 11048, indexLabel: "hurricane"},
    {y: 4713, indexLabel: "firstalertwx"},
    {y: 4207, indexLabel: "prayforhaiti"},
    {y: 3705, indexLabel: "jacksonville"}
];
var chart11 = new CanvasJS.Chart("c11",
    {backgroundColor: "",


        data: [
            {
                type: "pie",
                showInLegend: true,
                legendText: "{indexLabel}",
                dataPoints: data11
            }
        ]
    });

chart11.render();
}