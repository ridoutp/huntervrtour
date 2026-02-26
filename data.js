var APP_DATA = {
  "scenes": [
    {
      "id": "0-laundry-room",
      "name": "Laundry Room",
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
      "faceSize": 3180.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8960600269144177,
          "pitch": 0.34207837067654623,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-furnace-room",
      "name": "Furnace Room",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8925958815346444,
          "pitch": 0.18446419182254026,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway",
      "name": "Hallway",
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
      "faceSize": 2649.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.315788605571046,
          "pitch": 0.06711936555113596,
          "rotation": 0,
          "target": "1-furnace-room"
        },
        {
          "yaw": 1.088833113622286,
          "pitch": 0.32773984748533636,
          "rotation": 0,
          "target": "4-main-room"
        },
        {
          "yaw": -1.9122099530802803,
          "pitch": 0.07820466190584696,
          "rotation": 0,
          "target": "3-storage-room"
        },
        {
          "yaw": -0.08119814706728867,
          "pitch": 0.14417073438694494,
          "rotation": 0,
          "target": "0-laundry-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-storage-room",
      "name": "Storage Room",
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
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49333650743846746,
          "pitch": 0.2107034317865022,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-main-room",
      "name": "Main Room",
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
      "faceSize": 2694,
      "initialViewParameters": {
        "yaw": 1.1973272209994157,
        "pitch": 0,
        "fov": 1.334719009654728
      },
      "linkHotspots": [
        {
          "yaw": -1.7643135707222832,
          "pitch": -0.04216743517706689,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
