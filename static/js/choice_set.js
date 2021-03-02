var choice_sets = [
  {
    "": 1,
    "X": 130,
    "category": "burger",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/PGWCEDcxItSpV6aQt3bBlw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/K-fZU2R84lnsZA3LJmZUbA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/7m5coDHyqb9EPj9C1ZjNdw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Qtdxok91r09Jj657j7BdxQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/fgbA3fGinQrMn4UFJlKI8w/o.jpg']",
    "names": "[u'BRGR Truck', u\"Bill's Bar & Burger\", u'Courthouse Tavern', u\"Winghart's Burger & Whiskey Bar\", u\"August Henry's Burger Bar\"]",
    "num_reviews": [
      8,
      64,
      17,
      277,
      68
    ],
    "prices": [
      2,
      2,
      2,
      2,
      2
    ],
    "stars": [
      3.5,
      3,
      3,
      4,
      3.5
    ],
    "mean_rating": 3.4,
    "num_options": 5
  },
  {
    "": 2,
    "X": 502,
    "category": "chinese",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/R5lZ66UaAlCX5717b19KYA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/dZOdyZzPx-n1KCc4p1xsQw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/kbhfx3WGhhGemKO_ifGZiw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/5_lKToSH1xwFPPkP3OApYw/o.jpg']",
    "names": "[u'China King', u'Soho Bistro', u'China Shuttle', u'Rice Inc - Chinese Cuisine']",
    "num_reviews": [
      8,
      132,
      6,
      6
    ],
    "prices": [
      1,
      2,
      1,
      3
    ],
    "stars": "[3.  3.5 2.  2. ]",
    "mean_rating": 2.625,
    "num_options": 4
  },
  {
    "": 3,
    "X": 241,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/9hBy5MDh5vMP00BV5pWATw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/VDo-lRBCn2j0P5s4MYSKKg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/LguH7_gotZspLpdVPOv5MA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/lBJUOI_4JQBiHST35y2Lsg/o.jpg']",
    "names": "[u'Asian Cafe Express', u'Kong  Fu Gyoza', u\"Heng's Kitchen\", u'Mekong Plaza']",
    "num_reviews": [
      449,
      21,
      27,
      77
    ],
    "prices": [
      1,
      1,
      1,
      2
    ],
    "stars": "[4.  4.  4.5 4. ]",
    "mean_rating": 4.125,
    "num_options": 4
  },
  {
    "": 4,
    "X": 731,
    "category": "indian",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/uarKbgy9BghIt2LPOhcczA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/5T98zqpPbjx6eXvIHCNk7A/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/TVa0P_Ie-_Ni1cksohUGmg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/yJrjudKP6daPT2ghqraCMQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sm8yWYrrTI32VVuS466rsw/o.jpg']",
    "names": "[u\"Sree's Foods\", u'Indian Spices', u'Mezbaan Indian Cuisine', u'India Palace Cuisine', u'Curry Leaf Indian Bistro']",
    "num_reviews": [
      50,
      54,
      18,
      29,
      5
    ],
    "prices": [
      1,
      2,
      1,
      2,
      1
    ],
    "stars": "[3.5 3.5 2.5 3.5 3. ]",
    "mean_rating": 3.2,
    "num_options": 5
  },
  {
    "": 5,
    "X": 564,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/b8WXcTurKkNrJ0mFbgGNsw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ny526zT84T5ZfzYcy6WcqQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/pJ6Eo5GZfcUs6ENYOCOKEA/o.jpg']",
    "names": "[u'Sir Pizza', u\"Adrian's Pizza\", u\"Pomodoro's\"]",
    "num_reviews": [
      9,
      3,
      11
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4. 1. 4.]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 6,
    "X": 516,
    "category": "japanese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/GxpVtmS54plJ4Ykri4dE7g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/SkRDvuZ6y1E3rYBANfadjQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/X02kdtr_0wj-PGxPsziYqQ/o.jpg']",
    "names": "[u'Sea Saw', u'Posh Improvisational Cuisine', u'Sarku Japan']",
    "num_reviews": [
      24,
      153,
      7
    ],
    "prices": [
      4,
      4,
      1
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 7,
    "X": 781,
    "category": "thai",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/g3AjIWGi0Qo_xbqp-AdBLQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/l6p8z6_2kfWWHprZTZUWPA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VT6O7WVA-FpeYm3zvC90VA/o.jpg']",
    "names": "[u'Thai Gourmet', u'Thai Cuisine', u'Hug Thai']",
    "num_reviews": [
      165,
      223,
      12
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 9,
    "X": 498,
    "category": "american",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/0i00XgEWQOyzucxgAhLDuw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/kf33bLpwEGvuCoIRN1A_MQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/9Oq6r1zA5QFEQIuDhKuy9w/o.jpg']",
    "names": "[u'Dish Deli & Catering', u'Lolita', u'La Tortilla Feliz']",
    "num_reviews": [
      6,
      140,
      8
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.5 4.  4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 10,
    "X": 534,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/a-7nmS6lC3d8O835crVKKA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/eS541a7VloiOpKg5NKL5UQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/vIAe2Ij76EnCRbRgi3nxKw/o.jpg']",
    "names": "[u'Matsuda Japanese Cuisine', u'Hyakka Japanese Cuisine', u'Naniwa-Taro']",
    "num_reviews": [
      186,
      7,
      18
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[3.  2.  3.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 11,
    "X": 777,
    "category": "mexican",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/5qEPQoJnaclE23bt1AGK0Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/7tm83CLrA4T1TUH_LWg3kg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/8P1rqSwdKyYL_NalG19CFQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/dy9Do5MCG5fW0cVkoqLZgg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/AYThjnvXz_VjVg8fN01GrA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/tKTs5kiOTkaLvp4xwxNMcg/o.jpg']",
    "names": "[u'La Pupusa Loca', u'La Reyna Mexican Restaurant & Mariscos', u'Esmeralda Cafe', u'Rilibertos Fresh Mexican Food', u'Santa Ana Cafe', u'Mariscos La Isla de Mexcaltitan']",
    "num_reviews": [
      6,
      14,
      4,
      4,
      4,
      2
    ],
    "prices": [
      2,
      2,
      1,
      1,
      1,
      2
    ],
    "stars": "[2.5 3.5 4.5 3.5 2.  3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 6
  },
  {
    "": 12,
    "X": 66,
    "category": "burger",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/BIaIUo8JS385EkgGrd7YjQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/n5gvc0J709LqtxC2M_7lQw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/tnvywPsWAsqE8I65SDzPAg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IFPals1WzW7N2ftdq13aqg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/noQsubYZXb8P4h4P-AHZUQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/3WSutMQkLha_Isr5a_1kGA/o.jpg']",
    "names": "[u'City Grill', u'OTB Bicycle Caf\\xe9', u\"Winghart's Burger & Whiskey Bar\", u\"Mullen's\", u'The Pickle Barrel', u'J & L Grill Company']",
    "num_reviews": [
      9,
      106,
      75,
      9,
      5,
      19
    ],
    "prices": [
      2,
      2,
      2,
      1,
      1,
      2
    ],
    "stars": [
      3.5,
      3.5,
      4,
      2,
      4,
      2.5
    ],
    "mean_rating": 3.25,
    "num_options": 6
  },
  {
    "": 13,
    "X": 948,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/HxM_YXkr4KdrbhCQ8Pq0bg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/tSrOvyWAl0Zm-XI4tlvbdg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/mcTcBryLaSzSg93uqO2vLA/o.jpg']",
    "names": "[u'HD Asian Bistro', u'Pacific Moon Chinese Cuisine', u\"Chen's Garden\"]",
    "num_reviews": [
      38,
      35,
      30
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[3.5 3.5 3. ]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 15,
    "X": 265,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/92hwalDjY5ujdiNzmoGXlQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/N4EqrNZJeCVp_wtfSucMMQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/gZIg4Ln4_-DCcaQzi1rQGg/o.jpg']",
    "names": "[u'Pho Tai Bac', u'Little Saigon', u'Kimpo']",
    "num_reviews": [
      93,
      112,
      10
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 16,
    "X": 973,
    "category": "italian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/LVx9Q6yjEt0XDQNZbk_I4g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/noSPVMM2ai_pg7U9yxAV8w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/hIy72z7IymUpoaXYIZNhJQ/o.jpg']",
    "names": "[u'Tutti Santi Ristorante Italiano', u\"Auntie Pasto's\", u\"Miele's Italian and Banquet Hall\"]",
    "num_reviews": [
      44,
      19,
      5
    ],
    "prices": [
      3,
      2,
      2
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 17,
    "X": 144,
    "category": "french",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/h3bd3DkPLvvGRIPzJJ6zYA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/cGkGrebjCXY0rhatQs_G8w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/SMmOZnu6asv2eDoDruoxUw/o.jpg']",
    "names": "[u'Le Petit Triangle Caf\\xe9', u'Le Oui Oui', u'The Black Pig']",
    "num_reviews": [
      313,
      4,
      110
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 18,
    "X": 1028,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/qyJZ-MhPOuw1HWNvLlIlFw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/-YnbnevauBBD0h17zrEMSQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/r6m5wl_Mqp2r8C5x0MQ-Vg/o.jpg']",
    "names": "[u'Sushi Osaka', u'Toji Sushi', u'Gohyang Restaurant']",
    "num_reviews": [
      7,
      37,
      8
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 4.  4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 19,
    "X": 998,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/5JMiTus0EQKk5qiMHdbr5g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/A5Q5ali2OQhYQTzmdCt_nA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/tZSD8P8IVUiS6a2AOZdayQ/o.jpg']",
    "names": "[u'La Bamba Mexican Grill Restaurant', u'La Fondita', u\"Taqueria y Neveria Ana's Mexican Food\"]",
    "num_reviews": [
      29,
      6,
      3
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[5. 3. 5.]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 20,
    "X": 119,
    "category": "french",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/cxgDsxmqoZxMljdsSP80Lg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/SzxtJ9KaI_-gyeEjijwXzQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/WPDHX9V6HumnHypND0sj-A/o.jpg']",
    "names": "[u'Beau Lieu Bistro', u'Lafayette Bistro', u'Le Bar A Soupe']",
    "num_reviews": [
      6,
      12,
      3
    ],
    "prices": [
      4,
      3,
      1
    ],
    "stars": "[5.  3.  4.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 22,
    "X": 454,
    "category": "american",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/eq6FzuwiQE9aL64FbfB0SA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/t9Oc7MsjOsPiKFBEFaroxg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/-iLnzlvDQc15KqWoip3lPA/o.jpg']",
    "names": "[u'Larchmere Tavern', u'Menu6', u'Fire']",
    "num_reviews": [
      7,
      10,
      88
    ],
    "prices": [
      2,
      3,
      3
    ],
    "stars": "[3.5 2.5 4. ]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 23,
    "X": 589,
    "category": "american",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/Z4_GZVNXhN1jmIn6auTxkg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/QMcZAjVtJyIsyIKOo5406w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/mN0982mO25e5l8U-0TbalQ/o.jpg']",
    "names": "[u'American Cafe', u\"Rock & Rita's\", u'Big Burger']",
    "num_reviews": [
      2,
      54,
      2
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[1.  2.5 3. ]",
    "mean_rating": 2.16666666666667,
    "num_options": 3
  },
  {
    "": 24,
    "X": 882,
    "category": "mexican",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/_KN4aRv6Gem5D6msDkilBQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/nVzYVc3zMnfuI6PSaXuRAg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/nhvmPJl9PNljyEj1hzrh2g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/_DSp8uwulJgUFktYjL_5iA/o.jpg']",
    "names": "[u'El Amigo Mexican Restaurant', u'Taco Express', u'Amigo Taqueria', u'Los Arcos Mexican Restaurant']",
    "num_reviews": [
      51,
      11,
      4,
      23
    ],
    "prices": [
      2,
      1,
      1,
      1
    ],
    "stars": [
      4,
      4.5,
      5,
      4
    ],
    "mean_rating": 4.375,
    "num_options": 4
  },
  {
    "": 25,
    "X": 521,
    "category": "breakfast",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/pBQq7jmS4gpKJLw-BZXmlQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/fxOFGFd0dmdu6vZ27GWFOA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/aT7xfUKDqAZlaTWvk0YQ5g/o.jpg']",
    "names": "[u\"Zada Jane's Corner Cafe\", u\"John's Country Kitchen\", u\"Sammy's Deli Restaurants\"]",
    "num_reviews": [
      222,
      33,
      18
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 26,
    "X": 695,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/nFvF33S8dFFT-kSfp_VqyQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/yP844drkzrbO5efWcD_iZw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/trvVKX5iXFgZIBjbsbVhuA/o.jpg']",
    "names": "[u'Siam Princess', u\"Lee's Thai Spring Roll\", u'Longrain Restaurant']",
    "num_reviews": [
      6,
      12,
      6
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 28,
    "X": 533,
    "category": "italian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/T1r33hE-VTTZSyn8p4TGjA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/es0Vx17YxvhwE__MnbgioQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/_NqL01ExNAfP9o2qicLJFA/o.jpg']",
    "names": "[u'Al Dente', u'Uncle Joes Family Restaurant', u'Aldente Ristorante Italiano']",
    "num_reviews": [
      15,
      42,
      4
    ],
    "prices": [
      3,
      2,
      3
    ],
    "stars": "[2.5 3.5 2.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 29,
    "X": 213,
    "category": "chinese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/OgWiNMzR1H9cLeGIWuDicQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/142nZM2i9C7qYQ4ZISPVmg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ziQiza0wa-e_FRy1M934YA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/LpdE_lwUzaxPt_97PBmtIQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VxCxYmlEOaP7LnkQHxu8Sg/o.jpg']",
    "names": "[u'Red 8', u'Jade At the Palazzo', u'Wing Lei', u'Zine Noodles Dim Sum', u'Chinese Gourmet Express']",
    "num_reviews": [
      179,
      9,
      70,
      128,
      1
    ],
    "prices": [
      2,
      2,
      4,
      2,
      3
    ],
    "stars": "[3.  3.  3.5 3.  2. ]",
    "mean_rating": 2.9,
    "num_options": 5
  },
  {
    "": 30,
    "X": 394,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/D7v6LFsoYo9UytcwSzd1lg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/2AAPhTkIsmlsA3fZ-wrfYQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/R0ArKoBkkUKW2qapbSDZmg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sj6PeIX916HvUBp3m8n8OQ/o.jpg']",
    "names": "[u'Zesty Zzeeks Pizza and Wings', u\"Chuck E Cheese's Pizza\", u'A Slice of Bella', u'Nellos Pizza']",
    "num_reviews": [
      28,
      6,
      9,
      89
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": "[4.  3.  3.5 4. ]",
    "mean_rating": 3.625,
    "num_options": 4
  },
  {
    "": 31,
    "X": 734,
    "category": "hawaiian",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/Ls8DN1rw-29UBKia2bl7kg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/lAW88aIOwsvpbh8ZyGgGNw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/N7wrq6zgm5xcJsQHoqaO3w/o.jpg']",
    "names": "[u'Rice Trax Teriyaki Grill', u'Ohana Hawaiian BBQ', u'#1 Hawaiian Barbecue']",
    "num_reviews": [
      51,
      59,
      13
    ],
    "prices": [
      1,
      1,
      3
    ],
    "stars": "[3.5 4.  3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 32,
    "X": 285,
    "category": "french",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/sdwZ7Qya91fdWm_S9kcP_g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/jdfSVzn2KxafsP7bH7_BPQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/eAXuQt8b_-NJXmNaS4wxoA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/UCHCzNakH8WtqtBTzzHi7w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/At9Nw7aTLaG09LgdXUutzA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Ci0QyGvQuDqFbcuhzZz5tg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/9PBdI_hLMqe86iO6Qm5YlA/o.jpg']",
    "names": "[u'Bistro 2210', u'Avec Bistro', u'Q Haute Cuisine', u'La Chaumiere Restaurant', u'Hungry Baby?', u'Saint Germain', u'Fleur De Sel']",
    "num_reviews": [
      11,
      19,
      13,
      7,
      3,
      7,
      8
    ],
    "prices": [
      3,
      2,
      4,
      4,
      2,
      3,
      4
    ],
    "stars": "[3.  4.5 4.  4.5 3.  2.5 4. ]",
    "mean_rating": 3.64285714285714,
    "num_options": 7
  },
  {
    "": 33,
    "X": 885,
    "category": "diner",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/fznCCcC2wWp46WHD-SZP6A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VjMg5BzFLKkr28lUsnNiJQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/YcPu47WUoQ2VvUkinkI6AQ/o.jpg']",
    "names": "[u'Detroit Eatery', u'Wimpys Diner', u\"Lickin' Chicken\"]",
    "num_reviews": [
      32,
      11,
      2
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.5 3.5 3. ]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 34,
    "X": 741,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/uqoTjAwTDO2sWe-FRzMcXQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/xdfY_DRVA_sBqv_9ix3PKw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/e0dy10FV1O4cFp0z9e1pdA/o.jpg']",
    "names": "[u'Thai 5 Cafe', u'D&D Thai Fusion', u'Thai Fay Cuisine']",
    "num_reviews": [
      8,
      3,
      25
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  3.5 3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 35,
    "X": 739,
    "category": "indian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/7XEXaFuk2mXtkYGd-ccZaA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/apbChc9ThZUnE5cWRT2LnQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/JC19jNmqcrENmqVZq0qh7Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/BM0BVfUYXTPnPNqhamek1A/o.jpg']",
    "names": "[u'Udupi', u'Southern Spice', u'Taj Mahal Indian Cuisine', u'Bombay Palace']",
    "num_reviews": [
      329,
      28,
      73,
      6
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[4.  3.5 4.  3.5]",
    "mean_rating": 3.75,
    "num_options": 4
  },
  {
    "": 37,
    "X": 729,
    "category": "breakfast",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/6-SIuG29ZyaUxDtsEd-Nbg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/kRS8ud5k2YXoQOAu9mHuWQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/etdNHmvz25WZhcvsEEsPUw/o.jpg']",
    "names": "[u'The Good Egg - Uptown', u\"Elly's Brunch & Cafe\", u'The Shuka Shak']",
    "num_reviews": [
      79,
      172,
      8
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      3.5,
      4,
      4
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 38,
    "X": 693,
    "category": "thai",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/99eh6IyDD2w1l_nW3FRQkA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/s61yXrmEmQeBIKgXPQfSWw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/LIlVgtNGEf_tWqwQ0_ikdw/o.jpg']",
    "names": "[u'Angkor Wat', u'Vientiane Restaurant', u'Vientiane Inn']",
    "num_reviews": [
      2,
      6,
      4
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  2.5 3. ]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 40,
    "X": 434,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/jZB7k3tqjp-kToVpy3V4FQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/yRQPC-2dnbdLCD4pM-t1ZA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/39Ttp-2MxCtb-wQAkwLeHQ/o.jpg']",
    "names": "[u'Grinders', u'Sub Zone', u'Sidewinder Subs']",
    "num_reviews": [
      19,
      7,
      6
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      4.5,
      4,
      3
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 41,
    "X": 582,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/hHZ7VLmxx4JLCwpdZKINpA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/D79XpDe8mqDVIGuEe6dvzQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/48WOqQP0gsBWnYtLV3JYaQ/o.jpg']",
    "names": "[u'Pho Anh Vu', u'Pho Anise', u'Pho Friendly 18']",
    "num_reviews": [
      6,
      23,
      6
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 42,
    "X": 644,
    "category": "italian",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/Bk72hrfDsNVXCTc77JR1Uw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/ITZp0wX6eJQylPGWpD1RIQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/PzhSzi1d4eI2mC1WXEvEVA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Yo96VriDX_DG23nvDHl3dw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/tQWRja_VeX6YSyLNQvWMow/o.jpg']",
    "names": "[u'Le Golosita', u\"Fazoli's\", u'Trattoria Italia', u'Roma Grill', u\"Carluccio's Italian Restaurant\"]",
    "num_reviews": [
      10,
      12,
      112,
      23,
      10
    ],
    "prices": [
      2,
      2,
      2,
      2,
      2
    ],
    "stars": "[2.5 3.  4.5 3.5 3. ]",
    "mean_rating": 3.3,
    "num_options": 5
  },
  {
    "": 43,
    "X": 721,
    "category": "chicken",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/ctlzESTjE7U8k5fTzArmEw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/eIXOuPfDVyAIpSqrDWxkjA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/MPv7vMJGPhUvFv4KqqzpFA/o.jpg']",
    "names": "[u'Bojangles', u\"Mac's Fish & Chicken & Homemade Deserts\", u\"Zaxby's Chicken Fingers & Buffalo Wings\"]",
    "num_reviews": [
      3,
      9,
      10
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[2.  3.5 2.5]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 45,
    "X": 706,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/59Fc5rnQBEdJzEEiTC1t1g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/qyO7I3Hmpym7ahkYu8HaWw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/QKNx6ht2KlrUARX_G1Q9Gg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/e6jfTGaRi8I2aRKv6lxaCg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/uoJmoSDyoYxPRFtbKCpdXA/o.jpg']",
    "names": "[u'China Inn', u'Sing High Chop Suey House', u'New Garden Restaurant', u'Urban Wok', u'Hsin Cafe']",
    "num_reviews": [
      3,
      63,
      5,
      1,
      30
    ],
    "prices": [
      1,
      1,
      1,
      2,
      1
    ],
    "stars": "[2.  2.5 3.  1.  3.5]",
    "mean_rating": 2.4,
    "num_options": 5
  },
  {
    "": 47,
    "X": 601,
    "category": "steak",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/JlYajN9iMgiDT-Cey7D3uQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/c665Ue00oED-lumym8INew/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/i3kqRlE40L_VXO5koBPVpw/o.jpg']",
    "names": "[u'Black Angus Steakhouse', u'Lone Star Steakhouse & Saloon', u'Sizzler']",
    "num_reviews": [
      36,
      6,
      14
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": [
      3.5,
      3,
      3
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 49,
    "X": 935,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/G1TLUMMMTOD6_NA9umWeHQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/SgV_BaGeagf2mnV5u7ldrw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/GLSSHS4l_AaVDSLiym4aPw/o.jpg']",
    "names": "[u\"Neechi's Pizza\", u'Whistlers Kitchen & Bar Wood-Fired', u\"Coleone's Pizza & Subs\"]",
    "num_reviews": [
      6,
      32,
      10
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 50,
    "X": 231,
    "category": "breakfast",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/0mcq4iyHziMC27q6ukm1qw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/5W6kSs8MCCgrWB8ii2MdrQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/GFpPu3haL4YuXaxgVVPnQA/o.jpg']",
    "names": "[u'The Eagle Twins Restaurant', u'Boom Breakfast & Company', u'Brunchworks Cafe']",
    "num_reviews": [
      4,
      30,
      21
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.  3.  2.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 51,
    "X": 41,
    "category": "steak",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/dVpzOpwvLPEMXY774jznfg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/4rtCwMz8TKD2rg9-kETS6Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/YYBlUH7bPds8dN-KD5OXcw/o.jpg']",
    "names": "[u'Milestones Restaurants', u'The Keg Steakhouse & Bar', u'Baton Rouge Restaurant']",
    "num_reviews": [
      21,
      44,
      9
    ],
    "prices": [
      2,
      3,
      2
    ],
    "stars": "[2.5 3.5 3. ]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 53,
    "X": 540,
    "category": "indian",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/EnDTwMONmRx_cyFOJ6cX1w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/6WAyeKFi8SVwTnPFPMFtWA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/gF6oZ2GAMidG0uPFRA3k2Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IldIbpU86wf9tn8tD6dlIg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/EABT_mANu-YuoeOFpR_3Hw/o.jpg']",
    "names": "[u'Persis Biryani Indian Grill', u'Flavors of India', u'Udipi Indian Cuisine', u'Nirvana II', u'Spice 9 Xpress Indian Cuisine']",
    "num_reviews": [
      2,
      8,
      4,
      35,
      15
    ],
    "prices": [
      1,
      1,
      2,
      1,
      1
    ],
    "stars": "[2.  3.  3.5 3.5 2.5]",
    "mean_rating": 2.9,
    "num_options": 5
  },
  {
    "": 54,
    "X": 369,
    "category": "steak",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/5uGTPHtF-2QWKizFd0i0HA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sm0-Ujb4aSwOn-B0K_fsRQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/75vGDoeXtq6RUMSf16nsFw/o.jpg']",
    "names": "[u'Prime Rib Loft', u'Canal Street', u'Alder & Birch']",
    "num_reviews": [
      164,
      57,
      19
    ],
    "prices": [
      2,
      3,
      3
    ],
    "stars": "[3.5 4.  4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 55,
    "X": 460,
    "category": "american",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/ZHWg2GeWDHEuHkqEESVqew/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/0nGQgwhX2tQy0aNcZCs3tg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/BgHmP2wM6cUK3njyDUkV-w/o.jpg']",
    "names": "[u\"Max & Erma's\", u'Champps', u\"Hoggy's Restaurant\"]",
    "num_reviews": [
      17,
      19,
      3
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[2.  3.  2.5]",
    "mean_rating": 2.5,
    "num_options": 3
  },
  {
    "": 56,
    "X": 356,
    "category": "japanese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/SkRDvuZ6y1E3rYBANfadjQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/hmzco8wH90SGU11Dcl0pRw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/klei6DGbbmQ8XoPaDV6cwQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/wtdTyfvQo5d8-6PVMwiijg/o.jpg']",
    "names": "[u'Sushi Boy Desu', u'Cafe Mitz', u'East Boy', u'Yoshinoya']",
    "num_reviews": [
      13,
      11,
      4,
      64
    ],
    "prices": [
      2,
      1,
      1,
      1
    ],
    "stars": "[2.5 3.5 3.  3. ]",
    "mean_rating": 3,
    "num_options": 4
  },
  {
    "": 57,
    "X": 626,
    "category": "chicken",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/7rTyDJkkGoFjS61Fmik62w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/5tKTt3_-kDTK4BRQRmk0rQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/S1pFLfi6RQWD3iz_qD1PqA/o.jpg']",
    "names": "[u'Olive Chicken', u'Wow Chicken Chinatown', u'Cluck N Cleaver']",
    "num_reviews": [
      46,
      2,
      34
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      4.5,
      4,
      4
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 58,
    "X": 951,
    "category": "hawaiian",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/dTv4_VmlQw4w5CXXW8aliQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/gclUtkCDfcOiiIPrfQHBdA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/E77cQ804Ew8PjAEBijh0QQ/o.jpg']",
    "names": "[u'House of Aloha', u'Kau Kau Kitchen', u'Da Pineapple Express']",
    "num_reviews": [
      23,
      41,
      21
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[5. 4. 4.]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 62,
    "X": 982,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/TcsnOvoWDYfNa0c2uQUNLA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/aec1hGM3SlOBbNhELRYVXA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/BGZdhPbo7Dv1GPkj-wm3IQ/o.jpg']",
    "names": "[u\"Camarone's Cantina\", u'La Sala Tequila Cantina', u\"Garduno's Margarita Factory & Blue Agave\"]",
    "num_reviews": [
      19,
      6,
      16
    ],
    "prices": [
      2,
      3,
      2
    ],
    "stars": "[2.5 3.  2.5]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 63,
    "X": 428,
    "category": "sushi",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/PqKdZtDSsP8GN-qH9-Fkpg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/NOsRVypWZxLthcXAuT8TxQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/HnHIW_7kBK5rSZUAlW65Rw/o.jpg']",
    "names": "[u'Xtreme Sushi & Asian Tapas Bar', u'Xtreme Sushi & Sterling Steakhouse', u\"Lucky Foo's Restaurant & Bar\"]",
    "num_reviews": [
      23,
      242,
      250
    ],
    "prices": [
      3,
      2,
      2
    ],
    "stars": "[3.  2.5 4. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 64,
    "X": 1015,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/Kja1wnBFdMAo3eiNYxWRGA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Mv5j4Wd3noECI_JbePyK-Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/yloSvr8z8IMBC3m9MiXUqA/o.jpg']",
    "names": "[u'Fu Lai', u'Lucky Garden Restaurant', u\"Li's Oriental Kitchen\"]",
    "num_reviews": [
      8,
      6,
      2
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.  2.  3.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 65,
    "X": 1010,
    "category": "vietnamese",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/4SmD8zwsaAcN7JNzgP574A/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Y6MiDPZxbHlemRXFbnXluQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/FJXuBJ8XQ1rAbjrcqOs34w/o.jpg']",
    "names": "[u'MAI Linh Restaurant', u'Lily Vietnamese Submarines', u'Saigon West Noodle house']",
    "num_reviews": [
      3,
      10,
      3
    ],
    "prices": [
      2,
      1,
      3
    ],
    "stars": "[4.5 4.  4.5]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 66,
    "X": 920,
    "category": "chinese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/KY0MmeN2VFQMhAHJzdc7YQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/8nv5TP1ytTRN0rCBrpOp1w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/WLxCT6fqAAINNP_mtraOCA/o.jpg']",
    "names": "[u'China Express', u'Szechwan Garden', u'China Garden']",
    "num_reviews": [
      5,
      14,
      3
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3.  4.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 67,
    "X": 309,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/9RHPW6M37PM9ogVtPWSmfw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/8Hl4s49pmCzNe9WvC-op4g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/D0fY2n9e9kBKtCCiJU2bBw/o.jpg']",
    "names": "[u'Red Dragon Chinese Food', u'Tao Garden', u'Szechwan Palace']",
    "num_reviews": [
      30,
      39,
      2
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 68,
    "X": 813,
    "category": "thai",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/JOUE9syNsBXuxbdhKMqClA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/ODBkDOfxV9FAim4stGdQKA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/kXJ_RGRqRBdv--li0cmDDA/o.jpg']",
    "names": "[u'Pho Tempe', u'Sa Bai On The Fly', u'Papaya Thai Restaurant']",
    "num_reviews": [
      92,
      83,
      166
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[2.5 4.5 2.5]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 69,
    "X": 336,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/GknUN3H_O9TTrvVmJbg5WA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/t9Xus-yrqv7VNzhFit0Kkg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/cblSN_TmgvBURzbbiJNqAw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VxCxYmlEOaP7LnkQHxu8Sg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/dECS4vG4_hzoIU9NRy1zFA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/wHwsYCgp8zSitQ_aaRNlMQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/c0Agk_Wkt4s6jpgp638KWA/o.jpg']",
    "names": "[u'Arden Fast Food', u'Fok Yuan Seafood Restaurant', u'Ho Ho Barbeque', u'New Sun BBQ', u'HJH Restaurant', u'Sure Win Cafe', u'Magic Noodle']",
    "num_reviews": [
      1,
      4,
      28,
      10,
      2,
      1,
      89
    ],
    "prices": [
      1,
      2,
      1,
      1,
      3,
      2,
      1
    ],
    "stars": "[3.  3.5 4.5 2.5 2.  4.  3.5]",
    "mean_rating": 3.28571428571429,
    "num_options": 7
  },
  {
    "": 70,
    "X": 965,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/7f00T6r2E1KLbsyE-uOvww/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/nRDDNoHyeg-_IoBZhuA1uw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/NG3DS9js0dpej3s8mgEU2w/o.jpg']",
    "names": "[u'La Salsitas', u'Tacos Chava', u\"Romero's Mexican Food\"]",
    "num_reviews": [
      3,
      1,
      1
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      4.5,
      5,
      2
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 71,
    "X": 908,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/iVqUfFmv-sWFoLjyv0nfWw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/j7fFqUi1-s-68bvXFDjnLw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/osmPs6KFhdY5ZvOD8NkQiA/o.jpg']",
    "names": "[u'Que Sabor', u\"Ayala's AZ Kitchen Mexican Cafe\", u\"Don Lencho's Mexican & Seafood Restaurant\"]",
    "num_reviews": [
      1,
      23,
      21
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      5,
      4,
      3.5
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 72,
    "X": 152,
    "category": "american",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/S2JlU44CuXKdln5IVwTrlw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/g1sdtHG5nLf7ozQqXD4QIA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ekU3Glxcrf5E2wlroizXrA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/oR-m5h3O3vH2oY21u7Rnsg/o.jpg']",
    "names": "[u\"Solon Panini's Bar and Grill\", u'Tavern on 91', u'Harvest Kitchen & Lounge', u\"Jim's Open Kitchen\"]",
    "num_reviews": [
      28,
      44,
      82,
      70
    ],
    "prices": [
      2,
      2,
      3,
      1
    ],
    "stars": [
      2,
      3,
      3.5,
      4
    ],
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 73,
    "X": 1034,
    "category": "american",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/NvjIzHchRDCZFDVsdYs_TQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/paGtNvntkfRxMvJuJMRq5w/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/qlvrKF_t-QkH2AO-tRk2QA/o.jpg']",
    "names": "[u'LV Bistro', u'Ironwood American Kitchen', u'Graze Desert Grille']",
    "num_reviews": [
      10,
      41,
      11
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[2.5 3.  3.5]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 74,
    "X": 251,
    "category": "american",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/roN3XMiLmcRJHxBmsnZCWg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/DDmHmyID9Buli4wv3TCbvQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/akqofrZixMYQOwfESi2QKA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/LCApeiGU8-VXz6HYTOFXCQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Qvzvel4LYRlotMNcY4toig/o.jpg']",
    "names": "[u'The Library', u'Muscle Maker Grill', u'Finn McCools', u'Margaritaville', u'1889 Cafe']",
    "num_reviews": [
      168,
      14,
      11,
      10,
      10
    ],
    "prices": [
      2,
      1,
      1,
      1,
      1
    ],
    "stars": "[3.5 2.5 3.  3.  3. ]",
    "mean_rating": 3,
    "num_options": 5
  },
  {
    "": 75,
    "X": 405,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/nGZbAAM1nZnrUCVR0IegFA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/f_8cium-SC6xN3kIWi1AVw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/WU4SRCFBCEBW4JYQxnNezg/o.jpg']",
    "names": "[u'Hong Kong Chinese Cuisine', u'Golden Panda', u\"Yu's Cafe\"]",
    "num_reviews": [
      37,
      6,
      15
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[3.5 4.  3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 76,
    "X": 496,
    "category": "sandwich",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/9EposnBTEQWCTURlhq6yMg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/LN7UYh27V_97b1NyaPW-jg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/RDxcI3sd4eIKIeznpBL4iA/o.jpg']",
    "names": "[u\"Frank's Bratwurst\", u'Bogtrotters Doorstep', u'Market at Flying Fig']",
    "num_reviews": [
      13,
      48,
      14
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      5,
      4,
      4
    ],
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 77,
    "X": 780,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/BmoY-oioK8tGeT7l_NAlOQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/-ofDn71kN3Q-3uUtvuvC2Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/RIrpTZ39SWF3zGI_EextWw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/RvKh0Mf5yL3a_2VeT-yXPQ/o.jpg']",
    "names": "[u\"Raya's Pizzeria\", u'Sunset Pizza & Grille', u'Slice On Broadway', u'Porto Fino Pizzaria & Gyro']",
    "num_reviews": [
      1,
      8,
      17,
      4
    ],
    "prices": [
      1,
      2,
      1,
      1
    ],
    "stars": "[1.  4.5 4.5 2.5]",
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 78,
    "X": 736,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/9yjBdxdZHgM9HTPugoozGA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/C1aIekFJ0n_d98FwNsyI0Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/PrxBO5KNc3c6QSmRPDMLbQ/o.jpg']",
    "names": "[u\"Ta'Carbon\", u'Sonora Mexican', u'Birrieria Y Taqueria Del Yaqui']",
    "num_reviews": [
      123,
      4,
      3
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[4.5 3.5 3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 80,
    "X": 618,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/Y5LE1i9ng1Y4Loh6M5Yp4g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/eXVv_Xkc8HWmTr2Zk__aaQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/bqjxtHcsq0futWEq2WxfWQ/o.jpg']",
    "names": "[u'Sweet Cakes Caf\\xe9', u'Worth Takeaway', u'Urban Picnic']",
    "num_reviews": [
      102,
      189,
      117
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": [
      3.5,
      5,
      4
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 81,
    "X": 628,
    "category": "burger",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/Nz-rQjoMYBa480mw9GW9lA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IPCjdZjbgbqEBoxqYCvlog/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/7dLFrYeWE37CMb5xWhUhlw/o.jpg']",
    "names": "[u'Lot 102', u'Midtown Kitchen & Bar', u\"Flipp'n Burgers\"]",
    "num_reviews": [
      4,
      25,
      56
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[5. 3. 4.]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 82,
    "X": 844,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/3kav9UcE7m_03-PwT5aEWw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/E-buVGTSz7yb4RdwmcxluA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/6EO2kzefVys5n2-TiEGXJw/o.jpg']",
    "names": "[u'T&T Supermarket', u'Apron Cafe', u'Choice Of The Orient']",
    "num_reviews": [
      20,
      33,
      14
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[3.5 3.  3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 83,
    "X": 10,
    "category": "american",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/_owbY0a5TwRgzD_19f3Klw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/yARVyQFvaPLWtstJo8fCag/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/4cA5-RgFA7X2tqUv4vf5kQ/o.jpg']",
    "names": "[u'Village Pub and Cafe', u'Kilawat', u'The Restaurant at Platinum']",
    "num_reviews": [
      310,
      4,
      7
    ],
    "prices": [
      1,
      2,
      3
    ],
    "stars": "[4.  1.5 3. ]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 86,
    "X": 705,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/WHt8Wf66wUFF7XbIxjCP4A/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Fvf6Ck4x_AjIPz-NctWZqQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/CKqbmXMUkhxnu-5dCl5Yiw/o.jpg']",
    "names": "[u'Bo 7 Mon', u'Thuy Shop', u'Pho Dau Bo Restaurant']",
    "num_reviews": [
      7,
      2,
      99
    ],
    "prices": [
      2,
      3,
      1
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 87,
    "X": 875,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/_UOu370HVmQB27oKVaBtBw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/DHcDSHYxcQBYGlKp4wpTzw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/o6pzqP030T5jplCVYie0yg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/O-QAM7r1yGZ7EsVbaQa56w/o.jpg']",
    "names": "[u'Simply Thai Cuisine', u'Sushi & Thai Cuisine', u'Green Mango', u'Thai Classic Cuisine']",
    "num_reviews": [
      36,
      37,
      22,
      6
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[3.  3.  2.  2.5]",
    "mean_rating": 2.625,
    "num_options": 4
  },
  {
    "": 88,
    "X": 836,
    "category": "american",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/j9D6J2oZ2yPTN94pCxpx5g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ECeiLVLdlFq61MQDQuyoOQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IQJLkLr6lUrPsF8K4Riy-g/o.jpg']",
    "names": "[u'Grilled Expedition On Mill Cafe', u'Regions Bistro & Bar', u\"Chili's Grill & Bar\"]",
    "num_reviews": [
      4,
      29,
      48
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": [
      3.5,
      2.5,
      3.5
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 89,
    "X": 748,
    "category": "greek",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/KIQliQpNhQ3ywhCsALPMoQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/9RGBH1lmajq-puwZNuKShQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/NtpYQ5sNV-nnD9F-lCaMVg/o.jpg']",
    "names": "[u'Gyro Bar!', u'Souvlaki Kalamaki', u'The Greek Spot']",
    "num_reviews": [
      10,
      3,
      3
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[4.  5.  3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 90,
    "X": 841,
    "category": "breakfast",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/nk7zy1iEsuvBfh5woI0T1A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Pf0lRGIwNxxBHOPY5SdQLg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/4tARfjHI7zcA-Joa5cC6cA/o.jpg']",
    "names": "[u'Hamburger Haven', u'5th Avenue Cafe', u'Appetite Xpress']",
    "num_reviews": [
      6,
      136,
      7
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[3. 4. 4.]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 91,
    "X": 861,
    "category": "sushi",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/f-qxrIfD5qw80SY7svkHMQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VuVRqHcY0QffYLm5luqy-Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/xdq6SJ95iR9Zooj5dIcGVg/o.jpg']",
    "names": "[u'TWIISTED Burgers & Sushi', u'Tokyo Hibachi & Sushi', u'Sushi On The Roll']",
    "num_reviews": [
      67,
      24,
      23
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  3. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 92,
    "X": 785,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/ZIDBINPdpr9rC87cmnsIYA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/P1DWI6Ci1xdClGe3dJXA3Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/2pVuQKv9CjmhcRHQAdExVw/o.jpg']",
    "names": "[u'Axxio Pizza', u\"Devil's Pizza Factory\", u\"Gus's New York Pizza\"]",
    "num_reviews": [
      12,
      20,
      89
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[2.5 2.  2.5]",
    "mean_rating": 2.33333333333333,
    "num_options": 3
  },
  {
    "": 93,
    "X": 590,
    "category": "chinese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/d97koOGF_O8Oma9j75LRDA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ilgWgQmTKL-9TFN4GE31cg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/2W6VuHGgyD42rMimk1glcQ/o.jpg']",
    "names": "[u'Rose Garden Chinese Restaurant', u'Lotus Chinese Restaurant & Lounge', u'Sam-Pan Chinese Restaurant']",
    "num_reviews": [
      25,
      54,
      5
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  3.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 94,
    "X": 550,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/2NVbdaMZL5qkFWIPGcdeAQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/opxh4L5ovn-kEBM0erGFAw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/EoGtw9CdcHJOPzbZfA8-Ow/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/RAA7qOmXXAjLzMqGaScDkQ/o.jpg']",
    "names": "[u'Kothur Indian Cuisine', u'Tich Modern Indian Cuisine', u'Everest Hakka House', u'Maurya East Indian Roti']",
    "num_reviews": [
      28,
      52,
      108,
      64
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[4.  3.5 4.  4. ]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 95,
    "X": 198,
    "category": "breakfast",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/1OomZIUibdIBjm9WW7s3wg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ScMif4HKwJs_ozajiUABtA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/50_0gUzVRT9JUixaqRAU8Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/e-bkAb5rjSgpCo5JAaxi2Q/o.jpg']",
    "names": "[u'Street Cafe and Coffee Lounge', u'US Egg Restaurant', u\"D'Lite Healthy On The Go\", u\"Butterfield's Pancake House\"]",
    "num_reviews": [
      73,
      88,
      84,
      662
    ],
    "prices": [
      1,
      2,
      2,
      2
    ],
    "stars": [
      5,
      4,
      4.5,
      4.5
    ],
    "mean_rating": 4.5,
    "num_options": 4
  },
  {
    "": 96,
    "X": 798,
    "category": "pizza",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/HAf9dpm__IlEAmNgyiS9Ew/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/kEj5C4ZsjWGb0ivurocvuA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/RimL6zTawNmF5jIad3mU4g/o.jpg']",
    "names": "[u'Pizza Pit Extreme', u\"Dahmen's Pizza Place\", u'Rocky Rococo Pan Style Pizza']",
    "num_reviews": [
      13,
      19,
      1
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      3,
      3.5,
      3
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 97,
    "X": 260,
    "category": "steak",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://www.flemingssteakhouse.com/-/media/fsh/locations/location-detail-header.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/bFBzsre_CkkMxA8Jj7GpcQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/fdLpZZIZAkumuCwodaKeQA/o.jpg']",
    "names": "[u\"Fleming's Prime Steakhouse & Wine Bar - Charlotte\", u\"Ruth's Chris Steak House\", u'Brazz Carvery & Brazilian Steakhouse']",
    "num_reviews": [
      115,
      68,
      42
    ],
    "prices": [
      3,
      3,
      3
    ],
    "stars": [
      4,
      4,
      3.5
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 99,
    "X": 489,
    "category": "breakfast",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/IB1eB-Bs8siHzP-A-enh9Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/k0s-7trAnnjJPtmKThgGFA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/BWnnOXy3pKejG4N9sMRkGA/o.jpg']",
    "names": "[u'Pie Cloud', u\"Nellie's Cafe on Kensington\", u'Wake Bistro']",
    "num_reviews": [
      32,
      18,
      13
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  2.5 4. ]",
    "mean_rating": 3.5,
    "num_options": 3
  },
  {
    "": 101,
    "X": 462,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/uQ7MFDiDGpRG7dUQYs0TEg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/r-xQvdHGqAcayLGutRJzcQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/_us8_eyi4Qg35HZJlMD_2w/o.jpg']",
    "names": "[u'Kibo Sushi House - Liberty village', u'Injapan', u'KoJa Restaurant']",
    "num_reviews": [
      1,
      28,
      62
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[5. 3. 4.]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 102,
    "X": 332,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/c73QgygbNWiYqGjbJ7LnkQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/OHpcHOA-caYFclPCva1Q3Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/7WueDipokUtjnGCNdMZNlg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/q5qa8DEvygCQiQotRvr1fQ/o.jpg']",
    "names": "[u'Yuan Yuan Chinese Restaurant', u'Richlane Chinese Cuisine', u'Hong Far Cafe', u'Oriental Cafe']",
    "num_reviews": [
      3,
      18,
      7,
      5
    ],
    "prices": [
      2,
      2,
      1,
      1
    ],
    "stars": "[2.5 3.5 3.5 3.5]",
    "mean_rating": 3.25,
    "num_options": 4
  },
  {
    "": 103,
    "X": 995,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/9CAurXxMYnA1ElLvMp3DaQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/NZN1nNufgFh8R9MFkSk11A/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/0ijTCTAf4T-nZnQxlGRntA/o.jpg']",
    "names": "[u\"Tia Shorty's Authentic Mexican Food\", u'Fogon - A Mexican Eatery', u'Taberna Mexicana']",
    "num_reviews": [
      68,
      71,
      57
    ],
    "prices": [
      2,
      2,
      3
    ],
    "stars": "[4.  3.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 104,
    "X": 883,
    "category": "burger",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/ow19vm7eTwllMXk-0sKzFw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/n0G-KgcbuVSm27aIav2HuQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Z2HUkcn4LnEWkhM0mCnl4g/o.jpg']",
    "names": "[u\"BT's Burgerjoint\", u'Hwy 55 Burgers Shakes & Fries', u'American Burger Co.']",
    "num_reviews": [
      30,
      27,
      16
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.5 2.  2.5]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 105,
    "X": 755,
    "category": "pizza",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/9gR_z2074O1b2c0SByAkNw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/qNNyRf9t1rmvg88gRcNiWg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Uk_81NWVyx8fTasf_lAA_w/o.jpg']",
    "names": "[u\"Albion's Pizza Shawarma\", u'Mr Right Pizza', u'Pizza Roma & Restaurant']",
    "num_reviews": [
      11,
      8,
      14
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      4.5,
      4.5,
      3
    ],
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 106,
    "X": 300,
    "category": "breakfast",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/JLvKWextpiaTGhl9nSSDnw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/gg84tcN22GNqfER2FEUyjg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/HJnjsPhsXdwd5ffe3Vs8LA/o.jpg']",
    "names": "[u\"Coco's Family Restaurant\", u'Superette Cafe', u'The Oink Cafe-Phoenix']",
    "num_reviews": [
      29,
      14,
      456
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      2,
      4.5,
      3.5
    ],
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 107,
    "X": 952,
    "category": "diner",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/fzEBnd7nG2Qg3EqoFohUmw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/n1tNqq6zSLmhIxEYfIFgBA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/jb_3i2JSrIsXMr7C7J3Epg/o.jpg']",
    "names": "[u\"Michael's Diner\", u'Yours Truly Restaurants', u\"Big Al's Diner\"]",
    "num_reviews": [
      18,
      35,
      36
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[3.5 3.5 3. ]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 108,
    "X": 288,
    "category": "greek",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/ABLJ1BQKH3PP8hlXz7wUbg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/KIQliQpNhQ3ywhCsALPMoQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/0TS1LpqRcZT0w4NUd2Ngig/o.jpg']",
    "names": "[u\"Calypso's Taverna\", u'Mykonos Greek Restaurant & Lounge', u'Santorini Greek Taverna']",
    "num_reviews": [
      18,
      6,
      8
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  3.5 4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 109,
    "X": 357,
    "category": "greek",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/5deYTdCMMEgqWMkXTRI1Hw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/fv-xAJ-VVm4ahG2xZ6XaPw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/1iuSTC1rOTtszKNmTyK20Q/o.jpg']",
    "names": "[u'My Big Fat Greek Express', u\"Mike's Rigatoni Bistro\", u'Greek Wraps']",
    "num_reviews": [
      8,
      41,
      134
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": [
      4,
      3.5,
      4.5
    ],
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 110,
    "X": 473,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/DDeiiBvKtWUCGceSV70VAQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/wFHpzliTlYJP88g3hfY5tQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/mA5Ilo_mQZEITEVKW8mw_A/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/6OMWiRh8NBTD0YpHsw6Lkg/o.jpg']",
    "names": "[u'Golden Duke Chinese Cuisine', u'Congee Queen', u'Oriental Gourmet', u'The Red']",
    "num_reviews": [
      19,
      63,
      11,
      13
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[3.  3.5 3.5 3.5]",
    "mean_rating": 3.375,
    "num_options": 4
  },
  {
    "": 111,
    "X": 544,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/VxrdURiuf5c7bRleAz1Nxw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/p06AgZ4_iDn7kq629QwJEA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/4pPhjPBygTsO2oPNzq7FUg/o.jpg']",
    "names": "[u'Prince Sushi', u\"Mi'hito Sushi Laboratory\", u'Wasabi Grand Buffet']",
    "num_reviews": [
      99,
      10,
      57
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 4.  2.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 113,
    "X": 96,
    "category": "vegan",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/bVxTpuP9uVzDi-zD6N50xw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/EQE2k3HrfZtuCxKhOiWC_A/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/5rPY8Y9QBvQ-oOsEgtm-KQ/o.jpg']",
    "names": "[u'D-Beatstro', u'Calico Cafe', u'Through Being Cool']",
    "num_reviews": [
      16,
      16,
      44
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[4.5 4.5 3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 114,
    "X": 963,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/59Fc5rnQBEdJzEEiTC1t1g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/V1R18IwXBtxRR_kyJW86lw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/BbujjsnreEe6Rca0-kxu_A/o.jpg']",
    "names": "[u'Sunlight Chinese Food', u'Asian Garden Restaurant', u'Singapore Garden Chinese Restaurant']",
    "num_reviews": [
      3,
      3,
      14
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 4.5 3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 116,
    "X": 674,
    "category": "thai",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/5t84DosL0MZBQhlgaPkjMg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/l_Bxoyy5nyMiXv0IKXrguw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/A6GO8uw-pis6btuq21y9_Q/o.jpg']",
    "names": "[u'Ploy Thai Cuisine', u'Ploythai Bistro', u'Chon Thai Food']",
    "num_reviews": [
      25,
      6,
      233
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  4.5]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 117,
    "X": 1037,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/xukjth2wFDQ45kyRW7qboA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/BD67msDJ-yu1AUQD6NPP5Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/V69YPhMbVQF_tEZ4eslWWA/o.jpg']",
    "names": "[u'Grab-N-Go Pizza Express', u\"Georgio's Oven Fresh Pizza\", u'Roman Fountain Pizza']",
    "num_reviews": [
      1,
      1,
      6
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      3,
      3,
      3.5
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 118,
    "X": 931,
    "category": "pizza",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/kNJ-MU_Zti6bw6bImVfQQg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/eoA18IL5H1SWMSucLBAUoQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/s8rLn3ycy9XpW1Y3E2qmrQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/UGs9266aZ_cF6zFyNJCE7A/o.jpg']",
    "names": "[u'Pizza Pit Extreme', u\"Topper's Pizza\", u'Pizza Bella', u'Rocky Rococo Pan Style Pizza']",
    "num_reviews": [
      32,
      26,
      8,
      21
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[3.  3.  1.5 3. ]",
    "mean_rating": 2.625,
    "num_options": 4
  },
  {
    "": 119,
    "X": 65,
    "category": "sandwich",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/4tf9A0JciZemUmltCF_ghw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/4kBH2jS3BjPhhqEo9ptlxQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/VQDT1L4zct_CsZFHHV9uaw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/OBRdcah5i5zeLo8pBM6FBA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/SivXlkRUAf83DsIK8UwXBw/o.jpg']",
    "names": "[u'Bartram House Bakery & Cafe', u\"Tootie's Famous Italian Beef\", u'Real McCoy Sandwich Shop', u'The Real McCoy Sandwich Shop', u'Carson Street Deli & Craft Beer Bar']",
    "num_reviews": [
      14,
      43,
      11,
      4,
      68
    ],
    "prices": [
      2,
      1,
      1,
      1,
      2
    ],
    "stars": [
      4,
      4.5,
      4.5,
      4.5,
      4.5
    ],
    "mean_rating": 4.4,
    "num_options": 5
  },
  {
    "": 120,
    "X": 222,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/43RRSeAOPBk7r6qIzDfLnQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/-t83d5xI_Y2O18pLFkjP6Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/xwCafJ3ZttGnCctrFRvQbA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/d09wWsBSm0ybwNqh4ADpXw/o.jpg']",
    "names": "[u'KINKA IZAKAYA BLOOR', u'Yuki Japanese', u'Kenzo Ramen Bloor', u'Sushi 101']",
    "num_reviews": [
      72,
      5,
      36,
      13
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[4.  2.5 3.5 3. ]",
    "mean_rating": 3.25,
    "num_options": 4
  },
  {
    "": 121,
    "X": 312,
    "category": "vegan",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/6Z1ZKO4eTMFs30osNuXqoA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/XfDWh9PwtX4xhA-wtbYbdA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/SZXU1j0XQ8taPPRizr58pQ/o.jpg']",
    "names": "[u'Nami', u'Green New American Vegetarian', u'The Coronado PHX']",
    "num_reviews": [
      339,
      463,
      81
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 4.5 4. ]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 122,
    "X": 230,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/FzilBvhohDClwDsZghjprw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/niGI7Ysn5Ltz0Nbaq66XDQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/nXS3g6n-HdXE_ae925QaHA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/iixAlutL-FJMnzeuC-prhA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/vqLYEHXlM5EcBetb9EyCrg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/v_BIrzdLkpPkDJ53V7Ot9Q/o.jpg']",
    "names": "[u'Tonari Sushi', u'Ichiban Sushi House', u'Kaizen Sushi', u'Sushi Garden', u'Daeco Sushi', u'Sushi Gen']",
    "num_reviews": [
      3,
      18,
      3,
      15,
      9,
      16
    ],
    "prices": [
      2,
      2,
      2,
      2,
      2,
      2
    ],
    "stars": "[4.  3.  3.  4.  4.  3.5]",
    "mean_rating": 3.58333333333333,
    "num_options": 6
  },
  {
    "": 123,
    "X": 525,
    "category": "pizza",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/jGFJgAihIQMxQGyVFJ8B2w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/M7sIv6XOrEfxRCaezeoRiQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/8pLjKNg9n_Ul5zMeIfD8iA/o.jpg']",
    "names": "[u\"Joe Mama's Pizza and Grill\", u\"Portofino's Italian Restaurant Ayrsley\", u\"Stoney's Woodfired Pizza\"]",
    "num_reviews": [
      5,
      25,
      4
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      3.5,
      3.5,
      4
    ],
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 125,
    "X": 857,
    "category": "sushi",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/BeLtxZoSkf3nOrlwnkJfmQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/dWtWfS-FPCOio_o05d0umQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/aVbfyXQHu_LiwIOzH8hRSw/o.jpg']",
    "names": "[u'Hon Machi', u'Mikado Sushi', u'Oriental Jade']",
    "num_reviews": [
      62,
      88,
      22
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[3.5 4.  2.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 128,
    "X": 829,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/LUG2Ad5AgfpS_CAsZGlnpQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1w0ROA0GuRNTi1aUrO62bw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/42NRSyJb5MimnABy83yLew/o.jpg']",
    "names": "[u'Spicy Garden', u'Hyderabad Palace', u'Babu Catering & Take Out']",
    "num_reviews": [
      17,
      2,
      94
    ],
    "prices": [
      1,
      3,
      1
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 129,
    "X": 776,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/ZACxP4fzzA5Fr6frYVB9Jw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Wyhg5SK4fCm12qN7oKmFSw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/NPJNIafLvVvmI06Nk47gJA/o.jpg']",
    "names": "[u'Little Coxwell Vietnamese & Thai Cuisine', u'Eathai', u'Thai Fusion Restaurant']",
    "num_reviews": [
      67,
      13,
      5
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  4.  3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 130,
    "X": 39,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/TPnX56yXZpyrsshhD3e1iA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/p6Hzyar85rwvXft_SIFHyA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/JCfiBjsmD7oLpqd5OkCnpA/o.jpg']",
    "names": "[u'He He Long Bbq Take-Out Shop', u'Ming Lou Chinese Restaurant', u'Chinese Halal Restaurant']",
    "num_reviews": [
      5,
      7,
      19
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      3.5,
      2.5,
      3.5
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 131,
    "X": 708,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/Srm9S8k1-T2jRinLGmqCkQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/jVVp9xONK9oZkWna9oA2Fw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ICTo9ExHm9YmX1XGyl6bfA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/OwmIvH5Akmq8Fl2B84cMmQ/o.jpg']",
    "names": "[u'Big Heng', u'Dragon Chinese Restaurant', u'Dragon Island Chinese Restaurant', u'Silver Dragon Chinese Restaurant']",
    "num_reviews": [
      11,
      12,
      22,
      6
    ],
    "prices": [
      1,
      1,
      1,
      2
    ],
    "stars": "[4.5 4.  4.5 4. ]",
    "mean_rating": 4.25,
    "num_options": 4
  },
  {
    "": 132,
    "X": 46,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/CFh8095TXg4uwIXr8eH0Bw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/VQg50ibMs5vSva0jHIhdHQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Cd4MFk-zK-6uQRfItIDxWg/o.jpg']",
    "names": "[u'Pho Mi Xuan Mai Vietnamese Cuisine', u'Banh Mi Ba Le', u'Pho Dau Bo']",
    "num_reviews": [
      2,
      7,
      41
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[3.5 4.5 3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 133,
    "X": 44,
    "category": "mexican",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/KO1QHo2Ec-A5lwufU4rmwg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/0tgJAzjI1g2Exh7jY-qrPQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Qw4EhiEx9KWtVWzfMvGSnA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/u7zjR6MOINR84AYwFFiTCA/o.jpg']",
    "names": "[u'Tenoch Restaurant', u'El Cafetal Restaurant & Bakery', u'Latin World', u'Itacate']",
    "num_reviews": [
      53,
      13,
      6,
      19
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": "[3.5 4.  3.5 4.5]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 134,
    "X": 353,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/3BMObXxnKBTcsu8-VLscDQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IEKkkiD0_k7-xlrdcYBzPA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/vmqGWhRdo3JsgMBlSa8Vgg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/bawlyBxo6coONr00FEaP1Q/o.jpg']",
    "names": "[u'Pizza Bella', u'World Famous Tuscany Pizza', u\"Joe's New York Pizza\", u\"Milano's III Pizza\"]",
    "num_reviews": [
      4,
      2,
      112,
      4
    ],
    "prices": [
      1,
      2,
      1,
      1
    ],
    "stars": "[2.  2.  3.5 2.5]",
    "mean_rating": 2.5,
    "num_options": 4
  },
  {
    "": 135,
    "X": 733,
    "category": "sushi",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/quqv1WBFX_Jq1vw3YmxkYg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/xeuGVuK4B0iRyUOmgk4x_Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/jK06WEmhVlG-12eYovHsJw/o.jpg']",
    "names": "[u'Mizuya', u'KUMI by Chef Akira Back', u'j-pop Lounge']",
    "num_reviews": [
      72,
      62,
      16
    ],
    "prices": [
      2,
      3,
      3
    ],
    "stars": "[3.  4.  2.5]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 136,
    "X": 1039,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/BIZKPGzXE4o7iOD326GSOA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/naP_nJp0YLYL7sgcRi-M0g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/iAmRckO5jc5DzzT6sjA2qA/o.jpg']",
    "names": "[u'Sunset Pizzeria', u\"Nikki Lee's Sports Pub & Grill\", u\"Joe Philly's Pizza\"]",
    "num_reviews": [
      24,
      30,
      2
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[4.  3.5 5. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 137,
    "X": 636,
    "category": "mediterranean",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/L4nmO3kiOJgK6j9ZpUMW4g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/COjOFHdJlD9PjK4WwYs7pA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/v4VNv7bRTjob3wyfL1oWLg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/gqR3PtqFL8CTZAtYmv29fg/o.jpg']",
    "names": "[u\"Shab's Mediterranean Food\", u'Crystal On Penn', u\"Madonna's Mediterranean Cuisine\", u'Palmyra Mediterrean Cuisine']",
    "num_reviews": [
      20,
      65,
      93,
      46
    ],
    "prices": [
      1,
      2,
      1,
      1
    ],
    "stars": "[3.5 3.5 4.5 4.5]",
    "mean_rating": 4,
    "num_options": 4
  },
  {
    "": 139,
    "X": 224,
    "category": "breakfast",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/wSTC7w4IK6KEoVbiOPJpsA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/_8PjF4TP8k2eC2rQru30ZQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/oHlCxCrCanO6GUjM6CrByA/o.jpg']",
    "names": "[u'Good Bite Restaurant', u'The Bagel Stop Yonge Eglinton Centre', u'Golden Griddle']",
    "num_reviews": [
      22,
      5,
      15
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      3.5,
      4,
      2.5
    ],
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 141,
    "X": 699,
    "category": "indian",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/Z4sapoArn-chUtbqY77y1Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/mvBVcJZ-a8NNEMHJh8ocHQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/PH6gTBI_LDruj4jhe-aQlw/o.jpg']",
    "names": "[u'Namaste India', u\"Billu's Indian Grill\", u'Maharaja Restaurant']",
    "num_reviews": [
      12,
      5,
      11
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.5 3.  3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 146,
    "X": 26,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/9ZFusUcoloZaOv4nUfet_Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/NgJ5uHL5-c1lnqOtxnhgoA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/-XVOM9ioLXp4wytYE8SOgA/o.jpg']",
    "names": "[u'Traffic Jam', u\"Luke's Of Chicago\", u\"Togo's Eatery\"]",
    "num_reviews": [
      26,
      53,
      3
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      4,
      3.5,
      2.5
    ],
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 147,
    "X": 979,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/Pznr8GFcwcc02jeoPd6E_Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/G3td9mPECvnmc4ROBjCr1A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/4FMhOJ4wosiOc09HbUjSpw/o.jpg']",
    "names": "[u\"Bado's Pizza Grill & Ale House\", u\"Little Nipper's Pizza\", u\"Nipper's Pizzeria\"]",
    "num_reviews": [
      106,
      11,
      8
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 2.5 3.5]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 148,
    "X": 418,
    "category": "burger",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/r3SBp9-kOxFkAz2IAHGYLg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Wt3-nf_YBhhehYWFr-6p4A/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/HtR5f6ZeVELQNCeFA0FYAg/o.jpg']",
    "names": "[u'Fuse', u'No Bull Burgers', u\"Big Jack's Burger Shops\"]",
    "num_reviews": [
      2,
      50,
      4
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  3.5 3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 149,
    "X": 160,
    "category": "sushi",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/nfp0-MKIVBycj4Fhkxfwqg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/xWvgUI9cRaLeJw97kKff9Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Dq0BezQeiW2ejC9jbSeszg/o.jpg']",
    "names": "[u'Oyshi Sushi', u\"Ted's Sushi Burrito\", u'Vegas Express Sushi']",
    "num_reviews": [
      1044,
      56,
      19
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.5 4.5 4.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 150,
    "X": 363,
    "category": "breakfast",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/SzWtWTCiH7-F8Z4kY_1BWg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/eZ7GOF9HQdA72ze1vnHRKA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ADX3WvgoKNweW2IjY1JiDw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/y2EXmaJebXb5M6fDI65rHA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ddzJqehU28HS1XeXKGXsAQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/dE8ThKSHovPKs7XZ9LB5zA/o.jpg']",
    "names": "[u'Come Back In', u'Marigold Kitchen', u'Sunroom Cafe', u'Old Market Bistro', u'Myles Teddywedgers', u'Plaka Taverna']",
    "num_reviews": [
      35,
      124,
      60,
      3,
      25,
      27
    ],
    "prices": [
      1,
      2,
      1,
      2,
      1,
      1
    ],
    "stars": "[3.  4.  3.5 3.5 4.  4. ]",
    "mean_rating": 3.66666666666667,
    "num_options": 6
  },
  {
    "": 151,
    "X": 989,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/YA35BPoPZFAJKnzjRnw0gA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/JvzVRjLkorb43nxAy4kfVQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/WC89-Eb5-RULpBsLvUV4kA/o.jpg']",
    "names": "[u\"Doughboy's Pizza\", u\"Brother's Pizza Express\", u'Blue Parrot Pizza And Ice Cream']",
    "num_reviews": [
      3,
      7,
      5
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      2.5,
      2.5,
      4
    ],
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 152,
    "X": 1018,
    "category": "italian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/c8bhfPIUWOFg3oqJn98qow/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/meYMxScOCnA0rKnCpoRg3Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3ARbYBW8W4hkAbdtFkAfLw/o.jpg']",
    "names": "[u'Serra Ristorante', u'Lakvino Ristorante', u\"Rocco's Plum Tomato\"]",
    "num_reviews": [
      6,
      3,
      5
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[2.5 3.5 2.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 153,
    "X": 457,
    "category": "diner",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/uK90heMN0MBLrufYeAEKXw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/pP8HvHVodTmE8II9i-qfcw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/RjdjncmTK1xwvvGkKVTk9w/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/jb_3i2JSrIsXMr7C7J3Epg/o.jpg']",
    "names": "[u'Avenue Diner', u'Nellies Cosmic Cafe', u'Mission Diner', u'Essence']",
    "num_reviews": [
      23,
      44,
      21,
      2
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[4.  2.5 3.5 4.5]",
    "mean_rating": 3.625,
    "num_options": 4
  },
  {
    "": 154,
    "X": 173,
    "category": "pizza",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/1jwGaZw0IL0jyJpa1C1VVw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/kzUblvAnQNcdtML8o4joZA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/0tbqWS1OX8Ojw069ik-2CQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/pIQLzc4oVyrhrZDoQzSKJg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/EQ7Dxgs2o3FUUT5z-_f3SQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/azr58x_hk0p_Ee8QA_coag/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/rpekOB04jLmwG-tMYqPJHw/o.jpg']",
    "names": "[u'Mr Pide', u'Brass Taps Pizza Pub', u'Danforth Pizza House', u'Pizzeria Libretto Danforth', u'Factory Girl', u'Amaro Pizza', u'Big House Pizza']",
    "num_reviews": [
      21,
      17,
      57,
      142,
      43,
      10,
      22
    ],
    "prices": [
      1,
      2,
      2,
      2,
      2,
      1,
      2
    ],
    "stars": [
      4,
      3.5,
      4,
      4,
      3.5,
      3,
      4
    ],
    "mean_rating": 3.71428571428571,
    "num_options": 7
  },
  {
    "": 157,
    "X": 1022,
    "category": "indian",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/BLvL3Ia4KMWSDu8YsEAvlQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/G9IYlIvZ0_UvqQCR6vPHFg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/YqZtz1yPx_yQwW2pyeAMBg/o.jpg']",
    "names": "[u'Spice South', u'Peacock Indian Cuisine', u'Amaravati Grill']",
    "num_reviews": [
      20,
      30,
      22
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 2.  2.5]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 158,
    "X": 158,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/cw9GMIk8P2R5zZKKQDEmRA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/f9-h3zaF7meLFn_9uqPIZQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sygkdjfbtZvIsCqzEGgHUw/o.jpg']",
    "names": "[u'Verso Casual Italian Bistro and Pizzeria', u\"Antonio's Pizza\", u\"Casamel's Pizza\"]",
    "num_reviews": [
      32,
      16,
      14
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": [
      4,
      3.5,
      4
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 159,
    "X": 530,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/gnbDEhbCRJ3k2L8-YDB1gQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/6ZLXyStbH3mZsjzwA1L8Xg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/BhzY2fbjxmROoX-ZsLZE4w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/MnV8F_qgy7oPCd-uIkg2Yg/o.jpg']",
    "names": "[u'Yamamoto Japanese Cuisine', u'Japanese Express', u'Watami Sushi & Grill', u'Ichiban Asian All You Can Eat']",
    "num_reviews": [
      80,
      21,
      4,
      55
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": "[3.5 3.5 3.5 3. ]",
    "mean_rating": 3.375,
    "num_options": 4
  },
  {
    "": 160,
    "X": 652,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/p1lQVZ2fwxN4NfLTr5BFzA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/A5Q5ali2OQhYQTzmdCt_nA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/OmtANIdZNsEA4SwvIVCK1g/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IoyKde4XQJGhc0oGlmuqVA/o.jpg']",
    "names": "[u'32nd Cafe', u'Panaderia Y Tortilleria', u'Los Burritos', u'Las Brazas']",
    "num_reviews": [
      6,
      4,
      14,
      4
    ],
    "prices": [
      1,
      1,
      1,
      1
    ],
    "stars": "[4.5 4.5 4.5 4. ]",
    "mean_rating": 4.375,
    "num_options": 4
  },
  {
    "": 161,
    "X": 469,
    "category": "italian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/dSeTRb4RiU9qEYkCzhS-dw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/-kUgKOxoLpo9H1bA4yBUgg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/jG4DHXIpCOPhXjmgSF1Htw/o.jpg']",
    "names": "[u'Enoteca Sociale', u'Parkette', u'Cantina']",
    "num_reviews": [
      279,
      28,
      8
    ],
    "prices": [
      3,
      2,
      2
    ],
    "stars": "[4.  3.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 162,
    "X": 289,
    "category": "vietnamese",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/GYwMdrAxVzOfFMWrraHOSw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/U7Xg_tYc-X5xKewyJer0pg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/4inTBwy2W_hhNE4Slqv58w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/zFy1bKagk3kp-X678ceT3w/o.jpg']",
    "names": "[u'Pho So 1', u'Trong Khanh Restaurant', u'Pho Anh Huyen Noodle House', u'Pho Kim Restaurant']",
    "num_reviews": [
      7,
      3,
      8,
      10
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": "[4.5 4.  4.5 3.5]",
    "mean_rating": 4.125,
    "num_options": 4
  },
  {
    "": 163,
    "X": 147,
    "category": "vietnamese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/DyiOynq9Shoeo_5mXTL6zQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/FJFfJ9FUTDC3kWzTho38Cg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/9WV-99b5z-ttkmPpY1rncA/o.jpg']",
    "names": "[u'Saigon Grille', u'Superior Pho', u'Number One Pho']",
    "num_reviews": [
      50,
      188,
      81
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[3.5 4.5 3. ]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 164,
    "X": 907,
    "category": "breakfast",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/e6sGhDlFnwtu95mMBwYpYw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/yISV0so9R5GoEXkoq5Dajw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Eo3ShA6gI8uKdOucKa40VQ/o.jpg']",
    "names": "[u'Chagrin River Diner', u'Crepes In the City', u'Kleifelds Restaurant']",
    "num_reviews": [
      12,
      89,
      55
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.5 4.5 4. ]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 165,
    "X": 513,
    "category": "steak",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/UlVWrisIcVH9nRFPg2K-3g/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/aB_O3RRZSDCEG80lhFanHg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3yJZjmp1AK4KUBsInC_EDA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/x7Y8Ee0RoUokcMvqtIOANw/o.jpg']",
    "names": "[u'The Garden Grill', u'R Steak & Seafood', u\"Kristofer's Steak House\", u'THE Steak House']",
    "num_reviews": [
      56,
      112,
      4,
      365
    ],
    "prices": [
      2,
      3,
      4,
      3
    ],
    "stars": "[3. 4. 3. 4.]",
    "mean_rating": 3.5,
    "num_options": 4
  },
  {
    "": 166,
    "X": 571,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/A-GL9HK3d4dN-bKORk69hg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Bb1LkubEFnDmRuGE3Y2bLw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/9vq245WpJ8ThbqAzSq7DWQ/o.jpg']",
    "names": "[u'Barrio Avion', u'Taberna de Tequilla', u'Blue Burrito Grille']",
    "num_reviews": [
      29,
      87,
      60
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3. 2. 3.]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 167,
    "X": 976,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/iurosazpPr53zAPnO4uUVQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/BGJ4Nf9qRWcXyY9Kj32tog/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/EmxUhfnsTYhCrynz_tWWQQ/o.jpg']",
    "names": "[u'Sakura Garden', u'Yaso Sushi', u'Kibo Sushi House']",
    "num_reviews": [
      37,
      3,
      10
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": "[3.5 3.5 4. ]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 171,
    "X": 35,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/YluVOA66P__IxrFL5y6DRg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/tuIyefuI4lstQ5FHNpX9fA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ky6JQTTN20zDnVNIm1ugbQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/GRouLn52rbx5iVATOlf77g/o.jpg']",
    "names": "[u'Angus Pho House', u'Pho Vietnamese Delight', u'Happy Noodle', u'Pho Delight Vietnamese Cuisine']",
    "num_reviews": [
      154,
      51,
      13,
      5
    ],
    "prices": [
      1,
      1,
      1,
      1
    ],
    "stars": "[4.  2.5 4.  2. ]",
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 172,
    "X": 326,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/fPmPLiWZ421zJ9yM-HvchA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/QrUdOz2EzXxDpLkh9sg_2g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/bMU994HGMPPPVWhKMczW5Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/qeYoCH4OLM3riIIP1zDbnw/o.jpg']",
    "names": "[u'Roll & Roll', u'Fin Izakaya', u'I Zu Japanese Restaurant', u'Gold Zen Japanese & Asian Dining']",
    "num_reviews": [
      3,
      79,
      21,
      7
    ],
    "prices": [
      1,
      3,
      2,
      2
    ],
    "stars": "[5.  3.5 3.5 2.5]",
    "mean_rating": 3.625,
    "num_options": 4
  },
  {
    "": 174,
    "X": 240,
    "category": "italian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://media-cdn.tripadvisor.com/media/photo-s/0d/b0/72/23/20161121-130145-largejpg.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/20NMKVrsLAZJ2C5KBGrGmg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/i-5MwzuzGBoU8BGjKBBvTA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ZtRht2Ih5lZhnKctE8mUwA/o.jpg']",
    "names": "[u\"Maggiano's Little Italy\", u'La Torretta Ristorante', u\"Carrabba's Italian Grill\", u'Pasta Pomodoro']",
    "num_reviews": [
      547,
      183,
      144,
      4
    ],
    "prices": [
      2,
      3,
      2,
      2
    ],
    "stars": "[3.5 4.  3.5 4. ]",
    "mean_rating": 3.75,
    "num_options": 4
  },
  {
    "": 175,
    "X": 876,
    "category": "pizza",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/M11FLwyvODn6q51NVNYVcA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/9coyDdf3ke2iQEBLc8Jv_Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/yf1OENMGMef75Xy1B90pSA/o.jpg']",
    "names": "[u'850 Degrees Pizzeria', u'Amato Real Pizza', u'King Slice']",
    "num_reviews": [
      5,
      16,
      80
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[4.  2.5 3.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 177,
    "X": 701,
    "category": "indian",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/PH6gTBI_LDruj4jhe-aQlw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/IvxSH6YDvGc4rPJr-cwVdQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/hvP9OnmrpUVCLajyeU9-iw/o.jpg']",
    "names": "[u'Indian Bowl Cuisine', u'Taste of India', u'India Market & Cafe']",
    "num_reviews": [
      8,
      39,
      16
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[5.  4.  3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 178,
    "X": 1026,
    "category": "seafood",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/L0u1Ot2YH4RvePE3mIRZxA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/_W5j9qHXzw2QKsDJ7nmfZw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/LI2YzWcKafpy38fC_VdFaA/o.jpg']",
    "names": "[u'McCormick & Schmicks Seafood Restaurant', u'Fuego Del Mar', u'Steamers Genuine Seafood']",
    "num_reviews": [
      45,
      2,
      20
    ],
    "prices": [
      3,
      2,
      3
    ],
    "stars": "[4.  4.5 3. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 179,
    "X": 865,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/tvpe4su8ikzbDXc23pWaiw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/kcAAkF7kiUUYs0zyaBV7bg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/VFr820YEntHWGBREBT3D4g/o.jpg']",
    "names": "[u'Com Tam Dao Vien Peach Garden Pho', u'Pho Cuu Long Mien Tay', u'Danang Vietnamese Restaurant']",
    "num_reviews": [
      5,
      37,
      7
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[3.  3.5 3.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 181,
    "X": 233,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/6QW305k8Y6cd2nGvp9pq3g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/fOBU2qquPMOpYB9o6DJvQQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/oO7sFjjW5vxr68XPjr8lgw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/H8PPenccky5KJ_wjD-OSuA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/5HSDPJBTYAnzOKphr0sXZg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/WK9w5eyevAY-OZ9CVqbbew/o.jpg']",
    "names": "[u'Donburi', u'Takebashi Japanese Noodle House', u'OTA Japanese Cuisine', u'Miyabi Japanese Restaurant', u'Jyuban Ramen House', u'Akasaka Japanese Restaurant']",
    "num_reviews": [
      115,
      6,
      4,
      23,
      29,
      26
    ],
    "prices": [
      2,
      1,
      2,
      3,
      2,
      2
    ],
    "stars": "[3.5 2.5 3.5 3.5 3.  3.5]",
    "mean_rating": 3.25,
    "num_options": 6
  },
  {
    "": 182,
    "X": 398,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/BU7eJCm5lNuA7P5oXcbkQA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/lLlBAo_FZGVc0nAq3HRmWA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/2pf4W5qlfaWS5R9N0FGUlw/o.jpg']",
    "names": "[u'Del Yaqui', u\"Loreto's Mexican Food\", u'San Diego Bay Restaurant']",
    "num_reviews": [
      21,
      6,
      50
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  3.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 183,
    "X": 787,
    "category": "italian",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/uNe_bkr8Tzb-CPyAQJQzLA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/aKc8eeO9xGWN_3KmdaufCA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Fmeig836LFM4oyEdVL3dfg/o.jpg']",
    "names": "[u'Pasta Nuovo', u'Vin Santo', u'Tutto Pasta']",
    "num_reviews": [
      14,
      111,
      25
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 4.  2.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 185,
    "X": 974,
    "category": "vietnamese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/c3YCIUGsxH9Xuadv_Kd1wA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/FwUxN2Wsnhkhx3WFsMCZYw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/oWET7WWPTc7sHQ2uUQs5Ow/o.jpg']",
    "names": "[u'Pho 99', u'Ninh Kieu Vietnamese Restaurant', u'Pho Ha Nam']",
    "num_reviews": [
      26,
      43,
      9
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 186,
    "X": 768,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/IiuoVLaHunqV5GGDMmq7XQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/9YDQPOkm3aRDvXjj0IATsQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/bhD9NUXwyzkti-0OCZOe1w/o.jpg']",
    "names": "[u'Katsuya', u'Mr Tonkatsu', u'Kenzo']",
    "num_reviews": [
      124,
      50,
      72
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 3.5 3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 188,
    "X": 1024,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/IMiavs9VTcGBQCiiXBbtiw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/zp27ID4Q5hgMBqBjQYd9Uw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/hTPOfF8OhzTjwyR8DWwGkQ/o.jpg']",
    "names": "[u\"Angie's Pizza\", u'My Pizzetta', u'Augies Pizza & Ribs']",
    "num_reviews": [
      11,
      27,
      10
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      4,
      4,
      4
    ],
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 189,
    "X": 410,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/uurDaQkwwxxOw65qtgGceA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/3bmXXiPt8pJbHz40u_IphA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/JBBDaRm39KLgtxCXSYNdrA/o.jpg']",
    "names": "[u'Pizza Buddha', u\"Carmine's Pizza Kitchen\", u'3 Brothers from Italy Jersey Shore Pizza']",
    "num_reviews": [
      12,
      29,
      10
    ],
    "prices": [
      3,
      2,
      1
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 191,
    "X": 958,
    "category": "american",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/xZr5gZZ87NzNSus49e-6_w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/iXvfhe5rj9lzRRHVAcY5qg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/hKFiSlBiLcNUxTrqKm4DXA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/hK0IQWC6OYDOUF_4jXIMQw/o.jpg']",
    "names": "[u'7th Heaven Eatery', u'Deemos American Grill', u'Bistro 24', u'The Bamboo Club']",
    "num_reviews": [
      8,
      20,
      16,
      12
    ],
    "prices": [
      2,
      2,
      2,
      3
    ],
    "stars": "[3.  2.  4.  2.5]",
    "mean_rating": 2.875,
    "num_options": 4
  },
  {
    "": 192,
    "X": 351,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/cP_yRYVxwGarBl5OMdLqKQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/zeJcpQMaOZrU6J59c0LO4g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/OXI3iwtB2BjMiLHjz7Hx4A/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/P4NzbDfVq3FB3p-TXTtVIQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/HFzHgyWE3NGHdXuGd9RzKw/o.jpg']",
    "names": "[u'La Casa Del Mariachi', u'La Tradicion Restaurant', u'La Barquita Restaurant', u'Tortas el Rey', u\"Rosita's Place\"]",
    "num_reviews": [
      4,
      3,
      58,
      34,
      138
    ],
    "prices": [
      2,
      2,
      2,
      1,
      1
    ],
    "stars": "[3.5 4.5 4.  4.  4. ]",
    "mean_rating": 4,
    "num_options": 5
  },
  {
    "": 193,
    "X": 759,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/sgdEu16sTJh88oMhifY7tw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/5TVJhQEL9QLJAum972LEWg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/cngtmo8mJnX4mpI29uqJHw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/VIyNDjpXuacS2sF0YRU1eQ/o.jpg']",
    "names": "[u'Fuji Lamb House', u'Xin Jiang Barbecue Restaurant', u'Wynner Grill', u'Jiu Pin Xiang Chinese Restaurant']",
    "num_reviews": [
      4,
      34,
      4,
      3
    ],
    "prices": [
      2,
      2,
      2,
      2
    ],
    "stars": "[3.  3.5 3.  3.5]",
    "mean_rating": 3.25,
    "num_options": 4
  },
  {
    "": 194,
    "X": 479,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/kj-Eqb_Em8_4dlzAezfHEQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/pyLLmH_W1es-UaSlsvl4EA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/YJvKVBFT4zH5Tljb5iAn7Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/gS7DYtk0Mb4_hv5LE9REfw/o.jpg']",
    "names": "[u'The Gala Apple', u'Fat Boys', u'Pies N More', u\"Nielsen's Frozen Custard On Baseline\"]",
    "num_reviews": [
      8,
      4,
      23,
      9
    ],
    "prices": [
      1,
      1,
      1,
      1
    ],
    "stars": [
      4,
      3,
      3.5,
      4
    ],
    "mean_rating": 3.625,
    "num_options": 4
  },
  {
    "": 195,
    "X": 131,
    "category": "steak",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/xC1e7pwRvHWaMrT2AZemeg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/aACc8zIPZvhw9RCNeMoP4w/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/BI3wqVsRlJvXIUKb_GSnxQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/WsKl99EEI5udHTUwpeBrcg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/cTK9v8fSgyyBNNlggiFrLQ/o.jpg']",
    "names": "[u\"Sammy's Famous Corned Beef\", u\"McCormick & Schmick's Seafood & Steaks\", u\"Eddie Merlot's - Pittsburgh\", u'The Carlton', u'Ruths Chris Steak House']",
    "num_reviews": [
      9,
      52,
      53,
      49,
      60
    ],
    "prices": [
      1,
      3,
      3,
      3,
      4
    ],
    "stars": [
      2.5,
      3.5,
      4,
      4,
      4
    ],
    "mean_rating": 3.6,
    "num_options": 5
  },
  {
    "": 196,
    "X": 818,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/KkZIQFZEXg2C7JykJfzgyQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/7JTp4FKKDT2wuFp9-g9qxg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/9oZTOrypiuUYmkRWsW5HOw/o.jpg']",
    "names": "[u'Mr Burrito', u'Salsitas', u\"Manuel's Fine Mexican Food\"]",
    "num_reviews": [
      4,
      7,
      9
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": [
      2.5,
      3,
      3
    ],
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 197,
    "X": 926,
    "category": "burger",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/0VETh1dhifgkWXkiOBJu8w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/JOobL2nwcnv5Gt83gFN0RQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IDazuRSN7KuoRgXThjAY9Q/o.jpg']",
    "names": "[u\"Applebee's\", u'Howlers Craft Burgers & Beer', u'Bacon Inc. Bar and Grill']",
    "num_reviews": [
      7,
      29,
      19
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[1.5 3.5 2. ]",
    "mean_rating": 2.33333333333333,
    "num_options": 3
  },
  {
    "": 198,
    "X": 235,
    "category": "japanese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/Hf1p0xOlmW2PcLuo2Jx9tQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/eTo9gooGQzcKSbzk1XXXgw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/RwoOQK39Pq9QTiInBfjV_g/o.jpg']",
    "names": "[u'Ichimoto', u'Goen Yakiniku', u'Koi Sakana Ramen House']",
    "num_reviews": [
      33,
      8,
      136
    ],
    "prices": [
      2,
      3,
      2
    ],
    "stars": [
      3.5,
      3.5,
      4
    ],
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 199,
    "X": 891,
    "category": "chinese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/tFsMctPXkeD6YyX85YqfCQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Mwo3247oMOmmnIhbirP60w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/bJN6CwVYc1J7vVrCE3Pjhg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/8YJCMhWIb5MXNaHmm2sUBg/o.jpg']",
    "names": "[u'China Cafe', u'Lin Garden', u'New China King', u'Golden Gate Chinese Restaurant']",
    "num_reviews": [
      12,
      5,
      31,
      13
    ],
    "prices": [
      1,
      1,
      1,
      1
    ],
    "stars": "[3.5 2.  4.  3. ]",
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 200,
    "X": 104,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/sLALY07RXMhPO2a-SXFdIA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Ilm_NIIQEDu8iOBsZNu0Kw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/a85bdBsdBOYrXHnlf8lbog/o.jpg']",
    "names": "[u\"Al's Beef\", u\"Taylor's Cafe\", u'Fresh Salad Company']",
    "num_reviews": [
      82,
      3,
      3
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      3.5,
      3.5,
      2
    ],
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 201,
    "X": 105,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/wDyEDnlaPkjvbFSlKZBP2A/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/kb1PKzdHwql2pNOKWOGIPg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/xZb0E5Hk4oicahbySvt2ig/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/-Nsg4B-YDm-WnyciPZq5GA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/TI3Zh2WPKYoOci5ldoyyVQ/o.jpg']",
    "names": "[u\"Calico Jack's\", u'Salt Tacos and Tequila', u\"Garduno's\", u'Camarones', u'Salt Tacos y Tequila']",
    "num_reviews": [
      212,
      12,
      7,
      29,
      123
    ],
    "prices": [
      2,
      3,
      2,
      2,
      2
    ],
    "stars": "[2.  3.  2.5 3.  3. ]",
    "mean_rating": 2.7,
    "num_options": 5
  },
  {
    "": 202,
    "X": 101,
    "category": "sushi",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/nO68mUYkZuBnMdJQrN9G1g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/jHqZtK-Lrno8Q6nX6RE47w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3f69UQtejwrfbmxGgoXfdw/o.jpg']",
    "names": "[u'Ichi Ban Japanese Restaurant', u'Yogis Grill', u'International Bistro']",
    "num_reviews": [
      61,
      94,
      4
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": [
      2,
      3,
      3
    ],
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 204,
    "X": 574,
    "category": "american",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/dkROwG-e_eWg7M0mfC3v8A/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/X0e_3PZo8B6VdUAMGFajsw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/y9TAFtFpoGWhJ_DlVPfDYQ/o.jpg']",
    "names": "[u'Before Sunset', u\"Harry's\", u\"Como's Restaurant\"]",
    "num_reviews": [
      2,
      27,
      3
    ],
    "prices": [
      1,
      2,
      3
    ],
    "stars": "[4.5 3.5 3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 205,
    "X": 349,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/hdiEtE4JZx0Usz8Y4BcZRQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/JqtLGGSCuDhLQafePMYu-w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ampTBxfkzYQ1JxAY-oqMrw/o.jpg']",
    "names": "[u'Panera Bread', u\"Chompie's\", u'Subway']",
    "num_reviews": [
      28,
      188,
      11
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": [
      2.5,
      3.5,
      1.5
    ],
    "mean_rating": 2.5,
    "num_options": 3
  },
  {
    "": 206,
    "X": 895,
    "category": "deli",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/ynSrl-37Cn12UaYQ2csj5g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/CU-PNVl4LZGrSyxFGX2QyA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/IMiVBx1hK0rF4vkkYEzgrw/o.jpg']",
    "names": "[u'Stage Deli Of Las Vegas', u\"Canter's Las Vegas\", u'Fulton Street Food Hall']",
    "num_reviews": [
      28,
      142,
      190
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 3.  3.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 207,
    "X": 188,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/FI0cD1L8kPmZtNvJxAKSGQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/x9q1-E98MN_oZzsS2jCIdQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/4JDEKHgYTrnb599-PBPNgg/o.jpg']",
    "names": "[u'Itamae Ayce Sushi', u'Osaka Sushi', u'Itamae AYCE Sushi']",
    "num_reviews": [
      64,
      44,
      39
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  3.5 2.5]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 208,
    "X": 179,
    "category": "sushi",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/t_UO4zIc9Q1JfNchxws-sg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/t3hqZPPR2-Z1OwBNqtMvrA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/zlcLIBu0STmICZjQs_1t5w/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/aXPHPtdbSJg0h8FcVC2oIA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ZFhq7kcfqHsguEwr0HPkmg/o.jpg']",
    "names": "[u'Sushi Kaya', u'Sushi Moto', u'Yui Edomae Sushi', u'Doh Sushi & Tapas', u'Yama Sushi']",
    "num_reviews": [
      796,
      3,
      32,
      355,
      8
    ],
    "prices": [
      2,
      2,
      4,
      3,
      2
    ],
    "stars": "[3.5 3.5 4.5 3.5 3. ]",
    "mean_rating": 3.6,
    "num_options": 5
  },
  {
    "": 209,
    "X": 325,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/4gtXrvR0O7Ty0tsDlRazfg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/b3vS6D9PqE7sJMxRBv-pLA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/knk4gVGJSps93sxJrXgVUQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ZrX4VpHLHxSvptB85Fl-iA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/vPVwb_dp3SZDWeFY5rUO4Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/WY_WEsEvDj3b0OGFlFVGfg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Lq3RHGfpXLZCsCTJUfOjwA/o.jpg']",
    "names": "[u'Truly Thai Cuisine', u'Spring Rolls', u'Lime Asian Cuisine', u'Dee', u'Star King Viet Thai Cuisine', u'Mai Thai Restaurant & Catering', u'Sorn Thai Restaurant']",
    "num_reviews": [
      8,
      46,
      62,
      12,
      66,
      15,
      102
    ],
    "prices": [
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ],
    "stars": [
      3,
      3,
      3.5,
      4,
      3.5,
      3,
      3.5
    ],
    "mean_rating": 3.35714285714286,
    "num_options": 7
  },
  {
    "": 210,
    "X": 444,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/koM02gQUB_DGro_BsAv5Rg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/RimL6zTawNmF5jIad3mU4g/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/X9pSmjixYRcU2GizcbBqzQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/QVoZgXy6Jbw7-LEZd2sfbw/o.jpg']",
    "names": "[u\"That's Amore\", u'Supreme Pizza', u'Piccolo Forno', u\"Pesaro's Pizza\"]",
    "num_reviews": [
      6,
      5,
      210,
      20
    ],
    "prices": [
      2,
      1,
      2,
      1
    ],
    "stars": [
      4.5,
      3.5,
      4,
      3
    ],
    "mean_rating": 3.75,
    "num_options": 4
  },
  {
    "": 211,
    "X": 419,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/pSTx_NIZIBn4PJnF6xOJKw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/nttBhH-5Rp6DjtSPFlxAfw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Oq8InQHb1Edwk6zvZLsqVw/o.jpg']",
    "names": "[u'Safa Tikka & Kebab House', u'Dosa Rama', u'India 360']",
    "num_reviews": [
      5,
      20,
      20
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.5 3.  3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 212,
    "X": 1025,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/KhONYcwLCn08HS89BT0Hog/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/7nTNHDag4WCBS5bdUeBiZw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/8b-zUMwFAVq38GxBDIwxcA/o.jpg']",
    "names": "[u'Tim Sushi and Cafe', u\"Gal's Sushi\", u'Tasty Ya']",
    "num_reviews": [
      11,
      295,
      4
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": "[3.  3.5 4. ]",
    "mean_rating": 3.5,
    "num_options": 3
  },
  {
    "": 214,
    "X": 497,
    "category": "breakfast",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/kSCukCg9CtaNBV854IZ0_w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/zVEKWkLURknmC5yE3eCtxg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/SorNppnXKxr2fqUp4tVwkw/o.jpg']",
    "names": "[u'Bonbon Pastry and Cafe', u'West Side Market Caf\\xe9', u\"Nick's Diner\"]",
    "num_reviews": [
      72,
      47,
      12
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.5 4.  4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 215,
    "X": 83,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/XJa0VguF1uQISkfiYsGeKA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Mj3txVKf1UBwtlfWs845HA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1fX-hvJHWVZkyM2krJ7WMw/o.jpg']",
    "names": "[u'Il Bosco Pizza', u\"Amy's Baking Company\", u'California Pizza Kitchen at Gainey Ranch']",
    "num_reviews": [
      1,
      51,
      11
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": [
      5,
      3.5,
      4
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 216,
    "X": 552,
    "category": "chicken",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/x7Uc5zXfU1cnJz3KycTTPw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/utuyz70Bkq_OAexGUZ6OLw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/yk1Opg-gQvLQ2zfInGcYfg/o.jpg']",
    "names": "[u\"Lo-Lo's Chicken and Waffles\", u'Slim Chickens', u\"Lo-Lo's Chicken & Waffles\"]",
    "num_reviews": [
      528,
      89,
      2
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.  3.5 3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 217,
    "X": 389,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/QnmQDZubMXApho6qkkOdBg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/6s3Mv7CNJMD3yhOGxnQTew/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/k7PTUU3erSAmEXrossHLrw/o.jpg']",
    "names": "[u\"Monte's Pizza Restaurant\", u\"Ray's Pizzeria and Restaurant\", u'Verrazano Pizza']",
    "num_reviews": [
      3,
      12,
      178
    ],
    "prices": [
      3,
      2,
      1
    ],
    "stars": "[2.  2.5 4. ]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 218,
    "X": 76,
    "category": "breakfast",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/NhuwSv2s1JpJZPSf4eVztQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/sroXkJ5PEH86sXR9-rN9WA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/gGrIrOTdJ2u9Mkdz44tfBQ/o.jpg']",
    "names": "[u\"Barb's Corner Kitchen\", u'City Cafe', u'Mauramori Cafe']",
    "num_reviews": [
      96,
      15,
      26
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.  3.5 3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 219,
    "X": 429,
    "category": "mexican",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/GCJNawOYwRiQz62EWVyL_g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/EGG-m9DMMVXTA4ivL0ecvQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/QrVK8rr1kaknjOdiBMQR5w/o.jpg']",
    "names": "[u\"Sanchos's Mexican Grill\", u'Viva Michoacan', u'Chavelos Mexican Bar and Grill']",
    "num_reviews": [
      26,
      137,
      157
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": [
      4,
      4,
      4.5
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 220,
    "X": 772,
    "category": "breakfast",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/vOVHUrKfJ7tPYbsT_WTyPQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/eVbenUyZfduUsZ3BUgUXMg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/gg84tcN22GNqfER2FEUyjg/o.jpg']",
    "names": "[u\"Della's Kitchen\", u'Seabreeze Cafe', u'Crossroads Restaurant & Bar - Las Vegas']",
    "num_reviews": [
      299,
      70,
      97
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 3.  3.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 221,
    "X": 206,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/ELtlT31aMpZBKi_HH1JIoQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/8_Gi2U336fSfuO0dBBou3g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/kDgmakmqvIiT0G2ta7Vp9A/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/BfZB9PqCwRiyZhfo3SJ1Bw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Dxt5lt1SmmGtEPoKN0LL1Q/o.jpg']",
    "names": "[u\"Edison's Pizza Kitchen\", u\"Tony's Southside Pizza\", u'Crust', u'Dante Next Door', u\"Big Guy's Pizza\"]",
    "num_reviews": [
      123,
      14,
      152,
      49,
      6
    ],
    "prices": [
      2,
      2,
      1,
      2,
      2
    ],
    "stars": "[4.  3.  4.5 4.5 4.5]",
    "mean_rating": 4.1,
    "num_options": 5
  },
  {
    "": 222,
    "X": 1014,
    "category": "burger",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/ssBEu7k9GywMHMPBVIXHtg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/7akHeyQd254IU2830G3SrQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/WaYHurH2KjaRLMJKlbhVDg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/nWGPv4oRLYwnp3Ujevwciw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/l2aR9Asp1Dn2StfusWbomQ/o.jpg']",
    "names": "[u'Hamburger Yumi Yum', u'Ranch Burger', u\"Jimmy G's Burgers\", u'Fat Ass Burger', u'Da Burger Shack']",
    "num_reviews": [
      2,
      3,
      43,
      8,
      22
    ],
    "prices": [
      2,
      1,
      1,
      1,
      1
    ],
    "stars": [
      4.5,
      2,
      4.5,
      2.5,
      4.5
    ],
    "mean_rating": 3.6,
    "num_options": 5
  },
  {
    "": 223,
    "X": 103,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/1UIe2FoPRQmUd8BVc_9mMg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/2fb5Q4TilOS7DMBazR8aGQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/E2HUseKeG0X2DpgLGthqwg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/8qFJ89CYJx84Ikb0RbrwkQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/l5Sk-GpoodTbt_qHvygCbw/o.jpg']",
    "names": "[u'Los Reyes De La Torta', u'Filibertos Mexican Food', u'Pepe El Toro Mexican Food', u'Two Hippies Beach House', u'El Bravo Mexican Food']",
    "num_reviews": [
      386,
      12,
      3,
      15,
      99
    ],
    "prices": [
      1,
      1,
      1,
      1,
      1
    ],
    "stars": "[4.  4.5 3.5 3.5 4. ]",
    "mean_rating": 3.9,
    "num_options": 5
  },
  {
    "": 224,
    "X": 425,
    "category": "mediterranean",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/RkyucPuZuNRhy3pk0INJwQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/_RpMDCv-LZB9IVTsq3KRNg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/PzmTFUjqOn3wmgB1qttNBg/o.jpg']",
    "names": "[u'Casbah Restaurant', u'Mediterranean Cafe', u'Palmyra Mediterranean Grill']",
    "num_reviews": [
      16,
      159,
      65
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[3.  4.5 3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 226,
    "X": 108,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/OKABAdI5q6uy-Ud8wSxIvw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/xvexJ7A-MHakVF8lf_EdMQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ha6_duBA7VpHKqKSbgcgLw/o.jpg']",
    "names": "[u'Taco Mex', u'Taco Mich', u'Casa De Don Pancho']",
    "num_reviews": [
      10,
      6,
      1
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.  3.5 5. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 227,
    "X": 21,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/9u61yt248Bf5XFIgRRxh_A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/f5fdGiflLCBSH9-Zbs7d-A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/YfHtwAJg76XwY6i0hv5S8A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Jt50wNss4fAUPxHwvO_Fjw/o.jpg']",
    "names": "[u'Mamma Mia Brick Oven Pizza & Pasta', u'Pizza on 40th', u'Nook Kitchen', u'Slice of Sicily']",
    "num_reviews": [
      223,
      11,
      275,
      61
    ],
    "prices": [
      1,
      1,
      2,
      1
    ],
    "stars": [
      4,
      4.5,
      4.5,
      4
    ],
    "mean_rating": 4.25,
    "num_options": 4
  },
  {
    "": 229,
    "X": 299,
    "category": "breakfast",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/WDbNZuMok_oSKuBSDPwlBw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/nK8j22YCdUrtqXUFvDopPQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/X9QEg2SID9h7ombCWOAitA/o.jpg']",
    "names": "[u'Village Inn', u'US Egg', u'Blue Plate Brunchery']",
    "num_reviews": [
      11,
      72,
      7
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3.5 4.  2.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 230,
    "X": 923,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/7OymvR02j3yNl5hqYZdxfg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/fdl2y4-9ebX-YXWIaCb1EA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/qsbFDleEh9VJBUDywYO0Jg/o.jpg']",
    "names": "[u'Bombay Buffet Indian Cuisine', u'Spice Shack', u'Govardhan Thal']",
    "num_reviews": [
      12,
      3,
      8
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[2.5 4.  4. ]",
    "mean_rating": 3.5,
    "num_options": 3
  },
  {
    "": 231,
    "X": 278,
    "category": "vietnamese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/_ZGQfBT3bB2UN6Cd7gd50g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/4TcSf6sv4EuhXWzNIL7FOw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/-isxnIljKLVjc9qEhCiaGg/o.jpg']",
    "names": "[u'Pho Lan', u'Nha Trang Restaurant', u'Pho Ha Noi']",
    "num_reviews": [
      78,
      21,
      9
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 232,
    "X": 381,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/c2SHb8LQzmfx6Ia9L-QZNA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Lddl9mH266FlYAMKF88DyA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/97nZPRkNVtkaV5u6HDmBvQ/o.jpg']",
    "names": "[u\"Mineo's Pizza House\", u'Il Pizzaiolo', u\"A'Pizza Badamo\"]",
    "num_reviews": [
      16,
      105,
      11
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[4.  4.  4.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 233,
    "X": 799,
    "category": "sushi",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/sZeuuM_QUx9OYVwU-NFKQg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Abn-4bfJgAc1S6wlaCOf-g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Abn-4bfJgAc1S6wlaCOf-g/o.jpg']",
    "names": "[u'Love Sushi', u'Nakato Japanese Steakhouse', u'Nakato Japanese Steakhouse & Sushi Bar']",
    "num_reviews": [
      114,
      137,
      7
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  3.5 2.5]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 234,
    "X": 600,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/OW01nBViDP7dHI7xcKaI4g/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/HkzG40T8CE9cbqWE-Aqhtw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Q_tp6xdIj43lx8dFfRj4gw/o.jpg']",
    "names": "[u'Fabio On Fire', u\"Sardella's Pizza & Wings\", u'Cousin Vinny Pizza & Pasta']",
    "num_reviews": [
      49,
      73,
      62
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 235,
    "X": 665,
    "category": "deli",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/EXmk4shaLmRPb3Zc6keVDA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/pUVZmE0H9o_FDEAsOfg5Vg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/hWv3g_KJCaBFiTOde4VX0A/o.jpg']",
    "names": "[u'Village Meat Products & Deli', u\"Benna's Bakery & Deli\", u\"Granowska's Bakery\"]",
    "num_reviews": [
      1,
      3,
      6
    ],
    "prices": [
      2,
      2,
      3
    ],
    "stars": "[5.  4.5 3. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 236,
    "X": 29,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/vCf7fJ7ex4OG5P24J-wLJw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/9pT53Es2vQ776a5qdYKJmw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/r0wojOaVBrPphnv_4RTAtg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/RLVdQjFc_qbgfLjnYzW7lg/o.jpg']",
    "names": "[u'Sichuan Secret', u\"Billy's Dumplings\", u'Noodle Bowl', u'Regal Garden']",
    "num_reviews": [
      12,
      11,
      50,
      19
    ],
    "prices": [
      2,
      1,
      1,
      2
    ],
    "stars": [
      4,
      3.5,
      2,
      4
    ],
    "mean_rating": 3.375,
    "num_options": 4
  },
  {
    "": 239,
    "X": 182,
    "category": "italian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/FvglIgDdHbDwxUc51pQLyg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1TORg0OpxFXe7Yu_3r_9Eg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/xnqwRl8j11nJ7R1p__Rsgg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/8GHSzlrqPlW1CZ1h-eBj2A/o.jpg']",
    "names": "[u'Unionville Co. Restaurant', u'Il Postino', u'Unionville House Restaurant', u'La Grotta on Main']",
    "num_reviews": [
      7,
      23,
      3,
      17
    ],
    "prices": [
      2,
      3,
      2,
      3
    ],
    "stars": "[3.  3.5 4.  2. ]",
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 241,
    "X": 524,
    "category": "american",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/xKwJ3-gJLreARXpbwRS53w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/8juAck0IuP3liLi-aiYf-Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ERa0I_HfodRsG6cXr27P-Q/o.jpg']",
    "names": "[u'Halftime Sports Bar & Grill', u'Heritage Food and Drink', u\"Rippington's\"]",
    "num_reviews": [
      3,
      53,
      32
    ],
    "prices": [
      1,
      3,
      2
    ],
    "stars": "[1.  4.5 3.5]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 244,
    "X": 790,
    "category": "italian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/W62Bren3pdTg_I5Cqe1hrA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/RfTWV4SFdR6Y1AO0qL1-hQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/1BqRT1HNpxARwFR5IWpxcg/o.jpg']",
    "names": "[u'Giordano Trattoria Romana', u'Alberto Ristorante Italiano', u\"Corrado's Cucina Italiana\"]",
    "num_reviews": [
      35,
      90,
      6
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 4.  3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 246,
    "X": 352,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/Wa7H3FUjV5M3tY2p3j--QQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/78XgE0dw2Jt_ridXATcPDA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/FujW9yAZHx8c9oENfx9WVA/o.jpg']",
    "names": "[u\"Texano's Carne Asada\", u'El Paisano Market and Laila Check Cashing', u'Costa Vida Fresh Mexican Grill']",
    "num_reviews": [
      9,
      2,
      3
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      3.5,
      5,
      4
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 247,
    "X": 1012,
    "category": "sandwich",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/I7dbikmStomUb3ovaVM_IA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/e8Pv2k-JjGwrQPMlj-Q58Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/BjDvI4Ro5DuL1Zkia80-QA/o.jpg']",
    "names": "[u'Bread Basket', u'Bread Basket Bakery Cafe', u\"Can't Stop Smokin Bar-B-Q\"]",
    "num_reviews": [
      48,
      11,
      7
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.5 4.5 4. ]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 248,
    "X": 986,
    "category": "cafe",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/rPBG3n6-rU5V9kFcKn1p6A/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ihvdB5d3JbOP8Wz44jBI1A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/byEFxah_MpizJGzFm3pyMA/o.jpg']",
    "names": "[u'Cut Above Cafe', u'Central Cafe', u'The Courtyard Cafe']",
    "num_reviews": [
      1,
      1,
      15
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  5.  4.5]",
    "mean_rating": 4.5,
    "num_options": 3
  },
  {
    "": 250,
    "X": 116,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/IFz-TpUodDm9GwkuZv7B5A/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IN6yn6_vRXCS9aw0XZ8uKg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/UX72KerJj-EaPqrEWCLH3A/o.jpg']",
    "names": "[u\"Juan's Authentic Mexican Food\", u'Tacos Mexico', u'Barrio Caf\\xe9']",
    "num_reviews": [
      85,
      3,
      583
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 251,
    "X": 195,
    "category": "thai",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/Vlcb_lL26DM2dqPKYbnbQQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/9nPuq0UdaGV3nP-PtYfJVQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/VVO--XE0BEVlyJZVjI16Jg/o.jpg']",
    "names": "[u\"La's Thai Cuisine\", u\"Thai Chef's Bistro\", u'Siam Oishi']",
    "num_reviews": [
      6,
      16,
      8
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 252,
    "X": 955,
    "category": "salad",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/YlmByQ1WXOIFePQ3pCutnw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/sVtIsSgNrl1z_NH6H0ZxVw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/vevZMBaQ-d2tAW36rZiv6A/o.jpg']",
    "names": "[u'Zaytoon Lebanese Kitchen', u'Mixed Greens', u'Mixed Greens Salad Bar']",
    "num_reviews": [
      10,
      8,
      2
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[5.  3.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 253,
    "X": 17,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/TKGtIVjCtevSqH6iREgnGA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/_Tl_5svz_UuJX-WmwColxA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/p4uudmumuaY521tNjGHa8w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/-sJbSwPWXoiGlZ_bLpAK9Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/oxGhH7JOBK5VUIq1NBbztw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Rv3MErD1tcfzkJ3wq0MLMw/o.jpg']",
    "names": "[u'Banana Leaf Asia Bistro', u'Yummy Yummy Chinese Restaurant', u\"Jimmy Woo's\", u'China Wok', u'Panda Express', u'Sunshine Moon Peking Pub']",
    "num_reviews": [
      13,
      43,
      80,
      69,
      7,
      32
    ],
    "prices": [
      1,
      1,
      2,
      1,
      1,
      2
    ],
    "stars": [
      2.5,
      3,
      3,
      3.5,
      2.5,
      3.5
    ],
    "mean_rating": 3,
    "num_options": 6
  },
  {
    "": 255,
    "X": 481,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/1ZxMbbz21h-XbsCi-rOZXQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/YLxdQdlRxUeRP8NO6_h9fw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/HMY50ehtEStxhbrak4-BzA/o.jpg']",
    "names": "[u\"Bruno's Pizza\", u'By The Inch Pizza Caffe', u'Pizza Gourmet']",
    "num_reviews": [
      16,
      11,
      13
    ],
    "prices": [
      3,
      1,
      2
    ],
    "stars": "[4.5 4.  5. ]",
    "mean_rating": 4.5,
    "num_options": 3
  },
  {
    "": 256,
    "X": 784,
    "category": "vietnamese",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/Afz1NgyeScvvT2Qr6K_Mlw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/0T3siuk5INsk_-szB0_d7w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/agT0ofR4NxHUbh5Ja6DoMw/o.jpg']",
    "names": "[u'Bolsa  Restaurant', u'Rice For King', u'Pho An Vietnamese Cuisine']",
    "num_reviews": [
      5,
      5,
      1
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[5. 4. 4.]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 258,
    "X": 918,
    "category": "thai",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/l4DWZZmj-mElb_sZFy0hHg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/kQd8_9iln7OjN7cUy3ZbtQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/oj8rvz2t9_Q1NPFaWJ8szw/o.jpg']",
    "names": "[u'Buddha Thai Bistro', u\"Archi's Quick Casual\", u'Pin Kaow Thai Restaurant']",
    "num_reviews": [
      180,
      44,
      520
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 259,
    "X": 969,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/2msSyVxSKZe55QEfEOXEaA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/5K2KCo3AIKr0P_4Nkacfnw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/wnVnPBiCf5KRpiNb_w611Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/ylLNvxPF1YD-tUg_nKsirg/o.jpg']",
    "names": "[u\"Armando's Mexican\", u'La Carreta De Lily', u'La Pi\\xf1ata', u'Poblano']",
    "num_reviews": [
      9,
      16,
      143,
      30
    ],
    "prices": [
      1,
      1,
      2,
      2
    ],
    "stars": "[3.  3.5 4.  4. ]",
    "mean_rating": 3.625,
    "num_options": 4
  },
  {
    "": 260,
    "X": 994,
    "category": "sandwich",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/1_GujMoW4PsKQG4FlTncRw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/0GWgiq-lwYy4eUS6kusx8Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/TuiFUgw9-j9Ld2Hhwj7uzw/o.jpg']",
    "names": "[u'Wicked Sammich', u'Super Submarine', u'Baguette & Co']",
    "num_reviews": [
      3,
      4,
      21
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[2.5 4.5 4.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 261,
    "X": 942,
    "category": "thai",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/x0mvklnb41DFQccyzkDHsg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/q0UdhzT2VGsiQk0y6My2zA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/z9BCFXdv-ml4moPz6GKbGw/o.jpg']",
    "names": "[u'Phnom Penh', u'Kim Se Cambodian Cuisine', u'Banana Blossom Thai Cuisine']",
    "num_reviews": [
      43,
      5,
      28
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": "[3.5 4.5 4. ]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 262,
    "X": 997,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/WB_l7pjZwkF30p0nFMFYog/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/8p0BElt735zriYGLEwKTYQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/va7woqpFm0PB4lb8njXR0w/o.jpg']",
    "names": "[u'Carniceria El Mexicano', u\"Humberto's Taco Shop\", u\"Lupita's Mexican Restaurant\"]",
    "num_reviews": [
      2,
      17,
      8
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[4.5 4.  4.5]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 263,
    "X": 318,
    "category": "japanese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/If2tv8aZxlq0DTkwT3Zn0Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/9euIO8o6wWF2M45XYXKn7A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/XtxYkO9ilM8HGYpeTOb31Q/o.jpg']",
    "names": "[u\"Wasabi Jane's Venetiaen\", u'Mizumi', u'Ichiban']",
    "num_reviews": [
      5,
      97,
      13
    ],
    "prices": [
      1,
      4,
      1
    ],
    "stars": "[2.  3.5 2.5]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 264,
    "X": 914,
    "category": "greek",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/kb9trffYi8qlRtQqQn0QCA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/6zsj5sziyYLxx-tJ_nSjLg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Wqxa-nvuWkmQMQikG1baNw/o.jpg']",
    "names": "[u\"It's Greek To You\", u'Santorini Greek Taverna', u'Greek Express']",
    "num_reviews": [
      5,
      29,
      16
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3.  4.5 4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 265,
    "X": 439,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/BM0QJmqCM9Zbr_ekfqzjow/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Q-ksVMB8wP-8uwpFTuGiDw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/UqzWGRxu8vnCV3k4bP7eJA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/6EAvGwb5rhQyVvZ-hX5lsA/o.jpg']",
    "names": "[u\"Garcia's Mexican Restaurant\", u\"Fuzzy's Taco Shop\", u'Sonora Mesquite Grill', u\"Hal O. Peno's Mexican Cafe\"]",
    "num_reviews": [
      43,
      16,
      171,
      4
    ],
    "prices": [
      2,
      1,
      1,
      2
    ],
    "stars": [
      3.5,
      2.5,
      4.5,
      2
    ],
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 266,
    "X": 694,
    "category": "mexican",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/MRJNdXmji8EfIoAzTYUj9w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/vrAD2fyevSvCNh97ry0YUA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ov-MaPSdK8TNMNQSbQYOhg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ZV5lIgXpGfq_b0mjk66r0g/o.jpg']",
    "names": "[u'Fonda Mexicana El Paraiso', u'Lempira Restaurant', u'The Burrito Factory', u'Comalapa Family Restaurant']",
    "num_reviews": [
      7,
      26,
      39,
      3
    ],
    "prices": [
      1,
      2,
      1,
      2
    ],
    "stars": "[4.  4.  4.5 3. ]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 267,
    "X": 68,
    "category": "mexican",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/SOLCFbwUXVW4ODUSs79AoQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/DsBeaKxyyEcJUPL4cu7iPA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/LkNLFo4nJiw5qHH3m9u1Hg/o.jpg']",
    "names": "[u'Mad Mex - Robinson', u'Don Jose Mexican Grill', u\"Jose' Ole' Mexican Grill\"]",
    "num_reviews": [
      61,
      13,
      13
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": [
      4,
      4,
      4.5
    ],
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 268,
    "X": 616,
    "category": "italian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/E-ZMT2RuJj0c81j4j1sV3g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/rlkDmsrQMywD5H1p18memg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/ibm7rcnNTS0JQTU8zYJ2aQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/cc6WNmkgj6ucBh2GJhBeqQ/o.jpg']",
    "names": "[u'Cafe Roma', u'Bambino Bistro / Vinery 214 Bistro', u'The Strand', u'PastaBAR']",
    "num_reviews": [
      3,
      3,
      10,
      119
    ],
    "prices": [
      1,
      2,
      2,
      2
    ],
    "stars": "[3.5 2.5 3.5 3.5]",
    "mean_rating": 3.25,
    "num_options": 4
  },
  {
    "": 269,
    "X": 511,
    "category": "cafe",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/8D5zj-KefKz6aK0nKvk9wQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/GZUo2Z12U2EU8CXr6LyCWg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/rPBG3n6-rU5V9kFcKn1p6A/o.jpg']",
    "names": "[u'Mother Goose', u'Caffe Gran Sasso', u'Touhenboku Cafe']",
    "num_reviews": [
      1,
      6,
      7
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.  4.5 3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 270,
    "X": 765,
    "category": "steak",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/KCG4CixEIBu976oiuWWTCQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/29dzyS8KUYft7zU2T9J5kA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/YTwtP3Z4XbTXZd1yeFp3jA/o.jpg']",
    "names": "[u\"Manzetti's Tavern\", u'The Palm Charlotte', u'Oak Steakhouse Charlotte']",
    "num_reviews": [
      18,
      138,
      93
    ],
    "prices": [
      2,
      3,
      3
    ],
    "stars": "[3.5 3.5 4. ]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 271,
    "X": 651,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/3jPwZJ5eXFOOP2WWLTZR0w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Ugakc8mX-R6EnzZRm-x2Vg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/BWvfqB09dYjrKqoeISQ32A/o.jpg']",
    "names": "[u'Curry Twist Restaurant', u'High Park Spicy House', u'North of Bombay']",
    "num_reviews": [
      49,
      10,
      22
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  2.5 3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 272,
    "X": 166,
    "category": "american",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/5aZGvCjJraWVEZ1-HLQgCA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ERa0I_HfodRsG6cXr27P-Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/MiX82G7tDrO3RT1mf0fr2Q/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/Lb3rvXYtZX88uHJiGTGDhQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/cMDsipz3qsStcRPB8m0yjw/o.jpg']",
    "names": "[u\"Kitty's Cafe\", u\"Binion's Original Coffee Shop\", u'Pasta Pirate', u'The Grille Inside The Golden Nugget', u\"Magnolia's Veranda\"]",
    "num_reviews": [
      3,
      9,
      16,
      2,
      48
    ],
    "prices": [
      1,
      1,
      2,
      2,
      2
    ],
    "stars": "[3.  3.  3.  2.  3.5]",
    "mean_rating": 2.9,
    "num_options": 5
  },
  {
    "": 273,
    "X": 632,
    "category": "pizza",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/fpTLpkCEwaO7K8OIxEawgA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/VbykGfe_N5AdVW5jFXKO4A/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/GgrfJvzljd0lX-PANF970Q/o.jpg']",
    "names": "[u'Double Zero Pizza Chinook', u'Il Centro', u'Wicked Wedge Pizza']",
    "num_reviews": [
      51,
      21,
      17
    ],
    "prices": [
      2,
      2,
      1
    ],
    "stars": [
      3.5,
      4.5,
      3.5
    ],
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 274,
    "X": 964,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/jPenMabzDRN464kb0aH_vg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/tQhr3F9auKpXS4YrV8m1dw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/rLkEgiS7WzOlIdC1_qCgMA/o.jpg']",
    "names": "[u\"Calabria's Italian Restaurant\", u'Spak Brothers Pizza and More', u'Pizza Fiesta']",
    "num_reviews": [
      3,
      218,
      2
    ],
    "prices": [
      2,
      1,
      1
    ],
    "stars": "[2.5 4.  5. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 276,
    "X": 304,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/-yV49-xlhV_3SwMtMBQADA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/eORuG4o6MpJ_jrnyDHWl-g/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/KnRgn2wl36zkO3CsShpWTw/o.jpg']",
    "names": "[u'California Pizza Kitchen at Biltmore', u'Forge Pizza', u'SOLO Trattoria']",
    "num_reviews": [
      61,
      16,
      161
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 4.  4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 277,
    "X": 621,
    "category": "burger",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/1fdnIIBJB66f-F1XJpJpiQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/z3NaZwqtnbHHr0jEWNTXAA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3m6QECiAxJduSGpJO27UuQ/o.jpg']",
    "names": "[u\"Burger's Priest\", u'Hero Certified Burgers - Yonge & Lawrence', u'The Burger Cellar']",
    "num_reviews": [
      143,
      1,
      69
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": "[4.  5.  3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 278,
    "X": 668,
    "category": "sushi",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/e1W1cNvEueoND8tmkv_72Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/RgGCLy30Dw-KL8PEXoGkoQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/QXYhjmcq6Ah81WY2OZg-HA/o.jpg']",
    "names": "[u'Y2 Cafe', u'Koishi Restaurant & Sushi Bar', u'Namastay Kitchen and Hangout']",
    "num_reviews": [
      6,
      97,
      40
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  4.5]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 279,
    "X": 766,
    "category": "mexican",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/HdWfgCbL9D6d8Oa_-PfvRQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/SSqoI4vfVTlSxC0x8rmk0Q/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/6C5g9ZLguPMoe3pxkiSWgg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Q810ZjYmnZNDEFPY9MDBgg/o.jpg']",
    "names": "[u'Taqueria Santander', u'Las Islitas', u'La Original Michoacana', u\"Patty's Tamales\"]",
    "num_reviews": [
      6,
      14,
      5,
      82
    ],
    "prices": [
      2,
      2,
      1,
      1
    ],
    "stars": "[4.  4.  3.5 4. ]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 280,
    "X": 866,
    "category": "chinese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/mBGimboXhA5S-0kkMX8gXA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/MuzV3e9c_VnGdMwswSHvZA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/syDLbwBl4gxk5Bpatl1Rtw/o.jpg']",
    "names": "[u'Golden Crown Chinese Restaurant', u'Jin House', u'No.1 Asian Buffet']",
    "num_reviews": [
      9,
      41,
      1
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.  4.5 1. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 281,
    "X": 722,
    "category": "mexican",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/DSZwTyOhSv2kdVTZChpPNA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/705WG7jOA55EFlZ-a_0bog/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/89pYUQ8PGcW5HwP-Aq-vRA/o.jpg']",
    "names": "[u'Tienda Los Gemelos', u'Pancheros Mexican Grill', u'La Mestiza']",
    "num_reviews": [
      48,
      9,
      103
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[4.5 3.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 282,
    "X": 653,
    "category": "chinese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/vtG8Fr1UQ4HHJ1uGR7Ijyw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/4X3k0ab-3_ea3JlRwQkl4w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3AOWFuZAaYFzAN1nbSsmfA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/twMm4P1rPSLOBDbwuH7QQw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/iiU0wVUsQ66Y5XB2yoB5lg/o.jpg']",
    "names": "[u'SK Seafood Restaurant \\u52dd\\u8a18', u'BBQ King', u\"Anna's Garden\", u'Dumpling King', u'A & K Chinese Restaurant']",
    "num_reviews": [
      74,
      86,
      31,
      123,
      12
    ],
    "prices": [
      2,
      1,
      1,
      2,
      2
    ],
    "stars": "[4.  3.  3.5 3.5 4.5]",
    "mean_rating": 3.7,
    "num_options": 5
  },
  {
    "": 286,
    "X": 656,
    "category": "vietnamese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/7gQVU_NDCeu0XbwgdCcxqw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Gf3ZByOMbQuqfnf2bazcNw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/htsw5vVtbveGCWmxWlMOIQ/o.jpg']",
    "names": "[u'Pho Hoang Kim', u'Saigon Star', u'Firstchoice Vietnamese Cuisine']",
    "num_reviews": [
      5,
      90,
      3
    ],
    "prices": [
      1,
      2,
      3
    ],
    "stars": "[1.5 3.5 2.5]",
    "mean_rating": 2.5,
    "num_options": 3
  },
  {
    "": 287,
    "X": 212,
    "category": "chinese",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/By42lkWcl5_MnM7_8S24yQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/y_SB9JYnA_74XjAWWQYN0g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/9WJoHmWgUACytygYW_IczQ/o.jpg']",
    "names": "[u'East China', u'China Jade', u'Jackie Chen Asian Diner']",
    "num_reviews": [
      20,
      19,
      14
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[2.5 4.5 4.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 288,
    "X": 930,
    "category": "steak",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/vhygwauvxkUxtDAAUkm3xg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/-h7AzGaUvjc23OfZwINfvg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/vpRDDUwFR9vGgMlymsHERA/o.jpg']",
    "names": "[u\"Mancuso's Restaurant\", u'1130 The Restaurant', u\"Kincaid's Classic American Dining\"]",
    "num_reviews": [
      69,
      211,
      168
    ],
    "prices": [
      3,
      2,
      3
    ],
    "stars": "[4.  3.5 3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 289,
    "X": 999,
    "category": "chinese",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/sxeruY1NJ3HS-sIjTBoMoQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/oPxiwyY0HDSYDkh6y4kd6Q/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/jryFsbuOHymuv27Ejg8_Og/o.jpg']",
    "names": "[u'Top Gourmet of China', u'NCE BBQ', u'Chef Quan']",
    "num_reviews": [
      4,
      13,
      4
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  3.5 2. ]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 291,
    "X": 602,
    "category": "taco",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/bcyxoBt4CTnDDE6mfnn8Tg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/DFCRKm8VV1h8eeWKZuR4cQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/RuLPAtntn-91Dj8mHVV87A/o.jpg']",
    "names": "[u'House of Tacos', u\"Fuzzy's Taco Shop\", u'OG Taco Shop']",
    "num_reviews": [
      33,
      344,
      31
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.5 3.5 3.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 292,
    "X": 427,
    "category": "sushi",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/86VpNreGYcn3svm5pbsxUw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/-oB-EGnEWoaj7Dr8y5ax_g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/BdO1Orct9mJlltMOKwwEng/o.jpg']",
    "names": "[u'Sushi On Tropicana', u'Sushi Katsu', u'Tomo Sushi']",
    "num_reviews": [
      131,
      17,
      73
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.5 3.5 4.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 294,
    "X": 510,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/iXxGjXTSlI34FZzbutYBBg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sm8yWYrrTI32VVuS466rsw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/-Ik9hc7znZZ45QvBX7l7lw/o.jpg']",
    "names": "[u'Ocean Palate', u'The Fat Beet', u'The Indian Kitchen']",
    "num_reviews": [
      5,
      25,
      44
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  3.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 295,
    "X": 572,
    "category": "taco",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/2EWnzsdkPC4nRywE9DB0qg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/zspvx9WO_DC6JnjK9DAwDw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/S4WZBlBv_gtaZl-chJkkwg/o.jpg']",
    "names": "[u'Taco Chelo', u'El Centro Cocina', u\"M'Ol\\xe9\"]",
    "num_reviews": [
      33,
      9,
      12
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  5.  4.5]",
    "mean_rating": 4.5,
    "num_options": 3
  },
  {
    "": 296,
    "X": 654,
    "category": "japanese",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/_Erqq9Awf1E-qok7jawklg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1MLI-fl0C69n7QEHN82dMQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Y_9sqGSEF8c2Nx5qoaTbTA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/efqUwUZdCsuXJubtMKkizg/o.jpg']",
    "names": "[u'Hachi', u'Ramen Tatsu', u'Haza', u'Kushiyaki Inyo']",
    "num_reviews": [
      54,
      207,
      47,
      175
    ],
    "prices": [
      2,
      1,
      2,
      2
    ],
    "stars": "[4.5 4.  4.5 4.5]",
    "mean_rating": 4.375,
    "num_options": 4
  },
  {
    "": 297,
    "X": 268,
    "category": "diner",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/50QLOAjXRpGEt_90U0uBmQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/B-LrXio6bF6CxhcbfHzQpQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/KiDpYEUrdh_-1C0C04AL3w/o.jpg']",
    "names": "[u'Tropical Breeze Cafe', u\"Betty's Diner Cyber Cafe\", u'Mansion Dining Room']",
    "num_reviews": [
      66,
      11,
      6
    ],
    "prices": [
      2,
      1,
      4
    ],
    "stars": [
      2.5,
      2.5,
      4.5
    ],
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 299,
    "X": 400,
    "category": "mexican",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/i6vuGh8FCe5GDNg46p52Xw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/WYZ_KCpxSrgM4j-NJZlreQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/-AgMnenep7rnhpga3FrYJg/o.jpg']",
    "names": "[u'Canonita', u'Taco Maker', u'Quesadilla']",
    "num_reviews": [
      153,
      7,
      19
    ],
    "prices": [
      2,
      1,
      2
    ],
    "stars": "[3.5 2.5 2. ]",
    "mean_rating": 2.66666666666667,
    "num_options": 3
  },
  {
    "": 300,
    "X": 415,
    "category": "southern",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/vwaK3Xz1Ol1IEe75qjIABg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/UNlcKDU_KXLHgO2SSXKzVA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/SmPbErkY5fnJkNZnufI-HQ/o.jpg']",
    "names": "[u\"Smokin' Bones\", u'Harlem Restaurant', u'Harlem Underground']",
    "num_reviews": [
      13,
      95,
      94
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[3.5 3.  3. ]",
    "mean_rating": 3.16666666666667,
    "num_options": 3
  },
  {
    "": 301,
    "X": 834,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/QBmdIhpIDWjqsZXOyABGiA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/a34fOem27yIn8QYVuEn2bg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/hLJ8yAYc0VRs6bipYQiMMA/o.jpg']",
    "names": "[u'Pisa Pizza', u\"Gus's New York Pizza & Bar Mesa\", u\"BT'z Sports Bar\"]",
    "num_reviews": [
      3,
      36,
      54
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  2.5 3.5]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 305,
    "X": 617,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/6ZPmmUAphFJrNKQFJQIyQg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/91qF3lLaPJNDOi13tvkkiA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/-wZX7Nki_q9ydc3ntga7cQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/YVu7QBCmWrUkSqEOKxd3eg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/b68R7kYcKKuMP5fPdJ3NeA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/dCCboKtFCPGJP6WR4pCRwA/o.jpg']",
    "names": "[u'Blanco Tacos And Tequila', u'Los Taquitos', u'Barrio Cafe', u\"Sir Veza's Taco Garage\", u'Oaxaca Sky Harbor', u'El Bravo Sky Harbor']",
    "num_reviews": [
      362,
      118,
      443,
      196,
      17,
      80
    ],
    "prices": [
      2,
      2,
      2,
      2,
      1,
      1
    ],
    "stars": [
      3.5,
      2,
      3,
      3,
      2.5,
      2.5
    ],
    "mean_rating": 2.75,
    "num_options": 6
  },
  {
    "": 306,
    "X": 480,
    "category": "seafood",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/VkZEcLSipoh-rHkXnByLtQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/VbKebVRnYjZia7an9q9xGQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/DU4sVmlUUuZ4KtifSY_rMw/o.jpg']",
    "names": "[u'A18 I Love Crab & Karaoke', u'Hot N Juicy Crawfish', u'Urban Crawfish Station']",
    "num_reviews": [
      15,
      1433,
      287
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 4.  4.5]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 307,
    "X": 467,
    "category": "pizza",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/YebAIKVdBrqwJzAUIJVrdg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/mlmexx3szj_veULeGS5K0w/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/SeKUlj1Vjibk9EAXX4kzew/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/OsecsuhiZS5D5ilAndZ4lA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/BgQCTsCXguWfFtxDzuIfxQ/o.jpg']",
    "names": "[u\"Patsy Grimaldi's Pizzeria\", u\"Papa Murphy's Pizza\", u'Stone & Vine Urban Italian', u'Dominos Pizza', u\"Buono's\"]",
    "num_reviews": [
      118,
      11,
      165,
      5,
      15
    ],
    "prices": [
      2,
      2,
      2,
      1,
      1
    ],
    "stars": [
      4,
      4.5,
      4,
      3,
      4
    ],
    "mean_rating": 3.9,
    "num_options": 5
  },
  {
    "": 309,
    "X": 671,
    "category": "hot dog",
    "cbsa": "Madison, WI",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/Uwd_GjNcZi30UZqyzPFi3w/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/rzmGsAB3FsNfANWxwl80cw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/novdt5havC46Vu_87MQpJQ/o.jpg']",
    "names": "[u'wiener shop', u\"Fib's Fine Italian Beef & Sausage\", u'Mad Dogs Eatery']",
    "num_reviews": [
      4,
      11,
      18
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[5.  4.  3.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 310,
    "X": 637,
    "category": "breakfast",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/WVntBzEUxjAQvBAxW0B8yA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/C34qkpj_G7DnfiAhoOkwjQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/h9VSe8SN3VIUVFSGKhrZmg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Vp9TrF9P4ifIRAMcte-ycw/o.jpg']",
    "names": "[u'Mesa', u\"P&G's Pamela's Diner\", u'Pie For Breakfast', u'Crepes Parisiennes']",
    "num_reviews": [
      8,
      277,
      25,
      72
    ],
    "prices": [
      1,
      1,
      2,
      1
    ],
    "stars": [
      3.5,
      4,
      4,
      4
    ],
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 311,
    "X": 67,
    "category": "steak",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/DTxcD_1WB_ijlmjTiJZiIg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/jTX8xnx_8lleFdbLOW_-oA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3yJZjmp1AK4KUBsInC_EDA/o.jpg']",
    "names": "[u\"Mantini's Woodfired\", u'The Groove Cheesesteak Co', u'Pittsburgh Steak Company']",
    "num_reviews": [
      16,
      50,
      54
    ],
    "prices": [
      3,
      1,
      2
    ],
    "stars": "[3.  3.  2.5]",
    "mean_rating": 2.83333333333333,
    "num_options": 3
  },
  {
    "": 312,
    "X": 99,
    "category": "breakfast",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/vEiFXipLjdHq5gbALMrYjQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/yIA6Am7DOz_ssjgeXzVtAw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/wdL6lOk-qnMvkwLggr0hZA/o.jpg']",
    "names": "[u'Galaxie Diner', u'The Vaughan City Grill', u\"Jonathan's Restaurant\"]",
    "num_reviews": [
      29,
      21,
      17
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3.5 4.  4. ]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 313,
    "X": 604,
    "category": "pizza",
    "cbsa": "Cleveland-Elyria, OH",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/1Xlq7pfWNrOJ0usMZhtmFQ/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/F6BHV-gqUrjjhNvqQgoLdQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/JzfweExOSTpX9k8Od7gwgQ/o.jpg']",
    "names": "[u\"Franco's Pizza\", u\"Teresa's Pizza\", u'Pizza Roto']",
    "num_reviews": [
      7,
      10,
      1
    ],
    "prices": [
      1,
      1,
      2
    ],
    "stars": "[3.5 3.5 5. ]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 314,
    "X": 345,
    "category": "chinese",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/l2exyR98fMfx4XFix3z-1g/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/r28kX6DpdJiTzMC7nxlnmA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/U7gvMXqxyc850QEd22Ampg/o.jpg']",
    "names": "[u'Hong Kong Asian Diner', u'Szechwan Garden', u'iKitchen']",
    "num_reviews": [
      36,
      31,
      19
    ],
    "prices": [
      1,
      2,
      1
    ],
    "stars": "[3.5 4.  3.5]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 315,
    "X": 378,
    "category": "french",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/XU9pdpi2m3CiV5Ni86ygtg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/AVP53JDXH4EdWXmr34g5IA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Ec2lEbFB-eV1QXFwK6lpRQ/o.jpg']",
    "names": "[u'Bridge Ten Brasserie', u'Le Pommier', u'Cafe Du Jour']",
    "num_reviews": [
      20,
      9,
      85
    ],
    "prices": [
      3,
      4,
      2
    ],
    "stars": "[4.  3.5 4.5]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 316,
    "X": 293,
    "category": "chicken",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/2fYH7QpxBMDmZJ3BhIaliw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/XWlvCc7Fg9AsJx8uUoXBjw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/sootTPxLI56oYUQvTgOoWg/o.jpg']",
    "names": "[u'Alex Rei Dos Leitoes', u'Bar Fancy', u'Moliceiro Restaurant']",
    "num_reviews": [
      14,
      75,
      10
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 3.5 4.5]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 318,
    "X": 946,
    "category": "pizza",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/E4IQ7OX1DEHwQWNt8xwJYw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/nd9Zs0viCYCSNxw1wWl9mQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/ZL6d3X9G7kd5qLVPTjg4QA/o.jpg']",
    "names": "[u\"Carmella's Pizza\", u'Rotelli Pizza and Pasta', u'The Rusty Onion']",
    "num_reviews": [
      11,
      16,
      129
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": [
      3.5,
      3,
      3.5
    ],
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 319,
    "X": 115,
    "category": "sushi",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/6TNcrw_43X-pvq3I9VNACQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/V-GmcnNhbLepnE1Xn19bRg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/Po2kt29FI8GhKKpNtrh3WQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sPpxLPyYM4mDtch5r4y2jw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/cXFO6ViuUNzAiclNEGOpRQ/o.jpg']",
    "names": "[u'Baku', u'Sushi Guru', u'The Cowfish Sushi Burger Bar', u'Cyros Sushi and Sake Bar', u'Upstream']",
    "num_reviews": [
      70,
      54,
      591,
      38,
      101
    ],
    "prices": [
      3,
      2,
      2,
      2,
      3
    ],
    "stars": "[4.  3.5 4.  4.  4. ]",
    "mean_rating": 3.9,
    "num_options": 5
  },
  {
    "": 321,
    "X": 732,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://slicelife.imgix.net/defaults/heroes/secondary-hero-mobile.jpg?auto=compress&auto=format', u'https://s3-media4.fl.yelpcdn.com/bphoto/13r1n9JwEhfePQ9zRGoc6g/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/mBPUZwD1Trx3dlqZKtvC2Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1ff6IPrvrr4IAhWG8x4DAQ/o.jpg']",
    "names": "[u'Pizzarella', u\"Vinny's Pizza\", u\"Antonio's Pizzeria\", u'Pasta II']",
    "num_reviews": [
      2,
      12,
      16,
      5
    ],
    "prices": [
      2,
      1,
      1,
      2
    ],
    "stars": [
      1.5,
      2.5,
      3.5,
      4
    ],
    "mean_rating": 2.875,
    "num_options": 4
  },
  {
    "": 322,
    "X": 627,
    "category": "vegan",
    "cbsa": "Calgary",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/B4tAMCsjRbAKE3mdI4ERoA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/LEi3fV6Y1kYiObbW2CJTWA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/zvnjh5iHHqtDspJgyBENmw/o.jpg']",
    "names": "[u'Zen-E-Lunchbox', u'Tamarind Vietnamese Grill & Noodle House', u'Veg-In YYC']",
    "num_reviews": [
      5,
      41,
      2
    ],
    "prices": [
      1,
      2,
      2
    ],
    "stars": "[4.5 4.5 5. ]",
    "mean_rating": 4.66666666666667,
    "num_options": 3
  },
  {
    "": 323,
    "X": 806,
    "category": "thai",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/hYRGhDX50tN1J5BEt6lTKA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/VUaKEnQ21hIbUoynKUyEqw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/T7upHOtPZKw1zDzsHTOdeg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/dlohbC7cfQWmnL_L89t8cg/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/rylqsGh02BPLotYAzT4x2g/o.jpg']",
    "names": "[u'EatThai', u'Pho 88 North York', u'California Thai', u'Thai Bistro', u'Basil Box']",
    "num_reviews": [
      31,
      113,
      7,
      59,
      17
    ],
    "prices": [
      2,
      1,
      1,
      2,
      1
    ],
    "stars": [
      3.5,
      3,
      2,
      3.5,
      4
    ],
    "mean_rating": 3.2,
    "num_options": 5
  },
  {
    "": 324,
    "X": 114,
    "category": "mexican",
    "cbsa": "Charlotte-Concord-Gastonia, NC-SC",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/SBLbraXaHZ0c5Qz32RjMQw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/gSKLJZSfjoOTOFGjDNJcFw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/3lJkmmj2nB1wdhoMfWqfzA/o.jpg']",
    "names": "[u'Lupitas Carniceria & Tortilleria', u\"Maria's Mexican Restaurant\", u'Morazan Restaurant']",
    "num_reviews": [
      8,
      49,
      11
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.5 3.5 4. ]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 325,
    "X": 1038,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/JHWXHZjg1427-0zqcbJsBg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Cju_ul0kLy6uzlB4PdP5wg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/X8F7LrqSIWcrNmeXA96P_g/o.jpg']",
    "names": "[u'Las 15 Salsas', u'Las Jicaras Mexican Grill', u'El Gran Taco']",
    "num_reviews": [
      43,
      16,
      9
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[4.5 4.5 4. ]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 326,
    "X": 678,
    "category": "cafe",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/bQ4QU_6no8YdqGI_yORL5A/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/79mK8uQCsw1UcbbpIdbvRA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/8vRvhxyP1zX4sSi-Iz7tXQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/S4izyFUI_YpqFkJzCNeuNQ/o.jpg']",
    "names": "[u'Canyon Cafe', u'Copper Square Cafe', u'Five Star Cafe', u'Tower Bistro']",
    "num_reviews": [
      261,
      3,
      2,
      2
    ],
    "prices": [
      2,
      1,
      1,
      1
    ],
    "stars": "[3.5 3.  4.5 4.5]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 327,
    "X": 719,
    "category": "korean",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/xA4cDHkJnivmlpbUKB60sg/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/4VKJVuWQ4nJ6RsK3nKEXiA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/MeQwwrTWPIn5kfxJ4p5qXg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/4HL6uMRUxJvivND2BGnfRw/o.jpg']",
    "names": "[u'Jung Soo Ne', u'Shabu & Congbul', u'Biwon', u'Sunny Dragon Restaurant']",
    "num_reviews": [
      20,
      19,
      4,
      28
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": "[4.5 3.5 4.  3.5]",
    "mean_rating": 3.875,
    "num_options": 4
  },
  {
    "": 328,
    "X": 253,
    "category": "sandwich",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/mbNU_sr2QwUwjM0NK8xS6w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/ahf8KCrNhdF25YakLDU4-w/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/-Kg7Zi5x5eR1W6f4_BBfIg/o.jpg']",
    "names": "[u'Benkovitz Seafoods', u'Thin Man Sandwich Shop', u'Hot Franks']",
    "num_reviews": [
      20,
      44,
      11
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      4.5,
      4,
      4.5
    ],
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 329,
    "X": 928,
    "category": "sushi",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/kZRAr3n9EXUZfF5D_2Ixzw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/pr_CLSHRCs2lWADPOKKxcw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/MXTTYEm7epf0WT0WEZs8OA/o.jpg']",
    "names": "[u'Asahi Sushi', u'Sushi Bar Sushiya', u'Jugemu']",
    "num_reviews": [
      4,
      19,
      9
    ],
    "prices": [
      2,
      4,
      3
    ],
    "stars": "[3.5 4.5 5. ]",
    "mean_rating": 4.33333333333333,
    "num_options": 3
  },
  {
    "": 330,
    "X": 161,
    "category": "korean",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/nQow0sGAA5Gv78DZ-IpYTw/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/ItUiHpVY2C2NXGAkgk5c4g/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/yG0ibFM13QjEpQ2_7IpjFQ/o.jpg']",
    "names": "[u'Goong Korean BBQ Restaurant', u'Doh Korean BBQ', u'Soyo Korean Barstaurant']",
    "num_reviews": [
      17,
      91,
      639
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.5 3.5 4. ]",
    "mean_rating": 4,
    "num_options": 3
  },
  {
    "": 331,
    "X": 984,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/MbdFd8V-F72jQJ4gCTv_QQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/aPKEAZ511Fhez9CcNmpTfQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/Rv_i2YhYGErl9W9fWmqeyA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/yMzNNP-AhlnaqYXm-34jcA/o.jpg']",
    "names": "[u'Caliente Pizza & Drafthouse', u'Top This! On Brilliant', u\"Pasquale's Pizzeria\", u'Casa Del Sole Pizza']",
    "num_reviews": [
      2,
      15,
      4,
      16
    ],
    "prices": [
      3,
      1,
      2,
      1
    ],
    "stars": [
      1,
      4.5,
      3,
      4
    ],
    "mean_rating": 3.125,
    "num_options": 4
  },
  {
    "": 332,
    "X": 730,
    "category": "pizza",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/yhYlu4K0KfR8k0PkEZKrzQ/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/h8K6CiSyY9XI45cLhFML5Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/7yjdClMjU81He_wVxWHcwA/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/cXoMRqzJ1jxFXo_ei6p5hw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/qnicmnTQwBV_ZoPyyIxZTA/o.jpg']",
    "names": "[u\"Angelina's Pizzeria\", u\"Giovanni's Pizza & Pasta\", u\"Molly's Pizza\", u\"Uncle Tony's Pizza\", u\"Don Campiti's Pizzeria\"]",
    "num_reviews": [
      2,
      13,
      3,
      4,
      13
    ],
    "prices": [
      3,
      2,
      1,
      1,
      1
    ],
    "stars": [
      4,
      4,
      4,
      3.5,
      4
    ],
    "mean_rating": 3.9,
    "num_options": 5
  },
  {
    "": 333,
    "X": 1002,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/SiPaeGo2tacMY6lKb0Ih0Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/uFvVl5wcA0ylj3Ycd5hN4Q/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/UFbvLHUgLCJ0WGTolwv9oQ/o.jpg']",
    "names": "[u'New Spiceland Restaurant', u'Biryani Depot', u'Poorani Vilaas']",
    "num_reviews": [
      2,
      6,
      4
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": "[2.5 3.5 3. ]",
    "mean_rating": 3,
    "num_options": 3
  },
  {
    "": 335,
    "X": 727,
    "category": "indian",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/zmbIg1kCmwEuQ0XZuc4Wzg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/1dKrMnAJIMhlnbe72xekSA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/121YE564pKkUI052b1y63g/o.jpg']",
    "names": "[u'Indian Paradise', u'Ruchi Vegetarian South Indian Cuisine', u'Nasha Lounge and Bar']",
    "num_reviews": [
      7,
      45,
      5
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  5.  2.5]",
    "mean_rating": 3.83333333333333,
    "num_options": 3
  },
  {
    "": 336,
    "X": 761,
    "category": "indian",
    "cbsa": "Toronto",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/QhghYEfkiSh4tHO5dJz2lA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/EIb-pKkq0iRGsUFnUD8Pfw/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/sSQoV8JISLwssClk9AyNXA/o.jpg']",
    "names": "[u'Bazaar Global Food Bar', u\"Debu's Nouvelle Indian Cuisine\", u'Marigold Indian Bistro']",
    "num_reviews": [
      9,
      5,
      27
    ],
    "prices": [
      2,
      3,
      2
    ],
    "stars": "[2. 5. 4.]",
    "mean_rating": 3.66666666666667,
    "num_options": 3
  },
  {
    "": 337,
    "X": 910,
    "category": "sushi",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/6wL5aOoCuyEJHd10JOftNg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/Zd6UAhRZzSFW9_6Ix1fdzw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/n2UxR7lgnevQGYCvLrvtTQ/o.jpg']",
    "names": "[u'Sushi Station', u'Nori Sushi', u'Celsius Sushi Bar']",
    "num_reviews": [
      161,
      123,
      26
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[4.  4.5 4. ]",
    "mean_rating": 4.16666666666667,
    "num_options": 3
  },
  {
    "": 338,
    "X": 120,
    "category": "pizza",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media4.fl.yelpcdn.com/bphoto/Nl2Q5JhNgdneGa9kDf5bWw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/thiGT1DcxG4DlxMQf4vWiA/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/7vEo4h_hwj7YHQPNtyfyKg/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/pLgYjtDblkynDAlPC6auLQ/o.jpg']",
    "names": "[u'Pizzeria Enzo Restaurant', u\"Montesano's Eateria\", u'Windy City Beefs N Pizza', u'Novecento Pizzeria']",
    "num_reviews": [
      20,
      311,
      296,
      195
    ],
    "prices": [
      2,
      2,
      1,
      2
    ],
    "stars": [
      4,
      4,
      4,
      4
    ],
    "mean_rating": 4,
    "num_options": 4
  },
  {
    "": 339,
    "X": 640,
    "category": "burger",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/Bxc4z2Et-2O-BSngpO49Ww/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/5hQhiq9YdLQbJiL8JEFEew/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/tKThQlbfmjXGpzjhqVptqg/o.jpg']",
    "names": "[u'The Grind', u'Tavern Americana', u'BluBurger Grille']",
    "num_reviews": [
      31,
      11,
      16
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[2.5 4.  3.5]",
    "mean_rating": 3.33333333333333,
    "num_options": 3
  },
  {
    "": 340,
    "X": 879,
    "category": "mexican",
    "cbsa": "Phoenix-Mesa-Scottsdale, AZ",
    "images": "[u'https://s3-media3.fl.yelpcdn.com/bphoto/lboS9tR2hktuY-PiOg4DgQ/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/IWwzsVbzd_qwbZXOhA0B9w/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/mRRb7IGRMteBh10NO-Jepg/o.jpg']",
    "names": "[u\"Vaquero's\", u\"Moreno's Mexican Grill\", u'Los Arielitos Taco Shop']",
    "num_reviews": [
      3,
      24,
      1
    ],
    "prices": [
      1,
      1,
      1
    ],
    "stars": [
      5,
      3.5,
      5
    ],
    "mean_rating": 4.5,
    "num_options": 3
  },
  {
    "": 341,
    "X": 123,
    "category": "mexican",
    "cbsa": "Pittsburgh, PA",
    "images": "[u'https://s3-media2.fl.yelpcdn.com/bphoto/QriCo6GpdDWCBgAhqi86yA/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/hJxndHVo9NbKU7j0UA8rFA/o.jpg', u'https://s3-media4.fl.yelpcdn.com/bphoto/mvUZVnrnKvVpF-r8Abn9Iw/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/e97F785V5BC4dtfGS7eMcg/o.jpg', u'https://s3-media1.fl.yelpcdn.com/bphoto/MO2xGhSyjkSFXXlE4zzUgw/o.jpg']",
    "names": "[u'La Palapa', u\"Edgar's Best Tacos\", u'Reyna Foods', u'Casa Reyna', u'Sabroso Mexican Delights']",
    "num_reviews": [
      6,
      43,
      98,
      188,
      7
    ],
    "prices": [
      2,
      1,
      1,
      2,
      1
    ],
    "stars": [
      4.5,
      5,
      4,
      3.5,
      4.5
    ],
    "mean_rating": 4.3,
    "num_options": 5
  },
  {
    "": 342,
    "X": 932,
    "category": "mexican",
    "cbsa": "Las Vegas-Henderson-Paradise, NV",
    "images": "[u'https://s3-media1.fl.yelpcdn.com/bphoto/9GsreQsEUOjJiPK0LKLHNQ/o.jpg', u'https://s3-media2.fl.yelpcdn.com/bphoto/rkFMpjTf8P58yzjfQjAuaw/o.jpg', u'https://s3-media3.fl.yelpcdn.com/bphoto/cWlGkb86EChUKMg89fqRKg/o.jpg']",
    "names": "[u'Las Brassas Asados y Mariscos', u'Las Tarascas Michoacanas Mexican Restaurant', u'Restaurante Guadalajara']",
    "num_reviews": [
      3,
      58,
      7
    ],
    "prices": [
      2,
      2,
      2
    ],
    "stars": "[3.  4.5 4.5]",
    "mean_rating": 4,
    "num_options": 3
  }
];
