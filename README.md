

## [Yuup](https://yuup.herokuapp.com/#/)

#### Hungry? Yuup! 



![splash](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/splash.png)

## Google Maps and Geolocation

Yuup is a restaurant listings site that assists users in finding a dining experience that best fits their needs. From price and photos, to location and average user experience, Yuup stylishly lists out everything a hungry person is looking for. Upon logging in, the splash page search bar is auto filled with the users home location to assist in the searching process. Should one be looking for a hot spot that they may be new or trending, a user can also go to one of the multiple randomly generated restaurants around the users location. Should that not be enough, simply clicking on the "find more" link on the bottom or entering their parameters in the search bar brings them to a page with more restaurants and their locations. 

![index](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/businessIndex.png)

Now that anything anyone could ever want is within reach, the only decision left is to pick one! When a user has decided upon a restaurant, clicking any part of the restaurants name or image will bring them to the independent spaces show page, which will give a more detailed description of the space. 

![show](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/businessShow.png)

## AWS image hosting

Here, one can find several user uploaded photos, many user uploaded links and, the real meat and potatoes of Yuup, user reviews. 

![reviews](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/reviews.png)

## Reviews - Create, Read, Update, Delete

Each users individual icon of choice, and their home location is listed next to their review. One can get a sense of the kind of reviewer the person may be by their, soon to be implimented, user profile page. Now armed with all the information needed to make an informed decision, a customer can quickly find the path to their restaurant of choice.

Having enjoyed (or hated!) their experience, they can now become part of the community at Yuup by assist the next hungry  customer and leaving a review! By simply clicking the easy to find "* Write a review" button on the top of each business show page, a user can leave their honest feedback in an incredibly user friendly way! 

![review](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/review.png)

Now that a review is written, clicking submit adds that revierw to the database, and redirects the user to the page of the review that they had written. Dont fear if there are spelling errors or you no longer agree with what you stated! Its as easy as clicking the edit or delete buttons to change the review from what it was to what you may like it to be. 


## Challenges

One of the more challenging things to impliment in this application was the user authentication. Maintaining a users image and profile upon refresh, encrypting their passwords, showing errors when invalid info was entered and using geolocation to get their city name was fun and difficult in ways I could not have predicted. As Yelp is a site of a different era in many ways, many of the sites features were outdated other than the user login/signup page. Here, I spent more time than anywhere else making sure that it was as pixel perfect as possible.

![user auth](https://github.com/Speneki/yuup/blob/master/app/assets/images/yuup%20images/userAuth.png)

One of the more tricky parts of creating Yuup was finding ways to user geolocation in multiple spots around the page. As each user enters only their zip code, but each review show the users city name, I needed to use google maps api to return the right information. Setting the city name to each individual reviews slice of state, interpolating the zip into a request and indexing through the received geolocation response while encrypting my google maps key was a unique exercise in following the API requirements of external code. The docs became my dear friends, and this code snipped got me exactly the information I needed:


``` 
componentDidMount () {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.user[0].location + '&key=' + window.key + '&sonsor=true').then((response) => {
            this.setState({cityName: response.results[0].address_components[2].long_name})
        })
    }
 ```
   



