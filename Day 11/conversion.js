function bool()
{
    console.log(Boolean(1));
    console.log(Boolean(0));
    console.log(Boolean(null));
    console.log(Boolean(undefined));
    console.log(Boolean("hello"));
    console.log(Boolean(1234));
}
function numb()
{
    console.log(Number("123"));
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number(null));
    console.log(Number(undefined));
    console.log(Number("Hello"));
}
function str()
{
    console.log(String(1234));
    console.log(String(null));
    console.log(String(undefined));
    console.log(String(true));
    console.log(String(false));
    
}
bool();
numb();
str();