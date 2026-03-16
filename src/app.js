const app = express();

const errorHandler = require("./middleware/errorHandler.js");

app.use(errorHandler);

app.listen(8000, function(){
    console.log("Example app listening on port 8000!")
});

