export default function QrCode() {
    return <svg width="95" height="95">
        <path className="qr-code" fill-rule="evenodd" fill="rgb(64, 73, 132)"
            d="M10.693,10.693 C11.032,21.524 11.694,35.276 7.776,41.798 C7.452,41.798 7.128,41.798 6.804,41.798 C5.508,41.474 4.212,41.150 2.916,40.826 C1.944,40.178 0.972,39.530 0.000,38.882 C0.324,26.895 0.648,14.904 0.972,2.916 C1.620,1.944 2.268,0.972 2.916,0.000 C14.904,0.324 26.895,0.648 38.882,0.972 C39.854,1.620 40.826,2.268 41.798,2.916 C41.798,4.536 41.798,6.156 41.798,7.776 C40.826,8.748 39.854,9.721 38.882,10.693 C29.486,10.693 20.088,10.693 10.693,10.693 ZM302.307,10.693 C291.476,11.032 277.724,11.694 271.202,7.776 C271.202,6.156 271.202,4.536 271.202,2.916 C272.174,1.944 273.146,0.972 274.118,0.000 C286.105,0.324 298.096,0.648 310.084,0.972 C311.056,1.620 312.028,2.268 313.000,2.916 C312.676,14.904 312.352,26.895 312.028,38.882 C311.380,39.854 310.732,40.826 310.084,41.798 C308.464,41.798 306.844,41.798 305.224,41.798 C304.252,40.826 303.279,39.854 302.307,38.882 C302.307,29.486 302.307,20.088 302.307,10.693 ZM21.385,23.329 C46.656,23.329 71.934,23.329 97.205,23.329 C96.881,48.600 96.557,73.878 96.233,99.149 C71.286,99.149 46.332,99.149 21.385,99.149 C21.385,73.878 21.385,48.600 21.385,23.329 ZM110.814,23.329 C112.758,23.653 114.702,23.977 116.646,24.301 C116.970,25.273 117.294,26.245 117.618,27.217 C118.279,30.699 117.565,31.602 114.702,34.022 C113.406,33.698 112.110,33.374 110.814,33.050 C109.842,32.402 108.869,31.754 107.898,31.106 C107.898,29.486 107.898,27.865 107.898,26.245 C108.869,25.273 109.842,24.301 110.814,23.329 ZM214.823,23.329 C240.094,23.329 265.372,23.329 290.643,23.329 C290.643,48.600 290.643,73.878 290.643,99.149 C265.372,98.825 240.094,98.501 214.823,98.177 C214.823,73.230 214.823,48.276 214.823,23.329 ZM129.283,76.792 C132.846,76.792 136.411,76.792 139.975,76.792 C139.709,69.415 139.712,60.965 141.919,56.379 C144.187,56.379 146.456,56.379 148.724,56.379 C149.048,57.351 149.372,58.323 149.696,59.295 C150.020,65.127 150.344,70.960 150.668,76.792 C154.232,76.792 157.796,76.792 161.360,76.792 C161.684,66.748 162.008,56.702 162.332,46.658 C163.304,46.334 164.276,46.010 165.248,45.686 C168.221,45.702 168.998,45.898 172.053,47.630 C172.053,50.222 172.053,52.815 172.053,55.407 C174.321,55.731 176.589,56.055 178.857,56.379 C180.153,57.027 181.449,57.675 182.745,58.323 C182.536,62.710 182.057,63.563 180.801,66.099 C177.885,66.099 174.969,66.099 172.053,66.099 C172.390,84.731 165.444,86.157 159.416,98.177 C157.148,98.177 154.880,98.177 152.612,98.177 C152.288,97.205 151.964,96.233 151.640,95.261 C151.316,92.993 150.992,90.724 150.668,88.457 C147.104,88.457 143.539,88.457 139.975,88.457 C140.752,104.800 141.630,115.777 130.255,120.534 C121.882,119.824 118.376,116.383 118.590,106.925 C121.359,101.537 123.471,100.507 129.283,98.177 C129.283,94.937 129.283,91.696 129.283,88.457 C125.719,88.457 122.154,88.457 118.590,88.457 C118.266,91.372 117.942,94.289 117.618,97.205 C115.998,97.853 114.378,98.501 112.758,99.149 C111.138,98.177 109.517,97.205 107.898,96.233 C108.221,92.021 108.546,87.808 108.870,83.596 C111.128,78.861 113.475,78.570 118.590,76.792 C118.590,69.664 118.590,62.534 118.590,55.407 C113.435,55.488 110.793,54.896 107.898,53.463 C108.187,48.031 108.888,47.788 110.814,44.714 C116.969,44.714 123.127,44.714 129.283,44.714 C130.160,34.357 144.101,29.849 150.668,37.910 C150.668,39.206 150.668,40.502 150.668,41.798 C149.696,42.770 148.724,43.742 147.752,44.714 C145.160,44.714 142.567,44.714 139.975,44.714 C136.573,59.811 129.065,49.776 129.283,76.792 ZM33.050,34.994 C33.050,52.489 33.050,69.989 33.050,87.484 C50.545,87.484 68.045,87.484 85.540,87.484 C85.540,69.989 85.540,52.489 85.540,34.994 C68.045,34.994 50.545,34.994 33.050,34.994 ZM226.488,34.994 C226.488,52.489 226.488,69.989 226.488,87.484 C243.983,87.484 261.483,87.484 278.978,87.484 C278.978,69.989 278.978,52.489 278.978,34.994 C261.483,34.994 243.983,34.994 226.488,34.994 ZM42.770,44.714 C53.786,45.038 64.804,45.362 75.820,45.686 C75.820,56.054 75.820,66.424 75.820,76.792 C64.804,76.792 53.786,76.792 42.770,76.792 C42.770,66.100 42.770,55.406 42.770,44.714 ZM193.438,55.407 C190.198,54.759 186.957,54.111 183.717,53.463 C183.717,51.843 183.717,50.222 183.717,48.602 C185.272,45.980 184.047,47.263 186.634,45.686 C194.800,41.940 200.520,47.561 204.130,51.519 C204.353,57.554 203.900,62.602 202.186,66.099 C197.799,65.890 196.946,65.411 194.410,64.155 C194.086,61.239 193.762,58.323 193.438,55.407 ZM237.180,44.714 C247.872,44.714 258.566,44.714 269.258,44.714 C269.258,55.406 269.258,66.100 269.258,76.792 C258.566,76.792 247.872,76.792 237.180,76.792 C237.180,66.100 237.180,55.406 237.180,44.714 ZM193.438,109.842 C190.522,109.518 187.605,109.194 184.689,108.870 C182.549,103.891 183.134,103.316 185.661,99.149 C188.253,99.149 190.846,99.149 193.438,99.149 C193.762,93.317 194.086,87.484 194.410,81.652 C195.706,80.032 197.002,78.412 198.298,76.792 C198.622,76.792 198.946,76.792 199.270,76.792 C200.890,77.764 202.511,78.736 204.130,79.708 C204.457,92.662 206.122,112.274 201.214,120.534 C199.918,120.534 198.622,120.534 197.326,120.534 C196.354,119.238 195.382,117.942 194.410,116.646 C194.086,114.378 193.762,112.110 193.438,109.842 ZM174.969,88.457 C176.913,88.457 178.857,88.457 180.801,88.457 C181.449,89.104 182.097,89.753 182.745,90.401 C182.536,94.788 182.057,95.641 180.801,98.177 C179.829,98.501 178.857,98.825 177.885,99.149 C174.903,97.697 174.760,98.066 173.025,95.261 C172.701,93.965 172.377,92.669 172.053,91.373 C173.025,90.401 173.997,89.428 174.969,88.457 ZM24.301,109.842 C25.921,110.166 27.542,110.490 29.161,110.814 C30.133,111.462 31.106,112.110 32.078,112.758 C32.078,114.378 32.078,115.998 32.078,117.618 C31.430,118.266 30.782,118.914 30.134,119.562 C27.866,119.562 25.597,119.562 23.329,119.562 C22.681,117.294 22.033,115.026 21.385,112.758 C22.357,111.786 23.329,110.814 24.301,109.842 ZM45.686,109.842 C47.630,109.842 49.575,109.842 51.519,109.842 C52.167,110.490 52.815,111.138 53.463,111.786 C53.253,116.173 52.775,117.026 51.519,119.562 C49.251,119.562 46.982,119.562 44.714,119.562 C44.066,117.294 43.418,115.026 42.770,112.758 C43.742,111.786 44.714,110.814 45.686,109.842 ZM88.457,109.842 C95.380,109.582 102.719,109.750 106.925,111.786 C106.925,114.054 106.925,116.322 106.925,118.590 C105.954,118.914 104.981,119.238 104.009,119.562 C99.150,119.886 94.288,120.210 89.429,120.534 C88.457,119.562 87.484,118.590 86.512,117.618 C86.512,115.998 86.512,114.378 86.512,112.758 C87.160,111.786 87.809,110.814 88.457,109.842 ZM182.745,141.919 C176.266,141.595 169.784,141.271 163.304,140.947 C161.164,135.969 161.749,135.394 164.276,131.227 C166.868,131.227 169.461,131.227 172.053,131.227 C171.702,122.501 171.991,114.713 174.969,109.842 C179.356,110.051 180.209,110.530 182.745,111.786 C183.636,124.629 200.651,129.700 192.466,149.696 C191.818,150.668 191.170,151.640 190.522,152.612 C185.611,151.994 185.704,152.146 183.717,148.724 C183.393,146.456 183.069,144.187 182.745,141.919 ZM204.130,163.304 C204.130,173.996 204.130,184.691 204.130,195.382 C208.018,195.058 211.907,194.734 215.795,194.410 C216.868,189.140 218.283,187.597 222.599,185.661 C231.023,185.338 239.449,185.013 247.873,184.689 C248.567,178.680 250.121,176.986 254.677,174.969 C258.889,174.969 263.102,174.969 267.314,174.969 C267.962,176.265 268.610,177.561 269.258,178.857 C268.286,180.801 267.314,182.746 266.342,184.689 C240.645,186.179 246.981,233.017 247.873,260.509 C251.113,261.157 254.353,261.805 257.593,262.453 C257.593,264.721 257.593,266.990 257.593,269.258 C248.296,273.156 244.683,280.416 240.096,281.894 C235.237,282.218 230.375,282.542 225.516,282.866 C224.446,289.132 222.370,289.335 218.711,292.587 C204.146,293.374 197.532,292.830 193.438,282.866 C194.433,275.440 196.944,272.477 204.130,271.202 C204.130,264.074 204.130,256.944 204.130,249.817 C200.567,249.817 197.002,249.817 193.438,249.817 C193.789,258.543 193.500,266.330 190.522,271.202 C189.226,271.202 187.929,271.202 186.634,271.202 C185.662,269.906 184.689,268.610 183.717,267.314 C183.393,261.482 183.069,255.648 182.745,249.817 C179.182,249.817 175.617,249.817 172.053,249.817 C171.405,253.057 170.757,256.297 170.109,259.537 C167.841,259.537 165.572,259.537 163.304,259.537 C162.980,258.565 162.656,257.593 162.332,256.621 C162.332,252.733 162.332,248.844 162.332,244.957 C166.609,239.187 172.060,238.610 182.745,239.124 C185.135,229.784 189.014,233.880 193.438,228.432 C193.438,217.416 193.438,206.397 193.438,195.382 C188.578,195.058 183.717,194.734 178.857,194.410 C174.288,192.201 164.560,182.463 162.332,177.885 C162.008,175.941 161.684,173.997 161.360,172.053 C162.656,169.785 163.953,167.516 165.248,165.248 C172.455,163.266 183.471,163.186 193.438,163.304 C194.995,156.591 197.085,153.897 204.130,152.612 C203.949,129.134 220.003,126.922 228.432,109.842 C232.819,110.051 233.672,110.530 236.208,111.786 C238.191,120.886 235.385,124.975 231.348,130.255 C222.941,132.890 224.616,139.651 214.823,141.919 C214.823,145.483 214.823,149.048 214.823,152.612 C222.797,153.545 224.180,156.827 226.488,163.304 C229.403,163.628 232.320,163.952 235.236,164.276 C235.884,165.896 236.532,167.517 237.180,169.137 C236.208,170.757 235.236,172.377 234.264,173.997 C221.278,174.716 218.041,172.379 214.823,163.304 C211.259,163.304 207.694,163.304 204.130,163.304 ZM260.509,109.842 C262.453,109.842 264.398,109.842 266.342,109.842 C267.314,110.814 268.286,111.786 269.258,112.758 C269.258,114.054 269.258,115.350 269.258,116.646 C267.962,117.618 266.666,118.590 265.370,119.562 C260.926,121.287 258.843,118.548 258.565,112.758 C259.213,111.786 259.861,110.814 260.509,109.842 ZM279.950,131.227 C277.682,130.903 275.414,130.579 273.146,130.255 C271.850,129.607 270.554,128.959 269.258,128.311 C269.258,126.691 269.258,125.070 269.258,123.450 C270.230,122.478 271.202,121.506 272.174,120.534 C274.766,120.534 277.358,120.534 279.950,120.534 C280.274,117.942 280.598,115.350 280.922,112.758 C281.570,111.786 282.218,110.814 282.866,109.842 C284.486,110.166 286.107,110.490 287.727,110.814 C288.699,111.462 289.671,112.110 290.643,112.758 C290.986,123.167 291.451,135.736 287.727,141.919 C287.403,141.919 287.079,141.919 286.755,141.919 C285.459,141.919 284.162,141.919 282.866,141.919 C281.895,140.947 280.922,139.975 279.950,139.003 C279.950,136.411 279.950,133.819 279.950,131.227 ZM67.071,120.534 C69.015,120.534 70.960,120.534 72.904,120.534 C73.552,121.182 74.200,121.830 74.848,122.478 C74.558,127.910 73.857,128.153 71.932,131.227 C70.636,131.227 69.339,131.227 68.043,131.227 C67.072,129.931 66.099,128.634 65.127,127.339 C65.127,126.367 65.127,125.394 65.127,124.422 C65.775,123.126 66.423,121.830 67.071,120.534 ZM150.668,131.227 C150.668,134.791 150.668,138.355 150.668,141.919 C157.330,141.819 158.525,142.379 161.360,145.807 C161.360,147.103 161.360,148.400 161.360,149.696 C160.388,150.668 159.416,151.640 158.444,152.612 C155.852,152.612 153.260,152.612 150.668,152.612 C150.768,159.274 150.208,160.469 146.780,163.304 C145.484,163.304 144.187,163.304 142.891,163.304 C141.919,162.332 140.947,161.360 139.975,160.388 C139.975,157.796 139.975,155.204 139.975,152.612 C109.322,153.122 103.404,151.301 86.512,139.003 C86.722,134.616 87.200,133.763 88.457,131.227 C100.824,130.468 105.582,132.501 107.898,141.919 C111.461,141.919 115.026,141.919 118.590,141.919 C118.914,139.327 119.238,136.735 119.562,134.143 C120.210,133.171 120.858,132.199 121.506,131.227 C123.126,131.227 124.747,131.227 126.366,131.227 C127.014,131.875 127.663,132.523 128.311,133.171 C128.635,136.087 128.959,139.003 129.283,141.919 C132.846,141.919 136.411,141.919 139.975,141.919 C140.299,136.412 140.623,130.902 140.947,125.394 C142.891,123.774 144.836,122.154 146.780,120.534 C150.667,120.858 154.556,121.182 158.444,121.506 C159.416,122.154 160.388,122.802 161.360,123.450 C161.360,125.070 161.360,126.691 161.360,128.311 C160.712,128.959 160.064,129.607 159.416,130.255 C156.500,130.579 153.584,130.903 150.668,131.227 ZM258.565,131.227 C261.157,131.227 263.750,131.227 266.342,131.227 C267.314,132.199 268.286,133.171 269.258,134.143 C268.640,139.054 268.792,138.961 265.370,140.947 C263.102,141.271 260.833,141.595 258.565,141.919 C258.241,144.835 257.917,147.752 257.593,150.668 C256.621,150.992 255.649,151.316 254.677,151.640 C253.381,151.640 252.085,151.640 250.789,151.640 C249.817,150.992 248.845,150.344 247.873,149.696 C247.515,141.389 245.780,124.989 250.789,121.506 C252.409,121.182 254.029,120.858 255.649,120.534 C256.297,121.182 256.945,121.830 257.593,122.478 C257.917,125.394 258.241,128.311 258.565,131.227 ZM71.932,141.919 C74.848,142.243 77.764,142.567 80.680,142.891 C82.209,144.569 84.836,151.490 86.512,152.612 C91.530,155.970 92.882,151.481 96.233,156.500 C96.217,159.473 96.022,160.250 94.289,163.304 C78.398,164.090 68.739,164.595 64.155,153.584 C65.451,150.344 66.748,147.103 68.043,143.863 C69.339,143.215 70.636,142.567 71.932,141.919 ZM229.404,141.919 C231.672,142.567 233.940,143.215 236.208,143.863 C236.208,146.131 236.208,148.400 236.208,150.668 C235.236,150.992 234.264,151.316 233.292,151.640 C231.348,151.640 229.404,151.640 227.460,151.640 C227.136,149.048 226.812,146.455 226.488,143.863 C227.460,143.215 228.432,142.567 229.404,141.919 ZM24.301,152.612 C32.388,152.271 38.362,152.813 42.770,155.528 C42.770,155.852 42.770,156.176 42.770,156.500 C42.446,157.796 42.122,159.092 41.798,160.388 C41.150,161.360 40.502,162.332 39.854,163.304 C31.767,163.645 25.793,163.103 21.385,160.388 C21.385,158.768 21.385,157.148 21.385,155.528 C22.357,154.556 23.329,153.584 24.301,152.612 ZM279.950,173.997 C277.358,173.673 274.766,173.349 272.174,173.025 C271.202,172.377 270.230,171.729 269.258,171.081 C270.230,168.489 271.202,165.896 272.174,163.304 C274.766,163.304 277.358,163.304 279.950,163.304 C279.850,156.642 280.410,155.447 283.839,152.612 C285.134,152.612 286.431,152.612 287.727,152.612 C288.699,153.584 289.671,154.556 290.643,155.528 C290.986,165.938 291.451,178.506 287.727,184.689 C287.403,184.689 287.079,184.689 286.755,184.689 C285.459,184.365 284.162,184.041 282.866,183.717 C281.895,183.069 280.922,182.421 279.950,181.773 C279.950,179.181 279.950,176.589 279.950,173.997 ZM46.658,163.304 C47.630,163.304 48.603,163.304 49.575,163.304 C50.870,164.600 52.167,165.897 53.463,167.193 C53.139,168.488 52.815,169.785 52.491,171.081 C51.843,172.053 51.195,173.025 50.547,173.997 C48.927,173.997 47.306,173.997 45.686,173.997 C45.038,173.349 44.390,172.701 43.742,172.053 C43.742,170.433 43.742,168.812 43.742,167.193 C44.714,165.897 45.686,164.600 46.658,163.304 ZM104.981,163.304 C108.869,163.628 112.758,163.952 116.646,164.276 C116.970,165.248 117.294,166.221 117.618,167.193 C117.602,170.166 117.407,170.942 115.674,173.997 C105.958,174.374 105.699,179.684 101.093,184.689 C95.057,184.912 90.009,184.459 86.512,182.745 C86.836,180.801 87.160,178.857 87.484,176.913 C89.031,175.092 102.232,165.440 104.981,163.304 ZM25.273,173.997 C33.143,173.665 38.512,174.283 42.770,176.913 C42.770,177.237 42.770,177.561 42.770,177.885 C42.446,179.181 42.122,180.477 41.798,181.773 C41.150,182.745 40.502,183.717 39.854,184.689 C31.767,185.030 25.793,184.488 21.385,181.773 C21.385,181.449 21.385,181.125 21.385,180.801 C21.709,179.181 22.033,177.561 22.357,175.941 C23.329,175.293 24.301,174.645 25.273,173.997 ZM64.155,195.382 C64.155,191.818 64.155,188.253 64.155,184.689 C60.915,184.041 57.675,183.393 54.435,182.745 C54.435,181.125 54.435,179.505 54.435,177.885 C55.990,175.262 54.765,176.546 57.351,174.969 C61.239,174.969 65.128,174.969 69.016,174.969 C75.399,180.020 80.064,190.465 85.540,195.382 C90.038,199.420 91.962,192.861 97.205,201.214 C96.233,202.834 95.261,204.455 94.289,206.075 C82.182,206.340 63.169,208.202 54.435,204.130 C54.435,202.511 54.435,200.890 54.435,199.270 C55.990,196.647 54.765,197.931 57.351,196.354 C59.619,196.030 61.887,195.706 64.155,195.382 ZM150.668,228.432 C150.668,220.980 150.668,213.526 150.668,206.075 C144.512,205.427 138.354,204.778 132.199,204.130 C129.310,196.352 123.798,193.801 118.590,188.578 C118.318,181.381 119.121,177.828 121.506,173.997 C123.450,174.321 125.395,174.645 127.339,174.969 C131.202,184.131 137.675,186.311 139.975,195.382 C161.035,195.056 152.249,199.218 161.360,206.075 C163.286,207.524 177.367,207.973 180.801,209.963 C183.258,216.880 182.297,221.055 178.857,226.488 C173.025,227.136 167.192,227.784 161.360,228.432 C158.470,242.783 151.593,233.570 139.975,239.124 C134.841,250.959 127.092,251.949 118.590,243.012 C118.337,235.881 119.049,232.868 123.450,230.376 C128.234,226.786 142.580,228.154 150.668,228.432 ZM143.863,173.997 C146.131,174.969 148.400,175.941 150.668,176.913 C150.668,177.237 150.668,177.561 150.668,177.885 C150.668,179.181 150.668,180.477 150.668,181.773 C149.372,182.745 148.075,183.717 146.780,184.689 C145.484,184.365 144.187,184.041 142.891,183.717 C141.919,183.069 140.947,182.421 139.975,181.773 C140.623,179.505 141.271,177.237 141.919,174.969 C142.567,174.645 143.215,174.321 143.863,173.997 ZM46.658,184.689 C48.926,185.661 51.195,186.634 53.463,187.606 C53.253,191.993 52.775,192.846 51.519,195.382 C46.087,195.092 45.844,194.391 42.770,192.466 C42.770,192.142 42.770,191.818 42.770,191.494 C43.094,189.874 43.418,188.253 43.742,186.634 C44.714,185.986 45.686,185.337 46.658,184.689 ZM25.273,195.382 C33.134,195.069 38.397,195.781 42.770,198.298 C42.561,202.685 42.082,203.538 40.826,206.075 C35.318,205.751 29.809,205.426 24.301,205.102 C22.304,203.785 22.737,204.014 21.385,202.186 C22.388,197.835 22.989,197.940 25.273,195.382 ZM118.590,206.075 C124.367,206.036 126.147,206.367 128.311,209.963 C128.989,213.703 128.282,213.654 126.366,216.767 C123.775,216.767 121.182,216.767 118.590,216.767 C118.620,224.538 117.378,224.879 113.730,228.432 C113.406,228.432 113.082,228.432 112.758,228.432 C111.138,227.460 109.517,226.487 107.898,225.516 C107.629,216.043 106.817,202.756 109.842,196.354 C112.110,196.354 114.378,196.354 116.646,196.354 C116.970,197.326 117.294,198.298 117.618,199.270 C117.942,201.538 118.266,203.807 118.590,206.075 ZM273.146,195.382 C277.455,196.370 277.050,196.024 278.978,199.270 C278.978,200.566 278.978,201.862 278.978,203.158 C278.330,204.130 277.682,205.103 277.034,206.075 C271.894,205.816 272.348,206.300 270.230,203.158 C269.107,199.849 269.878,199.114 271.202,196.354 C271.850,196.030 272.498,195.706 273.146,195.382 ZM205.102,206.075 C205.102,217.090 205.102,228.109 205.102,239.124 C215.794,238.800 226.489,238.476 237.180,238.152 C236.856,227.461 236.532,216.766 236.208,206.075 C225.841,206.075 215.470,206.075 205.102,206.075 ZM283.839,206.075 C287.620,207.186 287.789,206.953 289.671,209.963 C289.671,222.598 289.671,235.237 289.671,247.873 C288.699,248.197 287.727,248.521 286.755,248.845 C283.782,248.829 283.005,248.634 279.950,246.901 C279.685,234.794 277.823,215.780 281.894,207.047 C282.542,206.723 283.191,206.399 283.839,206.075 ZM21.385,216.767 C46.656,217.091 71.934,217.415 97.205,217.739 C97.205,242.686 97.205,267.640 97.205,292.587 C71.934,292.587 46.656,292.587 21.385,292.587 C21.385,267.316 21.385,242.038 21.385,216.767 ZM219.683,216.767 C223.936,218.286 224.387,219.074 226.488,222.599 C224.621,225.792 223.815,226.539 220.655,228.432 C219.035,227.460 217.415,226.487 215.795,225.516 C215.471,224.544 215.147,223.571 214.823,222.599 C216.443,220.655 218.063,218.711 219.683,216.767 ZM33.050,228.432 C33.050,245.927 33.050,263.427 33.050,280.922 C50.545,280.922 68.045,280.922 85.540,280.922 C85.540,263.427 85.540,245.927 85.540,228.432 C68.045,228.432 50.545,228.432 33.050,228.432 ZM42.770,239.124 C53.786,239.124 64.804,239.124 75.820,239.124 C75.496,249.816 75.172,260.510 74.848,271.202 C64.156,271.202 53.462,271.202 42.770,271.202 C42.770,260.510 42.770,249.816 42.770,239.124 ZM260.509,249.817 C264.721,250.141 268.934,250.465 273.146,250.789 C274.711,251.544 289.333,262.860 290.643,264.398 C289.995,266.341 289.347,268.286 288.699,270.230 C273.984,273.184 268.313,263.294 258.565,257.593 C258.565,255.973 258.565,254.353 258.565,252.733 C259.213,251.761 259.861,250.789 260.509,249.817 ZM110.814,260.509 C113.082,261.157 115.350,261.805 117.618,262.453 C117.618,264.721 117.618,266.990 117.618,269.258 C116.322,269.906 115.026,270.554 113.730,271.202 C111.786,270.230 109.841,269.258 107.898,268.286 C107.898,266.666 107.898,265.045 107.898,263.425 C108.869,262.454 109.842,261.481 110.814,260.509 ZM139.975,271.202 C139.651,274.118 139.327,277.034 139.003,279.950 C137.707,280.598 136.411,281.246 135.115,281.894 C133.171,280.922 131.227,279.950 129.283,278.978 C129.283,278.654 129.283,278.330 129.283,278.006 C129.607,274.442 129.931,270.877 130.255,267.314 C132.199,265.046 134.143,262.777 136.087,260.509 C143.284,260.238 146.836,261.040 150.668,263.425 C150.668,263.749 150.668,264.074 150.668,264.398 C150.020,266.341 149.372,268.286 148.724,270.230 C145.808,270.554 142.891,270.878 139.975,271.202 ZM10.693,302.307 C21.524,301.968 35.276,301.306 41.798,305.224 C41.798,305.548 41.798,305.872 41.798,306.196 C41.474,307.492 41.150,308.788 40.826,310.084 C40.178,311.056 39.530,312.028 38.882,313.000 C26.895,312.676 14.904,312.352 2.916,312.028 C1.944,311.380 0.972,310.732 0.000,310.084 C0.324,298.096 0.648,286.105 0.972,274.118 C1.620,273.146 2.268,272.174 2.916,271.202 C4.536,271.202 6.156,271.202 7.776,271.202 C8.748,272.174 9.721,273.146 10.693,274.118 C10.693,283.514 10.693,292.912 10.693,302.307 ZM161.360,281.894 C161.260,275.232 161.820,274.037 165.248,271.202 C166.544,271.526 167.841,271.850 169.137,272.174 C170.109,272.822 171.081,273.470 172.053,274.118 C171.729,278.006 171.405,281.895 171.081,285.783 C169.477,289.335 168.759,289.972 165.248,291.615 C157.670,293.951 144.996,292.797 139.975,289.671 C140.947,287.079 141.919,284.486 142.891,281.894 C149.047,281.894 155.205,281.894 161.360,281.894 ZM302.307,302.307 C301.968,291.476 301.306,277.724 305.224,271.202 C305.548,271.202 305.872,271.202 306.196,271.202 C307.492,271.526 308.788,271.850 310.084,272.174 C311.056,272.822 312.028,273.470 313.000,274.118 C312.676,286.105 312.352,298.096 312.028,310.084 C311.380,311.056 310.732,312.028 310.084,313.000 C298.096,312.676 286.105,312.352 274.118,312.028 C273.146,311.380 272.174,310.732 271.202,310.084 C272.174,307.492 273.146,304.899 274.118,302.307 C283.514,302.307 292.912,302.307 302.307,302.307 ZM110.814,281.894 C113.082,282.542 115.350,283.191 117.618,283.839 C118.193,288.593 117.796,288.891 115.674,292.587 C115.350,292.587 115.026,292.587 114.702,292.587 C113.406,292.263 112.110,291.939 110.814,291.615 C109.842,290.967 108.869,290.319 107.898,289.671 C107.898,288.051 107.898,286.430 107.898,284.811 C108.869,283.839 109.842,282.866 110.814,281.894 ZM250.789,281.894 C253.057,282.542 255.325,283.191 257.593,283.839 C258.168,288.593 257.771,288.891 255.649,292.587 C255.325,292.587 255.001,292.587 254.677,292.587 C253.381,292.263 252.085,291.939 250.789,291.615 C249.817,290.967 248.845,290.319 247.873,289.671 C247.873,288.051 247.873,286.430 247.873,284.811 C248.845,283.839 249.817,282.866 250.789,281.894 ZM282.866,281.894 C285.458,282.866 288.051,283.839 290.643,284.811 C290.643,285.135 290.643,285.459 290.643,285.783 C290.643,287.079 290.643,288.375 290.643,289.671 C289.347,290.643 288.051,291.615 286.755,292.587 C285.459,292.587 284.162,292.587 282.866,292.587 C281.895,291.615 280.922,290.643 279.950,289.671 C279.950,288.051 279.950,286.430 279.950,284.811 C280.922,283.839 281.895,282.866 282.866,281.894 Z" />
    </svg>
}