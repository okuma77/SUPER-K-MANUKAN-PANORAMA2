var APP_DATA = {
  "scenes": [
    {
      "id": "0-eksterior",
      "name": "EKSTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.23063530901790585,
          "pitch": 0.12507066851312842,
          "rotation": 6.283185307179586,
          "target": "1-parkir-depan"
        },
        {
          "yaw": -0.38398829373375243,
          "pitch": 0.09441481213947078,
          "rotation": 0,
          "target": "2-parkir-samping"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parkir-depan",
      "name": "PARKIR DEPAN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11001769824542329,
          "pitch": 0.1338832261472671,
          "rotation": 0,
          "target": "4-interior2"
        },
        {
          "yaw": -0.4475195914056087,
          "pitch": 0.1187152584950617,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": -0.9847214842666006,
          "pitch": 0.015501868803324825,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": -2.558143958290877,
          "pitch": 0.08265741743921673,
          "rotation": 0,
          "target": "0-eksterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parkir-samping",
      "name": "PARKIR SAMPING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1765480262530659,
          "pitch": 0.08114482474852025,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": 2.148199016124181,
          "pitch": 0.10231464816214597,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": -0.079264820356574,
          "pitch": 0.1768855840021324,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": 0.3334734327926778,
          "pitch": 0.11489534415886737,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-interior1",
      "name": "INTERIOR1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.82681164331595,
          "pitch": 0.3929961117526428,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 1.1775739086838346,
          "pitch": 0.23785280001433406,
          "rotation": 0,
          "target": "1-parkir-depan"
        },
        {
          "yaw": 1.9477415170529158,
          "pitch": 0.008443400344862795,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": 0.19774959927907076,
          "pitch": 0.2772155722072043,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-interior2",
      "name": "INTERIOR2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.49478325291615555,
          "pitch": 0.2715601068274829,
          "rotation": 0,
          "target": "5-interior3"
        },
        {
          "yaw": -2.0972148392391183,
          "pitch": 0.33898323676556075,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": -2.3206360542395785,
          "pitch": 0.17519290816740174,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 2.9147214557834786,
          "pitch": -0.004054265856870742,
          "rotation": 0,
          "target": "0-eksterior"
        },
        {
          "yaw": 2.6235012565649782,
          "pitch": 0.2625579655169332,
          "rotation": 0,
          "target": "1-parkir-depan"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-interior3",
      "name": "INTERIOR3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.44019496341263675,
          "pitch": 0.2417409117763576,
          "rotation": 0,
          "target": "6-interior4"
        },
        {
          "yaw": -2.1615070977945052,
          "pitch": 0.16271710052517463,
          "rotation": 0,
          "target": "3-interior1"
        },
        {
          "yaw": -2.6962938417666997,
          "pitch": 0.2793839653581127,
          "rotation": 0,
          "target": "4-interior2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-interior4",
      "name": "INTERIOR4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.627812822984728,
          "pitch": 0.316517477547281,
          "rotation": 0,
          "target": "7-interior5"
        },
        {
          "yaw": 1.4701743171191204,
          "pitch": 0.2630625062439442,
          "rotation": 0,
          "target": "5-interior3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-interior5",
      "name": "INTERIOR5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13135776396244125,
          "pitch": 0.3666100396874121,
          "rotation": 0,
          "target": "8-interior6"
        },
        {
          "yaw": 2.9975697524615317,
          "pitch": 0.3217719862320916,
          "rotation": 0,
          "target": "6-interior4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-interior6",
      "name": "INTERIOR6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.4178496580834405,
        "pitch": 0.40486013410964183,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 2.5336424586516086,
          "pitch": 0.4576486625086815,
          "rotation": 0,
          "target": "9-interior7"
        },
        {
          "yaw": 2.3320926104678232,
          "pitch": 0.1961590486031497,
          "rotation": 0,
          "target": "10-parkir-belakang"
        },
        {
          "yaw": -0.6195462857054466,
          "pitch": 0.2551391997011603,
          "rotation": 0,
          "target": "7-interior5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-interior7",
      "name": "INTERIOR7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21278091285939027,
          "pitch": 0.35264262698050786,
          "rotation": 0,
          "target": "8-interior6"
        },
        {
          "yaw": 2.6758416901824216,
          "pitch": 0.42101033239650576,
          "rotation": 0,
          "target": "10-parkir-belakang"
        },
        {
          "yaw": 1.9886401283294433,
          "pitch": 0.12835923933813298,
          "rotation": 0,
          "target": "11-parkir-belakang2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parkir-belakang",
      "name": "PARKIR BELAKANG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.031163566897747685,
        "pitch": 0.01829964197246703,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -0.10011692718925147,
          "pitch": 0.18505741804999332,
          "rotation": 0,
          "target": "9-interior7"
        },
        {
          "yaw": 1.9655290688109162,
          "pitch": 0.26631616639805245,
          "rotation": 0,
          "target": "11-parkir-belakang2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-parkir-belakang2",
      "name": "PARKIR BELAKANG2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7263007139978033,
          "pitch": 0.21408823017458367,
          "rotation": 0,
          "target": "10-parkir-belakang"
        },
        {
          "yaw": -0.29395359841885593,
          "pitch": 0.11087274849291795,
          "rotation": 0,
          "target": "9-interior7"
        },
        {
          "yaw": 0.458839362388046,
          "pitch": 0.05122790775955721,
          "rotation": 0,
          "target": "2-parkir-samping"
        },
        {
          "yaw": 0.4263886620140305,
          "pitch": -0.06616949752781842,
          "rotation": 0,
          "target": "0-eksterior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
