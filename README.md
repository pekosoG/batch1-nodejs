
### Batch 1  - Node JS Lesson
[Express Generator](https://expressjs.com/en/starter/generator.html)
------

We are going to use Express Generator for this example, to init the  scafolding, we run the following command:
```
#> express <app-name>
```

We install the sequelize-cli ORM
```
#> sudo npm install -g --save-dev sequelize-cli
```

Once we installed, we create the initial file on the app root folder:
```
#>touch create .sequelizerc
```

with the following content:

```
var path = require('path');

module.exports = {
    'config':path.resolve('./config','databse.js'),
    'migrations-path':path.resolve('./db','migrations'),
    'models-path':path.resolve('./db','models'),
    'seeders-path':path.resolve('./db','seeders')
}
```

Once we initialize it
```
#> sequelize init
```

Then, we create a model
```
#> sequelize model:create --name <model> --attributes <att-name>:<type>,<att-name2>:<type>
```
