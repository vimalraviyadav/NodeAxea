const experss =require('express');
const app = express();
app.get('/', (req,res)=> {
console.log("tes");
});

const PORT = 3000;
app.listen(PORT, () => {
console.log(`server running on port ${PORT}`);
});
