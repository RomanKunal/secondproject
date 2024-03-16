const lista=["I am a footer","I am not a footer","What is footer"];
function getrandom(max){
    return Math.floor(Math.random()*(max+1));
}
export default function Footer(){
    return <h4 className="head4">you want this take it then{lista[getrandom(2)]}</h4>
}