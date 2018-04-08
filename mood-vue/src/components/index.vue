<template>
  <div id="app">
    <div class="box">
      <h3>
        更多图表类型：
        <select  @change="moreChart()" v-model="type">
          <option v-for="s in moreSamples" :value="s.code">{{s.name}}</option>
        </select>
      </h3>
      <div id="highcharts-more" class="container"></div>
    </div>

    <div class="box">
      <h3>使用封装的组件生产</h3>
      <highcharts-component :options="options" :styles="styles" ref="simpleChart"></highcharts-component>
      <button @click="updateChart">更新图表！！！！！</button>
    </div>  
  </div>
</template>

<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);

import HighchartsComponent from './HighchartsComponent.vue';

export default {
    name: 'app',
    data() {
        return {

            type: 'columnrange',
            moreSamples: [{
              name: '柱形范围图',
              code: 'columnrange'
            }, {
              name: '下钻',
              code: 'drilldown'
            }, {
              name: '3D 饼图',
              code: '3dpie'
            }],


            chart: null,
            options: {
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    lineColor: '#F33'
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    lineWidth: 2,
                    lineColor: '#F33',
                    id: 'temperature-axis'
                },
                series: [{
                    name: '心情',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#F33'
                },{
                    name: '心情2',
                    data: [1.0, 2.0, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 3.0],
                    color: '#F33'
                }
                ],
                credits:{
                     enabled: false // 禁用版权信息
                }
            },
            styles: {
              width: 600,
              height: 400
            }
        }
    },
    components: {
      HighchartsComponent
    },
    mounted() {
     
      this.moreChart();
    },
    methods: {
        updateChart() {
            // 通过 refs 获取组件信息
            this.$refs.simpleChart.chart.series[0].update({
              color: '#000',
              data: [1.0, 1.0, 1.0, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            })
        },
        moreChart() {
          var options = this.getMoreOptions(this.type);

          if(this.chart) {
            this.chart.destroy();
          };

          this.chart = new Highcharts.Chart( 'highcharts-more', options);

        },
        getMoreOptions(type) {
          if(type === 'columnrange') {
            return {
                chart: {
                    type: 'columnrange',
                    inverted: true
                },
                title: {
                    text: '每月温度变化范围'
                },
                subtitle: {
                    text: '2009 挪威某地'
                },
                xAxis: {
                    categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: {
                    title: {
                        text: '温度 ( °C )'
                    }
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                plotOptions: {
                    columnrange: {
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return this.y + '°C';
                            }
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: '温度',
                    data: [
                        [-9.7, 9.4],
                        [-8.7, 6.5],
                        [-3.5, 9.4],
                        [-1.4, 19.9],
                        [0.0, 22.6],
                        [2.9, 29.5],
                        [9.2, 30.7],
                        [7.3, 26.5],
                        [4.4, 18.0],
                        [-3.1, 11.4],
                        [-5.2, 10.4],
                        [-13.5, 9.8]
                    ]
                }]
            }
          } else if(type === 'drilldown') {
            return {
                chart:
                {
                    type: 'column'
                },
                title:
                {
                    text: 'Basic drilldown'
                },
                xAxis:
                {
                    type: 'category'
                },
                legend:
                {
                    enabled: false
                },
                plotOptions:
                {
                    series:
                    {
                        borderWidth: 0,
                        dataLabels:
                        {
                            enabled: true
                        }
                    }
                },
                series: [
                {
                    name: 'Things',
                    colorByPoint: true,
                    data: [
                    {
                        name: 'Animals',
                        y: 5,
                        drilldown: 'animals'
                    },
                    {
                        name: 'Fruits',
                        y: 2,
                        drilldown: 'fruits'
                    },
                    {
                        name: 'Cars',
                        y: 4,
                        drilldown: 'cars'
                    }]
                }],
                drilldown:
                {
                    series: [
                    {
                        id: 'animals',
                        data: [
                            ['Cats', 4],
                            ['Dogs', 2],
                            ['Cows', 1],
                            ['Sheep', 2],
                            ['Pigs', 1]
                        ]
                    },
                    {
                        id: 'fruits',
                        data: [
                        {
                            name: 'Apples',
                            y: 4
                        },
                        {
                            name: 'Oranges',
                            y: 2,
                            drilldown: 'third-leves'
                        }]
                    },
                    {
                        id: 'cars',
                        data: [
                            ['Toyota', 4],
                            ['Opel', 2],
                            ['Volkswagen', 2]
                        ]
                    },
                    {
                        id: 'third-leves',
                        data: [
                            ['Toyota', 4],
                            ['Opel', 2],
                            ['Volkswagen', 2]
                        ]
                    }]
                }
            }
          } else if(type === '3dpie') {
            return {
              chart: {
                  type: 'pie',
                  options3d: {
                      enabled: true,
                      alpha: 45,
                      beta: 0
                  }
              },
              title: {
                  text: '2014年某网站不同浏览器访问量占比'
              },
              tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
              },
              plotOptions: {
                  pie: {
                      allowPointSelect: true,
                      cursor: 'pointer',
                      depth: 35,
                      dataLabels: {
                          enabled: true,
                          format: '{point.name}'
                      }
                  }
              },
              series: [{
                  type: 'pie',
                  name: '浏览器占比',
                  data: [
                      ['Firefox',   45.0],
                      ['IE',       26.8],
                      {
                          name: 'Chrome',
                          y: 12.8,
                          sliced: true,
                          selected: true
                      },
                      ['Safari',    8.5],
                      ['Opera',     6.2],
                      ['Others',   0.7]
                  ]
              }]
              }
          }
        }

    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  width: 48%;
  height: 400px;
  display: inline-block;
  border: 1px solid #ccc;
  /*overflow: hidden;*/
  position: relative;

  h3 {
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 1000;
  }

  button {

  }
}
</style>
