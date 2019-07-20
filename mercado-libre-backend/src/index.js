const express = require('express');
const app = express();

//settings
app.set('port', 3000);

// calls
app.get('/', (req, res) => {

})

app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'))
});