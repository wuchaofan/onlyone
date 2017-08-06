/* eslint-disable */
export default {
  barchart: {
    title: { text: 'ECharts柱状图' },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      itemStyle: {
        normal: {color: '#99CCCC'}
      }
    }]
  },
  labelRight: {
    normal: {
      position: 'right'
    }
  },
  barnegative: {
    title: {
      text: '交错正负轴'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {type: 'dashed'}
      }
    },
    yAxis: {
      type: 'category',
      axisLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      splitLine: {show: false},
      data: ['eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
      {
        name: '生活费',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            formatter: '{b}'
          }
        },
        data: [
          0.2, 0.44,
          {value: -0.23, label: this.labelRight},
          0.08,
          {value: -0.17, label: this.labelRight},
          0.47,
          {value: -0.36, label: this.labelRight},
          0.18
        ],
        itemStyle: {
          normal: {color: '#996699'}
        }
      }
    ]
  },
  netMap: () => {
    function data () {
      var d = []
      for (var i = 0; i < 24; i++) {
        d.push({name: i + '~' + (i + 1), value: Math.random() * 100})
      }
      return d
    }

    return {
      title: {
        text: '站点用户访问',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        position: ['48.5%', '49.2%'],
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
          color: 'yellow',
          fontWeight: 'bold'
        },
        formatter: '{d}%'
      },
      series: [
        {
          name: '上网时间',
          type: 'pie',
          radius: ['5%', '70%'],
          roseType: 'area',
          color: ['#3fa7dc'],
          data: data(),
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        {
          name: '',
          type: 'gauge',
          min: 0,
          max: 24,
          startAngle: 90,
          endAngle: 449.9,
          radius: '82%',
          splitNumber: 24,
          clockwise: false,
          animation: false,
          detail: {
            formatter: '{value}',
            textStyle: {
              color: '#63869e'
            }
          },
            // detail:{
            //     show: false
            // },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: [
                [0.25, '#63869e'],
                [0.75, '#ffffff'],
                [1, '#63869e']
              ],
              width: '40%',
              shadowColor: '#0d4b81',
              shadowBlur: 40,
              opacity: 1
            }
          },
          splitLine: {
            length: 5,
            lineStyle: {
              color: '#ffffff',
              width: 2
            }
          },
          axisLabel: {
            formatter: function (v) {
              return v || ''
            },
            textStyle: {
              color: 'red',
              fontWeight: 700
            }
          },
          itemStyle: {
            normal: {
              color: 'green',
              width: 2
            }
          }
        },
        {
          name: '',
          type: 'gauge',
          min: 0,
          max: 24,
          startAngle: 90,
          endAngle: 449.9,
          radius: '72%',
          splitNumber: 24,
          clockwise: false,
          animation: false,
          detail: {
            formatter: '{value}',
            textStyle: {
              color: '#63869e'
            }
          },
          // detail: {
          //   show: false
          // },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: [
                [1, '#E8E8E8']
              ],
              width: '10%',
              opacity: 0.8
            }
          },
          splitLine: {
            show: true,
            length: '92%',
            lineStyle: {
              color: 'grey',
              width: '1'
            }
          },
          axisLabel: {
            show: false,
            formatter: function (v) {
              return v || ''
            },
            textStyle: {
              color: '#fb5310',
              fontWeight: 700
            }
          },
          itemStyle: {
            normal: {
              color: 'green',
              width: 2,
              borderWidth: 3
            }
          }
        }
      ]
    }
  },
  leida: {
    title: {
    },
    tooltip: {},
    legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
      textStyle: {
        color: '#fff'
      }
    },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: 'Sales',
              max: 6000
          }, {
              name: 'Administration',
              max: 16000
          }, {
              name: 'Information Techology',
              max: 30000
          }, {
              name: 'Customer Support',
              max: 35000
          }, {
              name: 'Development',
              max: 50000
          }, {
              name: 'Marketing',
              max: 25000
          }]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '预算分配（Allocated Budget）',
          }, {
              value: [2500, 12000, 8000, 8500, 12000, 12000],
              name: '实际开销（Actual Spending）',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [{
              offset: 0,
              color: '#895355' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#593640' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#39273d' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
  }
}
