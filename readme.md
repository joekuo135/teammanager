
## **Launch WorkFlow**

* Have at least 2 terminals up and running
* *make sure to commit changes as needed.*
* Before starting: 
    * Set up server folder.
    * Do step 1, 2, 3 of **Angular Workflow Section**
    * Then Do Step 0 to 5 of **Node Workflow Section**
    * Then Do a Launch using the steps below.
    * if successful test launch proceed to the next workflow sections.
#### Terminal 1
```
cd public
ng build -w
```
#### Terminal 2
```
cd ..
nodemon server.js
```
---

## **Node Server Initial Workflow**
0. Start git repo and ensure you have the right .gitignore settings.

1. Determine required modules then **npm install**.
Terminal **npm install** Commands:
    ```
    npm init -y
    npm install express ejs body-parser mongoose --save
    npm install express-session --save
    npm install socket.io --save
    npm install moment --save
    npm install bcrypt --save
    ```

2. Modify server.js. *Uncomment/comment sections, change folder names as needed.*


3. Modify database name in /server/config/mongoose.js

4. Establish model schemas and associations in /server/models. *Make sure to rename model files appropriately*
    ```javascript
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const SampleUserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required'],
            minlength: [5, 'Minimum of 5 characters only is required']
        },
        samples: [{type: Schema.Types.ObjectId, ref: 'Item'}]
    }, {timestamps: true})
    const SampleUser = mongoose.model('SampleUser', SampleUserSchema);
    ```

5. Establish database service methods (i.e., CRUD methods) in /server/controllers. *Ensure that they are using correct Schemas. Name files appropriately*

    ```javascript
    let mongoose = require('mongoose');
    let User = mongoose.model('User');
    let Item = mongoose.model('Item');

    module.exports = {
        getAllUsers : (req, res) => {
            User.find({}, (error, users) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('successful response: get all users')
                    response.json(users);
                }
            });
        },
    }
    ```

6. Establish Server's API endpoints in /server/config/routes.js. *Import the proper files.*

7. Commit changes

8. Launch server. *Refer to Launch Workflow Section*

9. **_Repeat step 4, 5, and 6 as needed._**
---
## **Angular Initial Workflow**
1. Create angular app in your project folder.
    ```
    ng new public --routing
    ```
2. Remove git repo made by angular-cli
3. Modify your angular app's .gitignore by erasing /dist to allow /dist folder to be committed.
4. Test angular app with server by doing an initial **Launch**. *Refer to Launch Workflow Section*

5. Create components and nesting components as needed.
    ```
    ng g c component-name
    ```
6. Create your Service.
    ```
    ng generate service service-name
    ```
* Commit changes
---
#### **Inside your Angular files**
7. On your app.module.ts, import required modules.
    ```javascript
    // Basic Angular modules
    import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
    import { HttpModule } from '@angular/http'; // <-- Import HttpModule
    ```

8. Also on your **app.module.ts**, import your service.
    ```javascript
    import { SampleService } from './sample.service';
    ```

9. In your **app-routing.module.ts**, establish your routes and nested routes. 
    ```javascript
    { path: 'sample', pathMatch: 'full', component: SampleComponent },
    { path: '', redirectTo: '/sample' }
    { path: 'users/:id', pathMatch: 'full', component: UsersComponent },
    ```

10. Modify your **sample.component.html** route links as needed.
    ```html
    <a [routerLink]="['sample']">Sample</a>
    <a [routerLink]="['users', user._id]">{{user.username}}</a>
    ```

11. In your app folder, create your angular models in files called sampleModelName.ts
    ```javascript
    export class Sample {
        constructor(
            public id: number = null,
            public title: string = '',
            public price: number = null,
            public image: string = '',
            public created_at: Date = new Date(),
            public updated_at: Date = new Date()
        ) {}
    }
    ```

11. On your **sample.component.html**:
    * apply/modify the appropriate forms.
        * Bind the right model each input field.
        * Establish a #variable for each input field.
        * Assign Validations and use variable to display errors.
    * apply/modify display of data as needed using *ngIf and *ngFor and {{}}.
    * apply the proper data binding [] and event handlings ().
    ```html
    <!--Form with error handling sample-->
    <form (submit)="onSubmit()">
    <input 
        type="text" 
        name="username"
        required
        minlength="5"
        [(ngModel)] = "user.username"
        #username = ngModel
        />
        <input type="submit" value="Login" [disabled] = "username.invalid"/>
    </form>
    <div style="color: red;" *ngIf="!username.valid && (username.dirty || username.touched)">
    <p *ngIf="username.errors.required">Username is Required</p> 
    <p *ngIf="username.errors.minlength">Username must be at least 5 characters long</p> 
    </div>
    ```

12. On your **sample.component.ts**:
    * import your models and other necessary third-party packages
    * apply/modify your logic by establishing your properties, dependency injections
    * then apply/modify yourmethods for handling of promises/observables, and property modifications.
    ```javascript
    import 'rxjs'; // for handling observables and interacting with URL parameter changes
    import { Router } from '@angular/router'; // to use this._router.navigate(['routeToAnotherComponent']);
    
    //for capturing url parameters
    import { Router, ActivatedRoute } from '@angular/router';
    import 'rxjs/add/operator/switchMap';
    ```

13. In your **sample.service.ts**: 
    * inject the http module then apply your api calls. 
        * *Http calls return observables. Convert to promises .toPromise() as needed*
    ```javascript
    import { Http } from '@angular/http';
    import 'rxjs'; // for converting to promise
    ```



14. **_Repeat step 11, 12, and 13 as needed._**

---


### **Code References Section**
```javascript
// Basic Node modules
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
```
```javascript
// Optional Node modules
const session = require('express-session');
const moment = require('moment');
const bcrypt = require('bcrypt');
const io = require('socket.io').listen(server);
```
```javascript
// code snippet for authentication logic
function authenticate(req, res, next) {
    if(req.session.username){
        next();
    }else {
        res.sendStatus(401);
    }
}

app.use(authenticate);
```
### **Using Moment Js in angular cli**
Inside public (angular folder), on your terminal:
```
npm install moment --save
```
then inside angular-cli.json
```
{
  ...
  "apps": [
     ...
     "scripts": [
        "../node_modules/moment/min/moment.min.js"
     ]
     ...
  ]
  ...
}
```
then in your app.component.ts (an example of how to import)
```javascript
import { Component } from '@angular/core';

import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  now;
  constructor() {
    this.now = moment(); // add this 2 of 4
    console.log('hello world', this.now.format()); // add this 3 of 4
    console.log(this.now.add(7, 'days').format()); // add this 4of 4
  }

}
```