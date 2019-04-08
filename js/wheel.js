$(function () {
    // Array of animals that will be called on later
    let animals = [
        "Snake",
        "Dragon",
        "Rabbit",
        "Tiger",
        "Ox",
        "Rat",
        "Pig",
        "Dog",
        "Rooster",
        "Monkey",
        "Sheep",
        "Horse"
    ];

    // Set up shorhand for calling HTML elements by ID
    let wheel = $("#wheel");
    let button = $("#btn");
    let result = $("#result");
    let day = $("#day");
    let month = $("#month");
    let year = $("#year");

    button.on('click',function(e) {
        e.preventDefault(); // prevent default behaviour - especially needed for a links
        getZodiac(day.val(), month.val(), year.val()); // get values from form and use to call function
    });

    function spin(v) {
        let animal = animals[v]; // set animal name to value of preset array index

        $.keyframe.define([{ // use jQuery keyframes plugin for better set up of animations
            name: 'spin', // initial spin animation
            from: {
                'transform': 'rotate(0deg)'
            },
            to: {
                'transform': 'rotate(360deg)'
            }
        },
            { // These next animations define where the wheel will stop spinning
                name: 'Snake',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(360deg)'
                }
            },
            {
                name: 'Dragon',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(330deg)'
                }
            },
            {
                name: 'Rabbit',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(300deg)'
                }
            },
            {
                name: 'Tiger',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(270deg)'
                }
            },
            {
                name: 'Ox',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(240deg)'
                }
            },
            {
                name: 'Rat',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(210deg)'
                }
            },
            {
                name: 'Pig',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(180deg)'
                }
            },
            {
                name: 'Dog',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(510deg)'
                }
            },
            {
                name: 'Rooster',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(480deg)'
                }
            },
            {
                name: 'Monkey',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(450deg)'
                }
            },
            {
                name: 'Sheep',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(420deg)'
                }
            },
            {
                name: 'Horse',
                from: {
                    'transform': 'rotate(0deg)'
                },
                to: {
                    'transform': 'rotate(390deg)'
                }
            }
        ]);

        wheel.playKeyframe({ // Play animation - comments from documentation to explain how plugin works
            // First play generic spin animation
            name: 'spin', // name of the keyframe you want to bind to the selected element
            duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
            timingFunction: 'ease-in', // [optional, default: ease] specifies the speed curve of the animation
            delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
            iterationCount: '10', //[optional, default:1]  how many times you want the animation to repeat
            direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
            fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
            complete: function(){wheel.playKeyframe({ // once spin has finished, play animation relevant to chosen animal
                name: animal, // name of the keyframe you want to bind to the selected element - variable set with animal name
                duration: '1s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: 'ease-out', // [optional, default: ease] specifies the speed curve of the animation
                delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
                iterationCount: '1', //[optional, default:1]  how many times you want the animation to repeat
                direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
                fillMode: 'forwards', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                complete: function(){result.text("Your birthday falls on 'Year of the "+animal+"'")} // changes span text to display resulting animal
            });} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
        });
    }

    function getZodiac(d, m, y,) {
        let v = 0; // v will be set to array index of animals set above

        let date = Math.round(new Date(y, m, d).getTime()); // Convert form values to UNIX timestamp for easier comparison
        // dates found with http://www.chinesezodiac.com/calculator.php, converted to timestamp with https://www.epochconverter.com
        if ((date >= -1448668800000 && date <= -1418169600000) || // Feb 5, 1924 – Jan 23, 1925
            (date >= -1071014400000 && date <= -1037923200000) || // Jan 24, 1936 – Feb 10, 1937
            (date >= -690854400000 && date <= -660355200000) || // Feb 10, 1948 – Jan 28, 1949
            (date >= -313286400000 && date <= -280195200000) || // Jan 28, 1960 – Feb 14, 1961
            (date >= 66960000000 && date <= 97459200000) || // Feb 15, 1972 – Feb 2, 1973
            (date >= 444528000000 && date <= 477619200000) || // Feb 2, 1984 – Feb 19, 1985
            (date >= 824688000000 && date <= 855187200000) || // Feb 19, 1996 – Feb 6, 1997
            (date >= 1202342400000 && date <= 1232841600000)  // Feb 7, 2008 – Jan 25, 2009
        )    {
            v = 5; // Rat
        }
        if ((date >= -1418083200000 && date <= -1384905600000) || // Jan 24, 1925 – Feb 12, 1926
            (date >= -1037836800000 && date <= -1007337600000) || // Feb 11, 1937 – Jan 30, 1938
            (date >= -660268800000 && date <= -627177600000) || // Jan 29, 1949 – Feb 16, 1950
            (date >= -280108800000 && date <= -249523200000) || // Feb 15, 1961 – Feb 4, 1962
            (date >= 66960000000 && date <= 97459200000) || // Feb 15, 1972 – Feb 2, 1973
            (date >= 477705600000 && date <= 508204800000) || // Feb 20, 1985 – Feb 8, 1986
            (date >= 855273600000 && date <= 885859200000) || // Feb 7, 1997 – Jan 27, 1998
            (date >= 1232928000000 && date <= 1266019200000)  // Jan 26, 2009 – Feb 13, 2010
        )    {
            v = 4; // Ox
        }
        if ((date >= -1384819200000 && date <= -1354320000000) || // Feb 13, 1926 – Feb 1, 1927
            (date >= -1007251200000 && date <= -974160000000) || // Jan 31, 1938 – Feb 18, 1939
            (date >= -627091200000 && date <= -596592000000) || // Feb 17, 1950 – Feb 5, 1951
            (date >= -249436800000 && date <= -218937600000) || // Feb 5, 1962 – Jan 24, 1963
            (date >= 128131200000 && date <= 161222400000) || // Jan 23, 1974 – Feb 10, 1975
            (date >= 508291200000 && date <= 538790400000) || // Feb 9, 1986 – Jan 28, 1987
            (date >= 885945600000 && date <= 919036800000) || // Jan 28, 1998 – Feb 15, 1999
            (date >= 1266105600000 && date <= 1296604800000)  // Feb 14, 2010 – Feb 2, 2011
        )    {
            v = 3; // Tiger
        }
        if ((date >= -1354233600000 && date <= -1323648000000) || // Feb 2, 1927 – Jan 22, 1928
            (date >= -974073600000 && date <= -943574400000) || // Feb 19, 1939 – Feb 7, 1940
            (date >= -596505600000 && date <= -565920000000) || // Feb 6, 1951 – Jan 26, 1952
            (date >= -218851200000 && date <= -185760000000) || // Jan 25, 1963 – Feb 12, 1964
            (date >= 161308800000 && date <= 191808000000) || // Feb 11, 1975 – Jan 30, 1976
            (date >= 538876800000 && date <= 571968000000) || // Jan 29, 1987 – Feb 16, 1988
            (date >= 919123200000 && date <= 949622400000) || // Feb 16, 1999 – Feb 4, 2000
            (date >= 1296691200000 && date <= 1327190400000)  // Feb 3, 2011 – Jan 22, 2012
        )    {
            v = 2; // Rabbit
        }
        if ((date >= -1323561600000 && date <= -1290470400000) || // Jan 23, 1928 – Feb 9, 1929
            (date >= -943488000000 && date <= -912988800000) || // Feb 8, 1940 – Jan 26, 1941
            (date >= -565833600000 && date <= -532742400000) || // Jan 27, 1952 – Feb 13, 1953
            (date >= -185673600000 && date <= -155088000000) || // Feb 13, 1964 – Feb 1, 1965
            (date >= 191894400000 && date <= 224985600000) || // Jan 31, 1976 – Feb 17, 1977
            (date >= 572054400000 && date <= 602640000000) || // Feb 17, 1988 – Feb 5, 1989
            (date >= 949708800000 && date <= 980208000000) || // Feb 5, 2000 – Jan 23, 2001
            (date >= 1327276800000 && date <= 1360368000000)  // Jan 23, 2012 – Feb 9, 2013
        )    {
            v = 1; // Dragon
        }
        if ((date >= -1290384000000 && date <= -1259884800000) || // Feb 10, 1929 – Jan 29, 1930
            (date >= -912902400000 && date <= -879811200000) || // Jan 27, 1941 – Feb 14, 1942
            (date >= -532656000000 && date <= -502156800000) || // Feb 14, 1953 – Feb 2, 1954
            (date >= -155001600000 && date <= -124588800000) || // Feb 2, 1965 – Jan 20, 1966
            (date >= 225072000000 && date <= 255571200000) || // Feb 18, 1977 – Feb 6, 1978
            (date >= 602726400000 && date <= 633312000000) || // Feb 6, 1989 – Jan 26, 1990
            (date >= 980294400000 && date <= 1013385600000) || // Jan 24, 2001 – Feb 11, 2002
            (date >= 1360454400000 && date <= 1391040000000)  // Feb 10, 2013 – Jan 30, 2014
        )    {
            v = 0; // Snake
        }
        if ((date >= -1259798400000 && date <= -1226793600000) || // Jan 30, 1930 – Feb 16, 1931
            (date >= -879724800000 && date <= -849139200000) || // Feb 15, 1942 – Feb 4, 1943
            (date >= -502070400000 && date <= -471484800000) || // Feb 3, 1954 – Jan 23, 1955
            (date >= -124502400000 && date <= -91411200000) || // Jan 21, 1966 – Feb 8, 1967
            (date >= 255657600000 && date <= 286243200000) || // Feb 7, 1978 – Jan 27, 1979
            (date >= 633398400000 && date <= 666489600000) || // Jan 27, 1990 – Feb 14, 1991
            (date >= 1013472000000 && date <= 1043971200000) || // Feb 12, 2002 – Jan 31, 2003
            (date >= 1391126400000 && date <= 1423353600000)  // Jan 31, 2014 – Feb 18, 2015
        )    {
            v = 11; // Horse
        }
        if ((date >= -1226707200000 && date <= -1196208000000) || // Feb 17, 1931 – Feb 5, 1932
            (date >= -849052800000 && date <= -818553600000) || // Feb 5, 1943 – Jan 24, 1944
            (date >= -471398400000 && date <= -438307200000) || // Jan 24, 1955 – Feb 11, 1956
            (date >= -91324800000 && date <= -60739200000) || // Feb 9, 1967 – Jan 29, 1968
            (date >= 286329600000 && date <= 319420800000) || // Jan 28, 1979 – Feb 15, 1980
            (date >= 666576000000 && date <= 697075200000) || // Feb 15, 1991 – Feb 3, 1992
            (date >= 1044057600000 && date <= 1074643200000) || // Feb 1, 2003 – Jan 21, 2004
            (date >= 1424304000000 && date <= 1454803200000)  // Feb 19, 2015 – Feb 7, 2016
        )    {
            v = 10; // Sheep
        }
        if ((date >= -1196121600000 && date <= -1165536000000) || // Feb 6, 1932 – Jan 25, 1933
            (date >= -818467200000 && date <= -785289600000) || // Jan 25, 1944 – Feb 12, 1945
            (date >= -438220800000 && date <= -407721600000) || // Feb 12, 1956 – Jan 30, 1957
            (date >= -60652800000 && date <= -27561600000) || // Jan 30, 1968 – Feb 16, 1969
            (date >= 319507200000 && date <= 350092800000) || // Feb 16, 1980 – Feb 4, 1981
            (date >= 697161600000 && date <= 727660800000) || // Feb 4, 1992 – Jan 22, 1993
            (date >= 1074729600000 && date <= 1107820800000) || // Jan 22, 2004 – Feb 8, 2005
            (date >= 1454889600000 && date <= 1485475200000)  // Feb 8, 2016 – Jan 27, 2017
        )    {
            v = 9; // Monkey
        }
        if ((date >= -1165449600000 && date <= -1132358400000) || // Jan 26, 1933 – Feb 13, 1934
            (date >= -785203200000 && date <= -754704000000) || // Feb 13, 1945 – Feb 1, 1946
            (date >= -407635200000 && date <= -374630400000) || // Jan 31, 1957 – Feb 17, 1958
            (date >= -27475200000 && date <= 3024000000) || // Feb 17, 1969 – Feb 5, 1970
            (date >= 350179200000 && date <= 380678400000) || // Feb 5, 1981 – Jan 24, 1982
            (date >= 727747200000 && date <= 760752000000) || // Jan 23, 1993 – Feb 9, 1994
            (date >= 1107907200000 && date <= 1138406400000) || // Feb 9, 2005 – Jan 28, 2006
            (date >= 1485561600000 && date <= 1518652800000)  // Jan 28, 2017 – Feb 15, 2018
        )    {
            v = 8; // Rooster
        }
        if ((date >= -1132272000000 && date <= -1101686400000) || // Feb 14, 1934 – Feb 3, 1935
            (date >= -754617600000 && date <= -724118400000) || // Feb 2, 1946 – Jan 21, 1947
            (date >= -374544000000 && date <= -343958400000) || // Feb 18, 1958 – Feb 7, 1959
            (date >= 3110400000 && date <= 33696000000) || // Feb 6, 1970 – Jan 26, 1971
            (date >= 380764800000 && date <= 413856000000) || // Jan 25, 1982 – Feb 12, 1983
            (date >= 760838400000 && date <= 791424000000) || // Feb 10, 1994 – Jan 30, 1995
            (date >= 1138492800000 && date <= 1171670400000) || // Jan 29, 2006 – Feb 17, 2007
            (date >= 1518739200000 && date <= 1549238400000)  // Feb 16, 2018 – Feb 4, 2019
        )    {
            v = 7; // Dog
        }
        if ((date >= -1101600000000 && date <= -1071100800000) || // Feb 4, 1935 – Jan 23, 1936
            (date >= -724032000000 && date <= -690940800000) || // Jan 22, 1947 – Feb 9, 1948
            (date >= -343872000000 && date <= -313372800000) || // Feb 8, 1959 – Jan 27, 1960
            (date >= 33782400000 && date <= 66873600000) || // Jan 27, 1971 – Feb 14, 1972
            (date >= 413942400000 && date <= 444441600000) || // Feb 13, 1983 – Feb 1, 1984
            (date >= 791510400000 && date <= 824601600000) || // Jan 31, 1995 – Feb 18, 1996
            (date >= 1171756800000 && date <= 1202256000000) || // Feb 18, 2007 – Feb 6, 2008
            (date >= 1549324800000 && date <= 1579824000000)  // Feb 5, 2019 – Jan 24, 2020
        )    {
            v = 6; // Pig
        }
        spin(v); // call spin function with set array index to define animal
    }

    // Used to get angles for testing and calculating when wheel stops - https://stackoverflow.com/questions/8270612/get-element-moz-transformrotate-value-in-jquery
    function getRotationDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform")    ||
            obj.css("-ms-transform")     ||
            obj.css("-o-transform")      ||
            obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }

        if(angle < 0) angle +=360;
        return angle;
    }
});