/**
 * Created by khalidalmalki on 12/4/16.
 */

function top_hash() {
    $(document).ready(function() {
        var margin = {top: 20, right: 20, bottom: 30, left: 90},
            width = 1000 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;
        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .5);
        var y = d3.scale.linear()
            .range([height, 0]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10, "");
        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("TopHashtags.csv", type, function (error, data) {
            if (error) throw error;
            x.domain(data.map(function (d) {
                return d.Top_Hashtahs;
            }));
            y.domain([0, d3.max(data, function (d) {
                return d.total_count;
            })]);
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Count");
            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return x(d.Top_Hashtahs);
                })
                .attr("width", x.rangeBand())
                .attr("y", function (d) {
                    return y(d.total_count);
                })
                .attr("height", function (d) {
                    return height - y(d.total_count);
                });
        });
        function type(d) {
            d.total_count = +d.total_count;
            return d;
        }
    });
}