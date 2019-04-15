var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/post', function (req, res) {
	console.log("[POST] Successful post request")
});

// Recast will send a post request to /errors to notify errors
app.post('/errors', (req, res) => {
   console.error(req.body);
   res.sendStatus(200); 

});

app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`)); 