# StreetFleet (WebClient)

> A way of tracking and managing your vehicles.

StreetFleet is an app that tracks the position of vehicles in real time and provides data about their trips, times, distance traveled and vehicle information.

![App screenshot](https://github.com/nikwib/streetfleet-webclient/blob/develop/screenshots/HomePage.jpg)
![App screenshot](https://github.com/nikwib/streetfleet-webclient/blob/develop/screenshots/MapView.jpg)
![App screenshot](https://github.com/nikwib/streetfleet-webclient/blob/develop/screenshots/FleetOverview.jpg)

## Getting Started
To run locally:
2) Clone && `npm install` from the root file.
1) Follow the instruction for the [backend server](https://github.com/nikwib/streetfleet-backend) and [microserver queue](https://github.com/nikwib/streetfleet-mq) and [mobile](https://github.com/nikwib/streetfleet-mobile)
3) Follow [these instructions](https://developers.google.com/maps/documentation/javascript/get-api-key) to get a Google Maps API key
4) Run `npm start`

## Tech Stack

* [React](reactjs.org) + [Redux](redux.js.org)
* [Bootstrap](getbootstrap.com)

## System Diagram
The system architecture for streetfleet is build around a main server and a micro sever. The main server serves the location data coming in from the Phones (IoT) and opens a socket to send live location data to be displayed in the web client. The main server also relays the location data to the micro server that tracks each incoming location and fills up a queue (Redis) for each IoT device. After a set time period passed (15 min) and the location data for a device have not changed, its queue is processed to determine distance and travel time. Each received GPS coordinate is saved to the main Mongo database that is used to displaying a detailed travel route in the web client.  
![App architecture](https://github.com/nikwib/streetfleet-backend/blob/develop/Architecture.jpg)

## Future plans

* Make responsive
* Get data from [Arduino boards](www.arduino.cc)

## Contributors

Pull requests are welcome. By participating in this project, you agree to abide by the [thoughtbot code of conduct](https://thoughtbot.com/open-source-code-of-conduct)

Fork, then clone the repository. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License
