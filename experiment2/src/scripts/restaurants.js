
let test = {
	"address":{
	   "@type":"Address",
	   "building":"somewhere",
	   "street":"somestreet",
	   "zipcode":"23"
	},
	"location":{
	   "@type":"GeoCoordinates",
	   "Latitude":"43",
	   "Longitude":"-6.266155"
	},
	"cuisine":"Tex-Mex",
	"in_borough":"Manhattan",
	"name":"TEST",
	"restaurant_id":"TEST_ID",
	"review_count":"22",
	"@type":"Restaurant"
 }

const data = [
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3206b"
	  },
	  "address": {
		"building": "627",
		"coord": [
		  -73.97598099999999,
		  40.745132
		],
		"street": "2 Avenue",
		"zipcode": "10016"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Tex-Mex",
	  "name": "Baby Bo'S Burritos",
	  "restaurant_id": "40366661",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.97598099999999,
		  40.745132
		]
	  },
	  "stars": 2.5,
	  "review_count": 10,
	  "attributes": {
		"GoodForKids": "True",
		"RestaurantsDelivery": "True",
		"NoiseLevel": "'average'",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"RestaurantsTableService": "False",
		"HasTV": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "True",
		"Alcohol": "'none'",
		"RestaurantsAttire": "'casual'",
		"WiFi": "'free'",
		"BusinessParking": "None",
		"WheelchairAccessible": "True",
		"Caters": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},



	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3209e"
	  },
	  "address": {
		"building": "17",
		"coord": [
		  -74.1350211,
		  40.6369042
		],
		"street": "Harrison Avenue",
		"zipcode": "10302"
	  },
	  "borough": "Staten Island",
	  "cuisine": "American",
	  "name": "Buddy'S Wonder Bar",
	  "restaurant_id": "40367442",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.1350211,
		  40.6369042
		]
	  },
	  "stars": 3.5,
	  "review_count": 62,
	  "attributes": {
		"BikeParking": "True",
		"RestaurantsReservations": "True",
		"RestaurantsTableService": "True",
		"RestaurantsAttire": "'casual'",
		"Alcohol": "'beer_and_wine'",
		"RestaurantsGoodForGroups": "True",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': True, 'valet': False}",
		"WiFi": "u'free'",
		"HasTV": "True",
		"RestaurantsDelivery": "True",
		"WheelchairAccessible": "True",
		"NoiseLevel": "u'average'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}"
	  },
	  "menu": [
		"Grilled cheese sandwich",
		"Baked potato",
		"Lasagna",
		"Mozzarella sticks",
		"Mac & cheese",
		"Chicken fingers",
		"Mashed potatoes",
		"Chicken pot pie",
		"Green salad",
		"Meatloaf",
		"Tomato soup",
		"Onion rings"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ff6"
	  },
	  "address": {
		"building": "37",
		"coord": [
		  -74.138263,
		  40.546681
		],
		"street": "Mansion Ave",
		"zipcode": "10308"
	  },
	  "borough": "Staten Island",
	  "cuisine": "American",
	  "name": "Great Kills Yacht Club",
	  "restaurant_id": "40364610",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.138263,
		  40.546681
		]
	  },
	  "stars": 4,
	  "review_count": 72,
	  "attributes": {
		"Alcohol": "'none'",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"GoodForKids": "True",
		"RestaurantsTableService": "False",
		"WiFi": "'no'",
		"BikeParking": "True",
		"RestaurantsReservations": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsAttire": "'casual'",
		"HasTV": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"RestaurantsDelivery": "None"
	  },
	  "menu": [
		"Mozzarella sticks",
		"Mushroom swiss burger",
		"Spinach cheese dip with chips",
		"Classic burger",
		"Breadsticks",
		"French fries",
		"Grilled cheese sandwich",
		"Baked potato",
		"Chicken soup",
		"Onion rings",
		"Chicken fingers",
		"Meatloaf"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32017"
	  },
	  "address": {
		"building": "842",
		"coord": [
		  -73.97063700000001,
		  40.751495
		],
		"street": "2 Avenue",
		"zipcode": "10017"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Keats Restaurant",
	  "restaurant_id": "40365288",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.97063700000001,
		  40.751495
		]
	  },
	  "stars": 4,
	  "review_count": 149,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"HasTV": "True",
		"RestaurantsAttire": "u'casual'",
		"WheelchairAccessible": "True",
		"RestaurantsReservations": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForMeal": "{'dessert': None, 'latenight': None, 'lunch': True, 'dinner': None, 'brunch': None, 'breakfast': None}",
		"BusinessParking": "{'garage': None, 'street': None, 'validated': None, 'lot': True, 'valet': False}",
		"RestaurantsGoodForGroups": "True",
		"WiFi": "u'free'",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"French fries",
		"Chicken pot pie",
		"Mac & cheese",
		"Chicken parmesan",
		"Lasagna",
		"Classic burger",
		"Chicken fingers",
		"Fried chicken",
		"Breadsticks",
		"Cheeseburger",
		"Mozzarella sticks",
		"Caesar salad"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fbd"
	  },
	  "address": {
		"building": "120",
		"coord": [
		  -73.9998042,
		  40.7251256
		],
		"street": "Prince Street",
		"zipcode": "10012"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Bakery",
	  "name": "Olive'S",
	  "restaurant_id": "40363151",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9998042,
		  40.7251256
		]
	  },
	  "stars": 5,
	  "review_count": 7,
	  "attributes": {
		"RestaurantsTableService": "False",
		"HasTV": "False",
		"GoodForKids": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "'casual'",
		"RestaurantsReservations": "False",
		"RestaurantsDelivery": "False"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null,
	  "menu": [
		"doughnuts",
		"chocolate chip cookies",
		"chocolate pecan tart",
		"key lime pie"
	  ]
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f7d"
	  },
	  "address": {
		"building": "1007",
		"coord": [
		  -73.856077,
		  40.848447
		],
		"street": "Morris Park Ave",
		"zipcode": "10462"
	  },
	  "borough": "Bronx",
	  "cuisine": "Bakery",
	  "name": "Morris Park Bake Shop",
	  "restaurant_id": "30075445",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.856077,
		  40.848447
		]
	  },
	  "stars": 4,
	  "review_count": 39,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"HasTV": "True",
		"GoodForKids": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"BikeParking": "True",
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsTableService": "False",
		"RestaurantsAttire": "u'casual'",
		"RestaurantsDelivery": "True",
		"NoiseLevel": "'average'",
		"Alcohol": "u'none'",
		"BusinessAcceptsCreditCards": "True",
		"Caters": "True",
		"WheelchairAccessible": "True",
		"WiFi": "u'free'",
		"BusinessAcceptsBitcoin": "False"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true,
	  "menu": [
		"Chocolate strawberries",
		"Chocolate lava cake",
		"Gluten-free orange cakes",
		"Gourmet Doughnuts",
		"Flourless chocolate cake",
		"oatmeal raisin cookies",
		"Carrot cake and cream cheese frosting",
		"Pecan tart",
		"Stuffed Croissants",
		"Peanut butter cookies with chocolate chips",
		"Homemade bread",
		"Miniature cheesecake"
	  ]
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fee"
	  },
	  "address": {
		"building": "180",
		"coord": [
		  -73.9788694,
		  40.7665961
		],
		"street": "Central Park South",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Nyac Main Dining Room",
	  "restaurant_id": "40364467",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9788694,
		  40.7665961
		]
	  },
	  "stars": 4,
	  "review_count": 180,
	  "attributes": {
		"Ambience": "{'touristy': None, 'hipster': False, 'romantic': None, 'divey': None, 'intimate': None, 'trendy': None, 'upscale': False, 'classy': None, 'casual': True}",
		"RestaurantsTableService": "True",
		"NoiseLevel": "u'average'",
		"Alcohol": "u'full_bar'",
		"RestaurantsReservations": "True",
		"BYOB": "False",
		"HasTV": "True",
		"RestaurantsDelivery": "True",
		"WheelchairAccessible": "True",
		"RestaurantsGoodForGroups": "True",
		"WiFi": "u'free'",
		"BikeParking": "True",
		"Caters": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"GoodForMeal": "{'dessert': False, 'latenight': None, 'lunch': None, 'dinner': True, 'brunch': None, 'breakfast': None}",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "menu": [
		"Meatloaf",
		"Tomato soup",
		"Fried chicken",
		"Mashed potatoes",
		"Chicken fingers",
		"Baked potato",
		"Classic burger",
		"Cheddar Biscuits",
		"Mozzarella sticks",
		"Pigs in a blanket",
		"Grilled cheese sandwich",
		"French fries"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f9b"
	  },
	  "address": {
		"building": "203",
		"coord": [
		  -73.97822040000001,
		  40.6435254
		],
		"street": "Church Avenue",
		"zipcode": "11218"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
	  "name": "Carvel Ice Cream",
	  "restaurant_id": "40360076",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.97822040000001,
		  40.6435254
		]
	  },
	  "stars": 4,
	  "review_count": 9,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsReservations": "True",
		"RestaurantsDelivery": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}"
	  },
	  "PriceRange": 3,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3209f"
	  },
	  "address": {
		"building": "20",
		"coord": [
		  -73.988991,
		  40.728848
		],
		"street": "St Marks Place",
		"zipcode": "10003"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Grassroot Tavern",
	  "restaurant_id": "40367420",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.988991,
		  40.728848
		]
	  },
	  "stars": 4.5,
	  "review_count": 20,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"GoodForMeal": "{'dessert': None, 'latenight': None, 'lunch': None, 'dinner': True, 'brunch': None, 'breakfast': None}",
		"RestaurantsReservations": "False",
		"NoiseLevel": "u'average'",
		"Ambience": "{'touristy': None, 'hipster': None, 'romantic': False, 'divey': None, 'intimate': None, 'trendy': None, 'upscale': None, 'classy': False, 'casual': True}",
		"HasTV": "True",
		"BusinessParking": "{'garage': None, 'street': None, 'validated': None, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"Cheeseburger",
		"Mac & cheese",
		"Lasagna",
		"Mashed potatoes",
		"Chicken soup",
		"Mushroom swiss burger",
		"Baked potato",
		"Spaghetti with meatballs",
		"Tomato soup",
		"Fried chicken",
		"Breadsticks",
		"Caesar salad"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3206c"
	  },
	  "address": {
		"building": "2901",
		"coord": [
		  -73.9396213,
		  40.5841703
		],
		"street": "Emmons Avenue",
		"zipcode": "11235"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Roll-N-Roaster",
	  "restaurant_id": "40366471",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9396213,
		  40.5841703
		]
	  },
	  "stars": 3.5,
	  "review_count": 28,
	  "attributes": {
		"RestaurantsTableService": "True",
		"RestaurantsReservations": "False",
		"HasTV": "True",
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True",
		"BYOB": "False",
		"Alcohol": "u'full_bar'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsDelivery": "True",
		"WheelchairAccessible": "True"
	  },
	  "menu": [
		"Grilled cheese sandwich",
		"Onion rings",
		"Green salad",
		"French fries",
		"Cheddar Biscuits",
		"Mac & cheese",
		"Cheeseburger",
		"Spinach cheese dip with chips",
		"Chicken fingers",
		"Pigs in a blanket",
		"Mushroom swiss burger",
		"Chicken pot pie"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fde"
	  },
	  "address": {
		"building": "837",
		"coord": [
		  -73.9712,
		  40.751703
		],
		"street": "2 Avenue",
		"zipcode": "10017"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Palm Restaurant",
	  "restaurant_id": "40364355",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9712,
		  40.751703
		]
	  },
	  "stars": 3,
	  "review_count": 8,
	  "attributes": {
		"RestaurantsAttire": "u'casual'",
		"RestaurantsGoodForGroups": "True",
		"GoodForKids": "True",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsReservations": "False",
		"Alcohol": "u'none'",
		"HasTV": "False",
		"WiFi": "u'no'",
		"RestaurantsDelivery": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"Caters": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': True}"
	  },
	  "menu": [
		"Chicken fingers",
		"Fried chicken",
		"Pigs in a blanket",
		"Cheddar Biscuits",
		"Mac & cheese",
		"Spaghetti with meatballs",
		"Chicken pot pie",
		"Baked potato",
		"Chicken parmesan",
		"Mushroom swiss burger",
		"Chicken soup",
		"Spinach cheese dip with chips"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ffe"
	  },
	  "address": {
		"building": "461",
		"coord": [
		  -74.002944,
		  40.652779
		],
		"street": "37 Street",
		"zipcode": "11232"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Melody Lanes",
	  "restaurant_id": "40364889",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.002944,
		  40.652779
		]
	  },
	  "stars": 4,
	  "review_count": 5,
	  "attributes": {
		"WheelchairAccessible": "True",
		"RestaurantsDelivery": "True",
		"BikeParking": "False",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}"
	  },
	  "menu": [
		"Cheddar Biscuits",
		"Fried chicken",
		"French fries",
		"Chicken soup",
		"Cheeseburger",
		"Grilled cheese sandwich",
		"Breadsticks",
		"Tomato soup",
		"Caesar salad",
		"Green salad",
		"Onion rings",
		"Classic burger"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320af"
	  },
	  "address": {
		"building": "1821",
		"coord": [
		  -73.95006049999999,
		  40.5838274
		],
		"street": "Emmons Avenue",
		"zipcode": "11235"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Greek",
	  "name": "El Greco Diner",
	  "restaurant_id": "40367795",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.95006049999999,
		  40.5838274
		]
	  },
	  "stars": 4.5,
	  "review_count": 146,
	  "attributes": {
		"WheelchairAccessible": "True",
		"BikeParking": "True",
		"GoodForKids": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "False",
		"BusinessAcceptsBitcoin": "False",
		"WiFi": "u'free'",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'none'",
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"HasTV": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': True, 'upscale': False, 'classy': False, 'casual': False}",
		"RestaurantsTableService": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"Caters": "False",
		"NoiseLevel": "u'average'",
		"RestaurantsGoodForGroups": "False"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3200b"
	  },
	  "address": {
		"building": "1",
		"coord": [
		  -73.9727638,
		  40.588853
		],
		"street": "Bouck Court",
		"zipcode": "11223"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Shell Lanes",
	  "restaurant_id": "40365043",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9727638,
		  40.588853
		]
	  },
	  "stars": 3.5,
	  "review_count": 90,
	  "attributes": {
		"RestaurantsReservations": "False",
		"Alcohol": "'beer_and_wine'",
		"NoiseLevel": "u'average'",
		"RestaurantsTableService": "True",
		"WiFi": "'no'",
		"Ambience": "{'touristy': None, 'hipster': False, 'romantic': False, 'divey': None, 'intimate': False, 'trendy': None, 'upscale': None, 'classy': False, 'casual': True}",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': True, 'valet': False}",
		"HasTV": "False",
		"RestaurantsDelivery": "False",
		"RestaurantsAttire": "'casual'",
		"BikeParking": "False",
		"RestaurantsGoodForGroups": "True",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"Caters": "False",
		"GoodForMeal": "{'dessert': True, 'latenight': None, 'lunch': True, 'dinner': True, 'brunch': True, 'breakfast': None}",
		"GoodForKids": "True"
	  },
	  "menu": [
		"Meatloaf",
		"Grilled cheese sandwich",
		"Onion rings",
		"Tomato soup",
		"Green salad",
		"Baked potato",
		"Chicken fingers",
		"Caesar salad",
		"Cheeseburger",
		"Mushroom swiss burger",
		"Fried chicken",
		"Breadsticks"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fcc"
	  },
	  "address": {
		"building": "464",
		"coord": [
		  -73.9791458,
		  40.744328
		],
		"street": "3 Avenue",
		"zipcode": "10016"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Pizza",
	  "name": "Domino'S Pizza",
	  "restaurant_id": "40363644",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9791458,
		  40.744328
		]
	  },
	  "stars": 4,
	  "review_count": 15,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "False"
	  },
	  "menu": [
		"Greek salad",
		"Hawaiian pizza",
		"Diavola",
		"Alfredo Pizza",
		"cookies",
		"Tiramisu",
		"Chef's Special",
		"Funghi",
		"Neapolitan Pizza",
		"Desano",
		"Four seasons pizza",
		"Deluxe Pizza"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32094"
	  },
	  "address": {
		"building": "180",
		"coord": [
		  -73.9788694,
		  40.7665961
		],
		"street": "Central Park South",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Tap Room",
	  "restaurant_id": "40367338",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9788694,
		  40.7665961
		]
	  },
	  "stars": 4,
	  "review_count": 21,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': None, 'validated': False, 'lot': None, 'valet': False}",
		"BikeParking": "True"
	  },
	  "menu": [
		"Mozzarella sticks",
		"Chicken parmesan",
		"Cheddar Biscuits",
		"Mashed potatoes",
		"Onion rings",
		"Green salad",
		"Pigs in a blanket",
		"Spaghetti with meatballs",
		"Chicken fingers",
		"Meatloaf",
		"Tomato soup",
		"Fried chicken"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320bc"
	  },
	  "address": {
		"building": "2300",
		"coord": [
		  -73.8786113,
		  40.8502883
		],
		"street": "Southern Boulevard",
		"zipcode": "10460"
	  },
	  "borough": "Bronx",
	  "cuisine": "American",
	  "name": "African Market (Baboon Cafe)",
	  "restaurant_id": "40368026",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8786113,
		  40.8502883
		]
	  },
	  "stars": 3.5,
	  "review_count": 5,
	  "attributes": {
		"HasTV": "False",
		"WheelchairAccessible": "True",
		"RestaurantsTableService": "False",
		"RestaurantsReservations": "False",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'none'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "True",
		"NoiseLevel": "u'quiet'",
		"BusinessAcceptsBitcoin": "False",
		"Caters": "True",
		"GoodForKids": "True"
	  },
	  "menu": [
		"Pigs in a blanket",
		"Lasagna",
		"Mac & cheese",
		"Mozzarella sticks",
		"Mushroom swiss burger",
		"Cheddar Biscuits",
		"Chicken soup",
		"Green salad",
		"Chicken parmesan",
		"Mashed potatoes",
		"Meatloaf",
		"Spinach cheese dip with chips"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ff5"
	  },
	  "address": {
		"building": "386",
		"coord": [
		  -73.9818918,
		  40.6901211
		],
		"street": "Flatbush Avenue Extension",
		"zipcode": "11201"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Junior'S",
	  "restaurant_id": "40364581",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9818918,
		  40.6901211
		]
	  },
	  "stars": 3,
	  "review_count": 136,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsCreditCards": "True",
		"NoiseLevel": "u'average'",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"HasTV": "True",
		"WiFi": "u'free'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"GoodForMeal": "{'dessert': None, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"Caters": "True",
		"RestaurantsDelivery": "True",
		"Alcohol": "u'full_bar'",
		"BestNights": "{'monday': True, 'tuesday': False, 'friday': False, 'wednesday': False, 'thursday': False, 'sunday': False, 'saturday': False}",
		"RestaurantsTableService": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': None, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"BikeParking": "True",
		"RestaurantsReservations": "True",
		"Music": "{'dj': None, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': None}"
	  },
	  "menu": [
		"Green salad",
		"Breadsticks",
		"Mushroom swiss burger",
		"Classic burger",
		"Cheddar Biscuits",
		"Chicken fingers",
		"Tomato soup",
		"Mashed potatoes",
		"Spinach cheese dip with chips",
		"Baked potato",
		"Chicken pot pie",
		"Lasagna"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320bb"
	  },
	  "address": {
		"building": "4280",
		"coord": [
		  -73.86697,
		  40.89794699999999
		],
		"street": "Katonah Ave",
		"zipcode": "10470"
	  },
	  "borough": "Bronx",
	  "cuisine": "Not Listed/Not Applicable",
	  "name": "The Lark'S Nest",
	  "restaurant_id": "40367946",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.86697,
		  40.89794699999999
		]
	  },
	  "stars": 4.5,
	  "review_count": 40,
	  "attributes": {
		"GoodForKids": "True",
		"Caters": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': True, 'valet': False}",
		"HasTV": "False",
		"BikeParking": "False",
		"Alcohol": "'none'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"WheelchairAccessible": "True",
		"RestaurantsTableService": "False",
		"RestaurantsAttire": "'casual'",
		"RestaurantsReservations": "False",
		"BusinessAcceptsBitcoin": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "False",
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "u'free'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3200c"
	  },
	  "address": {
		"building": "4035",
		"coord": [
		  -73.9395182,
		  40.8422945
		],
		"street": "Broadway",
		"zipcode": "10032"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Pizza",
	  "name": "Como Pizza",
	  "restaurant_id": "40365280",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9395182,
		  40.8422945
		]
	  },
	  "stars": 4,
	  "review_count": 60,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"NoiseLevel": "u'average'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"WiFi": "u'no'",
		"RestaurantsReservations": "True",
		"HasTV": "True",
		"GoodForKids": "True",
		"RestaurantsDelivery": "False",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"Alcohol": "'beer_and_wine'",
		"RestaurantsAttire": "u'casual'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"BikeParking": "True",
		"Caters": "False"
	  },
	  "menu": [
		"Pepperoni Pizza",
		"Diavola",
		"Hawaiian pizza",
		"brownies",
		"Greek salad",
		"Chef's Special",
		"Deluxe Pizza",
		"Garlic bread",
		"Desano",
		"cookies",
		"Margherita Pizza",
		"cheesy bread"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320a1"
	  },
	  "address": {
		"building": "1372",
		"coord": [
		  -73.9870818,
		  40.7523004
		],
		"street": "Broadway",
		"zipcode": "10018"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Jewish/Kosher",
	  "name": "Mr Broadway Kosher Restaurant",
	  "restaurant_id": "40367534",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9870818,
		  40.7523004
		]
	  },
	  "stars": 2,
	  "review_count": 11,
	  "attributes": {
		"DriveThru": "None",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32072"
	  },
	  "address": {
		"building": "21",
		"coord": [
		  -73.9168424,
		  40.8401362
		],
		"street": "East  170 Street",
		"zipcode": "10452"
	  },
	  "borough": "Bronx",
	  "cuisine": "American",
	  "name": "Munchtime",
	  "restaurant_id": "40366748",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9168424,
		  40.8401362
		]
	  },
	  "stars": 2,
	  "review_count": 77,
	  "attributes": {
		"NoiseLevel": "u'average'",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"WiFi": "u'free'",
		"Caters": "False",
		"RestaurantsAttire": "'casual'",
		"RestaurantsReservations": "False",
		"Alcohol": "'none'",
		"GoodForKids": "True",
		"RestaurantsGoodForGroups": "True",
		"DriveThru": "True",
		"BikeParking": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': True}",
		"BusinessParking": "{'garage': False, 'street': None, 'validated': False, 'lot': None, 'valet': False}",
		"RestaurantsTableService": "False",
		"RestaurantsDelivery": "True",
		"HasTV": "True"
	  },
	  "menu": [
		"Cheeseburger",
		"Chicken parmesan",
		"Mozzarella sticks",
		"Chicken soup",
		"Cheddar Biscuits",
		"Mac & cheese",
		"Chicken fingers",
		"Classic burger",
		"Caesar salad",
		"French fries",
		"Chicken pot pie",
		"Lasagna"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32075"
	  },
	  "address": {
		"building": "80-32",
		"coord": [
		  -73.8845166,
		  40.744772
		],
		"street": "Baxter Avenue",
		"zipcode": "11373"
	  },
	  "borough": "Queens",
	  "cuisine": "Spanish",
	  "name": "La Fusta Restaurant",
	  "restaurant_id": "40366879",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8845166,
		  40.744772
		]
	  },
	  "stars": 4.5,
	  "review_count": 101,
	  "attributes": {
		"Alcohol": "u'none'",
		"NoiseLevel": "'average'",
		"BusinessAcceptsCreditCards": "False",
		"GoodForKids": "True",
		"Caters": "True",
		"BikeParking": "True",
		"WiFi": "'no'",
		"RestaurantsAttire": "u'casual'",
		"RestaurantsTableService": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsReservations": "False",
		"HasTV": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': True, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"BusinessAcceptsBitcoin": "False",
		"WheelchairAccessible": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': True, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32019"
	  },
	  "address": {
		"building": "1449",
		"coord": [
		  -73.94933739999999,
		  40.6509823
		],
		"street": "Nostrand Avenue",
		"zipcode": "11226"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Donuts",
	  "name": "Nostrand Donut Shop",
	  "restaurant_id": "40365226",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.94933739999999,
		  40.6509823
		]
	  },
	  "stars": 3.5,
	  "review_count": 7,
	  "attributes": {
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True",
		"WheelchairAccessible": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"BikeParking": "True"
	  },
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32026"
	  },
	  "address": {
		"building": "1024",
		"coord": [
		  -73.96392089999999,
		  40.8033908
		],
		"street": "Amsterdam Avenue",
		"zipcode": "10025"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Italian",
	  "name": "V & T Restaurant",
	  "restaurant_id": "40365577",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.96392089999999,
		  40.8033908
		]
	  },
	  "stars": 1.5,
	  "review_count": 16,
	  "attributes": {
		"WiFi": "'free'",
		"BikeParking": "False",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"Caters": "False"
	  },
	  "menu": [
		"Minestrone soup",
		"Fried Mozzarella",
		"Pepperoni Pizza",
		"Manicotti",
		"White Pizza",
		"Vegetarian Broccoli Pizza",
		"All Meat Pizza",
		"Salmon",
		"chicken",
		"Buca Trio Platter",
		"caprese salad",
		"Alfredo Pizza"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f9e"
	  },
	  "address": {
		"building": "284",
		"coord": [
		  -73.9829239,
		  40.6580753
		],
		"street": "Prospect Park West",
		"zipcode": "11215"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "The Movable Feast",
	  "restaurant_id": "40361606",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9829239,
		  40.6580753
		]
	  },
	  "stars": 1.5,
	  "review_count": 44,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsReservations": "False",
		"Caters": "False",
		"RestaurantsGoodForGroups": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'none'",
		"DriveThru": "True",
		"WiFi": "u'no'",
		"NoiseLevel": "u'loud'",
		"HasTV": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsDelivery": "True",
		"BikeParking": "True"
	  },
	  "menu": [
		"Tomato soup",
		"Mushroom swiss burger",
		"Breadsticks",
		"Chicken soup",
		"Mozzarella sticks",
		"Pigs in a blanket",
		"Spinach cheese dip with chips",
		"Cheeseburger",
		"Chicken parmesan",
		"Cheddar Biscuits",
		"Classic burger",
		"Fried chicken"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3201a"
	  },
	  "address": {
		"building": "206",
		"coord": [
		  -73.9446421,
		  40.7253944
		],
		"street": "Nassau Avenue",
		"zipcode": "11222"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Palace Cafe",
	  "restaurant_id": "40365473",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9446421,
		  40.7253944
		]
	  },
	  "stars": 4.5,
	  "review_count": 14,
	  "attributes": {
		"NoiseLevel": "u'quiet'",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "True",
		"WiFi": "u'no'",
		"Alcohol": "u'none'",
		"RestaurantsReservations": "False"
	  },
	  "menu": [
		"Caesar salad",
		"Chicken pot pie",
		"Onion rings",
		"Meatloaf",
		"Lasagna",
		"Cheddar Biscuits",
		"Mozzarella sticks",
		"Chicken parmesan",
		"Chicken soup",
		"Cheeseburger",
		"Chicken fingers",
		"Grilled cheese sandwich"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3208c"
	  },
	  "address": {
		"building": "421",
		"coord": [
		  -73.99682299999999,
		  40.753182
		],
		"street": "9 Avenue",
		"zipcode": "10001"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Irish",
	  "name": "Twins Pub",
	  "restaurant_id": "40367179",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.99682299999999,
		  40.753182
		]
	  },
	  "stars": 2,
	  "review_count": 25,
	  "attributes": {
		"HasTV": "True",
		"RestaurantsReservations": "False",
		"Alcohol": "'none'",
		"GoodForKids": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"Caters": "False",
		"RestaurantsGoodForGroups": "False",
		"NoiseLevel": "'very_loud'",
		"RestaurantsDelivery": "True",
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "'no'",
		"RestaurantsAttire": "u'casual'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3209c"
	  },
	  "address": {
		"building": "893",
		"coord": [
		  -73.98557920000002,
		  40.7686093
		],
		"street": "9 Avenue",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Flame Restaurant Coffee House",
	  "restaurant_id": "40367365",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98557920000002,
		  40.7686093
		]
	  },
	  "stars": 4,
	  "review_count": 366,
	  "attributes": {
		"RestaurantsTableService": "False",
		"BikeParking": "True",
		"NoiseLevel": "u'average'",
		"WheelchairAccessible": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "'casual'",
		"RestaurantsReservations": "False",
		"Alcohol": "'none'",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BusinessAcceptsBitcoin": "False",
		"Caters": "True",
		"Ambience": "{'touristy': False, 'hipster': None, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': None, 'upscale': False, 'classy': False, 'casual': True}",
		"RestaurantsDelivery": "True",
		"GoodForMeal": "{'dessert': None, 'latenight': None, 'lunch': True, 'dinner': True, 'brunch': None, 'breakfast': False}",
		"WiFi": "u'free'",
		"HasTV": "False"
	  },
	  "menu": [
		"Mushroom swiss burger",
		"Spinach cheese dip with chips",
		"Classic burger",
		"Lasagna",
		"Grilled cheese sandwich",
		"Onion rings",
		"French fries",
		"Pigs in a blanket",
		"Meatloaf",
		"Spaghetti with meatballs",
		"Caesar salad",
		"Cheddar Biscuits"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fc9"
	  },
	  "address": {
		"building": "7905",
		"coord": [
		  -73.8740217,
		  40.7135015
		],
		"street": "Metropolitan Avenue",
		"zipcode": "11379"
	  },
	  "borough": "Queens",
	  "cuisine": "Bagels/Pretzels",
	  "name": "Hot Bagels",
	  "restaurant_id": "40363565",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8740217,
		  40.7135015
		]
	  },
	  "stars": 4,
	  "review_count": 28,
	  "attributes": {
		"NoiseLevel": "u'loud'",
		"Alcohol": "u'none'",
		"RestaurantsReservations": "False",
		"RestaurantsGoodForGroups": "True",
		"WiFi": "u'no'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsAttire": "u'casual'",
		"HasTV": "False",
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"RestaurantsDelivery": "False",
		"BikeParking": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3209d"
	  },
	  "address": {
		"building": "232",
		"coord": [
		  -73.9629729,
		  40.7638694
		],
		"street": "East   64 Street",
		"zipcode": "10065"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Jackson Hole",
	  "restaurant_id": "40367373",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9629729,
		  40.7638694
		]
	  },
	  "stars": 3,
	  "review_count": 10,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "'no'",
		"BikeParking": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}"
	  },
	  "menu": [
		"Chicken soup",
		"Onion rings",
		"Meatloaf",
		"Caesar salad",
		"Mushroom swiss burger",
		"Classic burger",
		"Green salad",
		"Grilled cheese sandwich",
		"Cheeseburger",
		"Mashed potatoes",
		"Breadsticks",
		"Spaghetti with meatballs"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320be"
	  },
	  "address": {
		"building": "1402",
		"coord": [
		  -74.1005771,
		  40.6134163
		],
		"street": "Clove Road",
		"zipcode": "10301"
	  },
	  "borough": "Staten Island",
	  "cuisine": "Italian",
	  "name": "Roadhouse Restaurant",
	  "restaurant_id": "40368034",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.1005771,
		  40.6134163
		]
	  },
	  "stars": 3,
	  "review_count": 113,
	  "attributes": {
		"WiFi": "'no'",
		"BikeParking": "True",
		"GoodForKids": "True",
		"NoiseLevel": "u'average'",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "False",
		"HasTV": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsAttire": "u'casual'",
		"RestaurantsReservations": "False",
		"BusinessAcceptsCreditCards": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"Alcohol": "u'beer_and_wine'",
		"DriveThru": "False",
		"Caters": "False"
	  },
	  "menu": [
		"Spaghetti",
		"Cheese Ravioli",
		"Minestrone soup",
		"Hawaiian Pizza",
		"Spinach Ravioli",
		"Buca Trio Platter",
		"Alfredo Pizza",
		"Angel Hair Pasta",
		"Lasagna",
		"White Pizza",
		"Pepperoni Pizza",
		"Pasta with ricotta cheese"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fbb"
	  },
	  "address": {
		"building": "1006",
		"coord": [
		  -73.84856870000002,
		  40.8903781
		],
		"street": "East 233 Street",
		"zipcode": "10466"
	  },
	  "borough": "Bronx",
	  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
	  "name": "Carvel Ice Cream",
	  "restaurant_id": "40363093",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.84856870000002,
		  40.8903781
		]
	  },
	  "stars": 4,
	  "review_count": 5,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"WiFi": "'no'",
		"BusinessAcceptsCreditCards": "False",
		"BikeParking": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f89"
	  },
	  "address": {
		"building": "1269",
		"coord": [
		  -73.871194,
		  40.6730975
		],
		"street": "Sutter Avenue",
		"zipcode": "11208"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Chinese",
	  "name": "May May Kitchen",
	  "restaurant_id": "40358429",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.871194,
		  40.6730975
		]
	  },
	  "stars": 5,
	  "review_count": 11,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"HasTV": "False",
		"RestaurantsReservations": "False",
		"RestaurantsDelivery": "False",
		"NoiseLevel": "'loud'",
		"WiFi": "'no'",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"BikeParking": "True",
		"GoodForKids": "True",
		"RestaurantsAttire": "u'casual'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "menu": [
		"Egg rolls",
		"Szechuan chicken",
		"Moo goo gai pan",
		"Lettuce wraps",
		"Honey walnut prawns",
		"Wonton soup",
		"Ice cream",
		"Orange chicken",
		"Sweet and sour chicken with lemon",
		"Crab rangoon puffs",
		"Kung pao chicken",
		"Steamed bun dough"
	  ],
	  "PriceRange": 3,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fd4"
	  },
	  "address": {
		"building": "203",
		"coord": [
		  -74.15235919999999,
		  40.5563756
		],
		"street": "Giffords Lane",
		"zipcode": "10308"
	  },
	  "borough": "Staten Island",
	  "cuisine": "Delicatessen",
	  "name": "B & M Hot Bagel & Grocery",
	  "restaurant_id": "40364299",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.15235919999999,
		  40.5563756
		]
	  },
	  "stars": 3.5,
	  "review_count": 19,
	  "attributes": {
		"WiFi": "u'no'",
		"RestaurantsGoodForGroups": "True",
		"NoiseLevel": "u'quiet'",
		"HasTV": "False",
		"Alcohol": "u'beer_and_wine'",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"RestaurantsDelivery": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32056"
	  },
	  "address": {
		"building": "351",
		"coord": [
		  -73.96117869999999,
		  40.7619226
		],
		"street": "East   62 Street",
		"zipcode": "10065"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Italian",
	  "name": "Il Vagabondo Restaurant",
	  "restaurant_id": "40365709",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.96117869999999,
		  40.7619226
		]
	  },
	  "stars": 3,
	  "review_count": 13,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "False"
	  },
	  "menu": [
		"Salmon",
		"Hawaiian Pizza",
		"Margherita pizza",
		"Manicotti",
		"Vegetarian Broccoli Pizza",
		"Spaghetti",
		"Baked Ziti",
		"caprese salad",
		"Lasagna",
		"All Meat Pizza",
		"Fried calimari",
		"Cheese Ravioli"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32099"
	  },
	  "address": {
		"building": "302",
		"coord": [
		  -73.985535,
		  40.730605
		],
		"street": "East 12 Street",
		"zipcode": "10003"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Italian",
	  "name": "John'S Restaurant",
	  "restaurant_id": "40367407",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.985535,
		  40.730605
		]
	  },
	  "stars": 3,
	  "review_count": 23,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "True",
		"BusinessAcceptsBitcoin": "False",
		"Caters": "False"
	  },
	  "menu": [
		"Fried Mozzarella",
		"Neapolitan Pizza",
		"caprese salad",
		"Buca Trio Platter",
		"Alfredo with Spinach Pizza",
		"Alfredo Pizza",
		"Spaghetti",
		"Spinach Ravioli",
		"Cheese Ravioli",
		"chicken",
		"Vegetarian Baked Ziti",
		"White Pizza"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32090"
	  },
	  "address": {
		"building": "10001",
		"coord": [
		  -74.03345,
		  40.612598
		],
		"street": "4 Avenue",
		"zipcode": "11209"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Narrows Coffee Shop",
	  "restaurant_id": "40367183",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.03345,
		  40.612598
		]
	  },
	  "stars": 3.5,
	  "review_count": 14,
	  "attributes": {
		"RestaurantsDelivery": "False",
		"WiFi": "u'no'",
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"RestaurantsAttire": "'casual'",
		"BusinessAcceptsCreditCards": "True",
		"WheelchairAccessible": "True",
		"RestaurantsReservations": "False",
		"GoodForKids": "True"
	  },
	  "menu": [
		"Mashed potatoes",
		"Pigs in a blanket",
		"Spinach cheese dip with chips",
		"Baked potato",
		"Tomato soup",
		"Chicken parmesan",
		"Chicken pot pie",
		"Chicken soup",
		"Classic burger",
		"Onion rings",
		"French fries",
		"Cheddar Biscuits"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b1"
	  },
	  "address": {
		"building": "2080",
		"coord": [
		  -73.98185529999999,
		  40.7782266
		],
		"street": "Broadway",
		"zipcode": "10023"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Hotdogs",
	  "name": "Gray'S Papaya",
	  "restaurant_id": "40367766",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98185529999999,
		  40.7782266
		]
	  },
	  "stars": 4,
	  "review_count": 59,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "False",
		"HasTV": "False",
		"RestaurantsDelivery": "False",
		"BikeParking": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"WiFi": "'free'",
		"Alcohol": "'beer_and_wine'",
		"Caters": "False",
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': None, 'live': None, 'video': False, 'karaoke': None}",
		"Ambience": "{'touristy': None, 'hipster': None, 'romantic': None, 'intimate': None, 'trendy': None, 'upscale': None, 'classy': None, 'casual': True}"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3200d"
	  },
	  "address": {
		"building": "331",
		"coord": [
		  -74.0037823,
		  40.7380122
		],
		"street": "West    4 Street",
		"zipcode": "10014"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Corner Bistro",
	  "restaurant_id": "40365166",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0037823,
		  40.7380122
		]
	  },
	  "stars": 4,
	  "review_count": 49,
	  "attributes": {
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"RestaurantsTableService": "False",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': None, 'street': True, 'validated': False, 'lot': None, 'valet': False}",
		"RestaurantsReservations": "False",
		"RestaurantsDelivery": "False",
		"WiFi": "u'free'",
		"Alcohol": "u'none'",
		"Caters": "False",
		"WheelchairAccessible": "True",
		"BikeParking": "True"
	  },
	  "menu": [
		"Spinach cheese dip with chips",
		"Chicken soup",
		"Classic burger",
		"Cheddar Biscuits",
		"Lasagna",
		"Mozzarella sticks",
		"Mashed potatoes",
		"Meatloaf",
		"Baked potato",
		"Green salad",
		"Spaghetti with meatballs",
		"Fried chicken"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32016"
	  },
	  "address": {
		"building": "7201",
		"coord": [
		  -74.0166091,
		  40.6284767
		],
		"street": "8 Avenue",
		"zipcode": "11228"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Italian",
	  "name": "New Corner",
	  "restaurant_id": "40365355",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0166091,
		  40.6284767
		]
	  },
	  "stars": 2.5,
	  "review_count": 55,
	  "attributes": {
		"Caters": "True",
		"RestaurantsGoodForGroups": "True",
		"Alcohol": "'none'",
		"BusinessAcceptsCreditCards": "True",
		"NoiseLevel": "u'average'",
		"BikeParking": "True",
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForKids": "True",
		"HasTV": "True",
		"RestaurantsAttire": "'casual'",
		"RestaurantsDelivery": "True",
		"DriveThru": "True",
		"WiFi": "'free'"
	  },
	  "menu": [
		"Spaghetti",
		"Fried calimari",
		"chicken",
		"Manicotti",
		"Salmon",
		"Bruschetta",
		"Vegetarian Baked Ziti",
		"Neapolitan Pizza",
		"Baked Ziti",
		"Vegetarian Broccoli Pizza",
		"Hawaiian Pizza",
		"Chicken Alfredo Pizza"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31feb"
	  },
	  "address": {
		"building": "657",
		"coord": [
		  -73.9056678,
		  40.7066898
		],
		"street": "Fairview Avenue",
		"zipcode": "11385"
	  },
	  "borough": "Queens",
	  "cuisine": "German",
	  "name": "Gottscheer Hall",
	  "restaurant_id": "40364449",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9056678,
		  40.7066898
		]
	  },
	  "stars": 4,
	  "review_count": 58,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "True",
		"BusinessAcceptsCreditCards": "True",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"RestaurantsTableService": "True",
		"RestaurantsAttire": "'casual'",
		"Caters": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"WiFi": "u'free'",
		"Alcohol": "u'beer_and_wine'",
		"BikeParking": "True",
		"WheelchairAccessible": "True",
		"GoodForKids": "True",
		"GoodForDancing": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"BusinessAcceptsBitcoin": "False",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': True, 'wednesday': False, 'thursday': True, 'sunday': False, 'saturday': False}",
		"NoiseLevel": "u'average'",
		"HasTV": "True",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32007"
	  },
	  "address": {
		"building": "6736",
		"coord": [
		  -74.2274942,
		  40.5071996
		],
		"street": "Hylan Boulevard",
		"zipcode": "10309"
	  },
	  "borough": "Staten Island",
	  "cuisine": "American",
	  "name": "South Shore Swimming Club",
	  "restaurant_id": "40365120",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.2274942,
		  40.5071996
		]
	  },
	  "stars": 5,
	  "review_count": 29,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "u'free'",
		"RestaurantsTableService": "False",
		"RestaurantsDelivery": "True",
		"Caters": "True",
		"NoiseLevel": "u'average'"
	  },
	  "menu": [
		"Onion rings",
		"Pigs in a blanket",
		"Lasagna",
		"Green salad",
		"Breadsticks",
		"Chicken pot pie",
		"Fried chicken",
		"Mushroom swiss burger",
		"Chicken parmesan",
		"Classic burger",
		"Spinach cheese dip with chips",
		"Cheddar Biscuits"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32021"
	  },
	  "address": {
		"building": "405",
		"coord": [
		  -73.9646207,
		  40.7550069
		],
		"street": "East   52 Street",
		"zipcode": "10022"
	  },
	  "borough": "Manhattan",
	  "cuisine": "French",
	  "name": "Le Perigord",
	  "restaurant_id": "40365414",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9646207,
		  40.7550069
		]
	  },
	  "stars": 5,
	  "review_count": 187,
	  "attributes": {
		"RestaurantsReservations": "False",
		"RestaurantsGoodForGroups": "True",
		"HasTV": "False",
		"BikeParking": "True",
		"RestaurantsDelivery": "True",
		"Alcohol": "'none'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"NoiseLevel": "u'average'",
		"WiFi": "'no'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"GoodForKids": "True",
		"BusinessAcceptsBitcoin": "False",
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsAttire": "'casual'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': False}"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null,
	  "sponsored": 20,
	  "menu": [
		"Crème brûlée",
		"Boeuf Bourguignon",
		"Foie Gras",
		"Tartiflette",
		"Poisson Meunière",
		"Confit de Canard",
		"Chicken Cordon Bleu",
		"Assiette de Charcuterie",
		"Bouillabaisse",
		"Quiche Lorraine",
		"Salade Nicoise",
		"Filet Mignon"
	  ]
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32042"
	  },
	  "address": {
		"building": "21",
		"coord": [
		  -73.9990337,
		  40.7143954
		],
		"street": "Mott Street",
		"zipcode": "10013"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Chinese",
	  "name": "Hop Kee Restaurant",
	  "restaurant_id": "40365942",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9990337,
		  40.7143954
		]
	  },
	  "stars": 2.5,
	  "review_count": 80,
	  "attributes": {
		"NoiseLevel": "u'average'",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsReservations": "True",
		"Alcohol": "u'full_bar'",
		"RestaurantsAttire": "u'casual'",
		"HasTV": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "False",
		"Caters": "True",
		"WiFi": "u'free'",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "menu": [
		"Beef with broccoli",
		"Sweet and sour pork",
		"Spring rolls",
		"Chicken lo mein",
		"Potstickers",
		"Hot and sour soup",
		"Char siu bao",
		"Egg rolls",
		"Kung pao chicken",
		"Shrimp fried rice",
		"Honey walnut prawns",
		"Mu shu pork",
		"Pan-Fried Noodles",
		"Stir-fried noodles with chicken"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b8"
	  },
	  "address": {
		"building": "2300",
		"coord": [
		  -73.8786113,
		  40.8502883
		],
		"street": "Southern Boulevard",
		"zipcode": "10460"
	  },
	  "borough": "Bronx",
	  "cuisine": "African",
	  "name": "African Terrace",
	  "restaurant_id": "40368021",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8786113,
		  40.8502883
		]
	  },
	  "stars": 5,
	  "review_count": 10,
	  "attributes": {
		"WheelchairAccessible": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"Caters": "False",
		"WiFi": "u'free'",
		"BikeParking": "False",
		"BusinessAcceptsBitcoin": "False"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ff4"
	  },
	  "address": {
		"building": "845",
		"coord": [
		  -73.965531,
		  40.765431
		],
		"street": "Lexington Avenue",
		"zipcode": "10065"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Steak",
	  "name": "Donohue'S Steak House",
	  "restaurant_id": "40364572",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.965531,
		  40.765431
		]
	  },
	  "stars": 2,
	  "review_count": 6,
	  "attributes": {
		"RestaurantsDelivery": "False",
		"RestaurantsAttire": "'casual'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForKids": "True",
		"RestaurantsReservations": "False",
		"BikeParking": "False",
		"HasTV": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsGoodForGroups": "True"
	  },
	  "PriceRange": null,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fbc"
	  },
	  "address": {
		"building": "1236",
		"coord": [
		  -73.8893654,
		  40.81376179999999
		],
		"street": "238 Spofford Ave",
		"zipcode": "10474"
	  },
	  "borough": "Bronx",
	  "cuisine": "Chinese",
	  "name": "Happy Garden",
	  "restaurant_id": "40363289",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8893654,
		  40.81376179999999
		]
	  },
	  "stars": 3.5,
	  "review_count": 26,
	  "attributes": {
		"RestaurantsReservations": "False",
		"RestaurantsAttire": "u'casual'",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"WiFi": "u'free'",
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"RestaurantsDelivery": "False",
		"Alcohol": "u'none'",
		"RestaurantsTableService": "True",
		"HasTV": "True",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}"
	  },
	  "menu": [
		"Spring rolls",
		"Sweet and sour chicken with lemon",
		"Sesame chicken",
		"Egg drop soup",
		"Beef with broccoli",
		"Wonton wrappers",
		"Hot and sour soup",
		"Vegetable chow mein",
		"Fried wonton (with pork and shrimp filling)",
		"Honey walnut prawns",
		"Peking duck",
		"Wonton soup",
		"Pan-Fried Noodles",
		"Beef Noodle Soup"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null,
	  "sponsored": 20
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3204c"
	  },
	  "address": {
		"building": "146-09",
		"coord": [
		  -73.808593,
		  40.702028
		],
		"street": "Jamaica Avenue",
		"zipcode": "11435"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Blarney Bar",
	  "restaurant_id": "40365972",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.808593,
		  40.702028
		]
	  },
	  "stars": 4,
	  "review_count": 158,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsGoodForGroups": "True",
		"WiFi": "u'no'",
		"RestaurantsReservations": "True",
		"Alcohol": "'none'",
		"GoodForKids": "True",
		"BikeParking": "True",
		"RestaurantsDelivery": "True",
		"NoiseLevel": "u'average'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"RestaurantsAttire": "u'casual'",
		"HasTV": "True",
		"RestaurantsTableService": "False",
		"WheelchairAccessible": "True",
		"Caters": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "menu": [
		"Mac & cheese",
		"Caesar salad",
		"Lasagna",
		"French fries",
		"Chicken fingers",
		"Onion rings",
		"Grilled cheese sandwich",
		"Chicken pot pie",
		"Meatloaf",
		"Spinach cheese dip with chips",
		"Chicken soup",
		"Green salad"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32008"
	  },
	  "address": {
		"building": "30-13",
		"coord": [
		  -73.9151096,
		  40.763377
		],
		"street": "Steinway Street",
		"zipcode": "11103"
	  },
	  "borough": "Queens",
	  "cuisine": "Pizza",
	  "name": "Rizzo'S Fine Pizza",
	  "restaurant_id": "40364920",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9151096,
		  40.763377
		]
	  },
	  "stars": 2.5,
	  "review_count": 40,
	  "attributes": {
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForKids": "True",
		"WiFi": "'free'",
		"Alcohol": "'beer_and_wine'",
		"BusinessAcceptsCreditCards": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsAttire": "'casual'",
		"RestaurantsDelivery": "True",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsReservations": "False",
		"HasTV": "True"
	  },
	  "menu": [
		"Meatlovers",
		"Greek salad",
		"Funghi",
		"cookies",
		"Alfredo Pizza",
		"cheesy bread",
		"Neapolitan Pizza",
		"gelato",
		"Desano",
		"Pepperoni Pizza",
		"Barbecue chicken pizza",
		"Diavola"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32080"
	  },
	  "address": {
		"building": "12402",
		"coord": [
		  -73.82629709999999,
		  40.700598
		],
		"street": "Jamaica Avenue",
		"zipcode": "11418"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Little Brown Jug",
	  "restaurant_id": "40366929",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.82629709999999,
		  40.700598
		]
	  },
	  "stars": 4,
	  "review_count": 87,
	  "attributes": {
		"RestaurantsReservations": "False",
		"RestaurantsDelivery": "True",
		"Caters": "False",
		"WiFi": "u'no'",
		"RestaurantsAttire": "'casual'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"GoodForKids": "True",
		"RestaurantsTableService": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsGoodForGroups": "True",
		"HasTV": "False",
		"Alcohol": "'beer_and_wine'",
		"BusinessAcceptsCreditCards": "True",
		"WheelchairAccessible": "True",
		"NoiseLevel": "u'average'"
	  },
	  "menu": [
		"Mashed potatoes",
		"Chicken soup",
		"Tomato soup",
		"Cheeseburger",
		"Baked potato",
		"Breadsticks",
		"Pigs in a blanket",
		"Meatloaf",
		"Mac & cheese",
		"Green salad",
		"Chicken parmesan",
		"Mushroom swiss burger"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fd3"
	  },
	  "address": {
		"building": "277",
		"coord": [
		  -73.8941893,
		  40.8634684
		],
		"street": "East Kingsbridge Road",
		"zipcode": "10458"
	  },
	  "borough": "Bronx",
	  "cuisine": "Chinese",
	  "name": "Happy Garden",
	  "restaurant_id": "40364296",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8941893,
		  40.8634684
		]
	  },
	  "stars": 4,
	  "review_count": 52,
	  "attributes": {
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsDelivery": "True",
		"BusinessAcceptsCreditCards": "True",
		"Caters": "True",
		"GoodForKids": "True",
		"WheelchairAccessible": "True",
		"Alcohol": "u'none'",
		"RestaurantsReservations": "False",
		"HasTV": "True",
		"BikeParking": "True",
		"RestaurantsAttire": "'casual'",
		"RestaurantsTableService": "True",
		"WiFi": "u'free'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"NoiseLevel": "u'quiet'",
		"RestaurantsGoodForGroups": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}"
	  },
	  "menu": [
		"Jiaozi dumplings",
		"Sesame chicken",
		"Wonton wrappers",
		"Honey walnut prawns",
		"Peking duck",
		"Mu shu pork",
		"Bacon-wrapped water chestnut appetizer",
		"Hot and sour soup",
		"Shrimp fried rice",
		"Spring rolls",
		"Char siu bao",
		"Fondue Chinoise",
		"Beef Noodle Soup",
		"Stir-fried noodles with chicken"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3208d"
	  },
	  "address": {
		"building": "363",
		"coord": [
		  -74.0029643,
		  40.7231081
		],
		"street": "West Broadway",
		"zipcode": "10013"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Broome Street Bar",
	  "restaurant_id": "40367189",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0029643,
		  40.7231081
		]
	  },
	  "stars": 2,
	  "review_count": 12,
	  "attributes": {
		"BikeParking": "True",
		"RestaurantsAttire": "u'casual'",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"HasTV": "True",
		"Caters": "True",
		"NoiseLevel": "u'average'",
		"WiFi": "u'free'",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"GoodForKids": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsDelivery": "True",
		"Alcohol": "u'none'"
	  },
	  "menu": [
		"Chicken parmesan",
		"Caesar salad",
		"Cheddar Biscuits",
		"Onion rings",
		"Chicken soup",
		"Tomato soup",
		"Classic burger",
		"French fries",
		"Lasagna",
		"Meatloaf",
		"Chicken pot pie",
		"Green salad"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f8c"
	  },
	  "address": {
		"building": "351",
		"coord": [
		  -73.98513559999999,
		  40.7676919
		],
		"street": "West   57 Street",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Irish",
	  "name": "Dj Reynolds Pub And Restaurant",
	  "restaurant_id": "30191841",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98513559999999,
		  40.7676919
		]
	  },
	  "stars": 3,
	  "review_count": 21,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"Caters": "False",
		"BikeParking": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ff3"
	  },
	  "address": {
		"building": "215",
		"coord": [
		  -73.9805679,
		  40.7659436
		],
		"street": "West 57 Street",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Cafe Atelier (Art Students League)",
	  "restaurant_id": "40364531",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9805679,
		  40.7659436
		]
	  },
	  "stars": 2,
	  "review_count": 13,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "False",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"Baked potato",
		"French fries",
		"Caesar salad",
		"Onion rings",
		"Breadsticks",
		"Fried chicken",
		"Chicken fingers",
		"Cheddar Biscuits",
		"Chicken soup",
		"Mac & cheese",
		"Chicken parmesan",
		"Green salad"
	  ],
	  "PriceRange": 4,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32012"
	  },
	  "address": {
		"building": "1616",
		"coord": [
		  -73.952449,
		  40.776325
		],
		"street": "2 Avenue",
		"zipcode": "10028"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Irish",
	  "name": "Dorrian'S Red Hand Restaurant",
	  "restaurant_id": "40365239",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.952449,
		  40.776325
		]
	  },
	  "stars": 3.5,
	  "review_count": 119,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"NoiseLevel": "u'average'",
		"RestaurantsReservations": "False",
		"Caters": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsAttire": "u'casual'",
		"Ambience": "{'touristy': None, 'hipster': True, 'romantic': None, 'divey': None, 'intimate': False, 'trendy': True, 'upscale': False, 'classy': None, 'casual': True}",
		"DriveThru": "False",
		"RestaurantsTableService": "True",
		"HasTV": "True",
		"Alcohol": "u'full_bar'",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32022"
	  },
	  "address": {
		"building": "106",
		"coord": [
		  -74.0003315,
		  40.7274874
		],
		"street": "West Houston Street",
		"zipcode": "10012"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Italian",
	  "name": "Arturo'S",
	  "restaurant_id": "40365387",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0003315,
		  40.7274874
		]
	  },
	  "stars": 4.5,
	  "review_count": 59,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "False"
	  },
	  "menu": [
		"Baked Ziti",
		"All Meat Pizza",
		"Margherita pizza",
		"assorted gelato",
		"Vegetarian Baked Ziti",
		"Hawaiian Pizza",
		"Angel Hair Pasta",
		"Fried Mozzarella",
		"Manicotti",
		"Neapolitan Pizza",
		"Lasagna",
		"Salmon"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3202d"
	  },
	  "address": {
		"building": "6322",
		"coord": [
		  -73.9896898,
		  40.6199526
		],
		"street": "18 Avenue",
		"zipcode": "11204"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Pizza",
	  "name": "J&V Famous Pizza",
	  "restaurant_id": "40365632",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9896898,
		  40.6199526
		]
	  },
	  "stars": 3.5,
	  "review_count": 19,
	  "attributes": {
		"BikeParking": "True",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "True",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"brownies",
		"Diavola",
		"Garlic bread",
		"Hawaiian pizza",
		"Barbecue chicken pizza",
		"Desano",
		"Deluxe Pizza",
		"Greek salad",
		"Neapolitan Pizza",
		"Alfredo Pizza",
		"Chef's Special",
		"cookies"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32061"
	  },
	  "address": {
		"building": "433",
		"coord": [
		  -73.98306099999999,
		  40.7441419
		],
		"street": "Park Avenue South",
		"zipcode": "10016"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Desmond'S Tavern",
	  "restaurant_id": "40366396",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98306099999999,
		  40.7441419
		]
	  },
	  "stars": 3.5,
	  "review_count": 78,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"RestaurantsDelivery": "True",
		"GoodForKids": "True",
		"RestaurantsAttire": "u'casual'",
		"BikeParking": "True",
		"WiFi": "'no'",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"Alcohol": "u'full_bar'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"HasTV": "True",
		"NoiseLevel": "u'average'",
		"RestaurantsReservations": "True"
	  },
	  "menu": [
		"Spaghetti with meatballs",
		"Mashed potatoes",
		"Fried chicken",
		"French fries",
		"Cheddar Biscuits",
		"Grilled cheese sandwich",
		"Lasagna",
		"Caesar salad",
		"Baked potato",
		"Mac & cheese",
		"Chicken fingers",
		"Classic burger"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320bd"
	  },
	  "address": {
		"building": "710",
		"coord": [
		  -74.1003379,
		  40.5655379
		],
		"street": "New Dorp Lane",
		"zipcode": "10306"
	  },
	  "borough": "Staten Island",
	  "cuisine": "Italian",
	  "name": "Ni-Ni'S Cafe",
	  "restaurant_id": "40367570",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.1003379,
		  40.5655379
		]
	  },
	  "stars": 3.5,
	  "review_count": 45,
	  "attributes": {
		"RestaurantsAttire": "u'casual'",
		"RestaurantsReservations": "False",
		"RestaurantsGoodForGroups": "True",
		"NoiseLevel": "u'average'",
		"Alcohol": "u'none'",
		"HasTV": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"RestaurantsDelivery": "False",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"BikeParking": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"Caters": "True",
		"WiFi": "'free'"
	  },
	  "menu": [
		"Neapolitan Pizza",
		"Vegetarian Broccoli Pizza",
		"assorted gelato",
		"Veal",
		"Pasta with ricotta cheese",
		"Spinach Ravioli",
		"Alfredo Pizza",
		"Alfredo with Spinach Pizza",
		"Cannelloni",
		"All Meat Pizza",
		"Bruschetta",
		"chicken"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f65"
	  },
	  "address": {
		"building": "2780",
		"coord": [
		  -73.98241999999999,
		  40.579505
		],
		"street": "Stillwell Avenue",
		"zipcode": "11224"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Riviera Caterer",
	  "restaurant_id": "40356018",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98241999999999,
		  40.579505
		]
	  },
	  "stars": 4,
	  "review_count": 86,
	  "attributes": {
		"RestaurantsTableService": "True",
		"WiFi": "u'free'",
		"BikeParking": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsReservations": "False",
		"WheelchairAccessible": "True",
		"Caters": "True",
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsBitcoin": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"HasTV": "True",
		"Alcohol": "'beer_and_wine'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"NoiseLevel": "u'average'",
		"RestaurantsAttire": "'casual'",
		"RestaurantsDelivery": "None"
	  },
	  "menu": [
		"Mashed potatoes",
		"Pigs in a blanket",
		"Mushroom swiss burger",
		"Mac & cheese",
		"Fried chicken",
		"Chicken pot pie",
		"Chicken soup",
		"Chicken parmesan",
		"Classic burger",
		"Tomato soup",
		"Lasagna",
		"Spaghetti with meatballs"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32018"
	  },
	  "address": {
		"building": "15",
		"coord": [
		  -73.98126069999999,
		  40.7547107
		],
		"street": "West   43 Street",
		"zipcode": "10036"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "The Princeton Club",
	  "restaurant_id": "40365361",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.98126069999999,
		  40.7547107
		]
	  },
	  "stars": 3,
	  "review_count": 406,
	  "attributes": {
		"Alcohol": "u'full_bar'",
		"RestaurantsReservations": "True",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"WiFi": "u'free'",
		"BikeParking": "True",
		"HasTV": "True",
		"Caters": "True",
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsCreditCards": "True",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': True, 'wednesday': False, 'thursday': True, 'sunday': False, 'saturday': True}",
		"NoiseLevel": "u'loud'",
		"RestaurantsAttire": "u'casual'",
		"GoodForMeal": "{'dessert': None, 'latenight': True, 'lunch': True, 'dinner': True, 'brunch': None, 'breakfast': False}",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"RestaurantsDelivery": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}"
	  },
	  "menu": [
		"Cheddar Biscuits",
		"Pigs in a blanket",
		"Breadsticks",
		"Cheeseburger",
		"Spinach cheese dip with chips",
		"Classic burger",
		"Lasagna",
		"Fried chicken",
		"French fries",
		"Mashed potatoes",
		"Spaghetti with meatballs",
		"Meatloaf"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3208a"
	  },
	  "address": {
		"building": "2301",
		"coord": [
		  -73.9270926,
		  40.6142428
		],
		"street": "Flatbush Avenue",
		"zipcode": "11234"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "New Floridian Diner",
	  "restaurant_id": "40367164",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9270926,
		  40.6142428
		]
	  },
	  "stars": 2,
	  "review_count": 8,
	  "attributes": {
		"NoiseLevel": "u'loud'",
		"HasTV": "True",
		"Alcohol": "u'full_bar'",
		"RestaurantsAttire": "u'formal'",
		"RestaurantsDelivery": "True",
		"Caters": "False",
		"WiFi": "'no'",
		"GoodForKids": "True",
		"BikeParking": "True",
		"RestaurantsReservations": "True",
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}"
	  },
	  "menu": [
		"Chicken parmesan",
		"Pigs in a blanket",
		"Chicken pot pie",
		"Breadsticks",
		"Mashed potatoes",
		"Lasagna",
		"Grilled cheese sandwich",
		"Tomato soup",
		"Classic burger",
		"Spinach cheese dip with chips",
		"French fries",
		"Spaghetti with meatballs"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fc4"
	  },
	  "address": {
		"building": "625",
		"coord": [
		  -73.990494,
		  40.7569545
		],
		"street": "8 Avenue",
		"zipcode": "10018"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Cafe Metro",
	  "restaurant_id": "40363298",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.990494,
		  40.7569545
		]
	  },
	  "stars": 4,
	  "review_count": 10,
	  "attributes": {
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"BikeParking": "True",
		"Caters": "False"
	  },
	  "menu": [
		"Tomato soup",
		"Baked potato",
		"Caesar salad",
		"Meatloaf",
		"Breadsticks",
		"Classic burger",
		"Cheeseburger",
		"Chicken fingers",
		"Mushroom swiss burger",
		"Cheddar Biscuits",
		"Lasagna",
		"Green salad"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32033"
	  },
	  "address": {
		"building": "229",
		"coord": [
		  -73.9590059,
		  40.7090147
		],
		"street": "Havemeyer Street",
		"zipcode": "11211"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Reben Luncheonette",
	  "restaurant_id": "40365546",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9590059,
		  40.7090147
		]
	  },
	  "stars": 3.5,
	  "review_count": 12,
	  "attributes": {
		"RestaurantsReservations": "True",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "'full_bar'",
		"GoodForKids": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"NoiseLevel": "u'average'"
	  },
	  "menu": [
		"Meatloaf",
		"Spinach cheese dip with chips",
		"Mashed potatoes",
		"Mac & cheese",
		"Fried chicken",
		"Chicken pot pie",
		"Tomato soup",
		"Onion rings",
		"Breadsticks",
		"Cheddar Biscuits",
		"Chicken parmesan",
		"Baked potato"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3208b"
	  },
	  "address": {
		"building": "459",
		"coord": [
		  -73.979839,
		  40.739796
		],
		"street": "2 Avenue",
		"zipcode": "10010"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Mexican",
	  "name": "Mexico Lindo Restaurant",
	  "restaurant_id": "40367038",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.979839,
		  40.739796
		]
	  },
	  "stars": 3.5,
	  "review_count": 195,
	  "attributes": {
		"GoodForKids": "True",
		"HasTV": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsReservations": "True",
		"Alcohol": "u'full_bar'",
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "'no'",
		"BikeParking": "True",
		"RestaurantsAttire": "u'casual'",
		"NoiseLevel": "u'average'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32025"
	  },
	  "address": {
		"building": "1758",
		"coord": [
		  -74.1220973,
		  40.6129407
		],
		"street": "Victory Boulevard",
		"zipcode": "10314"
	  },
	  "borough": "Staten Island",
	  "cuisine": "Pizza/Italian",
	  "name": "Joe & Pat'S Pizzeria",
	  "restaurant_id": "40365454",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.1220973,
		  40.6129407
		]
	  },
	  "stars": 3,
	  "review_count": 40,
	  "attributes": {
		"RestaurantsAttire": "'casual'",
		"RestaurantsDelivery": "False",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"RestaurantsReservations": "False",
		"Alcohol": "'none'",
		"RestaurantsGoodForGroups": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "True",
		"HasTV": "True",
		"GoodForKids": "True",
		"NoiseLevel": "'quiet'",
		"WiFi": "'no'",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "menu": [
		"Spinach Ravioli",
		"Tiramisu",
		"assorted gelato",
		"cheesy bread",
		"Chef's Special",
		"Margherita pizza",
		"Meatballs",
		"Vegetarian Baked Ziti",
		"Cheese Ravioli",
		"Fried Mozzarella",
		"White Pizza",
		"Funghi"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32031"
	  },
	  "address": {
		"building": "910",
		"coord": [
		  -73.9799932,
		  40.7660886
		],
		"street": "Seventh Avenue",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "La Parisienne Diner",
	  "restaurant_id": "40365633",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9799932,
		  40.7660886
		]
	  },
	  "stars": 3,
	  "review_count": 462,
	  "attributes": {
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"WheelchairAccessible": "True",
		"Music": "{'dj': False, 'background_music': True, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"RestaurantsDelivery": "True",
		"BusinessParking": "{'garage': True, 'street': False, 'validated': False, 'lot': True, 'valet': True}",
		"BikeParking": "False",
		"RestaurantsAttire": "'casual'",
		"HasTV": "True",
		"NoiseLevel": "'average'",
		"RestaurantsTableService": "True",
		"Caters": "True",
		"BusinessAcceptsBitcoin": "False",
		"BusinessAcceptsCreditCards": "True",
		"Alcohol": "'full_bar'",
		"WiFi": "u'free'",
		"GoodForDancing": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': False}",
		"GoodForKids": "True"
	  },
	  "menu": [
		"Tomato soup",
		"Caesar salad",
		"Mozzarella sticks",
		"Mac & cheese",
		"Spinach cheese dip with chips",
		"Baked potato",
		"Onion rings",
		"Spaghetti with meatballs",
		"Chicken soup",
		"French fries",
		"Breadsticks",
		"Chicken pot pie"
	  ],
	  "PriceRange": 3,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32074"
	  },
	  "address": {
		"building": "3432",
		"coord": [
		  -73.9420751,
		  40.6002442
		],
		"street": "Nostrand Avenue",
		"zipcode": "11229"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "American",
	  "name": "Brennan & Carr",
	  "restaurant_id": "40366487",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9420751,
		  40.6002442
		]
	  },
	  "stars": 3.5,
	  "review_count": 131,
	  "attributes": {
		"RestaurantsDelivery": "True",
		"RestaurantsGoodForGroups": "False",
		"HasTV": "True",
		"Caters": "True",
		"GoodForDancing": "False",
		"NoiseLevel": "u'average'",
		"BikeParking": "True",
		"RestaurantsReservations": "True",
		"BusinessParking": "{'garage': True, 'street': True, 'validated': True, 'lot': False, 'valet': False}",
		"RestaurantsTableService": "True",
		"WheelchairAccessible": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}",
		"WiFi": "u'free'",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': False, 'wednesday': False, 'thursday': False, 'sunday': False, 'saturday': False}",
		"Alcohol": "u'full_bar'",
		"BusinessAcceptsBitcoin": "False",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"BusinessAcceptsCreditCards": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"GoodForKids": "True"
	  },
	  "menu": [
		"Mac & cheese",
		"French fries",
		"Cheeseburger",
		"Tomato soup",
		"Mushroom swiss burger",
		"Breadsticks",
		"Chicken fingers",
		"Classic burger",
		"Chicken parmesan",
		"Grilled cheese sandwich",
		"Lasagna",
		"Pigs in a blanket"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32023"
	  },
	  "address": {
		"building": "4241",
		"coord": [
		  -73.9365108,
		  40.8497077
		],
		"street": "Broadway",
		"zipcode": "10033"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Reynold'S Bar",
	  "restaurant_id": "40365423",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9365108,
		  40.8497077
		]
	  },
	  "stars": 3.5,
	  "review_count": 87,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"WiFi": "'free'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'full_bar'",
		"Caters": "True",
		"RestaurantsTableService": "True",
		"HasTV": "True",
		"WheelchairAccessible": "True",
		"GoodForMeal": "{'dessert': None, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': None, 'breakfast': False}",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsReservations": "False",
		"NoiseLevel": "u'average'",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': True, 'wednesday': False, 'thursday': False, 'sunday': False, 'saturday': False}",
		"RestaurantsDelivery": "False"
	  },
	  "menu": [
		"French fries",
		"Cheeseburger",
		"Grilled cheese sandwich",
		"Breadsticks",
		"Green salad",
		"Meatloaf",
		"Mac & cheese",
		"Spaghetti with meatballs",
		"Pigs in a blanket",
		"Fried chicken",
		"Chicken fingers",
		"Cheddar Biscuits"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ffa"
	  },
	  "address": {
		"building": "62",
		"coord": [
		  -74.00310999999999,
		  40.7348888
		],
		"street": "Charles Street",
		"zipcode": "10014"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
	  "name": "Seville Restaurant",
	  "restaurant_id": "40364439",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.00310999999999,
		  40.7348888
		]
	  },
	  "stars": 2.5,
	  "review_count": 32,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"WiFi": "'free'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "True",
		"BikeParking": "True",
		"DriveThru": "None",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fdd"
	  },
	  "address": {
		"building": "94",
		"coord": [
		  -74.0061936,
		  40.7092038
		],
		"street": "Fulton Street",
		"zipcode": "10038"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Chicken",
	  "name": "Texas Rotisserie",
	  "restaurant_id": "40364304",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0061936,
		  40.7092038
		]
	  },
	  "stars": 1,
	  "review_count": 9,
	  "attributes": {
		"GoodForKids": "True",
		"RestaurantsReservations": "False",
		"RestaurantsAttire": "'casual'",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsDelivery": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"NoiseLevel": "u'quiet'",
		"HasTV": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32004"
	  },
	  "address": {
		"building": "2222",
		"coord": [
		  -73.84971759999999,
		  40.8304811
		],
		"street": "Haviland Avenue",
		"zipcode": "10462"
	  },
	  "borough": "Bronx",
	  "cuisine": "American",
	  "name": "The New Starling Athletic Club Of The Bronx",
	  "restaurant_id": "40364956",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.84971759999999,
		  40.8304811
		]
	  },
	  "stars": 3.5,
	  "review_count": 73,
	  "attributes": {
		"WiFi": "u'free'",
		"BusinessAcceptsCreditCards": "True",
		"BikeParking": "True",
		"Caters": "False",
		"RestaurantsDelivery": "True",
		"BusinessParking": "{'garage': False, 'street': None, 'validated': False, 'lot': False, 'valet': False}"
	  },
	  "menu": [
		"Classic burger",
		"Mashed potatoes",
		"Grilled cheese sandwich",
		"Breadsticks",
		"Meatloaf",
		"Cheddar Biscuits",
		"Mozzarella sticks",
		"Mac & cheese",
		"Fried chicken",
		"Spaghetti with meatballs",
		"Green salad",
		"Onion rings"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b7"
	  },
	  "address": {
		"building": "30-27",
		"coord": [
		  -73.8344778,
		  40.7692995
		],
		"street": "Stratton Street",
		"zipcode": "11354"
	  },
	  "borough": "Queens",
	  "cuisine": "Pizza/Italian",
	  "name": "Amore Pizzeria & Restaurant",
	  "restaurant_id": "40367870",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8344778,
		  40.7692995
		]
	  },
	  "stars": 3,
	  "review_count": 41,
	  "attributes": {
		"RestaurantsDelivery": "False",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsReservations": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"GoodForKids": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "'casual'",
		"HasTV": "True",
		"Alcohol": "'full_bar'"
	  },
	  "menu": [
		"Fried calimari",
		"Spaghetti",
		"Diavola",
		"Neapolitan Pizza",
		"Chef's Special",
		"Baked Ziti",
		"Alfredo with Spinach Pizza",
		"Margherita pizza",
		"Funghi",
		"caprese salad",
		"Lasagna",
		"Bruschetta"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f8a"
	  },
	  "address": {
		"building": "1",
		"coord": [
		  -73.96926909999999,
		  40.7685235
		],
		"street": "East   66 Street",
		"zipcode": "10065"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "1 East 66Th Street Kitchen",
	  "restaurant_id": "40359480",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.96926909999999,
		  40.7685235
		]
	  },
	  "stars": 4.5,
	  "review_count": 395,
	  "attributes": {
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': True, 'divey': False, 'intimate': False, 'trendy': True, 'upscale': False, 'classy': True, 'casual': True}",
		"GoodForDancing": "False",
		"RestaurantsDelivery": "True",
		"Caters": "True",
		"RestaurantsTableService": "True",
		"RestaurantsReservations": "True",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': True, 'video': False, 'karaoke': False}",
		"WheelchairAccessible": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "'casual'",
		"BusinessAcceptsCreditCards": "True",
		"BikeParking": "False",
		"Alcohol": "u'full_bar'",
		"GoodForMeal": "{'dessert': None, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': None, 'breakfast': False}",
		"HasTV": "True",
		"WiFi": "u'free'",
		"GoodForKids": "True",
		"NoiseLevel": "u'average'",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': True, 'wednesday': True, 'thursday': False, 'sunday': False, 'saturday': True}",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}"
	  },
	  "menu": [
		"Chicken fingers",
		"Cheeseburger",
		"Classic burger",
		"Grilled cheese sandwich",
		"French fries",
		"Spaghetti with meatballs",
		"Meatloaf",
		"Green salad",
		"Onion rings",
		"Cheddar Biscuits",
		"Mozzarella sticks",
		"Mushroom swiss burger"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fbe"
	  },
	  "address": {
		"building": "107",
		"coord": [
		  -74.00920839999999,
		  40.7132925
		],
		"street": "Church Street",
		"zipcode": "10007"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Downtown Deli",
	  "restaurant_id": "40363021",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.00920839999999,
		  40.7132925
		]
	  },
	  "stars": 4.5,
	  "review_count": 131,
	  "attributes": {
		"Caters": "False",
		"RestaurantsAttire": "u'casual'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsDelivery": "False",
		"GoodForKids": "True",
		"BikeParking": "False",
		"WiFi": "u'free'",
		"HasTV": "False",
		"RestaurantsTableService": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': True, 'breakfast': True}",
		"NoiseLevel": "'average'",
		"Alcohol": "u'none'",
		"BusinessAcceptsBitcoin": "False",
		"RestaurantsGoodForGroups": "False",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"WheelchairAccessible": "False",
		"RestaurantsReservations": "False"
	  },
	  "menu": [
		"Mushroom swiss burger",
		"Chicken pot pie",
		"Chicken fingers",
		"Grilled cheese sandwich",
		"Onion rings",
		"Cheddar Biscuits",
		"Chicken soup",
		"Mozzarella sticks",
		"Spinach cheese dip with chips",
		"Fried chicken",
		"Mashed potatoes",
		"Breadsticks"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b2"
	  },
	  "address": {
		"building": "17",
		"coord": [
		  -74.00259299999999,
		  40.7324849
		],
		"street": "Barrow Street",
		"zipcode": "10014"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Seafood",
	  "name": "One If By Land Two If By Sea",
	  "restaurant_id": "40367797",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.00259299999999,
		  40.7324849
		]
	  },
	  "stars": 4,
	  "review_count": 628,
	  "attributes": {
		"RestaurantsReservations": "False",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"Alcohol": "u'none'",
		"HasTV": "False",
		"BikeParking": "True",
		"BusinessAcceptsCreditCards": "True",
		"NoiseLevel": "u'average'",
		"WiFi": "u'no'",
		"RestaurantsAttire": "'casual'",
		"WheelchairAccessible": "True",
		"BusinessAcceptsBitcoin": "False",
		"RestaurantsTableService": "True",
		"GoodForKids": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': None, 'dinner': False, 'brunch': True, 'breakfast': True}",
		"BYOB": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': None, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"RestaurantsDelivery": "None"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b3"
	  },
	  "address": {
		"building": "75-50",
		"coord": [
		  -73.8618426,
		  40.6797488
		],
		"street": "101 Avenue",
		"zipcode": "11416"
	  },
	  "borough": "Queens",
	  "cuisine": "Hamburgers",
	  "name": "Mcdonald'S",
	  "restaurant_id": "40367829",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8618426,
		  40.6797488
		]
	  },
	  "stars": 4,
	  "review_count": 17,
	  "attributes": {
		"RestaurantsDelivery": "True",
		"RestaurantsReservations": "True",
		"GoodForKids": "True",
		"RestaurantsAttire": "'casual'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"HasTV": "True",
		"BikeParking": "False",
		"RestaurantsGoodForGroups": "False"
	  },
	  "menu": [
		"Chili Cheese Fries",
		"Buffalo Fries",
		"Hickory burger",
		"Santa Fe burger",
		"French Fries",
		"Classic burger",
		"Ahi Tuna burger",
		"Sweet potato fries",
		"Oldtimer",
		"Oldtimer with cheese",
		"Cheeseburger",
		"Fajita burger"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fca"
	  },
	  "address": {
		"building": "1111",
		"coord": [
		  -74.0796436,
		  40.59878339999999
		],
		"street": "Hylan Boulevard",
		"zipcode": "10305"
	  },
	  "borough": "Staten Island",
	  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
	  "name": "Carvel Ice Cream",
	  "restaurant_id": "40363834",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0796436,
		  40.59878339999999
		]
	  },
	  "stars": 3.5,
	  "review_count": 15,
	  "attributes": {
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"GoodForKids": "True",
		"RestaurantsReservations": "False",
		"RestaurantsAttire": "u'casual'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"RestaurantsGoodForGroups": "True",
		"Alcohol": "u'none'",
		"RestaurantsDelivery": "False",
		"WiFi": "u'no'",
		"NoiseLevel": "u'quiet'",
		"Caters": "False",
		"HasTV": "True",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31ff8"
	  },
	  "address": {
		"building": "251",
		"coord": [
		  -73.9775552,
		  40.7432016
		],
		"street": "East   31 Street",
		"zipcode": "10016"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Italian",
	  "name": "Marchis Restaurant",
	  "restaurant_id": "40364668",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9775552,
		  40.7432016
		]
	  },
	  "stars": 3,
	  "review_count": 67,
	  "attributes": {
		"WiFi": "'no'",
		"RestaurantsDelivery": "False",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "False",
		"GoodForKids": "True",
		"NoiseLevel": "u'average'",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'full_bar'",
		"HasTV": "True",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"RestaurantsGoodForGroups": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"RestaurantsReservations": "True"
	  },
	  "menu": [
		"Vegetarian Broccoli Pizza",
		"Salmon",
		"Manicotti",
		"Spinach Ravioli",
		"White Pizza",
		"Alfredo Pizza",
		"Minestrone soup",
		"assorted gelato",
		"Margherita pizza",
		"Neapolitan Pizza",
		"Spaghetti",
		"Pepperoni Pizza"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fc3"
	  },
	  "address": {
		"building": "1069",
		"coord": [
		  -73.902463,
		  40.694924
		],
		"street": "Wyckoff Avenue",
		"zipcode": "11385"
	  },
	  "borough": "Queens",
	  "cuisine": "Delicatessen",
	  "name": "Tony'S Deli",
	  "restaurant_id": "40363333",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.902463,
		  40.694924
		]
	  },
	  "stars": 4.5,
	  "review_count": 21,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "True",
		"RestaurantsAttire": "u'casual'",
		"RestaurantsDelivery": "True",
		"HasTV": "True",
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"WiFi": "u'free'",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"Alcohol": "u'none'",
		"NoiseLevel": "u'average'"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32077"
	  },
	  "address": {
		"building": "1191",
		"coord": [
		  -73.8513114,
		  40.8316981
		],
		"street": "Castle Hill Avenue",
		"zipcode": "10462"
	  },
	  "borough": "Bronx",
	  "cuisine": "Café/Coffee/Tea",
	  "name": "Lulu'S Coffee Shop",
	  "restaurant_id": "40366938",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8513114,
		  40.8316981
		]
	  },
	  "stars": 3.5,
	  "review_count": 155,
	  "attributes": {
		"Caters": "True",
		"HasTV": "False",
		"RestaurantsReservations": "False",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsAttire": "'casual'",
		"RestaurantsGoodForGroups": "True",
		"Alcohol": "u'beer_and_wine'",
		"NoiseLevel": "u'average'",
		"BikeParking": "True",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"WiFi": "u'free'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"WheelchairAccessible": "True",
		"RestaurantsTableService": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}",
		"RestaurantsDelivery": "False"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32092"
	  },
	  "address": {
		"building": "4408",
		"coord": [
		  -73.90364869999999,
		  40.74133339999999
		],
		"street": "60Th St. - Store",
		"zipcode": "11377"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Charlies Sports Bar",
	  "restaurant_id": "40367240",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.90364869999999,
		  40.74133339999999
		]
	  },
	  "stars": 3.5,
	  "review_count": 66,
	  "attributes": {
		"BusinessAcceptsCreditCards": "True",
		"BikeParking": "True",
		"WiFi": "'no'",
		"GoodForKids": "True",
		"Caters": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}"
	  },
	  "menu": [
		"Pigs in a blanket",
		"Caesar salad",
		"Mashed potatoes",
		"Spinach cheese dip with chips",
		"Fried chicken",
		"Spaghetti with meatballs",
		"French fries",
		"Chicken parmesan",
		"Breadsticks",
		"Baked potato",
		"Lasagna",
		"Grilled cheese sandwich"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32020"
	  },
	  "address": {
		"building": "203",
		"coord": [
		  -73.99987229999999,
		  40.7386361
		],
		"street": "West   14 Street",
		"zipcode": "10011"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Donuts",
	  "name": "Donut Pub",
	  "restaurant_id": "40365525",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.99987229999999,
		  40.7386361
		]
	  },
	  "stars": 4,
	  "review_count": 66,
	  "attributes": {
		"NoiseLevel": "u'average'",
		"Alcohol": "u'none'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"HasTV": "False",
		"RestaurantsAttire": "u'casual'",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"Caters": "True",
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"WiFi": "u'no'",
		"RestaurantsDelivery": "False",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsReservations": "False"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32082"
	  },
	  "address": {
		"building": "2894",
		"coord": [
		  -73.815175,
		  40.8137649
		],
		"street": "Schurz Ave",
		"zipcode": "10465"
	  },
	  "borough": "Bronx",
	  "cuisine": "American",
	  "name": "Marina Delray",
	  "restaurant_id": "40367161",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.815175,
		  40.8137649
		]
	  },
	  "stars": 3.5,
	  "review_count": 49,
	  "attributes": {
		"Caters": "True",
		"NoiseLevel": "u'loud'",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"RestaurantsReservations": "False",
		"RestaurantsAttire": "u'casual'",
		"RestaurantsGoodForGroups": "False",
		"BikeParking": "True",
		"GoodForKids": "True",
		"WiFi": "u'free'",
		"Alcohol": "u'none'",
		"WheelchairAccessible": "True",
		"HasTV": "False",
		"RestaurantsDelivery": "True",
		"BusinessParking": "{'garage': True, 'street': True, 'validated': False, 'lot': False, 'valet': False}"
	  },
	  "menu": [
		"Tomato soup",
		"Chicken fingers",
		"Fried chicken",
		"French fries",
		"Pigs in a blanket",
		"Cheeseburger",
		"Mozzarella sticks",
		"Classic burger",
		"Mashed potatoes",
		"Mushroom swiss burger",
		"Spaghetti with meatballs",
		"Cheddar Biscuits"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fa6"
	  },
	  "address": {
		"building": "522",
		"coord": [
		  -73.95171,
		  40.767461
		],
		"street": "East   74 Street",
		"zipcode": "10021"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Glorious Food",
	  "restaurant_id": "40361521",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.95171,
		  40.767461
		]
	  },
	  "stars": 3,
	  "review_count": 11,
	  "attributes": {
		"RestaurantsGoodForGroups": "False",
		"GoodForKids": "True",
		"RestaurantsReservations": "False",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"RestaurantsAttire": "'casual'",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"Mashed potatoes",
		"Chicken parmesan",
		"Pigs in a blanket",
		"Breadsticks",
		"Green salad",
		"Mushroom swiss burger",
		"Tomato soup",
		"Classic burger",
		"Mozzarella sticks",
		"French fries",
		"Grilled cheese sandwich",
		"Cheeseburger"
	  ],
	  "PriceRange": null,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fb7"
	  },
	  "address": {
		"building": "56",
		"coord": [
		  -73.991495,
		  40.692273
		],
		"street": "Court Street",
		"zipcode": "11201"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Donuts",
	  "name": "Dunkin' Donuts",
	  "restaurant_id": "40363098",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.991495,
		  40.692273
		]
	  },
	  "stars": 4.5,
	  "review_count": 36,
	  "attributes": {
		"WiFi": "u'no'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"BikeParking": "True",
		"Caters": "True",
		"WheelchairAccessible": "True",
		"BusinessAcceptsCreditCards": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": null,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32028"
	  },
	  "address": {
		"building": "181-08",
		"coord": [
		  -73.7867565,
		  40.7271312
		],
		"street": "Union Turnpike",
		"zipcode": "11366"
	  },
	  "borough": "Queens",
	  "cuisine": "Chinese",
	  "name": "King Yum Restaurant",
	  "restaurant_id": "40365592",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.7867565,
		  40.7271312
		]
	  },
	  "stars": 3.5,
	  "review_count": 54,
	  "attributes": {
		"RestaurantsReservations": "True",
		"NoiseLevel": "u'average'",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "True",
		"RestaurantsGoodForGroups": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}",
		"WiFi": "u'free'",
		"BikeParking": "True",
		"RestaurantsTableService": "True",
		"WheelchairAccessible": "True",
		"HasTV": "False",
		"Alcohol": "u'full_bar'",
		"RestaurantsDelivery": "True"
	  },
	  "menu": [
		"Beef with broccoli",
		"Wonton wrappers",
		"Kung pao chicken",
		"Mango pudding",
		"Lettuce wraps",
		"Crab rangoon puffs",
		"General Tso's chicken",
		"Sesame chicken",
		"Szechuan chicken",
		"Peking duck",
		"Ice cream",
		"sweet rice"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fac"
	  },
	  "address": {
		"building": "18",
		"coord": [
		  -73.996984,
		  40.72589
		],
		"street": "West Houston Street",
		"zipcode": "10012"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "Angelika Film Center",
	  "restaurant_id": "40362274",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.996984,
		  40.72589
		]
	  },
	  "stars": 3,
	  "review_count": 21,
	  "attributes": {
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"RestaurantsAttire": "'casual'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"WiFi": "'no'",
		"BusinessAcceptsCreditCards": "True",
		"Alcohol": "u'full_bar'",
		"NoiseLevel": "u'quiet'",
		"HasTV": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "False",
		"GoodForKids": "True",
		"RestaurantsDelivery": "False",
		"BikeParking": "True"
	  },
	  "menu": [
		"Chicken soup",
		"Fried chicken",
		"Cheddar Biscuits",
		"Breadsticks",
		"French fries",
		"Meatloaf",
		"Chicken fingers",
		"Chicken pot pie",
		"Pigs in a blanket",
		"Classic burger",
		"Cheeseburger",
		"Green salad"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32054"
	  },
	  "address": {
		"building": "80",
		"coord": [
		  -74.0086833,
		  40.7052024
		],
		"street": "Beaver Street",
		"zipcode": "10005"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Irish",
	  "name": "Killarney Rose",
	  "restaurant_id": "40366222",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.0086833,
		  40.7052024
		]
	  },
	  "stars": 4.5,
	  "review_count": 219,
	  "attributes": {
		"WiFi": "u'free'",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"Caters": "True",
		"RestaurantsReservations": "False",
		"RestaurantsAttire": "'casual'",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': True, 'breakfast': True}",
		"RestaurantsGoodForGroups": "True",
		"GoodForKids": "True",
		"BusinessAcceptsBitcoin": "False",
		"Alcohol": "'beer_and_wine'",
		"NoiseLevel": "u'average'",
		"BikeParking": "True",
		"HasTV": "True",
		"RestaurantsDelivery": "True"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fe2"
	  },
	  "address": {
		"building": "21",
		"coord": [
		  -73.9774394,
		  40.7604522
		],
		"street": "West   52 Street",
		"zipcode": "10019"
	  },
	  "borough": "Manhattan",
	  "cuisine": "American",
	  "name": "21 Club",
	  "restaurant_id": "40364362",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9774394,
		  40.7604522
		]
	  },
	  "stars": 4,
	  "review_count": 220,
	  "attributes": {
		"BikeParking": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"HasTV": "True",
		"NoiseLevel": "u'average'",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"GoodForKids": "True",
		"WiFi": "'no'",
		"Caters": "True",
		"Alcohol": "u'beer_and_wine'",
		"RestaurantsDelivery": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsAttire": "'casual'",
		"WheelchairAccessible": "True",
		"RestaurantsReservations": "False",
		"RestaurantsTableService": "False",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': True, 'valet': False}"
	  },
	  "menu": [
		"Caesar salad",
		"Fried chicken",
		"Chicken pot pie",
		"Tomato soup",
		"French fries",
		"Chicken fingers",
		"Pigs in a blanket",
		"Chicken soup",
		"Cheeseburger",
		"Meatloaf",
		"Grilled cheese sandwich",
		"Lasagna"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fff"
	  },
	  "address": {
		"building": "600",
		"coord": [
		  -73.7522366,
		  40.7766941
		],
		"street": "West Drive",
		"zipcode": "11363"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Douglaston Club",
	  "restaurant_id": "40364858",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.7522366,
		  40.7766941
		]
	  },
	  "stars": 4.5,
	  "review_count": 45,
	  "attributes": {
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"Alcohol": "'none'",
		"RestaurantsReservations": "False",
		"BusinessAcceptsCreditCards": "False",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsAttire": "'casual'",
		"RestaurantsDelivery": "False",
		"WiFi": "u'no'",
		"NoiseLevel": "u'average'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': None, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"BikeParking": "True",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': True, 'breakfast': True}",
		"Caters": "False",
		"HasTV": "True"
	  },
	  "menu": [
		"Mac & cheese",
		"Chicken pot pie",
		"Mashed potatoes",
		"Mozzarella sticks",
		"Lasagna",
		"Spinach cheese dip with chips",
		"Onion rings",
		"Green salad",
		"French fries",
		"Breadsticks",
		"Classic burger",
		"Spaghetti with meatballs"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31f81"
	  },
	  "address": {
		"building": "1839",
		"coord": [
		  -73.9482609,
		  40.6408271
		],
		"street": "Nostrand Avenue",
		"zipcode": "11226"
	  },
	  "borough": "Brooklyn",
	  "cuisine": "Ice Cream, Gelato, Yogurt, Ices",
	  "name": "Taste The Tropics Ice Cream",
	  "restaurant_id": "40356731",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.9482609,
		  40.6408271
		]
	  },
	  "stars": 3.5,
	  "review_count": 856,
	  "attributes": {
		"NoiseLevel": "u'average'",
		"BikeParking": "False",
		"RestaurantsAttire": "u'casual'",
		"BusinessAcceptsCreditCards": "True",
		"BusinessParking": "{'garage': True, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsReservations": "False",
		"GoodForKids": "True",
		"Caters": "False",
		"WiFi": "u'free'",
		"RestaurantsDelivery": "False",
		"HasTV": "True",
		"Alcohol": "u'full_bar'",
		"Music": "{'dj': False, 'background_music': False, 'no_music': False, 'jukebox': False, 'live': False, 'video': False, 'karaoke': False}",
		"BusinessAcceptsBitcoin": "False",
		"GoodForDancing": "False",
		"BestNights": "{'monday': False, 'tuesday': False, 'friday': False, 'wednesday': False, 'thursday': False, 'sunday': False, 'saturday': False}",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsTableService": "True",
		"GoodForMeal": "{'dessert': None, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': None}",
		"WheelchairAccessible": "True",
		"Ambience": "{'touristy': None, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}"
	  },
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": true
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d320b6"
	  },
	  "address": {
		"building": "8769",
		"coord": [
		  -73.809167,
		  40.705421
		],
		"street": "Sutphin Boulevard",
		"zipcode": "11435"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Maloney'S Bar",
	  "restaurant_id": "40366857",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.809167,
		  40.705421
		]
	  },
	  "stars": 4,
	  "review_count": 30,
	  "attributes": {
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"WiFi": "u'free'",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsReservations": "False",
		"HasTV": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"BikeParking": "True",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsDelivery": "False",
		"NoiseLevel": "u'quiet'",
		"Alcohol": "u'none'",
		"WheelchairAccessible": "True",
		"RestaurantsTableService": "True",
		"Caters": "True",
		"GoodForMeal": "{'dessert': True, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': True, 'breakfast': True}"
	  },
	  "menu": [
		"Baked potato",
		"Cheeseburger",
		"Breadsticks",
		"Classic burger",
		"Mac & cheese",
		"Chicken soup",
		"Spinach cheese dip with chips",
		"French fries",
		"Chicken fingers",
		"Lasagna",
		"Spaghetti with meatballs",
		"Green salad"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32014"
	  },
	  "address": {
		"building": "103",
		"coord": [
		  -74.001043,
		  40.729795
		],
		"street": "Macdougal Street",
		"zipcode": "10012"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Mexican",
	  "name": "Panchito'S",
	  "restaurant_id": "40365348",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -74.001043,
		  40.729795
		]
	  },
	  "stars": 3.5,
	  "review_count": 43,
	  "attributes": {
		"HasTV": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': False, 'valet': False}",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsDelivery": "True",
		"RestaurantsReservations": "False",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': False, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"GoodForKids": "True",
		"WiFi": "'free'",
		"WheelchairAccessible": "True",
		"RestaurantsAttire": "'casual'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': True}",
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"Alcohol": "u'beer_and_wine'"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32027"
	  },
	  "address": {
		"building": "72",
		"coord": [
		  -73.92506,
		  40.8275556
		],
		"street": "East  161 Street",
		"zipcode": "10451"
	  },
	  "borough": "Bronx",
	  "cuisine": "American",
	  "name": "Yankee Tavern",
	  "restaurant_id": "40365499",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.92506,
		  40.8275556
		]
	  },
	  "stars": 4.5,
	  "review_count": 43,
	  "attributes": {
		"Caters": "True",
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsCreditCards": "True",
		"GoodForKids": "True",
		"WiFi": "'no'",
		"HasTV": "True",
		"NoiseLevel": "'average'",
		"RestaurantsTableService": "True",
		"RestaurantsReservations": "True",
		"BikeParking": "True",
		"RestaurantsDelivery": "True",
		"RestaurantsAttire": "'casual'",
		"WheelchairAccessible": "True",
		"Alcohol": "'none'",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"Ambience": "{'touristy': None, 'hipster': False, 'romantic': False, 'divey': None, 'intimate': None, 'trendy': None, 'upscale': False, 'classy': False, 'casual': True}"
	  },
	  "menu": [
		"Chicken parmesan",
		"Mashed potatoes",
		"Grilled cheese sandwich",
		"Green salad",
		"Baked potato",
		"Mushroom swiss burger",
		"Pigs in a blanket",
		"Chicken fingers",
		"Spaghetti with meatballs",
		"Mozzarella sticks",
		"Cheddar Biscuits",
		"Chicken soup"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32066"
	  },
	  "address": {
		"building": "71-24",
		"coord": [
		  -73.8221418,
		  40.7272376
		],
		"street": "Main Street",
		"zipcode": "11367"
	  },
	  "borough": "Queens",
	  "cuisine": "Jewish/Kosher",
	  "name": "Shimons Kosher Pizza",
	  "restaurant_id": "40366586",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8221418,
		  40.7272376
		]
	  },
	  "stars": 3,
	  "review_count": 41,
	  "attributes": {
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': False, 'brunch': False, 'breakfast': False}",
		"WiFi": "'no'",
		"RestaurantsAttire": "u'casual'",
		"Alcohol": "u'none'",
		"BikeParking": "True",
		"HasTV": "False",
		"RestaurantsGoodForGroups": "True",
		"RestaurantsReservations": "False",
		"GoodForKids": "True",
		"BusinessAcceptsCreditCards": "True",
		"Ambience": "{'romantic': False, 'intimate': False, 'classy': False, 'hipster': False, 'divey': False, 'touristy': False, 'trendy': False, 'upscale': False, 'casual': True}",
		"Caters": "False",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"RestaurantsDelivery": "False",
		"NoiseLevel": "u'average'",
		"RestaurantsTableService": "False"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d31fcb"
	  },
	  "address": {
		"building": "87-69",
		"coord": [
		  -73.8309503,
		  40.7001121
		],
		"street": "Lefferts Boulevard",
		"zipcode": "11418"
	  },
	  "borough": "Queens",
	  "cuisine": "American",
	  "name": "Snack Time Grill",
	  "restaurant_id": "40363590",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8309503,
		  40.7001121
		]
	  },
	  "stars": 3.5,
	  "review_count": 635,
	  "attributes": {
		"RestaurantsReservations": "False",
		"Caters": "False",
		"BusinessAcceptsCreditCards": "True",
		"RestaurantsGoodForGroups": "False",
		"RestaurantsAttire": "'casual'",
		"GoodForKids": "True",
		"NoiseLevel": "u'average'",
		"HasTV": "False",
		"WiFi": "u'no'",
		"BikeParking": "True",
		"RestaurantsTableService": "True",
		"WheelchairAccessible": "True",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': True, 'lot': True, 'valet': False}",
		"RestaurantsDelivery": "True",
		"Alcohol": "'none'",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': True, 'casual': True}",
		"GoodForMeal": "{'dessert': False, 'latenight': False, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}"
	  },
	  "menu": [
		"Caesar salad",
		"Mozzarella sticks",
		"Onion rings",
		"Spinach cheese dip with chips",
		"Mashed potatoes",
		"Green salad",
		"Mushroom swiss burger",
		"French fries",
		"Mac & cheese",
		"Chicken soup",
		"Baked potato",
		"Lasagna"
	  ],
	  "PriceRange": 2,
	  "OutdoorSeating": true,
	  "HappyHour": true,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d3209b"
	  },
	  "address": {
		"building": "6946",
		"coord": [
		  -73.8811834,
		  40.7017759
		],
		"street": "Myrtle Avenue",
		"zipcode": "11385"
	  },
	  "borough": "Queens",
	  "cuisine": "German",
	  "name": "Zum Stammtisch",
	  "restaurant_id": "40367377",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.8811834,
		  40.7017759
		]
	  },
	  "stars": 3,
	  "review_count": 11,
	  "attributes": {
		"NoiseLevel": "u'average'",
		"RestaurantsReservations": "False",
		"RestaurantsGoodForGroups": "True",
		"Caters": "True",
		"RestaurantsAttire": "u'casual'",
		"BusinessParking": "{'garage': False, 'street': True, 'validated': False, 'lot': False, 'valet': False}",
		"HasTV": "False",
		"Ambience": "{'romantic': False, 'intimate': False, 'touristy': False, 'hipster': False, 'divey': False, 'classy': False, 'trendy': False, 'upscale': False, 'casual': False}",
		"BusinessAcceptsCreditCards": "True",
		"Alcohol": "u'none'",
		"RestaurantsDelivery": "True",
		"WiFi": "u'free'",
		"GoodForKids": "True"
	  },
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	},
	{
	  "_id": {
		"$oid": "6095a34a7c34416a90d32039"
	  },
	  "address": {
		"building": "413",
		"coord": [
		  -73.99532099999999,
		  40.750205
		],
		"street": "8 Avenue",
		"zipcode": "10001"
	  },
	  "borough": "Manhattan",
	  "cuisine": "Pizza",
	  "name": "New York Pizza Suprema",
	  "restaurant_id": "40365882",
	  "location": {
		"type": "Point",
		"coordinates": [
		  -73.99532099999999,
		  40.750205
		]
	  },
	  "stars": 1.5,
	  "review_count": 35,
	  "attributes": {
		"RestaurantsGoodForGroups": "True",
		"BusinessAcceptsCreditCards": "True",
		"Alcohol": "u'none'",
		"NoiseLevel": "'average'",
		"RestaurantsReservations": "False",
		"BikeParking": "False",
		"RestaurantsAttire": "u'casual'",
		"GoodForKids": "True",
		"BusinessParking": "{'garage': False, 'street': False, 'validated': False, 'lot': True, 'valet': False}",
		"Caters": "False",
		"RestaurantsDelivery": "True",
		"WiFi": "'free'",
		"GoodForMeal": "{'dessert': False, 'latenight': True, 'lunch': True, 'dinner': True, 'brunch': False, 'breakfast': False}",
		"Ambience": "{'touristy': False, 'hipster': False, 'romantic': False, 'divey': False, 'intimate': False, 'trendy': False, 'upscale': False, 'classy': False, 'casual': False}",
		"HasTV": "True"
	  },
	  "menu": [
		"cookies",
		"cheesy bread",
		"Margherita Pizza",
		"Four seasons pizza",
		"Funghi",
		"Meatlovers",
		"Barbecue chicken pizza",
		"Neapolitan Pizza",
		"Desano",
		"Deluxe Pizza",
		"Tiramisu",
		"Garlic bread"
	  ],
	  "PriceRange": 1,
	  "OutdoorSeating": true,
	  "HappyHour": null,
	  "TakeOut": true,
	  "DogsAllowed": null
	}
]


module.exports = {
    data
}