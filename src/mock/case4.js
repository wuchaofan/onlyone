/* eslint-disable */
export default () => {
    
    let promise = new Promise((resolve, reject) => {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        img.src = require('../assets/test.jpg')

        img.onload = function () {
            var width = canvas.width = img.width;
            var height = canvas.height = img.height;
            ctx.drawImage(img, 0, 0, width, height);
            var imgData = ctx.getImageData(0, 0, width, height);
            
            var data = [];
            for (var i = 0; i < imgData.data.length / 4; i++) {
                var r = imgData.data[i * 4];
                var g = imgData.data[i * 4 + 1];
                var b = imgData.data[i * 4 + 2];
                
                var lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b);
                lum = (lum - 125) / 10 + 50;
                data.push([i % width, height - Math.floor(i / width), lum]);
            }
            
            resolve({data, imgData})
        }
    })
    return promise.then((obj) => {
        return {
            tooltip: {},
            backgroundColor: 'white',
            xAxis3D: {
                type: 'value'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value',
                min: 0,
                max: 100
            },
            grid3D: {
                axisPointer: {
                    show: false
                },
                viewControl: {
                    distance: 100
                },
                postEffect: {
                    enable: true
                },
                light: {
                    main: {
                        shadow: true,
                        intensity: 2
                    },
                    ambientCubemap: {
                        // texture: require('../assets/logo.png'),
                        exposure: 2,
                        diffuseIntensity: 0.2,
                        specularIntensity: 1
                    }
                }
            },
            series: [{
                type: 'surface',
                silent: true,
                wireframe: {
                    show: false
                },
                itemStyle: {
                    color: function (params) {
                        var i = params.dataIndex;
                        var r = obj.imgData.data[i * 4];
                        var g = obj.imgData.data[i * 4 + 1];
                        var b = obj.imgData.data[i * 4 + 2];
                        return 'rgb(' + [r, g, b].join(',') + ')';
                    }  
                },
                data: obj.data
            }]
        }
    })
}