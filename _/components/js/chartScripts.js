/**
 * Created by Nomad_Mystic on 11/19/2015.
 */


var masterChart = function() {
    var masterData = [410, 370, 330, 270, 240, 220, 200, 180, 165, 150, 135, 130,
        135, 150, 165, 180, 200];

    var contentHeight = 400,
        contentWidth = 600;

    var barWidth = 30,
        barOffset = 30,
        dynamicColor,
        domainOffset1 = '.15',
        domainOffset2 = '.22';

    var yScale = d3.scale.linear()
        .domain([0, d3.max(masterData)])
        .range([0, contentHeight]);

    var xScale = d3.scale.ordinal()
        .domain(d3.range(0, masterData.length))
        .rangeBands([0, contentWidth]);

    var colors = d3.scale.linear()
        .domain([0, masterData.length*domainOffset1 , masterData.length*domainOffset2 , masterData.length])
        .range(['#D8005F', '#FB006E', '#EB0067', '#9EAC62']);

    var chart = d3.select('#masterChart').append('svg')
        .attr('width', contentWidth)
        .attr('height', contentHeight)
        //.attr('', "0 0 55 65")
        .style('background', '#000000')
        .selectAll('rect').data(masterData)
        .enter().append('rect')
        .style({'fill': function(data, i) {
            return colors(i);
        },
            'stroke': '#999999',
            'stroke-width': '1',
            'cursor': 'pointer'
        })
        .attr('width', xScale.rangeBand())
        .attr('height', function(data) {
            return yScale(data);
        })
        .attr('x', function(data, i) {
            return xScale(i);
        })
        .attr('y', function(data) {
            return contentHeight - yScale(data);
        })
        .on('click', function(data, i) {

            console.log(i);
        })
        .on('mouseover', function(data) {
            dynamicColor = this.style.fill;
            d3.select(this)
                .style('fill', '#3c763d');
        })
        .on('mouseout', function(data) {
            d3.select(this)
                .style('fill', dynamicColor);
        });

    chart.transition()
        .attr('height', function (data) {
            return yScale(data);
        })
        .attr('y', function (data) {
            return contentHeight - yScale(data);
        })
        .delay(function (data, i) {
            return i * 20;
        })
        .duration(2000)
        .ease('elastic');
};


    //window.onload = masterChart();